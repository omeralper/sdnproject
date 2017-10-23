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
import {MetricDefinitions} from "../../../swagger/MetricDefinitions";
import {MetricDefinition} from "../../../swagger/MetricDefinition";
import {StatisticsService} from "../Services/StatisticsService";
import {BasePopupPage} from "../../../commons/BasePopupPage/BasePopupPage";
import {HostDTO} from "../../../swagger/HostDTO";

@Component({
	moduleId: module.id,
	selector: 'UserGraphPopup',
	templateUrl: './UserGraphPopup.html',
})
export class UserGraphPopup extends BasePopupPage<HostDTO> implements OnInit, AfterViewInit, OnDestroy {

	constructor(public changeDetector: ChangeDetectorRef,
	            public statisticsService: StatisticsService,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(baseServices, elementRef);

		this.modalSize = MODAL_SIZE.LARGE;
		this.setI18NKey('statistics.dashboard.popups.host');

	}

	ngOnInit() {
		super.ngOnInit();
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
}

