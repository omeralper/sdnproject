/**
 * Created by omeroz on 22.09.2016.
 */
import {Directive, ElementRef, Input, Output, Renderer, EventEmitter, HostListener, AfterViewInit} from '@angular/core';

@Directive({
    selector: '[restrict]',
})
export class InputRestricter implements AfterViewInit {

    @Input('restrict') restrict: any;
    @Input('restrict_minlength') minLength: number;
    @Input('restrict_minvalue') minValue: number;
    @Input('restrict_maxvalue') maxValue: number;
    @Input('restrict_type') type: string;
    @Input('restrict_mask') mask: string;
    @Input('restrict_maxError') maxError: string = ' ';
    @Input('restrict_minError') minError: string = ' ';

    @Output() ngModelChange: EventEmitter<any> = new EventEmitter(false);

    constructor(public el: ElementRef, public renderer: Renderer) {

    }

    ngAfterViewInit() {
        let el = <HTMLInputElement>this.el.nativeElement;
        if (this.mask) {
            $(el).inputmask(
                {
                    "alias": this.mask,
                    "onincomplete": () => {
                        switch (this.mask) {
                            case 'mac':
                                el.value ? el.setCustomValidity($.t('common.messages.validation.mac_format_error'))
                                    : el.setCustomValidity('');
                                break;
                            case 'ip':
                                el.value ? el.setCustomValidity($.t('common.messages.validation.ip_format_error'))
                                    : el.setCustomValidity('');
                                break;
	                        case 'blockIp':
		                        el.value ? el.setCustomValidity($.t('common.messages.validation.ip_format_error'))
			                        : el.setCustomValidity('');
		                        break;
	                        case 'ip24':
		                        el.value ? el.setCustomValidity($.t('common.messages.validation.ip_format_error'))
			                        : el.setCustomValidity('');
		                        break;
                            case 'mobilePhone':
                                el.value ? el.setCustomValidity($.t('common.messages.validation.mobile_phone_error'))
                                    : el.setCustomValidity('');
                                break;
                            case 'dataPath':
                                el.value ? el.setCustomValidity($.t('common.messages.validation.datapath_error'))
                                    : el.setCustomValidity('');
                                break;
                        }
                    },
                    "oncomplete": () => {
                        el.setCustomValidity('');
                        el.value = el.value.replace('_', '');
                        this.ngModelChange.emit(el.value); //bu jquery.input'un bugı yüzünden gerekli.
                    },

                });
        }
    }

    @HostListener('keyup', ['$event']) onKeyUp(event) {
	    let el = <HTMLSelectElement> event.target;
    	if(el.value === "" && !el.required){
		    el.setCustomValidity('');
			return;
	    }

        if (this.minLength) {
            if (this.minLength && $(el).val() <= this.minLength) {
                el.setCustomValidity(this.minError);
                return;
            } else {
                el.setCustomValidity('');
            }
        }

        if (this.minValue) {
            if (+el.value < this.minValue) {
                el.setCustomValidity(this.minError);
                return;
            } else {
                el.setCustomValidity('');
            }
        }

        if (this.maxValue) {
            if (+el.value > this.maxValue) {
                el.setCustomValidity(this.maxError);
                return;
            } else {
                el.setCustomValidity('');
            }
        }
    }

    @HostListener('keydown', ['$event']) onKeyDown(event) {
        let e = <KeyboardEvent> event;
        // if (this.maxLength && $(event.target).val().length >= this.maxLength) {
        //     $(event.target).val($(event.target).val().substr(0, this.maxLength));
        // }
        if (this.type == 'number') {
            if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
                // Allow: Ctrl+A
                (e.keyCode == 65 && e.ctrlKey === true) ||
                // Allow: Ctrl+C
                (e.keyCode == 67 && e.ctrlKey === true) ||
                // Allow: Ctrl+X
                (e.keyCode == 88 && e.ctrlKey === true) ||
                // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                // let it happen, don't do anything
                return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        }
    }

}
