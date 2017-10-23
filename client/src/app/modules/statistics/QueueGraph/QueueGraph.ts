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

@Component({
	moduleId: module.id,
	selector: 'queuegraph',
	templateUrl: "./QueueGraph.html",
})

export class QueueGraph extends AbstractGraph {

	public queues: Array<string> = [];
	public devices: Map<string, Array<string>> = new Map();
	public selectedDevice: DeviceQueueKeyValuePair = <DeviceQueueKeyValuePair>{};
	public selectedDeviceCount = 0;
	public selectedQueues: Array<string> = [];

	constructor(public tsdbApi: TsdbServerProxy,
	            public changeDetector: ChangeDetectorRef,
	            public generator: RandomStatisticsGenerator,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(tsdbApi, changeDetector, generator, baseServices, elementRef);
		this.metricName = "queuestat";
		this.setMetric();
		this.title = this.t('titles.queuestat');
	}

	queueSelected(values) {
		this.addTag('queue', values);
		this.fetchGraphData();

	}

	initParams(datasets) {
		datasets.forEach((value) => {
			let deviceName = value.tagValues[0].val;
			let queueName = value.tagValues[1].val;
			!this.devices.has(deviceName) && this.devices.set(deviceName, []);

			let queues = this.devices.get(deviceName);
			queues.indexOf(queueName) == -1 && queues.push(queueName);
		});

		this.devices = new Map(this.devices);
		let u = this.devices.entries().next().value;
		this.deviceChanged({key: u[0], value: u[1]});
	}

	deviceChanged(device: DeviceQueueKeyValuePair) {
		this.selectedDevice = device;
		this.selectedDeviceCount = 1;
		this.addTag('device', this.selectedDevice.key);
		this.queues = device.value;
		this.changeDetector.detectChanges();
		this.selectedQueues = [this.queues[0]];
	}
}

export interface DeviceQueueKeyValuePair {
	key: string;
	value: Array<string>;
}

