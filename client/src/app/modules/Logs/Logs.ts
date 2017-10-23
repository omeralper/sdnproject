/**
 * Created by ekinca on 1.03.2017.
 */
import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef} from "@angular/core";
import {PageServices} from "../PageServices";
import {BaseDataTablesPage} from "../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {SEVERITY} from "../../swagger/SEVERITY";
import {EnumHelper} from "../../commons/EnumHelper";
import {ALARMSTATUS} from "../../swagger/ALARMSTATUS";
import {IAlarmLogConsumer, LogProvider} from "./LogsService";
import {LogsPopup} from "./LogsPopup";
import {EdrSearchCriteria} from "../../swagger/EdrSearchCriteria";
import {EdrDTO, EdrDTODef} from "../../swagger/EdrDTO";
import {EDRSTATUS} from "../../swagger/EDRSTATUS";
import {Action} from "../../commons/Action";

@Component({
    moduleId: module.id,
    selector: 'logs-page',
    templateUrl: '../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html'
})
export class Logs extends BaseDataTablesPage<EdrDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit, IAlarmLogConsumer {

    public selectedLog: EdrDTO;
    public details: any;
    public description;
    public noteType;
    public columns : Array<any>;
    public Allcolumns: Array<any>;

    edrRequestData: EdrSearchCriteria = {
        timeStart: (moment().subtract('days', 1).startOf('day')).toISOString(),
        timeEnd: new Date().toISOString(),
        status: EDRSTATUS.SUCCESS
    };

    constructor(public dataProvider: LogProvider, baseServices: PageServices, elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.isServerSide = false;
        this.setI18NKey('logs.list');

        this.setRowActions([
            this.createAction('@view', (itm:EdrDTO)=> {
                this.logger.debug('View Edr Log Details of ' + itm.xid + ' action clicked');
                this.selectedLog = itm;
                this.openPopup(itm);
            })
        ]);
    }

    ngOnChanges(e) {
        super.ngOnChanges(e);
        this.logger.info('something changed', e);
    }

    public columnsMap;
    ngOnInit() {
        super.ngOnInit();
        let self = this;
        this.Allcolumns = this.dataProvider.getAllColumns(this);
        this.columns = [];
        let actions = [];
        this.columnsMap = {};
        $.each(this.Allcolumns,(idx,column)=>{
            let id = "col_sel_action"+idx;
            this.columnsMap[id] = true;
            this.columns.push($.extend({},column));
            actions.push(new Action({
                id: id,
                title: column.title,
                //title_short:column.title,
                icon:"fa fa-eye"
            },function(data?:any,el?:JQuery){ //INFO:function definition is used on purpose to access context "this"
                this.icon = (this.icon=="fa fa-eye"?"fa fa-eye-slash font-grey-steel":"fa fa-eye");
                self.toggleColumn(this.id);
            }));
        });

        this.setActions([this.createAction("@select_column",actions)]);

    }

    toggleColumn(id:string):void {
        this.columnsMap[id] = !this.columnsMap[id];
        this.columns = [];
        $.each(this.Allcolumns,(idx,column)=>{
            let id = "col_sel_action"+idx;
            let newColumn = $.extend({},column);
            if (this.columnsMap[id]) {
                newColumn.width = "auto";
                this.columns.push(newColumn);
            }
        });
        this.reInitDataTable();
    }

    ngAfterViewInit() {
        if (super.ngAfterViewInit()) {
            //Code here

            return true;
        }
        return false;

    }

    ngOnDestroy() {
        super.ngOnDestroy();
        $(".daterangepicker").remove();
    }

    openPopup(itm){
        this.baseServices.sharedService.showModal(LogsPopup, itm, (result)=> {
            if(result.isSuccess){
                this.openPopup(result.data);
            }
        });
    }

    reInitDataTable() {
        if (this.$tableRef) {
            this.$tableRef.off('click', 'tbody > tr');
            this.$tableRef.off('dblclick', 'tbody > tr');
        }
        super.reInitDataTable();
    }

