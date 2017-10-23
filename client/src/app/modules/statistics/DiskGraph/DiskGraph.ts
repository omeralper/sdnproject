/**
 * Created by omeroz on 9/12/2017.
 */

import {
	Component,
	OnChanges,
	ElementRef,
	ChangeDetectorRef,
} from "@angular/core";
import {PageServices} from "../../PageServices";
import {AbstractGraph} from "../AbstractGraph";
import {RandomStatisticsGenerator} from "../Services/RandomStatisticsGenerator";
import {TsdbServerProxy} from "../Services/TsdbServerProxy";

@Component({
	moduleId: module.id,
	selector: 'diskgraph',
	templateUrl: "./DiskGraph.html",
})

export class DiskGraph extends AbstractGraph {

    public mounts: Array<string> = [];
    public devs: Array<string> = [];
	public hosts: Map<string, HostMountKeyValuePair> = new Map();
	public selectedHost: HostMountKeyValuePair = <HostMountKeyValuePair>{};
	public selectedHostCount:number = 0;
    public selectedMounts: Array<string> = [];
    public selectedDevs: Array<string> = [];

	//private ALL_STRING:string;

	constructor(public tsdbApi: TsdbServerProxy,
	            public changeDetector: ChangeDetectorRef,
	            public generator: RandomStatisticsGenerator,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(tsdbApi, changeDetector, generator, baseServices, elementRef);
		this.metricName = "df.bytes";
		this.setMetric();
		this.title = this.t('titles.df');
		//this.ALL_STRING = this.t('mount.all');
	}

	mountSelected(values) {
		if (is.not.empty(values)) {
            this.addTag('mount', values);
        } else {
			this.removeTag('mount');
		}
        this.fetchGraphData();
	}

    devSelected(values) {
        if (is.not.empty(values)) {
            this.addTag('dev', values);
        } else {
            this.removeTag('dev');
        }
        this.fetchGraphData();
    }

	getSampleMetrics() {
		return ["iostat.disk.msec_read","iostat.disk.msec_write","iostat.disk.write_requests","iostat.disk.msec_weighted_total","df.bytes.free","df.bytes.used","df.bytes.percentused"];
	}

	initParams(datasets) {
        this.hosts = new Map();
		datasets.forEach((value) => {
            let hostName;
            let mountName;
            let devName;

            value.tagValues.forEach((tag)=>{
            	if (tag.tag == 'host'){
                    hostName = tag.val;
				} else if (tag.tag == 'dev'){
                    devName = tag.val;
                } else if (tag.tag == 'mount'){
                    mountName = tag.val;
                }
			});

			!this.hosts.has(hostName) && this.hosts.set(hostName, { key: hostName, mounts:[], devs: [] });
            let hostData = this.hosts.get(hostName);

			if (is.existy(mountName)) {
                hostData.mounts.indexOf(mountName) == -1 && hostData.mounts.push(mountName);
            }

            if (is.existy(devName)) {
                hostData.devs.indexOf(devName) == -1 && hostData.devs.push(devName);
            }

		});

		let selectedHost;
        if (this.hosts.has(this.selectedHost.key)){
			selectedHost = this.hosts.get(this.selectedHost.key);
		} else {
            selectedHost = this.hosts.entries().next().value[1];
		}
        this.hostChanged(selectedHost);
	}

	hostChanged(host: HostMountKeyValuePair) {
		this.selectedHost = host;
		this.selectedHostCount = 1;
		this.addTag('host', this.selectedHost.key);
		this.mounts = host.mounts;
        this.devs = host.devs;
		this.changeDetector.detectChanges();
		this.selectedMounts = [];// [this.mounts[0]];
        this.selectedDevs = [];// [this.mounts[0]];
		if (this.mounts && this.mounts.length<=1) this.mountSelected(this.selectedMounts);
        if (this.devs && this.devs.length<=1) this.devSelected(this.selectedDevs);
	}
}

export interface HostMountKeyValuePair {
	key: string;
	mounts: Array<string>;
    devs: Array<string>;
}

