import {
	Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef, ViewChild, ChangeDetectorRef,
	ApplicationRef, forwardRef
} from "@angular/core";
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {DocumentConverter} from "../../DocumentConverter";
import {D3attributes} from "../D3attributes";
import {TopologyApi} from "../../../swagger/TopologyApi";
import {SharedService} from "../../SharedService";
import {VtnListPopup} from "../../mvtn/VtnListPopup/VtnListPopup";
import {BasePage} from "../../../commons/BasePage";
import {TopologyOptions} from "../../../swagger/TopologyOptions";
import {SecurityToken} from "../../../swagger/SecurityToken";
import {TopologyRequest} from "../../../swagger/TopologyRequest";
import {TOPOLOGYTYPE} from "../../../swagger/TOPOLOGYTYPE";
import {TopologyResponse} from "../../../swagger/TopologyResponse";
import {TopologyInfoDTO} from "../../../swagger/TopologyInfoDTO";
import {PageServices} from "../../PageServices";
import {TopologyDTO} from "../../../swagger/TopologyDTO";
import {
	ReactivePathListReturn,
	REACTIVE_PATH_LIST_COMMAND,
	PathListPopup
} from "../../path/PathListPopup/PathListPopup";
import {DIALOG_TYPES, DialogCallbackType} from "../../UIHelper";
import {TOPOLOGYSTATUS} from "../../../swagger/TOPOLOGYSTATUS";
import {CreateVirtualTopology} from "../pop-ups/CreateVirtualTopology";
import {ShowTopology} from "./ShowTopology";
import {TopologyEventDTO} from "../../../swagger/TopologyEventDTO";
import {TOPOLOGYEVENTTYPE} from "../../../swagger/TOPOLOGYEVENTTYPE";
import {UI_TOPOLOGY_ACTION} from "../../../commons/enums/UI_TOPOLOGY_ACTION";
import {MvtnApi} from "../../../swagger/MvtnApi";
import {SubTopologyApi} from "../../../swagger/SubTopologyApi";
import {SwitchDTO} from "../../../swagger/SwitchDTO";
import {TopologyEventsListenerFactory} from "../../TopologyEventsListener";//TODO use RouteSegment in Angular RC versions
import {SliderWidget} from "../widgets/SliderWidget";
import {topoConfig, emptyTopologyDataDTO, TopologyData, TopologyTabData} from "../topology.config";
import {MvtnRequestApi} from "../../../swagger/MvtnRequestApi";
import 'rxjs/add/operator/toPromise';
import {
	ProactivePathListPopup,
	ProactivePathListReturn,
	PROACTIVE_PATH_LIST_COMMAND
} from "../../policies/PreliminaryPath/ProactivePathListPopup";
import {PreliminaryPathPopup} from "../../policies/PreliminaryPath/PreliminaryPathPopup";
import {LinkDTO} from "../../../swagger/LinkDTO";
import {SubTopologyResponse} from "../../../swagger/SubTopologyResponse";
import {SubTopologyDTO} from "../../../swagger/SubTopologyDTO";
import {MVTNTYPE} from "../../../swagger/MVTNTYPE";
import {TopologyService} from "../TopologyService";
import {GenericIdRequest} from "../../../swagger/GenericIdRequest";
import {EventsManager} from "../../EventsManager";
import {AUTHENTICATION_EVENT_TYPE} from "../../AuthenticationManager";
import {tplLink} from "../NetworkElementDefinitions/tplLink";
import {LINKSTATUS} from "../../../swagger/LINKSTATUS";

export enum popupType {
	EDIT,
	NEW
}

export enum renderType  {
	FULL,
	UPDATE
}

export enum CREATESHOWENUM {
	CREATE,
	EDIT,
	SHOW,
	NONE
}

export enum topologyGetType {
	REFRESH,
	NEW
}

export enum pathType {
	REACTIVE,
	PROACTIVE
}

@Component({
	moduleId: module.id,
	selector: 'topology',
	templateUrl: './topology.html',
	providers: [D3attributes, SubTopologyApi, MvtnRequestApi]
})
export class Topology extends BasePage implements OnInit, OnDestroy, OnChanges, AfterViewInit {
	@ViewChild(forwardRef(() => ShowTopology)) showTopologyComponent: ShowTopology;
	@ViewChild('topologyElement') topologyElement;

	@ViewChild(SliderWidget) sliderWidget: SliderWidget;
	sliderWidgetData;
	selectedTopologyData: TopologyData;

	width: any;
	height: any;
	//data
	static allTopologyData: { [key: string]: TopologyData } = {};

	//Path/selections
	selectedSourceId: any;
	selectedTargetId: any;
	selectedCounter: number;

	//tabs
	tabList: Array<TopologyTabData> = [];

	pathType = pathType; //enum
	TOPOLOGYSTATUS = TOPOLOGYSTATUS; //enum
	MVTNTYPE = MVTNTYPE; //enum
	TOPOLOGYTYPE = TOPOLOGYTYPE; // enum

	//zoom
	zoom: any;

	//timeouts
	getTopologyTimeout;
	subTopologyTimeout;

	alternativePathContent = "hey";

	//flags
	static currentTabId: string;//this is used in when user closes a tab which its not the current tab, it does not refresh the page // physicial topology id = PrognetTopology
	pathExistsDTOFlag: any = {sourceId: "", targetId: ""};
	topologyEventsSubscription;
	topologyEventsTimeout;
	alternativePathPopoverDataReadyFlag = false;
	isTopologyModeStandAlone: string;

	navHeight;
	topologyEventsListener;
	bwSensitivityIcon;
	bwSensitivityBtn;
	bwSensitivityFlag = false;
	alternativePathShownFlag = null;
	//subs to unsub
	topologyRefreshSubs;
	logoutEventSub;
	proactivePathChangeSubs;
	routerEvents;

	constructor(private eventsManager: EventsManager, public router: Router, public mvtnReqApi: MvtnRequestApi, public topologyService: TopologyService, public topologyEventsListenerFactory: TopologyEventsListenerFactory, public mvtnApi: MvtnApi, public route: ActivatedRoute, public location: Location, public changeDetector: ChangeDetectorRef, public elementRef: ElementRef, public appRef: ApplicationRef, public documentConverter: DocumentConverter, public subTopologyApi: SubTopologyApi, public topologyApi: TopologyApi, baseServices: PageServices, private sharedService: SharedService) {
		super(baseServices, elementRef);
		this.setI18NKey('network_vis.topology');
		this.selectedTargetId = "";
		this.selectedSourceId = "";
		this.selectedCounter = 0;
		this.isTopologyModeStandAlone = this.baseServices.sessionManager.getItem("isTopologyModeStandAlone");

		this.routerEvents = router.events.subscribe((ev: any) => {
			console.log(ev);
			let action = this.route.queryParams && this.route.queryParams['value'] ? this.route.queryParams['value']['action'] : null;
			if (ev.url && ev.url.indexOf("topology/view") > -1 && action == UI_TOPOLOGY_ACTION.NEW_SUPER_TOPOLOGY) { //navigating TO topology/view, if we are moving out of this page theres no need to call getTopology()
				this.processRouteParams();
			}
		});

		this.topologyRefreshSubs = sharedService.topologyRefresh$.subscribe(() => {
			this.refreshTopology();
		});

		this.proactivePathChangeSubs = sharedService.alternativeProactivePathChange$.subscribe((data: Array<LinkDTO>) => {
			this.showTopologyComponent.resetPath(false);
			this.showTopologyComponent.pathSelectionFlag = true;
			this.showTopologyComponent.colorThePath(data);
		});

		this.logoutEventSub = eventsManager.on(AUTHENTICATION_EVENT_TYPE.LOGOUT, (event) => {
			sessionStorage.removeItem('tabList');
		});
	}

