/**
 * Created by omeroz on 2/8/2017.
 */
import {
	OnInit,
	AfterViewInit,
	OnDestroy,
	OnChanges,
	ElementRef, ChangeDetectorRef,
} from "@angular/core";
import {PageServices} from "../PageServices";
import {TsdbQueryResponse} from "../../swagger/TsdbQueryResponse";
import {BasePage} from "../../commons/BasePage";
import {TsdbDataSet} from "../../swagger/TsdbDataSet";
import {Observable} from 'rxjs/Rx';
import {MetricDefinition} from "../../swagger/MetricDefinition";
import {RandomStatisticsGenerator} from "./Services/RandomStatisticsGenerator";
import {TsdbServerProxy} from "./Services/TsdbServerProxy";
import {Metrics} from "./Services/StatisticsService";
import Timer = NodeJS.Timer;

export abstract class AbstractGraph extends BasePage implements OnInit, AfterViewInit, OnChanges, OnDestroy {
	public metricName: string;
	public tags: Map<string, Array<string>> = new Map();

	public selectedDuration: GraphDuration = <GraphDuration>{};
	public graphData: TsdbQueryResponse = <TsdbQueryResponse>{};
	public chart: Highcharts.ChartObject = <Highcharts.ChartObject>{};
	public durations: Array<GraphDuration> = [
		{unit: 'minute', val: 5, sampling: '1000'}, //live data
		{unit: 'hour', val: 1, sampling: '60000'},       // hour: 1 min
		{unit: 'hour', val: 2, sampling: '60000'},
		{unit: 'hour', val: 4, sampling: '60000'},
		{unit: 'hour', val: 12, sampling: '300000'},     // 12 hour: 5 min
		{unit: 'day', val: 1, sampling: '600000'},       // day: 10 min
		{unit: 'day', val: 3, sampling: '600000'},
		{unit: 'week', val: 1, sampling: '3600000'},      // week: 1 hour
		{unit: 'month', val: 1, sampling: '14400000'},
		{unit: 'month', val: 3, sampling: '43200000'},
		{unit: 'month', val: 6, sampling: '86400000'},
		{unit: 'year', val: 1, sampling: '86400000'}
	];

	public aggregator = {
		"AVERAGE": "avg",
		"SUM": "sum",
		"NONE": "none"
	};

	public metrics: Array<MetricDefinition> = [];
	public selectedMetrics: Array<MetricDefinition> = [];
	public refreshFrequency: number = 1000;
	public lastFetchDate: number;
	public liveModeOn: boolean = false;
	public liveModeTimer: Timer;
	public liveDataFetchFrequency: number = 3000;

	constructor(public tsdbApi: TsdbServerProxy,
	            public changeDetector: ChangeDetectorRef,
	            public generator: RandomStatisticsGenerator,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(baseServices, elementRef);
		this.setI18NKey('statistics.dashboard');
	}

	setMetric() {
		this.metrics = Metrics[this.metricName];
	}

	ngOnInit() {
		super.ngOnInit();
		this.selectedDuration = this.durations[1];
		this.selectedMetrics.push(this.metrics[0]);
		this.initGraph({});
	}


	ngAfterViewInit() {
		$("input[type=checkbox]").uniform();
		this.fetchParams();
		return super.ngAfterViewInit();
	}

	ngOnDestroy() {
		super.ngOnDestroy();
		this.changeDetector.detach();
		clearInterval(this.liveModeTimer);
	}

	metricSelected(metrics) {
		this.fetchGraphData();
	}

	/**
	 * Fetches dummy query to initialize filters. With the query result, initParams is been called to initialize filters.
	 * @param
	 */
	fetchParams() {

		let beginTime = moment()
			.subtract(this.selectedDuration.val, this.selectedDuration.unit)
			.toDate()
			.getTime();
		let endTime = new Date().getTime();

		let requestData = this.baseServices.apiHelper.genRequest({
			"metrics": this.getSampleMetrics() || this.metrics.map(value => value.metricName),
			"beginTime": beginTime,
			"endTime": endTime,
			"aggregator": "none",
			"downsampling": {
				"period": 10000,
				"aggregator": "avg"
			},
			"tagValues": this.getDefaultTags(),
			"maxResult": 1000
		});
		Object.keys(this.chart).length != 0 && this.chart.showLoading();
		let s =
			this.tsdbApi
				.tsdbQueryPOST(requestData)
				.subscribe(
					(res: TsdbQueryResponse) => {
						this.chart.hideLoading();
						if (this.baseServices.uiHelper.processResponse(res) && res.datasets.length > 0) {
							this.initParams(res.datasets);
						}
					},
					() => {
						this.chart.hideLoading();
					});
		this.subscriptions.push(s);
	}

