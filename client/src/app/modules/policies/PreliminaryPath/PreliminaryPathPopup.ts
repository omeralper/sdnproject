/**
 * Created by ekinca on 5.12.2016.
 */
import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ChangeDetectorRef} from "@angular/core";
import {PageServices} from "../../PageServices";
import {BasePopupEditPage} from "../../../commons/BasePopupEditPage/BasePopupEditPage";
import {PolicyApi} from "../../../swagger/PolicyApi";
import {DIALOG_TYPES, UIHelper} from "../../UIHelper";
import {ProactivePathPolicyApi} from "../../../swagger/ProactivePathPolicyApi";
import {ProactivePathPolicyDTO} from "../../../swagger/ProactivePathPolicyDTO";
import {ProactivePathPolicyRequest} from "../../../swagger/ProactivePathPolicyRequest";
import {TopologyApi} from "../../../swagger/TopologyApi";
import {TOPOLOGYTYPE} from "../../../swagger/TOPOLOGYTYPE";
import {TopologyOptions} from "../../../swagger/TopologyOptions";
import {SecurityToken} from "../../../swagger/SecurityToken";
import {TopologyRequest} from "../../../swagger/TopologyRequest";
import {MvtnApi} from "../../../swagger/MvtnApi";
import {QUERYOP} from "../../../swagger/QUERYOP";
import {ProactivePathPolicyResponse} from "../../../swagger/ProactivePathPolicyResponse";
import {DocumentConverter} from "../../DocumentConverter";

@Component({ moduleId: module.id,
    selector: 'PreliminaryPathPopup',
    templateUrl: './PreliminaryPathPopup.html',
    providers: [PolicyApi, ProactivePathPolicyApi, TopologyApi, MvtnApi]

})
export class PreliminaryPathPopup extends BasePopupEditPage<ProactivePathPolicyDTO | any> implements OnInit, AfterViewInit, OnDestroy {

    selectedServiceQualityPolicy;
    serviceActionDTOList = [];
    public hostList;
    public sqp; //html
    shouldTopologyBeDisabled: boolean = false;
    selectedTopology;
    topologies:any = [];
    public $startTime;
    public $endTime;
    errorHandler = 0;

    constructor(baseServices: PageServices, elementRef: ElementRef, public uiHelper: UIHelper, public mvtnApi: MvtnApi, public policyApi: PolicyApi, public ppApi: ProactivePathPolicyApi, public cdr: ChangeDetectorRef, public topoApi: TopologyApi, public dc: DocumentConverter) {
        super(baseServices, elementRef);
        this.setI18NKey('policy_management.preliminary_path_policies.edit');

        this.logger.debug('Data received:', this.data);

        if(this.p('phy_topo:manage')){
            this.topologies.push({name:"Prognet"});
        }

        if(this.data.topologyType && this.data.topologyType !== TOPOLOGYTYPE.PHYSICAL){
            for(let i = 0; i < this.topologies.length; i++){
                if(this.topologies[i].name == "Prognet"){
                    this.topologies.splice(i, 1);
                    break;
                }
            }
        }

        this.setFormActions([
            this.createAction('dialogs.actions.save', () => {
                this.logger.debug('Save Traffic Category clicked');
                this.save();
            }),
            this.createAction('dialogs.actions.cancel', () => {
                this.logger.debug('Cancel clicked');
                this.close();
            })
        ]);
    }

    ngOnInit() {
        super.ngOnInit();
    }

    ngOnChanges(e) {
        super.ngOnChanges(e);
    }

    typeaheadData(res, query) {
        let data = [];
        if (res.data.hosts && res.data.hosts.length > 0) {
            this.hostList = res.data.hosts;
            for (let i = 0; i < this.hostList.length; i++) {
                if (this.hostList[i].id.indexOf(query) > -1) {
                    data.push(this.hostList[i].id);
                }
            }
        }
        return data;
    }