	onTopologyTrigger(transferData) {//html
		let topoData: TopologyDTO = transferData.realData;
		Topology.allTopologyData[topoData.id] = Topology.allTopologyData[transferData.tempId];
		Topology.currentTabId = topoData.id;
		if (transferData.mode != CREATESHOWENUM.EDIT) {//create, show, none
			for (let i = 0; i < this.tabList.length; i++) {
				if (this.tabList[i].id == transferData.tempId) {
					this.tabList[i].id = topoData.id;
					this.tabList[i].tabType = CREATESHOWENUM.SHOW;
				}
			}
			this.topologyService.saveTopologyTabListToStorage(this.tabList);
			// delete Topology.allTopologyData[transferData.tempId]; reqidnin verilmesiyle bu sorun ortadan kalkmış olmalı
			Topology.allTopologyData[topoData.id].id = topoData.id;
			Topology.allTopologyData[topoData.id].tabType = CREATESHOWENUM.SHOW;
			//this.restoreTabs();
			this.newTopologyArrival(topoData, topologyGetType.REFRESH, CREATESHOWENUM.SHOW);
		} else {
			this.restoreTabs();
			this.getTopology(topoData.info.type, topoData.info.id, topologyGetType.REFRESH);
		}
	}

	ngOnChanges(e) {
		super.ngOnChanges(e);
		this.logger.debug('something changed', e);
	}

	ngOnInit() {
		super.ngOnInit()
	}

	ngAfterViewInit() {
		if (super.ngAfterViewInit()) {

			this.processRouteParams();
			//this.restoreTabs();

			this.showTopologyComponent.navHeight = $('.navbar').innerHeight();
			this.bwSensitivityIcon = $('#sensitivity-toggle-icon');
			this.bwSensitivityBtn = $('#sensitivity-toggle-button');
			return true;
		}
		return false;
	}

	topologyEditPopup() {
		let topologyInfo = Topology.allTopologyData[Topology.currentTabId];
		this.sharedService.showModal(CreateVirtualTopology, topologyInfo, (result) => {
			if (result.isSuccess) {
				for (let i = 0; i < this.tabList.length; i++) {
					if (result.data.id === this.tabList[i].id) {
						this.selectedTopologyData = Topology.allTopologyData[result.data.id];
						this.tabList[i].name = result.data.name;
						for (let key in result.data) {
							if (result.data.hasOwnProperty(key)) {
								this.selectedTopologyData[key] = result.data[key];
							}
						}
						break;
					}
				}
				//this.selectedTopologyData.tabType = CREATESHOWENUM.CREATE; // MLAT-3729
				this.changeDetector.detectChanges();
			}
		});
	}

	topologyCreationPopup(topologyType, optionalData?) {
		if (!optionalData) optionalData = {};
		optionalData.type = topologyType;

		this.sharedService.showModal(CreateVirtualTopology, optionalData, (result) => {
			if (this.documentConverter.isNotNullOrUndefinedOrEmptyString(result.data)) {
				let newTopologyData = this.baseServices.apiHelper.genDTO({
					id: result.data.id,
					info: result.data,
					switches: [],
					hosts: [],
					links: []
				});

				//this.showTopologyComponent.topologyCreateModeFlag = true;//this is replaced with tabType
				this.newTopologyArrival(newTopologyData, topologyGetType.NEW, CREATESHOWENUM.CREATE);
			} else {
				this.restoreTabs();
			}
		});
	}

