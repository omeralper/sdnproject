/**
 * Created by ekinca on 16.01.2017.
 */
import { Component, Input, Output, OnChanges, SimpleChange, AfterViewInit, OnInit, OnDestroy, ElementRef, ChangeDetectorRef, EventEmitter, ViewChild } from '@angular/core';
import {BasePage} from "../../../commons/BasePage";
import {PageServices} from "../../../modules/PageServices";
import {ListOptions} from "../../../swagger/ListOptions";
import {DeviceProfileListResponse} from "../../../swagger/DeviceProfileListResponse";
import {MvtnApi} from "../../../swagger/MvtnApi";
import {SwitchDTO} from "../../../swagger/SwitchDTO";
import {DeviceProfileDTO} from "../../../swagger/DeviceProfileDTO";
import {DIALOG_TYPES} from "../../../modules/UIHelper";
import {DocumentConverter} from "../../../modules/DocumentConverter";
import {LinkDTO} from "../../../swagger/LinkDTO";
import {PortDetail} from "../../../swagger/PortDetail";
import {TopologyData} from "../topology.config";
import {TOPOLOGYTYPE} from "../../../swagger/TOPOLOGYTYPE";
import {CREATESHOWENUM} from "../view/TopologyPage";
import {MvtnPortInfo} from "../../../swagger/MvtnPortInfo";

@Component({ moduleId: module.id,
    selector: 'node-editor',
    templateUrl: './NodeEditorComponent.html'
})
export class NodeEditorComponent extends BasePage implements OnInit, OnDestroy, OnChanges, AfterViewInit, OnChanges {
    @Input() selectedElementToEdit:any;
    @Input() height:any;
    @Input() topologyData: TopologyData;

    @Output() onRenderTrigger = new EventEmitter<any>(); //onRenderTrigger

    @Output() resetState = new EventEmitter<any>(); //resetSelectedElementState
    cancelEdit(){this.resetState.emit();}

    @Output() deleteElement = new EventEmitter<any>(); //deleteElement
    deleteSelectedElement(){this.deleteElement.emit();}

    @Output() refreshTopology = new EventEmitter<any>();//refreshTopology
    refreshSelectedTopology(){this.refreshTopology.emit()};

    @Output() createAndSaveSelectedTopology = new EventEmitter<any>();//createAndSendVirtualTopology
    createAndSendVirtualTopology(){this.createAndSaveSelectedTopology.emit()};

    @Output() topologyEditPopup = new EventEmitter<any>();//topologyEditPopup
    emitTopologyEditPopup(){this.topologyEditPopup.emit()};

    //switch related fields
    optionList;
    profileId;
    portsOfProfile;
    $selectpicker;
    selectedPorts;

    //link related fields
    sourceBandwidth;
    sourceBandwidthByBit;
    sourceBandwidthUnit;
    targetBandwidth;
    targetBandwidthByBit;
    targetBandwidthUnit;
    sourceForSelectedElement;
    targetForSelectedElement;
    @ViewChild('sourceBW') sourceBW;
    @ViewChild('targetBW') targetBW;

    //common fields
    securityLevel;

    constructor(baseServices:PageServices, elementRef:ElementRef, public mvtnApi:MvtnApi, public cdr: ChangeDetectorRef, public dc: DocumentConverter) {
        super(baseServices, elementRef);
        this.setI18NKey('network_vis.topology.node_properties');
    }

    ngOnInit() {
        super.ngOnInit();
    }

    ngOnChanges(changes: {[propKey: string]: SimpleChange}) { //TODO RESET ALL FIELDS
        super.ngOnChanges(changes);
        for (let propName in changes) {
            if(propName == "selectedElementToEdit"){
                let changedProp = changes[propName];
                console.info(this.selectedElementToEdit);
                if(changedProp.currentValue && changedProp.currentValue.type){ // changedProp.currentValue might be a change of topology
                    switch(changedProp.currentValue.type){
                        case "Switch":
                            this.selectedElementToEdit = changedProp.currentValue;
                            this.switchOperations();
                            break;
                        case "Link":
                            this.selectedElementToEdit = changedProp.currentValue;
                            this.linkOperations();
                            break;
                    }
                    //this.cdr.detectChanges();//<- Expression has changed after it was checked problem
                }else{
                    console.log("UNDEFINED TYPE");
                }
            }
        }
    }

