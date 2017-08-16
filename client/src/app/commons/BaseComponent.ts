/**
 * Created by yildirayme on 13.04.2017.
 */
import {AfterViewInit, ElementRef, OnChanges, OnDestroy, OnInit} from "@angular/core";
import {Logger} from "../modules/Logger";
import {i18nModule} from "../modules/i18nModule";
import {PageServices} from "../modules/PageServices";
import {NotPermittedAction} from "../modules/PermManager/PermManager";
declare var is: Is;

/**
 * Interface for i18n translation callback functions. These callback functions must return a localized
 * string for suplied translation key.
 * @param name Translation key for translation.
 * @return tranlated string.
 */
export interface i18nCallback { (name: string): string;
}
/**
 * Interface for i18n translation callbacks.
 */
export interface i18nOptions { [id: string]: boolean | i18nCallback;
}
/**
 * Base class recommended to be used by all components. Contains basic initialization and helper functions.
 */
export abstract class BaseComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {

	/**
	 * Default I18N Key value. Default value uses "common" root key for generic i18n resoulutions.
	 * @type {string}
	 */
	public static DEFAULT_I18N_KEY: string = 'common';
	/**
	 * Default Base Permission value. Default value allows components to be visible.
	 * @type {string}
	 */
	public static DEFAULT_BASE_PERM: string = 'common';
	/**
	 * Default Permission value. Default value allows components to be visible.
	 * @type {string}
	 */
	public static DEFAULT_PERM: string = '#view';

	/**
	 * This is the root i18nkey, which will be used to resolve the rest of the i18n resolutions.
	 * @type {string}
	 * @default BaseComponent.DEFAULT_I18N_KEY;
	 */
	public i18nkey: string = BaseComponent.DEFAULT_I18N_KEY;

	/**
	 * Base Permission key of this component. Default value is BaseComponent.DEFAULT_BASE_PERM
	 * @type {string}
	 * @default BaseComponent.DEFAULT_BASE_PERM
	 */
	public basePerm: string = BaseComponent.DEFAULT_BASE_PERM;

	/**
	 * Permission key of this component. Default value is BaseComponent.DEFAULT_PERM
	 * @type {string}
	 * @default  BaseComponent.DEFAULT_PERM
	 */
	public perm: string = BaseComponent.DEFAULT_PERM;

	/**
	 * Logger helper instance. This is the same object as "baseServices.logger"
	 * @see baseServices
	 */
	public logger: Logger;

	/**
	 * I18N localization helper instance. This is the same object as "baseServices.i18n"
	 * @see baseServices
	 */
	public i18n: i18nModule;

	/**
	 * This it he JQuery reference of the container DOM element of the current component. This is usefull for limiting
	 * and optimizing the JQuery operations to this components DOM tree.
	 */
	public $container: JQuery;

	/**
	 * Used to control the permission checker cache. This cache allows for beter performance by caching permission
	 * check queries. But if required, this cache can be disabled by setting this variable to "false". Default is "true"
	 * @default true
	 * @type {boolean}
	 */
	public usePermCache: boolean = true;

	/**
	 *
	 * @param baseServices
	 * @param elementRef
	 * @see PageServices, ElementRef
	 */
	constructor(public baseServices: PageServices, public elementRef: ElementRef) {
		this.logger = baseServices.logger;
		this.i18n = baseServices.i18n;
	}

	/**
	 * Set base translation path for this component.
	 * @param i18nkey Base translation path. Default value is "common".
	 * @param autoPopulateFields
	 */
	public setI18NKey(i18nkey: string, autoPopulateFields?: i18nOptions) {
		this.i18nkey = i18nkey;
		//always set a default permissin
		this.basePerm = this.basePerm || BaseComponent.DEFAULT_BASE_PERM;
		this.perm = this.perm || BaseComponent.DEFAULT_PERM;

	}

	public addI18NBundle(i18nkey: string, bundle: any,autoPopulateFields?: i18nOptions) {
		this.i18nkey = i18nkey;
		//always set a default permissin
		this.basePerm = this.basePerm || BaseComponent.DEFAULT_BASE_PERM;
		this.perm = this.perm || BaseComponent.DEFAULT_PERM;
		i18next.addResourceBundle('tr', 'translation', bundle.tr, true, false);
		i18next.addResourceBundle('en', 'translation', bundle.en, true, false);
	}

	ngOnInit() {
		//this.i18.init();
		this.$container = $(this.elementRef.nativeElement);
	}

	ngOnChanges(e) {

	}

