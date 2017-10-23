/**
 * Created by omeroz on 29.08.2016.
 */
import {
    Directive,
    ElementRef,
    HostListener,
    AfterViewInit,
    Input
} from "@angular/core";
import {i18nModule} from "../../i18nModule";

@Directive({
    selector: '[validation]',

})
export class Validation implements AfterViewInit {
    @Input('validation_label') validation_label: string;

    constructor(public el: ElementRef, public i18n: i18nModule) {
    }


    ngAfterViewInit() {
        if (this.el.nativeElement.required) {
            let label;
            if (is.existy(this.validation_label)){
                label = $(this.validation_label);
            } else {
                label = $(this.el.nativeElement).closest("div.form-group").find('label:first');
            }
            label.addClass('label-required');// .append("<span style='color: red'> *</span>");
        }
    }

    @HostListener('invalid') onInvalid() {
      var $el = $(this.el.nativeElement);
        this.setInvalid($el);
    }

    @HostListener('focus') onFocus() {
        this.checkValues();
    }

    @HostListener('blur') onBlur() {
        this.checkValues();
    }

    @HostListener('change') onChange() {
        this.checkValues();
    }

    @HostListener('submit') onSubmit() {
        this.checkValues();
    }

    @HostListener('ngModelChange') onInputChange() {
        this.checkValues();
    }

    private checkValues() {
      var $el = $(this.el.nativeElement);
      if ($el.is(':invalid')) {
        this.setInvalid($el);
      } else {
        this.setValid($el);
      }
    }

    private setInvalid($el: JQuery) {
      if ($el.hasClass('multi-select')) {
        let $next = $el.next();
        $next.addClass('validation-error-multi');
        this.addPopover($next);
      }
      else {
        $el.addClass('validation-error');
        this.addPopover($el);
      }
    }

    private setValid($el: JQuery) {
      if ($el.hasClass('multi-select')) {
        let $next = $el.next();
        $next.removeClass('validation-error-multi');
        this.removePopover($next);
      }
      else {
        $el.removeClass('validation-error');
        this.removePopover($el);
      }
    }

    public static VALIDITY_STATES = ['badInput',
        'patternMismatch',
        'rangeOverflow',
        'rangeUnderflow',
        'stepMismatch',
        'tooLong',
        'tooShort',
        'typeMismatch',
        'valueMissing'];

    public addPopover(el) {
        let error_message = '';

        if (!this.el.nativeElement.validity.customError) {
            Validation.VALIDITY_STATES.forEach((state) => {
                if (this.el.nativeElement.validity[state] === true) {
                    error_message = this.i18n.t('common.messages.validation.' + state, {
                        input: {
                            maxLength: this.el.nativeElement.maxLength,
                            minLength: this.el.nativeElement.minLength,
                            max: this.el.nativeElement.max,
                            min: this.el.nativeElement.min,
                            type: this.i18n.t('common.labels.input_type.' + this.el.nativeElement.type)
                        }
                    });
                }
            });
        }

        if (is.empty(error_message)) error_message = this.el.nativeElement.validationMessage;

        let _popover = $(el).popover({
            trigger: "hover",
            placement: "auto bottom",
            content: error_message,
            //container: 'body',
            html: true,
            template: "<div class=\"popover popover-danger\"><div class=\"arrow\"></div><div class=\"popover-inner\"><div class=\"popover-content\"><p></p></div></div></div>"
        });
        _popover.data("bs.popover").options.content = error_message;
        $(el).attr('title', error_message);
        //$el.popover("show");
    }

    public removePopover(el) {
        //$el.popover('hide');
        $(el).attr('title', '');
        $(el).popover('destroy');
    }

}