	/**
	 * Virtual function to be overriden
	 * @param
	 */
	getDefaultTags(){
		return [];
	}

	/**
	 * Virtual function to be overriden
	 * @param dataSets
	 */
	initParams(dataSets) {

	}

	/**
	 * Virtual function. Sometimes graphs shouldn't send all metric definitons during first fetchParams, this function narrows
	 * down the metrics to be sent
	 */
	getSampleMetrics() {

	}

	/**
	 * Virtual function.
	 */
	getAggregator() {
		return this.aggregator.NONE;
	}

	private fetchTimeout;
    fetchGraphData(reDraw = true) {
    	clearTimeout(this.fetchTimeout);
    	this.fetchTimeout = setTimeout(()=>{
            clearTimeout(this.fetchTimeout);
    		this._fetchGraphData(reDraw);
		},500);
    }

	private _fetchGraphData(reDraw = true) {
		//this.changeDetector.detectChanges();
		let beginTime = moment()
			.subtract(this.selectedDuration.val, this.selectedDuration.unit)
			.toDate()
			.getTime();
		let endTime = new Date().getTime();

		let requests = [];
		if (this.selectedMetrics.length > 0 && this.tags.size > 0) {
			// this.tags.forEach((tagArray: Array<string>, key:string) => {
			// 	let requestData = this.baseServices.apiHelper.genRequest({
			// 		"metrics": this.selectedMetrics,
			// 		"beginTime": (this.liveModeOn && !reDraw) ? this.lastFetchDate : beginTime,
			// 		"endTime": endTime,
			// 		"aggregator": "none",
			// 		"downsampling": {
			// 			"period": this.selectedDuration.sampling,
			// 			"aggregator": "avg"
			// 		},
			// 		"tagValues": tagArray,
			// 		"maxResult": "1000"
			// 	});
			// 	requests.push(this.tsdbApi.tsdbQueryPOST(requestData));
			// });
			let t = [];
			this.tags.forEach((tagArray, key) => {
				t.push({
					tag: key,
					val: tagArray.join('|')
				})
			});

			let requestData = this.baseServices.apiHelper.genRequest({
				"metrics": this.selectedMetrics.map(m => m.metricName),
				"beginTime": (this.liveModeOn && !reDraw) ? this.lastFetchDate : beginTime,
				"endTime": endTime,
				"aggregator": this.getAggregator(),
				"downsampling": {
					"period": this.selectedDuration.sampling,
					"aggregator": "avg"
				},
				"tagValues": t,
				"maxResult": 1000
			});

			requests.push(this.tsdbApi.tsdbQueryPOST(requestData));
			!this.liveModeOn && Object.keys(this.chart).length != 0 && this.chart.showLoading();
		}
		this.lastFetchDate = endTime;
		let s =
			Observable.forkJoin(requests).subscribe((results: Array<TsdbQueryResponse>) => {
				this.chart.hideLoading();
				this.graphData = results.reduce((a, b) => {
					b.datasets = b.datasets.concat(a.datasets);
					return b;
				});
				if (reDraw)
					this.updateGraph();
				else {
					this.drawNewPoints();
				}
			}, () => {
				this.chart.hideLoading();
			});
		this.subscriptions.push(s);
	}

	addTag(key, val) {
		let v = val instanceof Array ? val : [val];
		this.tags.set(key, v);
		// if (this.tags.has(key)) {
		// 	all ? this.tags.set(key, v) : this.tags.get(key).push(v);
		// } else {
		// 	this.tags.set(key, v);
		// }
	}

	removeTag(key, val?:any) {
		if (this.tags.has(key)) {
			if (is.existy(val)) {
                let tags = this.tags.get(key);
                let i = tags.indexOf(val);
                tags.splice(i, 1);
            } else {
				this.tags.delete(key);
			}
		}
	}

