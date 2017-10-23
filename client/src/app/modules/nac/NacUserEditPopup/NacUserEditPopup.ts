/**
 * Created by yildirayme on 28.04.2016.
 */
import {Component, OnInit, AfterViewInit, OnDestroy, OnChanges, ElementRef, ChangeDetectorRef} from "@angular/core";
import {PageServices} from "../../PageServices";
import {BasePopupEditPage} from "../../../commons/BasePopupEditPage/BasePopupEditPage";
import {NacUserApi} from "../../../swagger/NacUserApi";
import {NacGroupApi} from "../../../swagger/NacGroupApi";
import {NACSTATUS} from "../../../swagger/NACSTATUS";
import {NacUserDTO} from "../../../swagger/NacUserDTO";
import {NacUserRequest} from "../../../swagger/NacUserRequest";
import {DIALOG_TYPES} from "../../UIHelper";
import {MODAL_SIZE} from "../../ModalComponent";
import {NacGroupDTO, NacGroupDTODef} from "../../../swagger/NacGroupDTO";
import {NacProfileEditPopup} from "../NacProfileEditPopup/NacProfileEditPopup";
import {NACENTITYTYPE} from "../../../swagger/NACENTITYTYPE";
import {NacUserDeviceEditPopup} from "../NacUserDeviceEditPopup/NacUserDeviceEditPopup";
import {UI_SECURITY_LEVELS} from "../../../commons/enums/UI_SECURITY_LEVELS";
import {GenericListRequest} from "../../../swagger/GenericListRequest";
import {ListOptions} from "../../../swagger/ListOptions";
import {NacDeviceDTO} from "../../../swagger/NacDeviceDTO";
import {Action} from "app/commons/Action";
import {NacUserEditPopupDictionary} from "./dictionary";
import {GenericSearchRequest} from "../../../swagger/GenericSearchRequest";
import {SearchOptions} from "../../../swagger/SearchOptions";
@Component({
	moduleId: module.id,
	selector: 'NacUserEditPopup',
	templateUrl: './NacUserEditPopup.html',
	providers: [NacUserApi, NacGroupApi],
})
export class NacUserEditPopup extends BasePopupEditPage<NacUserDTO> implements OnInit, AfterViewInit, OnChanges, OnDestroy {

	UI_SECURITY_LEVELS = UI_SECURITY_LEVELS;
	NACSTATUS = NACSTATUS;
	NACENTITYTYPE = NACENTITYTYPE;
	nacGuestGroups: Array<NacGroupDTO> = [];
	nacStaffGroups: Array<NacGroupDTO> = [];
	accessTimeStart;
	accessTimeEnd;
	originalModel: NacUserDTO = <NacUserDTO>{};

	constructor(public changeDetector: ChangeDetectorRef,
	            public usersApi: NacUserApi,
	            public nacGroupApi: NacGroupApi,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(baseServices, elementRef);
		this.modalSize = MODAL_SIZE.LARGE;
		this.addI18NBundle('mykey', NacUserEditPopupDictionary);

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

		this.data.securityLevel = this.data.securityLevel || 1;
		this.data.status = this.data.status || NACSTATUS.ACTIVE;
		this.data.userType = this.data.userType || NACENTITYTYPE.STAFF;

		if (this.data.accessTimeStart)
			this.accessTimeStart = new Date(this.data.accessTimeStart.toString()).toLocaleDateString();
		if (this.data.accessTimeEnd)
			this.accessTimeEnd = new Date(this.data.accessTimeEnd.toString()).toLocaleDateString();

		this.initNacGroup();
		this.userTypeChanged(this.data.userType);

		this.originalModel = $.extend({}, this.data);
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

	newNacGroup() {
		let openNacGroup = () => {
			this.baseServices.sharedService.showModal(NacProfileEditPopup);
		};
		if (this.isThereUnsavedData()) {
			this.baseServices.uiHelper.confirm($.t('common.messages.unsaved_data'), (selected: Action) => {
				if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
					openNacGroup();
				}
			});
		} else {
			openNacGroup();
		}
	}

