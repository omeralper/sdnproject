/**
 * Created by omeroz on 10/7/2017.
 */

import {
	Component,
	ElementRef,
	Input, Output, EventEmitter
} from "@angular/core";
import {MetricDefinition} from "../../../swagger/MetricDefinition";
import {PageServices} from "../../PageServices";
import {BasePage} from "../../../commons/BasePage";

@Component({
	moduleId: module.id,
	selector: 'metricselect',
	templateUrl: "./MetricSelect.html"
})

export class MetricSelect extends BasePage{
	@Input('metrics') metrics: Array<MetricDefinition> = [];
	@Input('name') name: string;

	@Input() selectedMetrics: Array<MetricDefinition> = [];
	@Output() selectedMetricsChange: EventEmitter<Array<MetricDefinition>> = new EventEmitter();

	count: number = 0;

	constructor(baseServices: PageServices,
	            elementRef: ElementRef) {
		super(baseServices, elementRef);
		this.setI18NKey('statistics.dashboard');
	}

	onMetricSelect(metric, e) {
		let checked = e ? e.target.checked : true;
		if (checked) {
			this.selectedMetrics.push(metric);
		} else {
			let i = this.selectedMetrics.indexOf(metric);
			this.selectedMetrics.splice(i, 1);
		}
		this.selectedMetricsChange.emit(this.selectedMetrics);
	}
}


