/**
 * Created by omeroz on 7/7/2017.
 */

import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef} from "@angular/core";
import {BasePopupEditPage} from "../../../../commons/BasePopupEditPage/BasePopupEditPage";
import {PageServices} from "../../../PageServices";
import {DIALOG_TYPES} from "../../../UIHelper";
import {WanDomainDTO} from "../../../../swagger/WanDomainDTO";
import {WANDOMAINApi} from "../../../../swagger/WANDOMAINApi";
import {WanDomainListDTO} from "../../../../swagger/WanDomainListDTO";
import {WANDOMAINSTATUS} from "../../../../swagger/WANDOMAINSTATUS";
import {MultipleWanDomainListRequest} from "../../../../swagger/MultipleWanDomainListRequest";
import {MultipleWanDomainDTO} from "../../../../swagger/MultipleWanDomainDTO";

@Component({
	moduleId: module.id,
	selector: 'WanDomainMultiEditPopup',
	templateUrl: 'WanDomainMultiEditPopup.html',
})
export class WanDomainMultiEditPopup extends BasePopupEditPage<MultipleWanDomainDTO> implements OnInit, AfterViewInit, OnDestroy {

	allDomains: string;

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
		// this.allDomains = this.data.list.map((d) => {
		// 	return d.domainId + ";" + d.name;
		// })
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
		try {
			var req = <MultipleWanDomainListRequest>this.baseServices.apiHelper.genRequest({
				data: <MultipleWanDomainDTO>this.baseServices.apiHelper.genDTO({
					list: this.allDomains.split('\n').map((d) => {
						if(d.split(';').length > 2){
							throw new Error();
						}
						return <WanDomainDTO>this.baseServices.apiHelper.genDTO({
							name: d.split(';')[1],
							domainId: d.split(';')[0],
						})
					})
				})
			});
		} catch (e) {
			this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
			return;
		}

		// let request = this.baseServices.apiHelper.genRequest({
		// 	data: this.data
		// });

		this.wanDOMAINApi
			.wanConfigurationWanDomainBulkSavePOST(req)
			.subscribe(
				(res) => {
					if (this.baseServices.uiHelper.processResponse(res,
							this.t('messages.create_all_success', {dto: this.data}))) {
						this.close(true, res.data);
					}
				},
				(error: any) => {
					this.baseServices.uiHelper.processResponse(error._body);
				}
			);
	}
}