    ngAfterViewInit(){
        return super.ngAfterViewInit();
    }

    /*******************************SWITCH**************************/
    switchOperations(){
        this.selectedPorts = [];
        //name = html binding

        //profile and ports
        let deviceProfileRequest = this.baseServices.apiHelper.genRequest({
            options: <ListOptions>{
                startPage : 0,
                pageSize : 0
            }
        });
        this.mvtnApi.virtualListDeviceProfilesPOST(deviceProfileRequest).toPromise().then(
            (res:DeviceProfileListResponse) => {
                if (this.baseServices.uiHelper.processResponse(res)) {
                    //filter the list to remove items with empty portlist.
                    this.optionList = res.data.list.filter((itm)=>(itm.mvtnPortInfo && itm.mvtnPortInfo.portDetails && itm.mvtnPortInfo.portDetails.length>0));

                    this.optionList = this.handleOptionList(this.optionList);

                    if(this.optionList.length > 0){
                        if(this.selectedElementToEdit.deviceProfile && this.selectedElementToEdit.deviceProfile.profileId){ //if edit***
                            for(let o = 0; o < this.optionList.length; o++){
                                if(this.optionList[o].profileId == this.selectedElementToEdit.deviceProfile.profileId){
                                    this.selectedElementToEdit.deviceProfile = this.optionList[o];
                                    this.fillSelectedPortsFromMvtnInfo(this.selectedElementToEdit.mvtnPortInfo);
                                    break;
                                }
                            }

                            if(!this.selectedElementToEdit.deviceProfile){
                                this.baseServices.uiHelper.notify("no relevant profile in server", DIALOG_TYPES.INFO);
                            }
                        }else{// if new***
                            this.selectedElementToEdit.deviceProfile = null;
                            for(let b = 0; b < this.optionList.length; b++){
                                if(!this.optionList[b].isUsed){
                                    this.selectedElementToEdit.deviceProfile = this.optionList[b];
                                    if(this.selectedElementToEdit.deviceProfile.mvtnPortInfo && this.selectedElementToEdit.deviceProfile.mvtnPortInfo.portDetails && this.selectedElementToEdit.deviceProfile.mvtnPortInfo.portDetails.length > 0 && this.dc.isNotNullOrUndefined(this.selectedElementToEdit.deviceProfile.mvtnPortInfo.portDetails[0].number)){
                                        this.selectedElementToEdit.mvtnPortInfo = {portDetails: [this.selectedElementToEdit.deviceProfile.mvtnPortInfo.portDetails[0]]};
                                        this.selectedElementToEdit.id = this.selectedElementToEdit.deviceProfile.profileId;
                                        this.fillSelectedPortsFromMvtnInfo(this.selectedElementToEdit.mvtnPortInfo);
                                    }else{
                                        this.selectedElementToEdit = null;
                                        this.baseServices.uiHelper.alert(this.t("messages.no_profile"), DIALOG_TYPES.WARNING);
                                        this.resetState.emit();
                                        return;
                                    }
                                    break;
                                }
                            }
                            if(!this.selectedElementToEdit.deviceProfile){
                                this.selectedElementToEdit = null;
                                this.baseServices.uiHelper.alert(this.t("messages.no_profile"), DIALOG_TYPES.WARNING);
                                this.resetState.emit();
                                return;
                            }
                        }
                        this.$selectpicker = $('#ports');
                        this.$selectpicker.selectpicker();

                        if(this.selectedElementToEdit.deviceProfile && this.selectedElementToEdit.deviceProfile.mvtnPortInfo && this.selectedElementToEdit.deviceProfile.mvtnPortInfo.portDetails){
                            this.portsOfProfile = this.selectedElementToEdit.deviceProfile.mvtnPortInfo.portDetails;
                        }
                    } else {
                        this.baseServices.uiHelper.alert(this.t('messages.no_profile'), DIALOG_TYPES.WARNING);
                        this.resetState.emit();
                        return;
                    }

                    this.cdr.detectChanges();
                    if(this.selectedElementToEdit.deviceProfile && this.selectedElementToEdit.deviceProfile.mvtnPortInfo && this.selectedElementToEdit.deviceProfile.mvtnPortInfo.portDetails && this.selectedElementToEdit.deviceProfile.mvtnPortInfo.portDetails.length > 0){
                        this.$selectpicker.selectpicker();
                        this.$selectpicker.selectpicker('val', this.selectedPorts);
                    }
                    this.$selectpicker.selectpicker('refresh');
                    this.$selectpicker.selectpicker('render');

                }
            }, (err) => {
                let errMsg = err.message || 'Server error';
                if (errMsg === 'Server error')
                    return this.baseServices.uiHelper.notify($.t("common.messages.RETURN_STATUS.SERVER_ERROR"), DIALOG_TYPES.ERROR);
            }
        );

        //securityLevel = html binding
    }

