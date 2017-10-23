/**
 * Created by yildirayme on 30.09.2016.
 */
import {Directive, ElementRef, Input, Renderer, HostListener} from "@angular/core";
import {i18nModule} from "../../i18nModule";

@Directive({
    selector: '[PasswordMatcher]',
})
export class PasswordMatcher {

    @Input('pm_target') target: any;
    @Input('pm_error') errorMessage: string;

    constructor(public el: ElementRef, public i18n: i18nModule, public renderer: Renderer) {
    }

    @HostListener('focus') onFocus() {
        this.checkValues();
    }

    @HostListener('blur') onBlur() {
        this.checkValues();
    }

    @HostListener('keyup') onKeyUp() {
        this.checkValues();
    }

    @HostListener('change') onChange() {
        this.checkValues();
    }

    public checkValues() {
        let current = this.el.nativeElement;
        if (current.value != this.target.nativeElement.value) {
            current.setCustomValidity(this.errorMessage || this.i18n.t('common.messages.validation.pm_error'));
        } else {
            current.setCustomValidity('');
        }
    }

}
