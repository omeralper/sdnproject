/**
 * Created by omeroz on 2/1/2017.
 */

import {Component, ChangeDetectorRef, OnInit, AfterViewInit, OnDestroy, ElementRef} from "@angular/core";
import {PageServices} from "../../PageServices";
import {BasePopupEditPage} from "../../../commons/BasePopupEditPage/BasePopupEditPage";
import {DIALOG_TYPES} from "../../UIHelper";
import {AccessPolicyDTO} from "../../../swagger/AccessPolicyDTO";
import {PolicyApi} from "../../../swagger/PolicyApi";
import {AccessPolicyRequest} from "../../../swagger/AccessPolicyRequest";
import {AccessControlManager} from "../AccessControlManager";
import {SimpleRule} from "../SimpleRule";
import {ListOptions} from "../../../swagger/ListOptions";
import {TopologyApi} from "../../../swagger/TopologyApi";
import {SwitchDTO} from "../../../swagger/SwitchDTO";
import {ACCESSACTIONTYPE} from "../../../swagger/ACCESSACTIONTYPE";
import {EndUserApplicationDTO} from "../../../swagger/EndUserApplicationDTO";

@Component({
	moduleId: module.id,
	selector: 'OverlayEditPopup',
	templateUrl: './OverlayEditPopup.html',
	providers: [PolicyApi, AccessControlManager],
})
export class OverlayEditPopup extends BasePopupEditPage<AccessPolicyDTO> implements OnInit, AfterViewInit, OnDestroy {
	switchList: SwitchDTO[];
	rule: SimpleRule = <SimpleRule>{};
	serviceActions = [];
	startTime;
	endTime;
	regEx = {
		mac: '^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$',
		port: '^[0-9]{1,5}$',
		ip: '^(?:[0-9]{1,3}\.){3}[0-9]{1,3}\/[0-9]{1,2}$'
	};
	ACCESSACTIONTYPE = ACCESSACTIONTYPE;
	endUserApps: Array<EndUserApplicationDTO> = [];
	initialEndUserApps;
	initialInports;

	constructor(public changeDetector: ChangeDetectorRef,
	            baseServices: PageServices,
	            public policyApi: PolicyApi,
	            public accessControlManager: AccessControlManager,
	            public topologyApi: TopologyApi,
	            elementRef: ElementRef) {
		super(baseServices, elementRef);
		this.setI18NKey('policy_management.overlay.edit');

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
		this.rule = this.accessControlManager.simplifyRule(this.data);
		this.startTime = this.rule.startTime && new Date(this.rule.startTime).toLocaleDateString();
		this.endTime = this.rule.endTime && new Date(this.rule.endTime).toLocaleDateString();
		this.initialEndUserApps = this.rule.endUserApps && this.rule.endUserApps.map(a => a.id);
		this.initialInports = this.rule.inportSwitchPorts.map(Number);
		this.initServiceQualityPolicies();
		this.initSwitchList();
		this.fetchEndUserApps();
	}

	ngOnChanges(e) {
		super.ngOnChanges(e);
	}

	ngAfterViewInit() {
		if (super.ngAfterViewInit()) {
			$('.input-daterange', this.elementRef.nativeElement).datepicker({
				autoclose: true,
				keepEmptyValues: true,
			}).on('changeDate', (event) => {
				if ($(event.target).hasClass('endTime'))
					this.rule.endTime = event.date;
				if ($(event.target).hasClass('startTime'))
					this.rule.startTime = event.date;

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
						this.serviceActions.forEach((s) => {
							if (this.rule.quality && this.rule.quality.id == s.id)
								this.rule.quality = s;
						});
						if (!this.rule.quality)
							this.rule.quality = this.serviceActions[0];

						this.changeDetector.detectChanges();
					}
				}
			);
	}

	initSwitchList() {
		let request = this.baseServices.apiHelper.genFullListRequest({
			fieldName: 'name',
			isAscend: true
		});

		this.topologyApi.topologySwitchListPOST(request).toPromise()
			.then((res) => {
				if (this.baseServices.uiHelper.processResponse(res)) {
					this.switchList = res.data.list;
					if (!this.rule.inportSwitch) { // if new select the first switch on the list
						this.rule.inportSwitch = null;
					} else {
						for (let i = 0; i < this.switchList.length; ++i) {
							if (this.rule.inportSwitch.id == this.switchList[i].id) {
								this.rule.inportSwitch = this.switchList[i];
								break;
							}
						}
					}
					this.changeDetector.detectChanges();
				}
			});
	}

	fetchEndUserApps() {
		let listRequest = this.baseServices.apiHelper.genFullListRequest();
		this.policyApi
			.endUserAppListPOST(listRequest)
			.subscribe((res) => {
				if (this.baseServices.uiHelper.processResponse(res)) {
					this.endUserApps = res.data.list;
					this.changeDetector.detectChanges();
				}
			})
	}

	endUserAppChanged(apps: Array<string>) {
		this.rule.endUserApps = this.endUserApps.filter((app) => {
			return apps.includes(app.id);
		})
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
	}

	save() {
		let form: any = $('form', this.elementRef.nativeElement)[0];
		if (!form.checkValidity()) {
			this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
			return;
		}
		if (this.rule.accessPolicyAction == ACCESSACTIONTYPE.DENIED) {
			this.rule.quality = null;
		}

		this.data = this.accessControlManager.complexifyRule(this.rule);
		this.data = this.baseServices.apiHelper.genDTO(this.data);

		let request: AccessPolicyRequest = <AccessPolicyRequest>this.baseServices.apiHelper.genRequest({
			data: <AccessPolicyDTO> this.data
		});

		this.policyApi
			.overlayPolicySavePOST(request)
			.subscribe(
				(res) => {
					if (this.baseServices.uiHelper.processResponse(res, this.t(this.data.id ? 'messages.save_success' : 'messages.create_success', {dto: this.data}))) {
						this.close(true);
					}
				},
				(error: any) => {
					this.baseServices.uiHelper.processResponse(error._body);
				}
			);
	}
}

