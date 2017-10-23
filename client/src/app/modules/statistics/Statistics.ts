/**
 * Created by omeroz on 12.12.2016.
 */
import {
	Component,
	OnInit,
	AfterViewInit,
	OnDestroy,
	OnChanges,
	ElementRef,
	ChangeDetectorRef,
} from "@angular/core";
import {PageServices} from "../PageServices";
import {BaseTestPage} from "../../commons/BaseTestPage/BaseTestPage";
import {TopologyApi} from "../../swagger/TopologyApi";
import {SummaryIndicatorNumbersDTO} from "../../swagger/SummaryIndicatorNumbersDTO";
import {SwitchIndicatorDTO} from "../../swagger/SwitchIndicatorDTO";
import {TSDBApi} from "../../swagger/TSDBApi";
import {MetricDefinition} from "../../swagger/MetricDefinition";
import {RandomStatisticsGenerator} from "./Services/RandomStatisticsGenerator";
import {TsdbServerProxy} from "./Services/TsdbServerProxy";
import {ActivatedRoute} from "@angular/router";
import {StatisticsService} from "./Services/StatisticsService";
import {IndicatorsResponse} from "../../swagger/IndicatorsResponse";
import {MetricDefinitions} from "../../swagger/MetricDefinitions";
import {AppsApi} from "../../swagger/AppsApi";

@Component({
	moduleId: module.id,
	selector: 'NacUserStatisticsPopup',
	templateUrl: 'Statistics.html',
	providers: [TSDBApi, AppsApi],
})
export class Statistics extends BaseTestPage implements OnInit, AfterViewInit, OnChanges, OnDestroy {

	public summaryStatistics: SummaryIndicatorNumbersDTO = <SummaryIndicatorNumbersDTO>{};
	public allMetrics: Array<MetricDefinition> = [];
	public switchList: Array<SwitchIndicatorDTO> = [];
	public currentView: STATISTICVIEWS = STATISTICVIEWS.Controller;
	public STATISTICVIEWS = STATISTICVIEWS;
	public appCount: number = 0;

	constructor(public route: ActivatedRoute,
	            public topologyApi: TopologyApi,
	            public tsdbProxy: TsdbServerProxy,
	            public tsdbApi: TSDBApi,
	            public appsApi: AppsApi,
	            public statisticsService: StatisticsService,
	            public changeDetector: ChangeDetectorRef,
	            public generator: RandomStatisticsGenerator,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(baseServices, elementRef);
		this.setI18NKey('statistics.dashboard');
		this.tsdbProxy.randomData = !!route.snapshot.params["random"];
	}

	ngOnInit() {
		super.ngOnInit();
	}

	ngOnChanges(e) {
		super.ngOnChanges(e);
	}

	ngAfterViewInit() {
		if (super.ngAfterViewInit()) {
			this.initSummaryStatistics();
			this.initMetrics();
			this.initAppCount();
			return true;
		}
		return false;
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}

	initSummaryStatistics() {
		this.statisticsService
			.initSummaryStatistics()
			.subscribe(
				(res: IndicatorsResponse) => {
					if (this.baseServices.uiHelper.processResponse(res)) {
						this.summaryStatistics = res.data.summary;
						this.switchList = res.data.controllerList.list[0] && //TODO- null check ne derecede yapılmalı?
							res.data.controllerList.list[0].switchList.list;
						this.switchList.forEach((sw) => {
							sw.portList.list = sw.portList.list.filter((port) => {
								return port > -1;
							});
						});
						this.changeDetector.detectChanges();
					}
				});
	}

	initMetrics() {
		this.statisticsService
			.initMetrics()
			.subscribe(
				(res: MetricDefinitions) => {
					if (this.baseServices.uiHelper.processResponse(res)) {
						this.allMetrics = res.metricDefs;
						this.changeDetector.detectChanges();
					} else {
						this.allMetrics = this.generator.getFakeMetricDefiniton();
					}
				},
				(error) => {
					this.allMetrics = this.generator.getFakeMetricDefiniton();
				});
	}

	initAppCount() {

		let request = this.baseServices.apiHelper.genFullListRequest();
		this.appsApi
			.aaaAppListPOST(request)
			.subscribe((res) => {
				if (this.baseServices.uiHelper.processResponse(res)) {
					this.appCount = res.data.list.length;
				}
			});
	}

	tabChanged(view: STATISTICVIEWS) {
		this.currentView = view;
		this.changeDetector.detectChanges();
	}
}

export enum STATISTICVIEWS{
	Controller,
	Switch,
	Link,
	Application,
	Virtual,
	Hoststat
}





