/**
 * Created by ekinca on 23.11.2016.
 */
import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ChangeDetectorRef, ViewChild} from "@angular/core";
import {PageServices} from "../../PageServices";
import {BasePopupEditPage} from "../../../commons/BasePopupEditPage/BasePopupEditPage";
import {NetworkDeviceDTO, NetworkDeviceDTODef} from "../../../swagger/NetworkDeviceDTO";
import {NetworkDeviceApi} from "../../../swagger/NetworkDeviceApi";
import {NetworkDeviceRequest} from "../../../swagger/NetworkDeviceRequest";
import {NETWORKDEVICETYPE} from "../../../swagger/NETWORKDEVICETYPE";
import {ListOptions} from "../../../swagger/ListOptions";
import {GenericListRequest} from "../../../swagger/GenericListRequest";
import {TopologyApi} from "../../../swagger/TopologyApi";
import {DIALOG_TYPES} from "../../UIHelper";
import {DocumentConverter} from "../../DocumentConverter";
import {PORTSTATE} from "../../../swagger/PORTSTATE";
import {NETWORKDEVICESTATUS} from "../../../swagger/NETWORKDEVICESTATUS";
import {MODAL_SIZE} from "../../ModalComponent";
import {NetworkDeviceDetails} from "./NetworkDeviceDetails";

@Component({
	moduleId: module.id,
	selector: 'NetworkDeviceEditPopup',
	templateUrl: './NetworkDeviceEditPopup.html',
	providers: [NetworkDeviceApi, TopologyApi, DocumentConverter],

})
export class NetworkDeviceEditPopup extends BasePopupEditPage<NetworkDeviceDTO> {
	@ViewChild(NetworkDeviceDetails) networkDetailsComponent: NetworkDeviceDetails;

	NETWORKDEVICETYPE = NETWORKDEVICETYPE;
	public vlanid;
	public ipv4;
	public mac;
	public switches;
	public switchListBox;
	public portNo;
	public types = [];
	public deviceIp;
	public switchDTOList = [];
	$redundancyDevicesSelectBox;
	selectedDevice: NetworkDeviceDTO;

	constructor(public dc: DocumentConverter, public changeDetector: ChangeDetectorRef, public topologyApi: TopologyApi, baseServices: PageServices, elementRef: ElementRef, public gwApi: NetworkDeviceApi) {
		super(baseServices, elementRef);
		this.setI18NKey('settings.networkDevice.edit');
		this.modalSize = MODAL_SIZE.LARGE;

		this.logger.debug('Data received:', this.data);

		let dto = {
			version: 1,
			revision: 1,
			timestamp: new Date(),
			port: {
				number: 1,
				address: {}
			},
			ip: "192.168.1.1",
			mac: "",
			type: NETWORKDEVICETYPE.ACCESS_POINT,
			status: NETWORKDEVICESTATUS.UP,
			vlanid: 1
		};

		this.data.redundancyDevices = this.data.redundancyDevices && this.data.redundancyDevices.length > 0 ? this.data.redundancyDevices : [dto];
		this.selectedDevice = this.data.redundancyDevices[0];

		this.setFormActions([
			this.createAction('dialogs.actions.save', () => {
				this.logger.debug('Save Traffic Category clicked');
				this.save();
			}),
			this.createAction('dialogs.actions.cancel', () => {
				this.logger.debug('Cancel clicked');
				this.close();
			})
		]);

		for (let enumMember in NETWORKDEVICETYPE) {
			if (isNaN(parseInt(enumMember))) {
				this.types.push(enumMember);
			}
		}
	}

	ngOnInit() {
		super.ngOnInit();
		if (this.data.ip)
			this.deviceIp = this.data.ip;
	}

	ngOnChanges(e) {
		super.ngOnChanges(e);
	}

	ngAfterViewInit() {
		if (super.ngAfterViewInit()) {
			this.switchListBox = $('#switch-list');

			if (this.isNewItem) {
				this.data.type = this.types[0];
			} else {
				this.vlanid = (this.data.vlanid == -1) ? "" : this.data.vlanid;
				this.mac = this.data.mac;
				this.ipv4 = this.data.ip;
				this.portNo = this.data.port.number;
			}

			let request = this.baseServices.apiHelper.genRequest({
				options: <ListOptions>{
					startPage: 0,
					pageSize: 0,
					sortOptions: {fieldName: 'name', isAscend: true},
				}
			});

			let s =
				this.topologyApi
					.topologySwitchListPOST(<GenericListRequest>request)
					.subscribe(
						(res) => {
							if (this.baseServices.uiHelper.processResponse(res)) {
								this.switchDTOList = res.data.list;
								for (let i = 0; i < this.switchDTOList.length; i++) {
									if (this.switchDTOList[i].name) {
										this.switchListBox.append("<option>" + this.switchDTOList[i].name + "</option>");
									} else {
										this.switchListBox.append("<option>" + this.switchDTOList[i].id + "</option>");
									}
								}

								this.switches = this.switchDTOList.map((v) => {
									return v.id;
								});
								if (!this.isNewItem) {
									if (this.data.port && this.data.port.id && this.switches.indexOf(this.data.port.id) > -1) {
										for (let i = 0; i < this.switchDTOList.length; i++) {
											if (this.switchDTOList[i].id === this.data.port.id) {
												if (this.switchDTOList[i].name) {
													this.switchListBox.val(this.switchDTOList[i].name);
													i = this.switchDTOList.length;
												} else {
													this.switchListBox.val(this.data.port.id);
													i = this.switchDTOList.length;
												}
											}
										}
									} else {
										this.baseServices.uiHelper.notify(this.t("messages.no_relevant_switch"), DIALOG_TYPES.ERROR);
									}
								}

								this.changeDetector.detectChanges();
							}
						}
					);
			this.subscriptions.push(s);
			return true;
		}
		return false;
	}

