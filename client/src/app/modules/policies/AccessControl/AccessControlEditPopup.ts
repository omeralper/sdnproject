import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ChangeDetectorRef} from "@angular/core";
import {PageServices} from "../../PageServices";
import {BasePopupEditPage} from "../../../commons/BasePopupEditPage/BasePopupEditPage";
import {MODAL_SIZE} from "../../ModalComponent";
import {PolicyApi} from "../../../swagger/PolicyApi";
import {AccessPolicyDTO} from "../../../swagger/AccessPolicyDTO";
import {AccessProfileDTO} from "../../../swagger/AccessProfileDTO";
import {AccessProfileRequest} from "../../../swagger/AccessProfileRequest";
import {DIALOG_TYPES} from "../../UIHelper";
import {ServiceActionDTO} from "../../../swagger/ServiceActionDTO";
import {NacGroupApi} from "../../../swagger/NacGroupApi";
import {AccessRule} from "./AccessRule";
import {ListOptions} from "../../../swagger/ListOptions";
import {NacGroupDTO} from "../../../swagger/NacGroupDTO";
import {ACCESSACTIONTYPE} from "../../../swagger/ACCESSACTIONTYPE";
import {Action} from "../../../commons/Action";
import {MvtnApi} from "../../../swagger/MvtnApi";
import {GenericListRequest} from "../../../swagger/GenericListRequest";
import 'rxjs/add/operator/toPromise';
import {MvtnDTO} from "../../../swagger/MvtnDTO";
import {NacUserApi} from "../../../swagger/NacUserApi";
import {NacUserDTO} from "../../../swagger/NacUserDTO";
import {SimpleRule} from "../SimpleRule";
import {AccessControlManager} from "../AccessControlManager";
import {EndUserApplicationDTO} from "../../../swagger/EndUserApplicationDTO";
import {SwitchDTO} from "../../../swagger/SwitchDTO";
import {TopologyApi} from "../../../swagger/TopologyApi";
import {IpLocationDTO} from "../../../swagger/IpLocationDTO";
import {IpLocationApi} from "../../../swagger/IpLocationApi";
declare var Sortable: any;

@Component({
    moduleId: module.id,
    selector: 'AccessControlEditPopup',
    templateUrl: './AccessControlEditPopup.html',
    providers: [PolicyApi, AccessRule, NacGroupApi,NacUserApi, AccessControlManager]
})
export class AccessControlEditPopup extends BasePopupEditPage<AccessProfileDTO> implements OnInit, AfterViewInit, OnDestroy {
    public rules: Array<SimpleRule> = [];
    public selectedRule: SimpleRule = <SimpleRule>{};
    public serviceActions: Array<ServiceActionDTO> = [];
    public nacGroups: Array<NacGroupDTO>;
    public nacUsers: Array<NacUserDTO>; // html
    public ipLocs: Array<IpLocationDTO>;
    public userApps: Array<EndUserApplicationDTO>; // html
    public nacSelector;
    public allowAllNacs: boolean = false;
    public selectList;
    public temporaryId = 1;
	public virtualNetworks:Array<MvtnDTO> = [];
    // public virtualNetwork: MvtnDTO;
    switchList: Array<SwitchDTO>;

    constructor(public changeDetector: ChangeDetectorRef,
                public accessControlManager: AccessControlManager,
                baseServices: PageServices,
                elementRef: ElementRef,
                public policyApi: PolicyApi,
                public nacGroupApi: NacGroupApi,
                public nacUserApi: NacUserApi,
                public mvtnApi: MvtnApi,
                public topologyApi: TopologyApi,
                public ipLocationApi: IpLocationApi) {
        super(baseServices, elementRef);
        this.setI18NKey('policy_management.access_control.edit');
        this.modalSize = MODAL_SIZE.LARGE;

        this.setFormActions([
            this.createAction('dialogs.actions.save', () => {
                this.save();
            }),
            this.createAction('dialogs.actions.cancel', () => {
                this.close();
            })
        ]);
    }

