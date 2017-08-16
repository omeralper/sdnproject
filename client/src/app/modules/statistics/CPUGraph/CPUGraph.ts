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
import {AbstractGraph} from "../Main/AbstractGraph";
import {RandomStatisticsGenerator} from "../Services/RandomStatisticsGenerator";
import {TsdbServerProxy} from "../Services/TsdbServerProxy";

@Component({
  moduleId: module.id,
    selector: 'cpugraph',
    templateUrl: "./CPUGraph.html",
    inputs: ['allMetrics'],
})

export class CPUGraph extends AbstractGraph implements AfterViewInit,OnChanges {
    public hosts: Array<Host> = [];
    public selectedHosts: Array<HostCPUPair> = [];

    constructor(public tsdbApi: TsdbServerProxy,
                public changeDetector: ChangeDetectorRef,
                public generator: RandomStatisticsGenerator,
                baseServices: PageServices,
                elementRef: ElementRef) {
        super(tsdbApi, changeDetector, generator, baseServices, elementRef);
    }

    // ngOnInit() {
    //     super.ngOnInit();
    // }

    ngOnChanges(e) {
        if (e.allMetrics && e.allMetrics.currentValue.length > 0) {
            this.filteredMetrics = this.allMetrics.filter((metric) => {
                return metric.metricName.indexOf('cpu') > -1;
            });
            this.changeDetector.detectChanges();
            if (this.filteredMetrics.length > 0) {
                $('.metricSelect', this.$container)
                    .select2()
                    .val(this.filteredMetrics[0].metricName)
                    .trigger('change');

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
                let values = $(evt.target).val();
                this.selectedHosts = [];
                values && values.forEach((value) => {
                    let host = value.split('cpu:')[0];
                    let cpu = value.split('cpu:')[1];
                    this.selectedHosts.push(<HostCPUPair>{
                        host: host,
                        cpu: cpu
                    });
                });
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
                        this.initHost(this.generator.getFakeCPUHosts());
                    }
                },
                (error) => {
                    this.initHost(this.generator.getFakeCPUHosts());
                });
    }

    initHost(datasets) {
        datasets.forEach((value) => {
            let pair = <HostCPUPair>{host: value.tagValues[0].val, cpu: value.tagValues[1].val};
            if (this.hosts[value.tagValues[0].val])
                this.hosts[value.tagValues[0].val].cpu.push(pair);
            else
                this.hosts[value.tagValues[0].val] = <Host>{
                    host: value.tagValues[0].val,
                    cpu: [pair]
                }
        });
        this.hosts = Object.keys(this.hosts).map(key => this.hosts[key]);
        this.changeDetector.detectChanges();
        $('.hostSelect', this.$container)
            .select2()
            .val(this.hosts[0].host + 'cpu:' + this.hosts[0].cpu[0].cpu)
            .trigger('change');
    }

    getSelectedParams() {
        return this.selectedHosts;
    }

    getTagValues(param: HostCPUPair) {
        return [
            {
                tag: 'host',
                val: param.host
            },
            {
                tag: 'cpu',
                val: param.cpu
            }];
    }
}

export interface Host {
    host: string,
    cpu: Array<HostCPUPair>
}

export interface HostCPUPair {
    host: string,
    cpu: string
}