	registerToServerEvents(event: TopologyEventDTO) {

		if (!$.isEmptyObject(event) && !$.isEmptyObject(Topology.allTopologyData)) {
			let topologyNameOfEvent = this.documentConverter.getTopologyNameOfEvent(event, Topology.allTopologyData);

			if (Topology.allTopologyData.hasOwnProperty(topologyNameOfEvent) || event.revision == 999333) {

				//this.logger.debug(`TOPOLOGY "${topologyNameOfEvent}" received "${event.type}" EVENT!`,event.value);

				let data = event;
				switch (data.type) {
					case TOPOLOGYEVENTTYPE.STATS_UPDATED:
						Topology.allTopologyData = this.documentConverter.updateStats(data, Topology.allTopologyData);
						this.showTopologyComponent.updateLinkStats(data.value);
						break;
					case TOPOLOGYEVENTTYPE.SWITCH_ADDED:
						Topology.allTopologyData = this.documentConverter.addNewSwitch(data, Topology.allTopologyData);
						this.updateCurrentTabAfterAddRemoveEvent(data);
						this.updateVirtualTopologyDataFromServer(data);
						this.checkForClustering();
						break;
					case TOPOLOGYEVENTTYPE.SWITCH_UPDATED:
						Topology.allTopologyData = this.documentConverter.updateSwitch(data, Topology.allTopologyData);
						this.showTopologyComponent.updateNode(data.value);
						break;
					case TOPOLOGYEVENTTYPE.PORTS_UPDATED:
						Topology.allTopologyData = this.documentConverter.updateSwitchPort(data, Topology.allTopologyData);
						this.showTopologyComponent.updateSwitchPort(data.value);
						break;
					case TOPOLOGYEVENTTYPE.SWITCH_REMOVED:
						Topology.allTopologyData = this.documentConverter.removeSwitch(data, Topology.allTopologyData);
						this.updateCurrentTabAfterAddRemoveEvent(data);
						this.updateVirtualTopologyDataFromServer(data);
						break;
					case TOPOLOGYEVENTTYPE.LINK_ADDED:
						let theData = this.documentConverter.addNewLink(data, Topology.allTopologyData);
						if (this.documentConverter.isNotNullOrUndefinedOrEmptyString(theData)) {
							Topology.allTopologyData = theData;
							this.updateCurrentTabAfterAddRemoveEvent(data);
							this.updateVirtualTopologyDataFromServer(data);
						}
						break;
					case TOPOLOGYEVENTTYPE.LINK_REMOVED:
						Topology.allTopologyData = this.documentConverter.removeLink(data, Topology.allTopologyData);
						this.updateCurrentTabAfterAddRemoveEvent(data);
						this.updateVirtualTopologyDataFromServer(data);
						break;
					case TOPOLOGYEVENTTYPE.LINK_UPDATED:
						Topology.allTopologyData = this.documentConverter.updateLink(data, Topology.allTopologyData);

						if (Topology.currentTabId == data.topologyId || (Topology.allTopologyData[Topology.currentTabId].type == TOPOLOGYTYPE.PHYSICAL || Topology.allTopologyData[Topology.currentTabId].type == TOPOLOGYTYPE.SUPER)) {
							let renderFlag = this.showTopologyComponent.updateLinkStats(data.value);
							if(renderFlag){
                                this.updateCurrentTabAfterAddRemoveEvent(data);
                            }
						}
						this.updateVirtualTopologyDataFromServer(data);
						break;
					case TOPOLOGYEVENTTYPE.HOST_ADDED:
						Topology.allTopologyData = this.documentConverter.addNewHost(data, Topology.allTopologyData);
						this.updateCurrentTabAfterAddRemoveEvent(data);
						this.checkForClustering();
						break;
					case TOPOLOGYEVENTTYPE.HOST_REMOVED:
						Topology.allTopologyData = this.documentConverter.removeHost(data, Topology.allTopologyData);
						this.updateCurrentTabAfterAddRemoveEvent(data);
						break;
					case TOPOLOGYEVENTTYPE.HOST_UPDATED:
						Topology.allTopologyData = this.documentConverter.updateHostStatus(data, Topology.allTopologyData);
						this.showTopologyComponent.updateNode(data.value);
						break;
					case TOPOLOGYEVENTTYPE.ROUTER_ADDED:
						Topology.allTopologyData = this.documentConverter.addNewHost(data, Topology.allTopologyData);
						this.updateCurrentTabAfterAddRemoveEvent(data);
						break;
					case TOPOLOGYEVENTTYPE.ROUTER_REMOVED:
						Topology.allTopologyData = this.documentConverter.removeHost(data, Topology.allTopologyData);
						this.updateCurrentTabAfterAddRemoveEvent(data);
						break;
					case TOPOLOGYEVENTTYPE.ROUTER_UPDATED:
						Topology.allTopologyData = this.documentConverter.updateHostStatus(data, Topology.allTopologyData);
						this.showTopologyComponent.updateNode(data.value);
						break;
					case TOPOLOGYEVENTTYPE.NETWORK_DEVICE_ADDED:
						Topology.allTopologyData = this.documentConverter.addNewGateway(data, Topology.allTopologyData);
						this.updateCurrentTabAfterAddRemoveEvent(data);
						break;
					case TOPOLOGYEVENTTYPE.NETWORK_DEVICE_REMOVED:
						Topology.allTopologyData = this.documentConverter.removeSwitch(data, Topology.allTopologyData);
						this.updateCurrentTabAfterAddRemoveEvent(data);
						break;
					case TOPOLOGYEVENTTYPE.NETWORK_DEVICE_UPDATED:
						Topology.allTopologyData = this.documentConverter.updateHostStatus(data, Topology.allTopologyData);
						this.showTopologyComponent.updateNode(data.value);
						break;
					case TOPOLOGYEVENTTYPE.WAN_PORT_ADDED:
						Topology.allTopologyData = this.documentConverter.addNewCloud(data, Topology.allTopologyData);
						this.updateCurrentTabAfterAddRemoveEvent(data);
						break;
					case TOPOLOGYEVENTTYPE.WAN_PORT_REMOVED:
						Topology.allTopologyData = this.documentConverter.removeCloud(data, Topology.allTopologyData);
						this.updateCurrentTabAfterAddRemoveEvent(data);
						break;
					case TOPOLOGYEVENTTYPE.WAN_PORT_UPDATED:
						Topology.allTopologyData = this.documentConverter.updateHostStatus(data, Topology.allTopologyData);
						this.showTopologyComponent.updateNode(data.value);
						break;
					case TOPOLOGYEVENTTYPE.DOMAIN_ADDED:
						Topology.allTopologyData = this.documentConverter.addNewDomain(data, Topology.allTopologyData);
						this.updateCurrentTabAfterAddRemoveEvent(data);
						break;
					case TOPOLOGYEVENTTYPE.DOMAIN_REMOVED:
						Topology.allTopologyData = this.documentConverter.removeDomain(data, Topology.allTopologyData);
						this.updateCurrentTabAfterAddRemoveEvent(data);
						break;
					case TOPOLOGYEVENTTYPE.DOMAIN_UPDATED:
						Topology.allTopologyData = this.documentConverter.updateHostStatus(data, Topology.allTopologyData);
						this.showTopologyComponent.updateNode(data.value);
						break;
					case TOPOLOGYEVENTTYPE.CONTROLLER_ACTIVATED:
					case TOPOLOGYEVENTTYPE.CONTROLLER_DEACTIVATED:
						let topologyName = this.documentConverter.getTopologyNameOfEvent(data, {});
						Topology.allTopologyData = this.documentConverter.updateController(data, Topology.allTopologyData);
						if (topologyName == Topology.currentTabId) {
							this.showTopologyComponent.updateControllersWidget(data);
						}
						this.changeDetector.detectChanges();
						break;
					case TOPOLOGYEVENTTYPE.RULE_ADDED:
					case TOPOLOGYEVENTTYPE.RULE_REMOVED: {
						let switches: Array<SwitchDTO> = data.value;
						for (let i = 0; i < switches.length; i++) {
							let newData = {value: switches[i], topologyId: data.topologyId, id: data.id};
							Topology.allTopologyData = this.documentConverter.updateSwitch(newData, Topology.allTopologyData, {flows: true});
							this.showTopologyComponent.updateNode(newData);
						}
						break;
					}
					case TOPOLOGYEVENTTYPE.MASTER_CHANGED: {
						let switches: Array<SwitchDTO> = data.value;
						for (let i = 0; i < switches.length; i++) {
							let newData = {value: switches[i], topologyId: data.topologyId, id: data.id};
							Topology.allTopologyData = this.documentConverter.updateSwitch(newData, Topology.allTopologyData, {controllerId: true});
							this.showTopologyComponent.updateNode(newData);
						}

						break;
					}
					case TOPOLOGYEVENTTYPE.TOPOLOGY_UPDATED: {
						this.refreshTopology();
						break;
					}
				}
			} else {
				this.logger.warn(`EVENT "${event.type}" IGNORED FOR TOPOLOGY "${topologyNameOfEvent}"!`);
			}
		} else {
			this.logger.error('EVENT HAS ERROR ', event);
		}

	}

	updateVirtualTopologyDataFromServer(data: TopologyEventDTO) {
		if (this.documentConverter.isNotNullOrUndefined(data.topologyId) && data.topologyId.length > 0 && Topology.allTopologyData[data.id]) {
			clearTimeout(this.subTopologyTimeout);
			this.subTopologyTimeout = setTimeout(() => {
				if (Topology.allTopologyData[data.topologyId].isMappedVersionShown === true) {
					let s =
						this.getSubTopology(data.topologyId).subscribe((res: SubTopologyResponse) => {
							if (this.baseServices.uiHelper.processResponse(res)) {
								Topology.allTopologyData[data.topologyId].data = this.flattenSubTopology(res);
								this.selectedTopologyData = Topology.allTopologyData[data.topologyId];

								this.showTopologyComponent.render(Topology.allTopologyData[Topology.currentTabId].data, renderType.FULL);
							}
						});
					this.subscriptions.push(s);
				} else {
					let req: TopologyRequest = <TopologyRequest>{
						token: <SecurityToken>{
							requestId: "",
							timestamp: new Date()
						},
						etag: '',
						digest: '',
						options: <TopologyOptions> {
							id: data.id,
							version: 1,
							revision: 1,
							timestamp: new Date(),
							type: TOPOLOGYTYPE.VIRTUAL
						}
					};

					let s =
						this.topologyApi.topologyGetPOST(req).subscribe(
							(res: TopologyResponse) => {
								if (this.baseServices.uiHelper.processResponse(res)) {
									let newData = this.topologyService.convert(res.data);
									Topology.allTopologyData[data.topologyId].data = newData;
									this.showTopologyComponent.render(Topology.allTopologyData[Topology.currentTabId].data, renderType.FULL);
								}
							});
					this.subscriptions.push(s);
				}
			}, 500);


		}
	}

