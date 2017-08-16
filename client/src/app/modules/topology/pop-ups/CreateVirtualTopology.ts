/**
 * Created by ekinca on 30.05.2016.
 */
import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ChangeDetectorRef, ViewChild} from '@angular/core';
import {BasePopupEditPage} from "../../../commons/BasePopupEditPage/BasePopupEditPage";
import {PageServices} from "../../../modules/PageServices";
import {AAASTATUS} from "../../../swagger/AAASTATUS";
import {DIALOG_TYPES} from "../../../modules/UIHelper";
import {EnumHelper} from "../../../commons/EnumHelper";
import {UI_SECURITY_LEVELS} from "../../../commons/enums/UI_SECURITY_LEVELS";
import {TopologyInfoDTO} from "../../../swagger/TopologyInfoDTO";
import {MODAL_SIZE} from "../../../modules/ModalComponent";
import {MvtnApi} from "../../../swagger/MvtnApi";
import {GenericIdRequest} from "../../../swagger/GenericIdRequest";
import {TopologyGatewayDTO} from "../../../swagger/TopologyGatewayDTO";
import {TOPOLOGYSTATUS} from "../../../swagger/TOPOLOGYSTATUS";
import {MVTNTYPE} from "../../../swagger/MVTNTYPE";
import {UniquenessControlDTO} from "../../../swagger/UniquenessControlDTO";
import {UniquenessControlRequest} from "../../../swagger/UniquenessControlRequest";
import {UNIQUENESSTYPE} from "../../../swagger/UNIQUENESSTYPE";
import {TopologyRequest} from "../../../swagger/TopologyRequest";
import {TopologyApi} from "../../../swagger/TopologyApi";
import {TOPOLOGYTYPE} from "../../../swagger/TOPOLOGYTYPE";
import {TopologyOptions} from "../../../swagger/TopologyOptions";
import {WanMvtnInfoApi} from "../../../swagger/WanMvtnInfoApi";
import {WanMvtnInfoRequest} from "../../../swagger/WanMvtnInfoRequest";
import {WanMvtnInfoDTO} from "../../../swagger/WanMvtnInfoDTO";
import {LanMvtnInfoDTO} from "../../../swagger/LanMvtnInfoDTO";
import 'rxjs/add/operator/toPromise';
import {ListOptions} from "../../../swagger/ListOptions";
import {GenericListRequest} from "../../../swagger/GenericListRequest";
import {MVTNSTATUS} from "../../../swagger/MVTNSTATUS";

export enum VTNPOPUPMODE{
    MVTN,
    WAN
}


// Root Component
@Component({ moduleId: module.id,
    selector: 'PathConfirmationPopup',
    templateUrl: './CreateVirtualTopology.html',
    providers: []
})
export class CreateVirtualTopology extends BasePopupEditPage<TopologyInfoDTO> implements OnInit, AfterViewInit, OnDestroy {

    MVTNSTATUS = MVTNSTATUS;
    VTNPOPUPMODE = VTNPOPUPMODE;
    mode: VTNPOPUPMODE;

    submitted = false;

    securityLevels = EnumHelper.getValues(UI_SECURITY_LEVELS);
    statuses = EnumHelper.getNames(AAASTATUS);
    uniqueness: boolean;
    currentName: string;
    currentVlan: number;

    virtualTopologyName: any;
    virtualTopologyVlanTag: any;
    addressRanges: string;
    dnsServers:string;
    macAddressList: string;
    l4Ranges: string;
    bandwidth;
    bandwidthUnit: string;
    modalSize: MODAL_SIZE = MODAL_SIZE.LARGE;

    result: TopologyInfoDTO;

    gateway:TopologyGatewayDTO = {
        gatewayRequired:false,
        gatewayIp:'',
        gatewaySubnet:''
    };

    uniquenessControll:UniquenessControlDTO = {
        fieldName: '',
        value: ''
    };

