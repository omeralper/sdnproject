/**
 * Created by barangu on 6/30/2017.
 */
import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ChangeDetectorRef} from '@angular/core';
import {BasePopupEditPage} from "../../../commons/BasePopupEditPage/BasePopupEditPage";
import {PageServices} from "../../PageServices";
import {DIALOG_TYPES} from "../../UIHelper";
import {EmergencyPolicyDTO} from "../../../swagger/EmergencyPolicyDTO";
import {EmergencyPolicyApi} from "../../../swagger/EmergencyPolicyApi";
import {EmergencyPolicyRequest} from "../../../swagger/EmergencyPolicyRequest";
import {ListOptions} from "../../../swagger/ListOptions";
import {GenericListRequest} from "../../../swagger/GenericListRequest";
import {VnfdApi} from "../../../swagger/VnfdApi";
import {VnfdDTO} from "../../../swagger/VnfdDTO";

@Component({
	moduleId: module.id,
	selector: 'EmergencyEditPopup',
	templateUrl: './EmergencyEditPopup.html',
	providers: [EmergencyPolicyApi, VnfdApi]
})
export class EmergencyEditPopup extends BasePopupEditPage<EmergencyPolicyDTO> implements OnInit, AfterViewInit, OnDestroy {

	ipBlocks: string;
	public vnfstart: Array<VnfdDTO> = [];
	public vnfstop: Array<VnfdDTO> = [];
	public vnfIdsStop: Array<string> = [];
	public vnfIdsStart: Array<string> = [];

	constructor(public vnfdApi: VnfdApi, public emergencyPolicyApi: EmergencyPolicyApi, baseServices: PageServices, elementRef: ElementRef, public changeDetector: ChangeDetectorRef,) {
		super(baseServices, elementRef);
		this.setI18NKey('policy_management.emergency.edit');

		this.setFormActions([
			this.createAction('dialogs.actions.ok', () => {
				this.save();
			}),
			this.createAction('dialogs.actions.cancel', () => {
				this.close();
			})
		]);
	}

	ngOnInit() {
		super.ngOnInit();
		this.vnfInıt();
		if (this.isNewItem) {
			this.data.vnfToShutdown = [];
			this.data.vnfToStart = [];
		} else {
			this.data.vnfToShutdown.forEach((d1) => {
				this.vnfIdsStop.push(d1.id);
			});
			this.data.vnfToStart.forEach((d2) => {
				this.vnfIdsStart.push(d2.id);
			});
		}
	}

	ngOnChanges(e) {
		super.ngOnChanges(e);
	}

	ngAfterViewInit() {
		if (super.ngAfterViewInit()) {

			return true;
		}
		return false;
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}

	vnfInıt() {
		let request = this.baseServices.apiHelper.genRequest({
			options: <ListOptions>{
				startPage: 0,
				pageSize: 0,
				sortOptions: {fieldName: 'sfcTypeName', isAscend: true}
			}
		});

		let s =
			this.vnfdApi
				.sfcVnfdListPOST(<GenericListRequest>request)
				.subscribe(
					(res) => {
						if (this.baseServices.uiHelper.processResponse(res)) {
							this.vnfstart = res.data.list;
							this.vnfstop = res.data.list.slice();
							if (this.data.vnfToShutdown.length > 0) {
								for (let i = 0; i < this.data.vnfToShutdown.length; i++) {
									for (let j = 0; j < this.vnfstart.length; j++) {
										if (this.vnfstart[j].id === this.data.vnfToShutdown[i].id) {
											this.vnfstart.splice(j, 1);
											j = this.vnfstart.length;
										}
									}
								}
							}
							if (this.data.vnfToStart.length > 0) {
								for (let i = 0; i < this.data.vnfToStart.length; i++) {
									for (let j = 0; j < this.vnfstop.length; j++) {
										if (this.vnfstop[j].id === this.data.vnfToStart[i].id) {
											this.vnfstop.splice(j, 1);
											j = this.vnfstop.length;
										}
									}
								}
							}
							this.changeDetector.detectChanges();
						}
					}
				);
		this.subscriptions.push(s);
	}

	vnfstartlist(v2, event) {
		if (event.target.checked) {
			this.data.vnfToStart.push(v2);
			let index = this.vnfstop.indexOf(v2);
			this.vnfstop.splice(index, 1);
		}
		else {
			let index = this.data.vnfToStart.indexOf(v2);
			this.data.vnfToStart.splice(index, 1);
			this.vnfstop.push(v2);
		}
		this.changeDetector.detectChanges();
	}

	vnfstoplist(v1, event) {
		if (event.target.checked) {
			this.data.vnfToShutdown.push(v1);
			let index = this.vnfstart.indexOf(v1);
			this.vnfstart.splice(index, 1);
		}
		else {
			let index = this.data.vnfToShutdown.indexOf(v1);
			this.data.vnfToShutdown.splice(index, 1);
			this.vnfstart.push(v1);
		}
		this.changeDetector.detectChanges();
	}

	save() {
		let form: any = $('form', this.elementRef.nativeElement)[0];
		if (!form.checkValidity()) {
			this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
			return;
		}

		let request = this.baseServices.apiHelper.genRequest({
			data: <EmergencyPolicyDTO> this.baseServices.apiHelper.genDTO(this.data)
		});

		this.emergencyPolicyApi
			.emergencyPolicySavePOST(<EmergencyPolicyRequest>request)
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
