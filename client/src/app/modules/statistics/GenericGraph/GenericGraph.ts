/**
 * Created by omeroz on 9/14/2017.
 */

import {
	Component,
	AfterViewInit,
	OnChanges,
	ElementRef,
	ChangeDetectorRef,
} from "@angular/core";
import {PageServices} from "../../PageServices";
import {TsdbQueryResponse} from "../../../swagger/TsdbQueryResponse";
import {AbstractGraph} from "../AbstractGraph";
import {RandomStatisticsGenerator} from "../Services/RandomStatisticsGenerator";
import {TsdbServerProxy} from "../Services/TsdbServerProxy";
import {TsdbDataSet} from "../../../swagger/TsdbDataSet";

@Component({
	moduleId: module.id,
	selector: 'genericgraph',
	templateUrl: "./GenericGraph.html",
	inputs: ['allMetrics'],
})

export class GenericGraph extends AbstractGraph implements AfterViewInit, OnChanges {

	// public groups: Array<string> = [];
	// public devices: Map<string, Array<string>> = new Map();
	// public selectedDevice: DeviceGroupKeyValuePair = <DeviceGroupKeyValuePair>{};
	// public selectedDeviceCount = 1;
	// public selectedGroupCount: number = 1;

	constructor(public tsdbApi: TsdbServerProxy,
	            public changeDetector: ChangeDetectorRef,
	            public generator: RandomStatisticsGenerator,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(tsdbApi, changeDetector, generator, baseServices, elementRef);
		this.metricName = "df.bytes";
		this.title = this.t('titles.groupstat');
	}

	ngOnChanges(e) {
		super.ngOnChanges(e);
	}

	ngAfterViewInit() {
		// $(".groupSelect", this.$container).select2({
		// 	maximumSelectionLength: 2
		// }).on('change', (evt) => {
		// 	let values = $(evt.target).val();
		// 	this.selectedGroupCount = values.length;
		// 	this.tags = [];
		// 	this.tags.push([
		// 		<StatisticsTag>{
		// 			tag: 'group',
		// 			val: values.join('|')
		// 		},
		// 		<StatisticsTag>{
		// 			tag: 'device',
		// 			val: this.selectedDevice.key
		// 		}
		// 	]);
		// 	this.fetchGraphData();
		// });

		return super.ngAfterViewInit();
	}


	/**
	 * Parametreleri alabilmenin tek yolu servera anlamsız bir sorgu çekmek.
	 * @param metrics
	 */
	initParameters(metrics) {
		let beginTime = moment()
			.subtract(1, "day")
			.toDate()
			.getTime();
		let endTime = new Date().getTime();

		let requestData = this.baseServices.apiHelper.genRequest({
			"metrics": metrics,
			"beginTime": beginTime,
			"endTime": endTime,
			"aggregator": "none",
			"downsampling": {
				"period": 60000,
				"aggregator": "avg"
			},
			"tagValues": [],
			"maxResult": "1000"
		});
		this.tsdbApi
			.tsdbQueryPOST(requestData)
			.subscribe(
				(res: TsdbQueryResponse) => {
					if (this.baseServices.uiHelper.processResponse(res) && res.datasets.length > 0) {
						this.initTags(res.datasets);
					}
				});
	}

	public tagLists: Array<TagNameListPair> = [];

	initTags(dataSets: Array<TsdbDataSet>) {
		dataSets.forEach((dataSet, i) => {
			let tagCount = dataSet.tagValues.length;
			if (i == 0) {
				for (let j = 0; j < tagCount; j++) {
					this.tagLists.push({name: dataSet.tagValues[j].tag, list: new Map()});
				}
			}
			this.tagLists.forEach((tagNameListPair, tagListIndex) => {
				let currentTagKey = dataSet.tagValues[tagListIndex].val;
				for (let j = 0; j < tagCount; j++) {
					if (j != tagListIndex) {
						let currentTagValue;
						if (tagNameListPair.list.has(currentTagKey)) {
							currentTagValue = tagNameListPair.list.get(currentTagKey);
						} else {
							currentTagValue = new Map();
						}

						// if(value.tagValues[j])
						let linkedTagName = dataSet.tagValues[j].tag;
						let linkedTagVal = dataSet.tagValues[j].val;

						let m;
						if (currentTagValue.has(linkedTagName)) {
							m = currentTagValue.get(linkedTagName);
						} else {
							m = [];
						}

						m.indexOf(linkedTagVal) == -1 && m.push(linkedTagVal);
						tagNameListPair.list.set(currentTagKey, m);
					}
				}
			});
		});
	}

	tagSelected(pair: TagNameListPair, selectedTag: { key, value }) {
		// let tag = this.tags[0] || [];
		// tag.push(
		// 	<StatisticsTag>{
		// 		tag: pair.name,
		// 		val: selectedTag.key
		// 	}
		// );
		// this.tags.push(tag);
		this.fetchGraphData();
	}
}

export interface TagNameListPair {
	name: string;
	list: Map<string, Map<string, Array<string>>>;
}