    public static ValidIpAddressRegex = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
    public static ValidIpAddressRangeRegex = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\/[0-9]{1,2}$/;
    public static ValidHostnameRegex = /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/;
    public static regEx = {
        mac: [/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/],
        port: [/^[0-9]{1,5}$/],
        ip : [CreateVirtualTopology.ValidIpAddressRangeRegex],//[/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}\/[0-9]{1,2}$/],
        hostname: [CreateVirtualTopology.ValidIpAddressRegex,CreateVirtualTopology.ValidHostnameRegex]
    };
    public $select:JQuery;
    @ViewChild('bandWidth') bandWidth;

    //wan related fields
    lanMvtnInfos: any;
    lanMvtnInfoInputs = {};
    wanData: WanMvtnInfoDTO;
    virtualNetworks: Array<any>;
    selectedVTN;

    private tempData: TopologyInfoDTO;

    constructor(baseServices:PageServices, elementRef:ElementRef, public changeDetector: ChangeDetectorRef, public mvtnApi: MvtnApi, public topologyApi: TopologyApi, private wanMvtnApi: WanMvtnInfoApi) {
        super(baseServices, elementRef);

        this.lanMvtnInfos = (this.data as any).lanMvtnInfos;
        this.mode = (this.data as any).mode == VTNPOPUPMODE.WAN ? VTNPOPUPMODE.WAN : VTNPOPUPMODE.MVTN;

        if((this.data as any).mode == VTNPOPUPMODE.WAN){
            this.wanData = (this.data as any).data || ({type: TOPOLOGYTYPE.VIRTUAL} as TopologyInfoDTO);
            if(this.wanData.id){
                this.virtualTopologyName = this.wanData.name;
                this.virtualTopologyVlanTag = this.wanData.topoInfo.vlanTag;
                this.data = this.wanData.topoInfo;
            }
        }

        if(this.mode === VTNPOPUPMODE.WAN){
            if(this.wanData.id){
                this.setI18NKey('network_vis.topology.create_virtual_topology_popup', {'title': () => this.i18n.t("wan_vtn_management.actions.edit_wan.title")});
            }else{
                this.setI18NKey('network_vis.topology.create_virtual_topology_popup', {'title': () => this.i18n.t("wan_vtn_management.actions.create_wan.title")});
            }
        }else{
            this.setI18NKey('network_vis.topology.create_virtual_topology_popup');
        }

        this.logger.debug('Data received:', this.data);

        this.setFormActions([
            this.createAction('dialogs.actions.ok', ()=> {
                this.logger.debug('OK clicked');
                this.save();
            }),
            this.createAction('dialogs.actions.cancel', ()=> {
                this.logger.debug('Cancel clicked');
                this.close();
            })
        ]);

        this.virtualNetworks = [{name: this.t('local_network'), isLocal: true}];
    }