	updateCurrentTabAfterAddRemoveEvent(data) {
		if (is.existy(Topology.allTopologyData) && ( Topology.currentTabId == this.documentConverter.getTopologyNameOfEvent(data, Topology.allTopologyData) || (Topology.allTopologyData[Topology.currentTabId].isMappedVersionShown == true && this.documentConverter.getTopologyNameOfEvent(data, Topology.allTopologyData) == "PrognetTopology") )) {//dont render if current tab isnt the event receiving one
			let topologyData = Topology.allTopologyData[Topology.currentTabId];
			if (is.existy(topologyData)) {
				this.selectedTopologyData = topologyData;
				this.showTopologyComponent.render(topologyData.data, renderType.UPDATE);
				this.showTopologyComponent.pathReCalculationWhenPathExists(data);
			}
		}
	}

	refreshTopology(): any {
		this.showTopologyComponent.selectElementFlag = false;
		this.showTopologyComponent.topologyData.tabType = CREATESHOWENUM.SHOW; //selectedTopologyData da olur
		this.showTopologyComponent.topologyData.alternativeProactivePathPopoverDataReadyFlag = false;
		this.showTopologyComponent.topologyCreateModeFlag = false;
		this.showTopologyComponent.expand = {};
		this.showTopologyComponent.clusterTopologyData = {};
		this.alternativePathShownFlag = null;
		this.showTopologyComponent.resetSelectedElementState();
		this.closeWebSocket();

		this.showTopologyComponent.resetPath();
		if (this.documentConverter.isNotNullOrUndefined(Topology.currentTabId)) {
			if (Topology.allTopologyData[Topology.currentTabId].type === TOPOLOGYTYPE.PHYSICAL) {
				return this.getTopology(TOPOLOGYTYPE.PHYSICAL, "", topologyGetType.REFRESH);
			} else if (Topology.allTopologyData[Topology.currentTabId].type === TOPOLOGYTYPE.SUPER) {
				return this.getTopology(TOPOLOGYTYPE.SUPER, Topology.allTopologyData[Topology.currentTabId].id, topologyGetType.REFRESH);
			} else if (Topology.allTopologyData[Topology.currentTabId].type === TOPOLOGYTYPE.VIRTUAL && Topology.allTopologyData[Topology.currentTabId].isMappedVersionShown !== true) {
				return this.getTopology(TOPOLOGYTYPE.VIRTUAL, Topology.allTopologyData[Topology.currentTabId].id, topologyGetType.REFRESH);
			} else if (Topology.allTopologyData[Topology.currentTabId].type === TOPOLOGYTYPE.VIRTUAL && Topology.allTopologyData[Topology.currentTabId].isMappedVersionShown === true) {
				return this.renderGetSubTopologyById(Topology.allTopologyData[Topology.currentTabId].id);
			} else {
				return this.getTopology(TOPOLOGYTYPE.VIRTUAL_REQUEST, Topology.allTopologyData[Topology.currentTabId].id, topologyGetType.REFRESH);
				// if(!this.p('phy_topo:manage')){
				//     return this.getTopology(TOPOLOGYTYPE.VIRTUAL_REQUEST, Topology.allTopologyData[Topology.currentTabId].id, topologyGetType.REFRESH);
				// }else{
				//     return this.getSubTopology(Topology.currentTabId).toPromise().then((res: SubTopologyResponse)=> {
				//         if (this.baseServices.uiHelper.processResponse(res)) {
				//             Topology.allTopologyData[Topology.currentTabId].data = this.flattenSubTopology(res);
				//             this.selectedTopologyData = Topology.allTopologyData[Topology.currentTabId];
				//             this.showTopologyComponent.topoInit();
				//         }
				//     });
				// }

			}
		} else {
			this.baseServices.uiHelper.notify($.t("common.messages.no_tab"), DIALOG_TYPES.ERROR);
		}
	}

	closeWebSocket() {
		if (this.topologyEventsSubscription) {
			this.topologyEventsSubscription.unsubscribe();
		}
	}

	getTopology(type: TOPOLOGYTYPE, id: string = '', getType: topologyGetType = topologyGetType.NEW) {
		$('.topology_nodata').hide();

		this.baseServices.uiHelper.block('topology', $('.tab-pane'), false);

		if (this.getTopologyTimeout) {
			clearTimeout(this.getTopologyTimeout);
		}

		let topologyGetCallback = (res) => {
			emptyTopologyDataDTO.id = id;
			emptyTopologyDataDTO.info.id = id;
			emptyTopologyDataDTO.info.type = type;
			if (this.baseServices.uiHelper.processResponse(res)) {
				if (res.data && res.data.info) {
					let websocketid = (id == "" || id == "PrognetTopology") ? topoConfig.physicalTopologyWebSocketChannelId : id;
					this.getWebSocket(websocketid);
					this.newTopologyArrival(res.data, getType);//TODO after socket init draw the topology so that you can buffer the events
				} else {
					this.baseServices.uiHelper.unblock('topology');
					this.newTopologyArrival(emptyTopologyDataDTO, getType);
				}
			} else {
				this.baseServices.uiHelper.unblock('topology');
				if (!(this.tabList && this.tabList.length > 0)) { // probably not SUPER_TOPOLOGY
					this.newTopologyArrival(emptyTopologyDataDTO, getType);
				}
			}
		};

		let topologyGetErrorCallback = (err) => {
			let errMsg = err.message || 'Server error';
			if (errMsg === 'Server error')
				return this.baseServices.uiHelper.notify($.t("common.messages.RETURN_STATUS.SERVER_ERROR"), DIALOG_TYPES.ERROR);
		};

		this.getTopologyTimeout = setTimeout(() => {
			let req: TopologyRequest = this.baseServices.apiHelper.genRequest({
				options: <TopologyOptions> {
					id: id,
					version: 1,
					revision: 1,
					timestamp: new Date(),
					type: type
				}
			});
			if (type === TOPOLOGYTYPE.VIRTUAL_REQUEST) {
				let s =
					this.mvtnReqApi.mvtnRequestGetPOST(req).subscribe(
						(res: TopologyResponse) => {
							topologyGetCallback(res);
						}, (err) => {
							topologyGetErrorCallback(err);
						}
					);
				this.subscriptions.push(s);
			} else {//physical + virtual
				let s =
					this.topologyApi.topologyGetPOST(req).subscribe(
						(res: TopologyResponse) => {
							topologyGetCallback(res);
						}, (err) => {
							topologyGetErrorCallback(err);
						}
					);
				this.subscriptions.push(s);
			}
		}, 500);
	}

	static tabRank: number = 1;

