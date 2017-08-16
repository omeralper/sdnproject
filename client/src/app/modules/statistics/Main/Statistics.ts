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
import {PageServices} from "../../PageServices";
import {BaseTestPage} from "../../../commons/BaseTestPage/BaseTestPage";
import {GenericListRequest} from "../../../swagger/GenericListRequest";
import {TopologyApi} from "../../../swagger/TopologyApi";
import {ListOptions} from "../../../swagger/ListOptions";
import {IndicatorsResponse} from "../../../swagger/IndicatorsResponse";
import {SummaryIndicatorNumbersDTO} from "../../../swagger/SummaryIndicatorNumbersDTO";
import {SwitchIndicatorDTO} from "../../../swagger/SwitchIndicatorDTO";
import {TSDBApi} from "../../../swagger/TSDBApi";
import {MetricDefinitions} from "../../../swagger/MetricDefinitions";
import {MetricNames} from "../../../swagger/MetricNames";
import {MetricDefinition} from "../../../swagger/MetricDefinition";
import {RandomStatisticsGenerator} from "../Services/RandomStatisticsGenerator";
import {TsdbServerProxy} from "../Services/TsdbServerProxy";
import {ActivatedRoute} from "@angular/router";
import {CPUGraph} from "../CPUGraph/CPUGraph";

@Component({
    moduleId: module.id,
    selector: 'NacUserStatisticsPopup',
    templateUrl: 'Statistics.html',
    providers: [TSDBApi],
})
export class Statistics extends BaseTestPage implements OnInit, AfterViewInit,OnChanges, OnDestroy {

    public summaryStatistics: SummaryIndicatorNumbersDTO = <SummaryIndicatorNumbersDTO>{};
    public allMetrics: Array<MetricDefinition> = [];
    public switchList: Array<SwitchIndicatorDTO> = [];
    cpuGraph = CPUGraph;

    constructor(public route: ActivatedRoute,
                public topologyApi: TopologyApi,
                public tsdbProxy:TsdbServerProxy,
                public tsdbApi: TSDBApi,
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
            return true;
        }
        return false;
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

    initSummaryStatistics() {
        let request = this.baseServices.apiHelper.genRequest({
            "options": <ListOptions>{
                "startPage": 0
            }
        });

        this.topologyApi
            .topologyLiteControllerListPOST(<GenericListRequest>request)
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
        let request = this.baseServices.apiHelper.genRequest({
            "metricNames": ["*"]
        });
        this.tsdbApi
            .tsdbMetricDefinitionPOST(<MetricNames>request)
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
}