    ngOnInit() {
        //debugger;
        super.ngOnInit();
        if(this.mode === VTNPOPUPMODE.MVTN){
            this.populateWANList();
        }

        if( (this.mode === VTNPOPUPMODE.MVTN && this.data.id) || (this.mode === VTNPOPUPMODE.WAN && this.wanData.id) ){

          if(this.mode === VTNPOPUPMODE.WAN){
              this.handleCheckedInputs();
          }else{
              let request = this.baseServices.apiHelper.genRequest({
                  options:<TopologyOptions> this.baseServices.apiHelper.genDTO(
                      {
                          type: TOPOLOGYTYPE.VIRTUAL,
                          id: this.data.id
                      }
                  )
              });

              this.topologyApi
                  .topologyGetPOST(<TopologyRequest>request)
                  .subscribe(
                      (res) => {
                          if(this.data.ipAddressess)
                              this.addressRanges = this.data.ipAddressess.join("\n");

                          if(this.data.dnsServers)
                              this.dnsServers = this.data.dnsServers.join("\n");

                          if(this.data.macAddresses)
                              this.macAddressList = this.data.macAddresses.join("\n");

                          if(this.data.portRanges)
                              this.l4Ranges = this.data.portRanges.join("\n");

                          if(this.data.name)
                              this.virtualTopologyName = this.data.name;

                          if(this.data.vlanTag)
                              this.virtualTopologyVlanTag = this.data.vlanTag;

                          if(this.data.topologyGateway)
                              this.gateway = this.data.topologyGateway;

                          if(this.data.bandwidth<100000){
                              this.bandwidth = this.data.bandwidth/1000;
                              this.bandwidthUnit = "KBPS";
                          }
                          else if(this.data.bandwidth<100000000){
                              this.bandwidth = this.data.bandwidth/1000000;
                              this.bandwidthUnit = "MBPS";
                          }
                          else{
                              this.bandwidth = this.data.bandwidth/1000000000;
                              this.bandwidthUnit = "GBPS";
                          }
                          this.currentName = res.data.info.name;
                          this.currentVlan = res.data.info.vlanTag;
                      }
                  );
          }
        }
        else{
            let topologyID = this.baseServices.apiHelper.genRequestID();
            this.data = <TopologyInfoDTO> this.baseServices.apiHelper.genDTO({
                    id: topologyID,// result.data,
                    status: this.data.status || TOPOLOGYSTATUS.DESIGNED,
                    type: this.data.type,
                    name: '',
                    vlanTag: '',
                    maximumNumberOfUser: 10,
                    bandwidth: 2000000,
                    switchSecurityLevel: 1,
                    linkSecurityLevel: 1,
                    jitter: 0,
                    delay: 100,
                    packetLossRate: 0,
                    collision: 0,
                    ipAddressess: [],
                    dnsServers: [],
                    macAddresses: [],
                    portRanges: [],
                    stats: null,
                    alarms: [],
                    activeSince: new Date(),
                    weight: 0,
                    maxDepth: 0,
                    elementCountPerDepth: [],
                    mvtnType: MVTNTYPE.DYNAMIC
                });
            this.makeRequest();
        }
    }

    ngOnChanges(e) {
        super.ngOnChanges(e);
    }

    ngAfterViewInit() {
        if (super.ngAfterViewInit()) {
            $('#tab2Datatable').DataTable(
                {
                    searching: false
                }
            );
            return true;
        }
        return false;
    }

    regexValidation(evt, type) {
        let regExList = CreateVirtualTopology.regEx[type];
        let values = evt.target.value.split('\n');
        if (values.length>0) {
            let result = false;
            regExList.forEach((regEx) => {
                let check = true;
                values.forEach((value) => {
                    check = check && (!value || regEx.test(value));
                });
                result = check || result;
            });

            if (!result) {
                evt.target.setCustomValidity(" ");
                $(evt.target).addClass('validation-error');
                return;
            }
        }
        evt.target.setCustomValidity("");
        $(evt.target).removeClass('validation-error');
    }

    ngOnDestroy(){
        super.ngOnDestroy();
    }

    makeRequest() {
        let request = this.baseServices.apiHelper.genRequest({});

        this.mvtnApi
            .virtualGetParametersPOST(<GenericIdRequest>request)
            .subscribe(
                (res) => {
                    this.result = res.data;

                    if (this.baseServices.uiHelper.processResponse(res)) {
                        if(this.result.bandwidth<100000){
                            this.bandwidth = this.result.bandwidth/1000;
                            this.bandwidthUnit = "KBPS";
                        }
                        else if(this.result.bandwidth<100000000){
                            this.bandwidth = this.result.bandwidth/1000000;
                            this.bandwidthUnit = "MBPS";
                        }
                        else{
                            this.bandwidth = this.result.bandwidth/1000000000;
                            this.bandwidthUnit = "GBPS";
                        }
                        this.data.maximumNumberOfUser = this.result.maximumNumberOfUser;
                        this.data.switchSecurityLevel = this.result.switchSecurityLevel;
                        this.data.linkSecurityLevel = this.result.linkSecurityLevel;
                        this.data.jitter = this.result.jitter;
                        this.data.delay = this.result.delay || 0;
                        this.data.packetLossRate = this.result.packetLossRate;
                        this.data.collision = this.result.collision;
                        this.changeDetector.detectChanges();
                    }
                }
            );
    }

