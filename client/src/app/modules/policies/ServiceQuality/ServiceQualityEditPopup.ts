/**
 * Created by ekinca on 8.08.2016.
 */
import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ChangeDetectorRef, ViewChild} from "@angular/core";
import {PageServices} from "../../PageServices";
import {BasePopupEditPage} from "../../../commons/BasePopupEditPage/BasePopupEditPage";
import {MODAL_SIZE} from "../../ModalComponent";
import {PolicyApi} from "../../../swagger/PolicyApi";
import {ServiceActionRequest} from "../../../swagger/ServiceActionRequest";
import {ServiceActionDTO} from "../../../swagger/ServiceActionDTO";
import {DIALOG_TYPES} from "../../UIHelper";
import {DocumentConverter} from "../../DocumentConverter";
import {TopologyApi} from "../../../swagger/TopologyApi";
import {TopologyRequest} from "../../../swagger/TopologyRequest";
import {TopologyOptions} from "../../../swagger/TopologyOptions";
import {TOPOLOGYTYPE} from "../../../swagger/TOPOLOGYTYPE";
import {EnumHelper} from "../../../commons/EnumHelper";
import {BWUNIT} from "../../../swagger/BWUNIT";
import {PopPushHeaderInfo} from "../../../swagger/PopPushHeaderInfo";
import {RESERVEDPATH} from "../../../swagger/RESERVEDPATH";
import {NTOPROUTE} from "../../../swagger/NTOPROUTE";
import {MvtnDTO} from "../../../swagger/MvtnDTO";
import {MvtnApi} from "../../../swagger/MvtnApi";
import {ListOptions} from "../../../swagger/ListOptions";
import {GenericListRequest} from "../../../swagger/GenericListRequest";
import {SwitchDTO} from "../../../swagger/SwitchDTO";
import {FLOWBALANCECONSTRAINTTYPE} from "../../../swagger/FLOWBALANCECONSTRAINTTYPE";
import {isNullOrUndefined} from "util";
import {SfcTypeApi} from "../../../swagger/SfcTypeApi";
import {SfcTypeDTO} from "../../../swagger/SfcTypeDTO";
import {LINKTYPE} from "../../../swagger/LINKTYPE";

@Component({
	moduleId: module.id,
	selector: 'ServiceQualityEditPopup',
	templateUrl: './ServiceQualityEditPopup.html',
	providers: [PolicyApi, DocumentConverter, TopologyApi, SfcTypeApi],

})
export class ServiceQualityEditPopup extends BasePopupEditPage<ServiceActionDTO> implements OnInit, AfterViewInit, OnDestroy {

	public ReserveTypeList = EnumHelper.getNames(RESERVEDPATH).filter(v => v != "NONE");

	public bwunits = EnumHelper.getNames(BWUNIT);
	@ViewChild('bandWidth') bandWidth;
	public dscpFlag = true;
	public ipHeaderFlag = true;
	public trafficHoppingFlag = true;
	public encryptedPathCreationFlag = true;
	public vlanFlag = true;
	public pathReduceFlag = true;
	public internetFlag = true;
	public flowBalancerFlag = true;
	public sfcFlag = true;
	public channelFlag = true;

	public dscpBtn;
	public ipHeaderBtn;
	public trafficHoppingBtn;
	public encryptedPathCreationBtn;
	public vlanBtn;
	public pathReduceBtn;
	public internetBtn;
	public flowBalancerBtn;
	public sfcBtn;
	public channelBtn;

	public $selectBox;
	public currentRule;
	public rules = [];
	public switchList: Array<SwitchDTO> = [];
	public servicePolicyClasses;
	public trafficCatSelectBox;
	public $bwUnitSelectBox;
	public DEFAULT_HOP_PERIOD = 0;
	ntopRoutes = [];
	flowBalances = [];
	flowBalance: FLOWBALANCECONSTRAINTTYPE;
	public virtualNetworks:Array<MvtnDTO> = [];
	// public virtualNetwork: MvtnDTO;
	public typeList: Array<SfcTypeDTO> = []
	public typeName: string;
	public linkTypes = EnumHelper.getNames(LINKTYPE);

	public includedDevices;
	public excludedDevices;
	public hopIncludedDevices;
	public hopExcludedDevices;

