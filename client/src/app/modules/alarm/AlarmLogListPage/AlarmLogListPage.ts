/**
 * Created by yildirayme on 23.06.2016.
 */
import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef, ChangeDetectorRef} from "@angular/core";
import {PageServices} from "../../PageServices";
import {AlarmDTO, AlarmDTODef} from "../../../swagger/AlarmDTO";
import {AlarmLogListProvider, IAlarmLogConsumer} from "./AlarmLogListProvider";
import {BaseDataTablesPage} from "../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {SEVERITY} from "../../../swagger/SEVERITY";
import {EnumHelper} from "../../../commons/EnumHelper";
import {QueryOptions} from "../../../swagger/QueryOptions";
import {QUERYOP} from "../../../swagger/QUERYOP";
import {ALARMTYPE} from "../../../swagger/ALARMTYPE";
import {ALARMSTATUS} from "../../../swagger/ALARMSTATUS";
import {Action} from "../../../commons/Action";

@Component({ moduleId: module.id,
    selector: 'AlarmLogListPage',
    templateUrl: './AlarmLogListPage.html'
})
export class AlarmLogListPage extends BaseDataTablesPage<AlarmDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit, IAlarmLogConsumer {
    archiveButton: Action;

    public selectedAlarm: AlarmDTO;
    public details: any;
    public description;
    public noteType;
    archive: boolean;
    // switchFlag: boolean;

    constructor(public dataProvider: AlarmLogListProvider,
                public changeDetector: ChangeDetectorRef,
                baseServices: PageServices,
                elementRef: ElementRef) {
        super(baseServices, elementRef);

        //populate i18n fields but exclude title, because we are going to define it here
        this.setI18NKey('alarm_logs.list');
        this.archive = false;

        // this.setRowActions([
        //     this.createAction('@view', (itm:AlarmDTO)=> {
        //         this.logger.debug('View Alarm Log Details of ' + itm.name + ' action clicked');
        //         this.selectedAlarm = itm;
        //     })
        // ]);

        this.archiveButton = this.createAction('@archive', () => {
            this.logger.debug('Archive action clicked');
            this.archiveSwitch();
        });

        this.setActions([this.archiveButton]);
    }

    archiveSwitch(){
        if (this.archive) {
            this.updateAction(this.archiveButton, '@current');
            this.archive = false;
        } else {
            this.updateAction(this.archiveButton, '@archive');
            this.archive = true;
        }
        this.handleDateRangePickers();
    }


    ngOnChanges(e) {
        super.ngOnChanges(e);
        this.logger.info('something changed', e);
    }

