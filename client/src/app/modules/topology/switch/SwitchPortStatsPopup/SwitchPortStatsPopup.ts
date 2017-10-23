/**
 * Created by yildirayme on 25.08.2016.
 */
import {Component, ElementRef, OnInit, AfterViewInit, OnDestroy} from "@angular/core";
import {BasePopupDataTablesPage} from "../../../../commons/BasePopupDataTablesPage/BasePopupDataTablesPage";
import {SwitchDTO} from "../../../../swagger/SwitchDTO";
import {TopologyApi} from "../../../../swagger/TopologyApi";
import {MODAL_SIZE} from "../../../ModalComponent";
import {PageServices} from "../../../PageServices";
import {PortDetail} from "../../../../swagger/PortDetail";
import {AddressInfo} from "../../../../swagger/AddressInfo";
import {StatsDetail} from "../../../../swagger/StatsDetail";
import {GenericIdRequest} from "../../../../swagger/GenericIdRequest";
import {SwitchResponse} from "../../../../swagger/SwitchResponse";
import {PORTCONFIG, PORTCONFIGDef} from "../../../../swagger/PORTCONFIG";
import {PORTSTATE, PORTSTATEDef} from "../../../../swagger/PORTSTATE";
import 'rxjs/add/operator/toPromise';

// Root Component
@Component({ moduleId: module.id,
    selector: 'SwitchPortStatsPopup',
    templateUrl: '../../../../commons/BasePopupDataTablesPage/BasePopupDataTablesPage.html',
    providers: []
})
export class SwitchPortStatsPopup extends BasePopupDataTablesPage<SwitchDTO,PortDetail> implements OnInit, AfterViewInit, OnDestroy {
    public loadingInPorgress;
    public refreshTimeout;

    constructor(public topologyApi: TopologyApi, baseServices: PageServices, elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.modalSize = MODAL_SIZE.FULL;
        this.isServerSide = false;//no server-side data request

        //populate i18n fields but exclude title, because we are going to define it here
        this.setI18NKey('network_vis.switch.port_list', {
            'title': ()=> this.t('title', {name: (this.data.name || this.data.id)})
        });

        this.setRowActions([
            this.createAction('@view_port', (itm: PortDetail)=> {
                this.logger.debug('View port #' + itm.number + ' action clicked');

            })
        ]);
    }

    ngOnChanges(e) {
        super.ngOnChanges(e);
        this.logger.info('something changed', e);
    }

    ngOnInit() {
        super.ngOnInit();
        this.startRefreshOperation();

    }

    ngAfterViewInit() {
        if (super.ngAfterViewInit()) {
            //Code here
            return true;
        }
        return false;
    }

    ngOnDestroy() {
        super.ngOnDestroy();
        clearInterval(this.refreshTimeout);
    }

    public loadSwitchDTO() {

        if (!this.loadingInPorgress) {
            this.loadingInPorgress = true;

            let request: GenericIdRequest = <GenericIdRequest>this.baseServices.apiHelper.genRequest({
                id: (this.data.enrichedDeviceId || this.data.id)
            });

            //this.baseServices.uiHelper.block('SwitchPortStatsPopup',this.getBlockingContainer(),false);
            this.topologyApi
                .topologySwitchGetPOST(request, false).toPromise()
                .then(
                    (res:SwitchResponse) => {
                        try {
                            if (this.baseServices.uiHelper.processResponse(res)) {
                                this.data = res.data;
                                this.$dataTableRef.clear();
                                this.$dataTableRef.rows.add(this.prepateData());
                                this.$dataTableRef.draw(false);
                            }
                        } catch (e) {
                            this.logger.error(e);
                        }
                    }
                ).catch((error)=>{
                    try {
                        this.baseServices.uiHelper.processResponse(error.body); //JSON parsing is handled in the function now
                    } catch (e) {
                        this.logger.error(e);
                    }
                    clearInterval(this.refreshTimeout);
                    setTimeout(()=> {
                        this.startRefreshOperation();
                    }, 10000);
                })
                .then(
                    ()=>{
                        //this.baseServices.uiHelper.unblock('SwitchPortStatsPopup');
                        this.loadingInPorgress = false;
                });
        }
    }

