/**
 * Created by omeroz on 20.12.2016.
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
import {TsdbQueryResponse} from "../../../swagger/TsdbQueryResponse";
import {RandomStatisticsGenerator} from "../Services/RandomStatisticsGenerator";
import {AbstractGraph} from "../Main/AbstractGraph";
import {TsdbServerProxy} from "../Services/TsdbServerProxy";

@Component({
    moduleId: module.id,
    selector: 'ramgraph',
    templateUrl: "./RAMGraph.html",
    inputs: ['allMetrics'],
})

export class RAMGraph extends AbstractGraph implements  AfterViewInit,OnChanges {
    public hosts: Array<string> = [];
    public selectedHosts: Array<string> = [];

    constructor(public tsdbApi: TsdbServerProxy,
                public changeDetector: ChangeDetectorRef,
                public generator: RandomStatisticsGenerator,
                baseServices: PageServices,
                elementRef: ElementRef) {
        super(tsdbApi, changeDetector, generator, baseServices, elementRef);

    }
    ngOnChanges(e) {
        if (e.allMetrics && e.allMetrics.currentValue.length > 0) {
            this.filteredMetrics = this.allMetrics.filter((metric) => {
                return metric.metricName.indexOf('proc.meminfo') > -1;
            });
            this.changeDetector.detectChanges();
            if (this.filteredMetrics.length > 0) {
                $('.metricSelect', this.$container)
                    .select2()
                    .val(this.filteredMetrics[0].metricName)
                    .trigger("change");

                this.initParameters(this.filteredMetrics.map(value => value.metricName));
            }
        }
        super.ngOnChanges(e);
    }

    ngAfterViewInit() {
        if (super.ngAfterViewInit()) {
            $(".metricSelect", this.$container).select2({
                placeholder: this.t('placeholder.metrics'),
                maximumSelectionLength: 2
            }).on('change', (evt) => {
                this.selectedMetrics = $(evt.target).val() || [];
                this.fetchGraphData();
            });

            $(".hostSelect", this.$container).select2({
                placeholder: this.t('placeholder.hosts'),
                maximumSelectionLength: 2
            }).on('change', (evt) => {
                this.selectedHosts = $(evt.target).val() || [];
                this.fetchGraphData();
            });

            this.drawGraph();
            return true;
        }
        return false;
    }

    /**
     * Parametreleri alabilmenin tek yolu servera anlamsız bir sorgu çekmek.
     * @param metrics
     */
    initParameters(metrics) {
        let beginTime = moment()
            .subtract(1, "minute")
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
            "tagValues": [
                {
                    tag: 'host',
                    val: '*'
                }],
            "maxResult": "1000"
        });

        this.tsdbApi
            .tsdbQueryPOST(requestData)
            .subscribe(
                (res: TsdbQueryResponse) => {
                    if (this.baseServices.uiHelper.processResponse(res) && res.datasets.length > 0) {
                        this.initHost(res.datasets);
                    } else {
                        this.initHost(this.generator.getFakeRamHosts());
                    }
                }, (error) => {
                    this.initHost(this.generator.getFakeRamHosts());
                });
    }

    initHost(datasets) {
        datasets.forEach((value) => {
            this.hosts.indexOf(value.tagValues[0].val) == -1 &&
            this.hosts.push(value.tagValues[0].val)
        });

        this.changeDetector.detectChanges();
        $('.hostSelect', this.$container)
            .select2()
            .val(this.hosts[0])
            .trigger('change');
    }


    getSelectedParams() {
        return this.selectedHosts;
    }

    getTagValues(param) {
        return [
            {
                tag: 'host',
                val : param
                // val: this.selectedHosts.join('|')
            }];
    }

}

