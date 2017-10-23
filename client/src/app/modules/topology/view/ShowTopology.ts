/**
 * Created by ekinca on 31.05.2016.
 */
import {
    Component,
    OnInit,
    OnDestroy,
    OnChanges,
    AfterViewInit,
    ElementRef,
    Input,
    Output,
    EventEmitter,
    ViewChild,
    ChangeDetectorRef,
    ApplicationRef, NgZone
} from "@angular/core";
import {BasePage} from "../../../commons/BasePage";
import {PageServices} from "../../PageServices";
import {DocumentConverter} from "../../DocumentConverter";
import {D3attributes} from "../D3attributes";
import {LinkDTO} from "../../../swagger/LinkDTO";
import {DIALOG_TYPES, UIHelper, BROWSERTYPE} from "../../UIHelper";
import {renderType, CREATESHOWENUM, popupType, pathType} from "./TopologyPage";
import {topoConfig, TopologyData} from "../topology.config";
import {AddressInfo} from "../../../swagger/AddressInfo";
import {HOSTTYPE} from "../../../swagger/HOSTTYPE";
import {TOPOLOGYTYPE} from "../../../swagger/TOPOLOGYTYPE";
import {SwitchFlowsPopup} from "../switch/SwitchFlowsPopup/SwitchFlowsPopup";
import {SharedService} from "../../SharedService";
import {PathRequest} from "../../../swagger/PathRequest";
import {PathDTO} from "../../../swagger/PathDTO";
import {PathListResponse} from "../../../swagger/PathListResponse";
import {PathsApi} from "../../../swagger/PathsApi";
import {AddEditLinkPopup} from "../pop-ups/AddEditLinkPopup";
import {MvtnApi} from "../../../swagger/MvtnApi";
import {TOPOLOGYSTATUS} from "../../../swagger/TOPOLOGYSTATUS";
import {SecurityToken} from "../../../swagger/SecurityToken";
import {SWITCHSTATUS} from "../../../swagger/SWITCHSTATUS";
import {LINKSTATUS} from "../../../swagger/LINKSTATUS";
import {GenericDeleteRequest} from "../../../swagger/GenericDeleteRequest";
import {DeleteOptions} from "../../../swagger/DeleteOptions";
import {TopologyApi} from "../../../swagger/TopologyApi";
import {RETURNSTATUS} from "../../../swagger/RETURNSTATUS";
import {UI_SECURITY_LEVELS} from "../../../commons/enums/UI_SECURITY_LEVELS";
import {DEVICETYPE} from "../../../swagger/DEVICETYPE";
import {LinkEditPopup} from "../pop-ups/LinkEditPopup";
import {TopologyControllersWidget} from "../widgets/TopologyControllersWidget";
import {InfoTooltipWidget, tooltipMode} from "../widgets/InfoTooltipWidget";
import {FooterTooltipWidget} from "../widgets/FooterTooltipWidget";
import {SwitchPortStatsPopup} from "../switch/SwitchPortStatsPopup/SwitchPortStatsPopup";
import {MvtnDTO} from "../../../swagger/MvtnDTO";
import {MvtnRequest} from "../../../swagger/MvtnRequest";
import {TopologyDTO} from "../../../swagger/TopologyDTO";
import {MVTNSTATUS} from "../../../swagger/MVTNSTATUS";
import {TopologyInfoDTO} from "../../../swagger/TopologyInfoDTO";
import {MvtnController} from "../../mvtn/MvtnController";
import {SwitchDTODef, SwitchDTO} from "../../../swagger/SwitchDTO";
import {SwitchRequest} from "../../../swagger/SwitchRequest";
import {LocationInfo} from "../../../swagger/LocationInfo";
import {NETWORKDEVICETYPE} from "../../../swagger/NETWORKDEVICETYPE";
import {NetworkDeviceDTO} from "../../../swagger/NetworkDeviceDTO";
import {NetworkDeviceApi} from "../../../swagger/NetworkDeviceApi";
import {PreliminaryPathPopup} from "../../policies/PreliminaryPath/PreliminaryPathPopup";
import {MvtnRequestApi} from "../../../swagger/MvtnRequestApi";
import {MvtnCreateRequestResponse} from "../../../swagger/MvtnCreateRequestResponse";
import {MvtnCreateRequest} from "../../../swagger/MvtnCreateRequest";
import {MvtnRequestDTO} from "../../../swagger/MvtnRequestDTO";
import {MVTNREQUESTSTATUS} from "../../../swagger/MVTNREQUESTSTATUS";
import {ProactivePathPolicyApi} from "../../../swagger/ProactivePathPolicyApi";
import {NETWORKDEVICESTATUS} from "../../../swagger/NETWORKDEVICESTATUS";
import {HostDTO} from "../../../swagger/HostDTO";
import {HOSTSTATUS} from "../../../swagger/HOSTSTATUS";
import {ProactivePathPolicyResponse} from "../../../swagger/ProactivePathPolicyResponse";
import {NacManager} from "../../nac/NacManager";
import {NACSTATUS} from "../../../swagger/NACSTATUS";
import {AccessPointConversionPromptPopUp} from "../widgets/AccessPointConversionPromptPopUp";
import {PPPSTATUS} from "../../../swagger/PPPSTATUS";
import {NodeEditorComponent} from "../widgets/NodeEditorComponent";
import {MVTNTYPE} from "../../../swagger/MVTNTYPE";
import {LinkRequest} from "../../../swagger/LinkRequest";
import BaseEvent = d3.BaseEvent;
import {TopologyService} from "../TopologyService";
import {TopologyClusterService} from "../TopologyClusterService";
import {CONNECTIONTYPE} from "../../../swagger/CONNECTIONTYPE";
import {DomainDTO} from "../../../swagger/DomainDTO";
import {SUPERTOPOLOGYTYPE} from "../../../swagger/SUPERTOPOLOGYTYPE";
import {tplCluster} from "../NetworkElementDefinitions/tplCluster";
import {tplDomain} from "../NetworkElementDefinitions/tplDomain";
import {tplSwitch} from "../NetworkElementDefinitions/tplSwitch";
import {tplLink} from "../NetworkElementDefinitions/tplLink";
import {tplHost} from "../NetworkElementDefinitions/tplHost";
import {tplNetworkDevice} from "../NetworkElementDefinitions/tplNetworkDevice";
import {VNFConversionPopup} from "../pop-ups/VNFConversionPopup";
import {tplBgpRouter} from "../NetworkElementDefinitions/tplBgpRouter";
import {NetworkDeviceEditPopup} from "../../settings/NetworkDevice/NetworkDeviceEditPopup";
import {Action} from "../../../commons/Action";
import {NacDeviceApi} from "../../../swagger/NacDeviceApi";
import {DeviceQuarantineRequest} from "../../../swagger/DeviceQuarantineRequest";
import {SwitchGraphPopup} from "../../statistics/SwitchGraph/SwitchGraphPopup";
import {LinkGraphPopup} from "../../statistics/LinkGraph/LinkGraphPopup";
import {UserGraphPopup} from "../../statistics/UserGraph/UserGraphPopup";
import {LocalSwitchDTO} from "../../../commons/LocalClasses/LocalSwitchDTO";
import {SwitchEditPopup} from "../switch/SwitchEditPopup/SwitchEditPopup";

@Component({
	moduleId: module.id,
	selector: 'show-topology',
	templateUrl: './showtopology.html',
	providers: [PathsApi, MvtnController, NetworkDeviceApi, MvtnRequestApi]
})
export class ShowTopology extends BasePage implements OnInit, OnDestroy, OnChanges, AfterViewInit {
	@Input() topologyData: TopologyData;

	clusterTopologyData: any = {};
	expand = {};

	TOPOLOGYTYPE = TOPOLOGYTYPE;
	CREATESHOWENUM = CREATESHOWENUM;
	@Output() onTopologyTrigger = new EventEmitter<any>();

	@Output() refreshTopology = new EventEmitter<any>();

	refreshSelectedTopology() {
		this.refreshTopology.emit();
	}

	@Output() emitToTopologyEditPopup = new EventEmitter<any>();

	emitTopologyEditPopup() {
		this.emitToTopologyEditPopup.emit();
	}

	@ViewChild("controllerTabsWidget") controllerTabsWidget: TopologyControllersWidget;
	controllerTabData;

	@ViewChild("infoTooltipWidget") infoTooltipWidget: InfoTooltipWidget;
	infoTooltipData;

	@ViewChild("footerTooltipWidget") footerTooltipWidget: FooterTooltipWidget;
	footerTooltipData;

	@ViewChild("nodeEditorComponent") nodeEditorComponent: NodeEditorComponent;
	selectedElementToEdit: any = null;

	width: any;
	height: any;
	aspect: any;

	//svg
	svg: any;
	g;
	hullg: any;
	hull: any;
	force: any;
	svgLink: any;
	svgNode: any;
	svgChildren: any;
	tooltipDiv: any;
	footer = {};

	basisLineGen: any;
	closedLinkGen: any;

	//Path/selections
	selectedSourceId: any = "";
	selectedTargetId: any = "";
	selectedCounter: number;

	//zoom
	zoom: any;
	translateCoefficient: any = [0, 0];
	static _initialZoomTranslate: any = {'__default': [300, 3]};
	static _initialZoomScale: any = {'__default': 0.4};

	get initialZoomTranslate() {
		if (this.topologyData.tabType == CREATESHOWENUM.CREATE) {
			return [0, 0]
		} else {
			return ShowTopology._initialZoomTranslate[(this.topologyData && this.topologyData.id) ? this.topologyData.id : '__default'] || ShowTopology._initialZoomTranslate['__default'];
		}
	}

	set initialZoomTranslate(value) {
		ShowTopology._initialZoomTranslate[(this.topologyData && this.topologyData.id) ? this.topologyData.id : '__default'] = value;
	}

	get initialZoomScale() {
		return ShowTopology._initialZoomScale[(this.topologyData && this.topologyData.id) ? this.topologyData.id : '__default'] || ShowTopology._initialZoomScale['__default'];
	}

	set initialZoomScale(value) {
		ShowTopology._initialZoomScale[(this.topologyData && this.topologyData.id) ? this.topologyData.id : '__default'] = value;
	}

	//timeouts
	topologyEventsTimeout;

	//flags
	footerFlag: string = localStorage.getItem("footerFlag") || "true";
	detailInfoFlag: string = localStorage.getItem("detailInfoFlag") || "true";
	controllersTabFlag: string = localStorage.getItem("controllersTabFlag") || "true";
	portShowHideFlag: string = localStorage.getItem("portShowHideFlag") || "true";
	trMapFlag: string = localStorage.getItem("trMapFlag") || "true";
	showHostsFlag: string = localStorage.getItem("showHostsFlag") || "true";
	showVGatewaysFlag: string = localStorage.getItem("showVGatewaysFlag") || "true";
	showNetworkDevicesFlag: string = localStorage.getItem("showNetworkDevicesFlag") || "false";
	graphsVisible: string = localStorage.getItem("graphsVisible") || "false";

	pathSelectionFlag: boolean = false;
	pathSelectionType: pathType = pathType.PROACTIVE;
	createShowFlag: CREATESHOWENUM = CREATESHOWENUM.NONE;
	pathExistsDTOFlag: any = {sourceId: "", targetId: ""};
	pathRedrawFrequencyTimeoutId;
	isFirstSaturation: boolean = true;
	topologyCreateModeFlag: boolean = false;
	isFullScreenFlag: boolean = false;
	selectElementFlag: boolean = false;

	navHeight;
	toggleDetailInfoBtn;
	toggleFooterInfoBtn;
	toggleControllersTabBtn;
	detailBtnIcon;
	footerBtnIcon;
	hostsToggleIcon;
	networkDevicesToggleIcon
	vGatewayToggleIcon;
	controllerTabIcon;
	toggleHostsBtn;
	toggleNetworkDevicesBtn;
	toggleVgatewaysBtn;
	togglePortsBtn;
	togglePortsIcon;
	toggleTrMapFlagBtn;
	graphsIcon;
	toggleGraphsBtn
	trMapIcon;
	$trMap;

	cursor = null;
	linkAddFlag;
	selectedSource = {};
	selectedTarget = {};
	excludedDevicesForMvtn = [];

	aspcDisplay = false;
	aspcLeft;
	aspcTop;
	alarmStatus = [1, 2, 3, 4];

	constructor(public nacManager: NacManager,
	            public topologyService: TopologyService,
	            public topologyClusterService: TopologyClusterService,
	            public apr: ApplicationRef,
	            public mvtnReqApi: MvtnRequestApi,
	            public mvtnController: MvtnController,
	            public nwdApi: NetworkDeviceApi,
	            baseServices: PageServices,
	            public elementRef: ElementRef,
	            public changeDetector: ChangeDetectorRef,
	            private proactivePathsApi: ProactivePathPolicyApi,
	            private pathsApi: PathsApi,
	            private topologyApi: TopologyApi,
	            private documentConverter: DocumentConverter,
	            private d3attributes: D3attributes,
	            private sharedService: SharedService,
	            private mvtnApi: MvtnApi,
	            private uiHelper: UIHelper,
	            private nacDeviceApi: NacDeviceApi,
                private zone: NgZone) {
		super(baseServices, elementRef);
		this.setI18NKey('network_vis.topology');
	}

	ngOnChanges(changes) {
		console.log("changes", changes);
		if (this.documentConverter.isNotNullOrUndefinedOrEmptyString(this.cursor)) {
			this.cursorReset();
		}
		if (this.topologyData) {
            this.zone.runOutsideAngular(() => {
                setTimeout(this.topoInit(), 200);
            });
		}
	}

	ngOnInit() {
		this.initSvgSize();
	}

	initSvgSize() {
		this.width = $(window).innerWidth() - 70;
		this.height = $(window).innerHeight() - $('.navbar').innerHeight() - topoConfig.heightCoefficient;
		this.aspect = this.width / this.height;
	}

	cursorReset() {
		this.cursor = null;
		$('.cursor').remove();
		this.svg.on("mousedown", null);
	}

	updateControllersWidget(data) {
		this.controllerTabsWidget.updateControllersWidget(data);
	}