    getTopologyReq() {
        let topoId = "";

        if (this.selectedTopology.name != "Prognet") {
            for (let i = 0; i < this.topologies.length; i++) {
                if (this.topologies[i].name == this.selectedTopology.name) {
                    topoId = this.topologies[i].id;
                    break;
                }
            }
        }

        return <TopologyRequest>{
            token: <SecurityToken>{
                requestId: "",
                timestamp: new Date()
            },
            etag: '',
            digest: '',
            options: <TopologyOptions> {
                id: topoId,
                version: 1,
                revision: 1,
                timestamp: new Date(),
                type: (topoId != "") ? TOPOLOGYTYPE.VIRTUAL : TOPOLOGYTYPE.PHYSICAL
            }
        };
    }

    onChange(ev) {

        $('#fromId').typeahead({
                minLength: 2,
                highlight: true
            },
            {
                name: 'my-dataset',
                source: (query, syncResults, asyncResults) => {
                    let req = this.getTopologyReq();
                    this.topoApi.topologyGetPOST(req).subscribe((res) => {
                        if (this.baseServices.uiHelper.processResponse(res)) {
                            let data = this.typeaheadData(res, query);
                            return asyncResults(data);
                        }
                    });
                }
            });

        $('#toId').typeahead({
                minLength: 2,
                highlight: true
            },
            {
                name: 'my-dataset',
                source: (query, syncResults, asyncResults) => {
                    this.topoApi.topologyGetPOST(this.getTopologyReq()).subscribe((res) => {
                        if (this.baseServices.uiHelper.processResponse(res)) {
                            let data = this.typeaheadData(res, query);
                            return asyncResults(data);
                        }
                    });
                }
            });

        this.policyServiceActionPost();
    }

