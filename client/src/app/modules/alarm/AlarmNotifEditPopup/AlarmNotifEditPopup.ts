/**
 * Created by barangu on 17.01.2017.
 */
import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ChangeDetectorRef} from "@angular/core";
import {BasePopupEditPage} from "../../../commons/BasePopupEditPage/BasePopupEditPage";
import {PageServices} from "../../PageServices";
import {AlarmApi} from "../../../swagger/AlarmApi";
import {SEVERITY} from "../../../swagger/SEVERITY";
import {ALARMSOURCE} from "../../../swagger/ALARMSOURCE";
import {AlarmNotificationDTO} from "../../../swagger/AlarmNotificationDTO";
import {ListOptions} from "../../../swagger/ListOptions";
import {GenericListRequest} from "../../../swagger/GenericListRequest";
import {MvtnApi} from "../../../swagger/MvtnApi";
import {MODAL_SIZE} from "../../ModalComponent";
import {MvtnDTO} from "../../../swagger/MvtnDTO";
import {AlarmNotificationRequest} from "../../../swagger/AlarmNotificationRequest";
import {DIALOG_TYPES} from "../../UIHelper";

@Component({
	moduleId: module.id,
	selector: 'AlarmSourceEditPopup',
	templateUrl: './AlarmNotifEditPopup.html',
	providers: [AlarmApi]
})

export class AlarmNotifEditPopup extends BasePopupEditPage<AlarmNotificationDTO> implements OnInit, AfterViewInit, OnDestroy {

	public alarmSeverity: Array<SEVERITY> = [];
	public alarmSource: Array<ALARMSOURCE> = [];
	public virtualNetworks: Array<MvtnDTO> = [];
	public sourceSelector;
	public mvtnSelector;
	public selectedSeverity: Array<SEVERITY> = [];
	public emails = "";
	modalSize: MODAL_SIZE = MODAL_SIZE.LARGE;

	constructor(public changeDetector: ChangeDetectorRef, public alarmApi: AlarmApi, baseServices: PageServices, elementRef: ElementRef, public mvtnApi: MvtnApi) {
		super(baseServices, elementRef);
		this.setI18NKey('alarm_notif.edit');

		this.alarmSeverity = [];
		$.each(SEVERITY, (i, key) => {
			if(key!=SEVERITY.NONE)this.alarmSeverity.push(key);
		});
		this.alarmSource = [];
		$.each(ALARMSOURCE, (i, key) => {
			this.alarmSource.push(key);
		});

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
		this.initVirtualNetworks();
		this.initAlarmSource();
		this.initAlarmSeverity();
		this.initEmails();
	}

	ngOnChanges(e) {
		super.ngOnChanges(e);
	}

	ngAfterViewInit() {
		if (super.ngAfterViewInit()) {
			this.sourceSelector = $('.sourceselector').select2({
				allowClear: true
			});
			this.mvtnSelector = $('.mvtnselector').select2({
				allowClear: true
			});
			return true;
		}
		return false;
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}

	initVirtualNetworks() {
		let request = this.baseServices.apiHelper.genRequest({
			options: <ListOptions>{
				startPage: 0,
				pageSize: 0,
				sortOptions: {fieldName: 'name', isAscend: true}
			}
		});

		let s =
			this.mvtnApi
				.virtualListPOST(<GenericListRequest>request)
				.subscribe(
					(res) => {
						this.virtualNetworks = res.data.list;
						this.changeDetector.detectChanges();

						if (!this.isNewItem && this.data.mvtnId) {
							let mvtnIds = this.data.mvtnId.map(function (value) {
								return value.toString();
							});
							$('.mvtnselector').select2({
								allowClear: true
							}).val(mvtnIds).trigger("change");
						}
					}
				);
		this.subscriptions.push(s);
	}

	initAlarmSource() {
		this.changeDetector.detectChanges();
		if (!this.p('phy_topo:manage') && this.isNewItem) {
			this.data.source = [ALARMSOURCE.MVTN];
		}
		else if (!this.isNewItem && this.data.source) {
			let alarmSources = this.data.source.map(function (value) {
				return value.toString();
			});
			$('.sourceselector').select2().val(alarmSources).trigger("change");
		}
	}

	initAlarmSeverity() {
		if (!this.isNewItem && this.data.severity) {
			for (let i = 0; i < this.data.severity.length; i++) {
				this.selectedSeverity.push(this.data.severity[i]);
			}
		}
	}

	initEmails() {
		if (!this.isNewItem && this.data.email) {
			for (let i = 0; i < this.data.email.length; i++) {
				this.emails += this.data.email[i] + "\n";
			}
		}
	}

	updateCheckedSeverities(s, event) {
		if (event.target.checked) {
			this.selectedSeverity.push(s);
		}
		else {
			let index = this.selectedSeverity.indexOf(s);
			this.selectedSeverity.splice(index, 1);
		}
	}

	save() {
		let form: any = $('form', this.elementRef.nativeElement)[0];
		if (!form.checkValidity() || this.selectedSeverity.length == 0) {
			this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
			return;
		}
		this.submitted = true;
		this.data.revision++;
		this.data.timestamp = this.baseServices.utils.genTimestamp();
		if (this.p('phy_topo:manage'))
			this.data.source = this.sourceSelector.val() || [];
		this.data.severity = this.selectedSeverity;
		let selectedMvtns = this.mvtnSelector.val() || [];
		this.data.mvtnId = selectedMvtns.map(Number);
		this.data.email = this.emails.split("\n");
		this.data.mvtnName = [];
		for (let i = 0; i < this.virtualNetworks.length; i++) {
			let id = Number(this.virtualNetworks[i].id);
			if (this.data.mvtnId.indexOf(id) > -1) {
				this.data.mvtnName.push(this.virtualNetworks[i].name);
			}
		}

		let request = this.baseServices.apiHelper.genRequest({
			data: <AlarmNotificationDTO> this.data
		});

		this.alarmApi
			.alarmNotificationSavePOST(<AlarmNotificationRequest>request)
			.subscribe(
				(res) => {
					if (this.baseServices.uiHelper.processResponse(res, this.t('messages.save_success', {dto: this.data}))) {
						this.close(true);
					}
				},
				(error: any) => {
					this.baseServices.uiHelper.processResponse(error._body); //JSON parsing is handled in the function now
				}
			);
	}
}