	constructor(public policyApi: PolicyApi, public changeDetector: ChangeDetectorRef,
	            baseServices: PageServices, elementRef: ElementRef,
	            public dc: DocumentConverter, public topologyApi: TopologyApi, public mvtnApi: MvtnApi, public sfcTypeApi: SfcTypeApi) {
		super(baseServices, elementRef);
		this.modalSize = MODAL_SIZE.LARGE;
		this.setI18NKey('policy_management.service_quality.edit');
		this.data.maxBandwidthUnit = this.data.maxBandwidthUnit || BWUNIT.KBPS;
		this.setFormActions([
			this.createAction('dialogs.actions.save', () => {
				this.save();
			}),
			this.createAction('dialogs.actions.cancel', () => {
				this.close();
			})
		]);

		this.ntopRoutes = [NTOPROUTE.DEACTIVE, NTOPROUTE.ACTIVE];
		this.flowBalances = [FLOWBALANCECONSTRAINTTYPE.AVAILABLE_BANDWITDH_CONSTRAINT, FLOWBALANCECONSTRAINTTYPE.FLOW_COUNT_CONSTRAINT];
		if (this.isNewItem) {
			this.data.ntopRoute = NTOPROUTE.NONE;
			this.data.flowBalanceConstraintTypeList = [];
		};
	}

	ngOnInit() {
		super.ngOnInit();
		if (is.existy(this.data) && is.not.existy(this.data.mvtnId)) this.data.mvtnId = 0;
		if (is.existy(this.data) && is.not.existy(this.data.linkType)) this.data.linkType = 0;
		this.initVirtualNetworks();
		this.includedDevices = this.data.includedDevices;
		this.excludedDevices = this.data.excludedDevices;
		this.hopIncludedDevices = this.data.routingServices ? this.data.routingServices.includedDevices : [];
		this.hopExcludedDevices = this.data.routingServices ? this.data.routingServices.excludedDevices : [];

		if (!this.data.securityLevel)
			this.data.securityLevel = 1;
		if(this.data.flowBalanceConstraintTypeList && this.data.flowBalanceConstraintTypeList.length == 0)
			this.flowBalance = null;
	}

	ngOnChanges(e) {
		super.ngOnChanges(e);
	}

	ngAfterViewInit() {
		if (super.ngAfterViewInit()) {
			this.setJQueryField();
			this.fetchSwitches();
			this.fetchCategories();
			this.fetchSfcTypes();

			if (!this.isNewItem) {
				setTimeout(() => {

					if (this.data.changeHeaders && this.dc.isNotNullOrUndefined(this.data.changeHeaders.dhcpMark)) {
						this.dscpRule(false);
					}

					if (this.data.changeHeaders && (this.dc.isNotNullOrUndefined(this.data.changeHeaders.srcMac) || this.dc.isNotNullOrUndefined(this.data.changeHeaders.dstMac) || this.dc.isNotNullOrUndefined(this.data.changeHeaders.dstIp) || this.dc.isNotNullOrUndefined(this.data.changeHeaders.srcIp))) {
						this.ipHeaderRule(false);
					}

					if (this.data.changeHeaders && this.dc.isNotNullOrUndefined(this.data.changeHeaders.vlanId)) {
						this.vlanRule(false);
					}

					if (this.data.routingServices && this.data.routingServices.useRouteHopping) {
						this.trafficHoppingRule(false);
					}

					if (this.data.routingServices && this.data.routingServices.useSecureRouting) {
						this.encryptedPathCreationRule(false);
					}

					if (this.data.reservedPath && this.data.reservedPath != RESERVEDPATH.NONE) {
						//this.$pathReduceCheckbox.prop("checked", this.data.pathReduce);
						this.pathReduceRule(false);
					}

					if (this.data.ntopRoute && this.data.ntopRoute != NTOPROUTE.NONE) {
						this.internetRule(false);
					}

					if (this.data.flowBalanceConstraintTypeList && this.data.flowBalanceConstraintTypeList.length > 0) {
						this.flowBalancerRule(false);
					}

					if (this.data.sfcType) {
						this.sfcRule(false);
					}

					if(this.data.useControlChannel){
						this.channelRule(false);
					}

					this.selectMenu();
				}, 50);

				//changes
				// if(this.data.pathReduce){
				//     this.$pathReduceCheckbox.prop("checked", this.data.pathReduce);
				//
			}

			return true;
		}
		return false;
	}