	topoInit() { //Renders the topology with current selected data so in order for this to work properly, set the topologyData field beforehand and then call this method
		this.setJQueryFields();
		let that = this;

		//zoom init
		this.zoom = d3.behavior.zoom()
			.translate(this.initialZoomTranslate)
			.scale(this.initialZoomScale)
			.scaleExtent([topoConfig.topologyMinZoomScale, topoConfig.topologyMaxZoomScale])
			.on("zoom", this.redraw.bind(this));

		if (this.isFullScreenFlag && this.height + topoConfig.heightCoefficient < $(window).innerHeight() - $('.navbar').innerHeight()) {
			this.height = this.height + topoConfig.heightCoefficient;
		} else if (this.isFullScreenFlag && this.height + topoConfig.heightCoefficient >= $(window).innerHeight() - $('.navbar').innerHeight()) {

		} else {
			this.initSvgSize();
		}

		this.svg = d3.select("#show-topo-svg")
			.on("mousemove", function () {
				if (that.cursor)
					that.cursor.attr("transform", "translate(" + d3.mouse(this) + ")");
			})
			/*.attr("preserveAspectRatio", "xMinYMin meet")
			 .attr("viewBox", ()=>{
			 return "0 0 " + this.width + " " + this.height;
			 })*/
			.attr("width", this.width)
			.attr("height", this.height)
			.call(this.zoom).on("dblclick.zoom", null);

		//this.spinner.start(".tab-content");

		if (!$("#mainG").length) {
			this.g = this.svg.append("g").attr("id", "mainG");
		}

		this.svgChildren = $('#show-topo-svg').children();

		d3.select("#mainG")
			.attr("transform",
				"translate(" + this.initialZoomTranslate + ")" +
				"scale(" + this.initialZoomScale + ")"
			);

		//force properties
		this.force = d3.layout.force()
			.charge(-8000)
			.gravity(0.5) //less gravity means more broad topology
			.friction(0.7) //less friction means it will soothe slower
			.linkDistance((d: any) => {
				if ((d.source.type === "Switch") && (this.documentConverter.isHost(d.target.type))) {
					return 60;//80;
				} else {
					if (d.isMvtnLinkUsed && d.physicalLinks && d.physicalLinks.length > 0) {
						return d.physicalLinks.length * 150;
					} else {
						return 120;//120;
					}
				}
			})
			.size([this.width, this.height])
			.on("tick", this.tick.bind(this))
			.on('end', () => {
				console.log("end");
				//this.svgNode.each((d)=> {
				//    if (!this.documentConverter.isHost(d.type)) {
				//        d.fixed = true;
				//    }
				//});
			});
		//.on("start", this.starti.bind(this));


		this.basisLineGen = d3.svg.line()
			.interpolate("basis")//to change, def: basis, can be bundle
			.x(function (d: any) {
				return d.x;
			})
			.y(function (d: any) {
				return d.y;
			});

		this.closedLinkGen = d3.svg.line()
			.x(function (d: any) {
				return d.x;
			})
			.y(function (d: any) {
				return d.y;
			})
			.interpolate("basis-closed");

		d3.select("body").append("div").attr("class", "stats-tooltip").style("opacity", 0);

		this.tooltipDiv = $('.topotooltip');

		d3.select(window).on("resize", this.resizeF11.bind(this));

		d3.selectAll('.mini-zoom').on('click', this.zoomClick.bind(this));

		if (this.topologyData.data.nodes.length >= 100) {
            let clusteredData = this.topologyClusterService.clusterIt(this.topologyData, this.clusterTopologyData);
            if(clusteredData.nodes.length <= 0) this.render(this.topologyData.data, renderType.FULL);
			else this.render(clusteredData, renderType.FULL);
		} else {
			this.render(this.topologyData.data, renderType.FULL);
		}

		if (this.topologyCreateModeFlag) {
			this.controllerTabData = null;
			if ($('circle').length === 0) {
				this.baseServices.uiHelper.notify($.t("network_vis.topology.add_edit_switch_popup.add_a_switch"), DIALOG_TYPES.INFO);
			}
		} else {
			if (this.topologyData.data.controllers && this.topologyData.data.controllers.length > 0) {
				this.controllerTabData = this.topologyData.data.controllers;
			} else {
				this.controllerTabData = null;
				console.log("no controller data");
			}
		}
	}

	setJQueryFields() {
		this.toggleDetailInfoBtn = $('#detail-info-toggle-button');
		this.toggleFooterInfoBtn = $('#footer-info-toggle-button');
		this.toggleHostsBtn = $("#hosts-toggle-button");
		this.toggleNetworkDevicesBtn = $('#networkdevices-toggle-button');
		this.toggleVgatewaysBtn = $("#vgateway-toggle-button");
		this.toggleControllersTabBtn = $('#controllers-tab-toggle-button');
		this.togglePortsBtn = $('#ports-toggle-button');
		this.toggleTrMapFlagBtn = $('#map-toggle-button');
		this.toggleGraphsBtn = $('#graphs-toggle-button');

		this.detailBtnIcon = $('#detail-info-toggle-icon');
		this.footerBtnIcon = $('#footer-info-toggle-icon');
		this.hostsToggleIcon = $('#hosts-toggle-icon');
		this.networkDevicesToggleIcon = $('#networkdevices-toggle-icon');
		this.vGatewayToggleIcon = $('#vgateway-toggle-icon');
		this.controllerTabIcon = $('#controllers-tab-toggle-icon');
		this.togglePortsIcon = $('#ports-toggle-icon');
		this.trMapIcon = $('#map-toggle-icon');
		this.graphsIcon = $('#graphs-toggle-icon');

		this.toggleStringAndIcons(this.footerFlag, this.toggleFooterInfoBtn, 'network_vis.topology.show_footer', 'network_vis.topology.hide_footer', this.footerBtnIcon, 'icon-eye', 'icon-empty');
		this.toggleStringAndIcons(this.detailInfoFlag, this.toggleDetailInfoBtn, 'network_vis.topology.show_detail_info', 'network_vis.topology.hide_detail_info', this.detailBtnIcon, 'icon-eye', 'icon-empty');
		this.toggleStringAndIcons(this.controllersTabFlag, this.toggleControllersTabBtn, 'network_vis.topology.show_controllers_tab', 'network_vis.topology.hide_controllers_tab', this.controllerTabIcon, 'icon-eye', 'icon-empty');
		this.toggleStringAndIcons(this.portShowHideFlag, this.togglePortsBtn, 'network_vis.topology.show_ports', 'network_vis.topology.hide_ports', this.togglePortsIcon, 'icon-eye', 'icon-empty');
		this.toggleStringAndIcons(this.trMapFlag, this.toggleTrMapFlagBtn, 'network_vis.topology.show_trmap', 'network_vis.topology.hide_trmap', this.trMapIcon, 'icon-eye', 'icon-empty');
		this.toggleStringAndIcons(this.showNetworkDevicesFlag, this.toggleNetworkDevicesBtn, 'network_vis.topology.show_networkdevices', 'network_vis.topology.hide_networkdevices', this.networkDevicesToggleIcon, 'icon-eye', 'icon-empty');
		this.toggleStringAndIcons(this.showVGatewaysFlag, this.toggleVgatewaysBtn, 'network_vis.topology.show_vgateway', 'network_vis.topology.hide_vgateway', this.vGatewayToggleIcon, 'icon-eye', 'icon-empty');
		this.toggleStringAndIcons(this.showHostsFlag, this.toggleHostsBtn, 'network_vis.topology.show_hosts', 'network_vis.topology.hide_hosts', this.hostsToggleIcon, 'icon-eye', 'icon-empty');
		this.toggleStringAndIcons(this.graphsVisible, this.toggleGraphsBtn, 'network_vis.topology.hide_graphs', 'network_vis.topology.show_graphs', this.graphsIcon, 'icon-empty', 'icon-eye');
	}

	pathReCalculationWhenPathExists(data) {
		if (this.isPathShown()) {
			let src = this.pathExistsDTOFlag.sourceId;
			let dst = this.pathExistsDTOFlag.targetId;
			this.resetPath();
			if (this.documentConverter.isNotNullOrUndefinedOrEmptyString(src) && this.documentConverter.isNotNullOrUndefinedOrEmptyString(dst)) {
				this.selectedSourceId = src;
				this.selectedTargetId = dst;

				this.pathExistsDTOFlag.sourceId = src;
				this.pathExistsDTOFlag.targetId = dst;
			}
			this.d3attributes.findAndUpdateHostsAfterReset(src, dst, this.topologyData);//TODO Needs to find them in whole topology data right now just updates first(physical)
			this.createShowFlag = CREATESHOWENUM.SHOW;
			this.drawPath();
		}
	}

	ngViewAfterInit() {
	}

	onRenderTrigger(data?) {
		return this.render(this.topologyData.data, renderType.UPDATE);
	}

	/** Mini render on update events that are observable in the topology (like color, name change) This method exists because back-end does NOT send all the data for all elements.
	 Hence if you replace the node with event data and run render, that node will lose a lot of properties. ekinca*/
	updateNode(eventData) {
		let nodes = this.svg.selectAll('g.node').filter((node) => {
			if (node.id == eventData.id) {
				node.status = eventData.status;
				node.stats = eventData.stats;
				node.flows = eventData.flows;
				if (this.documentConverter.isNotNullOrUndefinedOrEmptyString(eventData.utilization) && eventData.utilization != node.utilization) node.utilization = eventData.utilization;
				if (this.documentConverter.isHost(node.type)) {
					node.port = eventData.port;
				}
				return node;
			}
		});
		//TODO polygon
		//hosts/network devices are circles
		nodes.select("circle").transition().duration(250)
			.style("stroke", (d) => d.getStrokeColor())
			.style("fill", (d) => d.getFillColor());

		nodes.select("rect.switch-rect-element").transition().duration(250)
			.style("stroke", (d) => d.getStrokeColor())
			.style("fill", (d) => d.getFillColor());
		//utilization bar update transition
		nodes.select("rect.switch-utilization-bar").transition().duration(250).attr("width", (d) => d.switchUtilizationBarWidth);

		nodes.select("text.text2")
			.attr("dy", topoConfig.text2PositionIP)
			.attr("text-anchor", "middle")
			.text((d) => this.returnText2Text(d));

		nodes.select("text.text3") // ACCESS_POINT_UPDATED
			.attr('text-anchor', 'middle')
			.attr('dominant-baseline', 'central')
			.html((d) => d.getMainIcon());

        nodes.select("text.text4") //power-saver mode leaf on/off
            .attr("dx", (d)=> this.d3attributes.returnText4StatusIconXPosition(d))
            .attr("dy", (d)=> this.d3attributes.returnText4StatusIconYPosition(d))
            .text((d) => this.d3attributes.returnText4StatusIcon(d, this.topologyData.type));
	}

	updateSwitchPort(eventData) {
		this.svg.selectAll('g.node').filter((node) => {
			if (node.id == eventData.id) {
				node.portInfo = eventData.portInfo;
				return node;
			}
		});
	}

	updateLinkStats(eventData) {
		let renderFlag = false;
		let links = this.svg.selectAll('g.link').filter((link: tplLink) => {
			if (eventData && eventData.links && eventData.links.length > 0) {
				for (let i = 0; i < eventData.links.length; i++) {
					let updatedLink = eventData.links[i];
					if (this.documentConverter.isNotNullOrUndefinedOrEmptyString(updatedLink.srcPort) && this.documentConverter.isNotNullOrUndefinedOrEmptyString(link.srcPort)) {//if switch link
						if (updatedLink.srcPort.id == link.srcPort.id && updatedLink.destPort.id == link.destPort.id) {
							if (updatedLink.srcPort.stats) link.srcPort.stats = updatedLink.srcPort.stats;
							if (updatedLink.destPort.stats) link.destPort.stats = updatedLink.destPort.stats;
							if (updatedLink.status) link.status = updatedLink.status;
							if (updatedLink.bandwidthUtilization) link.bandwidthUtilization = updatedLink.bandwidthUtilization;
							return link;
						} else if (updatedLink.srcPort.id == link.destPort.id && updatedLink.destPort.id == link.srcPort.id) {
							if (link["reverse"]) {
								if (updatedLink.srcPort.stats) link["reverse"].srcPort.stats = updatedLink.srcPort.stats;
								if (updatedLink.destPort.stats) link["reverse"].destPort.stats = updatedLink.destPort.stats;
								if (updatedLink.status) link["reverse"].status = updatedLink.status;
								if (updatedLink.bandwidthUtilization) link["reverse"].bandwidthUtilization = updatedLink.bandwidthUtilization;
								return link;
							} else {
								console.log("reverse link couldn't be found");
							}
						}
					}
				}
			} else if (eventData.srcPort) {
				let updatedLink = eventData;
				if (this.documentConverter.isNotNullOrUndefinedOrEmptyString(updatedLink.srcPort) && this.documentConverter.isNotNullOrUndefinedOrEmptyString(link.srcPort)) {//if switch link
					if (updatedLink.srcPort.id == link.srcPort.id && updatedLink.destPort.id == link.destPort.id) {
						link.srcPort.stats = updatedLink.srcPort.stats;
						link.destPort.stats = updatedLink.destPort.stats;
						link.status = updatedLink.status;
						if(link.needsRender){
							renderFlag = true;
							link.needsRender = false;
						}
						link.bandwidthUtilization = updatedLink.bandwidthUtilization;
						return link;
					} else if (updatedLink.srcPort.id == link.destPort.id && updatedLink.destPort.id == link.srcPort.id) { // reverse
						if (link["reverse"]) {
							link["reverse"].destPort.stats = updatedLink.srcPort.stats;
							link["reverse"].srcPort.stats = updatedLink.destPort.stats;
							link["reverse"].status = updatedLink.status;
							link["reverse"].bandwidthUtilization = updatedLink.bandwidthUtilization;
							return link;
						}
					}
				}
			} else {
				console.log("NO LINKS TO UPDATE");
			}
		});

		links.select("stop.start").transition().attr("stop-color", (d) => {
			return d.getColorByBandwidth(d);
		});

		links.select("stop.end").transition().attr("stop-color", (d) => {
			return d.getColorByBandwidth(d["reverse"]);
		});

		return renderFlag;
	}

	linkEditMenu(d) {
		if (this.topologyCreateModeFlag || this.topologyData.tabType == CREATESHOWENUM.EDIT) {
			this.sharedService.showModal(AddEditLinkPopup, {mode: popupType.EDIT, linkData: d},
				(result) => {
					if (result.isSuccess) {
						d.constraints = result.data.constraints;
						d.securityLevel = result.data.securityLevel;
						if (d.reverse) {
							d["reverse"].constraints = result.data["reverse"].constraints;
							d["reverse"].securityLevel = result.data.securityLevel;
						}
						return this.render(this.topologyData.data, renderType.FULL, "STATS_UPDATED");
					}
				});
		}
	}

	// nodeEditMenu(d) {
	//     if (!( this.documentConverter.isHost(d.type) ) && (this.topologyCreateModeFlag || this.topologyData.tabType == CREATESHOWENUM.EDIT) && !this.topologyData.isMappedVersionShown) {
	//         this.sharedService.showModal(AddEditSwitchPopup, {mode: popupType.EDIT, switchData: d},
	//             (result) => {
	//                 if (result.isSuccess) {
	//                     this.topologyData = this.topologyService.checkSwitchChangeInLinkSourceTargets(d, result.data, this.topologyData);
	//                     d.name = result.data.name;
	//                     d.securityLevel = result.data.securityLevel;
	//                     d.portInfo.totalPorts = result.data.portInfo.totalPorts;
	//                     d.mvtnPortInfo = result.data.mvtnPortInfo;
	//                     d.deviceProfile = result.data.deviceProfile;
	//                     d.id = result.data.id;
	//                     return this.render(this.topologyData.data, renderType.UPDATE);
	//                 }
	//             });
	//     } else {
	//         //d3.select(this).classed("fixed", d.fixed = false);
	//     }
	// }

	// topologyElementIdGenerationForGradient(d) {
	//     let id = this.documentConverter.linkIdGenerator(d);
	//     return topoConfig.topologyViewPageUrlForGradient + id;
	// }

	textLinkGenerator(d: tplLink, fireFoxPrefix: boolean = false) {
		if (UIHelper.isBrowserType(BROWSERTYPE.FIREFOX)) {
			let prefix = fireFoxPrefix ? "topology/view" : "";
			return prefix + "#" + d.linkIdGenerator();
			// should be  return "topology/view#" + this.documentConverter.linkIdGenerator(d);
			// for version > 53
		} else {
			return "#" + d.linkIdGenerator();
		}
	}

	returnText2Text(d) {
		if (this.documentConverter.isHost(d.type) || this.documentConverter.isNetworkDevice(d.type)) {
			if (d.port && d.port.address && d.port.address.ipv4) {
				return d.port.address.ipv4;
			}
		} else if (d.nodetype == "switchnode") {
			if (this.documentConverter.isNotNullOrUndefinedOrEmptyString(d.name)) {
				return d.name;
			} else {
				return d.id;
			}
		} else if (this.documentConverter.isDomain(d.type)) {
			return d.name;
		} else if (this.documentConverter.isCloud(d.type)) {
			return d.id;
		}
	}

	returnText1(d) {
		if (this.documentConverter.isHost(d.type)) {
			if (d.userInfo && d.userInfo.username) {
				return d.userInfo.username;
			} else {
				return d.id;
			}
		}
	}

	portCondition(d) {
		return (d.source.nodetype === "switchnode" || this.documentConverter.isNetworkDevice(d.source.type)) && (d.target.nodetype === "switchnode" || this.documentConverter.isNetworkDevice(d.target.type))
	}