    changeBandWith(){
        this.changeDetector.detectChanges();
        this.bandWidth.nativeElement.dispatchEvent(new Event('keyup'));
        this.bandWidth.nativeElement.dispatchEvent(new Event('change'));
    }

    finaliseParams(){
      this.data.ipAddressess = [];
      this.data.dnsServers = [];
      this.data.macAddresses = [];
      this.data.portRanges = [];

      if(this.addressRanges)
        this.data.ipAddressess = this.addressRanges.split("\n");
      if(this.dnsServers)
        this.data.dnsServers = this.dnsServers.split("\n");
      if(this.macAddressList)
        this.data.macAddresses = this.macAddressList.split("\n");
      if(this.l4Ranges)
        this.data.portRanges = this.l4Ranges.split("\n");
      if(this.virtualTopologyName)
        this.data.name = this.virtualTopologyName;
      if(this.virtualTopologyVlanTag)
        this.data.vlanTag = this.virtualTopologyVlanTag;
      if(this.bandwidthUnit === "KBPS") {
        this.data.bandwidth = this.bandwidth*1000;
      }
      else if(this.bandwidthUnit === "MBPS"){
        this.data.bandwidth = this.bandwidth*1000000;
      }
      else{
        this.data.bandwidth = this.bandwidth*1000000000;
      }

      if (this.gateway.gatewayRequired){
        this.data.topologyGateway = this.gateway;
      }

      if(this.mode === VTNPOPUPMODE.MVTN){
          // store wanMvtnId here to use it later on when saving virtual topology
          this.data["wanMvtn"] = this.selectedVTN;
          this.close(true, this.data);
      }else{
          this.data.type = TOPOLOGYTYPE.VIRTUAL;
          let selectedInputs = this.handleInputBoxes();
          let req: WanMvtnInfoRequest = this.baseServices.apiHelper.genRequest({
              data: {
                  name: this.data.name,
                  topoInfo: this.data,
                  lanMvtnInfos: selectedInputs
              }
          });


          this.wanMvtnApi.wanMvtnCreatePOST(req).subscribe((res)=>{
                if(this.baseServices.uiHelper.processResponse(res)){
                    this.close(true);
                }
          });
      }
    }

    handleCheckedInputs(){
        //check the selected ones
        if(this.wanData.lanMvtnInfos){ //this.data.lanMvtnInfos is the selected ones
            this.wanData.lanMvtnInfos.forEach((v: LanMvtnInfoDTO, i)=>{
                this.lanMvtnInfoInputs[v.domainName] = v;
            });
        }
    }

    inputCheckedHandler(i){
        if(this.data && (this.data as WanMvtnInfoDTO).lanMvtnInfos && (this.data as WanMvtnInfoDTO).lanMvtnInfos.length > 0){
            return (this.data as WanMvtnInfoDTO).lanMvtnInfos[i].isSelected;
        }
    }

    inputClicked($event, i){
        this.lanMvtnInfoInputs[i] = $event.target.checked;
    }

    handleInputBoxes(){
        let arr = [];
        for(let key in this.lanMvtnInfoInputs){
            if(this.lanMvtnInfoInputs[key]){
                arr.push(this.lanMvtnInfos[key]);
            }
        }
        return arr;
    }

    checkAllClicked(){ // TODO on click select them all and disable them all
        let clickedArr = this.handleInputBoxes();
        let lanLength = this.lanMvtnInfos.length;
        if(clickedArr && clickedArr.length > 0){ // if 1 clicked, click all
            for(let i = 0; i < lanLength; ++i){
                this.lanMvtnInfoInputs[i] = true;
            }
        }else{ // unselect all
            for(let i = 0; i < lanLength; ++i){
                this.lanMvtnInfoInputs[i] = false;
            }
        }
        this.changeDetector.detectChanges();
    }

    validateInputBoxes(){
        let arr = this.handleInputBoxes();
        return arr.length > 1;
    }