    ngOnInit() {
        super.ngOnInit();
        if (is.existy(this.data) && is.not.existy(this.data.mvtnId)) this.data.mvtnId = 0;
        this.allowAllNacs = this.data && this.data.allowedNacGroups && this.data.allowedNacGroups.allowAll;
        this.initServiceQualityPolicies();
        this.initNacGroups();
        this.initNacUsers();
        this.initIpLocs();
        this.initVirtualNetworks();
        this.initRules();
        this.initUserApps();
        this.initInportSwitches();

        // this.switchList = [
        //     mockSwitchDTO
        // ]
    }

    ngOnChanges(e) {
        super.ngOnChanges(e);
    }

    ngAfterViewInit() {
        if (super.ngAfterViewInit()) {

            this.selectList = Sortable.create($('#selectBox')[0], {
                animation: 300,
                filter: '.fa-trash-o',
            });
            this.nacSelector = $('.multiselector',this.$container).select2({
                placeholder: this.t('fields.allowed_nac_groups.placeholder'),
                allowClear: true
            });
            return true;
        }
        return false;
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

    initServiceQualityPolicies() {
        let listRequest = this.baseServices.apiHelper.genRequest({
            options: <ListOptions>{
                startPage: 0,
                pageSize: 0,
                sortOptions: {fieldName: 'policyName', isAscend: true}
            }
        });

        this.policyApi
            .policyServiceActionListPOST(listRequest)
            .subscribe(
                (res) => {
                    if (this.baseServices.uiHelper.processResponse(res)) {
                        this.serviceActions = res.data.list;
                        this.rules.forEach((r) => {
                            this.serviceActions.forEach((s) => {
                                if (r.quality && r.quality.id == s.id)
                                    r.quality = s;
                            });
                        });
                        if (!this.selectedRule.quality)
                            this.selectedRule.quality = this.serviceActions[0];

                        this.changeDetector.detectChanges();
                    }
                }
            );
    }

    initNacGroups() {
        let listRequest = this.baseServices.apiHelper.genRequest({
            options: <ListOptions>{
                startPage: 0,
                pageSize: 0,
                sortOptions: {fieldName: 'name', isAscend: true}
            }
        });
        this.nacGroupApi
            .groupListPOST(listRequest)
            .subscribe(
                (res) => {
                    if (this.baseServices.uiHelper.processResponse(res)) {
                        this.nacGroups = res.data.list;
                        this.changeDetector.detectChanges();
                        if (!this.isNewItem &&
                            this.data.allowedNacGroups &&
                            this.data.allowedNacGroups.allowedNacGroups) {
                            let allowedNacIds = this.data.allowedNacGroups.allowedNacGroups.map(function (value) {
                                return value.id;
                            });
                            $('.multiselector').select2().val(allowedNacIds).trigger("change");
                        }
                    }
                }
            )
    }

    initNacUsers() {
        let listRequest = this.baseServices.apiHelper.genRequest({
            options: <ListOptions>{
                startPage: 0,
                pageSize: 0,
                sortOptions: {fieldName: 'username', isAscend: true}
            }
        });
        this.nacUserApi
            .userListPOST(listRequest)
            .subscribe(
                (res) => {
                    if (this.baseServices.uiHelper.processResponse(res)) {
                        this.nacUsers = res.data.list;
                        this.changeDetector.detectChanges();
                    }
                }
            )
    }

    initIpLocs() {
        let listRequest = this.baseServices.apiHelper.genRequest({
            options: <ListOptions>{
                startPage: 0,
                pageSize: 0,
                sortOptions: {fieldName: 'name', isAscend: true}
            }
        });
        this.ipLocationApi
            .ipLocationListPOST(listRequest)
            .subscribe(
                (res) => {
                    if (this.baseServices.uiHelper.processResponse(res)) {
                        this.ipLocs = res.data.list;
                        this.changeDetector.detectChanges();
                    }
                }
            );
    }

    initUserApps() {
        let listRequest = this.baseServices.apiHelper.genRequest({
            options: <ListOptions>{
                startPage: 0,
                pageSize: 0,
                sortOptions: {fieldName: 'username', isAscend: true}
            }
        });
        this.policyApi
            .endUserAppListPOST(listRequest)
            .subscribe(
                (res) => {
                    if (this.baseServices.uiHelper.processResponse(res)) {
                        this.userApps = res.data.list;
                        this.changeDetector.detectChanges();
                    }
                }
            )
    }

    initVirtualNetworks() {
        let request = this.baseServices.apiHelper.genRequest({
            options: <ListOptions>{
                startPage: 0,
                pageSize: 0,
                sortOptions: {fieldName: 'name', isAscend: true}
            }
        });

        this.mvtnApi
            .virtualListPOST(<GenericListRequest>request)
            .subscribe(
                (res) => {
                    this.virtualNetworks = res.data.list;
	                this.changeDetector.detectChanges();
                }
            );
    }

    initRules() {
        if (this.data && this.data.accessPolicies && this.data.accessPolicies.length > 0) {
            this.rules = this.data.accessPolicies
                .map((value: AccessPolicyDTO) => {
                    return this.accessControlManager.simplifyRule(value,this.temporaryId++);
                })
                .sort(function (a: SimpleRule, b: SimpleRule) {
                    return b.priority - a.priority;
                });

            this.rules.forEach((rule) => {
                if (rule.conflictedRuleIds && rule.conflictedRuleIds.length > 0) {
                    rule.conflictedRuleNames = this.rules
                        .filter((r: SimpleRule) => {
                            return rule.conflictedRuleIds.indexOf(r.id) > -1;
                        })
                        .map(function (r: SimpleRule) {
                            return r.policyName;
                        });
                }
            });

            this.selectRule(this.rules[0]);
        } else {
            this.addRule();
        }
    }

    initInportSwitches(){

        let request = this.baseServices.apiHelper.genRequest({
            options: <ListOptions>{
                startPage: 0,
                pageSize: 0,
                sortOptions: {fieldName: 'name', isAscend: true},
            }
        });

        this.topologyApi.topologySwitchListPOST(request).toPromise() // TODO 2913
            .then((res)=>{
                if(this.baseServices.uiHelper.processResponse(res)){
                    this.switchList = res.data.list;
                    if(this.data && this.data.accessPolicies){
                        let flag = true;
                        for(let j=0; j < this.rules.length; ++j){
                            let currentRule = this.rules[j];
                            for(let i = 0; i < this.switchList.length; ++i){
                                if(currentRule.inportSwitch && currentRule.inportSwitch.id && (this.switchList[i].id == currentRule.inportSwitch.id)){ //assign string to object
                                    currentRule.inportSwitch = this.switchList[i];
                                    // if(j === 0){
                                    //     this.selectedRule.inportSwitch = res.data.list[i]; // assign selected inport switchDTO from switchList using deviceid
                                    //     this.selectedRule.inportSwitchPorts = this.data.accessPolicies[i].packetHeaderCriteria.inPorts[0] && this.data.accessPolicies[i].packetHeaderCriteria.inPorts[0].inports ? this.data.accessPolicies[i].packetHeaderCriteria.inPorts[0].inports : [];
                                    // }
                                    flag = false;
                                    break;
                                }else if(!currentRule.inportSwitch){ // if inportSwitch is not defined, this is not about inportSwitch editing hence we do not need to show error message
                                    flag = false;
                                }
                            }
                        }
                        if(flag){
                            this.baseServices.uiHelper.notify(this.t("messages.no_switch"), DIALOG_TYPES.ERROR);
                        }
                    }else{// if new select the first switch on the list
                        this.selectedRule.inportSwitch = null;
                    }
                    this.changeDetector.detectChanges();
                }
            });
    }

    /**
     * Yeni eklenen kural, sadece client side için kullanılmak üzere geçici id alır.
     * Yeni kuralın sadece default bazı değerlerle eklenir.
     */
    addRule() {
        let l = this.rules.length;
        let newRule = <SimpleRule>{
            policyName: this.t('fields.rule') + " " + ++l,
            temporaryId: "tempId" + this.temporaryId++,
            accessPolicyAction: ACCESSACTIONTYPE.ACCESS,
            quality: this.serviceActions[0],
            inportSwitch: {},
            inportSwitchPorts: [],
            valid: true,
            protocols:"",
            mpls_tags:"",
            vlan_tags:""
        };
        if (this.selectRule(newRule))
            this.rules.push(newRule);
	    this.changeDetector.detectChanges();
    }

    /**
     * Kurallar arası geçiş yaparken ya da son kayıtta, seçili kaydın alanlarını validate eder.
     */
    validateCurrentRule(): boolean {
        if (!this.selectedRule.valid) {
            this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
            return false;
        }
        let l = this.rules.length;
        if (!this.selectedRule.policyName)
            this.selectedRule.policyName = this.t('fields.rule') + " " + ++l;
        return true;
    }

    selectRule(rule: SimpleRule) {
        if (!$.isEmptyObject(this.selectedRule) && !this.validateCurrentRule()) {
            return false;
        }
        this.selectedRule = rule;
        this.changeDetector.detectChanges();
        return true;
    }

    deleteRule(rule: SimpleRule) {
        if (this.rules.length == 1) {
            this.baseServices.uiHelper.notify(this.t('messages.last_rule'), DIALOG_TYPES.WARNING);
            return;
        }
        let i = this.rules.indexOf(rule);
        this.rules.splice(i, 1);
        this.selectedRule = this.rules[i] || this.rules[i - 1];
        this.changeDetector.detectChanges();
        this.resetPriorities();
    }

    /**
     * DOM'daki rule listesiyle elimizdeki rule listesinin sırasını senkronize eder.
     * Priority değerlerini de sıraya göre yeniler.
     */
    resetPriorities() {
        let ruleCount = this.rules.length;
        //priority değerleri listedeki sıraya göre veriliyor. (en üstteki en yüksek değer)
        $('#selectBox .selectListItem').each((index, item) => {
            let rule = this.rules.find(function (currentRule) {
                return currentRule.temporaryId == $(item).data('temporaryid');
            });
            rule.priority = ruleCount--;
        });
        this.rules = this.rules.sort(function (a: SimpleRule, b: SimpleRule) {
            return b.priority - a.priority;
        });
    }

    save() {
        let form: any = $('form', this.elementRef.nativeElement)[0];
        if (!form.checkValidity()) {
            this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
            return;
        }
        if (!this.validateCurrentRule()) {
            return;
        }

        this.submitted = true;

	    this.data = this.baseServices.apiHelper.genDTO(this.data);

        let selectedNacIds = this.nacSelector.val() || [];
        let selectedNacs = [];
        if (this.nacGroups) {//TODO- bu kalkacak. nac groups hep olmalı zaten...
            selectedNacs = this.nacGroups.filter((value) => {
                return selectedNacIds.includes(value.id);
            });
        }
        this.data.allowedNacGroups = this.baseServices.apiHelper.genDTO({
            allowedNacGroups: selectedNacs,
            allowAll: this.allowAllNacs
        });

        this.resetPriorities();
        this.data.accessPolicies = this.rules.map((value: SimpleRule) => {
            return this.accessControlManager.complexifyRule(value);
        });

	    delete this.data.mvtnName;
        //INFO: backend exception work around, -yildiray
        if (this.data.mvtnId==0) delete this.data.mvtnId;

        let request = this.baseServices.apiHelper.genRequest({
            data: <AccessProfileDTO> this.data
        });

        this.policyApi
            .policyAccessProfileSavePOST(<AccessProfileRequest>request)
            .toPromise()
            .then(
                (res) => {
                    if (this.baseServices.uiHelper.processResponse(res, this.t(this.data.id ? 'messages.save_success' : 'messages.create_success', {dto: this.data}))) {
                        this.data = res.data;
                        let hasConflict = false;
                        this.data.accessPolicies.forEach((value) => {
                            if (value.conflictedPolicyIds && value.conflictedPolicyIds.length > 0) {
                                hasConflict = true;
                                return;
                            }
                        });

                        if (hasConflict) {
                            this.initRules();
                            this.baseServices.uiHelper.confirm(this.t('messages.hasConflict'), (selected: Action) => {
                                if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
                                    this.close(true);
                                }
                            });
                        } else {
                            this.close(true);
                        }
                    }
                },
                (error: any) => {
                    this.baseServices.uiHelper.processResponse(error._body); //JSON parsing is handled in the function now
                }
            );
    }
}