	render(data, renderingType: renderType, eventType = "ADD_REMOVE") {

		this.force.stop();

		if (renderingType === renderType.FULL) {
			this.svgClean();
		}

		this.force.nodes(data.nodes)
			.links(data.links);

		if (eventType !== "STATS_UPDATED" && !this.topologyCreateModeFlag) { //TODO add/remove events has a chance to not work when fixed createmode flag breaks node edits ?
			// $.each(data.nodes, (i, d)=> {
			//     d.fixed = false;
			// });
			this.force.start(); //removing this makes link colors black
		}//this makes source target indexes in links DTOs}

		this.svgLink = this.g.selectAll("g.link").data(data.links, (d) => {
			if (d.source) {
				if (d.source.id) {
					return d.source.id + "-" + d.target.id + "-" + d.srcPort.number + "-" + d.destPort.number;
				} else {
					return d.source + "-" + d.target;
				}
			} else {
				console.log("ERROR: SOURCE IS INVALID", d);
			}
		});

		//Things about links
		this.svgLink.select("path.path-link")
		//.style("stroke-dasharray", function (d:LinkDTO) {return 0;})
			.attr("id", (d: tplLink) => d.linkIdGenerator())
			.attr('linktype', (d: tplLink) => d.getLinkType())
			.style("stroke", (d: tplLink) => d.getStrokeColor())
			.style("stroke-dasharray", (d: tplLink) => d.getStrokeDashArray())
			.style("stroke-opacity", (d: tplLink) => d.getStrokeOpacity())
			.style("opacity", (d: tplLink) => d.getOpacity())
			.style("fill", (d: tplLink) => d.getFillColor())
			.style("stroke-width", (d: tplLink) => d.getLinkWidth());

		this.svgLink.select("lineargradient")
			.attr("id", (d: tplLink) => d.getTopologyElementIdGenerationForGradient());

		let that = this;

		let nthChild = (this.topologyData.type == TOPOLOGYTYPE.VIRTUAL || this.topologyData.type == TOPOLOGYTYPE.VIRTUAL_REQUEST) ? ":first-child" : ":nth-child(2)"; //TODO
		let linkEnter = this.svgLink.enter().insert("g", nthChild)
			.attr("class", "link")
			.attr('linktype', (d: tplLink) => d.getLinkType())
			.style('opacity', (d) => d.getOpacity());

		let defs = linkEnter.insert("defs");

		let linearGradient = defs.insert("linearGradient").attr("id", (d: tplLink) => d.getTopologyElementIdGenerationForGradient())
			.attr("spreadMethod", "pad");

		linearGradient.append("stop")
			.attr("class", "start")
			.attr("offset", "0%")
			.attr("stop-color", (d: tplLink) => d.getColorByBandwidth(d));
		//linearGradient.append("stop")
		//    .attr("offset", "50%")
		//    .attr("stop-color", (d)=>{
		//        return topoConfig.defaultSwitchLinkColor;
		//    });
		linearGradient.append("stop")
			.attr("class", "end")
			.attr("offset", "100%")
			.attr("stop-color", (d: tplLink) => d.getColorByBandwidth(d["reverse"]));

		linkEnter.insert("path").attr("class", "path-link")
			.attr("id", (d: tplLink) => d.linkIdGenerator())
			.attr('linktype', (d: tplLink) => d.getLinkType())
			.style("stroke", (d: tplLink) => d.getStrokeColor())
			.style("stroke-dasharray", (d: tplLink) => d.getStrokeDashArray())
			.style("stroke-opacity", (d: tplLink) => d.getStrokeOpacity())
			.style("opacity", (d: tplLink) => d.getOpacity())
			.style("fill", (d: tplLink) => d.getFillColor())
			.style("stroke-width", (d: tplLink) => d.getLinkWidth());

		let sourceText = linkEnter.insert("text")
			.attr("class", "port-source")
			.attr("font-size", (d) => {
				if (this.portCondition(d)) {
					return "14px";
				} else {
					return "12px";
				}
			})
			.attr("dy", "0em")
			.attr("text-anchor", "middle")
			.attr("stroke", (d) => {
				if (this.portCondition(d)) {
					return "#00008B";
				} else {
					return "#263C77";
				}
			});

		sourceText.insert("textPath").attr("class", "text-path")
			.attr("startOffset", (d) => this.d3attributes.textStartOffSet(d, "20%", "80%", "38%"))
			.attr("xlink:href", (d) => this.textLinkGenerator(d, true))
			.text((d) => {
				if (this.portCondition(d)) {
					if (d.destPort.number && this.portShowHideFlag === "true") {
						return d.srcPort.number + "⇐";
					}
				}
			});

		let targetText = linkEnter.insert("text")
			.attr("class", "port-target")
			.attr("font-size", (d) => {
				if (this.portCondition(d)) {
					return "14px";
				} else {
					return "12px";
				}
			})
			.attr("dy", "0em")
			.attr("text-anchor", "middle")
			.attr("stroke", (d) => {
				if (this.portCondition(d)) {
					return "#00008B";
				} else {
					return "#263C77";
				}
			});

		targetText.insert("textPath").attr("class", "text-path")
			.attr("startOffset", (d) => this.d3attributes.textStartOffSet(d, "80%", "20%", "11%"))
			.attr("xlink:href", (d) => this.textLinkGenerator(d, true))
			.text((d) => {
				if (this.portCondition(d)) {
					if (d.srcPort.number && this.portShowHideFlag === "true") {
						return "⇒" + d.destPort.number;
					}
				}
			});

		linkEnter
			.on("mouseover", that.mouseover.bind(that))
			.on("mousemove", that.mousemove.bind(that))
			.on("mouseout", that.mouseout.bind(that))
			.on("contextmenu", function (d, i) {
				let dataset = [{
					title: 'Edit Link',
					action: ""
				}];

				that.setContextMenu(dataset, d, i, this);
			})
			.on("click", function (d) {
				if (that.selectElementFlag) {
					that.resetSelectedElementState();
					that.selectedElementToEdit = d;
					d3.select(this).select("path").classed({"selected-path-link": true, "edit-selected-element": true});
				}
			});

		this.svgLink.exit().remove();

		if ((that.topologyData.type == TOPOLOGYTYPE.PHYSICAL || that.topologyData.type == TOPOLOGYTYPE.SUPER || that.topologyData.isMappedVersionShown) && $('.turkey-svg').length < 1) {
			this.g.insert("image", ":first-child").attr("class", "turkey-svg").attr("xlink:href", "../assets/img/tr_2.svg").attr("width", "3072px").attr("height", "1500px");
			this.$trMap = $('.turkey-svg');
			if (this.trMapFlag == "false") {
				this.$trMap.hide();
			}
		}

		//----------------------------LINKS END/HULL START---------------------------------------//
		//topology hull data
		d3.selectAll("g.hulls").remove();
		this.hullg = this.g.append("g").attr("class", "hulls");
		let hullfill = d3.scale.category20();
		this.hull = this.hullg.selectAll("path.hull")
			.data(this.topologyClusterService.convexHulls(data.nodes, this.topologyClusterService.getGroup));

		if (this.clusterTopologyData && this.clusterTopologyData.nodes && this.clusterTopologyData.nodes.length > 0) {
			let hullEnter = this.hull.enter().append("path")
				.attr("class", "hull")
				.attr("d", this.topologyClusterService.drawCluster)
				.style("fill", (d) => hullfill(d.group))
				.style("fill-opacity", 0.3)
				.on("click", (d) => {
					this.expand[d.group] = false;
					this.clusterTopologyData = this.topologyClusterService.network(this.topologyData.data, this.clusterTopologyData, this.topologyClusterService.getGroup, this.expand);

					return this.render(this.clusterTopologyData, renderType.UPDATE);
				});
		}

		this.hull.exit().remove();

		//----------------------------HULL END/NODES START---------------------------------------//
		this.svgNode = this.g.selectAll("g.node").data(data.nodes, (d, i) => d.id ? d.id : i);

		this.svgNode.select("circle")
			.attr("r", (d: tplNetworkDevice | tplHost) => d.radiusCalculator())
			.style("stroke", (d: tplNetworkDevice | tplHost) => d.getStrokeColor())
			.style("stroke-width", topoConfig.peripheryStrokeWidth)
			.style("opacity", (d: tplNetworkDevice | tplHost) => d.getOpacity())
			.style("fill", (d: tplNetworkDevice | tplHost) => d.getFillColor())
			.attr("x", (d) => d.x)
			.attr("y", (d) => d.y);

		this.svgNode.select("rect")
			.style("stroke", (d: tplSwitch) => d.stroke)
			.style("stroke-width", (d: tplSwitch) => d.strokeWidth)
			.style("opacity", (d: tplSwitch) => d.getOpacity())
			.style("fill", (d: tplSwitch) => d.getFillColor())
			.style("stroke-dasharray", (d: tplSwitch) => d.getStrokeDashArray())
			.attr("x", (d: tplSwitch) => d.relativeX)
			.attr("y", (d: tplSwitch) => d.relativeY);

		this.svgNode.select("polygon")
			.style("stroke-width", topoConfig.domainStrokeWidth)
			.style("stroke", (d) => d.stroke)
			.style("fill", (d) => d.fill); // **this.svgNode.select("text.cloud-element") update event for clouds, idk whether this is necessary or not

		this.svgNode
			.on("mouseover", that.mouseover.bind(that))
			.on("mousemove", that.mousemove.bind(that))
			.on("mouseout", that.mouseout.bind(that));

		this.svgNode.select("text.text1")
			.attr("dy", "2em")
			.attr("text-anchor", "middle")
			.text((d) => this.returnText1(d));

		this.svgNode.select("text.text2")
			.attr("dy", topoConfig.text2PositionIP)
			.attr("text-anchor", "middle")
			.text((d) => this.returnText2Text(d));

		this.svgNode.select("text.text3")
			.attr('text-anchor', 'middle')
			.attr('dominant-baseline', 'central')
			.attr("dx", (d) => d.mainIconDx)
			.attr("dy", (d) => d.mainIconDy)
			.attr("font-size", (d) => d.mainIconFontSize)
			//.style('font-family', 'FontAwesome') //font is assigned via CSS style
			.html((d) => d.getMainIcon()); //inside icons

		this.svgNode.select("text.stacked-text") //a stacked tet icon on top of text3
			.attr('text-anchor', 'middle')
			.attr('dominant-baseline', 'central')
			.attr("dx", (d) => d.stackedTextX)
			.attr("dy", (d) => d.stackedTextY)
			.attr("font-size", (d) => d.stackedIconFontSize)
			.html((d) => d.stackedIcon || this.d3attributes.stackedTextIcon(d));

		this.svgNode.select("text.text4")
			.attr("dx", (d) => this.d3attributes.returnText4StatusIconXPosition(d))
			.attr("dy", (d) => this.d3attributes.returnText4StatusIconYPosition(d))
			.text((d) => this.d3attributes.returnText4StatusIcon(d, this.topologyData.type));

		this.svgNode.select("text.alarm-status-text")
			.attr("dy", (d) => this.d3attributes.returnAlarmStatusTextDy(d))
			.attr("dx", (d) => this.d3attributes.returnAlarmStatusTextDx(d))
			.text((d) => this.d3attributes.returnAlarmStatusIcon(d))
			.attr("fill", (d) => this.d3attributes.returnAlarmStatusTextFill(d));

		this.svgNode.select("text.cluster-node-count")
			.attr("dx", (d: tplCluster) => d.mainIconDx)
			.attr("dy", (d: tplCluster) => d.clusterNodeCountDy)
			.html((d: tplCluster) => d.size);

		//now append the selected ones above
		let nodeEnter = this.svgNode.enter().append("g")
			.attr("id", (d, i) => "nodeg" + i)
			.attr("class", "node")
			.attr('nodetype', (d) => d.getNodeType())
			.attr('shape', (d) => d.shape || (d.type == SUPERTOPOLOGYTYPE.DOMAIN ? "poly" : "circle"))
			.style('opacity', (d) => d.getOpacity())
			.on("contextmenu", function (d, i) {
				let dataset = [{
					title: 'Remove Node',
					action: ""
				}];

				that.setContextMenu(dataset, d, i, this);
			})
			.on("click", function (d) {
				d3.event.preventDefault(); // ignore drag

				if (that.documentConverter.isHost(d.type)) {
					if (that.pathSelectionFlag && !that.topologyCreateModeFlag) {
						if (!d3.select(this).classed("selected") && $('.pathSource').length === 0) {//choose source
							if (that.pathSelectionType === pathType.PROACTIVE) {
								that.svg.selectAll("[nodetype='hostnode'").filter((node) => {
									if (!(d && d.networks && ((d.networks.length == 0 && node.networks && node.networks.length == 0) || (d.networks.length == 1 && (d.networks[0] == node.networks[0])) ))) {
										return node;
									}
								}).select("circle").transition().style("opacity", 0.2);
							}

							d.colorCode = "green";
							that.selectedSourceId = d.id;
							that.pathExistsDTOFlag["sourceId"] = d.id;
							that.baseServices.uiHelper.notify(that.t('messages.select_dest_host'), DIALOG_TYPES.INFO);
							d3.select(this).classed({
								"selected": true,
								"pathSource": true
							}).select("circle").transition().style({
								"stroke": "green",
								"fill": "green"
							}).transition().duration(750).attr("r", topoConfig.hostClickedRadius);
						} else if (d3.select(this).classed("selected") && d3.select(this).classed("pathSource")) {//deselect source
							if (that.pathSelectionType === pathType.PROACTIVE) { //if the nodes were down to 0.2 opacity in the above code
								that.svg.selectAll("[nodetype='hostnode'").filter((node) => {
									return node
								}).select("circle").transition().style("opacity", 1);
							}
							d.colorCode = "";
							that.selectedSourceId = "";
							that.pathExistsDTOFlag["sourceId"] = "";
							that.baseServices.uiHelper.notify(that.t('messages.deselect_source_host'), DIALOG_TYPES.SUCCESS);
							d3.select(this).classed({
								"selected": false,
								"pathSource": false
							}).select("circle").transition().style("stroke", topoConfig.defaultPeripheryColor).transition().duration(750).attr("r", topoConfig.hostRadius);
						} else if (!d3.select(this).classed("selected") && $('.pathSource').length === 1) {//choose target
							if ($('.pathTarget').length >= 1) {// if a target is already selected and we want to select another target on the fly to make a new request, de-select the previous target
								d3.selectAll(".pathTarget").classed({"selected": false, "pathTarget": false})
									.filter((node) => {
										node.colorCode = null;
										return node;
									}).select("circle")
									.transition().style("fill", (d) => d.getFillColor())
									.transition().style("stroke", (d) => that.d3attributes.strokeColor(d))
									.transition().duration(750).attr("r", topoConfig.hostRadius);
							}
							let sourceNode = that.topologyData.data.nodes.filter((v) => v.id == that.selectedSourceId);
							//host sadece 0 | 1 networke dahil olabilir dendi.
							if (that.pathSelectionType === pathType.REACTIVE || (that.pathSelectionType === pathType.PROACTIVE && sourceNode[0] && sourceNode[0].networks && ((sourceNode[0].networks.length == 0 && d.networks && d.networks.length == 0) || (sourceNode[0].networks.length == 1 && (sourceNode[0].networks[0] == d.networks[0])) ))) {
								d.colorCode = "red";
								that.selectedTargetId = d.id;
								that.pathExistsDTOFlag["targetId"] = d.id;
								if (that.createShowFlag === CREATESHOWENUM.CREATE) {

									let pathData = {
										version: 1,
										revision: 1,
										timestamp: that.baseServices.utils.genTimestamp(),
										topologyType: that.topologyData.type,
										selectedTopology: (that.topologyData.type === TOPOLOGYTYPE.VIRTUAL) ? that.topologyData.id : '',
										appId: 'tr.com.argela.prognet.rest.resources.PathResource',
										fromId: that.selectedSourceId,
										toId: that.selectedTargetId,
										securityLevel: UI_SECURITY_LEVELS.LEVEL_1,
										networks: d.networks
									};

									that.sharedService.showModal(PreliminaryPathPopup, pathData, (result) => {
										that.svg.selectAll("[nodetype='hostnode'").filter((node) => {
											return node
										}).select("circle").transition().style("opacity", 1);
										if (result.isSuccess && result.data) {
											that.drawPath(result.data);
										} else {
											that.resetPath();
										}
									});
								} else if (that.createShowFlag === CREATESHOWENUM.SHOW) {
									that.drawPath();
								}
								d3.select(this).classed({
									"selected": true,
									"pathTarget": true
								}).select("circle").transition().style({
									"stroke": "red",
									"fill": "red"
								}).transition().duration(750).attr("r", topoConfig.hostClickedRadius);
							} else {
								that.baseServices.uiHelper.notify("choose relevant host", DIALOG_TYPES.WARNING);
							}

						} else if (!d3.select(this).classed("selected") && that.selectedCounter === 2) {
							that.baseServices.uiHelper.notify(that.t("messages.only_two_hosts_allowed"), DIALOG_TYPES.WARNING);
						}
					}
				}
				if (!( that.documentConverter.isHost(d.type) ) && that.topologyCreateModeFlag && that.linkAddFlag) {
					let selected = d3.select(this).classed("selected");
					if (!selected) {
						d3.select(this).classed("selected", true).select("rect").classed('selected-path-link', true);
						if ($.isEmptyObject(that.selectedSource)) { //select source
							that.selectedSource = d;
							that.baseServices.uiHelper.notify(that.t('messages.select_dest_host'), DIALOG_TYPES.INFO);
							that.selectedElementToEdit.source = d;
							that.selectedElementToEdit.srcPort = d;
							if (that.selectedElementToEdit["reverse"]) {
								that.selectedElementToEdit["reverse"].target = d;
								that.selectedElementToEdit["reverse"].destPort = d;
							}
						} else { //select target
							that.selectedTarget = d;
							that.nodeEditorComponent.targetForSelectedElement = d;
							that.selectedElementToEdit.target = d;
							that.selectedElementToEdit.destPort = d;
							if (that.selectedElementToEdit["reverse"]) {
								that.selectedElementToEdit["reverse"].source = d;
								that.selectedElementToEdit["reverse"].srcPort = d;
							}
							that.topologyData.data.links.push(that.selectedElementToEdit);
							d3.selectAll(".node").classed("selected", false);
							that.resetSelectedElementState();
							that.selectedSource = {};
							that.selectedTarget = {};
							that.linkAddFlag = false;
							that.apr.tick();
							return that.render(that.topologyData.data, renderType.UPDATE, "STATS_UPDATED");
						}
					} else if (!$.isEmptyObject(that.selectedSource)) {//deselect source
						d3.select(this).classed("selected", false).select("rect").classed('selected-path-link', false);
						that.selectedSource = {};
						that.selectedElementToEdit.source = null;
						that.selectedElementToEdit.srcPort = null;
					}
				}

				if (that.selectElementFlag && d.type == "Switch" && !that.linkAddFlag) {
					that.resetSelectedElementState();
					that.selectedElementToEdit = d;
					that.changeDetector.detectChanges();
					d3.select(this).select("rect").classed({"selected-path-link": true, "edit-selected-element": true});
				}
			})
			.call(that.force.drag()
				.on("dragstart", function (d) {
					if (d.type == "Switch") {
						d.lastLocation = {x: d.x, y: d.y};
					}
					return (d3.event as BaseEvent).sourceEvent.stopPropagation();
				})
				.on("drag", function (d) {
					return d3.select(this).classed("fixed", d.fixed = true);
				})
				.on("dragend", (d) => {
					console.log("drag end ", d);
					(d3.event as BaseEvent).sourceEvent.stopPropagation(); // silence other listeners
					if (that.topologyData.type == TOPOLOGYTYPE.PHYSICAL && d.type == "Switch") {

						//do not update location if no location change exists.
						if (d.lastLocation && !(Math.abs(d.lastLocation.x - d.x) >= 1 || Math.abs(d.lastLocation.y - d.y) >= 1)) return;

						let newData: SwitchDTO = <SwitchDTO>this.baseServices.utils.optimizeDTO(SwitchDTODef, d);//, {onlyRequriedFields: true});
						newData.location = <LocationInfo>{x: d.x.toString(), y: d.y.toString()};
						newData.timestamp = this.baseServices.utils.genTimestamp();
						newData.revision++;

						let request = this.baseServices.apiHelper.genRequest({
							data: newData
						});

						this.topologyApi
							.topologySwitchSavePOST(<SwitchRequest>request)
							.subscribe(
								(res) => {
								},
								(error: any) => this.baseServices.uiHelper.processResponse(error.body)
							);
					}

				})
			)
			.on("dblclick", (d) => {
				if (d.type === "cluster") {
					this.expand[d.group] = !that.expand[d.group];
                    this.clusterTopologyData = that.topologyClusterService.network(that.topologyData.data, that.clusterTopologyData, that.topologyClusterService.getGroup, that.expand);

					return that.render(that.clusterTopologyData, renderType.UPDATE);
				} else if (d.type === SUPERTOPOLOGYTYPE.DOMAIN) { //MLAT-3911
                    this.sharedService.announceDomainChange(d);
				}
				else if(that.documentConverter.isSwitch(d.type)){
				    if(d.children.length > 0){
                        this.topologyData.data.nodes.push(...(d.children));
                        this.topologyData.data.links.push(...(d.childrenLinks));
                        d._children = d.children;
                        d.children = [];
                        d._childrenLinks = d.childrenLinks;
                        d.childrenLinks = [];
                        this.render(this.topologyData.data, renderType.UPDATE);
                    }else if(d._children.length > 0){
				        for(let i = 0; i < d._children.length; ++i){
				        	let nodeindex = DocumentConverter.getNodeIndex(this.topologyData.data.nodes, d._children[i]);
				        	let linkindex = this.documentConverter.findLinkIndexByNodeIds(this.topologyData.data.links,[d._children[i].id],this.topologyData.data.nodes)[0];
                            if(nodeindex > -1)this.topologyData.data.nodes.splice(nodeindex, 1);
                            if(linkindex > -1)this.topologyData.data.links.splice(linkindex, 1);
                        }

                        d.children = d._children;
                        d._children = [];
                        d.childrenLinks = d._childrenLinks;
                        d._childrenLinks = [];
                        this.render(this.topologyData.data, renderType.UPDATE);
                    }
				}
			});

		nodeEnter.filter((d) => this.documentConverter.isHost(d.type) || this.documentConverter.isNetworkDevice(d.type) || this.documentConverter.isBgpRouter(d.type)).append("circle")
			.attr("id", (d) => "node" + d.index)
			.attr("r", (d: tplHost | tplNetworkDevice | tplBgpRouter) => d.radiusCalculator())
			.attr("x", (d) => d.x)
			.attr("y", (d) => d.y)
			.style("stroke", (d: tplNetworkDevice | tplHost) => d.getStrokeColor())
			.style("stroke-width", topoConfig.peripheryStrokeWidth)
			.style("fill", (d: tplNetworkDevice | tplHost) => d.getFillColor())
			.style("opacity", (d: tplNetworkDevice | tplHost) => d.getOpacity());

		/* switch */
		let switchEnter = nodeEnter.filter((d) => d.nodetype == "switchnode");
		switchEnter
			.append("rect")
			.attr("class", "switch-rect-element")
			.attr("id", (d) => "node" + d.index)
			.attr("width", (d: tplSwitch) => d.width || this.d3attributes.widthHeightCalculator(d))
			.attr("height", (d: tplSwitch) => d.height || this.d3attributes.widthHeightCalculator(d))
			.attr("x", (d: tplSwitch) => d.relativeX || this.d3attributes.rectElementXY(d))
			.attr("y", (d: tplSwitch) => d.relativeY || this.d3attributes.rectElementXY(d))
			.attr("rx", (d: tplSwitch) => d.rx)
			.attr("ry", (d: tplSwitch) => d.ry)
			.style("stroke", (d: tplSwitch) => d.getStrokeColor())
			.style("stroke-width", (d: tplSwitch) => d.strokeWidth)
			.style("fill", (d: tplSwitch) => d.getFillColor())
			.style("stroke-dasharray", (d: tplSwitch) => d.getStrokeDashArray())
			.style("opacity", (d: tplSwitch) => d.getOpacity());


		switchEnter.append("rect")
			.attr("class", "switch-utilization-bar")
			.attr("height", (d) => topoConfig.switchUtilizationBarHeight)
			.attr("width", (d) => d.switchUtilizationBarWidth)
			.attr("rx", (d) => d.switchUtilizationBarBorderRadius)
			.attr("ry", (d) => d.switchUtilizationBarBorderRadius)
			.attr("fill", (d) => d.switchUtilizationBarColor)
			.attr("x", (d) => d.switchUtilizationBarX)
			.attr("y", (d) => d.switchUtilizationBarY);

		/*domain*/
		let domainEnter = nodeEnter.filter((d) => d.type === SUPERTOPOLOGYTYPE.DOMAIN);
		domainEnter.append("polygon")
			.attr("id", (d) => "domain" + d.index)
			.attr("class", "domain-element")
			.style("stroke-width", topoConfig.domainStrokeWidth)
			.style("stroke", (d) => d.stroke)
			.style("fill", (d) => d.fill);

		domainEnter.append("text")
			.attr("id", (d, i) => "alarm-status-text-" + i)
			.attr("class", "alarm-status-text")
			.attr("dy", (d) => this.d3attributes.returnAlarmStatusTextDy(d))
			.attr("dx", (d) => this.d3attributes.returnAlarmStatusTextDx(d))
			.text((d) => this.d3attributes.returnAlarmStatusIcon(d))
			.attr("fill", (d) => this.d3attributes.returnAlarmStatusTextFill(d))
			.on("click", (d: DomainDTO) => {
				this.aspcDisplay = !this.aspcDisplay;
				this.aspcLeft = (d3.event as any).pageX - 2;
				this.aspcTop = (d3.event as any).offsetY - 2;
				this.alarmStatus = this.topologyService.parseAlarmStatus(d);
			});

		/*cluster*/
		let clusterEnter = nodeEnter.filter((d) => d.type === "cluster");
		clusterEnter.append("polygon")
			.attr("id", (d) => "cluster" + d.index)
			.attr("class", "cluster-element")
			.style("stroke-width", topoConfig.domainStrokeWidth)
			.style("stroke", (d) => d.stroke)
			.style("fill", (d) => d.fill);

		clusterEnter.append("text")
			.attr("class", "cluster-node-count")
			.attr('text-anchor', 'middle')
			.attr('dominant-baseline', 'central')
			.attr("dx", (d: tplCluster) => d.mainIconDx)
			.attr("dy", (d: tplCluster) => d.clusterNodeCountDy)
			.html((d: tplCluster) => d.size);

		/*cloud*/
		nodeEnter.filter((d) => d.type == SUPERTOPOLOGYTYPE.PORT).append('text')
			.attr("class", "cloud-element")
			.attr('font-family', 'FontAwesome')
			.attr('font-size', "6em")
			.attr('dx', -50)
			.attr('dy', 25)
			.style('fill', 'white')
			.style('stroke', 'black')
			.style('stroke-width', '5px')
			.text((d) => '\uf0c2'); // fa-cloud

		nodeEnter.append("text") //inside text
			.attr('class', "text3")
			.attr('text-anchor', 'middle')
			.attr('dominant-baseline', 'central')
			.attr("dx", (d) => d.mainIconDx)
			.attr("dy", (d) => d.mainIconDy)
			.attr("font-size", (d) => d.mainIconFontSize)
			//.style('font-family', 'FontAwesome')//font is assigned via CSS style
			.html((d) => d.getMainIcon());

		nodeEnter.append("text") //inside text
			.attr('class', "stacked-text")
			.attr('text-anchor', 'middle')
			.attr('dominant-baseline', 'central')
			.attr("dx", (d) => d.stackedTextX)
			.attr("dy", (d) => d.stackedTextY)
			.attr("font-size", (d) => d.stackedIconFontSize)
			.html((d) => d.stackedIcon || this.d3attributes.stackedTextIcon(d));

		nodeEnter.append("text")
			.attr('class', "text1")
			.attr("dy", "2em")
			.attr("text-anchor", "middle")
			.text((d) => this.returnText1(d));

		nodeEnter.append("text")
			.attr('class', "text2")
			.attr("dy", topoConfig.text2PositionIP)
			.attr("text-anchor", "middle")
			.text((d) => this.returnText2Text(d));

		nodeEnter.append("text")
			.attr('class', "text4")
			.attr("dx", (d) => this.d3attributes.returnText4StatusIconXPosition(d))
			.attr("dy", (d) => this.d3attributes.returnText4StatusIconYPosition(d))
			.text((d) => this.d3attributes.returnText4StatusIcon(d, this.topologyData.type));

		nodeEnter
			.on("mouseover", that.mouseover.bind(that))
			.on("mousemove", that.mousemove.bind(that))
			.on("mouseout", that.mouseout.bind(that));
		this.svgNode.exit().remove();
		this.force.start();
	}

