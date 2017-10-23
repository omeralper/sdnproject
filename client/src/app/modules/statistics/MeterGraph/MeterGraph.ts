/**
 * Created by omeroz on 9/19/2017.
 */
import {
	Component,
	ElementRef,
	ChangeDetectorRef,
} from "@angular/core";
import {PageServices} from "../../PageServices";
import {MvtnApi} from "../../../swagger/MvtnApi";
import {MvtnDTO} from "../../../swagger/MvtnDTO";
import {MeterApi} from "../../../swagger/MeterApi";
import {AbstractGraph} from "../AbstractGraph";
import {RandomStatisticsGenerator} from "../Services/RandomStatisticsGenerator";
import {TsdbServerProxy} from "../Services/TsdbServerProxy";
import {TopologyApi} from "../../../swagger/TopologyApi";

@Component({
	moduleId: module.id,
	selector: 'metergraph',
	templateUrl: "./MeterGraph.html",
	providers: [MeterApi, TopologyApi]
})

export class MeterGraph extends AbstractGraph  {
	public virtualNetworks: Array<MvtnDTO> = [];
	public devices: Map<string, Array<string>> = new Map();
	public selectedDevice: DeviceMeterKeyValuePair = <DeviceMeterKeyValuePair>{};
	public selectedDeviceCount: number = 0;
	public meters: Array<string> = [];
	public selectedMeter: string = "";
	public selectedMeterCount: number = 0;

	constructor(public tsdbApi: TsdbServerProxy,
	            public changeDetector: ChangeDetectorRef,
	            public generator: RandomStatisticsGenerator,
	            public topologyApi: TopologyApi,
	            public mvtnApi: MvtnApi,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(tsdbApi, changeDetector, generator, baseServices, elementRef);
		this.metricName = "meterstat";
		this.setMetric();
		this.title = this.t('titles.meter');
	}

	initParams(dataSets) {
		dataSets.forEach((value, i) => {
			let deviceName:string;
			let meterName:string;
			let isMvtnDevice:boolean = false;
			value.tagValues.forEach(tagPair => {
                //if ((tagPair.tag === "mvtn_device" && tagPair.val.indexOf('__') == -1)) {
                if (tagPair.tag === "mvtn_device") {
                	isMvtnDevice = true;
                } else if (tagPair.tag === "device") {
					deviceName = tagPair.val;
				} else if (tagPair.tag === "meter") {
					meterName = tagPair.val;
				}
			});

			if(!isMvtnDevice && deviceName && meterName) {
				!this.devices.has(deviceName) && this.devices.set(deviceName, []);

				let meters = this.devices.get(deviceName);
				meters.indexOf(meterName) == -1 && meters.push(meterName);
			}
		});
		this.devices = new Map(this.devices);
		let firstVal = this.devices.entries().next().value;
		firstVal && this.deviceSelected({key: firstVal[0], value: firstVal[1]});
	}

	meterSelected(meter: string) {
		this.selectedMeter = meter;
		this.selectedMeterCount = 1;
		this.addTag('meter', this.selectedMeter);
		this.fetchGraphData();
	}

	getAggregator() {
		return this.aggregator.AVERAGE;
	}

	deviceSelected(device: DeviceMeterKeyValuePair) {
		this.selectedDevice = device;
        // this.addTag('mvtn_device', this.selectedDevice.key);
        this.addTag('device', this.selectedDevice.key);
		this.selectedDeviceCount = 1;
		this.meters = device.value;
		this.meterSelected(this.meters[0]);
	}
}

export interface DeviceMeterKeyValuePair {
	key: string;
	value: Array<string>;
}
