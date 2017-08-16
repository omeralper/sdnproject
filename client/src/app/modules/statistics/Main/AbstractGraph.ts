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
import {PageServices} from "../../PageServices";
import {TsdbQueryResponse} from "../../../swagger/TsdbQueryResponse";
import {BasePage} from "../../../commons/BasePage";
import {TsdbDataSet} from "../../../swagger/TsdbDataSet";
import {Observable} from 'rxjs/Rx';
import {MetricDefinition} from "../../../swagger/MetricDefinition";
import ChartObject = __Highcharts.ChartObject;
import {RandomStatisticsGenerator} from "../Services/RandomStatisticsGenerator";
import {TsdbServerProxy} from "../Services/TsdbServerProxy";
import SeriesObject = __Highcharts.SeriesObject;
import Timer = NodeJS.Timer;

export abstract class AbstractGraph extends BasePage implements OnInit, AfterViewInit,OnChanges, OnDestroy {
    public selectedDuration: GraphDuration = <GraphDuration>{};
    public graphData: TsdbQueryResponse = <TsdbQueryResponse>{};
    public chart: ChartObject = <ChartObject>{};
    public durations: Array<GraphDuration > = [
        {unit: 'minute', val: 5, sampling: '1000'}, //live data
        {unit: 'hour', val: 1, sampling: '60000'},       // hour: 1 min
        {unit: 'hour', val: 2, sampling: '60000'},
        {unit: 'hour', val: 4, sampling: '60000'},
        {unit: 'hour', val: 12, sampling: '300000'},     // 12 hour: 5 min
        {unit: 'day', val: 1, sampling: '600000'},       // day: 10 min
        {unit: 'day', val: 3, sampling: '600000'},
        {unit: 'week', val: 1, sampling: '3600000'}      // week: 1 hour
    ];

    public allMetrics: Array<MetricDefinition> = [];
    public filteredMetrics: Array<MetricDefinition> = [];
    public selectedMetrics: Array<string> = [];
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

    ngOnInit() {
        super.ngOnInit();
        this.selectedDuration = this.durations[1];
    }

    ngOnChanges(e) {
        super.ngOnChanges(e);
    }

    ngAfterViewInit() {
        this.drawGraph();
        return super.ngAfterViewInit();
    }

    ngOnDestroy() {
        super.ngOnDestroy();
        clearInterval(this.liveModeTimer);
    }

    durationChanged(duration) {
        this.selectedDuration = duration;
        this.fetchGraphData(true);
    }

    abstract getSelectedParams();

    abstract getTagValues(param);

    fetchGraphData(reDraw = true) {
        this.changeDetector.detectChanges();
        let beginTime = moment()
                .subtract(this.selectedDuration.val, this.selectedDuration.unit)
                .toDate()
                .getTime();
        let endTime = new Date().getTime();

        let requests = [];
        let selectedParams = this.getSelectedParams();
        if (this.selectedMetrics.length > 0 && selectedParams.length > 0) {
            selectedParams.forEach((selectedParam) => {
                let requestData = this.baseServices.apiHelper.genRequest({
                    "metrics": this.selectedMetrics,
                    "beginTime": (this.liveModeOn && !reDraw) ? this.lastFetchDate : beginTime,
                    "endTime": endTime,
                    "aggregator": "none",
                    "downsampling": {
                        "period": this.selectedDuration.sampling,
                        "aggregator": "avg"
                    },
                    "tagValues": this.getTagValues(selectedParam),
                    "maxResult": "1000"
                });
                requests.push(this.tsdbApi.tsdbQueryPOST(requestData));
            });
        }
        this.lastFetchDate = endTime;

        Observable.forkJoin(requests).subscribe((results: Array<TsdbQueryResponse>) => {
            this.graphData = results.reduce((a, b) => {
                b.datasets = b.datasets.concat(a.datasets);
                return b;
            });
            if (reDraw)
                this.drawGraph();
            else {
                this.drawNewPoints();
            }
        });
    }

    getTagName(dataSet: TsdbDataSet) {
        let tagName = "";
        dataSet.tagValues.forEach((t) => {
            tagName += t.val + " ";
        });
        let metricName = this.t('metrics.' + dataSet.metric);
        return tagName + " (" + metricName + ")";
    }

    refresh() {
        // this.liveModeOn = !this.liveModeOn;
        this.fetchGraphData(true);
    }

    live(liveMode:boolean){
        this.liveModeOn = liveMode;
        // var options: fetchDataOption = {};
        if (this.liveModeOn) {
            this.selectedDuration = this.durations[0];
            // options.beginTime = moment().subtract(5, 'minute')
            //     .toDate()
            //     .getTime();
            // options.period = '1000';
        } else {
            this.selectedDuration = this.durations[1];
            clearInterval(this.liveModeTimer);
            this.liveModeTimer = null;
        }
        this.fetchGraphData(true);
    }

    bytesFormatter(bytes, label) {
        if (bytes == 0) return '';
        var s = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
        var e = Math.floor(Math.log(bytes) / Math.log(1024));
        var value = ((bytes / Math.pow(1024, Math.floor(e))).toFixed(2));
        e = (e < 0) ? (-e) : e;
        if (label) value += ' ' + s[e];
        return value;
    }


    drawGraph() {
        var that = this;
        let container = $('.graphContainer', this.$container);
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
                            let metric = that.allMetrics.find((m) => {
                                return m.metricName == dataSet.metric;
                            });

                            switch (metric.metricUnit) {
                                case 'bytes':
                                    return that.bytesFormatter(this.value, true);
                                case 'bytes/sec':
                                    return that.bytesFormatter(this.value, true) + "/sec";
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
                // color: Highcharts.getOptions().colors[yIndex]
            });
        });


        let defaultOptions = {
            chart: {
                type: 'line',
                events: {
                    load: () => {
                        if (that.liveModeOn && !that.liveModeTimer) {
                            that.liveModeTimer = setInterval(() => {
                                console.log('fetch:' + new Date().toString());
                                this.fetchGraphData(false);
                            }, that.liveDataFetchFrequency);
                            console.log('time interval set: ' + that.liveModeTimer);
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

    fullScreen() {
        setTimeout(() => {
            this.chart.reflow();
        }, 50);
    }
}

export interface GraphDuration {
    unit: string;
    val: number;
    sampling: string;
}

// interface fetchDataOption {
//     beginTime?: number,
//     period?: string, //but number inside
// }


