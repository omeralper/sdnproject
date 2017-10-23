/**
 * Created by omeroz on 19.12.2016.
 */
import {
	Component,
	AfterViewInit,
	ElementRef,
	ChangeDetectorRef,
} from "@angular/core";
import {PageServices} from "../../PageServices";
import {MvtnApi} from "../../../swagger/MvtnApi";
import {ListOptions} from "../../../swagger/ListOptions";
import {MvtnListResponse} from "../../../swagger/MvtnListResponse";
import {MvtnDTO} from "../../../swagger/MvtnDTO";
import {SwitchDTO} from "../../../swagger/SwitchDTO";
import {AbstractGraph} from "../AbstractGraph";
import {RandomStatisticsGenerator} from "../Services/RandomStatisticsGenerator";
import {TsdbServerProxy} from "../Services/TsdbServerProxy";
import {MeterApi} from "../../../swagger/MeterApi";
import {METERTYPE} from "../../../swagger/METERTYPE";
import {MeterListResponse} from "../../../swagger/MeterListResponse";
import {MeterDTO} from "../../../swagger/MeterDTO";
import {TOPOLOGYTYPE} from "../../../swagger/TOPOLOGYTYPE";
import {TOPOLOGYSTATUS} from "../../../swagger/TOPOLOGYSTATUS";

@Component({
	moduleId: module.id,
	selector: 'virtualnetworkgraph',
	templateUrl: "./VirtualNetworkGraph.html",
	providers: [MeterApi]
})

export class VirtualNetworkGraph extends AbstractGraph implements AfterViewInit {
	public virtualNetworks: Array<MvtnDTO> = [];
	public selectedVirtualNetwork: MvtnDTO = <MvtnDTO>{};
	public selectedDeviceCount: number = 0;
	public selectedDevice: SwitchDTO = <SwitchDTO>{};
	public allMeters: Array<MeterDTO> = [];
	public filteredMeters: Array<MeterDTO> = [];
	public selectedMeter: MeterDTO = <MeterDTO>{};
	public selectedMeterCount: number = 0;
    private datasets: any;

	constructor(public tsdbApi: TsdbServerProxy,
	            public changeDetector: ChangeDetectorRef,
	            public generator: RandomStatisticsGenerator,
	            public meterApi: MeterApi,
	            public mvtnApi: MvtnApi,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(tsdbApi, changeDetector, generator, baseServices, elementRef);
		this.metricName = "meterstat";
		this.setMetric();
		this.title = this.t('titles.virtual');
	}

	// ngAfterViewInit() {
	// 	this.initVirtualNetworks();
    //
	// 	return super.ngAfterViewInit();
	// }

	getAggregator() {
		return this.aggregator.AVERAGE;
	}

    getDefaultTags() {
        return [{
            'tag': 'vtn',
            'val': '*'
        }];
    }

	initMeters(network: MvtnDTO) {
		let request = this.baseServices.apiHelper.genRequest({
			"data": {
				id: network?network.id:'*',
				meterType: METERTYPE.MVTN
			}
		});
		let s =
			this.meterApi
				.meterListPOST(request)
				.subscribe(
					(res: MeterListResponse) => {
						if (this.baseServices.uiHelper.processResponse(res)) {
							this.allMeters = res.data.list || [];

                            this.datasets.forEach((value) => {
                                let vtnId: string;
                                let deviceId: string;
                                let meterId: string;
                                let portNumber: number;
                                value.tagValues.forEach(tagPair => {
                                    if (tagPair.tag === "vtn") {
                                        vtnId = tagPair.val;
                                    } else if (tagPair.tag === "device") {
                                        deviceId = tagPair.val;
                                    } else if (tagPair.tag === "meter") {
                                        meterId = tagPair.val;
                                    } else if (tagPair.tag === "port") {
                                        portNumber = parseInt(tagPair.val,10);
                                    }
                                });

                                if (is.existy(vtnId) && is.existy(deviceId) && is.existy(meterId) &&
									vtnId == this.selectedVirtualNetwork.id) { //&& deviceId == this.selectedDevice.id
                                    let meterDto = this.allMeters.find(meter => meter.id == meterId && meter.deviceId == deviceId && meter.portNumber == portNumber);
                                    if (is.not.existy(meterDto)) {
                                        meterDto = this.baseServices.apiHelper.genDTO({
                                            id: meterId,
                                            deviceId: deviceId,
                                            portNumber: portNumber
                                        });
                                        this.allMeters.push(meterDto);
                                    }
                                }
                            });
							//this.deviceSelected(this.selectedDevice);
							if (is.existy(network) && is.existy(network.topologyData) && is.existy(network.topologyData.switches)) {
                                this.deviceSelected(network.topologyData.switches[0]);
                            }
						}
					});
		this.subscriptions.push(s);
	}