    getDataTableOptions() {
        //debugger;
        let dataset = this.prepateData();

        return {
            columns: [
                //{title: '<input type="checkbox" class="group-checkable icheck">', type:'html', name:'id'},
                {
                    title: this.ft('states'),
                    width: '5%',
                    orderable: false,
                    type: 'html',
                    name: 'status',
                    className: 'dt-center noclip no-auto-tooltip'
                },
                {
                    title: this.ft('configs'),
                    width: '5%',
                    orderable: false,
                    type: 'html',
                    name: 'configs',
                    className: 'dt-center noclip no-auto-tooltip'
                },
                {
                    title: "PORT_NUMBER",//dummy column for proper sorting
                    width: '0%',
                    orderable: true,
                    type: 'number',
                    name: 'number',
                    visible: false
                },
                {
                    title: this.ft('number'),
                    width: '5%',
                    orderable: true,
                    type: 'string',
                    name: 'number',
                    className: 'dt-center',
                    orderData : [2]
                },
                {title: this.ft('name'), width: '10%', orderable: true, type: 'string', name: 'name', className: 'dt-center'},
                {title: this.ft('address'), width: '15%', orderable: true, type: 'string', name: 'address'},
                {title: this.ft('linkType'), width: '10%', orderable: true, type: 'string', name: 'linkType'},
                {
                    title: "SPEED",//dummy column for proper sorting
                    width: '0%',
                    orderable: true,
                    type: 'number',
                    name: 'speed',
                    visible: false
                },
                {
                    title: this.ft('speed'),
                    width: '6%',
                    orderable: true,
                    type: 'string',
                    name: 'speed',
                    className: 'dt-center',
                    orderData : [7]
                },
                {
                    title: "RATES",//dummy column for proper sorting
                    width: '0%',
                    orderable: true,
                    type: 'number',
                    name: 'rates',
                    visible: false
                },
                {
                    title: this.ft('rates'),
                    width: '6%',
                    orderable: true,
                    type: 'string',
                    name: 'rates',
                    className: 'dt-center',
                    orderData : [9]
                },
                {
                    title: "PKG_SENT",//dummy column for proper sorting
                    width: '0%',
                    orderable: true,
                    type: 'number',
                    name: 'packets_sent',
                    visible: false
                },
                {
                    title: this.ft('packets_sent'),
                    width: '6%',
                    orderable: true,
                    type: 'string',
                    name: 'packets_sent',
                    className: 'dt-center',
                    orderData : [11]
                },
                {
                    title: "PKG_RECV",//dummy column for proper sorting
                    width: '0%',
                    orderable: true,
                    type: 'number',
                    name: 'packets_received',
                    visible: false
                },
                {
                    title: this.ft('packets_received'),
                    width: '6%',
                    orderable: true,
                    type: 'string',
                    name: 'packets_received',
                    className: 'dt-center',
                    orderData : [13]
                },
                {
                    title: "BYTES_SENT",//dummy column for proper sorting
                    width: '0%',
                    orderable: true,
                    type: 'number',
                    name: 'bytes_sent',
                    visible: false
                },
                {
                    title: this.ft('bytes_sent'),
                    width: '6%',
                    orderable: true,
                    type: 'string',
                    name: 'bytes_sent',
                    className: 'dt-center',
                    orderData : [15]
                },
                {
                    title: "BYTES_RECV",//dummy column for proper sorting
                    width: '0%',
                    orderable: true,
                    type: 'number',
                    name: 'bytes_received',
                    visible: false
                },
                {
                    title: this.ft('bytes_received'),
                    width: '6%',
                    orderable: true,
                    type: 'string',
                    name: 'bytes_received',
                    className: 'dt-center',
                    orderData : [17]
                },
                // {
                //     title: $.t('common.fields.actions'),
                //     width: '10%',
                //     orderable: false,
                //     type: 'html',
                //     defaultContent: '',
                //     className: 'action_cell'
                // }
            ],
            order: [
                [2, "asc"]
            ], // set first column as a default sort by asc
            searching: true,
            serverSide: false,
            data: dataset
        };
    }