	tick() {
		let that = this;
		//var k;k = 2 * e.alpha;
		if (!this.hull.empty() && this.clusterTopologyData && this.clusterTopologyData.nodes) {
			this.hull.data(this.topologyClusterService.convexHulls(this.clusterTopologyData.nodes, this.topologyClusterService.getGroup))
				.attr("d", this.topologyClusterService.drawCluster);
		}

		this.svgLink.selectAll("path.path-link")
			.attr("d", function (d: tplLink) {
				if (!d.blocked && !d.isMvtnLinkUsed && d.selfLink !== true && d.isDown !== true) { //normal link
					let targetDelta = 5;
					let sourceDelta = 5;

					d.vectorX = d.target.x - d.source.x;
					d.vectorY = d.target.y - d.source.y;
					d.setUnitVector();
					d.setPerpendicularClockwise();
					d.setSrcVector(sourceDelta);
					d.setDstVector(targetDelta);

					if ((that.documentConverter.isHost(d.target.type) || that.documentConverter.isHost(d.source.type)) || (that.documentConverter.isBgpRouter(d.target.type) || that.documentConverter.isBgpRouter(d.source.type))) {
						return "M" + d.source.x + "," + d.source.y + " L" + d.target.x + "," + d.target.y;
					} else {
						if (d.linkOrder > 0) {
							let curve = 2;
							let homogeneous = 3.2;
							let orderCoefficient = 3 + d.linkOrder;
							let dx = d.target.x - d.source.x,
								dy = d.target.y - d.source.y,
								dr = Math.sqrt(dx * dx + dy * dy) * (orderCoefficient + homogeneous) / (curve * homogeneous);
							return "M" + (d.source.x + d.srcVector.X) + "," + (d.source.y + d.srcVector.Y) +
								" A " + dr + "," + dr + " 0,0,1 " + (d.target.x + d.dstVector.X ) + "," + (d.target.y + d.dstVector.Y) +
								" L" + (d.target.x - d.dstVector.X) + "," + (d.target.y - d.dstVector.Y) +
								" A " + dr + "," + dr + " 0,0,0 " + (d.source.x - d.srcVector.X) + ", " + (d.source.y - d.srcVector.Y) +
								" Z";
						} else {
							return "M" + (d.source.x + d.srcVector.X) + "," + (d.source.y + d.srcVector.Y) +
								" L" + (d.target.x + d.dstVector.X ) + "," + (d.target.y + d.dstVector.Y) +
								" L" + (d.target.x - d.dstVector.X) + "," + (d.target.y - d.dstVector.Y) +
								" L" + (d.source.x - d.srcVector.X) + ", " + (d.source.y - d.srcVector.Y) +
								" Z";

						}
					}
				} else if (!d.blocked && d.selfLink !== true && ( d.isMvtnLinkUsed || d.isDown )) {
					return "M" + d.source.x + "," + d.source.y + " L" + d.target.x + "," + d.target.y;
				} else if (d.selfLink === true || d.blocked) { //blocked or self
					return that.closedLinkGen(that.d3attributes.closedLinkArc(d));
				}
			});

		this.svgLink.selectAll("text.port-source > textPath.text-path")
			.attr("startOffset", function (d) {
				if (!d.blocked && !d.isMvtnLinkUsed && d.selfLink !== true && d.isDown !== true) { //normal link
					let angle = d.getAngle();
					if (90 < angle && angle < 270) {
						return that.d3attributes.textStartOffSet(d, "80%", "20%", "62%");
					} else {
						return that.d3attributes.textStartOffSet(d, "20%", "80%", "38%");
					}
				}
			})
			.text((d) => {
				if (this.portCondition(d)) {
					if (d.srcPort.number && this.portShowHideFlag === "true") {
						return d.destPort.number + "⇒";
					}
				}
			});

		this.svgLink.selectAll("text.port-target > textPath.text-path")
			.attr("startOffset", function (d) {
				if (!d.blocked && !d.isMvtnLinkUsed && d.selfLink !== true && d.isDown !== true) { //normal link
					let angle = d.getAngle();
					if (90 < angle && angle < 270) {
						return that.d3attributes.textStartOffSet(d, "20%", "80%", "86%");
					} else {
						return that.d3attributes.textStartOffSet(d, "80%", "20%", "11%");
					}
				}
			})
			.text((d) => {
				if (this.portCondition(d)) {
					if (d.srcPort.number && this.portShowHideFlag === "true") {
						return "⇐" + d.srcPort.number;
					}
				}
			});


		this.svgLink.selectAll("lineargradient")
			.filter(function (d: tplLink) {
				let gradientVector = d.getUnitVector(0.5);
                if(gradientVector.X && gradientVector.Y){
                    d3.select(this)
                        .attr("x1", 0.5 - gradientVector.X)
                        .attr("y1", 0.5 - gradientVector.Y)
                        .attr("x2", 0.5 + gradientVector.X)
                        .attr("y2", 0.5 + gradientVector.Y);
                }
			});

		this.svgNode.attr("transform", that.d3attributes.transform);

		d3.selectAll("polygon").attr("points", (d: tplCluster | tplDomain) => d.polygonPoints());
	}

