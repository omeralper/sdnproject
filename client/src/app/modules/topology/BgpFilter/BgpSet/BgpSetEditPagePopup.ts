/**
 * Created by omeroz on 7/20/2017.
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
import {SdnipDefinedSetDTO} from "../../../../swagger/SdnipDefinedSetDTO";
import {SdnipPolicyApi} from "../../../../swagger/SdnipPolicyApi";
import {SDNIPDEFINEDSETTYPE} from "../../../../swagger/SDNIPDEFINEDSETTYPE";
import {SdnipDefinedSetSaveRequest} from "../../../../swagger/SdnipDefinedSetSaveRequest";
import {SdnipSetItemListDTO} from "../../../../swagger/SdnipSetItemListDTO";
import {SdnipSetItemDTO} from "../../../../swagger/SdnipSetItemDTO";
import {SdnipPrefixDTO} from "../../../../swagger/SdnipPrefixDTO";
import {SdnipPrefixListDTO} from "../../../../swagger/SdnipPrefixListDTO";

@Component({
	moduleId: module.id,
	selector: 'BgpSetEditPagePopup',
	templateUrl: './BgpSetEditPagePopup.html',
})
export class BgpSetEditPagePopup extends BasePopupEditPage<SdnipDefinedSetDTO> implements OnInit, AfterViewInit, OnChanges, OnDestroy {

	SDNIPDEFINEDSETTYPE = SDNIPDEFINEDSETTYPE;
	list: string = "";
	newPrefix: SdnipPrefixDTO = <SdnipPrefixDTO>{};

	constructor(public changeDetector: ChangeDetectorRef,
	            public sdnipPolicyApi: SdnipPolicyApi,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(baseServices, elementRef);

		this.modalSize = MODAL_SIZE.NORMAL;
		this.setI18NKey('bgp_filter.set.edit');
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

	addPrefix() {
		if (!this.data.prefixList)
			this.data.prefixList = <SdnipPrefixListDTO>{
				list: []
			};
		this.data.prefixList.list.push(this.newPrefix);
		this.newPrefix = <SdnipPrefixDTO>{};
	}


	removePrefix(prefix: SdnipPrefixDTO) {
		let i = this.data.prefixList.list.indexOf(prefix);
		this.data.prefixList.list.splice(i, 1);
		if (this.data.prefixList.list.length == 0)
			delete this.data.prefixList;
	}


	save() {
		let form: any = $('form', this.elementRef.nativeElement)[0];
		if (!form.checkValidity()) {
			this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
			return;
		}

		if (this.data.definedSetType == SDNIPDEFINEDSETTYPE.PREFIX) {
			if (!$.isEmptyObject(this.newPrefix)) {
				this.addPrefix();
			}
			delete this.data.list;
		} else if (this.data.definedSetType != SDNIPDEFINEDSETTYPE.PREFIX) {
			this.data.list.list = this.list.split('\n').map(line => <SdnipSetItemDTO>{item: line});
			delete this.data.prefixList;
		}

		this.data = this.baseServices.apiHelper.genDTO(this.data);
		let request: SdnipDefinedSetSaveRequest = this.baseServices.apiHelper.genRequest({
			data: this.data
		});

		this.sdnipPolicyApi
			.sdnipPolicyDefinedSetSavePOST(request)
			.subscribe(
				(res) => {
					if (this.baseServices.uiHelper.processResponse(res,
							this.t(this.data.id ? 'messages.save_success' : 'messages.create_success', {dto: this.data}))) {

						this.close(true);
					}
				},
				(error: any) => {
					this.baseServices.uiHelper.processResponse(error._body);
				}
			);
	}
}