	fetchCategories() {
		let req = this.baseServices.apiHelper.genRequest({
			options: {
				startPage: 0,
				"sortOptions": {"fieldName": "bandwidth", "isAscend": true}
			}
		});
		this.policyApi.policyServiceClassListPOST(req).subscribe((res) => {
			if (res && res.data && res.data.list) {
				this.servicePolicyClasses = res.data.list;
				for (let i = 0; i < this.servicePolicyClasses.length; i++) {
					this.trafficCatSelectBox.append("<option>" + this.servicePolicyClasses[i].serviceClassName + "</option>");
				}

				if (this.data.servicePolicyClass && this.data.servicePolicyClass.serviceClassName) {
					this.trafficCatSelectBox.val(this.data.servicePolicyClass.serviceClassName);
				}
			} else {
				this.servicePolicyClasses = [{serviceClassName: "-"}];
				this.trafficCatSelectBox.append("<option>" + this.servicePolicyClasses[0].serviceClassName + "</option>");
			}
			this.changeDetector.detectChanges();
		});

	}

	fetchSwitches() {
		let req = <TopologyRequest>this.baseServices.apiHelper.genRequest({
			options: this.baseServices.apiHelper.genDTO({
				type: TOPOLOGYTYPE.PHYSICAL
			})
		});

		this.topologyApi.topologyGetPOST(req).subscribe((res) => {
			if (this.baseServices.uiHelper.processResponse(res)) {
				if (res.data && res.data.switches && res.data.switches.length > 0) {
					this.switchList = res.data.switches;
					this.changeDetector.detectChanges();
				}
			}
		});
	}

	fetchSfcTypes(){
		let request = this.baseServices.apiHelper.genRequest({
			options: <ListOptions>{
				startPage: 0,
				pageSize: 0,
				sortOptions: {fieldName: 'sfcTypeName', isAscend: true}
			}
		});

		this.sfcTypeApi
            .sfcSfcTypeListPOST(<GenericListRequest>request)
            .subscribe(
				(res) => {
					if (this.baseServices.uiHelper.processResponse(res)) {
						this.typeList = res.data.list;
						this.changeDetector.detectChanges();
					}
				}
			);
	}

	setJQueryField() {
		this.$selectBox = $('#selectBox');
		this.$bwUnitSelectBox = $("#bw-unit-selection");
		this.trafficCatSelectBox = $('#traffic-category-selection');

		if (this.data.maxBandwidthUnit) {
			this.$bwUnitSelectBox.val(this.data.maxBandwidthUnit);
		}
	}

	hopIncludedDeviceChanged(devices) {
		this.data.routingServices.includedDevices = devices;
	}

	hopExcludedDeviceChanged(devices) {
		this.data.routingServices.excludedDevices = devices;
	}

	deleteRule() {
		$('#' + this.currentRule).remove();
		switch (this.currentRule) {
			case 'dscpRule':
				this.dscpFlag = true;
				delete this.data.changeHeaders.dhcpMark;
				this.dscpBtn.off('click');
				break;
			case 'ipHeaderRule':
				this.ipHeaderFlag = true;
				if (this.data.changeHeaders.dstIp) {
					delete this.data.changeHeaders.dstIp;
				}
				this.ipHeaderBtn.off('click');
				break;
			case 'trafficHoppingRule':
				this.trafficHoppingFlag = true;

				if (this.data.routingServices.useSecureRouting) {
					delete this.data.routingServices.useRouteHopping;
					delete this.data.routingServices.excludedDevices;
					delete this.data.routingServices.includedDevices;
					this.data.routingServices.hopCount = 0;
					this.data.routingServices.hopPeriod = this.DEFAULT_HOP_PERIOD;
				} else {
					delete this.data.routingServices;
				}
				this.trafficHoppingBtn.off('click');
				break;
			case 'encryptedPathCreationRule':
				this.encryptedPathCreationFlag = true;
				if (this.data.routingServices.useRouteHopping) {
					delete this.data.routingServices.useSecureRouting;
				} else {
					delete this.data.routingServices;
				}
				this.encryptedPathCreationBtn.off('click');
				break;
			case 'vlanRule':
				this.vlanFlag = true;
				this.vlanBtn.off('click');
				delete this.data.changeHeaders.vlanId;
				break;
			case 'pathReduceRule':
				this.pathReduceFlag = true;
				this.pathReduceBtn.off('click');
				this.data.reservedPath = RESERVEDPATH.NONE;
				break;
			case 'internetRule':
				this.internetFlag = true;
				this.internetBtn.off('click');
				this.data.ntopRoute = NTOPROUTE.NONE;
				break;
			case 'flowBalancerRule':
				this.flowBalancerFlag = true;
				this.flowBalancerBtn.off('click');
				this.data.flowBalanceConstraintTypeList = [];
				this.flowBalance = null;
				break;
			case 'sfcRule':
				this.sfcFlag = true;
				this.sfcBtn.off('click');
				delete this.data.sfcType;
				this.typeName = null;
				break;
			case 'channelRule':
				this.channelFlag = true;
				this.channelBtn.off('click');
				delete this.data.useControlChannel;
				break;
		}

		this.currentRule = null;
	}

