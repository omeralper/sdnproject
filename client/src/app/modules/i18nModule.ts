/**
 * Created by ekinca on 02.02.2016.
 */
import {Injectable, Injector} from "@angular/core";
import {Logger} from "./Logger";
import {UIHelper} from "./UIHelper";
import {SessionManager} from "./SessionManager";
import {tr_resources} from "../locales/tr.prognet";
import {en_resources} from "../locales/en.prognet";
import {tr_milat_diff} from "../locales/tr.milat.diff";
import {en_milat_diff} from "../locales/en.milat.diff";
import {error_codes} from "../swagger/ErrorCodes";
import {alarm_codes} from "../swagger/AlarmCodes";

@Injectable()
export class i18nModule {

	public static isLoaded = false;

	public currentLanguage: string;

	public original_t = null;

	constructor(public sessionManager: SessionManager,
	            public uiHelper: UIHelper,
	            public logger: Logger,
	            public injector: Injector) {
	}

	init(callback?: () => void) {

		if (i18nModule.isLoaded) {
			throw "i18nModule is singleton!";
		}
		i18nModule.isLoaded = true;

		this.setCurrentLanguage(this.sessionManager.language, callback);
	}

	public t(key: string, options?: I18nextOptions | any): any {
		return i18next.t(key, options);
	}

	public setCurrentLanguage(lang, callback?: () => void) {
		tr_resources.translation.common.messages.ERROR_CODES = <any>error_codes.tr;
		en_resources.translation.common.messages.ERROR_CODES = <any>error_codes.en;

		tr_resources.translation.enums.ALARM_NAMES = <any>alarm_codes.tr;
		en_resources.translation.enums.ALARM_NAMES = <any>alarm_codes.en;

		let tr = tr_resources;
		let en = en_resources;
		// tr = $.extend(true,tr_resources,tr_milat_diff);
		// en = $.extend(true,en_resources,en_milat_diff);

		let resources = {
			"tr": tr,
			"en": en
		};

		this.currentLanguage = lang;
		let i18nOptions = {
			lng: this.currentLanguage,
			resources: resources,
			returnObjects: true,
			fallbackLng: 'en',
			fallbackOnNull: false, //WARN this is requred, do not modify (yildiray)
			fallbackOnEmpty: false//WARN this is requred, do not modify (yildiray)
		};

		//set language of the HTML tag, this is important for CSS text transformations.
		$('html').attr('lang', lang);

		if (lang == 'en') {
			$('#offline_style').attr('href', 'assets/offline-language-english.css');
		} else if (lang == 'tr') {
			$('#offline_style').attr('href', 'assets/offline-language-turkish.css');
		}

		i18next.init(i18nOptions, (err, t) => {
			this.logger.info('i18n Module initialized!');
			jqueryI18next.init(i18next, $);
			this.sessionManager.language = i18nOptions.lng;
			let uiHelper = this.injector.get(UIHelper);
			if (uiHelper) {
				uiHelper.makePluginsDefaultSettings();
			}
			if (callback) callback();
			this.uiHelper.populatei18nFields();
			this.uiHelper.populateTooltips();

		});
	}

	public  getCurrentLanguage() {
		return this.currentLanguage;
	}
}
/**
 * Import the module
 * Call public i18n:i18nModule inside constructor
 * this.i18n.init() inside init
 * data-i18n="common.refresh" for elements
 * $.t("network_vis.topology.virtual_list") for js
 *
 * */
