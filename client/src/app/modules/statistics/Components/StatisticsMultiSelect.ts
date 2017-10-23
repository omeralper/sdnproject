/**
 * Created by omeroz on 10/6/2017.
 */

import {
	Component,
	AfterViewInit,
	ElementRef,
	Input, Output, EventEmitter, OnChanges, SimpleChanges,
} from "@angular/core";

@Component({
	moduleId: module.id,
	selector: 'multiselect',
	templateUrl: "./StatisticsMultiSelect.html"
})

export class StatisticsMultiSelect implements AfterViewInit, OnChanges {
	@Input('name') name: string;
	@Input('placeholder') placeholder: string;
	@Input('items') items: Array<string|number> = [];
	@Input('selectedItems') selectedItems: Array<string|number> = [];
	@Output('itemSelected') itemSelected: EventEmitter<Array<string|number>> = new EventEmitter();

	count: number = 0;

	constructor(public elementRef: ElementRef) {

	}

	ngAfterViewInit() {
		$(".custom-select", this.elementRef.nativeElement)
			.select2({
				placeholder: this.placeholder,
			})
			.on('change', (evt) => {
				setTimeout(() => {
					$('.custom-dropdown', this.elementRef.nativeElement).removeClass('open');
					$('.custom-select', this.elementRef.nativeElement).select2('close');
				}, 10);

				let values = $(evt.target).val() || [];
				this.count = values.length;
				this.itemSelected.emit(values);
			});

		$('.custom-dropdown', this.elementRef.nativeElement)
			.on('shown.bs.dropdown', () => {
				$('.custom-select', this.elementRef.nativeElement).select2('open');
			});
	}

	ngOnChanges(changes: SimpleChanges) {
		if (changes.hasOwnProperty('selectedItems')) {
			$('.custom-select', this.elementRef.nativeElement)
				.select2({
					placeholder: this.placeholder,
				})
				.val(changes.selectedItems.currentValue)
				.trigger('change');
		}
	}
}