    public prepateData() {
        let dataset = [];
        try {
            this.data.portInfo.portDetails.forEach((itm: PortDetail, idx)=> {
                let states = (itm.states) ? this.handleStateRuleIcons(itm.states) : (itm["status"] ? itm["status"] : "-");
                let configs = (itm.configs) ? this.handleConfigRuleIcons(itm.configs) : "-";
                dataset.push(
                    [
                        //'<input type="checkbox" value="' + itm.id + '" class="group-checkable icheck">',
                        states || "-",
                        configs || "-",
                        itm.number || "0",//used for proper sorting
                        this.renderPortNumber(itm.number),
                        itm.name || '-',
                        this.renderAddress(itm.address),
                        itm.linkType? this.baseServices.i18n.t('network_vis.topology.connectionTypes.'+itm.linkType) : '',
                        itm.speed || 0,
                        this.baseServices.uiHelper.formatBandwidth((itm.speed || 0) * 1000000),
                        this.renderRates(itm.stats,true),
                        this.renderRates(itm.stats),
                        this.renderPackets(itm.stats, 'sent',true),
                        this.renderPackets(itm.stats, 'sent'),
                        this.renderPackets(itm.stats, 'received',true),
                        this.renderPackets(itm.stats, 'received'),
                        this.renderBytes(itm.stats, 'sent',true),
                        this.renderBytes(itm.stats, 'sent'),
                        this.renderBytes(itm.stats, 'received',true),
                        this.renderBytes(itm.stats, 'received'),
                        //this.renderRowActions(idx, true)
                    ]
                );
            });
        } catch (e) {

        }
        return dataset;
    }

    public renderAddress(address: AddressInfo) {
        if (address) {
            let stringBuilder = [];
            if (address.mac) stringBuilder.push('MAC:' + address.mac);
            if (address.ipv4) stringBuilder.push('IPv4:' + address.ipv4);
            if (address.ipv6) stringBuilder.push('IPv6:' + address.ipv6);
            return stringBuilder.join('<br>');
        }
        return "-";
    }

    public renderRates(stats: StatsDetail,isOnlyValue:boolean=false) {
        if (stats && stats.rates) {
            if (isOnlyValue){
             return  stats.rates.sent || 0;
            } else {
                var stringBuilder = [
                    this.baseServices.uiHelper.formatBandwidth(stats.rates.sent),
                    this.baseServices.uiHelper.formatBandwidth(stats.rates.received)
                ];
                return stringBuilder.join(' - ');
            }
        }
        return isOnlyValue?0:"-";
    }

    public renderPackets(stats: StatsDetail, field: string,isOnlyValue:boolean=false) {
        if (stats && stats.packets && stats.packets[field]) {
            if (isOnlyValue){
                return stats.packets[field] || 0;
            } else {
                return this.baseServices.uiHelper.formatPackets(stats.packets[field]);
            }
        }
        return isOnlyValue?0:"-";
    }

    public renderBytes(stats: StatsDetail, field: string,isOnlyValue:boolean=false) {
        if (stats && stats.packets && stats.packets[field]) {
            if (isOnlyValue){
                return stats.packets[field] || 0;
            } else {
                return this.baseServices.uiHelper.formatBytes(stats.packets[field], 0);
            }
        }
        return isOnlyValue?0:"-";
    }

    public renderPortNumber(number: number) {
        return (number > 0) ? number : '0 - CTRL';
    }

    reload(reset: boolean = false) {
        this.logger.debug('Reload Switch Data!');
        this.loadSwitchDTO();
    }