    ngOnInit() {
        super.ngOnInit();
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

    initDataTable() {
        super.initDataTable();

        if (this.$tableRef) {
            //debugger;
            // Setup - add a text input to each header cell

            var columns = this.getDataTableOptions().columns;

            var $header = this.$dataTableRef.tables().header().to$();
            var $newRow = $('<tr></tr>');
            $header.append($newRow);

            this.$dataTableRef.columns().every((idx) => {
                var column = columns[idx];
                var $newColumn = $('<td></td>');
                if (column.searchable) {
                    switch (column.type) {
                        case "num":
                            if (column.name == "severity") {
                                let options = ['<option value="">' + this.t('labels.all') + '</option>'];
                                $.each(EnumHelper.getNames(SEVERITY), (name, value)=> {
                                    options.push('<option value="' + value + '">' + this.i18n.t('enums.SEVERITY.' + value + '.title') + '</option>');
                                });
                                $newColumn.append($('<select id="filter_' + idx + '" class="form-control input-sm input-circle" >' + options.join('') + '</select>'));
                            }
                            else if (column.name == "alarmStatus") {
                                let options = ['<option value="">' + this.t('labels.all') + '</option>'];
                                $.each(EnumHelper.getNames(ALARMSTATUS,true), (name, value)=> {
                                    options.push('<option value="' + value + '">' + this.i18n.t('enums.ALARMSTATUS.' + value + '.title') + '</option>');
                                });
                                $newColumn.append($('<select id="filter_' + idx + '" class="form-control input-sm input-circle" >' + options.join('') + '</select>'));
                            }
                            else {
                                let options = [];
                                $.each(EnumHelper.getNames(ALARMTYPE,true), (name, value)=> {
                                    if (!(value == ALARMTYPE.NONE.toString() || value == ALARMTYPE.GENERIC_EVENT.toString())) {
                                        options.push('<option value="' + value + '">' + this.i18n.t('enums.ALARMTYPE.' + value) + '</option>');
                                    }
                                });
                                $newColumn.append($('<select id="filter_' + idx + '" class="form-control input-sm input-circle" style="max-width: 4vw;">' + options.join('') + '</select>'));
                            }
                            break;
                        case "date":
                            $newColumn.append($('<div class="btn btn-circle btn-default daterangepicker" id="filter_' + idx + '" style="position:inherit;"><i class="fa fa-calendar"></i> &nbsp;<span> </span><b class="fa fa-angle-down"></b></div>'));
                            break;

                        //WARN this case must be the last one before "default" definition!!
                        case "string":
                            if (column.name == "name") {
                                let options = ['<option value="">' + this.t('labels.all') + '</option>'];
                                let ALARM_NAMES = this.i18n.t('enums.ALARM_NAMES', { returnObjectTrees : true });
                                let sortedKeys = this.baseServices.utils.sortedObjectKeysByValue(ALARM_NAMES);
                                $.each(sortedKeys, (name)=> {
                                    let value = ALARM_NAMES[sortedKeys[name]];
                                    options.push('<option value="' + name + '">' + value + '</option>');
                                });
                                $newColumn.append($('<select id="filter_' + idx + '" class="form-control input-sm input-circle" style="max-width: 8vw;">' + options.join('') + '</select>'));
                                break;// WARN this break is inside the IF on purpose, do not change its position
                            }
                        //there is no break here on purpose.
                        default:
                            $newColumn.append($('<div class="input-icon right" ><i class="fa fa-times-circle clear_input" data-index="' + idx + '"></i><input id="filter_' + idx + '" type="text" class="form-control input-circle input-sm" placeholder="' + this.t('labels.all') + '" style="width: 100%;"></div>'));
                    }


                }
                $newRow.append($newColumn);

                $("#filter_" + idx, $newColumn).on("change", (e)=> {
                    //console.log($(e.currentTarget).val());
                    this.updateSearch();
                });

                // $("#filter_" + idx, $newColumn).on("apply.daterangepicker", (ev, picker)=> {
                //     //console.log(picker.startDate.format('YYYY-MM-DD'));
                //     //console.log(picker.endDate.format('YYYY-MM-DD'));
                //     this.updateSearch();
                // });

            });

            $(".clear_input", $newRow).on("click", (e)=> {
                let $input = $("#filter_" + $(e.currentTarget).data('index'), $newRow);
                if (is.not.empty($input.val())) {
                    $input.val('');
                    this.updateSearch();
                }
            });

            this.archiveSwitch();

            // Apply the search
            // this.$dataTableRef.columns().every( function () {
            //     var that = this;
            //
            //     $( 'input', this.footer() ).on( 'keyup change', function () {
            //         if ( that.search() !== this.value ) {
            //             that
            //                 .search( this.value )
            //                 .draw();
            //         }
            //     } );
            // } );

            this.$tableRef.on('click', 'tbody > tr', (e: JQueryEventObject) => {
                let $row = $(e.currentTarget);

                //let rowData = this.$dataTableRef.row($row).data();
                let rowIndex = this.$dataTableRef.row($row).index();
                this.selectRow(rowIndex, $row);
            });

        }
    }

    getDataTableOptions() {
        return this.dataProvider.getDataTableOptions(this);
    }

    getDefaultFields() {
        return this.dataProvider.getDefaultFields();
    }

    handleDateRangePickers() {
        if ($(".daterangepicker")[1]) {
            ($(".daterangepicker")[1]).remove();
        }
        /*
         $('#defaultrange').daterangepicker({
         //opens: (App.isRTL() ? 'left' : 'right'),
         format: 'MM/DD/YYYY',
         separator: ' to ',
         startDate: moment().subtract('days', 29),
         endDate: moment(),
         ranges: {
         'Today': [moment(), moment()],
         'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
         'Last 7 Days': [moment().subtract('days', 6), moment()],
         'Last 30 Days': [moment().subtract('days', 29), moment()],
         'This Month': [moment().startOf('month'), moment().endOf('month')],
         'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
         },
         minDate: '01/01/2012',
         maxDate: '12/31/2018',
         },
         function (start, end) {
         $('#defaultrange input').val(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
         }
         );

         $('#defaultrange_modal').daterangepicker({
         //opens: (App.isRTL() ? 'left' : 'right'),
         format: 'MM/DD/YYYY',
         separator: ' to ',
         startDate: moment().subtract('days', 29),
         endDate: moment(),
         minDate: '01/01/2012',
         maxDate: '12/31/2018',
         },
         function (start, end) {
         $('#defaultrange_modal input').val(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
         }
         );

         // this is very important fix when daterangepicker is used in modal. in modal when daterange picker is opened and mouse clicked anywhere bootstrap modal removes the modal-open class from the body element.
         // so the below code will fix this issue.
         $('#defaultrange_modal').on('click', function () {
         if ($('#daterangepicker_modal').is(":visible") && $('body').hasClass("modal-open") == false) {
         $('body').addClass("modal-open");
         }
         });
         */
        if(this.archive) {
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
                startDate: moment().subtract('days', 6).startOf('day'),
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
            }


            $.each(ranges, (key, value) => {
                daterangepickeroptions.ranges[this.i18n.t('common.datetimerangepicker.ranges.' + key)] = value;
            })

            let $daterangepickers = $('.daterangepicker');
            let dateDisplayFunc = (start, end) => {
                $('span', $daterangepickers).html(this.formatDate(start) + ' - ' + this.formatDate(end));
            };

            $daterangepickers.daterangepicker(daterangepickeroptions, dateDisplayFunc);
            $daterangepickers.on("apply.daterangepicker", (ev, picker)=> {
                //console.log(picker.startDate.format('YYYY-MM-DD'));
                //console.log(picker.endDate.format('YYYY-MM-DD'));
                this.updateSearch();
            });

            //Set the initial state of the picker label
            dateDisplayFunc(daterangepickeroptions.startDate, daterangepickeroptions.endDate);
        }else{
            if (!jQuery().daterangepicker) {
                return;
            }

            let dayLimit = 4;
            let locale: any = this.i18n.t('common.datetimerangepicker.locale', {returnObjectTrees: true});
            //these 3 lines are workaround for i18next problem, that returns everything as objects
            locale.daysOfWeek = $.map(locale.daysOfWeek, val => val);//convert from object to array
            locale.monthNames = $.map(locale.monthNames, val => val);//convert from object to array

            let daterangepickeroptions = {

                //opens: (App.isRTL() ? 'left' : 'right'),
                startDate: moment().subtract('years', 1).startOf('day'),
                endDate: moment().subtract('years', 1).endOf('day'),
                minDate: moment().subtract('years', 5).startOf('day'),
                maxDate: moment().subtract('years', 1).endOf('day'),
                dateLimit: {
                    years: dayLimit
                },
                showDropdowns: true,
                showWeekNumbers: true,
                timePicker: true,
                timePickerIncrement: 1,
                timePicker12Hour: false,
                timePicker24Hour: true,
                ranges: {},
                buttonClasses: ['btn'],
                applyClass: 'green',
                cancelClass: 'default',
                locale: locale
            };

            let ranges = {};

            $.each(ranges, (key, value) => {
                daterangepickeroptions.ranges[this.i18n.t('common.datetimerangepicker.ranges.' + key)] = value;
            })

            let $daterangepickers = $('.daterangepicker');
            let dateDisplayFunc = (start, end) => {
                $('span', $daterangepickers).html(this.formatDate(start) + ' - ' + this.formatDate(end));
            };

            $daterangepickers.daterangepicker(daterangepickeroptions, dateDisplayFunc);
            $daterangepickers.on("apply.daterangepicker", (ev, picker)=> {
                //console.log(picker.startDate.format('YYYY-MM-DD'));
                //console.log(picker.endDate.format('YYYY-MM-DD'));
                this.updateSearch();
            });
            //Set the initial state of the picker label
            dateDisplayFunc(daterangepickeroptions.startDate, daterangepickeroptions.endDate);
        }
        this.updateSearch();
    }

