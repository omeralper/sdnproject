/**
 * Created by omeroz on 4/17/2017.
 */
import {
    AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnChanges, Output
} from "@angular/core";
import {Logger} from "../../Logger";

declare var JSONEditor;

@Directive({
    selector: "[ngModel][jsonEditor]"
})

export class JsonEditor implements AfterViewInit, OnChanges {
    public jsonEditor;
    @Input() ngModel;
    @Input() editorMode;
    @Output() ngModelChange: EventEmitter<any> = new EventEmitter(false);
    private lastChangedData: string;

    constructor(public el: ElementRef, public logger: Logger) {

    }

    ngOnChanges(e) {
        console.debug('Data change event recevied');
        let model;
        if (typeof this.ngModel == "string") {
            if (this.lastChangedData != this.ngModel) {
                try {
                    model = JSON.parse(this.ngModel || '{}');
                    this.lastChangedData = this.ngModel;
                } catch (e) {
                    this.logger.warn(e);
                    model = {"JSON PARSE ERROR": e.message};//this.ngModel;
                }
            } else {
                console.debug('data not changed');
                return;
            }
        } else {
            model = this.ngModel;
        }

        this.ngModel && this.jsonEditor && this.jsonEditor.set(model);
    }

    ngAfterViewInit() {
        let el = <HTMLSelectElement>this.el.nativeElement;
        let options = {
            onChange: () => {
                try {
                    console.debug('Emit change event', this.lastChangedData);
                    this.lastChangedData = JSON.stringify(this.jsonEditor.get());
                    this.ngModelChange.emit(this.lastChangedData);
                } catch (e) {

                }
            }, // this.jsonEditorChange.bind(this),
            onError: (err) => {
                console.error(err.toString());
            },
            onModeChange: (newMode, oldMode) => {
                console.log('Mode switched from', oldMode, 'to', newMode);
            },
            search: true,
            mode: this.editorMode || (this.ngModel ? 'view' : 'tree'),
            //modes: ['code', 'form', 'text', 'tree', 'view'],
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


    // jsonEditorChange() {
    // 	this.ngModel = this.jsonEditor.get();
    // }


}
