/**
 * Created by omeroz on 01.08.2016.
 */
import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ChangeDetectorRef} from "@angular/core";
import {PageServices} from "../../PageServices";
import {ListOptions} from "../../../swagger/ListOptions";
import {GenericListRequest} from "../../../swagger/GenericListRequest";
import {NacGroupApi} from "../../../swagger/NacGroupApi";
import {NacDeviceDTO} from "../../../swagger/NacDeviceDTO";
import {NacDeviceApi} from "../../../swagger/NacDeviceApi";
import {MODAL_SIZE} from "../../ModalComponent";
import {NacUserDeviceDTO} from "../../../swagger/NacUserDeviceDTO";
import {NacUserDeviceRequest} from "../../../swagger/NacUserDeviceRequest";
import {NacUserDeviceApi} from "../../../swagger/NacUserDeviceApi";
import {NacGroupDTO} from "../../../swagger/NacGroupDTO";
import {DIALOG_TYPES} from "../../UIHelper";
import {BasePopupEditPage} from "../../../commons/BasePopupEditPage/BasePopupEditPage";

@Component({
	moduleId: module.id,
	selector: 'NacDeviceListPopup',
	templateUrl: './NacUserDeviceEditPopup.html',
	providers: [NacDeviceApi, NacGroupApi, NacUserDeviceApi]
})

export class NacUserDeviceEditPopup extends BasePopupEditPage<NacUserDeviceDTO> implements OnInit, AfterViewInit, OnDestroy {
	public devices: Array<NacDeviceDTO>;
	public byodNacGroups: Array<NacGroupDTO>;

	constructor(public nacDeviceApi: NacDeviceApi,
	            public nacGroupApi: NacGroupApi,
	            public userDevicesApi: NacUserDeviceApi,
	            baseServices: PageServices,
	            elementRef: ElementRef,
	            public changeDetector: ChangeDetectorRef) {
		super(baseServices, elementRef);

		this.modalSize = MODAL_SIZE.LARGE;
		this.setI18NKey('nac_management.devicesOfUser.edit');

		this.setFormActions([
			this.createAction('dialogs.actions.save', () => {
				this.save();
			}),
			this.createAction('dialogs.actions.close', () => {
				this.close();
			})
		]);

	}

	ngOnInit() {
		super.ngOnInit();
		this.initDevices();
		this.initNacGroup();
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


	deviceChanged(newObj) {
		this.data.nacDevice = newObj;
		$('.device').removeClass('validation-error')
		this.changeDetector.detectChanges();
	}


	public initNacGroup() {
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
					this.byodNacGroups = res.data.list;
					this.data.byodNacGroup &&
					(this.data.byodNacGroup = this.byodNacGroups.find((group) => {
						return group.id == this.data.byodNacGroup.id;
					}));
					this.changeDetector.detectChanges();
				}
			);
	}


	public initDevices() {
		let request = this.baseServices.apiHelper.genRequest({
			options: <ListOptions>{
				startPage: 0,
				pageSize: 0,
				sortOptions: {fieldName: 'name', isAscend: true},
			}
		});

		this.nacDeviceApi
			.deviceListPOST(<GenericListRequest>request)
			.subscribe(
				(res) => {
					this.devices = res.data.list;
					this.devices = this.devices.sort((a, b) => {
						return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
					});
					this.data.nacDevice &&
					(this.data.nacDevice = this.devices.find((device) => {
						return device.id == this.data.nacDevice.id;
					}));
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
		if (this.data.has8021xSupport == undefined)
			this.data.has8021xSupport = false;


		let deviceRequest: NacUserDeviceRequest =
			<NacUserDeviceRequest>this.baseServices.apiHelper.genRequest({
				data: <NacUserDeviceDTO> this.data,
			});
		this.userDevicesApi
			.userDeviceSavePOST(deviceRequest)
			.subscribe(
				(res) => {
					if (this.baseServices.uiHelper.processResponse(res,
							this.t('messages.save_success', {dto: this.data}))) {
						this.close(true);
					}
				},
				(error: any) => {
					this.baseServices.uiHelper.processResponse(error._body);
				}
			);
	}
}