	dscpRule(isSelect: boolean = true) {
		this.$selectBox.append("<option id='dscpRule'>" + this.t('actions.dscp_marking.title') + "</option>");
		this.dscpBtn = $('#dscpRule');
		this.dscpBtn.on('click', () => {
			this.currentRule = "dscpRule";
			this.changeDetector.detectChanges();
		});

		//if dhcp mark then dhcpMark will collide with ip header rule so need an if check
		if (!this.data.changeHeaders) {
			this.data.changeHeaders = {
				dhcpMark: 0
			};
		} else if (this.data.changeHeaders && !this.data.changeHeaders.dhcpMark) {
			this.data.changeHeaders.dhcpMark = 0;
		}

		this.dscpFlag = false;
		if (isSelect) this.selectMenu(this.dscpBtn);
	}

	vlanRule(isSelect: boolean = true) {
		this.$selectBox.append("<option id='vlanRule'>" + this.t('actions.vlan.title') + "</option>");
		this.vlanBtn = $('#vlanRule');
		this.currentRule = "vlanRule";
		this.vlanBtn.on('click', () => {
			this.currentRule = "vlanRule";
			this.changeDetector.detectChanges();
			$("[name='pushToPacket']", this.$container)
				.bootstrapSwitch('state', this.data.changeHeaders.vlanId.pushToPacket == true)
				.on('switchChange.bootstrapSwitch', (event, state) => {
					this.data.changeHeaders.vlanId.pushToPacket = !!state;
				});
			this.changeDetector.detectChanges();
		});

		//if vlanBtn mark then vlanBtn will collide with ip header rule so need an if check
		if (!this.data.changeHeaders) {
			this.data.changeHeaders = {
				vlanId: <PopPushHeaderInfo>{
					popValue: "",
					pushValue: "",
					pushToPacket: false
				}
			};
		} else if (this.data.changeHeaders && !this.data.changeHeaders.vlanId) {
			this.data.changeHeaders.vlanId = {
				popValue: "",
				pushValue: "",
				pushToPacket: false
			};
		}

		this.vlanFlag = false;
		if (isSelect) {
			this.selectMenu(this.vlanBtn);
		}
	}

	ipHeaderRule(isSelect: boolean = true) {
		this.$selectBox.append("<option id='ipHeaderRule'>" + this.t('actions.ip_header_change.title') + "</option>");
		this.ipHeaderBtn = $('#ipHeaderRule');
		this.ipHeaderBtn.on('click', () => {
			this.currentRule = "ipHeaderRule";
			this.changeDetector.detectChanges();
		});

		if (!this.data.changeHeaders) {
			this.data.changeHeaders = {
				dstIp: {
					ipv4: ""
				}
			};
		} else if (this.data.changeHeaders && !this.data.changeHeaders.dstIp) {
			this.data.changeHeaders.dstIp = {ipv4: ""};
		}

		this.ipHeaderFlag = false;
		if (isSelect) this.selectMenu(this.ipHeaderBtn);
	}

