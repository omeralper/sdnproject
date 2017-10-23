/**
 * Created by omeroz on 9/15/2017.
 */

import {
	Component,
	OnInit,
	AfterViewInit,
	OnDestroy,
	OnChanges,
	ElementRef,
	ChangeDetectorRef
} from "@angular/core";
import {PageServices} from "../../PageServices";
import {MODAL_SIZE} from "../../ModalComponent";
import {IndicatorsResponse} from "../../../swagger/IndicatorsResponse";
import {MetricDefinitions} from "../../../swagger/MetricDefinitions";
import {SwitchIndicatorDTO} from "../../../swagger/SwitchIndicatorDTO";
import {MetricDefinition} from "../../../swagger/MetricDefinition";
import {StatisticsService} from "../Services/StatisticsService";
import {BasePopupPage} from "../../../commons/BasePopupPage/BasePopupPage";
import {SwitchDTO} from "../../../swagger/SwitchDTO";

@Component({
	moduleId: module.id,
	selector: 'SwitchGraphPopup',
	templateUrl: './SwitchGraphPopup.html',
})
export class SwitchGraphPopup extends BasePopupPage<SwitchDTO> implements OnInit, AfterViewInit, OnChanges, OnDestroy {

	public switchList: Array<SwitchIndicatorDTO> = [];

	constructor(public changeDetector: ChangeDetectorRef,
	            public statisticsService: StatisticsService,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(baseServices, elementRef);

		this.modalSize = MODAL_SIZE.LARGE;
		this.setI18NKey('statistics.dashboard.popups.switch');

	}

	ngOnInit() {
		super.ngOnInit();
	}

	ngOnChanges(e) {
		super.ngOnChanges(e);
	}

	ngAfterViewInit() {
		if (super.ngAfterViewInit()) {
			this.initSummaryStatistics();
			return true;
		}
		return false;
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}

	initSummaryStatistics() {
		this.statisticsService
			.initSummaryStatistics()
			.subscribe(
				(res: IndicatorsResponse) => {
					if (this.baseServices.uiHelper.processResponse(res)) {
						this.switchList = res.data.controllerList.list[0] &&
							res.data.controllerList.list[0].switchList.list;
						this.switchList.forEach((sw) => {
							sw.portList.list = sw.portList.list.filter((port) => {
								return port > -1;
							});
						});
						this.changeDetector.detectChanges();
					}
				});
	}
}

