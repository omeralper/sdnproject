/**
 * Created by yildirayme on 06.12.2016.
 */
import {AfterViewInit, ElementRef, OnChanges, OnDestroy, OnInit} from "@angular/core";
import {PageServices} from "../../modules/PageServices";
import {BasePopupDataTablesPage} from "../BasePopupDataTablesPage/BasePopupDataTablesPage";
import {i18nOptions} from "../BaseComponent";

export abstract class BasePopupEditDataTablesPage<T,ListT> extends BasePopupDataTablesPage<T,ListT> implements OnInit, OnDestroy,OnChanges, AfterViewInit {

    public isNewItem: boolean;
    public submitted = false;

    constructor(public baseServices: PageServices, public elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.isNewItem = is.not.existy(this.data) || is.not.existy((<any>this.data).id);
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
        super.ngOnDestroy();
    }

    /**
     * Set base translation path for this component.
     * @param i18nkey Base translation path. Default value is "common".
     * @param autoPopulateFields
     */
    setI18NKey(i18nkey: string, autoPopulateFields?: i18nOptions) {
        super.setI18NKey(i18nkey, this.populateFields(autoPopulateFields));

    }

	addI18NBundle(i18nkey: string, bundle: any, autoPopulateFields?: i18nOptions) {
		super.addI18NBundle(i18nkey, bundle, this.populateFields(autoPopulateFields));
	}

	populateFields(autoPopulateFields: i18nOptions){
		let mode = this.isNewItem ? 'modes.create.' : 'modes.edit.';
		let newAutoPopulateFields = $.extend({}, autoPopulateFields, {
			'title': () => this.t(mode + 'title'),
			'subTitle': () => this.t(mode + 'subTitle'),
			'icon': () => this.t(mode + 'icon'),
			'perm': () => this.t(mode + 'perm'),
		});
		return newAutoPopulateFields;
	}
}