    initDataTable() {
        super.initDataTable();

        if (this.$tableRef) {
            //debugger;
            // Setup - add a text input to each header cell

            let columns = this.getDataTableOptions().columns;

            let $header = this.$dataTableRef.tables().header().to$();
            let $newRow = $('<tr></tr>');
            $header.append($newRow);

            this.$dataTableRef.columns().every((idx) => {
                let column: any = columns[idx];
                let $newColumn = $('<td class="'+(column.className || '')+'" style="'+(column.width?'width:'+column.width:'')+'" ></td>');
                if (column.searchable) {
                    switch (column.type) {
                        case "num":
                           if (column.name == "status") {
                                let options = ['<option value="">' + this.t('labels.all') + '</option>'];
                                $.each(EnumHelper.getNames(EDRSTATUS), (name, value)=> {
                                    options.push('<option value="' + value + '">' + this.t('enums.EDRSTATUS.' + value + '.title') + '</option>');
                                });
                                $newColumn.append($('<select id="filter_' + idx + '" class="form-control input-sm input-circle" style="width:100%" >' + options.join('') + '</select>'));
                            }
                            break;
                        case "date":
                            $newColumn.append($('<div class="btn btn-circle btn-default daterangepicker" id="filter_' + idx + '" style="position:inherit;"><i class="fa fa-calendar"></i> &nbsp;<span> </span><b class="fa fa-angle-down"></b></div>'));
                            break;
                        default:
                            $newColumn.append($('<div class="input-icon right" ><i class="fa fa-times-circle clear_input" data-index="' + idx + '"></i><input id="filter_' + idx + '" type="text" class="form-control input-circle input-sm" placeholder="' + this.t('labels.all') + '" style="width: 100%;"></div>'));
                    }


                }
                $newRow.append($newColumn);

                $("#filter_" + idx, $newColumn).on("change", (e)=> {
                    //console.log($(e.currentTarget).val());
                    this.updateSearch();
                });

                $("#filter_" + idx, $newColumn).on("apply.daterangepicker", (ev, picker)=> {
                    //console.log(picker.startDate.format('YYYY-MM-DD'));
                    //console.log(picker.endDate.format('YYYY-MM-DD'));
                    this.updateSearch();
                });

            });

            $(".clear_input", $newRow).on("click", (e)=> {
                let $input = $("#filter_" + $(e.currentTarget).data('index'), $newRow);
                if (is.not.empty($input.val())) {
                    $input.val('');
                    this.updateSearch();
                }
            });

            this.handleDateRangePickers();

            // this.$tableRef.off('click', 'tbody > tr').on('click', 'tbody > tr', (e: JQueryEventObject) => {
            //     let $row = $(e.currentTarget);
            //     let rowIndex = this.$dataTableRef.row($row).index();
            //     this.selectRow(rowIndex, $row);
            // });

            this.$tableRef.off('dblclick', 'tbody > tr').on('dblclick', 'tbody > tr', (e: JQueryEventObject) => {
                let $row = $(e.currentTarget);
                let rowIndex = this.$dataTableRef.row($row).index();
                let dto = this.currentList[rowIndex];
                this.openPopup(dto);
            });
        }
    }

    getDataTableOptions() {
        return this.dataProvider.getDataTableOptions(this);
    }

    handleDateRangePickers() {
        if ($(".daterangepicker")[1]) {
            ($(".daterangepicker")[1]).remove();
        }
        if (!jQuery().daterangepicker) {
            return;
        }

        let dayLimit = 364;
        let locale: any = this.i18n.t('common.datetimerangepicker.locale', {returnObjectTrees: true});
        //these 3 lines are workaround for i18next problem, that returns everything as objects
        locale.daysOfWeek = $.map(locale.daysOfWeek, val => val);//convert from object to array
        locale.monthNames = $.map(locale.monthNames, val => val);//convert from object to array
        //locale.firstDay = parseInt(locale.firstDay,10);

        let daterangepickeroptions = {

            //opens: (App.isRTL() ? 'left' : 'right'),
            startDate: moment().subtract('days', 1).startOf('day'),
            endDate: moment().endOf('day'),
            minDate: moment().subtract('days', dayLimit).startOf('day'),
            maxDate: moment().endOf('day'),
            dateLimit: {
                days: dayLimit
            },
            showDropdowns: true,
            showWeekNumbers: true,
            timePicker: true,
            timePickerIncrement: 1,
            timePicker12Hour: false,
            timePicker24Hour: true,
            ranges: {},
            // ranges: { //this.i18n.t('common.daterangepicker.today')
            //     'Bugün' : [moment().startOf('day'), moment().endOf('day')],
            //     'Dün': [moment().subtract('days', 1).startOf('day'), moment().subtract('days', 1).endOf('day')],
            //     'Last 7 Days': [moment().subtract('days', 6).startOf('day'), moment().endOf('day')],
            //     'Last 30 Days': [moment().subtract('days', 29).startOf('day'), moment().endOf('day')],
            //     'This Month': [moment().startOf('month'), moment().endOf('month')],
            //     'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
            // },
            buttonClasses: ['btn'],
            applyClass: 'green',
            cancelClass: 'default',
            //format: this.i18n.t('common.date_format'),
            //separator: ' ile ',
            locale: locale
        };

        let ranges = {
            'today': [moment().startOf('day'), moment().endOf('day')],
            'yesterday': [moment().subtract('days', 1).startOf('day'), moment().subtract('days', 1).endOf('day')],
            'last7days': [moment().subtract('days', 6).startOf('day'), moment().endOf('day')],
            'last30days': [moment().subtract('days', 29).startOf('day'), moment().endOf('day')],
            'thisMonth': [moment().startOf('month'), moment().endOf('month')],
            'lastMonth': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
        };

        $.each(ranges, (key, value)=> {
            daterangepickeroptions.ranges[this.i18n.t('common.datetimerangepicker.ranges.' + key)] = value;
        });

        let $daterangepickers = $('.daterangepicker');
        let dateDisplayFunc = (start, end)=> {
            $('span', $daterangepickers).html(this.formatDate(start) + '-' + this.formatDate(end));
        };

        $daterangepickers.daterangepicker(daterangepickeroptions, dateDisplayFunc);

        //Set the initial state of the picker label
        dateDisplayFunc(daterangepickeroptions.startDate, daterangepickeroptions.endDate);
    }

