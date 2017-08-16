/**
 * Created by omeroz on 05.08.2016.
 */
import {
    OnInit,
    OnDestroy,
    OnChanges,
    AfterViewInit,
    ElementRef,
    Component,
} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'DataTable',
    templateUrl: '../../commons/DataTable/DataTable.html',
    inputs: ['options','ajaxFn']
})

export class DataTable implements OnInit, OnDestroy,OnChanges, AfterViewInit {

    options: any;
    ajaxFn?: Function;
    isServerSide:boolean;
    public currentList: Array<any> = [];
    public $tableRef: JQuery;
    public $dataTableRef;

    constructor(public elementRef: ElementRef) {

    }

    ngOnInit() {
        this.isServerSide = !!this.ajaxFn;
        this.$tableRef = $('.data-table', this.elementRef.nativeElement);
    }

    ngOnChanges(e) {

    }

    ngAfterViewInit() {
        this.initDataTable();
    }

    ngOnDestroy() {
        if (this.$dataTableRef) {
            this.$dataTableRef.clear();
        }
    }

    reload(reset: boolean = false, data:Object=[]) {
        if (this.$dataTableRef) {
            // this.$dataTableRef.draw(reset);
            this.$dataTableRef.rows.add(data).draw(reset);
        }
    }

    initDataTable() {
        let tableOptions = this.options;
        let options = $.extend({
            // autoWidth: false,
            // responsive: true,
            searchDelay: 1000,
            serverSide: this.isServerSide,
            colReorder: true,
            ajax: this.ajaxFn
        }, tableOptions);

        this.$dataTableRef = this.$tableRef.DataTable(options);
        // this.initButtons();
    }
}
