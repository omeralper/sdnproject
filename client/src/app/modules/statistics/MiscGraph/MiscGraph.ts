/**
 * Created by omeroz on 9/12/2017.
 */

import {
	Component,
	OnChanges,
	ElementRef,
	ChangeDetectorRef,
} from "@angular/core";
import {PageServices} from "../../PageServices";
import {TsdbQueryResponse} from "../../../swagger/TsdbQueryResponse";
import {AbstractGraph} from "../AbstractGraph";
import {RandomStatisticsGenerator} from "../Services/RandomStatisticsGenerator";
import {TsdbServerProxy} from "../Services/TsdbServerProxy";

@Component({
	moduleId: module.id,
	selector: 'miscgraph',
	templateUrl: "./MiscGraph.html",
})

export class MiscGraph extends AbstractGraph {

	public devices: Array<string> = [];
	public selectedDevices: Array<string> = [];

	constructor(public tsdbApi: TsdbServerProxy,
	            public changeDetector: ChangeDetectorRef,
	            public generator: RandomStatisticsGenerator,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(tsdbApi, changeDetector, generator, baseServices, elementRef);
		this.metricName = "misc-stats";
		this.setMetric();
		this.title = this.t('titles.misc-stats');
	}

	deviceSelected(values) {
		this.addTag('device', values);
		this.fetchGraphData();
	}

	initParams(datasets) {
		datasets.forEach((value) => {
			let device = value.tagValues[0].val;
			this.devices.indexOf(device) == -1 && this.devices.push(device);
		});

		this.changeDetector.detectChanges();
		this.selectedDevices = [this.devices[0]];
	}
}