	ngAfterViewInit() {
		let result = this.p();
		if (result) {
			this.baseServices.uiHelper.populatei18nFields(this.$container);
			this.baseServices.permManager.checkPermissions(this.$container);
			this.baseServices.uiHelper.initSlimScroll(this.$container);
			this.baseServices.uiHelper.populateTooltips(this.$container);
		}
		return result;
	}

	ngOnDestroy() {
		this.baseServices.uiHelper.destroySlimScroll(this.$container);
	}

	/**
	 * Component Translation function. Use this function to translate component related string.
	 * You should have set a basekey using setI18NKey function, before using this function.
	 * @param i18nkey Key to be translated.
	 * @returns {string} Translated value.
	 */
	t(i18nkey: string, options?: I18nextOptions | any) {
		//return $.t(this.i18nkey + "." + i18nkey, options);
		let finalKey = this.i18nkey + "." + i18nkey;
		let translated = this.i18n.t(finalKey, options);
		return (translated != 'null' && finalKey != translated) ? translated : '';
	}

	/**
	 * This function could be used for resolving real permission key. Resolving is performed as follows;
	 * - If no requestedPerm is supplied, then "perm" field value will be used. If "perm" field is empty then BaseComponent.DEFAULT_PERM will be used.
	 * - If no basePerm is supplied, then "basePerm" field value will be used. If "basePerm" field is empty then BaseComponent.DEFAULT_BASE_PERM will be used.
	 * - All "#" characters found in "requestPerm" parameter will be replaced with "basePerm" parameter
	 * @param requestedPerm requested permission
	 * @param basePerm base permission
	 * @returns {string} resolved permission
	 */
	public resolvePermKey(requestedPerm?: string, basePerm?: string) {
		let resolvedPerm = (requestedPerm || this.perm || BaseComponent.DEFAULT_PERM).replace(/#/g, (basePerm || this.basePerm || BaseComponent.DEFAULT_BASE_PERM) + ':');
		//let resolvedPerm = requestedPerm.indexOf(':')>=0?requestedPerm: this.basePerm + ':' + requestedPerm;
		this.logger.debug("PermKey:", {requestedPerm: requestedPerm, resolvedPerm: resolvedPerm});
		return resolvedPerm;
	}

	/**
	 * Permission resolve cache.
	 * @type {{}}
	 */
	public permCache = {};

	/**
	 * Check permissions
	 * @param localPermStr Permission string to check. If left empty, than basePerm field will be used for cheking permission.
	 * @param noPermAction
	 * @param elmId
	 * @returns {boolean}
	 */
	p(requestedPerm?: string, noPermAction?: string, elmId?: string): boolean {

		//INFO permission cache mechanism must be replaced, this causes problems because of not handling user session state
		let cachedResult = this.usePermCache ? this.permCache[requestedPerm] : null;
		let action;
		if (!cachedResult) {
			let resolvedPerm = this.resolvePermKey(requestedPerm);
			if (is.existy(resolvedPerm) && resolvedPerm.charAt(0) === '@') {
				//check permission for this page
				let realPerm = resolvedPerm.replace(/@/g, this.basePerm + ':');

				if (this.baseServices.authenticationManager.hasPermission(realPerm)) {
					action = this.baseServices.permManager.checkPermission(realPerm, noPermAction);
				} else {
					action = this.baseServices.permManager.checkPermission(resolvedPerm.replace(/@/g, BaseComponent.DEFAULT_BASE_PERM + ':'), noPermAction);
				}

			} else {
				action = this.baseServices.permManager.checkPermission(resolvedPerm, noPermAction);
			}
			if (this.usePermCache) this.permCache[requestedPerm] = {action: action};
			//this.logger.debug("CheckPerm:", {requestedPerm: requestedPerm, resolvedPerm: resolvedPerm, action: action});
		} else {
			action = cachedResult.action;
			//this.logger.debug("CachedPerm:", {requestedPerm: requestedPerm, action: action});
		}

		switch (action) {
			case NotPermittedAction.HIDE:
			case NotPermittedAction.REMOVE:
				return false;
			case NotPermittedAction.DISABLE:
			case NotPermittedAction.ALERT:
				if (is.existy(elmId)) {
					let $el = $('#' + elmId, this.$container);
					this.baseServices.permManager.applyPermission($el, action, noPermAction);
				} else {
					this.logger.error("Permission error! elmID not defined!!");
					throw "Permission error! elmID not defined!!";
				}
				return false;
			default:
				return true;
		}
	}

}
