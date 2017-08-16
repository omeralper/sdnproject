/**
 * Created by omeroz on 7/20/2017.
 */

import {
	Component,
	OnInit,
	AfterViewInit,
	OnDestroy,
	OnChanges,
	ElementRef, ChangeDetectorRef
} from "@angular/core";
import {PageServices} from "../../../PageServices";
import {BasePopupEditPage} from "../../../../commons/BasePopupEditPage/BasePopupEditPage";
import {DIALOG_TYPES} from "../../../UIHelper";
import {MODAL_SIZE} from "../../../ModalComponent";
import {SdnipPolicyApi} from "../../../../swagger/SdnipPolicyApi";
import {SdnipPolicyDTO} from "../../../../swagger/SdnipPolicyDTO";
import {SdnipPolicySaveRequest} from "../../../../swagger/SdnipPolicySaveRequest";
import {SdnipStatementDTO} from "../../../../swagger/SdnipStatementDTO";
import {SdnipActionDTO} from "../../../../swagger/SdnipActionDTO";
import {SdnipConditionDTO} from "../../../../swagger/SdnipConditionDTO";
import {SDNIPMATCHTYPE} from "../../../../swagger/SDNIPMATCHTYPE";
import {SDNIPROUTEACTION} from "../../../../swagger/SDNIPROUTEACTION";
import {SdnipDefinedSetDTO} from "../../../../swagger/SdnipDefinedSetDTO";
import {SdnipStatementListDTO} from "../../../../swagger/SdnipStatementListDTO";
import {SdnipMatchSetDTO} from "../../../../swagger/SdnipMatchSetDTO";

@Component({
	moduleId: module.id,
	selector: 'BgpPolicyEditPopup',
	templateUrl: './BgpPolicyEditPopup.html',
})
export class BgpPolicyEditPopup extends BasePopupEditPage<SdnipPolicyDTO> implements OnInit, AfterViewInit, OnChanges, OnDestroy {

	selectedStatement: SdnipStatementDTO = <SdnipStatementDTO>{};

	constructor(public sdnipPolicyApi: SdnipPolicyApi,
	            public changeDetector: ChangeDetectorRef,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(baseServices, elementRef);

		this.modalSize = MODAL_SIZE.LARGE;
		this.setI18NKey('bgp_filter.policy.edit');

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
		if (this.isNewItem)
			this.addStatement();
	}

	ngOnChanges(e) {
		super.ngOnChanges(e);
	}

	ngAfterViewInit() {
		if (super.ngAfterViewInit()) {
			this.selectStatement(this.data.statementList.list[0]);
			return true;
		} else
			return false;
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}

	addStatement() {
		if ($.isEmptyObject(this.data.statementList)) {
			this.data.statementList = <SdnipStatementListDTO>{
				list: []
			}
		}
		let newStatement: SdnipStatementDTO = <SdnipStatementDTO>this.baseServices.apiHelper.genDTO({
			name: this.t('newStatementName'),
			action: <SdnipActionDTO>{
				routeAction: SDNIPROUTEACTION.REJECT
			},
			condition: <SdnipConditionDTO>this.baseServices.apiHelper.genDTO({
				prefixMatchSet: <SdnipMatchSetDTO> this.baseServices.apiHelper.genDTO({
					definedSet: <SdnipDefinedSetDTO>{},
					matchType: SDNIPMATCHTYPE.ANY
				}),
				neighborMatchSet: <SdnipMatchSetDTO>  this.baseServices.apiHelper.genDTO({
					definedSet: <SdnipDefinedSetDTO>{},
					matchType: SDNIPMATCHTYPE.ANY
				}),
				asPathMatchSet: <SdnipMatchSetDTO> this.baseServices.apiHelper.genDTO({
					definedSet: <SdnipDefinedSetDTO>{},
					matchType: SDNIPMATCHTYPE.ANY
				})
			})
		});
		this.data.statementList.list.push(newStatement);
		this.changeDetector.detectChanges();

	}

	selectStatement(statement: SdnipStatementDTO, e?: any) {
		this.selectedStatement = statement;
		$(".list-group", this.elementRef.nativeElement).find(".active").removeClass("active");
		if (e)
			e.target.classList.add("active");
		else
			$(".list-group a", this.elementRef.nativeElement).last().addClass("active");
	}

	removeStatement(statement: SdnipStatementDTO) {
		if (this.data.statementList.list.length == 1) {
			return;
		}
		this.data.statementList.list.splice(this.data.statementList.list.indexOf(statement), 1);
		if (this.selectedStatement == statement)
			this.selectStatement(this.data.statementList.list[0]);
	}

	save() {
		let form: any = $('form', this.elementRef.nativeElement)[0];
		if (!form.checkValidity()) {
			this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
			return;
		}

		this.data.statementList.list.forEach(s => {
			$.isEmptyObject(s.condition.asPathMatchSet.definedSet) && delete s.condition.asPathMatchSet;
			$.isEmptyObject(s.condition.neighborMatchSet.definedSet) && delete s.condition.neighborMatchSet;
			$.isEmptyObject(s.condition.prefixMatchSet.definedSet) && delete s.condition.prefixMatchSet;
		});

		this.data = this.baseServices.apiHelper.genDTO(this.data);
		let request: SdnipPolicySaveRequest = this.baseServices.apiHelper.genRequest({
			data: this.data
		});

		this.sdnipPolicyApi
			.sdnipPolicySavePOST(request)
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

