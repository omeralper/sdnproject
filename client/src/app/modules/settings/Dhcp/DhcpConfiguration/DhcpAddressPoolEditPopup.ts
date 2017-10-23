/**
 * Created by omeroz on 5/24/2017.
 */
import {
	Component,
	ChangeDetectorRef,
	OnInit,
	AfterViewInit,
	OnDestroy,
	OnChanges,
	ElementRef,
	ViewChild
} from "@angular/core";
import {BasePopupEditPage} from "../../../../commons/BasePopupEditPage/BasePopupEditPage";
import {PageServices} from "../../../PageServices";
import {MODAL_SIZE} from "../../../ModalComponent";
import {DIALOG_TYPES} from "../../../UIHelper";
import {DhcpIpPoolDTO} from "../../../../swagger/DhcpIpPoolDTO";
import {DhcpApi} from "../../../../swagger/DhcpApi";

@Component({
	moduleId: module.id,
	selector: 'DhcpAddressPoolEditPopup',
	templateUrl: './DhcpAddressPoolEditPopup.html',
})

export class DhcpAddressPoolEditPopup extends BasePopupEditPage<DhcpIpPoolDTO> implements OnInit, AfterViewInit, OnChanges, OnDestroy {

	constructor(public dhcpApi: DhcpApi,
	            public changeDetector: ChangeDetectorRef,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(baseServices, elementRef);

		this.modalSize = MODAL_SIZE.NORMAL;
		this.setI18NKey('settings.dhcp.configuration.edit');

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


	save() {
		let form: any = $('form', this.elementRef.nativeElement)[0];
		if (!form.checkValidity()) {
			this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
			return;
		}

		this.data.domainId = +this.data.domainId;
		this.data.ipAddress = this.data.ipAddress.split('/')[0];
		let request = this.baseServices.apiHelper.genRequest({
			data: this.baseServices.apiHelper.genDTO(this.data)
		});

		this.dhcpApi
			.dhcpcentralwanDhcpCentalWanWebIpPoolSavePOST(request)
			.subscribe(
				(res) => {
					if (this.baseServices.uiHelper.processResponse(res,
							this.t(this.data.id ? 'messages.save_success' : 'messages.create_success', {dto: this.data}))) {

						this.close(true, res.data);
					}
				},
				(error: any) => {
					this.baseServices.uiHelper.processResponse(error._body); //JSON parsing is handled in the function now
				}
			);
	}
}