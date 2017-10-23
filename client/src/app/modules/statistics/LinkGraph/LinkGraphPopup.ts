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
import {BasePopupPage} from "../../../commons/BasePopupPage/BasePopupPage";
import {LinkDTO} from "../../../swagger/LinkDTO";
import {MetricDefinitions} from "../../../swagger/MetricDefinitions";
import {StatisticsService} from "../Services/StatisticsService";
import {MetricDefinition} from "../../../swagger/MetricDefinition";

@Component({
	moduleId: module.id,
	selector: 'LinkGraphPopup',
	templateUrl: './LinkGraphPopup.html',
})
export class LinkGraphPopup extends BasePopupPage<LinkDTO> implements OnInit, AfterViewInit, OnChanges, OnDestroy {

	constructor(public changeDetector: ChangeDetectorRef,
	            public statisticsService: StatisticsService,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(baseServices, elementRef);

		this.modalSize = MODAL_SIZE.LARGE;
		this.setI18NKey('statistics.dashboard.popups.link');
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

