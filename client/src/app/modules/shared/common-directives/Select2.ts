/**
 * Created by omeroz on 4/11/2017.
 *
 * ngModel select elementinde multi tag'ini desteklemiyor. Bu yüzden ngModel çift yönlü çalıştırılamadı.
 * Kullanımı şu şekilde olmalı <select [ngModel]="dummyModel" (ngModelChange)="onChangeFunction($event)" >
 *
 */
import {
	AfterViewInit, Directive, ElementRef, EventEmitter, Input, Output, OnChanges, OnDestroy, ChangeDetectorRef
} from "@angular/core";

@Directive({
	selector: "[ngModel][multiple][select2]"
})

export class Select2 implements AfterViewInit, OnChanges, OnDestroy {

	@Output() ngModelChange: EventEmitter<any> = new EventEmitter(false);
	@Input() ngModel;
	public mutationObserver: MutationObserver;
	public flag: boolean = true;

	constructor(public el: ElementRef, public changeDetectorRef: ChangeDetectorRef) {
		this.mutationObserver = new MutationObserver(this.mutationCallback);
		this.mutationObserver.observe(el.nativeElement, {attributes: true});
	}

	ngOnChanges(e) {
		let el = <HTMLSelectElement>this.el.nativeElement;
		$(el).select2().val(this.ngModel).trigger('change');
	}

	ngAfterViewInit() {
		let el = <HTMLSelectElement>this.el.nativeElement;
		$(el)
			.select2()
			.on('change', () => {
				// let v = Array.prototype.slice.call(el.options, 0).filter(o => o.selected).map(m => m.value);
				let v = Array.prototype.slice
					.call(el.options, 0)
					.filter(o => o.selected)
					.map(m => m.value.split(': ').length > 1 ? m.value.split(': ')[1].replace(/'/g, '') : m.value);
				this.ngModelChange.emit(v);
			});
	}

	ngOnDestroy() {
		this.mutationObserver.disconnect();
	}

	mutationCallback(mutations) {
		let mutation;
		if (mutation = mutations.find(m => m.attributeName == 'class')) {
			let l = <HTMLSelectElement>mutation.target;
			if (l.classList.contains('validation-error')) {
				$(mutation.target).parent().find('.select2').addClass('validation-error');
			} else {
				$(mutation.target).parent().find('.select2').removeClass('validation-error');
			}
		}
	}

}
