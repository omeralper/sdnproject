/// <reference path="../../typings/customdts.d.ts" />
import {AfterViewInit, ElementRef, OnChanges, OnDestroy, OnInit} from "@angular/core";
import {PageServices} from "../modules/PageServices";
import {Action, ActionCallback} from "./Action";
import {UI_PAGE_TYPE} from "./enums/UI_PAGE_TYPE";
import {BaseComponent, i18nOptions} from "./BaseComponent";
declare var is: Is;


export abstract class BasePage extends BaseComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {

    public title: string;
    public subTitle: string;
    public icon: string;

    public get pageType(): UI_PAGE_TYPE {
        return UI_PAGE_TYPE.PAGE;
    }

    constructor(baseServices: PageServices, elementRef: ElementRef) {
        super(baseServices, elementRef);
    }

    public static DEFAULT_POPULATE_FIELDS: i18nOptions = {
        'title': true,
        'subTitle': true,
        'icon': true,
        'basePerm': true,
        'perm': true,
    };

    /**
     * Set base translation path for this component.
     * @param i18nkey Base translation path. Default value is "common".
     * @param autoPopulateFields
     */
    public setI18NKey(i18nkey: string, autoPopulateFields?: i18nOptions) {
        super.setI18NKey(i18nkey, autoPopulateFields);
	    this.setDynamicProperties(autoPopulateFields);
    }
	/**
	 *
	 * @param i18nkey: base translation path
	 * @param bundle: translation bundle with tr and en properties
	 *
	 * @experimental
	 */
	public addI18NBundle(i18nkey: string, bundle: any, autoPopulateFields?: i18nOptions) {
		super.addI18NBundle(i18nkey,bundle);
		this.setDynamicProperties(autoPopulateFields);
	}

	public setDynamicProperties (autoPopulateFields){
		let options = $.extend({}, BasePage.DEFAULT_POPULATE_FIELDS, autoPopulateFields);

		$.each(options, (key, val) => {
			if (is.function(val)) {
				this[key] = val();
			} else if (val) {
				this[key] = this.t(key);
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
        let result = super.ngAfterViewInit();
        if (result) {
            //INFO BaseComponent initialized everything, use here for page related items
        } else {
            let user = this.baseServices.sessionManager.currentUser;
            if (user) {
                this.baseServices.uiHelper.showError(this.$container, this.i18n.t('common.messages.RETURN_STATUS.ACCESS_DENIED'));
            } else {
                this.baseServices.router.navigate(['/login']);
            }
        }

        return result;
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

    get_type(thing) {
        if (thing === null)return "[object Null]"; // special case
        return Object.prototype.toString.call(thing);
    }

    public createAction(actionID: string, callback?: (ActionCallback | Array<Action>)): Action {
        if (actionID[0] === '@')
            return new Action(actionID.replace(/@/g, this.i18nkey + ".actions."), callback);
        else
            return new Action(actionID, callback);
    }

    public updateAction(action:Action, i18nKey: string) {
        if (i18nKey[0] === '@')
            action.updateI18n(i18nKey.replace(/@/g, this.i18nkey + ".actions."));
        else
            action.updateI18n(i18nKey);
    }

    public checkActionPermissions(actions: Array<Action>): Array<Action> {
        return actions.filter((action, idx, all) => {
            if (this.p(action.perm)) {
                if (is.existy(action.subActions)) {
                    action.subActions = this.checkActionPermissions(action.subActions);
                    return action.subActions.length > 0;
                }
                return true;
            }
            return false;
        });
    }

    public renderIcon(type: any, value: any, options?: any): string {
        return this.baseServices.uiHelper.renderIcon(type, value, options);
    }

    public getIconTitle(type: any, value: any): string {
        return this.baseServices.uiHelper.getIconTitle(type,value);
    }

    public renderDateTime(date: any) {
        return this.baseServices.uiHelper.renderDateTime(date);
    }

    public renderText(value: any, defaultValue: any = '', maxLength: number = 0) {
        return this.baseServices.uiHelper.renderText(value, defaultValue, maxLength);
    }

    public randomName() {
        return this.baseServices.utils.genUUID();
    }

    public resolvePopupBtnClass(action: Action) {
        return  this.baseServices.uiHelper.resolvePopupBtnClass(action);
    }

    public resolveFormBtnClass(action: Action) {
        return this.baseServices.uiHelper.resolveFormBtnClass(action);
    }
}