    initParams(dataSets) {
		this.datasets = dataSets;
        let request = this.baseServices.apiHelper.genFullListRequest();
        let s =
            this.mvtnApi
                .virtualListPOST(request)
                .subscribe(
                    (res: MvtnListResponse) => {
                        if (this.baseServices.uiHelper.processResponse(res)) {
                            this.virtualNetworks = res.data.list || [];
                            dataSets.forEach((value) => {
                                let vtnId: string;
                                let deviceId: string;
                                value.tagValues.forEach(tagPair => {
                                    if (tagPair.tag === "vtn") {
                                        vtnId = tagPair.val;
                                    } else if (tagPair.tag === "device") {
                                        deviceId = tagPair.val;
                                    }
                                });

                                if (is.existy(vtnId)) {
                                    let vtnItem = this.virtualNetworks.find(itm => itm.id == vtnId);
                                    if (is.not.existy(vtnItem)) {
                                    	vtnItem = this.baseServices.apiHelper.genDTO({
                                            id : vtnId,
                                            name: "VTN #"+vtnId
                                        });
                                        this.virtualNetworks.push(vtnItem);
									}

									if (is.existy(deviceId) && is.not.empty(deviceId)) {
                                        let switchDto = this.baseServices.apiHelper.genDTO({id: deviceId});
                                        if (vtnItem.topologyData) {
											if (is.not.existy(vtnItem.topologyData.switches)){
                                                vtnItem.topologyData.switches = [];
											}
											if (!vtnItem.topologyData.switches.find(swtch => swtch.id == deviceId)) {
                                                vtnItem.topologyData.switches.push(switchDto);
                                            }
                                        } else {
                                            vtnItem.topologyData = this.baseServices.apiHelper.genDTO({
                                            	info: this.baseServices.apiHelper.genDTO({
													id: vtnItem.id,
													name: vtnItem.name,
													type: TOPOLOGYTYPE.VIRTUAL,
													status: TOPOLOGYSTATUS.DOWN
                                            	}),
                                                switches: [switchDto]
                                            });
                                        }
                                    }
                                }

                            });
                            this.virtualNetworkSelected(this.virtualNetworks[0]);
                        }
                    });
        this.subscriptions.push(s);
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

	virtualNetworkSelected(network: MvtnDTO) {
		if (is.existy(network)) {
            this.selectedVirtualNetwork = network;
            this.addTag('vtn', this.selectedVirtualNetwork.id);
            //this.deviceSelected(this.selectedVirtualNetwork.topologyData.switches[0]);
            this.initMeters(network);
        } else {
            this.addTag('vtn', '*');
		}
	}

	deviceSelected(device: SwitchDTO) {
		this.selectedDevice = device;
		this.addTag('device', device.id);
		this.filteredMeters = this.allMeters.filter((meter) => {
			return meter.deviceId == device.id;
		});
		this.selectedDeviceCount = 1;
		this.meterSelected(this.filteredMeters[0]);
	}

	meterSelected(meter: MeterDTO) {
		if (is.existy(meter)) {
            this.selectedMeter = meter;
            this.selectedMeterCount = 1;
            this.addTag('meter', meter.id);
        } else {
            this.selectedMeter = null;
            this.selectedMeterCount = 0;
            this.removeTag('meter');
		}
		this.fetchGraphData();
	}
}
