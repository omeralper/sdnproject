/**
 * Created by omeroz on 9/13/2017.
 */

import {
	Component,
	ElementRef,
	ChangeDetectorRef,
} from "@angular/core";
import {PageServices} from "../../PageServices";
import {AbstractGraph} from "../AbstractGraph";
import {RandomStatisticsGenerator} from "../Services/RandomStatisticsGenerator";
import {TsdbServerProxy} from "../Services/TsdbServerProxy";
import {LinkDTO} from "../../../swagger/LinkDTO";

@Component({
	moduleId: module.id,
	selector: 'linkgraph',
	templateUrl: "./LinkGraph.html",
	inputs: ['selectedLink'],
})

export class LinkGraph extends AbstractGraph {

	public idList: Array<string> = [];
	public selectedLink: LinkDTO = <LinkDTO>{};
	public selectedIds: Array<string> = [];

	constructor(public tsdbApi: TsdbServerProxy,
	            public changeDetector: ChangeDetectorRef,
	            public generator: RandomStatisticsGenerator,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(tsdbApi, changeDetector, generator, baseServices, elementRef);
		this.metricName = "DelayService.link";
		this.setMetric();
		this.title = this.t('titles.link');
	}

	IdSelected(values) {
		this.addTag('id', values);
		this.fetchGraphData();
	}

	initParams(dataSets) {
		dataSets.forEach((value) => {
			let id = value.tagValues[0].val;
			this.idList.indexOf(id) == -1 && this.idList.push(id);
		});
		this.changeDetector.detectChanges();
		if (this.selectedLink.srcPort && this.selectedLink.destPort) {
			this.IdSelected([this.selectedLink.srcPort.id + '/' + this.selectedLink.srcPort.number,
				this.selectedLink.destPort.id + '/' + this.selectedLink.destPort.number]);
		} else {
			this.selectedIds = [this.idList[0]];
		}
	}
}

