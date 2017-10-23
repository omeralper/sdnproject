/**
 * Created by omeroz on 20.12.2016.
 */
import {
	Component,
	ElementRef,
	ChangeDetectorRef,
} from "@angular/core";
import {PageServices} from "../../PageServices";
import {RandomStatisticsGenerator} from "../Services/RandomStatisticsGenerator";
import {AbstractGraph} from "../AbstractGraph";
import {TsdbServerProxy} from "../Services/TsdbServerProxy";

@Component({
	moduleId: module.id,
	selector: 'ramgraph',
	templateUrl: "./RAMGraph.html",
})

export class RAMGraph extends AbstractGraph {
	public hosts: Array<string> = [];
	public selectedHosts: Array<string> = [];

	constructor(public tsdbApi: TsdbServerProxy,
	            public changeDetector: ChangeDetectorRef,
	            public generator: RandomStatisticsGenerator,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(tsdbApi, changeDetector, generator, baseServices, elementRef);
		this.metricName = "proc.meminfo";
		this.setMetric();
		this.title = this.t('titles.ram');
	}

	hostSelected(values) {
		this.addTag('host', values);
		this.fetchGraphData();
	}

	initParams(datasets) {
		datasets.forEach((value) => {
			this.hosts.indexOf(value.tagValues[0].val) == -1 &&
			this.hosts.push(value.tagValues[0].val)
		});
		this.changeDetector.detectChanges();
		this.selectedHosts = [this.hosts[0]];
	}
}