	setContextMenu(dataset, d, index, self) {
		d3.event.preventDefault(); // prevent default browser context menu from opening
		let contextDiv;
		let that = this;
		if (this.topologyData.type === TOPOLOGYTYPE.PHYSICAL) {
			d3.selectAll('#contextmenu-node').data(dataset)
				.enter()
				.append('ul')
				.attr('id', 'contextmenu-node').attr("class", "dropdown-menu");

			if ((d as SwitchDTO).deviceInfo && this.documentConverter.isSwitch(d.deviceInfo.type) && d.deviceInfo.type !== DEVICETYPE.IP_PHONE && !this.topologyCreateModeFlag) {
				d3.select("#contextmenu-node")
					.selectAll('li').data(dataset).enter()
					.append('li');

				let event: BaseEvent = d3.event;

				d3.select('#contextmenu-node')
					.style('left', (event.pageX - 2) + 'px')
					.style('top', (event.pageY - 2) + 'px')
					.style('display', 'block')
					.html((i, v) => {
						//<li class='contextmenu-item' id='new-tab'> " + this.t('new_tab') + " </li>
						let contextMenu = [];

						if ((d.deviceInfo.type == DEVICETYPE.PHISICAL_SWITCH || d.deviceInfo.type == DEVICETYPE.LEGACY_SWITCH) && this.p('switches:edit') && !this.topologyData.isMappedVersionShown) {
							contextMenu.push("<li class='contextmenu-item' id='edit-switch'> <a><i class='fa fa-pencil-square-o'></i>" + this.i18n.t('switches.edit.modes.edit.title') + "</a> </li>");
						}

						if (d.deviceInfo.type == DEVICETYPE.PHISICAL_SWITCH && this.p('ports:list') && !this.topologyData.isMappedVersionShown) contextMenu.push("<li class='contextmenu-item' id='show-ports'> <a><i class='fa fa-list'></i>  " + this.t('show_port_list') + "</a> </li>");
						if ((d.deviceInfo.type == DEVICETYPE.PHISICAL_SWITCH) && this.p('flows:list') && !this.topologyData.isMappedVersionShown) contextMenu.push("<li class='contextmenu-item' id='show-flows'> <a><i class='icon-graph'></i>  " + this.t('show_flow_list') + "</a> </li>");
						if ((d.deviceInfo.type == DEVICETYPE.PHISICAL_SWITCH)
							&& !this.topologyData.isMappedVersionShown) contextMenu.push("<li class='contextmenu-item' id='show-graph'> <a><i class='fa fa-line-chart'></i>  " + this.t('show_graph') + "</a> </li>");

						if (d.status === SWITCHSTATUS.DOWN && this.p('switches:delete') && !this.topologyData.isMappedVersionShown) {
							contextMenu.push("<li class='contextmenu-item' id='delete-switch-node'><a>" + this.t('delete_switch_node') + "</a></li>");
						}
						if (this.topologyData.tabType == CREATESHOWENUM.EDIT) {
							if (!d.isBlockedForMvtn && this.topologyData.isMappedVersionShown) {
								contextMenu.push("<li class='contextmenu-item' id='switch-block-for-mvtn'><a>" + this.t('block_for_mvtn') + "</a></li>");
							} else if (d.isBlockedForMvtn && this.topologyData.isMappedVersionShown) {
								contextMenu.push("<li class='contextmenu-item' id='switch-allow-for-mvtn'><a>" + this.t('allow_for_mvtn') + "</a></li>");
							} else {
								contextMenu.push("<li class='contextmenu-item' id='switch-edit7'><a>" + this.i18n.t('switches.edit.modes.edit.title') + "</a></li>");
							}
						}

						return contextMenu.join('');
					})
					.on("mouseleave", () => {
							d3.select('#contextmenu-node').remove();
							contextDiv = null;
						}
					);

				//d3.select('#new-tab').on("click", ()=> {
				//    this.newNodeTab(self, d, this.topologyData.name);
				//    d3.select('#contextmenu-node').style('display', 'none');
				//});

				d3.select('#show-flows').on("click", () => {
					if (this.topologyData.type == TOPOLOGYTYPE.VIRTUAL) {
						let localSwitchDTO: LocalSwitchDTO = this.baseServices.apiHelper.cloneObject(d);
						localSwitchDTO.mvtnNetworkId = this.topologyData.id;
						this.sharedService.showModal(SwitchFlowsPopup, localSwitchDTO);//{switchDTO: d});
					} else {
						this.sharedService.showModal(SwitchFlowsPopup, d);//{switchDTO: d});
					}

					d3.select('#contextmenu-node').style('display', 'none');
				});

				d3.select('#show-ports').on("click", () => {
					this.sharedService.showModal(SwitchPortStatsPopup, d);
					d3.select('#contextmenu-node').style('display', 'none');
				});

				d3.select('#edit-switch').on("click", () => {
					this.sharedService.showModal(SwitchEditPopup, d, (result) => {
						if (result.isSuccess) {
							d.name = result.data.name;
							d.powerSaverModeEnabled = result.data.powerSaverModeEnabled;
							d.securityLevel = result.data.securityLevel;
							d.mode = result.data.mode;
							d.isMeterEnabled = result.data.isMeterEnabled;
							d.isControllerDevice = result.data.isControllerDevice;
							d.usingControlChannel = result.data.usingControlChannel;
							d.powerUsage = result.data.powerUsage;
							d.totalBandwidth = result.data.totalBandwidth;
							this.render(this.topologyData.data, renderType.UPDATE);
						}
					});
					d3.select('#contextmenu-node').style('display', 'none');
				});

				d3.select('#delete-switch-node').on("click", () => {
					this.baseServices.uiHelper.confirm(this.t("messages.confirm_switch_delete"), (type) => {
						if (type.id == "dialogs.actions.yes") {
							let req: GenericDeleteRequest = {
								token: <SecurityToken>{
									requestId: "",
									timestamp: new Date()
								},
								etag: '',
								digest: '',
								options: <DeleteOptions>{
									id: d.id,
									isReturnModel: false
								}
							};
							let s =
								this.topologyApi.topologySwitchDeletePOST(req).subscribe((res) => {
									if (this.baseServices.uiHelper.processResponse(res)) {
										let allTopoData = {};
										let eventData = {
											value: d,
											id: this.topologyData.id,
											name: this.topologyData.id,
											topologyId: this.topologyData.id
										};
										allTopoData[this.topologyData.id] = this.topologyData;
										this.documentConverter.removeSwitch(eventData, allTopoData);
										this.render(this.topologyData.data, renderType.UPDATE);
										d3.select('#contextmenu-node').style('display', 'none');
									}
								});
							this.subscriptions.push(s);
						}
					});
				});

				d3.select('#switch-block-for-mvtn').on("click", function () {
					d.isBlockedForMvtn = true;
					d3.select(self).select("rect.switch-rect-element").transition().style("stroke", topoConfig.defaultLegacySwitchPeripheryColor).transition().style("fill", topoConfig.blockedHostFillColor);
					that.excludedDevicesForMvtn.push(d.id);
					d3.select('#contextmenu-node').style('display', 'none');
				});

				d3.select('#switch-allow-for-mvtn').on("click", function () {
					d.isBlockedForMvtn = false;
					d3.select(self).select("rect.switch-rect-element").transition().style("stroke", "blue").transition().style("fill", topoConfig.defaultOpenFlowSwitchFillColor);
					let index = that.excludedDevicesForMvtn.indexOf(d.id);
					that.excludedDevicesForMvtn.splice(index, 1);
					d3.select('#contextmenu-node').style('display', 'none');
				});

				d3.select('#show-graph').on("click", () => {
					this.sharedService.showModal(SwitchGraphPopup, d);
					d3.select('#contextmenu-node').style('display', 'none');
				});

				d3.event.preventDefault();
			}
			else if (d.type === "Link" && !this.topologyCreateModeFlag && d.connectionType === CONNECTIONTYPE.OF_SWITCH) {
				d3.select("#contextmenu-node")
					.selectAll('li').data(dataset).enter()
					.append('li');

				let event: BaseEvent = d3.event;

				d3.select('#contextmenu-node')
					.style('left', (event.pageX - 2) + 'px')
					.style('top', (event.pageY - 2) + 'px')
					.style('display', 'block')
					.html((i, v) => {

						let contextMenu = [];
						if (this.topologyData.tabType == CREATESHOWENUM.SHOW) {
							contextMenu.push("<li class='contextmenu-item' id='edit-uplink'> <a><i class='fa fa-gear'></i>" + this.i18n.t('links.edit.actions.edit_uplink.title') + "</a> </li>");
						}

						if (d.reverse && this.topologyData.tabType == CREATESHOWENUM.SHOW) {
							if (!d.measureDelay) {
								contextMenu.push("<li class='contextmenu-item' id='edit-downlink'> <a><i class='fa fa-gear'></i>" + this.i18n.t('links.edit.actions.edit_downlink.title') + "</a> </li>" +
									"<li class='dropdown-submenu context-submenu' id='edit-delay'> <a><i class='fa fa-arrow-circle-o-down'></i>" + this.i18n.t('links.edit.actions.edit_delay.title') + "</a>" +
									"<ul class='dropdown-menu'>" +
									"<li class='contextmenu-item' id='start-delay'> <a><i class='fa fa-play'></i>" + this.i18n.t('links.edit.actions.start_delay.title') + "</a> </li>" +
									"</ul> </li>");
							} else {
								contextMenu.push("<li class='contextmenu-item' id='edit-downlink'> <a><i class='fa fa-gear'></i>" + this.i18n.t('links.edit.actions.edit_downlink.title') + "</a> </li>" +
									"<li class='dropdown-submenu context-submenu' id='edit-delay'> <a><i class='fa fa-arrow-circle-o-down'></i>" + this.i18n.t('links.edit.actions.edit_delay.title') + "</a>" +
									"<ul class='dropdown-menu'>" +
									"<li class='contextmenu-item' id='stop-delay'> <a><i class='fa fa-stop'></i>" + this.i18n.t('links.edit.actions.stop_delay.title') + "</a> </li>" +
									"</ul> </li>");
							}
						}

						if (this.topologyCreateModeFlag || this.topologyData.tabType == CREATESHOWENUM.EDIT) {
							contextMenu.push("<li class='contextmenu-item' id='edit-link7'> <a><i class='fa fa-pencil-square-o'></i>" + this.i18n.t('links.edit.modes.edit.title') + "</a> </li>");
						}

						if (this.topologyData.tabType == CREATESHOWENUM.SHOW) {
							contextMenu.push("<li class='contextmenu-item' id='show-graph'> <a><i class='fa fa-line-chart'></i>" + this.i18n.t('links.edit.actions.graph.title') + "</a> </li>");
						}
						return contextMenu.join('');
					})
					.on("mouseleave", () => {
							d3.select('#contextmenu-node').remove();
						}
					);

				var showModal = (d) => {
					// let dto: LinkDTO = <LinkDTO>this.baseServices.utils.optimizeDTO(LinkDTODef, d);//,{ onlyRequriedFields: true });
					//this.baseServices.utils.genUUID();
					this.sharedService.showModal(LinkEditPopup, d, (result) => {
						if (result.isSuccess) {
							d.securityLevel = result.data.securityLevel;
							d.isWanLink = result.data.isWanLink;
							d.measureDelay = result.data.measureDelay;
							d["reverse"].securityLevel = result.data.securityLevel;
							d["reverse"].isWanLink = result.data.isWanLink;
							d["reverse"].measureDelay = result.data.measureDelay;
							d["reverse"].queueId = result.data["reverse"].queueId;
							//WARN this is not working, topology must be resfreshed
							//d = result.data;
						}
					});
					d3.select('#contextmenu-node').style('display', 'none');
				};

				d3.select('#edit-uplink').on("click", () => {
					showModal(d);
				});

				d3.select('#edit-downlink').on("click", () => {
					showModal(d.reverse);
				});

				d3.select('#edit-link7').on("click", () => {
					this.linkEditMenu(d);
				});

				d3.select('#start-delay').on("click", () => {
					d.id = d.srcPort.id + ' => ' + d.destPort.id;

					d.measureDelay = true;

					let request = this.baseServices.apiHelper.genRequest({
						data: d
					});

					this.topologyApi
						.topologyLinkSavePOST(<LinkRequest>request)
						.subscribe(
							(res) => {
								if (this.baseServices.uiHelper.processResponse(res, this.i18n.t('links.edit.messages.save_success', {dto: d}))) {
								}
							},
							(error: any) => {
								this.baseServices.uiHelper.processResponse(error._body); //JSON parsing is handled in the function now
							}
						);
					d3.select('#contextmenu-node').remove();
				});

				d3.select('#stop-delay').on("click", () => {
					d.id = d.srcPort.id + ' => ' + d.destPort.id;

					d.measureDelay = false;

					let request = this.baseServices.apiHelper.genRequest({
						data: d
					});

					this.topologyApi
						.topologyLinkSavePOST(<LinkRequest>request)
						.subscribe(
							(res) => {
								if (this.baseServices.uiHelper.processResponse(res, this.i18n.t('links.edit.messages.save_success', {dto: d}))) {
								}
							},
							(error: any) => {
								this.baseServices.uiHelper.processResponse(error._body); //JSON parsing is handled in the function now
							}
						);
					d3.select('#contextmenu-node').remove();
				});

				d3.select('#show-graph').on("click", () => {
					this.sharedService.showModal(LinkGraphPopup, d);
					d3.select('#contextmenu-node').style('display', 'none');
				});

				d3.event.preventDefault();
			}
			else if (this.documentConverter.isHost(d.type)) {
				d3.select("#contextmenu-node")
					.selectAll('li').data(dataset).enter()
					.append('li');

				let event: BaseEvent = d3.event;
				// display context menu
				d3.select('#contextmenu-node')
					.style('left', (event.pageX - 2) + 'px')
					.style('top', (event.pageY - 2) + 'px')
					.style('display', 'block')
					.html((i, v) => {
						let contextMenu = [];
						if ((<HostDTO>d).status == HOSTSTATUS.GRANTED) {
							contextMenu.push("<li class='contextmenu-item' id='block-user'> <a><i class='fa fa-ban'></i>" + this.t("messages.block_user") + "</a> </li>");
						}

						contextMenu.push("<li class='contextmenu-item' id='convert-to-ap'> <a><i class='fa fa-arrow-circle-o-up'></i>" + this.t("messages.to_ap") + "</a> </li>");

						if (!DocumentConverter.isVNFHost(d)) {
							contextMenu.push("<li class='contextmenu-item' id='convert-to-vnf'> <a><i class='fa fa-th-large'></i>" + this.t("messages.to_vnf") + "</a> </li>");
						}

						if (!((d as HostDTO).quarantined)) {
							contextMenu.push("<li class='contextmenu-item quarantine' id='quarantine'> <a><i class='fa fa-times'></i>" + this.t("messages.quarantine") + "</a> </li>");
						} else {
							contextMenu.push("<li class='contextmenu-item quarantine' id='no_quarantine'> <a><i class='fa fa-check-square-o'></i>" + this.t("messages.no_quarantine") + "</a> </li>");
						}

                        contextMenu.push("<li class='contextmenu-item' id='show-graph'> <a><i class='fa fa-line-chart'></i>" + this.t("messages.show_graph") + "</a> </li>");

                        return contextMenu.join('');
					})
					.on("mouseleave", () => {
							d3.select('#contextmenu-node').remove();
						}
					);

				d3.select('#convert-to-ap').on("click", () => {
					let networkDevice: NetworkDeviceDTO = this.baseServices.apiHelper.genDTO({
						status: NETWORKDEVICESTATUS.UP,
						type: NETWORKDEVICETYPE.ACCESS_POINT,
						port: d.port,
						mac: d.port.address.mac,
						ip: d.port.address.ipv4,
						id: "tplNoid"
					});
					this.sharedService.showModal(NetworkDeviceEditPopup, networkDevice,
						(result) => {
							if (result.isSuccess) {
								networkDevice.vlanid = result.data.vlanid;
								networkDevice.type = result.data.type;
								networkDevice.ip = result.data.ip;
								networkDevice.id = null; //MLAT-2847

								/*let request = this.baseServices.apiHelper.genRequest({
								 data: <NetworkDeviceDTO> networkDevice
								 });
								 this.nwdApi.networkDeviceSavePOST(request).subscribe((res) => {
								 return this.baseServices.uiHelper.processResponse(res, this.i18n.t('settings.networkDevice.edit.messages.save_success'));
								 });*/
							} else {
								this.baseServices.uiHelper.notify(this.i18n.t("network_vis.topology.add_edit_switch_popup.cancel"), DIALOG_TYPES.INFO);
							}
						});
				});
				d3.select('#block-user').on("click", () => {
					if (is.existy(d) && is.existy(d.userInfo) && is.existy(d.userInfo.name)) {
						if (is.existy(d.port) && is.existy(d.port.address) && is.existy(d.port.address.ipv4)) {
							this.nacManager.changeUserStatus(d.userInfo.name, d.port.address.ipv4, NACSTATUS.PASSIVE, (res) => {
								if (res.status == RETURNSTATUS.SUCCESS) {
									this.sharedService.announceTopologyRefresh();
								}
							});
						} else {
							this.baseServices.uiHelper.notify(this.i18n.t("nac_management.users.change_status.messages.no_ip_info"), DIALOG_TYPES.WARNING);
						}
					} else if (is.existy(d) && is.existy(d.name)) {
						if (is.existy(d.port) && is.existy(d.port.address) && is.existy(d.port.address.ipv4)) {
							this.nacManager.changeUserStatus(d.name, d.port.address.ipv4, NACSTATUS.PASSIVE, (res) => {
								if (res.status == RETURNSTATUS.SUCCESS) {
									this.sharedService.announceTopologyRefresh();
								}
							});
						} else {
							this.baseServices.uiHelper.notify(this.i18n.t("nac_management.users.change_status.messages.no_ip_info"), DIALOG_TYPES.WARNING);
						}
					} else {
						this.baseServices.uiHelper.notify(this.i18n.t("nac_management.users.change_status.messages.no_user_info"), DIALOG_TYPES.WARNING);
					}
				});

				d3.select('#convert-to-vnf').on("click", () => {
					this.sharedService.showModal(VNFConversionPopup, d,
						(result) => {
							if (result.isSuccess) {
								d = result.data;
								this.render(this.topologyData.data, renderType.UPDATE);
							}
						})
				});

				d3.select('.quarantine').on("click", () => {
					let message = !d.quarantine ? this.t('messages.confirm_quarantine', {name: d.id}) : this.t('messages.confirm_no_quarantine', {name: d.id});
					this.baseServices.uiHelper.confirm(message, (selected: Action) => {
						if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
							let req = <DeviceQuarantineRequest> this.baseServices.apiHelper.genRequest({
								data: {
									macAddress: (d as HostDTO).id.split("/")[0],
									type: (d as HostDTO).type,
									deviceId: (d as HostDTO).port.id,
									portNumber: (d as HostDTO).port.number
								}
							});
							this.nacDeviceApi.deviceQuarantinePOST(req).toPromise()
								.then((res) => {
									if (this.uiHelper.processResponse(res)) {
										(d as HostDTO).quarantined = !(d as HostDTO).quarantined;
										this.sharedService.announceTopologyRefresh();
									}
								});
						}
					})
				});

				d3.select('#show-graph').on("click", () => {
					this.sharedService.showModal(UserGraphPopup, d);
					d3.select('#contextmenu-node').style('display', 'none');
				});
			}
		} else if (this.topologyData.type === TOPOLOGYTYPE.VIRTUAL && this.topologyData.status === MVTNSTATUS.ACTIVE) {
			d3.selectAll('#contextmenu-node').data(dataset)
				.enter()
				.append('ul')
				.attr('id', 'contextmenu-node').attr("class", "dropdown-menu");

			if (d.type === "Link" && !this.topologyCreateModeFlag && !this.topologyData.isMappedVersionShown) {
				d3.select("#contextmenu-node")
					.selectAll('li').data(dataset).enter()
					.append('li');

				let event: BaseEvent = d3.event;

				d3.select('#contextmenu-node')
					.style('left', (event.pageX - 2) + 'px')
					.style('top', (event.pageY - 2) + 'px')
					.style('display', 'block')
					.html((i, v) => {
						let contextMenu = [];
						if (this.topologyData.tabType == CREATESHOWENUM.SHOW) {
							if (!(d as LinkDTO).measureDelay) {
								contextMenu.push("<li class='contextmenu-item' class='measure-delay-btn-e' id='measure-delay'><a class='measure-delay-btn-e'><i class='fa fa-pencil-square-o'></i>" + this.i18n.t('links.edit.actions.measure_delay_jitter.title') + "</a> </li>");
							} else {
								contextMenu.push("<li class='contextmenu-item' class='measure-delay-btn-e' id='not-measure-delay'><a class='measure-delay-btn-e'><i class='fa fa-pencil-square-o'></i>" + this.i18n.t('links.edit.actions.measure_delay_jitter_not.title') + "</a> </li>");
							}
						}
						return contextMenu.join('');
					})
					.on("mouseleave", () => {
							d3.select('#contextmenu-node').remove();
						}
					);

				d3.select('.measure-delay-btn-e').on("click", () => {
					d.measureDelay = !d.measureDelay;
					let request: LinkRequest = this.baseServices.apiHelper.genRequest({
						data: d
					});
					this.mvtnApi.virtualLinkSavePOST(request).toPromise().then((res) => {
						if (this.uiHelper.processResponse(res)) {
							if (res.data.measureDelay) {
								this.baseServices.uiHelper.notify(this.i18n.t('links.edit.messages.measure_delay_jitter'), DIALOG_TYPES.SUCCESS);
							} else {
								this.baseServices.uiHelper.notify(this.i18n.t('links.edit.messages.measure_delay_jitter_not'), DIALOG_TYPES.SUCCESS);
							}
						} else {
							this.baseServices.uiHelper.notify($.t("common.messages.RETURN_STATUS.SERVER_ERROR"), DIALOG_TYPES.ERROR);
						}
					});
				});
			}
		}
	}

	redraw() {
		let event: BaseEvent = d3.event;
		if (this.cursor) {
			this.cursor.transition().attr("height", topoConfig.switchRadius * this.zoom.scale()).transition().attr("width", topoConfig.switchRadius * this.zoom.scale());
		}
		this.translateCoefficient[0] = event.translate[0];
		this.translateCoefficient[1] = event.translate[1];
		this.initialZoomTranslate = this.zoom.translate();
		this.initialZoomScale = this.zoom.scale();

		return this.g.attr("transform", "translate(" + event.translate + ")" + " scale(" + event.scale + ")");
	}

	zoomClick() {
		this.logger.debug(this.zoom.scale());

		let clicked = (d3.event as BaseEvent).target.className,
			direction = 1,
			factor = 0.2,
			target_zoom = 1,
			center = [this.width / 2, this.height / 2],
			extent = this.zoom.scaleExtent(),
			translate = this.zoom.translate(),
			translate0 = [],
			l = [],
			view = {x: translate[0], y: translate[1], k: this.zoom.scale()};

		d3.event.preventDefault();
		direction = (clicked.indexOf("zoom_in") > -1) ? 1 : -1;
		target_zoom = this.zoom.scale() * (1 + factor * direction);

		if (target_zoom < extent[0] || target_zoom > extent[1]) {
			return false;
		}

		translate0 = [(center[0] - view.x) / view.k, (center[1] - view.y) / view.k];
		view.k = target_zoom;
		l = [translate0[0] * view.k + view.x, translate0[1] * view.k + view.y];

		view.x += center[0] - l[0];
		view.y += center[1] - l[1];

		this.interpolateZoom([view.x, view.y], view.k);
	}

	interpolateZoom(translate, scale) {
		let self = this;
		return d3.transition().duration(350).tween("zoom", function () {
			var iTranslate = d3.interpolate(self.zoom.translate(), translate),
				iScale = d3.interpolate(self.zoom.scale(), scale);
			return function (t) {
				self.zoom
					.scale(iScale(t))
					.translate(iTranslate(t));
				self.zoomed();
			};
		});
	}

	zoomed() {
		this.g.attr("transform",
			"translate(" + this.zoom.translate() + ")" +
			"scale(" + this.zoom.scale() + ")"
		);
	}

	resizeF11() {
		let width = $(window).innerWidth() - 68;
		let height = $(window).innerHeight() - this.navHeight - topoConfig.heightCoefficient;

		this.svg.attr("width", width).attr("height", height);
		this.force.size([width, height]).resume();
		this.height = height;
		this.width = width;
	}

	resizeFullScreen() { //TODO remove redundant let width, height after testing.
		let width = this.svg.node().getBoundingClientRect().width;
		let height = $(window).innerHeight() - this.navHeight; //navheight büyürken olmayacak küçülürken olacak

		if (this.isFullScreenFlag) {
			height = height - topoConfig.heightCoefficient;
		}
		this.svg.attr("width", width).attr("height", height);
		this.force.size([width, height]).resume();
		this.isFullScreenFlag = !this.isFullScreenFlag;
		this.height = height;
		this.width = width;
	}

	mouseover(d) {
		if (d) {
			if (d.source) {
				if (!(this.documentConverter.isHost(d.source.type) || this.documentConverter.isHost(d.target.type))) {
					if (this.footerFlag === "true") this.tooltipDiv.stop().css("opacity", 0.9);
				}
			} else {
				if (this.footerFlag === "true") this.tooltipDiv.stop().css("opacity", 0.9);
			}
		}
	}

	mousemove(d: any, i) {
		this.infoTooltipData = {mode: tooltipMode.TOPOLOGYELEMENTS, data: d};
		this.footerTooltipData = {mode: tooltipMode.TOPOLOGYELEMENTS, data: d};
		this.changeDetector.detectChanges();
	}

	mouseout() {
		this.svg.selectAll('.link').classed('blurred', false);

		this.infoTooltipData = {mode: tooltipMode.MOUSEOUT, data: ""};
		this.footerTooltipData = {mode: tooltipMode.MOUSEOUT, data: ""};
		return this.tooltipDiv.stop().animate({opacity: 0}, 3000, () => {
			this.footer = {};
		});
	}

	svgClean() {
		this.logger.debug('cleaning');
		this.svgChildren.empty();
	}

	private renderAddresses(address: AddressInfo) {
		let strBufer = [];
		if (address) {
			//'mac', mac is used in ID field so no need to show here
			['ipv4', 'ipv6'].forEach((fld) => {
				if (address[fld]) strBufer.push(address[fld]);
			})
		}
		return strBufer.length > 0 ? strBufer.join('/') : '-';
	}

	isPathShown(): boolean {
		let a = document.getElementsByTagName('rect');

		for (let i = 0; i < a.length; i++) {
			if (a[i].style.fill == topoConfig.PATH_DRAW_COLOR) {
				return true;
			}
		}
		return false;
	}

	ngOnDestroy() {
		super.ngOnDestroy();
		console.log("-destroyed-");
		$('#toposvg').empty();
		d3.select('.stats-tooltip').remove();
		d3.select('.topotooltip').remove();
	}

	toggleStringAndIcons(flag, button, buttonI18PathFirst, buttonI18PathSecond, icon, iconClassFirst, iconClassSecond) {
		if (flag == "false" || flag == false) {
			button.attr('data-i18n', buttonI18PathFirst);
			icon.attr('class', iconClassFirst);
		} else {
			button.attr('data-i18n', buttonI18PathSecond);
			icon.attr('class', iconClassSecond);
		}
		return button.localize();
	}

	toggleFooter() {
		this.footerFlag = this.topologyService.stringBooleanReverser(this.footerFlag);
		localStorage.setItem('footerFlag', this.footerFlag);
		this.toggleStringAndIcons(this.footerFlag, this.toggleFooterInfoBtn, 'network_vis.topology.show_footer', 'network_vis.topology.hide_footer', this.footerBtnIcon, 'icon-eye', 'icon-empty');
	}

	toggleDetailInfo() {
		this.detailInfoFlag = this.topologyService.stringBooleanReverser(this.detailInfoFlag);
		localStorage.setItem('detailInfoFlag', this.detailInfoFlag);
		this.toggleStringAndIcons(this.detailInfoFlag, this.toggleDetailInfoBtn, 'network_vis.topology.show_detail_info', 'network_vis.topology.hide_detail_info', this.detailBtnIcon, 'icon-eye', 'icon-empty');
	}

	toggleHosts() {
		this.showHostsFlag = this.topologyService.stringBooleanReverser(this.showHostsFlag);
		localStorage.setItem('showHostsFlag', this.showHostsFlag);
		if (this.showHostsFlag == "false") {
			$("circle[r=12]").parent().animate({opacity: 0}, 1000);
			$("path[linktype='hostlink']").parent().animate({opacity: 0}, 1000);
		} else {
			$("circle[r=12]").parent().animate({opacity: 1}, 1000);
			$("path[linktype='hostlink']").parent().animate({opacity: 1}, 1000);
		}
		this.toggleStringAndIcons(this.showHostsFlag, this.toggleHostsBtn, 'network_vis.topology.show_hosts', 'network_vis.topology.hide_hosts', this.hostsToggleIcon, 'icon-eye', 'icon-empty');
	}

	toggleNetworkDevices() {
		this.showNetworkDevicesFlag = this.topologyService.stringBooleanReverser(this.showNetworkDevicesFlag);
		localStorage.setItem('showNetworkDevicesFlag', this.showNetworkDevicesFlag);
		let gatewayGNode = $("g[nodetype='gatewaynode']");
		let gatewayPLink = $("path[linktype='gatewaylink']");
		let nwGNode = $("g[nodetype='networkdevicenode']");
		let nwPLink = $("path[linktype='networkdevicelink']");
		if (this.showNetworkDevicesFlag == "false") {
			gatewayGNode.find("circle").animate({opacity: 0}, 1000);
			gatewayGNode.animate({opacity: 0}, 1000);
			gatewayPLink.parent().animate({opacity: 0}, 1000);
			gatewayPLink.animate({opacity: 0}, 1000);
			nwGNode.find("circle").animate({opacity: 0}, 1000);
			nwGNode.animate({opacity: 0}, 1000);
			nwPLink.parent().animate({opacity: 0}, 1000);
			nwPLink.animate({opacity: 0}, 1000);
		} else {
			gatewayGNode.find("circle").animate({opacity: 1}, 1000);
			gatewayGNode.animate({opacity: 1}, 1000);
			gatewayPLink.parent().animate({opacity: 1}, 1000);
			gatewayPLink.animate({opacity: 1}, 1000);
			nwGNode.find("circle").animate({opacity: 1}, 1000);
			nwGNode.animate({opacity: 1}, 1000);
			nwPLink.parent().animate({opacity: 1}, 1000);
			nwPLink.animate({opacity: 1}, 1000);
		}
		this.toggleStringAndIcons(this.showNetworkDevicesFlag, this.toggleNetworkDevicesBtn, 'network_vis.topology.show_networkdevices', 'network_vis.topology.hide_networkdevices', this.networkDevicesToggleIcon, 'icon-empty', 'icon-eye');
	}

	toggleVirtualGateways() {
		this.showVGatewaysFlag = this.topologyService.stringBooleanReverser(this.showVGatewaysFlag);
		localStorage.setItem('showVGatewaysFlag', this.showVGatewaysFlag);
		if (this.showVGatewaysFlag == "false") {
			$("g[nodetype='virtualgatewaynode']").animate({opacity: 0}, 1000);
			$("path[linktype='virtualgatewaylink']").parent().animate({opacity: 0}, 1000);
		} else {
			$("g[nodetype='virtualgatewaynode']").animate({opacity: 1}, 1000);
			$("path[linktype='virtualgatewaylink']").parent().animate({opacity: 1}, 1000);
		}
		this.toggleStringAndIcons(this.showVGatewaysFlag, this.toggleVgatewaysBtn, 'network_vis.topology.show_vgateway', 'network_vis.topology.hide_vgateway', this.vGatewayToggleIcon, 'icon-eye', 'icon-empty');
	}

	toggleControllersTab() {
		this.controllersTabFlag = this.topologyService.stringBooleanReverser(this.controllersTabFlag);
		localStorage.setItem('controllersTabFlag', this.controllersTabFlag);
		this.toggleStringAndIcons(this.controllersTabFlag, this.toggleControllersTabBtn, 'network_vis.topology.show_controllers_tab', 'network_vis.topology.hide_controllers_tab', this.controllerTabIcon, 'icon-eye', 'icon-empty');
	}

	toggleGraphs() {
		this.graphsVisible = this.topologyService.stringBooleanReverser(this.graphsVisible);
		localStorage.setItem('graphsVisible', this.graphsVisible);
		this.toggleStringAndIcons(this.graphsVisible, this.toggleGraphsBtn, 'network_vis.topology.hide_graphs', 'network_vis.topology.show_graphs', this.graphsIcon, 'icon-empty', 'icon-eye');
	}

	toggleMap() {
		this.trMapFlag = this.topologyService.stringBooleanReverser(this.trMapFlag);
		if (this.trMapFlag === "true") {
			this.$trMap.show();
		} else {
			if (this.$trMap) this.$trMap.hide();
		}
		localStorage.setItem('trMapFlag', this.trMapFlag);
		this.toggleStringAndIcons(this.trMapFlag, this.toggleTrMapFlagBtn, 'network_vis.topology.show_trmap', 'network_vis.topology.hide_trmap', this.trMapIcon, 'icon-eye', 'icon-empty');
	}

	togglePortNumbers() {
		this.portShowHideFlag = this.topologyService.stringBooleanReverser(this.portShowHideFlag);
		localStorage.setItem('portShowHideFlag', this.portShowHideFlag);
		if (this.portShowHideFlag == "false") {
			$("text.port-source,text.port-target").animate({opacity: 0}, 1000);
		} else {
			$("text.port-source,text.port-target").animate({opacity: 1}, 1000);
		}
		this.toggleStringAndIcons(this.portShowHideFlag, this.togglePortsBtn, 'network_vis.topology.show_ports', 'network_vis.topology.hide_ports', this.togglePortsIcon, 'icon-eye', 'icon-empty');
	}

	resetPath(hideProactiveAlternavitesButton: boolean = true) {
		clearTimeout(this.pathRedrawFrequencyTimeoutId);
		if (this.svg && this.svg.selectAll('.link').length > 0) {
			this.svg.selectAll('.link').select("path").classed("PathDrawStroke", false);
			this.svg.selectAll('.node').select("rect.switch-rect-element").classed("PathDrawFill", false);
			this.svg.selectAll('.node').classed({"pathSource": false, "pathTarget": false, "selected": false});

			$("[r=" + topoConfig.hostClickedRadius + "]").attr("r", topoConfig.hostRadius).css({
				"stroke": topoConfig.defaultHostPeripheryColor,
				"fill": topoConfig.defaultHostFillColor
			});
			this.svg.selectAll("[nodetype='hostnode'").filter((node) => {
				if (node.colorCode == "green" || node.colorCode == "red") {
					node.colorCode = "";
					return node;
				}
			}).select("circle").transition().style("fill", (d) => d.getFillColor())
				.transition().style("stroke", (d) => d.getStrokeColor());

			this.selectedCounter = 0;
			this.pathExistsDTOFlag = {sourceId: "", targetId: ""};
			this.pathSelectionFlag = false;
			this.createShowFlag = CREATESHOWENUM.NONE;
			if (hideProactiveAlternavitesButton) {
				this.topologyData.alternativeProactivePathPopoverDataReadyFlag = false; //this will make the alternative selection popover hidden
			}
			//switch links reset
			let links = this.svg.selectAll('.link').filter((link) => {
				if (link.colorCode === topoConfig.PATH_DRAW_COLOR || link.colorCode === topoConfig.HOST_PATH_DRAW_COLOR) {//TODO gray is for link colorCode being gone when switching tabs ( mapping)
					link.colorCode = "";
					return link;
				}
			});

			links.select("stop.start").transition().attr("stop-color", (d: tplLink) => d.getColorByBandwidth(d));

			links.select("stop.end").transition().attr("stop-color", (d: tplLink) => d.getColorByBandwidth(d['reverse']));

			links.select("path").transition().style("stroke", (d: tplLink) => d.getStrokeColor());

			this.svg.selectAll('.node').filter((node) => {
				if (node.colorCode === topoConfig.PATH_DRAW_COLOR || node.colorCode === "red" || node.colorCode === "green") {
					node.colorCode = "";
					return node;
				}
			}).select("rect.switch-rect-element").transition().style("stroke", topoConfig.defaultOpenFlowSwitchPeripheryColor).transition().style("fill", (d) => d.getFillColor());
		} else {
			this.logger.log("No link could be found to be reset");
		}

	}

	createPath() {
		this.pathSelectionType = pathType.PROACTIVE;
		this.resetPath();
		if (this.checkHosts('messages.no_host_to_create')) {
			this.createShowFlag = CREATESHOWENUM.CREATE;
			this.baseServices.uiHelper.notify(this.t('messages.select_source_host'), DIALOG_TYPES.INFO);
			this.pathSelectionFlag = true;
		}
	}

	showPath(pathType: pathType) {
		this.resetPath();
		if (this.checkHosts('messages.no_host_to_show')) {
			this.createShowFlag = CREATESHOWENUM.SHOW;
			this.baseServices.uiHelper.notify(this.t("messages.select_source_host"), DIALOG_TYPES.INFO);
			this.pathSelectionFlag = true;
			this.pathSelectionType = pathType;
		}
	}

	checkHosts(message_key) {
		let hosts = this.topologyData.data.nodes.filter(n => !!HOSTTYPE[n.type.toUpperCase()]);
		if (hosts.length == 0) {
			this.baseServices.uiHelper.notify(this.t(message_key), DIALOG_TYPES.WARNING);
			return false;
		}
		return true;
	}

	colorThePath(links?: Array<LinkDTO>) {
		//let links: Array<LinkDTO> = links;

		if (this.checkPathExistence(links)) {
			for (let i = 0; i < links.length; i++) {
				let currentLink = links[i];
				if (this.documentConverter.isNotNullOrUndefinedOrEmptyString(currentLink.destPort) && this.documentConverter.isNotNullOrUndefinedOrEmptyString(currentLink.srcPort)) {
					if (this.documentConverter.isNotNullOrUndefinedOrEmptyString(currentLink.destPort.id) && this.documentConverter.isNotNullOrUndefinedOrEmptyString(currentLink.srcPort.id)) {
						let linksToColor = this.svg.selectAll('.link').filter((link) => {
							if (this.documentConverter.isNotNullOrUndefinedOrEmptyString(link.target)) {
								if ((link.source.id == currentLink.srcPort.id && link.target.id == currentLink.destPort.id) || (link.target.id == currentLink.srcPort.id && link.source.id == currentLink.destPort.id)) {
									link.colorCode = topoConfig.PATH_DRAW_COLOR;
									return link;
								}
							}
						});

						if (linksToColor && linksToColor.length > 0 && linksToColor[0] && linksToColor[0].length > 0) {
							if (linksToColor.data()[0].linktype === "hostlink") {
								linksToColor.data()[0].colorCode = topoConfig.HOST_PATH_DRAW_COLOR;
								linksToColor.select("path").transition().style("stroke", topoConfig.HOST_PATH_DRAW_COLOR);
							} else {
								linksToColor.select("stop.start").transition().attr("stop-color", topoConfig.PATH_DRAW_COLOR);

								linksToColor.select("stop.end").transition().attr("stop-color", topoConfig.PATH_DRAW_COLOR);
							}
						}


						let that = this;
						this.svg.selectAll('.node').filter(function (node) {
							if (node.id == currentLink.srcPort.id || node.id == currentLink.destPort.id) {
								if (!(node.id == that.selectedSourceId || node.id == that.selectedTargetId)) {
									node.colorCode = topoConfig.PATH_DRAW_COLOR;
									return node;
								} else if (node.id == that.selectedSourceId) {
									d3.select(this).select("circle").transition().style("fill", "green").transition().style("stroke", "green");
									node.colorCode = "green";
								} else if (node.id == that.selectedTargetId) {
									d3.select(this).select("circle").transition().style("fill", "red").transition().style("stroke", "red");
									node.colorCode = "red";
								}
							}
						}).select("rect.switch-rect-element").classed("PathDrawFill", true).transition().style("fill", topoConfig.PATH_DRAW_COLOR).transition()
							.style("stroke", topoConfig.PATH_DRAW_COLOR);
					}
				}
			}
			this.baseServices.uiHelper.notify(this.t('messages.draw_path_success'), DIALOG_TYPES.SUCCESS);
			return true;
		}
	}

	checkPathExistence(links?: Array<LinkDTO>) {
		if (is.existy(links) && is.not.empty(links)) {
			return true;
		} else {
			this.baseServices.uiHelper.notify(this.t('messages.no_path_found'), DIALOG_TYPES.WARNING);
			this.resetPath();
			return false;
		}
	}

	drawPath(pathData?: ProactivePathPolicyResponse) {

		let request = this.baseServices.apiHelper.genRequest(<PathRequest>{
			data: <PathDTO> {
				version: 1,
				revision: 1,
				timestamp: this.baseServices.utils.genTimestamp(),
				topologyType: this.topologyData.type,
				topologyId: (this.topologyData.type === TOPOLOGYTYPE.PHYSICAL) ? '' : (this.documentConverter.isNotNullOrUndefined(this.topologyData.reqId) && this.topologyData.reqId.substring(0, 2) != "UI" ? this.topologyData.reqId : this.topologyData.name),
				appId: 'tr.com.argela.prognet.rest.resources.PathResource',
				srcHostId: this.selectedSourceId,
				dstHostId: this.selectedTargetId
			}
		});

		if (this.createShowFlag === CREATESHOWENUM.SHOW) {
			if (this.pathSelectionType === pathType.PROACTIVE) { //TODO 2931

				if (!($.isEmptyObject(this.selectedSourceId) && $.isEmptyObject(this.selectedTargetId) )) {
					let s =
						this.proactivePathsApi
							.proactiveGetPOST(request)
							.subscribe(
								(res: ProactivePathPolicyResponse) => {
									if (this.baseServices.uiHelper.processResponse(res)) {
										if (res.data && res.data.subPathList && res.data.subPathList.length > 0) {
											this.colorThePath(res.data.subPathList[res.data.selectedSubPathId].links);
											this.topologyData.alternativeProactivePaths = res.data.subPathList;
											this.topologyData.selectedAlternativeProactivePathIndex = res.data.selectedSubPathId;
											this.bindAlternativeProactivePathsPopover();
											// if (res.data.list[0].routeHopFrequency) {
											//     this.setPathRedrawTimeout(res.data.list[0]);
											// }
											return;
										} else {
											this.baseServices.uiHelper.notify(this.t('messages.no_path_found'), DIALOG_TYPES.WARNING);
										}
									}
								},
								(error: any) => {
									this.baseServices.uiHelper.processResponse(error._body); //JSON parsing is handled in the function now
									this.resetPath();
								}
							);
					this.subscriptions.push(s);
				} else {
					this.baseServices.uiHelper.notify(this.t('messages.select_source_dest'), DIALOG_TYPES.WARNING);
				}
			} else if (this.pathSelectionType === pathType.REACTIVE) {
				if (!($.isEmptyObject(this.selectedSourceId) && $.isEmptyObject(this.selectedTargetId) )) {

					let s =
						this.pathsApi
							.pathGetPOST(request)
							.subscribe(
								(res: PathListResponse) => {
									if (this.baseServices.uiHelper.processResponse(res)) {
										if (res.data && res.data.list && res.data.list.length > 0 && res.data.list[0].links && res.data.list[0].links.length > 0) {
											this.colorThePath(res.data.list[0].links);
										} else {
											this.baseServices.uiHelper.notify(this.t('messages.no_path_found'), DIALOG_TYPES.WARNING);
										}
									}
								},
								(error: any) => {
									this.baseServices.uiHelper.processResponse(error._body); //JSON parsing is handled in the function now
									this.resetPath();
								}
							);
					this.subscriptions.push(s);
				} else {
					this.baseServices.uiHelper.notify(this.t('messages.select_source_dest'), DIALOG_TYPES.WARNING);
				}
			} else {
				console.log("PATH TYPE ERROR");
			}
		} else {
			if (pathData && pathData.data && pathData.data.status && pathData.data.status === PPPSTATUS.ACTIVE) {
				this.baseServices.uiHelper.notify(this.t('messages.path_created'), DIALOG_TYPES.INFO);
				//info colorThePath function checks for link data existence
				this.colorThePath(pathData.data.subPathList[0].links);
				this.topologyData.alternativeProactivePaths = pathData.data.subPathList;
				this.bindAlternativeProactivePathsPopover();
			} else {
				this.baseServices.uiHelper.notify(this.t('messages.path_created_error_status'), DIALOG_TYPES.ERROR);
				this.resetPath();
			}
		}
	}

	bindAlternativeProactivePathsPopover() {
		this.topologyData.alternativeProactivePathPopoverDataReadyFlag = true;
	}

	addCursor() {
		this.resetSelectedElementState();
		this.topologyCreateModeFlag = true;
		let switchData: SwitchDTO = this.baseServices.apiHelper.genDTO({
			topologyId: this.topologyData.name,
			name: "S" + (d3.selectAll('rect.switch-rect-element').size() + 1).toString(),
			id: "S" + (d3.selectAll('rect.switch-rect-element').size() + 1).toString(),
			securityLevel: this.topologyData.switchSecurityLevel,
			supports: {},
			address: {},
			portInfo: {totalPorts: 1, activePorts: 1, deadPorts: 0, passivePorts: 0},
			deviceInfo: {model: "vSwitch", type: DEVICETYPE.VIRTUAL_SWITCH, vendor: "argl"},
			status: SWITCHSTATUS.UP
		});
		switchData["fixed"] = true;
		switchData["type"] = "Switch";
		switchData = new tplSwitch(switchData);

		this.selectedElementToEdit = switchData;
		this.changeDetector.detectChanges();

		this.cursor = this.svg.append("rect")
			.attr("height", topoConfig.switchHeightAndWidth * this.zoom.scale())
			.attr("width", topoConfig.switchHeightAndWidth * this.zoom.scale())
			.attr("x", topoConfig.switchXY * this.zoom.scale())
			.attr("y", topoConfig.switchXY * this.zoom.scale())
			.attr("rx", topoConfig.switchRx * this.zoom.scale())
			.attr("ry", topoConfig.switchRx * this.zoom.scale())
			.attr("transform", "translate(-100,-100)")
			.attr("class", "cursor");
		this.initAddMode(switchData);
	}

	initAddMode(data) {
		let that = this;
		this.svg.on('mousedown', function () {
			if (that.topologyCreateModeFlag) {
				let point = d3.mouse(this);
				if (that.cursor !== null) {
					data["x"] = (point[0] - that.translateCoefficient[0]) / that.zoom.scale();
					data["y"] = (point[1] - that.translateCoefficient[1]) / that.zoom.scale();
					that.topologyData.data.nodes.push(data);
					that.render(that.topologyData.data, renderType.UPDATE);
					that.cursorReset();
					that.addCursor();
				}
			}
		});
	}

	addLinkButton() {//html
		if (d3.selectAll(".node").data().length > 1) {
			this.resetSelectedElementState();
			this.baseServices.uiHelper.notify(this.t('messages.select_source_host'), DIALOG_TYPES.INFO);
			this.topologyCreateModeFlag = true;
			this.linkAddFlag = true;
			let link: LinkDTO = this.baseServices.apiHelper.genDTO({
				securityLevel: this.topologyData.linkSecurityLevel,
				status: LINKSTATUS.LIVE,
				destPort: {number: 1, address: {}},
				srcPort: {number: 1, address: {}},
				constraints: {
					availableBandwidth: this.topologyData.bandwidth,
					securityLevel: this.topologyData.linkSecurityLevel
				},
				jitter: this.topologyData.jitter,
				delay: this.topologyData.delay,
				loss: this.topologyData.packetLossRate,
				collision: this.topologyData.collision,
			});
			link["type"] = "Link";
			link["reverse"] = {
				securityLevel: this.topologyData.linkSecurityLevel,
				status: LINKSTATUS.LIVE,
				destPort: {number: 1, address: {}},
				srcPort: {number: 1, address: {}},
				constraints: {
					availableBandwidth: this.topologyData.bandwidth,
					securityLevel: this.topologyData.linkSecurityLevel
				},
				jitter: this.topologyData.jitter,
				delay: this.topologyData.delay,
				loss: this.topologyData.packetLossRate,
				collision: this.topologyData.collision,
				type: "Link"
			};
			link = new tplLink(link);
			this.selectedElementToEdit = link;
		} else {
			this.baseServices.uiHelper.notify($.t("common.messages.RETURN_STATUS.SERVER_ERROR"), DIALOG_TYPES.ERROR);
		}
	}

	filterOnlySwitchLinks(cLinks){ //removes links that are not between switchnodes
		return cLinks.filter((link: tplLink)=>{
			if( (link.source && link.source.nodetype === "switchnode") && (link.target && link.target.nodetype === "switchnode")){
				return link;
			}
		});
	}

	filterOnlySwitchDevies(nodes){
		return nodes.filter((node: tplSwitch)=>{
			if( node.nodetype === "switchnode" ){
				return node;
			}
		});
	}

	createAndSendVirtualTopology() {
		if (!this.topologyData.isMappedVersionShown) {
			this.topologyCreateModeFlag = false;
			let nodes = d3.selectAll(".node").data();
			let links = d3.selectAll(".link").data();
			let reverseLinks = [];
			let linksString = JSON.stringify(links);
			let cLinks = JSON.parse(linksString);

			for (let i = 0; i < cLinks.length; i++) {
				if ('reverse' in cLinks[i]) {
					cLinks[i]["reverse"].srcPort = cLinks[i]["reverse"].source ? cLinks[i]["reverse"].source : cLinks[i]["reverse"].srcPort; //MLAT-4089
					cLinks[i]["reverse"].destPort = cLinks[i]["reverse"].target ? cLinks[i]["reverse"].target : cLinks[i]["reverse"].destPort; //MLAT-4089
					reverseLinks.push(cLinks[i]["reverse"]);
					delete cLinks[i]["reverse"];
					delete cLinks[i]["type"];
				}
			}

			cLinks = cLinks.concat(reverseLinks);

			for (let j = 0; j < cLinks.length; j++) {
				cLinks[j].srcPort = cLinks[j].source ? cLinks[j].source : cLinks[j].srcPort; //MLAT-4089
				cLinks[j].destPort = cLinks[j].target ? cLinks[j].target : cLinks[j].destPort; //MLAT-4089
				if (!cLinks[j]["status"]) {
					cLinks[j]["status"] = LINKSTATUS.LIVE;
				}
			}

			cLinks = this.filterOnlySwitchLinks(cLinks);
			nodes = this.filterOnlySwitchDevies(nodes);

			let mTopologyData = <TopologyDTO> this.baseServices.apiHelper.genDTO({
				info: <TopologyInfoDTO> this.baseServices.apiHelper.genDTO({
					status: TOPOLOGYSTATUS.SUBMITTED,
					type: this.topologyData.type || TOPOLOGYTYPE.VIRTUAL,
					name: this.topologyData.name,
					vlanTag: this.topologyData.vlanTag,
					maximumNumberOfUser: this.topologyData.maximumNumberOfUser,
					energyConsumption: this.topologyData.energyConsumption,
					bandwidth: this.topologyData.bandwidth,
					switchSecurityLevel: this.topologyData.switchSecurityLevel,
					linkSecurityLevel: this.topologyData.linkSecurityLevel,
					jitter: this.topologyData.jitter,
					delay: this.topologyData.delay,
					packetLossRate: this.topologyData.packetLossRate,
					collision: this.topologyData.collision,
					ipAddressess: this.topologyData.ipAddressess,
					dnsServers: this.topologyData.dnsServers,
					macAddresses: this.topologyData.macAddresses,
					portRanges: this.topologyData.portRanges,
					topologyGateway: this.topologyData.topologyGateway,
					weight: 0,
					maxDepth: 0,
					id: this.topologyData.id,
					mvtnType: this.topologyData.mvtnType ? this.topologyData.mvtnType : MVTNTYPE.DYNAMIC
				}),
				switches: nodes,
				links: cLinks,
				hosts: [],
				controllers: []
			});

			let data = <MvtnRequest>this.baseServices.apiHelper.genRequest({
				data: <MvtnDTO> this.baseServices.apiHelper.genDTO({
					id: this.documentConverter.isNotNullOrUndefined(this.topologyData.reqId) && this.topologyData.reqId.substring(0, 2) != "UI" ? this.topologyData.reqId : null, //MLAT-4258
					excludedDevices: this.excludedDevicesForMvtn,
					name: this.topologyData.name,
					mvtnStatus: MVTNSTATUS.SUSPENDED,
					topologyData: mTopologyData,
					mvtnType: this.topologyData.mvtnType ? this.topologyData.mvtnType : MVTNTYPE.DYNAMIC,
					wanMvtnId: this.topologyData["wanMvtn"] ? this.topologyData["wanMvtn"].wanMvtnId : undefined
				})
			});
			data.data.topologyData.info.status = TOPOLOGYSTATUS.SUSPENDED;

			let mvtnReqData = <MvtnCreateRequest>this.baseServices.apiHelper.genRequest({
				data: <MvtnRequestDTO> this.baseServices.apiHelper.genDTO({
					id: (this.topologyData.tabType == CREATESHOWENUM.EDIT && this.topologyData.type === TOPOLOGYTYPE.VIRTUAL_REQUEST) ? this.topologyData.reqId : ( (this.topologyData && this.documentConverter.isNotNullOrUndefined(this.topologyData.reqId) && this.topologyData.reqId.substring(0, 2) != "UI" && this.topologyData.type !== TOPOLOGYTYPE.VIRTUAL) ? this.topologyData.reqId : null ),
					//id:  (this.topologyData.reqId && this.topologyData.reqId.substring(0, 2) == "UI") ? null : this.topologyData.reqId, //MLAT-4166
					mvtnId: (this.topologyData.tabType != CREATESHOWENUM.EDIT || this.topologyData.mvtnReqStatus == MVTNREQUESTSTATUS.CREATED) ? null : this.topologyData.id,
					mvtnName: this.topologyData.name,
					status: (this.topologyData.tabType == CREATESHOWENUM.EDIT) ? MVTNREQUESTSTATUS.EDITED : MVTNREQUESTSTATUS.CREATED,
					topologyData: mTopologyData,
					mvtnType: this.topologyData.mvtnType ? this.topologyData.mvtnType : MVTNTYPE.DYNAMIC
				})
			});
			mTopologyData.info.id = mTopologyData.info.id.substring(0, 2) == "UI" ? null : mTopologyData.info.id;

			let executeCallback = (res) => {
				if (this.baseServices.uiHelper.processResponse(res)) {
					if (res.data && res.data.topologyData
						&& res.data.topologyData.switches
						&& res.data.topologyData.switches.length > 0) {
						this.baseServices.uiHelper.notify($.t("common.messages.RETURN_STATUS.SUCCESS"), DIALOG_TYPES.SUCCESS);
						let tempId = this.topologyData.id;
						this.topologyData.id = res.data.topologyData.info.id;
						if (this.topologyData.tabType != CREATESHOWENUM.EDIT) {
							this.topologyCreateModeFlag = false;
						}
						this.onTopologyTrigger.emit({
							tempId: tempId,
							realData: res.data.topologyData,
							mode: this.topologyData.tabType
						});
					} else {
						this.baseServices.uiHelper.notify($.t("common.messages.RETURN_STATUS.SERVER_ERROR"), DIALOG_TYPES.ERROR);
					}
				} else {
					this.topologyCreateModeFlag = true;
					this.topologyData.status = TOPOLOGYSTATUS.DESIGNED;
				}
			};

			if (mTopologyData.info.type === TOPOLOGYTYPE.VIRTUAL_REQUEST || !this.p('phy_topo:manage')) {
				mvtnReqData.data.id = mvtnReqData.data.topologyData.info.type == TOPOLOGYTYPE.VIRTUAL ? null : mvtnReqData.data.id; //MLAT-4125
				let s =
					this.mvtnReqApi.mvtnRequestSavePOST(mvtnReqData).subscribe((res: MvtnCreateRequestResponse) => {
						executeCallback(res);
					});
				this.subscriptions.push(s);
			} else {
				let s =
					this.mvtnApi.virtualSavePOST(data).subscribe((res) => {
						executeCallback(res);
					});
				this.subscriptions.push(s);
			}
		} else {
			this.baseServices.uiHelper.notify(this.t("is_mapped_version_save_error"), DIALOG_TYPES.INFO);
		}
	}

	checkIfTabTypeIsEdit() {
		return (this.topologyData && this.topologyData.tabType == CREATESHOWENUM.EDIT);
	}

	//private permCache= {};
	checkButtonStatus(type, perm) {
		return ( (this.topologyData.type == TOPOLOGYTYPE.VIRTUAL) && (this.topologyData.status == type) && this.p(perm) ) || ( (this.topologyData.type === TOPOLOGYTYPE.VIRTUAL_REQUEST) && (this.topologyData.tabRequestStatus == type) && this.p(perm));
	}

	approveTopology(isApproved: boolean) {
		this.logger.info('Approve Topology ?:' + isApproved);
		let itm: MvtnDTO = this.baseServices.apiHelper.genDTO({
			id: this.topologyData.id,
			name: this.topologyData.name
		});

		this.mvtnController.approveTopology(itm, isApproved, (res) => {
			if (res.status == RETURNSTATUS.SUCCESS) {
				this.topologyData.status = res.data.mvtnStatus;
				this.sharedService.announceTopologyRefresh();
			}
		});
	}

	toggleTopology(isActivate: boolean) {
		this.logger.info('Activate Topology ?:' + isActivate);
		let itm: MvtnDTO = this.baseServices.apiHelper.genDTO({
			id: this.topologyData.id,
			name: this.topologyData.name
		});
		this.mvtnController.toggleTopology(itm, isActivate, (res) => {
			if (res.status == RETURNSTATUS.SUCCESS) {
				this.topologyData.status = res.data.mvtnStatus;
				this.sharedService.announceTopologyRefresh();
			}
		});
	}

	toggleTopologyReq(isActivate: boolean) { //TODO  merge with the function above
		this.logger.info('Activate Topology ?:' + isActivate);
		let itm: MvtnDTO = this.baseServices.apiHelper.genDTO({
			id: this.topologyData.reqId, //MLAT-4057
			name: this.topologyData.name
		});
		this.mvtnController.toggleTopologyReq(itm, isActivate, (res) => {
			if (res.status == RETURNSTATUS.SUCCESS) {
				this.topologyData.status = res.data.mvtnStatus;
				this.sharedService.announceTopologyRefresh();
			}
		});
	}

	resetSelectedElementState() {
		this.svg.selectAll('path').classed({"selected-path-link": false, "edit-selected-element": false});
		this.svg.selectAll('rect').classed({"selected-path-link": false, "edit-selected-element": false});
		this.selectedElementToEdit = null;
		this.cursorReset();
	}

	toggleSelectMode() {
		this.selectElementFlag = !this.selectElementFlag;
		if (!this.selectElementFlag) {
			this.resetSelectedElementState();
		}
	}

	deleteElement() {
		if (this.selectedElementToEdit && this.selectedElementToEdit.type) {
			switch (this.selectedElementToEdit.type) {
				case "Link":
					this.topologyData.data.links.splice(this.documentConverter.findLinkIndexByNodeIds(this.topologyData.data.links, [this.selectedElementToEdit.source.id, this.selectedElementToEdit.target.id]), 1);
					break;
				case "Switch":
					this.topologyData.data.links = this.documentConverter.removeAllLinksFromNode(this.selectedElementToEdit, this.topologyData.data.links, this.topologyData.data.nodes);
					this.topologyData.data.nodes.splice(DocumentConverter.getNodeIndex(this.topologyData.data.nodes, this.selectedElementToEdit), 1);
					break;
				default:
					confirm("Sorry, that type is not in the system yet!");
			}
            this.selectedElementToEdit = null;
            this.changeDetector.detectChanges();
			this.render(this.topologyData.data, renderType.UPDATE);
		} else {
			this.baseServices.uiHelper.notify("no element of that type");
		}
	}

	public isPathDisplayed(): boolean { //html
		return this.pathSelectionFlag || this.pathExistsDTOFlag.sourceId.length > 0; //this.createShowFlag !== CREATESHOWENUM.NONE;
	}

	nodeEditorShowHideFlag() {
		return this.topologyData && this.topologyData.type != TOPOLOGYTYPE.PHYSICAL && !this.topologyData.isMappedVersionShown && (this.topologyData.tabType == CREATESHOWENUM.CREATE || this.topologyData.tabType == CREATESHOWENUM.EDIT);
	}
}