    public updateSearch() {
        this.reload(true);
    }

    makeDataTableRequest(requestOptions: any, data: any, callback: (data: any)=>void) {
        // this.generateDetails();

        var columns = this.getDataTableOptions().columns;

        $.each(columns, (key, column: any)=> {

            if (column.searchable) {

                let $input = $("#filter_" + key, this.$tableRef);
                switch (column.type) {
                    case "date":
                        let $picker = $input.data('daterangepicker');
                        //console.log($picker.startDate.format('YYYY-MM-DD'));
                        //console.log($picker.endDate.format('YYYY-MM-DD'));
                        this.edrRequestData.timeStart = moment($picker.startDate).toISOString();
                        this.edrRequestData.timeEnd = moment($picker.endDate).toISOString();
                        break;
                    case "num": {
                        let value = $input.val();
                        if (is.existy(value) && is.not.empty(value)) {
                            this.edrRequestData[column.name] = value;
                        }else{
                            this.edrRequestData[column.name] = null;
                        }
                        break;
                    }
                    default:
                        let value = $input.val();
                        if (is.existy(value) && is.not.empty(value)) {
                            this.edrRequestData[column.name] = value;
                        }else{
                            this.edrRequestData[column.name] = null;
                        }
                }
            }
        });


        this.dataProvider.makeDataTableRequest(this, this.edrRequestData, data, (calbackdata)=> {
            callback(calbackdata);
            // this.selectRow(0);
        });
    }

    public formatDate(date: any) {
        return date.format(this.i18n.t('common.date_format_short'));
    }

    public formatDateTime(date: any) {
        return date.format(this.i18n.t('common.datetime_format_short'));
    }

    // public static FIELDS = [
    //     'time',
    //     'status',
    //     'username',
    //     'module',
    //     'sourceIP',
    //     'destinationIP',
    //     'sourceMAC',
    //     'destinationMAC',
    //     'sourcePort',
    //     'destinationPort',
    //     'protocol'
    // ];

    public static COLORS = {
        'FAIL': 'note-danger',
        'SUCCESS': 'note-success',
    };

    // public generateDetails(rowData?: EdrDTO) {
    //     if (rowData) {
    //         let details = [];
    //
    //         $.each(this.columns, (idx, column)=> {
    //             let field = column.name;
    //             let value = rowData[field];
    //             if (is.existy(value) && is.not.empty(value)) {
    //                 if (field == 'time') {
    //                     details.push({
    //                         title: this.t('fields.' + field) || field,
    //                         value: this.formatDateTime(moment(value))
    //                     });
    //                 } else if (field == 'status') {
    //                     let translated = this.i18n.t('enums.' + EdrDTODef.fields[field].type.toString().replace('_', '') + "." + value, {returnObjectTrees: true});
    //                     let line;
    //                     if (is.string(translated)) {
    //                         line = translated;
    //                     } else {
    //                         line = `<span class="font-${translated.color||'default'}"><i class="${translated.icon}"></i> ${translated.title}</span>`;
    //                     }
    //                     details.push({title: this.t('fields.' + field) || field, value: line});
    //                 } else {
    //                     details.push({title: this.t('fields.' + field) || field, value: value});
    //                 }
    //             }
    //         });
    //         //this.description = rowData.description;
    //         this.details = details;
    //         //this.noteType = Logs.COLORS[rowData.severity];
    //     } else {
    //         this.description = this.noteType = this.details = null;
    //     }
    // }
    //
    // public selectRow(rowIndex: number, $selector?: JQuery) {
    //     let $row = $selector || $('tbody tr:first', this.$tableRef);
    //     if (!$row.hasClass('selected')) {
    //
    //         $('tr.selected', this.$tableRef).removeClass('selected');
    //         $row.addClass('selected');
    //
    //         let rowData = this.currentList[rowIndex];
    //
    //         this.selectedLog = rowData;
    //         this.generateDetails(rowData);
    //     }
    //
    // }
    //
    // public getDetailTitle() {
    //     return this.i18n.t(this.selectedLog ? 'alarm_logs.details.title' : this.i18n.t('alarm_logs.details.title_no_selection'));
    // }

}
