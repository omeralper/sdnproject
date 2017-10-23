/**
 * Created by omeroz on 7/4/2017.
 */
import {
	Component, ElementRef, OnInit, Input, OnDestroy, Output, EventEmitter
} from "@angular/core";
import {LocalStorageManager} from "../../../LocalStorageManager";
import {ModalResult, SharedService} from "../../../SharedService";
import {MonitorEditPopup} from "./MonitorEditPopup";
import {MONITORTYPE} from "../../../../swagger/MONITORTYPE";
import {MonitorInfoDTO} from "../../../../swagger/MonitorInfoDTO";
import {MonitorApi} from "../../../../swagger/MonitorApi";
import {GenericIdListRequest} from "../../../../swagger/GenericIdListRequest";
import {MonitorValueListResponse} from "../../../../swagger/MonitorValueListResponse";
import {PageServices} from "../../../PageServices";
import {MonitorValueDTO} from "../../../../swagger/MonitorValueDTO";
import {MonitorSelectRequest} from "../../../../swagger/MonitorSelectRequest";
import {MonitorSelectListResponse} from "../../../../swagger/MonitorSelectListResponse";
import {MonitorSelectDTO} from "../../../../swagger/MonitorSelectDTO";
import {MonitorSearchCriteria} from "../../../../swagger/MonitorSearchCriteria";
import {BasePage} from "../../../../commons/BasePage";

@Component({
	moduleId: module.id,
	selector: 'Monitor',
	templateUrl: 'Monitor.html',
	providers: [MonitorApi]
})

export class Monitor extends BasePage implements OnInit, OnDestroy {
	@Input() monitorId: string;
	@Output() remove = new EventEmitter<any>();
	MONITORTYPE = MONITORTYPE;
	monitorInfo: MonitorInfoDTO = <MonitorInfoDTO>{};
	monitorValue: MonitorValueDTO = <MonitorValueDTO>{};
	monitorInfoId;
	status: MONITORSTATUS = MONITORSTATUS.NoId;
	MONITORSTATUS = MONITORSTATUS;
	refreshTimerId: NodeJS.Timer;
	tags: string;

	constructor(public elementRef: ElementRef,
	            public monitorApi: MonitorApi,
	            public localStorageManager: LocalStorageManager,
	            public sharedService: SharedService,
	            public baseServices: PageServices) {
		super(baseServices, elementRef);
	}

	ngOnInit() {
		try {
			this.monitorInfoId = this.localStorageManager.getItem('monitor' + this.monitorId, false);
			if (this.monitorInfoId) {
				this.status = MONITORSTATUS.OnlyId;
				this.refreshTimerId = setInterval(() => {
					this.fetchMonitorValue();
				}, 5000);
				let req = <MonitorSelectRequest>this.baseServices.apiHelper.genRequest({
					data: <MonitorSelectDTO>{
						responseFields: [],
						requestFields: <MonitorSearchCriteria>{
							id: this.monitorInfoId
						}
					}
				});
				this.monitorApi
					.monitorSelectPOST(req)
					.subscribe((res: MonitorSelectListResponse) => {
						if (res.data && res.data.list && res.data.list.length > 0) {
							this.setMonitor(res.data.list[0]);
						} else {
							this.status = MONITORSTATUS.InfoNotFound;
						}
					}, () => {
						this.status = MONITORSTATUS.InfoNotFound;
					});
			}
		} catch (e) {
			console.error(e);
		}
	}

	ngOnDestroy() {
		clearTimeout(this.refreshTimerId);
	}

	editMonitor() {
		this.sharedService.showModal(MonitorEditPopup, <MonitorContainer>{monitorId: this.monitorId},
			(result: ModalResult) => {
				if (result.isSuccess) {
					this.setMonitor(result.data);
					this.monitorInfoId = this.monitorInfo.id;
				}
			});
	}

	setMonitor(monitorInfo) {
		this.monitorInfo = monitorInfo;
		this.tags = this.monitorInfo.monitorTags.reduce((a, b) => {
			return a + b.tag + ': ' + b.val + ' ';
		}, '');
		this.status = MONITORSTATUS.Info;
		this.fetchMonitorValue();
	}

	fetchMonitorValue() {
		if (this.monitorInfo && this.monitorInfo.id) {
			let request = <GenericIdListRequest>this.baseServices.apiHelper.genRequest({
				idList: [this.monitorInfo.id]
			});
			this.monitorApi
				.monitorGetPOST(request)
				.subscribe((res: MonitorValueListResponse) => {
					if (this.baseServices.uiHelper.processResponse(res) && res.data.list.length > 0) {
						this.monitorValue = res.data.list[0];
					}
				});
		}
	}

	getText() {
		return i18next.t('common.monitor.addMonitor');
	}

	removeMonitor(e) {
		e.stopImmediatePropagation();
		this.monitorInfo = <MonitorInfoDTO>{};
		this.tags = "";
		this.status = MONITORSTATUS.NoId;
		this.remove.emit();
	}

}

export interface MonitorContainer {
	monitorId: string
}

export enum MONITORSTATUS{
	NoId,
	OnlyId,
	Info,
	InfoNotFound
}



