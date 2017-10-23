/**
 * Created by yildirayme on 30.09.2016.
 */
import { Directive, ElementRef, Input, Renderer,HostListener } from '@angular/core';
import {i18nModule} from "../../i18nModule";

@Directive({
    selector: '[InputLengthValidator]',
})
export class InputLengthValidator {

    @Input('ilv_minlength') minLength: number;
    @Input('ilv_minlength_error') minLengthError:string;
    @Input('ilv_maxlength_error') maxLengthError:string;

    constructor(public el: ElementRef,public i18n:i18nModule, public renderer: Renderer) {
    }

    @HostListener('keyup',['$event']) onKeyUp(event){
        let errors = [];
        let el = <HTMLInputElement> event.target;
        let value = el.value;
        if(this.minLength) {
            if (value.length < this.minLength) {
                errors.push(this.minLengthError || this.i18n.t('common.messages.validation.vl_minlength_error',{ value : this.minLength }))
            }
        }

        if ( el.maxLength ){
            if (value.length > el.maxLength ) {
                errors.push(this.maxLengthError || this.i18n.t('common.messages.validation.vl_maxlength_error',{ value : el.maxLength }))
            }
        }

        if (errors.length>0){
            el.setCustomValidity(errors.join('<br>'));
        } else {
            el.setCustomValidity('');
        }
    }

    @HostListener('keydown',['$event']) onKeyDown(event){
        let e =  <KeyboardEvent> event;
        // if (this.maxLength && $(event.target).val().length >= this.maxLength) {
        //     $(event.target).val($(event.target).val().substr(0, this.maxLength));
        // }


        // if(this.type == 'number'){
        //     if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
        //         // Allow: Ctrl+A
        //         (e.keyCode == 65 && e.ctrlKey === true) ||
        //         // Allow: Ctrl+C
        //         (e.keyCode == 67 && e.ctrlKey === true) ||
        //         // Allow: Ctrl+X
        //         (e.keyCode == 88 && e.ctrlKey === true) ||
        //         // Allow: home, end, left, right
        //         (e.keyCode >= 35 && e.keyCode <= 39)) {
        //         // let it happen, don't do anything
        //         return;
        //     }
        //     // Ensure that it is a number and stop the keypress
        //     if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        //         e.preventDefault();
        //     }
        // }
    }

}