	newTopologyArrival(data: TopologyDTO, getType: topologyGetType, topologyMode: CREATESHOWENUM = CREATESHOWENUM.SHOW) {
		this.logger.debug('New Topology! : ', data);
		let topologyData = this.topologyService.convert(data);
		this.logger.debug('After Document Converter: ', topologyData);
		let type = data.info.type ? data.info.type : TOPOLOGYTYPE.PHYSICAL;

		let topoId; //because back-end has an inconsistency issue with topology ids
		if (type == TOPOLOGYTYPE.PHYSICAL) {
			topoId = "";
		} else if (type == TOPOLOGYTYPE.SUPER) {
			topoId = "SUPER";
			if (!data.info.name) {
				data.info.name = "SuperTopology";
			}
		} else if (data.info && data.info.id == "") {
			topoId = data.id;
		} else {
			if(data.info && data.info.type === TOPOLOGYTYPE.VIRTUAL_REQUEST){
			    topoId = data.id
            }else{
                topoId = data.info.id;
            }
		}

		let newTopologyData: TopologyData = {
			type: type,
			data: topologyData,
			backup: "",
			name: data.info.name,
			vlanTag: data.info.vlanTag,
			reqId: data.id,
			maximumNumberOfUser: data.info.maximumNumberOfUser,
			energyConsumption: data.info.energyConsumption,
			bandwidth: data.info.bandwidth,
			switchSecurityLevel: data.info.switchSecurityLevel,
			linkSecurityLevel: data.info.linkSecurityLevel,
			jitter: data.info.jitter,
			delay: data.info.delay,
			packetLossRate: data.info.packetLossRate,
			collision: data.info.collision,
			ipAddressess: data.info.ipAddressess,
			dnsServers: data.info.dnsServers,
			macAddresses: data.info.macAddresses,
			portRanges: data.info.portRanges,
			topologyGateway: data.info.topologyGateway,
			tabType: topologyMode,
			status: data.info.status,
			id: topoId,
			tabRank: (type == TOPOLOGYTYPE.PHYSICAL) ? 0 : Topology.tabRank++, //if it's the physical topo, give the highest rank always (0)
			tabRequestStatus: data.requestStatus,
			mvtnType: data.info.mvtnType ? data.info.mvtnType : MVTNTYPE.DYNAMIC,
			wanMvtn: data.info["wanMvtn"],
			isLldpDisabled: data.isLldpDisabled,
			mvtnReqStatus: data.requestStatus
		};

		if (type === TOPOLOGYTYPE.VIRTUAL || type === TOPOLOGYTYPE.VIRTUAL_REQUEST) {
			newTopologyData["virtual"] = topologyData;
		}

		Topology.allTopologyData[topoId] = newTopologyData;

		if (getType === topologyGetType.NEW && this.documentConverter.isNotNullOrUndefinedOrEmptyString(data.info.name)) {
			this.tabList = this.topologyService.getTopologyTablist();
			let theTabData = this.topologyService.pushToTopologyTablist(newTopologyData, topologyMode);
			this.tabTypeCheck(theTabData);
			Topology.currentTabId = topoId;
			this.selectedTopologyData = newTopologyData;
		} else {
			this.tabList = this.topologyService.getTopologyTablist();
			for (let t = 0; t < this.tabList.length; t++) {
				let tab = this.tabList[t];
				if (tab.id === topoId) {
					Topology.currentTabId = topoId;
					this.selectedTopologyData = newTopologyData;
					break;
				}
			}
		}

		this.changeDetector.detectChanges();
		this.baseServices.uiHelper.unblock('topology');
	}

	tabTypeCheck(tabs) {
		this.showTopologyComponent.topologyCreateModeFlag = (tabs.tabType == CREATESHOWENUM.CREATE);
		return this.showTopologyComponent.topologyCreateModeFlag;
	}

	tabClicked(tabs: TopologyTabData, e) {
		if (e && e.stopPropagation) {
			e.stopPropagation();
		}
		let id = tabs.id == "PrognetTopology" ? "" : tabs.id;

		if (Topology.currentTabId != tabs.id) {

			let tabClicked = () => {
				let currentLi = $(e.target).closest("li");
				currentLi.parent().children(".active").removeClass("active");
				currentLi.addClass("active");

				this.showTopologyComponent.resetPath();
				this.tabTypeCheck(tabs);

				this.getTopology(tabs.topoType, id, topologyGetType.REFRESH);
			};

			if (!this.showTopologyComponent.topologyCreateModeFlag) {
				tabClicked();
			} else {
				this.confirmCancelVTNDesign((result) => {
					if (result == this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
						tabClicked();
					}
				}, false);
			}
		} else {
			this.getTopology(tabs.topoType, id, topologyGetType.REFRESH); //this way it will refresh websocket connection on navigating from other urls
		}
	}

	private confirmCancelVTNDesign(callback: DialogCallbackType, isSelectNextTab: boolean = true) {
		this.baseServices.uiHelper.confirm(this.t("messages.confirm_cancel_design_mode"), (result) => {
			if (result == this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
				this.showTopologyComponent.topologyCreateModeFlag = false;
				for (let k = 0; k < this.tabList.length; k++) {
					let tab = this.tabList[k];
					if (tab.id == Topology.currentTabId) {
						this.tabClosed(tab, isSelectNextTab);
						break;
					}
				}
			}
			callback(result);
		})
	}

	deactivatePromise: Promise<boolean>;

	canDeactivate(currTree?: any, futureTree?: any): Promise<boolean> {
		console.info("canDeactivate?");
		//typescript calls this function more than once, so we use prev promise if it is still available
		if (!this.deactivatePromise) {
			this.deactivatePromise = new Promise<boolean>((resolve, reject) => {
				if (this.showTopologyComponent.topologyCreateModeFlag) {
					this.confirmCancelVTNDesign((result) => {
						resolve(result == this.baseServices.uiHelper.DIALOG_BUTTONS.YES);
						this.deactivatePromise = null;
					});
				} else {
					resolve(true);
					this.deactivatePromise = null;
				}

			});
		}

		return this.deactivatePromise;
	}

	tabClosed(tabs, isSelectNextTab: boolean = true) {
		//clean queryParams
		if (this.route && this.route.queryParams && this.route.queryParams['value'] && this.route.queryParams['value']['data']) {
			this.location.replaceState('topology/view'); //destroys the state, use with caution
		}

		let tabClosed = () => {
			this.tabList = this.topologyService.removeFromTablist(tabs);
			//if tab closed is the current tab then render
			if (Topology.currentTabId == tabs.id) {
				this.closeWebSocket();
				this.showTopologyComponent.resetPath();
				if (this.tabList.length > 0) {
					if (isSelectNextTab) this.clickToLastTab();
				} else {
					Topology.currentTabId = null;// '@@EMPTY@@';
					this.selectedTopologyData = {
						data: {
							switches: [],
							controllers: [],
							links: [],
							hosts: [],
							info: null
						},
						reqId: "",
						type: TOPOLOGYTYPE.VIRTUAL,
						tabRank: 99,
						tabType: CREATESHOWENUM.SHOW,
						id: "empty"
					};
                    if (!this.p('phy_topo:view')) { // If SAY
                        this.baseServices.router.navigate(['/topology/notopology']);
                    }
				}
			}
		};

		if (this.showTopologyComponent.topologyCreateModeFlag && Topology.currentTabId == tabs.id) {
			this.confirmCancelVTNDesign((result) => {
				if (result == this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
					tabClosed();
				}
			});
		} else {
			tabClosed();
		}

	}

	clickToLastTab() {
		this.tabList = this.topologyService.getTopologyTablist();
		if (this.tabList.length > 0) {
			let lastTab = this.tabList[this.tabList.length - 1];
			this.tabClicked(lastTab, {target: $("#tab" + lastTab.id)});
		}
	}

