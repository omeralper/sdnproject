/**
 * Created by omeroz on 9/12/2017.
 */

import {
	Component,
	ElementRef,
	ChangeDetectorRef,
} from "@angular/core";
import {PageServices} from "../../PageServices";
import {AbstractGraph} from "../AbstractGraph";
import {RandomStatisticsGenerator} from "../Services/RandomStatisticsGenerator";
import {TsdbServerProxy} from "../Services/TsdbServerProxy";
import {TsdbDataSet} from "../../../swagger/TsdbDataSet";

@Component({
	moduleId: module.id,
	selector: 'groupgraph',
	templateUrl: "./GroupGraph.html",
})

export class GroupGraph extends AbstractGraph {

	public groups: Array<string> = [];
	public devices: Map<string, Array<string>> = new Map();
	public selectedDevice: DeviceGroupKeyValuePair = <DeviceGroupKeyValuePair>{};
	public selectedDeviceCount = 0;
	public selectedGroups: Array<string> = [];

	constructor(public tsdbApi: TsdbServerProxy,
	            public changeDetector: ChangeDetectorRef,
	            public generator: RandomStatisticsGenerator,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(tsdbApi, changeDetector, generator, baseServices, elementRef);
		this.metricName = "groupstat";
		this.setMetric();
		this.title = this.t('titles.groupstat');
	}

	groupSelected(values) {
		this.addTag('group', values);
		this.fetchGraphData();
	}

	initParams(dataSets: Array<TsdbDataSet>) {
		dataSets.forEach((value, i) => {
			let deviceName = value.tagValues[0].val;
			let groupName = value.tagValues[1].val;
			!this.devices.has(deviceName) && this.devices.set(deviceName, []);

			let groups = this.devices.get(deviceName);
			groups.indexOf(groupName) == -1 && groups.push(groupName);
		});
		this.devices = new Map(this.devices);
		let u = this.devices.entries().next().value;
		this.deviceChanged({key: u[0], value: u[1]});
	}

	deviceChanged(device: DeviceGroupKeyValuePair) {
		this.selectedDevice = device;
		this.selectedDeviceCount = 1;
		this.addTag('device', this.selectedDevice.key);
		this.groups = device.value;
		this.changeDetector.detectChanges();
		this.selectedGroups = [this.groups[0]];
	}
}

export interface DeviceGroupKeyValuePair {
	key: string;
	value: Array<string>;
}