    public updateSearch() {
        this.reload(true);
    }

    makeDataTableRequest(requestOptions: any, data: any, callback: (data: any)=>void) {
        //debugger;
        let queryOptions = requestOptions.queryOptions;
        this.generateDetails();

        var columns = this.getDataTableOptions().columns;

        $.each(columns, (key, column)=> {

            if (column.searchable) {

                let $input = $("#filter_" + key, this.$tableRef);
                let localQueryOptions = null;
                switch (column.type) {
                    case "date":
                        let $picker = $input.data('daterangepicker');
                        //console.log($picker.startDate.format('YYYY-MM-DD'));
                        //console.log($picker.endDate.format('YYYY-MM-DD'));
                        localQueryOptions = <QueryOptions>{
                            operator: QUERYOP.AND,
                            leftQuery: <QueryOptions>{
                                operator: QUERYOP.GREATER_EQUAL,
                                fieldName: column.name,
                                fieldValue: moment($picker.startDate).toISOString()
                            },
                            rightQuery: <QueryOptions>{
                                operator: QUERYOP.SMALLER_EQUAL,
                                fieldName: column.name,
                                fieldValue: moment($picker.endDate).toISOString()
                            }
                        };
                        break;
                    case "num": {
                        let value = $input.val();
                        if (is.existy(value) && is.not.empty(value)) {
                            localQueryOptions = <QueryOptions>{
                                operator: QUERYOP.VALUE,
                                fieldName: column.name,
                                fieldValue: value
                            };
                        }
                        break;

                    }
                    default:
                        let value = $input.val();
                        if (is.existy(value) && is.not.empty(value)) {
                            let fields = column.name.split(',');
                            $.each(fields, (idx, field)=> {
                                let fieldQuery = <QueryOptions>{
                                    operator: QUERYOP.VALUE,
                                    fieldName: field,
                                    fieldValue: value
                                };

                                if (!localQueryOptions) {
                                    localQueryOptions = fieldQuery;
                                } else {
                                    localQueryOptions = <QueryOptions>{
                                        operator: QUERYOP.OR,
                                        leftQuery: fieldQuery,
                                        rightQuery: localQueryOptions
                                    };
                                }
                            });
                        }
                }

                if (localQueryOptions) {
                    if (!queryOptions) {
                        queryOptions = localQueryOptions;
                    } else {
                        queryOptions = <QueryOptions>{
                            operator: QUERYOP.AND,
                            leftQuery: localQueryOptions,
                            rightQuery: queryOptions
                        };
                    }
                }

            }
        });

        if (is.existy(queryOptions)) {
            requestOptions.queryOptions = queryOptions;
        }

        this.dataProvider.makeDataTableRequest(this, requestOptions, data, (calbackdata)=> {
            callback(calbackdata);
            this.selectRow(0);
        });
    }

