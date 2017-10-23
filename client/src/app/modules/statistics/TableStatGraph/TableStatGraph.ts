/**
 * Created by omeroz on 8/25/2017.
 */
import {
	Component,
	ElementRef,
	ChangeDetectorRef
} from "@angular/core";
import {PageServices} from "../../PageServices";
import {RandomStatisticsGenerator} from "../Services/RandomStatisticsGenerator";
import {AbstractGraph} from "../AbstractGraph";
import {TsdbServerProxy} from "../Services/TsdbServerProxy";
import {SwitchIndicatorDTO} from "../../../swagger/SwitchIndicatorDTO";
import {TsdbQueryResponse} from "../../../swagger/TsdbQueryResponse";

@Component({
	moduleId: module.id,
	selector: 'tablestatgraph',
	templateUrl: "./TableStatGraph.html",
	inputs: ['switchList']
})

export class TableStatGraph extends AbstractGraph {
	public switchList: Array<SwitchIndicatorDTO> = [];
	public selectedSwitch: SwitchIndicatorDTO = <SwitchIndicatorDTO>{};
	public tableList: Array<any> = [];
	public selectedTables: Array<any> = [];

	constructor(public tsdbApi: TsdbServerProxy,
	            public changeDetector: ChangeDetectorRef,
	            public generator: RandomStatisticsGenerator,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(tsdbApi, changeDetector, generator, baseServices, elementRef);
		this.metricName = "tablestat";
		this.setMetric();
		this.title = this.t('titles.tablestat');
	}

	ngOnChanges(e) {
		if (e.switchList && e.switchList.currentValue.length > 0 &&
			this.switchList[0].portList &&
			this.switchList[0].portList.list &&
			this.switchList[0].portList.list.length > 0) {
			this.changeDetector.detectChanges();
			this.switchSelected(this.switchList[0]);
		}
		super.ngOnChanges(e);
	}

	tableSelected(values) {
		this.addTag('table', values);
		this.fetchGraphData();
	}

	switchSelected(sw) {
		this.selectedSwitch = sw;
		this.addTag('device', this.selectedSwitch.id);
		this.fetchTables(sw);
	}

	fetchTables(sw: SwitchIndicatorDTO) {
		this.tableList = [];

		let beginTime = moment()
			.subtract(20, "minute")
			.toDate()
			.getTime();
		let endTime = new Date().getTime();

		let requestData = this.baseServices.apiHelper.genRequest({
			"metrics": ["tablestat.active"], //this.filteredMetrics.map(metric => metric.metricName),
			"beginTime": beginTime,
			"endTime": endTime,
			"aggregator": "none",
			"downsampling": {
				"period": 60000,
				"aggregator": "avg"
			},
			"tagValues": [
				{
					tag: 'device',
					val: sw.id
				},
				{
					tag: 'table',
					val: '*'
				}],
			"maxResult": "1000"
		});

		let s =
			this.tsdbApi
				.tsdbQueryPOST(requestData)
				.subscribe(
					(res: TsdbQueryResponse) => {
						if (this.baseServices.uiHelper.processResponse(res) && res.datasets.length > 0)
							res.datasets.forEach((value) => {
								value.tagValues[1] && value.tagValues[1].tag == "table" &&
								this.tableList.push(value.tagValues[1].val)
							});

						this.changeDetector.detectChanges();
						this.selectedTables = [this.tableList[0]];
					});
		this.subscriptions.push(s);
	}
}

