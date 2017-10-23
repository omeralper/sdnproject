/**
 * Created by yildirayme on 03.10.2016.
 */
import {Directive, ElementRef, Input, Renderer, HostListener} from "@angular/core";
import {i18nModule} from "../../i18nModule";

@Directive({
    selector: '[PasswordChecker]',
})
export class PasswordChecker {

    //INFO regex barrowed from https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/
    @Input('pc_regex') regexPattern: string = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})";
    @Input('pc_error') errorMessage: string;

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
        let current = this.el.nativeElement;// <HTMLInputElement> event.target;
        let regEx = new RegExp(this.regexPattern);
        if (!regEx.test(current.value)) {
            current.setCustomValidity(this.errorMessage || this.i18n.t('common.messages.validation.cm_error'));
        } else {
            current.setCustomValidity('');
        }
    }

}