    public formatDate(date: any) {
        return date.format(this.i18n.t('common.date_format_short'));
    }

    public formatDateTime(date: any) {
        return date.format(this.i18n.t('common.datetime_format_short'));
    }

    public static FIELDS = [
        'id',
        'name',
        'type',
        'severity',
        'alarmStatus',
        'time',
        'vtnName',
        'sourceHost',
        'source',
        'reportingMethod',
        'sourceInstance',
        'resource',
        'solveTime',
        'resolver',
        'resolveNote',
        'correctionAction'
    ];
    public static COLORS = {
        'FATAL': 'note-danger',
        'CRITICAL': 'note-warning',
        'MAJOR': 'note-success',
        'MINOR': ''
    };

    public generateDetails(rowData?: AlarmDTO) {
        if (rowData) {
            let details = [];

            $.each(AlarmLogListPage.FIELDS, (idx, field)=> {

                if (rowData.type == ALARMTYPE.EVENT && field == "alarmStatus") return;

                let value = rowData[field];
                if (is.existy(value) && is.not.empty(value)) {
                    if (field == 'time') {
                        details.push({
                            title: this.t('fields.' + field) || field,
                            value: this.formatDateTime(moment(value))
                        });
                    } else if (field == 'name') {
                        details.push({
                            title: this.t('fields.' + field) || field,
                            value: this.dataProvider.getAlarmName(value)
                        });
                    }
                    else if (field == 'severity' || field == 'type' || field == 'alarmStatus') {
                        let translated = this.i18n.t('enums.' + AlarmDTODef.fields[field].type.toString().replace('_', '') + "." + value, {returnObjectTrees: true});
                        let line;
                        if (is.string(translated)) {
                            line = translated;
                        } else {
                            line = `<span class="font-${translated.color}"><i class="${translated.icon}"></i> ${translated.title}</span>`;
                        }
                        details.push({title: this.t('fields.' + field) || field, value: line});
                    } else if(field == 'reportingMethod'){
                        details.push({title: this.t('fields.' + field) || field, value: rowData.reportingMethod});
                    } else if(field == 'solveTime'){
                        details.push({title: this.t('fields.' + field) || field, value: rowData.solveTime});
                    } else if(field == 'resolver'){
                        details.push({title: this.t('fields.' + field) || field, value: rowData.resolver});
                    } else if(field == 'resolveNote'){
                        details.push({title: this.t('fields.' + field) || field, value: rowData.resolveNote});
                    }else if(field == 'resource'){
                        details.push({title: this.t('fields.' + field) || field, value: rowData.source+':'+rowData.resource});
                    }else {
                        details.push({title: this.t('fields.' + field) || field, value: value});
                    }
                }
            })
            //this.description = rowData.description;
            this.translateDescription(rowData.description);
            this.details = details;
            this.noteType = AlarmLogListPage.COLORS[rowData.severity];
        } else {
            this.description = this.noteType = this.details = null;
        }
    }

