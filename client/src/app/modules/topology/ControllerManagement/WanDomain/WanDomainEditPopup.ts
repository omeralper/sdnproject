/**
 * Created by omeroz on 6/15/2017.
 */

import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef} from "@angular/core";
import {BasePopupEditPage} from "../../../../commons/BasePopupEditPage/BasePopupEditPage";
import {PageServices} from "../../../PageServices";
import {DIALOG_TYPES} from "../../../UIHelper";
import {WanDomainDTO} from "../../../../swagger/WanDomainDTO";
import {WANDOMAINApi} from "../../../../swagger/WANDOMAINApi";


@Component({
	moduleId: module.id,
	selector: 'WanDomainEditPopup',
	templateUrl: 'WanDomainEditPopup.html',
})
export class WanDomainEditPopup extends BasePopupEditPage<WanDomainDTO> implements OnInit, AfterViewInit, OnDestroy {


	constructor(public wanDOMAINApi: WANDOMAINApi,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(baseServices, elementRef);
		this.setI18NKey('network_vis.controller_management.wanDomain.edit');

		this.setFormActions([
			this.createAction('dialogs.actions.ok', () => {
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
		let request = this.baseServices.apiHelper.genRequest({
			data: this.baseServices.apiHelper.genDTO(this.data)
		});

		this.wanDOMAINApi
			.wanConfigurationWanDomainSavePOST(request)
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
