/**
 * Created by omeroz on 7/6/2017.
 */

import {Component, ElementRef, ChangeDetectorRef} from "@angular/core";
import {PageServices} from "../../PageServices";
import {BasePopupEditPage} from "../../../commons/BasePopupEditPage/BasePopupEditPage";
import {DIALOG_TYPES} from "../../UIHelper";
import {MODAL_SIZE} from "../../ModalComponent";
import {MonitorMetaDataEditDictionary} from "./EditDictionary";
import {MonitorInfoDTO} from "../../../swagger/MonitorInfoDTO";
import {MonitorApi} from "../../../swagger/MonitorApi";
import {MonitorAlarmSetRequest} from "../../../swagger/MonitorAlarmSetRequest";
import {MonitorAlarmSetDTO} from "../../../swagger/MonitorAlarmSetDTO";
import {MonitorTagValue} from "../../../swagger/MonitorTagValue";

@Component({
	moduleId: module.id,
	selector: 'MonitorMetaDataEditPopup',
	templateUrl: './MonitorMetaDataEditPopup.html'
})
export class MonitorMetaDataEditPopup extends BasePopupEditPage<MultipleMonitor> {

	lowThreshold: number;
	highThreshold: number;
	monitorTags: string = "";
	names: string = "";

	constructor(public monitorApi: MonitorApi,
	            public changeDetector: ChangeDetectorRef,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(baseServices, elementRef);
		this.addI18NBundle('monitorMetaDataEdit', MonitorMetaDataEditDictionary);
		this.modalSize = MODAL_SIZE.NORMAL;

		if (this.data.monitors.length == 1) {
			this.lowThreshold = this.data.monitors[0].gaugeFields.loAlarm;
			this.highThreshold = this.data.monitors[0].gaugeFields.hiAlarm;
		}

		this.names = this.data.monitors.map(m => m.name).join(', ');

		this.monitorTags = this.data.monitors.reduce((a: Array<MonitorTagValue>, b) => {
			return a.concat(b.monitorTags);
		}, []).map(m => m.tag + ":" + m.val).join(', ');

		this.setFormActions([
			this.createAction('dialogs.actions.save', () => {
				this.save();
			}),
		]);
	}

	ngOnInit() {
		super.ngOnInit();
	}

	ngOnChanges(e) {
		super.ngOnChanges(e);
	}

	ngAfterViewInit() {
		return super.ngAfterViewInit();
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}

	save() {
		let form: any = $('form', this.elementRef.nativeElement)[0];
		if (!form.checkValidity()) {
			this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
			return;
		}

		if(this.lowThreshold > this.highThreshold){
			this.baseServices.uiHelper.notify(this.t('messages.treshold_warning'), DIALOG_TYPES.WARNING);
			return;
		}

		let request = <MonitorAlarmSetRequest>this.baseServices.apiHelper.genRequest({
			data: <MonitorAlarmSetDTO>{
				idList: this.data.monitors.map(m => m.id),
				hiAlarm: this.highThreshold,
				loAlarm: this.lowThreshold
			}
		});

		this.monitorApi
			.monitorAlarmSetPOST(<MonitorAlarmSetRequest>request)
			.subscribe(
				(res) => {
					if (this.baseServices.uiHelper.processResponse(res, this.t('messages.save_success', {dto: this.data})))
						this.close(true, res.data);
				},
				(error: any) => {
					this.baseServices.uiHelper.processResponse(error._body);
				}
			);
	}

}

export interface MultipleMonitor {
	monitors: Array<MonitorInfoDTO>
}