	addDevice() {
		let newDevice = {
			version: 1,
			revision: 1,
			timestamp: new Date(),
			port: {
				number: 1,
				address: {}
			},
			ip: "192.168.1.1",
			mac: "",
			type: NETWORKDEVICETYPE.ACCESS_POINT,
			status: NETWORKDEVICESTATUS.UP,
			vlanid: 1
		};

		this.data.redundancyDevices.push(newDevice);
		this.selectedDevice = this.data.redundancyDevices[this.data.redundancyDevices.length - 1];
		this.changeDetector.detectChanges();
	}

	selectDevice(ev) {
		for (let i = 0; i < this.data.redundancyDevices.length; ++i) {
			if (ev.ip == this.data.redundancyDevices[i].ip) {
				this.selectedDevice = this.data.redundancyDevices[i];
				this.changeDetector.detectChanges();
				break;
			}
		}
	}

	deleteDevice(device, ev) {
		if (this.data.redundancyDevices && this.data.redundancyDevices.length && this.data.redundancyDevices.length > 0) {
			for (let i = 0; i < this.data.redundancyDevices.length; ++i) {
				if (device.ip == this.data.redundancyDevices[i].ip) {
					this.data.redundancyDevices.splice(i, 1);
					if (this.data.redundancyDevices.length > 0) {
						this.selectedDevice = this.data.redundancyDevices[this.data.redundancyDevices.length - 1];
					}
					this.changeDetector.detectChanges();
					break;
				}
			}
		}
	}

	typeChange(event) {
		this.data.type = event;
		this.changeDetector.detectChanges();
	}

	updateSelectedDevices(event) {
		console.log(event);
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}

	save() {

		if (this.data.type != NETWORKDEVICETYPE.VRR && this.data.redundancyDevices) {
			delete this.data.redundancyDevices;
		}

		let form: any = $('form', this.elementRef.nativeElement)[0];
		if (!form.checkValidity()) {
			this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
			return;
		}

		if (this.data.type === NETWORKDEVICETYPE.VRR && !this.networkDetailsComponent.checkNetworkDeviceValidity()) {
			this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
			return;
		}
		// check parameters
		this.logger.debug('Save new data');

		// this.data.version = this.data.version || 1;
		// this.data.revision = this.data.revision || 0;
		// this.data.timestamp = this.data.timestamp || new Date();
		var tempId = "";
		if (this.switches.indexOf(this.switchListBox.val()) >= 0) {
			tempId = this.switchListBox.val();
		}
		else {
			for (let i = 0; i < this.switchDTOList.length; i++) {
				if (this.switchDTOList[i].name && (this.switchDTOList[i].name === this.switchListBox.val())) {
					tempId = this.switchDTOList[i].id;
					i = this.switchDTOList.length;
				}
			}
		}

		if (this.isNewItem) {
			this.data.port = {
				id: tempId,
				states: [PORTSTATE.LIVE],
				number: this.portNo,
				address: {
					ipv4: "0",
					mac: "0",
					ipv6: "0"
				}
			};
		} else {
			this.data.port.id = tempId;
			this.data.port.number = this.portNo;
		}

		if (this.data.type == NETWORKDEVICETYPE.VRR) {
			//let val = this.$redundancyDevicesSelectBox.val();
			//let devices = this.pickRedundancyDevices(val);
			//this.data.redundancyDevices = devices;
		}

		this.data.ip = this.deviceIp;
		//vlanid double check for null value
		this.data.vlanid = (!this.dc.isNotNullOrUndefinedOrEmptyString(this.vlanid)) ? -1 : this.vlanid;
		if (this.data.redundancyDevices && this.data.redundancyDevices.length > 0) {
			for (let r = 0; r < this.data.redundancyDevices.length; ++r) {
				if ((this.data.redundancyDevices[r].vlanid as any) == "") {
					this.data.redundancyDevices[r].vlanid = -1;
				}
			}
		}

		let request = this.baseServices.apiHelper.genRequest({
			data: <NetworkDeviceDTO> this.data
		});
		request.data.id = request.data.id == "tplNoid" ? null : request.data.id;

		this.gwApi
			.networkDeviceSavePOST(<NetworkDeviceRequest>request)
			.subscribe(
				(res) => {
					if (this.baseServices.uiHelper.processResponse(res, this.t(this.data.id ? 'messages.save_success' : 'messages.create_success', {dto: this.data}))) {
						this.close(true, this.data);
					} else {
						this.close();
					}
				},
				(error: any) => {
					this.baseServices.uiHelper.processResponse(error._body); //JSON parsing is handled in the function now
				}
			);
	}

}

