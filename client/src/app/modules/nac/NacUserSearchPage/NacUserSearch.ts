/**
 * Created by omeroz on 27.09.2016.
 */
import {
	Component,
	OnInit,
	OnDestroy,
	OnChanges,
	AfterViewInit,
	ElementRef,
	ChangeDetectorRef
} from "@angular/core";
import {PageServices} from "../../PageServices";
import {BasePage} from "../../../commons/BasePage";
import {NacAuthApi} from "../../../swagger/NacAuthApi";
import {GenericIdRequest} from "../../../swagger/GenericIdRequest";
import {NacSessionDTO} from "../../../swagger/NacSessionDTO";
import {NacProfileEditPopup} from "../NacProfileEditPopup/NacProfileEditPopup";
import {NacUserEditPopup} from "../NacUserEditPopup/NacUserEditPopup";
import {NacDeviceEditPopup} from "../NacDeviceEditPopup/NacDeviceEditPopup";
import {DIALOG_TYPES} from "../../UIHelper";
import {ModalResult} from "../../SharedService";

@Component({
	moduleId: module.id,
	selector: 'NacUserSearch',
	templateUrl: './NacUserSearch.html',
	providers: [NacAuthApi]
})
export class NacUserSearch extends BasePage implements OnInit, OnDestroy, OnChanges, AfterViewInit {

	result: NacSessionDTO = <NacSessionDTO>{};
	ip;
	state;

	constructor(public nacSessionApi: NacAuthApi,
	            baseServices: PageServices,
	            public elementRef: ElementRef,
	            public changeDetector: ChangeDetectorRef) {
		super(baseServices, elementRef);
		this.setI18NKey('nac_management.users.search');

	}

	ngOnChanges(e) {
		super.ngOnChanges(e);
	}

	ngOnInit() {
		super.ngOnInit();

	}

	ngAfterViewInit() {
		if (super.ngAfterViewInit()) {
			return true;
		}
		return false;
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}


	gotoEditUser() {
		this.baseServices.sharedService.showModal(NacUserEditPopup, this.result.nacUserDTO, () => {
			this.searchUser(true);
		});
	}

	gotoEditNacGroup() {
		this.baseServices.sharedService.showModal(NacProfileEditPopup, this.result.nacGroupDTO, () => {
			this.searchUser(true);
		});
	}

	gotoEditDevice() {
		this.baseServices.sharedService.showModal(NacDeviceEditPopup, this.result.nacDeviceDTO, (result: ModalResult) => {
			if (result.isSuccess)
				this.searchUser(true);
		});
	}

	deviceIcon;
	deviceColor;

	searchUser(isRefresh: boolean = false) {
		let form: any = $('form', this.elementRef.nativeElement)[0];
		if (!form.checkValidity()) {
			this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
			return;
		}
		this.ip = this.ip.replace('_', '');
		let request = this.baseServices.apiHelper.genRequest({
			id: this.ip
		});

		let s =
			this.nacSessionApi
				.getsessionPOST(<GenericIdRequest>request)
				.subscribe(
					(res) => {
						this.result = res.data;
						this.changeDetector.detectChanges();
						if (this.baseServices.uiHelper.processResponse(res)) {
							if (res.data) {
								if (!isRefresh)
									this.baseServices.uiHelper.notify(this.t('messages.search_success'), DIALOG_TYPES.SUCCESS);
								this.deviceIcon = $.t('enums.HOSTTYPE.' + this.result.nacDeviceDTO.type + '.icon');
								this.deviceColor = $.t('enums.HOSTTYPE.' + this.result.nacDeviceDTO.type + '.color');
								this.state = this.t('enums.' + this.result.stateId);
							}
							else
								this.baseServices.uiHelper.notify(this.t('messages.search_fail'), DIALOG_TYPES.INFO);

						}
					}
				);
		this.subscriptions.push(s);
	}
}
