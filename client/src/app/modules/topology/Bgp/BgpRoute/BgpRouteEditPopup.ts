/**
 * Created by omeroz on 7/24/2017.
 */
import {
	Component,
	OnInit,
	AfterViewInit,
	OnDestroy,
	OnChanges,
	ElementRef,
	ChangeDetectorRef
} from "@angular/core";
import {PageServices} from "../../../PageServices";
import {BasePopupEditPage} from "../../../../commons/BasePopupEditPage/BasePopupEditPage";
import {DIALOG_TYPES} from "../../../UIHelper";
import {MODAL_SIZE} from "../../../ModalComponent";
import {SdnipApi} from "../../../../swagger/SdnipApi";
import {SdnipRouteDTO} from "../../../../swagger/SdnipRouteDTO";
import {SdnipRouteSaveRequest} from "../../../../swagger/SdnipRouteSaveRequest";

@Component({
	moduleId: module.id,
	selector: 'BgpRouteEditPopup',
	templateUrl: './BgpRouteEditPopup.html',
})
export class BgpRouteEditPopup extends BasePopupEditPage<any> implements OnInit, AfterViewInit, OnChanges, OnDestroy {

	routes: string = "";
	ipRegex = new RegExp('^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\/([1-9]|[1-2][0-9]|3[0-2])$');

	constructor(public changeDetector: ChangeDetectorRef,
	            public sdnipApi: SdnipApi,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(baseServices, elementRef);

		this.modalSize = MODAL_SIZE.NORMAL;
		this.setI18NKey('bgp_management.route.edit');

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

		if (!this.routes.split('\n').some(r => this.ipRegex.test(r))) {
			this.baseServices.uiHelper.notify(this.t('ip_error'), DIALOG_TYPES.WARNING);
			return;
		}

		let request: SdnipRouteSaveRequest = this.baseServices.apiHelper.genRequest({
			data: this.routes.split('\n')
		});

		this.sdnipApi
			.sdnipRouterRouteSavePOST(request)
			.subscribe(
				(res) => {
					if (this.baseServices.uiHelper.processResponse(res,
							this.t('messages.create_success', {dto: this.data}))) {

						this.close(true);
					}
				},
				(error: any) => {
					this.baseServices.uiHelper.processResponse(error._body);
				}
			);
	}
}