    populateWANList(){
        let request = this.baseServices.apiHelper.genRequest(<GenericListRequest>{
            options: <ListOptions>{
                startPage: 0,
                pageSize: 0
            }
        });

        this.wanMvtnApi.wanMvtnListPOST(request).toPromise().then((res)=>{
            if(this.baseServices.uiHelper.processResponse(res)){
                if(res.data.list && res.data.list.length > 0 ){
                    this.virtualNetworks = this.virtualNetworks.concat(res.data.list);
                    this.selectedVTN = this.data["selectedVTN"] ? this.data["selectedVTN"] : this.virtualNetworks[0];
                }else{
                    this.selectedVTN = this.virtualNetworks[0];
                }
            }else{
                this.selectedVTN = this.data["selectedVTN"] ? this.data["selectedVTN"] : this.virtualNetworks[0];
            }
        })
    }

    selectedVTNChange($event){
        if(this.selectedVTN.isLocal){ // If it was local
            this.tempData = this.data;
        }

        this.selectedVTN = $event;
        if(!this.selectedVTN.isLocal){ // If WAN now
            this.virtualTopologyName = (this.selectedVTN as WanMvtnInfoDTO).name;
            this.virtualTopologyVlanTag = (this.selectedVTN as WanMvtnInfoDTO).topoInfo.vlanTag;
            this.data = $.extend({}, this.data, (this.selectedVTN as WanMvtnInfoDTO).topoInfo);
        }else{ // If local now
            this.data = this.tempData;
            this.virtualTopologyName = this.data.name;
            this.virtualTopologyVlanTag = this.data.vlanTag;
        }
        this.changeDetector.detectChanges();
    }

    save() {
        this.uniqueness = true;

        let form: any = $('form', this.elementRef.nativeElement)[0];
        let inputVal = this.mode === VTNPOPUPMODE.MVTN ? true : this.validateInputBoxes();

        if (!form.checkValidity()) {
            this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
            return;
        }

        if (!inputVal) {
            this.baseServices.uiHelper.notify($.t('common.messages.wan_selection_error'), DIALOG_TYPES.WARNING);
            return;
        }

        for (let x = 0; x < 2; x++) {
            if (x == 0) {
                this.uniquenessControll.fieldName = 'mvtn_name';
                this.uniquenessControll.value = this.virtualTopologyName;
            } else if (x == 1) {
                this.uniquenessControll.fieldName = 'vlan_tag';
                this.uniquenessControll.value = this.virtualTopologyVlanTag.toString();
            }

            let request = this.baseServices.apiHelper.genRequest({
                data: <UniquenessControlDTO> {
                    fieldName: this.uniquenessControll.fieldName,
                    value: this.uniquenessControll.value
                }
            });

            this.mvtnApi
                .virtualValidatePOST(<UniquenessControlRequest>request)
                .subscribe(
                    (res) => {
                        if (res.data === UNIQUENESSTYPE.NON_UNIQUE) {
                            if (x == 0) {
                                if (!this.data.id) {
                                    this.baseServices.uiHelper.notify(this.t('unique_name_err'), DIALOG_TYPES.WARNING);
                                    this.uniqueness = false;
                                    return;
                                } else if (this.currentName !== this.virtualTopologyName) {
                                    this.baseServices.uiHelper.notify(this.t('unique_name_err'), DIALOG_TYPES.WARNING);
                                    this.uniqueness = false;
                                    return;
                                }
                            } else if (x == 1) {
                                if (!this.data.id) {
                                    this.baseServices.uiHelper.notify(this.t('unique_vlan_err'), DIALOG_TYPES.WARNING);
                                    this.uniqueness = false;
                                    return;
                                } else if (this.currentVlan != this.virtualTopologyVlanTag) {
                                    this.baseServices.uiHelper.notify(this.t('unique_vlan_err'), DIALOG_TYPES.WARNING);
                                    this.uniqueness = false;
                                    return;
                                } else if (this.uniqueness) {
                                    this.finaliseParams();
                                }
                            }
                        } else if (this.uniqueness == true && x == 1) {
                            this.finaliseParams();
                        }
                    }
                );
        }
    }
}