	trafficHoppingRule(isSelect: boolean = true) {
		this.$selectBox.append("<option id='trafficHoppingRule'>" + this.t('actions.traffic_hopping.title') + "</option>");
		this.trafficHoppingBtn = $('#trafficHoppingRule');
		this.trafficHoppingBtn.on('click', () => {
			this.currentRule = "trafficHoppingRule";
			this.changeDetector.detectChanges();
			setTimeout(() => {
				$("[name=hopIncluded]", this.$container).select2().trigger("change");
				$("[name=hopExcluded]", this.$container).select2().trigger("change");
			}, 50);
		});

		if (this.isNewItem || !this.data.routingServices) {
			this.data.routingServices = {
				hopPeriod: this.DEFAULT_HOP_PERIOD,
				hopCount: 0,
				includedDevices: [],
				excludedDevices: [],
				useRouteHopping: true
			};
		}

		if (!this.data.routingServices.useRouteHopping) this.data.routingServices.useRouteHopping = true;
		this.changeDetector.detectChanges();

		this.trafficHoppingFlag = false;
		if (isSelect) this.selectMenu(this.trafficHoppingBtn);
	}

	pathReduceRule(isSelect: boolean = true) {
		this.$selectBox.append("<option id='pathReduceRule'>" + this.t('actions.path_reduce.title') + "</option>");
		this.pathReduceBtn = $('#pathReduceRule');
		this.pathReduceBtn.on('click', () => {
			this.currentRule = "pathReduceRule";
			this.changeDetector.detectChanges();
		});

		if (!this.data.reservedPath || this.data.reservedPath == RESERVEDPATH.NONE) {
			this.data.reservedPath = RESERVEDPATH.ACTIVE;
		}

		this.pathReduceFlag = false;
		if (isSelect) this.selectMenu(this.pathReduceBtn);
	}

	flowBalancerRule(isSelect: boolean = true) {
		this.$selectBox.append("<option id='flowBalancerRule'>" + this.t('actions.flow_balancer.title') + "</option>");
		this.flowBalancerBtn = $('#flowBalancerRule');
		this.flowBalancerBtn.on('click', () => {
			this.currentRule = "flowBalancerRule";
			this.changeDetector.detectChanges();
		});

		if (this.data.flowBalanceConstraintTypeList.length == 0) {
			this.flowBalance = FLOWBALANCECONSTRAINTTYPE.AVAILABLE_BANDWITDH_CONSTRAINT;
		}else{
			this.flowBalance = this.data.flowBalanceConstraintTypeList[0];
		}

		this.flowBalancerFlag = false;
		if (isSelect) this.selectMenu(this.flowBalancerBtn);
	}

	sfcRule(isSelect: boolean = true) {
		this.$selectBox.append("<option id='sfcRule'>" + this.t('actions.sfc.title') + "</option>");
		this.sfcBtn = $('#sfcRule');
		this.sfcBtn.on('click', () => {
			this.currentRule = "sfcRule";
			this.changeDetector.detectChanges();
		});

		if (!this.data.sfcType) {
			this.typeName = this.typeList[0].sfcTypeName;
		}else{
			this.typeName = this.data.sfcType.sfcTypeName;
		}

		this.sfcFlag = false;
		if (isSelect) this.selectMenu(this.sfcBtn);
	}

	internetRule(isSelect: boolean = true) {
		this.$selectBox.append("<option id='internetRule'>" + this.t('actions.internet.title') + "</option>");
		this.internetBtn = $('#internetRule');
		this.internetBtn.on('click', () => {
			this.currentRule = "internetRule";
			this.changeDetector.detectChanges();
		});
		if (this.data.ntopRoute == NTOPROUTE.NONE) {
			this.data.ntopRoute = NTOPROUTE.ACTIVE;
		}
		this.internetFlag = false;
		if (isSelect) this.selectMenu(this.internetBtn);
	}

	encryptedPathCreationRule(isSelect: boolean = true) {
		this.$selectBox.append("<option id='encryptedPathCreationRule'>" + this.t('actions.encrypted_path.title') + "</option>");
		this.encryptedPathCreationBtn = $('#encryptedPathCreationRule');
		this.encryptedPathCreationBtn.on('click', () => {
			this.currentRule = "encryptedPathCreationRule";
			this.changeDetector.detectChanges();
		});
		this.encryptedPathCreationFlag = false;

		if (this.isNewItem || !this.data.routingServices) {
			this.data.routingServices = {
				useSecureRouting: true,
				hopPeriod: this.DEFAULT_HOP_PERIOD,
				hopCount: 0
			};
		}

		if (!this.data.routingServices.useSecureRouting) this.data.routingServices.useSecureRouting = true;

		if (isSelect) this.selectMenu(this.encryptedPathCreationBtn);
	}

