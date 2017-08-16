/**
 * Created by yildirayme on 28.04.2016.
 */
import {OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef} from "@angular/core";
import {BasePage} from "../BasePage";
import {PageServices} from "../../modules/PageServices";
import {Action} from "../Action";
import {MODAL_SIZE} from "../../modules/ModalComponent";
import {DIALOG_TYPES} from "../../modules/UIHelper";
import {UI_PAGE_TYPE} from "../enums/UI_PAGE_TYPE";

export abstract class BasePopupPage<T> extends BasePage implements OnInit, OnDestroy, OnChanges, AfterViewInit {

	public data: T;

	popupActions: Array<Action> = [];
	formActions: Array<Action>;

	modalSize: MODAL_SIZE = MODAL_SIZE.NORMAL;

	public get pageType(): UI_PAGE_TYPE {
		return UI_PAGE_TYPE.POPUP;
	}

	public BASE_POPUP_ACTIONS = [
		new Action('common.buttons.help', () => {
			window.open(this.t('help_page'), '_blank');
		}),
		new Action('common.buttons.close', () => {
			this.close();
		})
	];

	public BASE_FORM_ACTIONS = [
		new Action('dialogs.actions.close', () => {
			this.close();
		}),
	];

	constructor(public baseServices: PageServices, public elementRef: ElementRef) {
		super(baseServices, elementRef);
		//clone the passed object, because we dont want to modify the original
		this.data = $.extend(true, {}, this.baseServices.sharedService.getData());

		this.setPopupActions(this.BASE_POPUP_ACTIONS);
		this.setFormActions(this.BASE_FORM_ACTIONS);
		// let help = this.getHelpLink();
		// if (help)
		// 	this.setPopupActions([new Action("common.buttons.help", () => {
		// 		window.open(help, '_blank');
		// 	})]);


		$(document).on('keyup', "textarea", (e) => {
			e.stopPropagation();
		});

		$(document).on('keyup.popup', (e) => {
			if (e.keyCode === 27) {
				this.close();
			}
			if (e.keyCode === 13) {
				if (this.formActions.length > 0)
					this.formActions[0].execute();
			}
		});
	}


	ngOnInit() {
		super.ngOnInit();
	}

	ngOnChanges(e) {
		super.ngOnChanges(e);
	}

	ngAfterViewInit() {
		if (super.ngAfterViewInit()) {

			return true;
		}
		return false;

	}

	ngOnDestroy() {
		$(document).off('keyup.popup');
		$(document).off('keyup', "textarea");
		super.ngOnDestroy();
	}

	close(isSuccess: boolean = false, data?: any) {
		this.baseServices.sharedService.hideModal(isSuccess, data);
	}

	public getHelpLink(): string {
		// return "http://www.google.com?q=" + this.i18nkey;
		return this.t("help_page");
	}

	setPopupActions(actions: Array<Action>) {
		let combinedActions = actions.concat(this.popupActions);
		let filteredActions = this.checkActionPermissions(combinedActions);

		this.logger.debug('setPopupActions', {actions: actions, combined: combinedActions, filtered: filteredActions});

		this.popupActions = filteredActions;
	}

	setFormActions(actions: Array<Action>) {
		let combinedActions = actions;
		let filteredActions = this.checkActionPermissions(combinedActions);

		this.logger.debug('setFormActions', {actions: actions, combined: combinedActions, filtered: filteredActions});

		this.formActions = filteredActions;
	}

	showError() {
		this.baseServices.uiHelper.alert(this.i18n.t('common.message.data_load_error'), DIALOG_TYPES.ERROR, () => {
			this.close(false);
		});
	}

}
