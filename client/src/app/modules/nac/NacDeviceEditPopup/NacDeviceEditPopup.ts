/**
 * Created by yildirayme on 28.04.2016.
 */
import {Component, ChangeDetectorRef, OnInit, AfterViewInit, OnDestroy, ElementRef, ViewChild} from "@angular/core";
import {PageServices} from "../../PageServices";
import {NacDeviceApi} from "../../../swagger/NacDeviceApi";
import {NACSTATUS} from "../../../swagger/NACSTATUS";
import {NacDeviceDTO} from "../../../swagger/NacDeviceDTO";
import {NacDeviceRequest} from "../../../swagger/NacDeviceRequest";
import {HOSTTYPE} from "../../../swagger/HOSTTYPE";
import {EnumHelper} from "../../../commons/EnumHelper";
import {ListOptions} from "../../../swagger/ListOptions";
import {GenericListRequest} from "../../../swagger/GenericListRequest";
import {NacUserApi} from "../../../swagger/NacUserApi";
import {MODAL_SIZE} from "../../ModalComponent";
import {NacGroupApi} from "../../../swagger/NacGroupApi";
import {TopologyApi} from "../../../swagger/TopologyApi";
import {SwitchDTO} from "../../../swagger/SwitchDTO";
import {DIALOG_TYPES} from "../../UIHelper";
import {UI_SECURITY_LEVELS} from "../../../commons/enums/UI_SECURITY_LEVELS";
import {MvtnDTO} from "../../../swagger/MvtnDTO";
import {MvtnApi} from "../../../swagger/MvtnApi";
import {BasePopupEditPage} from "../../../commons/BasePopupEditPage/BasePopupEditPage";

@Component({
	moduleId: module.id,
	selector: 'NacDeviceEditPopup',
	templateUrl: './NacDeviceEditPopup.html',
	providers: [NacDeviceApi, NacUserApi, NacGroupApi, TopologyApi, MvtnApi],
})
export class NacDeviceEditPopup extends BasePopupEditPage<NacDeviceDTO> implements OnInit, AfterViewInit, OnDestroy {
	public securityLevels = EnumHelper.getValues(UI_SECURITY_LEVELS);
	public statuses = EnumHelper.getNames(NACSTATUS);
	public types = EnumHelper.getNames(HOSTTYPE);
	public nacGroups;
	public switches: Array<SwitchDTO> = [];
	public dataTableData = [];
	public ports = [];
	public virtualNetworks;
	public virtualNetwork: MvtnDTO;

	@ViewChild('switchSelector') public switchSelector;
	@ViewChild('portSelector') public portSelector;

	constructor(public changeDetector: ChangeDetectorRef,
	            public nacGroupApi: NacGroupApi,
	            public devicesApi: NacDeviceApi,
	            public topologyApi: TopologyApi,
	            public mvtnApi: MvtnApi,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(baseServices, elementRef);
		this.setI18NKey('nac_management.devices.edit');
		this.modalSize = MODAL_SIZE.LARGE;
		this.data.securityLevel = this.data.securityLevel || 1;
		this.data.status = this.data.status || NACSTATUS.ACTIVE;

		this.setFormActions([
			this.createAction('dialogs.actions.save', () => {
				this.save();
			}),
			this.createAction('dialogs.actions.cancel', () => {
				this.close();
			})
		]);

	}

	ngOnInit() {
		super.ngOnInit();
		this.fetchNacGroup();
		this.fetchVirtualNetworks();
	}

	ngOnChanges(e) {
		super.ngOnChanges(e);
	}

	ngAfterViewInit() {
		return super.ngAfterViewInit();
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}

	fetchVirtualNetworks() {
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
					this.virtualNetworks = res.data.list;
					this.changeDetector.detectChanges();
				}
			);
	}


	public fetchNacGroup() {
		let request = this.baseServices.apiHelper.genRequest({
			options: <ListOptions>{
				startPage: 0,
				pageSize: 0,
				sortOptions: {fieldName: 'name', isAscend: true},
			}
		});

		this.nacGroupApi
			.groupListPOST(<GenericListRequest>request)
			.subscribe(
				(res) => {
					this.nacGroups = res.data.list;
					if (this.data && this.data.nacGroup)
						res.data.list.forEach((item) => {
							if (item.id == this.data.nacGroup.id)
								this.data.nacGroup = item;
						});
					this.changeDetector.detectChanges();
				}
			);
	}

	save() {
		let form: any = $('form', this.elementRef.nativeElement)[0];
		if (!form.checkValidity()) {
			this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
			return;
		}

		this.data = this.baseServices.apiHelper.genDTO(this.data);

		this.data.isExempt = this.data.isExempt == undefined ? false : this.data.isExempt;
		if (typeof this.data.nacGroup !== "object") {
			delete this.data.nacGroup;
		}

		this.data.securityLevel = parseInt(this.data.securityLevel.toString(), 10);
		this.data.accessPortList = this.data.accessPortList || [];
		this.data.ipv4 = this.data.ipv4 || '';
		if (!this.data.id)
			this.data.created = this.data.created || new Date();

		delete this.data.mvtnName;
		if (this.data.mvtnId + "" == "")
			delete this.data.mvtnId;

		let request: NacDeviceRequest = <NacDeviceRequest>this.baseServices.apiHelper.genRequest({
			data: <NacDeviceDTO> this.data
		});

		this.devicesApi
			.deviceSavePOST(request)
			.subscribe(
				(res) => {
					if (this.baseServices.uiHelper.processResponse(res, this.t(this.data.id ? 'messages.save_success' : 'messages.create_success', {dto: this.data}))) {
						this.close(true, res.data);
					}
				},
				(error: any) => {
					this.baseServices.uiHelper.processResponse(error._body);
				}
			);
	}
}

