/**
 * Created by omeroz on 20.12.2016.
 */
import {
    Component,
    AfterViewInit,
    ElementRef,
    ChangeDetectorRef,
} from "@angular/core";
import {PageServices} from "../../PageServices";
import {AbstractGraph} from "../AbstractGraph";
import {RandomStatisticsGenerator} from "../Services/RandomStatisticsGenerator";
import {TsdbServerProxy} from "../Services/TsdbServerProxy";

@Component({
    moduleId: module.id,
    selector: 'cpugraph',
    templateUrl: "./CPUGraph.html"
})

export class CPUGraph extends AbstractGraph {
    public CPUs: Array<string> = [];
    public hosts: Map<string, Array<string>> = new Map();
    public selectedHost: HostCPUKeyValuePair = <HostCPUKeyValuePair>{};
    public selectedHostCount: number = 0;
    public selectedCPUs: Array<string> = [];

    constructor(public tsdbApi: TsdbServerProxy,
                public changeDetector: ChangeDetectorRef,
                public generator: RandomStatisticsGenerator,
                baseServices: PageServices,
                public elementRef: ElementRef) {
        super(tsdbApi, changeDetector, generator, baseServices, elementRef);
        this.metricName = "cpu";
        this.setMetric();
        this.title = this.t('titles.cpu');
    }

    getDefaultTags() {
        return [{
            'tag': 'cpu',
            'val': '*'
        }];
    }

    cpuSelected(values) {
        this.addTag('cpu', values);
        this.fetchGraphData();
    }

    initParams(datasets) {
        datasets.forEach((value) => {
            let hostName = value.tagValues[0].val;
            let cpuName = value.tagValues[1].val;
            !this.hosts.has(hostName) && this.hosts.set(hostName, []);

            let CPUs = this.hosts.get(hostName);
            CPUs.indexOf(cpuName) == -1 && CPUs.push(cpuName);
        });

        this.hosts = new Map(this.hosts);
        let u = this.hosts.entries().next().value;
        this.hostChanged({key: u[0], value: u[1]});
    }

    hostChanged(host: HostCPUKeyValuePair) {
        this.selectedHost = host;
        this.selectedHostCount = 1;
        this.addTag('host', this.selectedHost.key);
        this.CPUs = host.value;
        !this.CPUs.some(c => c == 'all') && this.CPUs.push('all');
        this.changeDetector.detectChanges();
        this.selectedCPUs = [this.CPUs[this.CPUs.findIndex(cpu => cpu == 'all')]];
    }
}

export interface HostCPUKeyValuePair {
    key: string;
    value: Array<string>;
}