    updateSelectedValue(e, a){//html binding
        for(let i = 0; i < this.optionList.length; i++){
            if(this.optionList[i].profileName || this.optionList[i].profileId){
                if(this.optionList[i].profileName ==  a.deviceProfile.profileName || this.optionList[i].profileId == a.deviceProfile.profileId){
                    this.selectedElementToEdit.deviceProfile = this.optionList[i];
                    if(this.selectedElementToEdit.deviceProfile && this.selectedElementToEdit.deviceProfile.mvtnPortInfo && this.selectedElementToEdit.deviceProfile.mvtnPortInfo.portDetails){
                        this.portsOfProfile = this.selectedElementToEdit.deviceProfile.mvtnPortInfo.portDetails;
                        this.cdr.detectChanges();
                        this.$selectpicker.selectpicker('refresh');
                    }
                }
            }
        }
        if(!this.selectedElementToEdit.deviceProfile){
            this.baseServices.uiHelper.alert(this.t("messages.no_profile"), DIALOG_TYPES.WARNING);
            this.resetState.emit();
        }else{
            this.selectedElementToEdit.id = this.selectedElementToEdit.deviceProfile.profileId;
        }
    }

    updateSelectedPorts(e, i){//html binding
        this.fillCurrentPortsToTheRelatedField();
    }

    handleOptionList(list:Array<DeviceProfileDTO>) {//isUsed
        let nodes: Array<SwitchDTO> = d3.selectAll('.node').data();
        if(nodes.length > 0){
            for( let i = 0; i < list.length; i++ ){
                for(let j = 0; j < nodes.length; j++){
                    if(list[i].profileId == nodes[j].deviceProfile.profileId && list[i]['isUsed'] != true){
                        list[i]['isUsed'] = true;
                    }else{
                        if(list[i]['isUsed'] == true){
                            //todo for when switch deletion comes
                        }else{
                            list[i]['isUsed'] = false;
                        }
                    }
                }
            }
        }
        return list;
    }

    fillSelectedPortsFromMvtnInfo(mvtnPortInfo: MvtnPortInfo){
        for(let m = 0; m < mvtnPortInfo.portDetails.length; m++){
            this.selectedPorts.push(mvtnPortInfo.portDetails[m].number);
        }
    }

    fillCurrentPortsToTheRelatedField(){
        let selectedPorts: Array<PortDetail> = [];
        let val = this.$selectpicker.val();
        this.selectedPorts = val;
        if(this.selectedPorts && this.selectedPorts.length && this.selectedPorts.length > 0){
            this.selectedPorts.forEach((item) => {
                selectedPorts.push({ number: item, address: {} });
            });
        }else{
            this.selectedPorts = [];
            console.log("SOMETHING IS WRONG WITH PORT SELECTION");
        }
        this.selectedElementToEdit.mvtnPortInfo = {portDetails: selectedPorts};
    }

    onNodeNameChange(e){
        d3.selectAll("g.node").filter((node)=> {
            if (node.id == this.selectedElementToEdit.id) {
                return node;
            }
        }).select(".text2").transition().text(e);
    }

