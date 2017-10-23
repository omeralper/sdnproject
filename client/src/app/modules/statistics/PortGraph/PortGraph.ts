/**
 * Created by omeroz on 9/29/2017.
 */

import {
	Component,
	ElementRef,
	ChangeDetectorRef,
} from "@angular/core";
import {PageServices} from "../../PageServices";
import {MvtnApi} from "../../../swagger/MvtnApi";
import {AbstractGraph} from "../AbstractGraph";
import {RandomStatisticsGenerator} from "../Services/RandomStatisticsGenerator";
import {TsdbServerProxy} from "../Services/TsdbServerProxy";
import {MvtnListResponse} from "../../../swagger/MvtnListResponse";
import {MvtnDTO} from "../../../swagger/MvtnDTO";

@Component({
	moduleId: module.id,
	selector: 'portgraph',
	templateUrl: "./PortGraph.html",
})

export class PortGraph extends AbstractGraph {
	public selectedVtnCount: number = 0;
	public virtualNetworks: Map<string, Map<string, Array<number>>> = new Map(); //vtn -> controller -> port
	public selectedVirtualNetwork: VtnControllerPair = <VtnControllerPair>{};

	public selectedDeviceCount: number = 0;
	public selectedDevice: DevicePortPair = <DevicePortPair>{};

	public selectedPortCount: number = 0;
	public selectedPort: number;

	public virtualNetworksWithNames:Array<MvtnDTO> = [];

	constructor(public tsdbApi: TsdbServerProxy,
	            public changeDetector: ChangeDetectorRef,
	            public generator: RandomStatisticsGenerator,
	            public mvtnApi: MvtnApi,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(tsdbApi, changeDetector, generator, baseServices, elementRef);
		this.metricName = "meterstat";
		this.setMetric();
		this.title = this.t('titles.port');
	}

	// ngAfterViewInit() {
	// 	this.initVirtualNetworks();
	// 	return super.ngAfterViewInit();
	// }

	getAggregator() {
		return this.aggregator.AVERAGE;
	}

	// initVirtualNetworks() {
	// 	let request = this.baseServices.apiHelper.genRequest({
	// 		"options": <ListOptions>{
	// 			"startPage": 0
	// 		}
	// 	});
	// 	let s =
	// 		this.mvtnApi
	// 			.virtualListPOST(request)
	// 			.subscribe(
	// 				(res: MvtnListResponse) => {
	// 					if (this.baseServices.uiHelper.processResponse(res)) {
	// 						this.virtualNetworks = res.data.list;
	// 						this.virtualNetworkSelected(this.virtualNetworks[0]);
	// 					}
	// 				});
	// 	this.subscriptions.push(s);
	// }
	getDefaultTags() {
		return [{
			'tag': 'vtn',
			'val': '*'
		}];
	}

	initParams(dataSets) {
		let request = this.baseServices.apiHelper.genFullListRequest();
		let s =
			this.mvtnApi
				.virtualListPOST(request)
				.subscribe(
					(res: MvtnListResponse) => {
						if (this.baseServices.uiHelper.processResponse(res)) {
							this.virtualNetworksWithNames = res.data.list;
                            this.virtualNetworks = new Map();
							dataSets.forEach((value) => {
								let vtnId: string;
								let deviceId: string;
								let portNo: number;
								value.tagValues.forEach(tagPair => {
									if (tagPair.tag === "vtn") {
										vtnId = tagPair.val;
									} else if (tagPair.tag === "device") {
										deviceId = tagPair.val;
									} else if (tagPair.tag === "port") {
										portNo = +tagPair.val;
									}
								});

								if (is.existy(vtnId) && is.existy(deviceId) && is.existy(portNo)) {
									!this.virtualNetworks.has(vtnId) && this.virtualNetworks.set(vtnId, new Map());
									let controllerMap = this.virtualNetworks.get(vtnId);

									!controllerMap.has(deviceId) && controllerMap.set(deviceId, []);
									let ports = controllerMap.get(deviceId);
									ports.indexOf(portNo) == -1 && ports.push(portNo);
								}

							});
							//this.virtualNetworks = new Map(this.virtualNetworks);
							let firstVal = this.virtualNetworks.entries().next().value;
							firstVal && this.virtualNetworkSelected({key: firstVal[0], value: firstVal[1]});
						}
					});
		this.subscriptions.push(s);
	}

	getVtnName(id:string){
		let vtn = this.virtualNetworksWithNames.find(a => a.id === id);
		return vtn ? vtn.name : 'VTN #'+id;
	}

	virtualNetworkSelected(vtn: VtnControllerPair) {
		this.selectedVirtualNetwork = vtn;
		this.selectedVtnCount = 1;
		this.addTag('vtn', this.selectedVirtualNetwork.key);

		let u = this.selectedVirtualNetwork.value.entries().next().value;
		this.deviceSelected({key: u[0], value: u[1]});
	}

	deviceSelected(device: DevicePortPair) {
		this.selectedDevice = device;
		this.addTag('device', device.key);
		this.selectedDeviceCount = 1;

		let u = this.selectedDevice.value.entries().next().value;
		this.portSelected(u[1]);
	}

	portSelected(port: number) {
		this.selectedPort = port;
		this.selectedPortCount = 1;
		this.addTag('port', port);
		this.fetchGraphData();
	}
}

export interface VtnControllerPair {
	key: string;
	value: Map<string, Array<number>>;
}

export interface DevicePortPair {
	key: string;
	value: Array<number>;
}