	channelRule(isSelect: boolean = true) {
		this.$selectBox.append("<option id='channelRule'>" + this.t('actions.control_channel.title') + "</option>");
		this.channelBtn = $('#channelRule');
		this.channelBtn.on('click', () => {
			this.currentRule = "channelRule";
			this.changeDetector.detectChanges();
		});
		this.data.useControlChannel = true;
		this.channelFlag = false;
		if (isSelect) this.selectMenu(this.channelBtn);
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}

	initVirtualNetworks() {
		let request = this.baseServices.apiHelper.genRequest({
			options: <ListOptions>{
				startPage: 0,
				pageSize: 0,
				sortOptions: {fieldName: 'name', isAscend: true}
			}
		});

		this.mvtnApi
			.virtualListPOST(<GenericListRequest>request)
			.subscribe(
				(res) => {
					if (this.baseServices.uiHelper.processResponse(res)) {
						this.virtualNetworks = res.data.list;
						this.changeDetector.detectChanges();
					}
				}
			);
	}

	getservicePolicyClassDTOByName(name) {
		for (let j = 0; j < this.servicePolicyClasses.length; j++) {
			if (name == this.servicePolicyClasses[j].serviceClassName) {
				return this.servicePolicyClasses[j];
			}
		}
	}

	changeBandWith() {
		this.changeDetector.detectChanges();
		this.bandWidth.nativeElement.dispatchEvent(new Event('keyup'));
		this.bandWidth.nativeElement.dispatchEvent(new Event('change'));
	}

	save() {
		let form: any = $('form', this.elementRef.nativeElement)[0];
		if (!form.checkValidity()) {
			this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
			return;
		}
		this.submitted = true;
		this.data = this.baseServices.apiHelper.genDTO(this.data);

		if (!this.data.priority && this.data.priority.toString().length < 1 && this.data.priority < 1) {
			this.baseServices.uiHelper.notify(this.t("fields.priority.priority_error"), DIALOG_TYPES.ERROR);
			return;
		}

		if (this.data.routingServices && this.data.routingServices.useRouteHopping && this.data.routingServices.hopPeriod < this.DEFAULT_HOP_PERIOD) {
			this.baseServices.uiHelper.notify(this.t("actions.traffic_hopping.hop_period_error"), DIALOG_TYPES.ERROR);
			return;
		}

		this.data.securityLevel = Number($('#security-level-selection').val());
		this.data.maxBandwidthUnit = $('#bw-unit-selection').val();

		if (!this.encryptedPathCreationFlag) {
			if (!this.data.routingServices) this.data.routingServices = {};

			this.data.routingServices.useSecureRouting = true;
		}

		if (this.pathReduceFlag) {
			this.data.reservedPath = RESERVEDPATH.NONE;
		}

		if ($('#traffic-category-selection').val() != "-") {
			this.data.servicePolicyClass = this.getservicePolicyClassDTOByName($('#traffic-category-selection').val());
		}

		delete this.data.mvtnName;
		//INFO: backend exception work around, -yildiray
		if (this.data.mvtnId==0) delete this.data.mvtnId;

		if(this.data.linkType==0) delete this.data.linkType;

		if(this.flowBalance != null){
			if(this.data.flowBalanceConstraintTypeList.length>0){
				this.data.flowBalanceConstraintTypeList.pop();
			}
			this.data.flowBalanceConstraintTypeList.push(this.flowBalance);
		}
		if(this.typeName != null){
			this.data.sfcType = this.typeList.filter((l)=>{return this.typeName === l.sfcTypeName;})[0];
		}

		let request = this.baseServices.apiHelper.genRequest({
			data: <ServiceActionDTO> this.data
		});

		this.policyApi
			.policyServiceActionSavePOST(<ServiceActionRequest>request)
			.subscribe(
				(res) => {
					if (this.baseServices.uiHelper.processResponse(res, this.t(this.data.id ? 'messages.save_success' : 'messages.create_success', {dto: this.data}))) {
						this.close(true);
					}
				},
				(error: any) => {
					this.baseServices.uiHelper.processResponse(error._body);
				}
			);
	}

	public selectMenu($option ?: any) {
		$option = $option || this.$selectBox.find("option:first");
		setTimeout(() => {
			$option.attr("selected", "selected");
			$option.click();
		}, 300);
	}
}