    /*******************************LINK**************************/
    linkOperations(){
        //srcBandwith
        let link:LinkDTO = this.selectedElementToEdit;

        if(link.constraints && link.constraints.availableBandwidth){
            this.sourceBandwidthByBit = link.constraints.availableBandwidth;
            let unit = this.calculateUnit(this.sourceBandwidthByBit);
            this.sourceBandwidthUnit = Math.pow(1000, unit);
            this.sourceBandwidth = this.sourceBandwidthByBit / this.sourceBandwidthUnit;
        }else{
            this.sourceBandwidthByBit = null;
        }

        //dstBandWidth
        if(link['reverse'] && link['reverse'].constraints && link['reverse'].constraints.availableBandwidth){
            this.targetBandwidthByBit = link['reverse'].constraints.availableBandwidth;
            let unit = this.calculateUnit(this.targetBandwidthByBit);
            this.targetBandwidthUnit = Math.pow(1000, unit);
            this.targetBandwidth = this.targetBandwidthByBit / this.targetBandwidthUnit;
        }else{
            this.targetBandwidthByBit = null;
        }

        //securityLevel
        this.securityLevel = this.dc.isNotNullOrUndefined(this.selectedElementToEdit.securityLevel) ? this.selectedElementToEdit.securityLevel : 1;
    }

    linkSecurityLevelChange($event){// html binding
        this.securityLevel = $event;
        this.selectedElementToEdit.securityLevel = this.securityLevel;

        if(this.selectedElementToEdit.constraints){
            this.selectedElementToEdit.constraints.securityLevel = this.securityLevel;
        }else{
            this.selectedElementToEdit.constraints = {};
            this.selectedElementToEdit.constraints.securityLevel = this.securityLevel;
        }

        if(this.selectedElementToEdit["reverse"]){
            if(this.selectedElementToEdit["reverse"].constraints){
                this.selectedElementToEdit["reverse"].securityLevel = this.securityLevel;
                this.selectedElementToEdit["reverse"].constraints.securityLevel = this.securityLevel;
            }else{
                this.selectedElementToEdit["reverse"].constraints = {};
                this.selectedElementToEdit["reverse"].constraints.securityLevel = this.securityLevel;
            }
        }else{
            this.selectedElementToEdit["reverse"] = {};
        }
    }

    changeBandWith(input) {//html binding
        this.cdr.detectChanges();
        if (input == 'source') {
            this.sourceBW.nativeElement.dispatchEvent(new Event('keyup'));
            this.sourceBW.nativeElement.dispatchEvent(new Event('change'));
        }
        else {
            this.targetBW.nativeElement.dispatchEvent(new Event('keyup'));
            this.targetBW.nativeElement.dispatchEvent(new Event('change'));
        }
    }

    updateBwOnChange(){
        this.selectedElementToEdit.constraints.availableBandwidth = this.sourceBandwidthUnit * this.sourceBandwidth;
        this.selectedElementToEdit['reverse'].constraints.availableBandwidth = this.targetBandwidthUnit * this.targetBandwidth;
    }

    calculateUnit(bandWithByBit) {
        let t = Number(bandWithByBit).toString();
        let counter = 0;
        for (let i = t.length - 1; i > 1; i--) {
            if (t[i] === "0")
                counter++;
            else break;
        }
        return Math.ceil(counter / 3);
    }

    //save is like this instead of ngModel auto-update because if the user doesnt click save and selects another node it will automatically be saved if ngModel changes because = json mutability
    saveEdit(){//html
        if(this.selectedElementToEdit.type == "Switch"){
            this.fillCurrentPortsToTheRelatedField();
        }else if(this.selectedElementToEdit.type == "Link"){
            this.selectedElementToEdit.constraints = {availableBandwidth: this.sourceBandwidthByBit, securityLevel: this.securityLevel};
            if(this.selectedElementToEdit["reverse"]){this.selectedElementToEdit["reverse"].constraints = {availableBandwidth: +this.targetBandwidthByBit, securityLevel: this.securityLevel};}
            this.selectedElementToEdit.securityLevel = this.securityLevel;
        }
        this.onRenderTrigger.emit();
    }

    checkButtonStatus(type, perm) {
        let virtualReqStatus: boolean = (this.topologyData.type === TOPOLOGYTYPE.VIRTUAL_REQUEST) && (this.topologyData.tabRequestStatus == type) && this.p(perm); //In virtual topology request check the request-status rather than status;
        return ( (this.topologyData.type == TOPOLOGYTYPE.VIRTUAL) && (this.topologyData.status == type) && this.p(perm) ) || virtualReqStatus;
    }

    checkIfTabTypeIsEditOrCreate(){
        return (this.topologyData && (this.topologyData.tabType == CREATESHOWENUM.EDIT || this.topologyData.tabType == CREATESHOWENUM.CREATE));
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }
}