    private transReq:JQueryXHR = null;
    private translateDescription(description: string) {
        this.description = "...";
        if (this.transReq)  this.transReq.abort();
        this.transReq = this.baseServices.uiHelper.translate(description,this.baseServices.sessionManager.language, (translated)=>{
            this.description = translated;
        });
    }

    public selectRow(rowIndex: number, $selector?: JQuery) {
        let $row = $selector || $('tbody tr:first', this.$tableRef);
        if (!$row.hasClass('selected')) {
            //MLAT-1385 requirement
            //     $row.removeClass('selected');
            //     this.selectedAlarm = null;
            //     this.generateDetails();
            // }
            // else {

            $('tr.selected', this.$tableRef).removeClass('selected');
            $row.addClass('selected');

            let rowData = this.currentList[rowIndex];

            this.selectedAlarm = rowData;
            //console.log(rowIndex, rowData);
            this.generateDetails(rowData);
            this.changeDetector.detectChanges();
        }

    }

    public getDetailTitle() {
        //return this.selectedAlarm ? this.i18n.t('alarm_logs.details.title', { name : this.dataProvider.getAlarmName(this.selectedAlarm.name)}) : this.i18n.t('alarm_logs.details.title_no_selection');
        return this.i18n.t(this.selectedAlarm ? 'alarm_logs.details.title' : this.i18n.t('alarm_logs.details.title_no_selection'));
    }

}