	showReactivePathList() {
		this.logger.debug("showReactivePathList");

		this.sharedService.showModal(PathListPopup, {
			topologyType: Topology.allTopologyData[Topology.currentTabId].type,
			topologyId: Topology.allTopologyData[Topology.currentTabId].id //name
		}, (result) => {
			if (result.isSuccess) {
				this.logger.debug("Item selected", result.data);

				if (result.data) {
					let returnData: ReactivePathListReturn = <ReactivePathListReturn>result.data;
					switch (returnData.command) {
						// case REACTIVE_PATH_LIST_COMMAND.PATH_CREATE:
						//     this.showTopologyComponent.createPath();
						//     break;
						// case REACTIVE_PATH_LIST_COMMAND.PATH_EDIT:
						//     //not used for now :)
						//     break;
						case REACTIVE_PATH_LIST_COMMAND.PATH_VIEW:

							this.showTopologyComponent.resetPath();

							if (this.showTopologyComponent.checkPathExistence((<Array<LinkDTO>>returnData.pathInfo.links))) {

								this.showTopologyComponent.pathExistsDTOFlag = {
									sourceId: returnData.pathInfo.srcHostId,
									targetId: returnData.pathInfo.dstHostId
								};

								this.showTopologyComponent.selectedSourceId = returnData.pathInfo.srcHostId;
								this.showTopologyComponent.selectedTargetId = returnData.pathInfo.dstHostId;

								this.showTopologyComponent.colorThePath(returnData.pathInfo.links);
							}
							break;
					}
				}
			}
		});
	}

	showProactivePathList() {
		this.logger.debug("showProactivePathList");

		this.sharedService.showModal(ProactivePathListPopup, {
			topologyType: Topology.allTopologyData[Topology.currentTabId].type,
			topologyId: Topology.allTopologyData[Topology.currentTabId].id //name
		}, (result) => {
			if (result.isSuccess) {
				this.logger.debug("Item selected", result.data);

				if (result.data) {
					let returnData: ProactivePathListReturn = <ProactivePathListReturn>result.data;
					switch (returnData.command) {
						case PROACTIVE_PATH_LIST_COMMAND.PATH_CREATE:
							this.showTopologyComponent.createPath();
							break;
						case PROACTIVE_PATH_LIST_COMMAND.PATH_EDIT:
							this.baseServices.sharedService.showModal(PreliminaryPathPopup, returnData.pathInfo, (result) => {
								this.showProactivePathList();
							});
							break;
						case PROACTIVE_PATH_LIST_COMMAND.PATH_VIEW:

							this.showTopologyComponent.resetPath();
							if (this.showTopologyComponent.checkPathExistence((<Array<LinkDTO>>returnData.pathInfo.subPathList[returnData.pathInfo.selectedSubPathId].links))) {
								this.showTopologyComponent.pathExistsDTOFlag = {
									sourceId: returnData.pathInfo.fromId,
									targetId: returnData.pathInfo.toId
								};

								this.showTopologyComponent.selectedSourceId = returnData.pathInfo.fromId;
								this.showTopologyComponent.selectedTargetId = returnData.pathInfo.toId;

								this.showTopologyComponent.colorThePath(returnData.pathInfo.subPathList[returnData.pathInfo.selectedSubPathId].links);
								this.showTopologyComponent.topologyData.alternativeProactivePaths = returnData.pathInfo.subPathList;
								this.showTopologyComponent.bindAlternativeProactivePathsPopover();
								this.changeDetector.detectChanges();
								break;
							}
					}
				}
			}
		});
	}

	ngOnDestroy() {
		super.ngOnDestroy();
		if (this.topologyEventsSubscription) {
			this.topologyEventsSubscription.unsubscribe();
			this.topologyEventsSubscription = null;
		}
		if (this.topologyEventsListener) {
			this.topologyEventsListener.stopWebSocket();
		}
		if (this.topologyEventsSubscription) this.topologyRefreshSubs.unsubscribe();
		if (this.proactivePathChangeSubs) this.proactivePathChangeSubs.unsubscribe();
		if (this.routerEvents) this.routerEvents.unsubscribe();
		if (this.logoutEventSub) {
			this.logoutEventSub.unsubscribe();
			this.logoutEventSub = null;
		}
	}

	showVirtualTopologyList() {
		this.showTopologyList(TOPOLOGYTYPE.VIRTUAL);
	}

	showPhysicalTopologyList() {
		this.showTopologyList(TOPOLOGYTYPE.PHYSICAL);
	}

	getWebSocket(websocketid) {
		if (this.topologyEventsSubscription) {
			this.topologyEventsSubscription.unsubscribe();
			this.topologyEventsListener.stopWebSocket();
		}

		this.topologyEventsListener = this.topologyEventsListenerFactory.getListener(websocketid);// 0 = physical
		this.topologyEventsListener.startWebSocket();
		this.topologyEventsSubscription = this.topologyEventsListener.events.subscribe((event: TopologyEventDTO) => {
			this.registerToServerEvents(event);
		});
	}

	renderGetSubTopologyById(topoid) {
		this.getSubTopology(topoid).toPromise().then((res: SubTopologyResponse) => {
			if (this.baseServices.uiHelper.processResponse(res)) {
				Topology.allTopologyData[Topology.currentTabId].data = this.flattenSubTopology(res);
				Topology.allTopologyData[Topology.currentTabId].isMappedVersionShown = true;
				Topology.allTopologyData[Topology.currentTabId].displayedSubTopologyId = res.data.selectedSubTopologyId;
				Topology.allTopologyData[Topology.currentTabId].selectedSubTopologyId = res.data.selectedSubTopologyId;
				Topology.allTopologyData[Topology.currentTabId].subTopologyDTO = res.data;
				this.getWebSocket(topoConfig.physicalTopologyWebSocketChannelId);
				this.selectedTopologyData = Topology.allTopologyData[Topology.currentTabId];
				this.changeDetector.detectChanges();
				this.showTopologyComponent.topoInit();
				this.bindAlternativePathsPopover();
			}
		});
	}

	bindAlternativePathsPopover() {
		let that = this;
		let content = '<ul class="nav" style="margin-bottom:0 !important;">';
		for (let i = 0; i < this.selectedTopologyData.subTopologyDTO.subTopologyList.length; i++) {
			let currentId = this.selectedTopologyData.subTopologyDTO.subTopologyList[i].id;
			if (this.selectedTopologyData.subTopologyDTO.subTopologyList[i].id !== this.selectedTopologyData.subTopologyDTO.selectedSubTopologyId) {
				content += '<li index="' + (i + 1) + '" style="min-width:116px;" topoid="' + currentId + '"><a href="javascript:;" class="alternatives" style="color:inherit;" index="' + (i + 1) + '" id="' + currentId + '" topoid="' + currentId + '">' + (i + 1) + '.' + this.t('alternative');
			} else {
				content += '<li index="' + (i + 1) + '" style="min-width:116px;" topoid="' + currentId + '"><a href="javascript:;" class="alternatives" style="color:inherit;" index="' + (i + 1) + '" id="' + currentId + '" topoid="' + currentId + '"><b>' + (i + 1) + '.' + this.t('alternative') + '</b>';
			}
			content += '</a></li>';
		}
		content += '</ul>';

		let thePopover = $('#alternativePaths').popover({
			placement: "right",
			title: this.t("alternative_paths_title"),
			content: "Loading...",
			html: true,
			template: '<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title" style="min-width:143px;"></h3><div class="popover-content" style="padding:0 !important;"><p></p></div></div></div>'
		});

		thePopover.attr('data-content', content).data('bs.popover').setContent();

		$('body').off('click', '.alternatives').on('click', '.alternatives', function (e) { //so that every dynamically appended .alternatives will have the click event by mutation
			$('.blue-ticks-for-alternative-paths').remove();
			let currentElementId = $(this).attr('topoid');
			Topology.allTopologyData[Topology.currentTabId].data = that.flattenSubTopology(that.baseServices.apiHelper.genDTO({data: Topology.allTopologyData[Topology.currentTabId].subTopologyDTO}), false, currentElementId);
			Topology.allTopologyData[Topology.currentTabId].displayedSubTopologyId = currentElementId;
			that.selectedTopologyData = Topology.allTopologyData[Topology.currentTabId];
			if (that.selectedTopologyData.subTopologyDTO.selectedSubTopologyId != Topology.allTopologyData[Topology.currentTabId].displayedSubTopologyId) {
				$(this).append('<i class="fa fa-check blue-ticks-for-alternative-paths" style="margin-left:5px;color: blue;"></i>');
				that.alternativePathShownFlag = $(this).attr('index');
			} else {
				that.alternativePathShownFlag = null;
			}
			that.appRef.tick();
			that.showTopologyComponent.topoInit();
		});

		this.alternativePathPopoverDataReadyFlag = true;
	}

