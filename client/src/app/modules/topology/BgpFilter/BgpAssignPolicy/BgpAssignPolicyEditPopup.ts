/**
 * Created by omeroz on 7/21/2017.
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
import {SdnipPolicyApi} from "../../../../swagger/SdnipPolicyApi";
import {SdnipDefinedSetSaveRequest} from "../../../../swagger/SdnipDefinedSetSaveRequest";
import {SdnipPolicyAssignmentDTO} from "../../../../swagger/SdnipPolicyAssignmentDTO";
import {SdnipPolicyDTO, SdnipPolicyDTODef} from "../../../../swagger/SdnipPolicyDTO";
import {SDNIPROUTEACTION} from "../../../../swagger/SDNIPROUTEACTION";
import {SdnipPolicyListResponse} from "../../../../swagger/SdnipPolicyListResponse";
import {SdnipPolicyAssignmentSaveRequest} from "../../../../swagger/SdnipPolicyAssignmentSaveRequest";

@Component({
	moduleId: module.id,
	selector: 'BgpAssignPolicyEditPopup',
	templateUrl: './BgpAssignPolicyEditPopup.html',
})
export class BgpAssignPolicyEditPopup extends BasePopupEditPage<SdnipPolicyAssignmentDTO> implements OnInit, AfterViewInit, OnChanges, OnDestroy {
	SDNIPROUTEACTION = SDNIPROUTEACTION;
	policies: Array<CustomSdnipPolicyDTO> = [];

	constructor(public changeDetector: ChangeDetectorRef,
	            public sdnipPolicyApi: SdnipPolicyApi,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(baseServices, elementRef);

		this.modalSize = MODAL_SIZE.NORMAL;
		this.setI18NKey('bgp_filter.assign_policy.edit');

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
		this.fetchPolicies();
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


	fetchPolicies() {
		let req = this.baseServices.apiHelper.genFullListRequest(null, Object.keys(SdnipPolicyDTODef.fields));
		this.sdnipPolicyApi
			.sdnipPolicySearchPOST(req)
			.subscribe((res: SdnipPolicyListResponse) => {
				this.policies = res.data.list.map(p => $.extend(true, p, {
						selected: this.data.policyList.list.some(t => t.id == p.id)
					})
				)
			});
	}

	selectPolicy(policy, e) {
		policy.selected = !policy.selected;
		e.stopPropagation();
	}

	save() {
		let form: any = $('form', this.elementRef.nativeElement)[0];
		if (!form.checkValidity()) {
			this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
			return;
		}
		this.data.policyList.list = this.policies
			.filter(p => p.selected);

		this.data = this.baseServices.apiHelper.genDTO(this.data);
		let request: SdnipPolicyAssignmentSaveRequest = this.baseServices.apiHelper.genRequest({
			data: this.data
		});

		this.sdnipPolicyApi
			.sdnipPolicyAssignmentSavePOST(request)
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

export interface CustomSdnipPolicyDTO extends SdnipPolicyDTO {
	selected: boolean;
}

