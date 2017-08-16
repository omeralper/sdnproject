/**
 * Created by omeroz on 4/17/2017.
 */
import {
	AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnChanges, Output
} from "@angular/core";

declare var JSONEditor;

@Directive({
	selector: "[ngModel][jsonEditor]"
})

export class JsonEditor implements AfterViewInit, OnChanges {
	public jsonEditor;
	@Input() ngModel;
	@Output() ngModelChange: EventEmitter<any> = new EventEmitter(false);

	constructor(public el: ElementRef) {

	}

	ngOnChanges(e) {
		let model = typeof this.ngModel == "string" ? JSON.parse(this.ngModel) : this.ngModel;
		this.ngModel && this.jsonEditor && this.jsonEditor.set(model);
	}


	ngAfterViewInit() {
		let el = <HTMLSelectElement>this.el.nativeElement;
		let that = this;
		let options = {
			onChange: () => {
				that.ngModelChange.emit(JSON.stringify(that.jsonEditor.get()));
			}, // this.jsonEditorChange.bind(this),
			search: true,
			mode: this.ngModel ? 'view' : 'tree',
		};

		this.jsonEditor = new JSONEditor(el, options);
		this.ngModel && this.jsonEditor.set(JSON.parse(this.ngModel));

		let jsonEditor = el.getElementsByClassName('jsoneditor')[0];
		$(jsonEditor).insertAfter(el).height(400);
		$(el).hide();
		$('.jsoneditor-search').keyup((e) => {
			e.keyCode == 13 && e.stopPropagation();
		});
	}


	jsonEditorChange() {
		this.ngModel = this.jsonEditor.get();
	}


}