    ngAfterViewInit() {
        if (super.ngAfterViewInit()) {

            this.$startTime = $('#startTime');
            this.$endTime = $('#endTime');

            let mvtnOptions = {
                "pageSize": 10,
                "startPage": 0,
                "queryOptions": { operator : QUERYOP.NOOP},
                "sortOptions": {"fieldName": "name", "isAscend": true},
                "fields": ["id", "version", "revision", "timestamp", "mvtnStatus", "name", "creationDate", "lastUpdateDate"]
            };
            let mvtnRequest: any;

            mvtnRequest = this.baseServices.apiHelper.genRequest({
                options: mvtnOptions
            });

            this.mvtnApi.virtualSearchPOST(mvtnRequest).subscribe(
                (res) => {
                    if (this.baseServices.uiHelper.processResponse(res)) {
                        this.topologies = this.topologies.concat(res.data.list);
                        if (this.data.mvtnId || (this.data.networks && this.data.networks.length > 0)) {
                            this.topologies.forEach((v) => {
                                if (v.id == this.data.mvtnId || (this.data.networks && this.data.networks.length > 0 && this.data.networks[0] == v.id)) {
                                    this.selectedTopology = v;
                                    if(this.data.networks && this.data.networks.length > 0 && this.data.networks[0] == v.id){
                                        this.shouldTopologyBeDisabled = true;
                                    }
                                }
                            });
                        } else {
                            if(this.dc.isNotNullOrUndefinedOrEmptyString(this.data.selectedTopology)){
                                this.topologies.forEach((v) => {
                                    if (v.id == this.data.selectedTopology) {
                                        this.selectedTopology = v;
                                        this.shouldTopologyBeDisabled = true;
                                    }
                                });
                            }else{
                                this.selectedTopology = this.topologies[0];
                            }
                        }
                        this.cdr.detectChanges();
                        this.policyServiceActionPost(); // <-- This should be here because selectedTopology depends on this async call which is used inside this methods async call. (should use flatMap)
                    }
                }
            );



            //IF DATA IS DEFINED, SET EDITS
            if (this.data.startTime) {
                this.$startTime.datetimepicker({
                    autoclose: true,
                    todayBtn: true,
                    todayHighlight: true
                });
                this.$startTime.find("input").val(this.baseServices.uiHelper.renderDateTime(this.data.startTime));
            } else {
                this.$startTime.datetimepicker();
            }

            if (this.data.stopTime) {
                this.$endTime.datetimepicker({
                    autoclose: true,
                    todayBtn: true
                });
                this.$endTime.find("input").val(this.baseServices.uiHelper.renderDateTime(this.data.stopTime));
            } else {
                this.$endTime.datetimepicker();
            }

            return true;
        }
        return false;
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    policyServiceActionPost() {
        let listRequest = {
            "token": {"requestId": "UI45065a864c34571fff23073d0f4bfc", "timestamp": new Date()},
            "options": {
                "pageSize": 10,
                "startPage": 0,
                "sortOptions": {"fieldName": "groupType", "isAscend": true},
                //"fields": null
            },
            "digest": "b187f42e4eb59d76c84f1f25c482ef3117b9f041"
        };

        this.policyApi.policyServiceActionListPOST(listRequest).subscribe(
            (res) => {
                if (this.baseServices.uiHelper.processResponse(res)) {
                    if (res.data.list) {
                        if (this.selectedTopology && this.selectedTopology.id) {
                            this.serviceActionDTOList = [];
                            for (let i = 0; i < res.data.list.length; i++) {
                                if (parseInt(this.selectedTopology.id) === res.data.list[i].mvtnId)
                                    this.serviceActionDTOList.push(res.data.list[i]);
                            }
                        }
                        else {
                            this.serviceActionDTOList = [];
                            for (let i = 0; i < res.data.list.length; i++) {
                                if (res.data.list[i].mvtnId === undefined)
                                    this.serviceActionDTOList.push(res.data.list[i]);
                            }
                        }
                        if (this.data.serviceAction && this.errorHandler === 0) {
                            this.serviceActionDTOList.forEach((v) => {
                                if (v.policyName == this.data.serviceAction.policyName) {
                                    this.selectedServiceQualityPolicy = v;
                                }
                            });
                            this.errorHandler++;
                        }
                        if(this.serviceActionDTOList.length === 0)
                            this.baseServices.uiHelper.notify(this.t('fields.service_quality_policy.help_block', {dto: this.selectedTopology}), DIALOG_TYPES.WARNING);
                        this.cdr.detectChanges();
                    } else {
                        this.baseServices.uiHelper.alert(this.t('messages.service_action_list_server_error'), DIALOG_TYPES.INFO);
                    }
                }
            }
        );
    }

    save() {
        let form: any = $('form', this.elementRef.nativeElement)[0];

        // check parameters
        this.logger.debug('Save new data');

        let startTimeVal = this.$startTime.find("input").val();
        let endTimeVal = this.$endTime.find("input").val();

        let startTime = startTimeVal != "" ? this.$startTime.data("datetimepicker").getDate() : "";
        let endTime = endTimeVal != "" ? this.$endTime.data("datetimepicker").getDate() : "";

        if (startTimeVal == "" && endTimeVal == "") {
            startTime = null;
            endTime = null;
        } else if(startTimeVal == "" && endTimeVal != ""){
            if (( endTime && ( endTime.getTime() < new Date().getTime() ))) {
                this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
                return;
            }else{
                startTime = null;
            }
        } else if(startTimeVal != "" && endTimeVal == ""){
            if (( startTime && ( startTime.getTime() < new Date().getTime() ))) {
                this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
                return;
            }else{
                endTime = null;
            }
        } else {
            if ((( startTime.getTime() < new Date().getTime() ) || ( endTime.getTime() < startTime.getTime() ))) {
                this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
                return;
            }
        }


        if (!form.checkValidity()) {
            this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
            return;
        }

        this.data.version = this.data.version || 1;
        this.data.revision = this.data.revision || 0;
        this.data.timestamp = this.data.timestamp || new Date();
        this.data.priority = +this.data.priority;
        this.data.toId = $('#toId').val();
        this.data.fromId = $('#fromId').val();
        this.data.startTime = startTime;
        this.data.stopTime = endTime;
        this.data.serviceAction = this.selectedServiceQualityPolicy;
        this.data.mvtnId = this.selectedTopology.id;

        let request = this.baseServices.apiHelper.genRequest({
            data: <ProactivePathPolicyDTO> this.data
        });

        this.ppApi
            .proactiveSavePOST(<ProactivePathPolicyRequest>request)
            .subscribe(
                (res: ProactivePathPolicyResponse) => {
                    if(this.baseServices.uiHelper.processResponse(res, this.t(this.data.id ? 'messages.save_success' : 'messages.create_success', {dto: this.data}))){
                        this.close(true, res);
                    }else{
                        this.close(false);
                    }
                },
                (error: any) => {
                    this.baseServices.uiHelper.processResponse(error._body); //JSON parsing is handled in the function now
                }
            );
    }

}