    public startRefreshOperation() {
        this.loadingInPorgress = false;
        this.refreshTimeout = setTimeout(()=> {
            this.loadSwitchDTO();
        }, 1000);
    }

    // public getBlockingContainer() {
    //     return  this.$tableRef.closest('.table-body').find('.table-loader');
    // }

    handleConfigRuleIcons(itm: Array<PORTCONFIG>){
        let result = ['<div class="action_badges">'];
        let badge = (key)=>{
            let i18n = this.t("badges."+key);
            result.push('<span class="badge ',i18n.color,'" rel="tooltip" title="',i18n.title,'" >',i18n.badge,'</span>');
        };
        let empty =()=>{
            result.push('<span class="badge badge-default">&nbsp;</span>');
        };

        if(Object.keys(itm).length > 0){
            if(itm.indexOf(PORTCONFIG.PORT_DOWN) > -1){
                //result.push('<span class="badge badge-danger" rel="tooltip" title="' + this.t("messages.port_down") + '">P</span>');
                badge('port_down');
            }else{
                empty();
            }

            if(itm.indexOf(PORTCONFIG.NO_FWD) > -1){
                //result.push('<span class="badge badge-primary" style="text-decoration:line-through" rel="tooltip" title="' + this.t("messages.no_fwd") + '">F</span>');
                badge('no_fwd');
            }else{
                empty();
            }

            if(itm.indexOf(PORTCONFIG.NO_PACKET_IN) > -1){
                //result.push('<span class="badge badge-primary" style="text-decoration:line-through" rel="tooltip" title="' + this.t("messages.no_packet_in") + '">PI</span>');
                badge('no_packet_in');
            }else{
                empty();
            }

            if(itm.indexOf(PORTCONFIG.NO_RECV) > -1){
                //result.push('<span class="badge badge-primary" style="text-decoration:line-through" rel="tooltip" title="' + this.t("messages.no_recv") + '">R</span>');
                badge('no_recv');
            }else{
                empty();
            }
        } else {
            for(let i = 0; i < Object.keys(PORTCONFIGDef.map).length; i++){
                empty();
            }
        }

        result.push('</div>');

        return result.join('');
    }

    handleStateRuleIcons(itm: Array<PORTSTATE>){
        let result = ['<div class="action_badges">'];
        let badge = (key)=>{
            let i18n = this.t("badges."+key);
            result.push('<span class="badge ',i18n.color,'" rel="tooltip" title="',i18n.title,'" >',i18n.badge,'</span>');
        };
        let empty =()=>{
            result.push('<span class="badge badge-default">&nbsp;</span>');
        };

        if(Object.keys(itm).length > 0){
            if(itm.indexOf(PORTSTATE.BLOCKED) > -1){
                //result.push('<span class="badge badge-primary" rel="tooltip" title="' + this.t("messages.blocked") + '">B</span>');
                badge('blocked');
            }else{
                empty();
            }

            if(itm.indexOf(PORTSTATE.LINK_DOWN) > -1){
                //result.push('<span class="badge badge-danger" rel="tooltip" title="' + this.t("messages.link_down") + '">D</span>');
                badge('link_down');
            }else{
                empty();
            }

            if(itm.indexOf(PORTSTATE.LIVE) > -1){
                //result.push('<span class="badge badge-success" rel="tooltip" title="' + this.t("messages.live") + '">L</span>');
                badge('live');
            }else{
                empty();
            }

            if(itm.indexOf(PORTSTATE.STP_LISTEN) > -1){
                //result.push('<span class="badge badge-info" rel="tooltip" title="' + this.t("messages.stp_active") + '">S</span>');
                badge('stp_active');
            }else{
                empty();
            }
        } else {
            for(let i = 0; i < Object.keys(PORTSTATEDef.map).length; i++){
                empty();
            }
        }
        result.push('</div>');

        return result.join('');
    }
}
