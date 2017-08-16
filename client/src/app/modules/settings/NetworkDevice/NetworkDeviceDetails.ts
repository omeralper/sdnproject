/**
 * Created by ekinca on 24.03.2017.
 */
import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ChangeDetectorRef, Input, Output, EventEmitter} from "@angular/core";
import {PageServices} from "../../PageServices";
import {NetworkDeviceDTO} from "../../../swagger/NetworkDeviceDTO";
import {NETWORKDEVICETYPE} from "../../../swagger/NETWORKDEVICETYPE";
import {ListOptions} from "../../../swagger/ListOptions";
import {GenericListRequest} from "../../../swagger/GenericListRequest";
import {TopologyApi} from "../../../swagger/TopologyApi";
import {DIALOG_TYPES} from "../../UIHelper";
import {DocumentConverter} from "../../DocumentConverter";
import {PORTSTATE} from "../../../swagger/PORTSTATE";
import {BasePage} from "../../../commons/BasePage";

@Component({
    moduleId: module.id,
    selector: 'device-details',
    templateUrl: './NetworkDeviceDetails.html'
})
export class NetworkDeviceDetails extends BasePage implements OnInit, AfterViewInit, OnDestroy {
    regEx = {
        mac: '^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$',
        port: '^[0-9]{1,5}$',
        ip: '^(?:[0-9]{1,3}\.){3}[0-9]{1,3}\/[0-9]{1,2}$'
    };

    NETWORKDEVICETYPE = NETWORKDEVICETYPE;
    public vlanid;
    public switches;
    public switchListBox;
    public portNo;
    public types = [];
    public deviceIp;

    @Input() selectedDevice: NetworkDeviceDTO;

    constructor(public dc: DocumentConverter, public changeDetector: ChangeDetectorRef, public topologyApi: TopologyApi, baseServices:PageServices, elementRef:ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('settings.networkDevice.edit');

        for (let enumMember in NETWORKDEVICETYPE) {
            if ( isNaN( parseInt( enumMember )) && enumMember != 'VRR'){
                this.types.push(enumMember);
            }
        }

    }

    ngOnInit() {
        super.ngOnInit();
    }

    ngOnChanges(e) {
        super.ngOnChanges(e);
        console.log(e);
    }

    ngAfterViewInit() {
        if (super.ngAfterViewInit()) {
            this.switchListBox = $('#details-switch-list');

            // if(this.selectedDevice){
            //     this.selectedDevice.type = this.types[0];
            // }else{
            //     this.vlanid = (this.selectedDevice.vlanid == -1) ? "" : this.selectedDevice.vlanid;
            //     this.mac = this.selectedDevice.mac;
            //     this.ipv4 = this.selectedDevice.ip;
            //     this.portNo = this.selectedDevice.port.number;
            //     if(this.selectedDevice.type == NETWORKDEVICETYPE.VRR){
            //         setTimeout(()=>{
            //             this.$redundancyDevicesSelectBox = $('#redundancy-devices')
            //             this.$redundancyDevicesSelectBox.selectpicker("refresh");
            //             this.$redundancyDevicesSelectBox.val(this.selectedDevice.redundancyDevices.map((v)=> v.id));
            //         },50);
            //
            //     }
            // }
            let request = this.baseServices.apiHelper.genRequest({
                options: <ListOptions>{
                    startPage: 0,
                    pageSize: 0,
                    sortOptions: {fieldName: 'name', isAscend: true},
                }
            });

            this.topologyApi
                .topologySwitchListPOST(<GenericListRequest>request)
                .subscribe(
                    (res) => {
                        if(this.baseServices.uiHelper.processResponse(res)){
                            let switchDTOList = res.data.list;
                            this.switches = switchDTOList.map((v)=>{return v.id;});
                            this.changeDetector.detectChanges();
                        }
                    }
                );
            return true;
        }
        return false;
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }


    checkNetworkDeviceValidity(){
        let form:any =  $('form',this.elementRef.nativeElement)[0];
        if(!form.checkValidity()){
            this.baseServices.uiHelper.notify($.t('common.messages.validation_error'),DIALOG_TYPES.WARNING);
            return false;
        }
        return true;
    }

    regexValidation(evt, type) {
        let regEx = new RegExp(this.regEx[type]);
        evt.target.setCustomValidity("");
        evt.target.value.split(',').forEach((value) => {
            if (value && !regEx.test(value)) {
                evt.target.setCustomValidity(" ");
            }
        });
        if (evt.target.validity.valid) {
            $(evt.target).removeClass('validation-error');
        } else {
            $(evt.target).addClass('validation-error');
        }
        this.checkAllValidation();
    }

    checkAllValidation() {
        this.selectedDevice['valid'] = true;
        $('#networkDeviceDetails input', this.elementRef.nativeElement).each((i, input: HTMLInputElement) => {
            if (!input.validity.valid)
                this.selectedDevice['valid'] = false;
        });
    }
}

