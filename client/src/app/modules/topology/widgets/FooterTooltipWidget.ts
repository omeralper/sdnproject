/**
 * Created by ekinca on 25.07.2016.
 */
import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef, Input} from '@angular/core';
import {BasePage} from "../../../commons/BasePage";
import {PageServices} from "../../PageServices";
import {DocumentConverter} from "../../DocumentConverter";
import {AddressInfo} from "../../../swagger/AddressInfo";
import {SharedService} from "../../SharedService";
import {tooltipMode} from "./InfoTooltipWidget";
import {DEVICETYPE} from "../../../swagger/DEVICETYPE";
import {SessionManager} from "../../SessionManager";
import {NETWORKDEVICETYPE} from "../../../swagger/NETWORKDEVICETYPE";

//Example footerTooltipData = {mode:tooltipMode.TOPOLOGYELEMENTS, data:d};

@Component({ moduleId: module.id,
    selector: 'footer-tooltip-widget',
    templateUrl: './FooterTooltipWidget.html'
})
export class FooterTooltipWidget extends BasePage implements OnInit, OnDestroy, OnChanges, AfterViewInit {

    @Input() footerTooltipData;

    elementRef:ElementRef;
    divData:any;
    public footerTooltipDiv;

    languageCode: string;
    localizedLabelsMap: any = {
        'en': 'Status',
        'tr': 'Durum',
        'other': '?!'
    };

    constructor(elementRef:ElementRef, public baseServices:PageServices, sessionManager:SessionManager, public documentConverter:DocumentConverter, public sharedService: SharedService) {
        super(baseServices, elementRef);

        this.languageCode = sessionManager.language as string;

        this.elementRef = elementRef;
        this.setI18NKey('network_vis.topology');

        this.sharedService.footerTooltipEvent.subscribe((e)=>{
            this.footerTooltipData = {mode:tooltipMode.CONTROLLER, data: e};
            this.prepareTooltipData();
        });
    }

    ngOnChanges(e) {
        super.ngOnChanges(e);
        if(e.footerTooltipData.currentValue){
            if(e.footerTooltipData.currentValue.mode === tooltipMode.MOUSEOUT){
                if(this.footerTooltipDiv){
                    this.footerTooltipDiv.stop().animate({opacity: 0}, 3000, ()=> {
                        this.footerTooltipDiv.html("");
                    });
                }
            }else if(e.footerTooltipData.currentValue.mode === tooltipMode.TOPOLOGYELEMENTS){
                this.prepareTooltipData();
            }else{
                console.log("unknown tooltip mode");
            }
        }else{
            console.log("currentValue is not defined");
        }
    }

    footerRow(...args){//first one is supposed to be title
        let result = [];
        let d = args.shift();
        let title = args.shift();
        result.push("<span class=tool-head>" + $.t("network_vis.topology.footer_fields." + title) + " </span> ");

        for(let i = 0; i < args.length; i++){
           let res = this.documentConverter.returnNested(d, args[i]);
           if(this.documentConverter.isNotNullOrUndefined(res) && args[i].indexOf("address") > -1){
               res = this.renderAddresses(res);
               result.push(" <span class=tool-info-head>" + $.t("network_vis.topology.footer_fields." + args[i]) + ":</span>" + res);
           } else if(args[i] == "status" ){
               if(d.type == "Switch"){
                   res = this.baseServices.uiHelper.renderIcon("SWITCHSTATUS", res, { noButton : true});
               }else if(this.documentConverter.isHost(d.type)){
                   res = this.baseServices.uiHelper.renderIcon("HOSTSTATUS", res, { noButton : true});
               }else if(d.type == "Link"){
                   res = this.baseServices.uiHelper.renderIcon("LINKSTATUS", res, { noButton : true});
               }else if (this.documentConverter.isNetworkDevice(d.type)){
                   res = this.baseServices.uiHelper.renderIcon("NETWORKDEVICESTATUS", res, { noButton : true});
               }else if (this.documentConverter.isDomain(d.type)){
                   res = this.baseServices.uiHelper.renderIcon("DOMAINSTATUS", res, { noButton : true});
               }else if (this.documentConverter.isCloud(d.type)){
                   res = this.baseServices.uiHelper.renderIcon("WANSTATUS", res, { noButton : true});
               }

               result.push(" <span class=tool-info-head>" + $.t("network_vis.topology.footer_fields." + args[i]) + ":</span>" + res);
           } else {
               if(this.documentConverter.isNotNullOrUndefined(res) ){
                   result.push(" <span class=tool-info-head>" + $.t("network_vis.topology.footer_fields." + args[i]) + ":</span>" + res);
               }
           }
        }
        return result;
    }

    prepareTooltipData(){
        var d = this.footerTooltipData.data;
        var res:any = "";
        if (d.type === "Switch" && d.deviceInfo && d.deviceInfo.type) {
            res = d.deviceInfo.type == DEVICETYPE.LEGACY_SWITCH ? this.footerRow(d, "legacy_switch", "id", "status"/*, "port.address"*/) : this.footerRow(d, "switch", "id", "status"/*, "port.address"*/);
        } else if (this.documentConverter.isHost(d.type)) {
            res = this.footerRow(d, "host", "id", "name", "status", "port.address");
            //this.divData = {type:"host", data:d, address: this.renderAddresses(d.port.address)};
        } else if (d.type === "Link") {
            res = this.footerRow(d, "link", "status","srcPort.number","destPort.number");
        } else if (this.documentConverter.isNetworkDevice(d.type)){
            res = this.footerRow(d, "network_device", "id");
        }else if (this.documentConverter.isDomain(d.type)){
            res = this.footerRow(d, "domain", "id", "status");
        }else if(this.documentConverter.isCloud(d.type)){
            res = this.footerRow(d, "cloud", "id", "status");
        } else if(this.documentConverter.isBgpRouter(d.type)){
            res = this.footerRow(d, "bgp_router", "id");
        }

        this.footerTooltipDiv.html(res);
        return this.footerTooltipDiv.localize();
    }

    public renderAddresses(address:AddressInfo) {
        let strBufer = [];
        if (address) {
            //'mac', mac is used in ID field so no need to show here
            ['ipv4', 'ipv6'].forEach((fld)=> {
                if (address[fld]) strBufer.push(address[fld]);
            })
        }
        return strBufer.length > 0 ? strBufer.join('/') : '-';
    }

    ngOnInit() {
        super.ngOnInit();
    }

    ngAfterViewInit() {
        if (super.ngAfterViewInit()) {
            this.footerTooltipDiv = $(".topotooltip");
            return true;
        }
        return false;
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }


}