	getTagName(dataSet: TsdbDataSet) {
		let tag = "";
		dataSet.tagValues.forEach((t) => {
			tag += t.tag + ': ' + t.val + " ";
		});
		let metricName = this.t('metrics.' + dataSet.metric);
		return tag + " (" + metricName + ")";
	}

	updateGraph() {
		var that = this;
		let options = {
			series: [],
			yAxis: [],
			xAxis: undefined
		};
		let yAxises = {};
		let yCounter = 0;
		this.graphData.datasets && this.graphData.datasets.forEach((dataSet) => {
			let yIndex = 0;
			if (yAxises[dataSet.metric] == undefined) {
				yAxises[dataSet.metric] = yIndex = yCounter++;
				options.yAxis.push({
					metric: dataSet.metric,
					labels: {
						formatter: function () {
							let metric = that.metrics.find((m) => {
								return m.metricName == dataSet.metric;
							});

							switch (metric.metricUnit) {
								case 'bytes':
									return that.baseServices.uiHelper.formatBytes(this.value,1); //that.bytesFormatter(this.value, true);
								case 'bytes/sec':
									return that.baseServices.uiHelper.formatBytes(this.value,1); //that.bytesFormatter(this.value, true) + "/s";
								case 'percent':
									return this.value + "%";
								case 'miliseconds':
									return that.baseServices.uiHelper.formatMiliseconds(this.value);
								case 'seconds':
									return that.baseServices.uiHelper.formatMiliseconds(this.value*1000);
								case 'packets/sec':
									return this.value + " pkts/s";
								default:
									return this.axis.defaultLabelFormatter.call(this);
							}
						}
						// style: {
						//     color: Highcharts.getOptions().colors[yIndex]
						// }
					},
					title: {
						text: this.t("metrics." + dataSet.metric),
						// style: {
						//     color: Highcharts.getOptions().colors[yIndex]
						// }
					},
					opposite: yIndex % 2 == 1
				});
			} else {
				yIndex = yAxises[dataSet.metric];
			}

			options.series.push({
				name: this.getTagName(dataSet),
				yAxis: yIndex,
				data: this.graphData.tstamps.map((tstamp, xIndex) => {
					return [tstamp, dataSet.values[xIndex]];
				}),
				connectNulls: true
				// color: Highcharts.getOptions().colors[yIndex]
			});
		});
		this.initGraph(options)
	}

	initGraph(options) {
		var that = this;
		let container = $('.graphContainer', this.$container);
		let defaultOptions = {
			chart: {
				type: 'line',
				events: {
					load: () => {
						if (that.liveModeOn && !that.liveModeTimer) {
							that.liveModeTimer = setInterval(() => {
								this.fetchGraphData(false);
							}, that.liveDataFetchFrequency);
						}
					}
				}
			},
			title: {
				text: ""
			},
			exporting: {
				filename: this.t('switch.title'),
				sourceWidth: container.width(),
				sourceHeight: container.height(),
			},
			xAxis: {
				type: 'datetime',
				// tickPixelInterval: 150,
				minTickInterval: 10000
			},
		};
		this.chart = new Highcharts.Chart(container[0], $.extend(defaultOptions, options));
	}

	drawNewPoints() {
		this.graphData.tstamps.forEach((stamp, i) => {
			this.graphData.datasets.forEach((set, j) => {
				set.values[i] && this.chart.series[j] && this.chart.series[j].addPoint([stamp, set.values[i]], true, true, true);
			});
		});
	}

	refresh() {
		this.fetchGraphData(true);
	}

	live() {
		this.liveModeOn = !this.liveModeOn;
		if (this.liveModeOn) {
			this.selectedDuration = this.durations[0];
		} else {
			this.selectedDuration = this.durations[1];
			clearInterval(this.liveModeTimer);
			this.liveModeTimer = null;
		}
		this.fetchGraphData(true);
	}

	durationChanged(duration) {
		this.selectedDuration = duration;
		this.fetchParams();
		//this.fetchGraphData(true);
	}

	fullScreen() {
		setTimeout(() => {
			this.chart.reflow();
		}, 50);
	}

	filter() {
		$('.filter', this.elementRef.nativeElement).toggle();
	}
}

export interface GraphDuration {
	unit: string;
	val: number;
	sampling: string;
}




