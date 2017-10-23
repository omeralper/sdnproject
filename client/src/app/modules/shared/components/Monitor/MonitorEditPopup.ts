/**
 * Created by omeroz on 7/4/2017.
 */
import {
	Component, ElementRef, OnInit, OnDestroy, AfterViewInit
} from "@angular/core";
import {BasePopupEditPage} from "../../../../commons/BasePopupEditPage/BasePopupEditPage";
import {MonitorInfoDTO, MonitorInfoDTODef} from "../../../../swagger/MonitorInfoDTO";
import {PageServices} from "../../../PageServices";
import {MonitorDictionary} from "./dictionary";
import {MonitorApi} from "../../../../swagger/MonitorApi";
import {MONITORTYPE} from "../../../../swagger/MONITORTYPE";
import {MonitorSearchCriteria} from "../../../../swagger/MonitorSearchCriteria";
import {MonitorSelectRequest} from "../../../../swagger/MonitorSelectRequest";
import {MonitorSelectDTO} from "../../../../swagger/MonitorSelectDTO";
import {MonitorSelectListResponse} from "app/swagger/api";
import {DIALOG_TYPES} from "../../../UIHelper";
import {LocalStorageManager} from "../../../LocalStorageManager";
import {MonitorContainer} from "app/modules/shared/components/Monitor/Monitor";
import {CounterPropertiesDef} from "../../../../swagger/CounterProperties";
import {GaugePropertiesDef} from "../../../../swagger/GaugeProperties";

@Component({
	moduleId: module.id,
	selector: 'MonitorEditPopup',
	templateUrl: 'MonitorEditPopup.html',
	providers: [MonitorApi]
})

export class MonitorEditPopup extends BasePopupEditPage<MonitorContainer> implements OnInit, AfterViewInit, OnDestroy {

	MONITORTYPE = MONITORTYPE;
	monitorInfos: Array<MonitorInfoDTO> = [];
	selectedMonitorInfo: MonitorInfoDTO = <MonitorInfoDTO>{};

	constructor(public monitorApi: MonitorApi,
	            public localStorageManager: LocalStorageManager,
	            public baseServices: PageServices,
	            public elementRef: ElementRef) {
		super(baseServices, elementRef);
		this.addI18NBundle('monitor', MonitorDictionary);

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
		this.fetchMonitors();
	}


	ngAfterViewInit() {
		return super.ngAfterViewInit();
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}

	fetchMonitors() {
		let req: MonitorSelectRequest = <MonitorSelectRequest>this.baseServices.apiHelper.genRequest({
			data: <MonitorSelectDTO>{
				responseFields: [],
				requestFields: <MonitorSearchCriteria>{}
			}
		});
		this.monitorApi
			.monitorSelectPOST(req)
			.subscribe((res: MonitorSelectListResponse) => {
				if (this.baseServices.uiHelper.processResponse(res)) {
					this.monitorInfos = res.data.list;
				}
			});
	}

	getMonitorListName(info: MonitorInfoDTO) {
		return $.t('statistic_metrics.' + info.name) + ' ' + info.monitorTags.reduce((a, b) => {
				return a + b.tag + ': ' + b.val + ' ';
			}, '');
	}

	save() {
		let form: any = $('form', this.elementRef.nativeElement)[0];
		if (!form.checkValidity()) {
			this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
			return;
		}
		this.localStorageManager.setItem('monitor' + this.data.monitorId, this.selectedMonitorInfo.id, false);
		this.close(true, this.selectedMonitorInfo);
	}
}