	gotoUserDeviceEdit() {
		let openDeviceEdit = () => {
			this.baseServices.sharedService.showModal(NacUserDeviceEditPopup, {
				nacUserId: this.data.id,
				nacDevice: <NacDeviceDTO>{},
				byodNacGroup: this.data.byodNacGroup
			});
		};

		if (this.isThereUnsavedData()) {
			this.baseServices.uiHelper.confirm($.t('common.messages.unsaved_data'), (selected: Action) => {
				if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
					openDeviceEdit();
				}
			});
		} else {
			openDeviceEdit();
		}
	}

	isThereUnsavedData() {
		for (let key in this.originalModel) {
			if ((typeof this.originalModel[key] != "object" && this.originalModel[key] != this.data[key] ) ||
				(typeof this.originalModel[key] == "object" && this.originalModel[key].id != this.data[key].id))
				return true;
		}
		return false;
	}

	userTypeChanged(userType: NACENTITYTYPE) {
		this.data.userType = userType;
		if (userType == NACENTITYTYPE.GUEST) {
			this.changeDetector.detectChanges();
			$('.date-picker', this.$container).datepicker({
				orientation: "center",
				autoclose: true,
				format: 'dd.mm.yyyy'
			}).on('changeDate', (event) => {
				if ($(event.target).hasClass('accessTimeEnd'))
					this.data.accessTimeEnd = event.date;
				if ($(event.target).hasClass('accessTimeStart'))
					this.data.accessTimeStart = event.date;
			});
		}
		this.changeDetector.detectChanges();
	}


	initNacGroup() {
		let request = this.baseServices.apiHelper.genRequest({
			options: <SearchOptions>{
				startPage: 0,
				pageSize: 0,
				fields: Object.keys(NacGroupDTODef.fields),
				sortOptions: {fieldName: 'name', isAscend: true},
			}
		});

		let s =
			this.nacGroupApi
				.groupSearchPOST(<GenericSearchRequest>request)
				.subscribe(
					(res) => {
						if (this.baseServices.uiHelper.processResponse(res)) {
							this.nacGuestGroups = res.data.list.filter((group) => {
								return group.groupType == NACENTITYTYPE.GUEST;
							});

							this.nacStaffGroups = res.data.list.filter((group) => {
								return group.groupType == NACENTITYTYPE.STAFF;
							});

							res.data.list.forEach((item) => {
								if (this.data.nacGroup && item.id == this.data.nacGroup.id)
									this.data.nacGroup = item;
								if (this.data.byodNacGroup && item.id == this.data.byodNacGroup.id)
									this.data.byodNacGroup = item;
							});

							this.changeDetector.detectChanges();
						}
					}
				);
		this.subscriptions.push(s);
	}

	save() {
		let form: any = $('form', this.elementRef.nativeElement)[0];
		if (!form.checkValidity()) {
			this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
			return;
		}
		this.submitted = true;
		this.data = this.baseServices.apiHelper.genDTO(this.data);
		this.data.securityLevel = this.data.securityLevel || 1;
		this.data.securityLevel = parseInt(this.data.securityLevel.toString(), 10);
		this.data.image = "";

		this.isNewItem && (this.data.created = this.data.created || new Date());

		if (this.data.userType == NACENTITYTYPE.GUEST)
			delete this.data.byodNacGroup;

		if (this.data.userType == NACENTITYTYPE.STAFF) {
			delete this.data.accessTimeEnd;
			delete this.data.accessTimeStart;
		}

		let request: NacUserRequest = <NacUserRequest>this.baseServices.apiHelper.genRequest({
			data: <NacUserDTO> this.data
		});

		this.usersApi
			.userSavePOST(request)
			.subscribe(
				(res) => {
					if (this.baseServices.uiHelper.processResponse(res,
							this.t(this.data.id ? 'messages.save_success' : 'messages.create_success', {dto: this.data}))) {
						this.close(true, res.data);
					}
				},
				(error: any) => {
					this.baseServices.uiHelper.processResponse(error._body);
				}
			);
	}

}