	togglePhysicalMapping() {
		if (!Topology.allTopologyData[Topology.currentTabId].isMappedVersionShown) { //if mapped version is not shown
			this.renderGetSubTopologyById(Topology.allTopologyData[Topology.currentTabId].id);
		} else if (Topology.allTopologyData[Topology.currentTabId].isMappedVersionShown) {
			Topology.allTopologyData[Topology.currentTabId].isMappedVersionShown = false;
			this.getTopology(Topology.allTopologyData[Topology.currentTabId].type, Topology.allTopologyData[Topology.currentTabId].id, topologyGetType.REFRESH);
		}
	}

	flattenSubTopology(res: SubTopologyResponse, shouldSelectDefaultSelected = true, id?) {
		let selectedSubTopologyData: SubTopologyDTO;
		if (shouldSelectDefaultSelected) {
			selectedSubTopologyData = res.data.subTopologyList.find((v) => {
				return v.id == res.data.selectedSubTopologyId;
			});
		} else {
			selectedSubTopologyData = res.data.subTopologyList.find((v) => {
				return v.id == id;
			});
		}

		let mdata = this.topologyService.convert(selectedSubTopologyData);
		let linkL = mdata.links.length;

		let flattenedPhysicalLinks = this.topologyService.flattenSubPhysicalLinks(selectedSubTopologyData.subLinks);

		for (let j = 0; j < linkL; ++j) {
			let currentPLink = mdata.links[j];
			for (let i = 0; i < flattenedPhysicalLinks.length; i++) {
				let currentVLink = flattenedPhysicalLinks[i];
				if ((currentPLink.srcPort.id == currentVLink.srcPort.id && currentPLink.srcPort.number == currentVLink.srcPort.number
					&& currentPLink.destPort.id == currentVLink.destPort.id && currentPLink.destPort.number == currentVLink.destPort.number)
					|| (currentPLink.srcPort.id == currentVLink.destPort.id && currentPLink.srcPort.number == currentVLink.destPort.number
					&& currentPLink.destPort.id == currentVLink.srcPort.id && currentPLink.destPort.number == currentVLink.srcPort.number)
				) {
					currentPLink['isMvtnLink'] = true;
					break;
				}
			}

		}

		for (let i = 0; i < selectedSubTopologyData.subLinks.length; i++) {
			// let sourceOfHost = this.documentConverter.getNodeById(selectedSubTopologyData.subLinks[i].srcPort.id, mdata.nodes);
			// let targetHost = this.documentConverter.getNodeById(selectedSubTopologyData.subLinks[i].destPort.id, mdata.nodes);
            let sourceOfHost = this.documentConverter.getNodeById(selectedSubTopologyData.subLinks[i].srcPort.id, mdata.nodeMap);
            let targetHost = this.documentConverter.getNodeById(selectedSubTopologyData.subLinks[i].destPort.id, mdata.nodeMap);
			let hostLink = {
				linktype: "hostlink",
				source: sourceOfHost,
				target: targetHost,
				topologyId: "",
				srcPort: sourceOfHost as any,
				destPort: targetHost as any,
				securityLevel: 1,
				status: LINKSTATUS.LIVE,
				version: 1,
				revision: 1,
				isMvtnLink: true,
				isMvtnLinkUsed: true,
				timestamp: new Date(),
				id: ""
			};
			hostLink = new tplLink(hostLink);
			mdata.links.push(hostLink);
		}

		mdata.links.forEach((v, i) => {
			if (v.isMvtnLink !== true) {
				v.opacity = 0.2;
			}
		});

		$.each(mdata.nodes, (i, v) => {
			if (v.isMvtnUsed != true) {
				v.opacity = 0.2;
			} else if (v.isMvtnSwitch) {
				v.colorCode = "#ffdb4d";
			}
		});

		return mdata;
	}

	getSubTopology(id) {
		let request: TopologyRequest = <TopologyRequest>this.baseServices.apiHelper.genRequest({
			options: <TopologyOptions>this.baseServices.apiHelper.genDTO({
				id: id,
				type: (Topology.allTopologyData[Topology.currentTabId].type === TOPOLOGYTYPE.VIRTUAL_REQUEST) ? TOPOLOGYTYPE.VIRTUAL_REQUEST : TOPOLOGYTYPE.VIRTUAL
			})
		});

		if (Topology.allTopologyData[Topology.currentTabId].type === TOPOLOGYTYPE.VIRTUAL_REQUEST) {
			return this.subTopologyApi
				.mvtnRequestGetSubPOST(request);
		} else {
			return this.subTopologyApi
				.virtualGetSubPOST(request);
		}
	}

	showTopologyList(topologyType: TOPOLOGYTYPE) {
		this.logger.debug("showTopologyList", topologyType);
		this.sharedService.showModal(VtnListPopup, {
			topologyType: topologyType
		}, (result) => {
			if (result.isSuccess) {
				if (result.data === "new") {
					this.topologyCreationPopup(topologyType);
				} else {
					this.logger.debug("Item selected", result.data);
					let topologyInfo = <TopologyInfoDTO> result.data;
					this.showTopology(topologyInfo);
				}
			}
		});

	}

	showTopology(topologyInfo: TopologyInfoDTO) {
		let tabData: TopologyTabData = {
			id: topologyInfo.id,
			topoType: topologyInfo.type,
			tabRank: ++Topology.tabRank,
			tabType: CREATESHOWENUM.NONE
		}; //dummy, only need id to check if tab is unique
		setTimeout(() => {
			if (this.topologyService.isTabUnique(tabData)) {
				this.getTopology(topologyInfo.type, topologyInfo.id || topologyInfo.name); //topologyInfo.if olmalı
			} else {
				this.getTopology(topologyInfo.type, topologyInfo.id || topologyInfo.name, topologyGetType.REFRESH);
			}
		}, 500);
	}