// var PI = Math.acos(-1);
// var Vector2 = function (x, y) {
// 	this.X = x;
// 	this.Y = y;
// };
//
// Vector2.prototype.perpendicularClockwise = function () {
// 	return new Vector2(-this.Y, this.X);
// };
//
// Vector2.prototype.perpendicularCounterClockwise = function () {
// 	return new Vector2(this.Y, -this.X);
// };
//
// Vector2.prototype.getUnitVector = function () {
// 	var magnitude = this.magnitude();
// 	return new Vector2(this.X / magnitude, this.Y / magnitude);
// };
//
// Vector2.prototype.scale = function (ratio) {
// 	return new Vector2(ratio * this.X, ratio * this.Y);
// };
//
// Vector2.prototype.magnitude = function () {
// 	return this._magnitude || (this._magnitude = Math.sqrt(this.X * this.X + this.Y * this.Y));
// };
//
// Vector2.prototype.dot = function (vector) {
// 	return this._dot || (this._dot = (this.X * vector.X + this.Y * vector.Y));
// };
//
// Vector2.prototype.angle = function (vector) {
// 	if (vector) {
// 		return Math.round(180 * Math.acos(this.dot(vector) / (this.magnitude() * vector.magnitude())) / PI);
// 	}
// 	var angle = Math.atan2(this.Y, this.X);
// 	return Math.round(180 * (angle < 0 ? (2 * PI) + angle : angle) / PI);
// };