	editTopology(topologyInfo: TopologyInfoDTO) {
		this.logger.info('will edit topology:' + topologyInfo.name);

		let request = this.baseServices.apiHelper.genRequest(<TopologyRequest>{
			options: this.baseServices.apiHelper.genDTO({
				id: topologyInfo.id,
				type: topologyInfo.type == TOPOLOGYTYPE.VIRTUAL_REQUEST ? TOPOLOGYTYPE.VIRTUAL_REQUEST : TOPOLOGYTYPE.VIRTUAL, //type'ı boş yolluyor muyuz bilmiyorum o yüzden virtualı else'e koydum.
			})
		});

		let executeCallback = (res) => {
			if (this.baseServices.uiHelper.processResponse(res)) {
				this.showTopologyComponent.topologyCreateModeFlag = true;
				let topoType = this.p('phy_topo:manage') ? CREATESHOWENUM.EDIT : CREATESHOWENUM.SHOW; //double check
				this.newTopologyArrival(res.data, topologyGetType.NEW, topoType);
			}
		};

		if (topologyInfo.type == TOPOLOGYTYPE.VIRTUAL_REQUEST) {
			this.mvtnReqApi.mvtnRequestGetPOST(<TopologyRequest>request)
				.subscribe(
					(res) => {
						executeCallback(res);
					},
					(error: any) => {
						this.baseServices.uiHelper.processResponse(error._body); //JSON parsing is handled in the function now
					}
				);
		} else {
			this.topologyApi.topologyGetPOST(<TopologyRequest>request)
				.subscribe(
					(res) => {
						executeCallback(res);
					},
					(error: any) => {
						this.baseServices.uiHelper.processResponse(error._body); //JSON parsing is handled in the function now
					}
				);
		}
	}

	topoFullScreen() {
		this.showTopologyComponent.resizeFullScreen();
	}

	processRouteParams() {
		let action = this.route.queryParams && this.route.queryParams['value'] ? this.route.queryParams['value']['action'] : null;
		if (this.documentConverter.isNotNullOrUndefinedOrEmptyString(action)) {
			switch (action) {
				case UI_TOPOLOGY_ACTION.NEW_VIRTUAL_TOPOLOGY:
					this.topologyCreationPopup(TOPOLOGYTYPE.VIRTUAL);
					return;
				case UI_TOPOLOGY_ACTION.NEW_VIRTUAL_TOPOLOGY_REQUEST:
					this.topologyCreationPopup(TOPOLOGYTYPE.VIRTUAL_REQUEST);
					return;
				case UI_TOPOLOGY_ACTION.EDIT_TOPOLOGY: {
					let topologyInfo = <TopologyInfoDTO> JSON.parse(this.route.queryParams['value']['data']);
					this.editTopology(topologyInfo);
					return;
				}
				case UI_TOPOLOGY_ACTION.VIEW_TOPOLOGY: {
					let topologyInfo = <TopologyInfoDTO> JSON.parse(this.route.queryParams['value']['data']);
					this.showTopology(topologyInfo);
					return;
				}
				case UI_TOPOLOGY_ACTION.VIEW_PHYSICAL_TOPOLOGY: {
					// if (this.p('phy_topo:view')) {
					//     this.getTopology(TOPOLOGYTYPE.PHYSICAL);
					//     return;
					// }
				}
				case UI_TOPOLOGY_ACTION.NEW_SUPER_TOPOLOGY: {
					setTimeout(() => {
						let type = this.route.queryParams['value']['domainId'] == "" ? TOPOLOGYTYPE.SUPER : TOPOLOGYTYPE.PHYSICAL;
						this.getTopology(type, "", topologyGetType.NEW);
					}, 500);
				}
			}
		}

		this.tabList = this.topologyService.getTopologyTablist();
		this.tabList = this.p('phy_topo:view') ? this.tabList : this.topologyService.filterPhysicalTopologyForSAY(this.tabList); // double check for !MAY
		if (this.tabList && this.tabList.length && this.tabList.length > 0) {
			this.restoreTabs();
		} else {
			if (this.p('phy_topo:view')) {
				this.getTopology(TOPOLOGYTYPE.PHYSICAL);
			} else if (this.p('vir_topo:list')) {
				this.baseServices.router.navigate(['/topology/notopology']);
			}
		}
		this.changeDetector.detectChanges();
	}

	restoreTabs() {
		this.tabList = this.topologyService.getTopologyTablist();
		if (this.tabList && this.tabList.length && this.tabList.length > 0) {
			if (!Topology.currentTabId && Topology.currentTabId != "") {//in case something goes wrong select the last tab
				Topology.currentTabId = this.tabList[this.tabList.length - 1].id;
			}

			this.tabClicked(this.tabList[this.tabList.length - 1], {target: $("#tab" + Topology.currentTabId)});
		}
	}

	toggleBandwidthUtilizationSensitivity() {//html
		this.bwSensitivityFlag = !this.bwSensitivityFlag;
		this.showTopologyComponent.toggleStringAndIcons(this.bwSensitivityFlag, this.bwSensitivityBtn, 'network_vis.topology.show_link_sensitivity', 'network_vis.topology.hide_link_sensitivity', this.bwSensitivityIcon, 'icon-eye', 'icon-empty');
	}

	alternativePathsApprove() {//html
		let mvtnSaveSubPostReq: GenericIdRequest = this.baseServices.apiHelper.genRequest({
			id: Topology.allTopologyData[Topology.currentTabId].displayedSubTopologyId
		});

		this.subTopologyApi.virtualSaveSubPOST(mvtnSaveSubPostReq).toPromise().then((res) => {
			if (this.baseServices.uiHelper.processResponse(res)) {
				this.selectedTopologyData.selectedSubTopologyId = res.data.selectedSubTopologyId;
				this.selectedTopologyData.subTopologyDTO.selectedSubTopologyId = res.data.selectedSubTopologyId;
				Topology.allTopologyData[Topology.currentTabId].selectedSubTopologyId = res.data.selectedSubTopologyId;
				Topology.allTopologyData[Topology.currentTabId].subTopologyDTO.selectedSubTopologyId = res.data.selectedSubTopologyId;
				this.alternativePathShownFlag = null;
				this.bindAlternativePathsPopover();
				this.baseServices.uiHelper.notify(this.t('messages.alternative_path_save_success'), DIALOG_TYPES.INFO);
			} else {
				this.baseServices.uiHelper.notify(this.t('messages.alternative_path_save_error'), DIALOG_TYPES.ERROR);
			}
		});
	}

	virtualTopologyEditInit() {
		this.selectedTopologyData.tabType = CREATESHOWENUM.EDIT;
		this.changeDetector.detectChanges(); //tick triggers changedetection in the whole tree. detectChanges only does it in current and sub components
		this.baseServices.uiHelper.populateTooltips();
	}

	enableLldpDiscovery() {
		let req = this.baseServices.apiHelper.genRequest({});
		this.topologyApi.topologyEnableDiscoveryPOST(req).toPromise()
			.then((res) => {
				if (this.baseServices.uiHelper.processResponse(res)) {
					this.selectedTopologyData.isLldpDisabled = this.selectedTopologyData.isLldpDisabled ? !this.selectedTopologyData.isLldpDisabled : false;
					this.processRouteParams();
				} else {
					this.baseServices.uiHelper.notify(this.t('messages.fetch_domain_fail'), DIALOG_TYPES.ERROR);
				}
			});
	}

	getSuperTopology() {
		this.getTopology(TOPOLOGYTYPE.SUPER, "");
	}

	checkForClustering() { // if selected topology has % 100 == 0 elements, a new clustering calculation should be made.
		if (this.selectedTopologyData && this.selectedTopologyData.data && this.selectedTopologyData.data.nodes && (this.selectedTopologyData.data.nodes.length % 100 == 0)) {
			let clusteredData = this.showTopologyComponent.topologyClusterService.clusterIt(this.showTopologyComponent.topologyData, {});
			this.showTopologyComponent.render(clusteredData, renderType.FULL); //this.showTopologyComponent.clusterTopologyData
		}
	}

}
