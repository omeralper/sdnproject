/**
 * Created by ekinca on 29.09.2016.
 */
import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef} from '@angular/core';
import {BaseDataTablesPage} from "../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {PageServices} from "../../PageServices";
import {FlowStatisticsApi} from "../../../swagger/FlowStatisticsApi";
import {UserFlowStatRequest} from "../../../swagger/UserFlowStatRequest";
import {FlowStatsListResponse} from "../../../swagger/FlowStatsListResponse";
import {DIALOG_TYPES} from "../../UIHelper";
import {FlowStats} from "../../../swagger/FlowStats";
import {NacUserApi} from "../../../swagger/NacUserApi";
import {FlowStatsDTO} from "../../../swagger/FlowStatsDTO";

enum SEARCHMODE {
    USERNAME,
    IP
}

@Component({ moduleId: module.id,
    selector: 'UserFlowStats',
    templateUrl: './UserLogListPage.html',
    providers: [FlowStatisticsApi, NacUserApi],

})
export class UserFlowStats extends BaseDataTablesPage<FlowStats> implements OnInit, OnDestroy, OnChanges, AfterViewInit {
    public $datatableWrapper;
    public userName;
    public $beginTime;
    public $endTime;
    public $userCombo;
    public userNameSearch;
    public userIPSearch;
    public userList;
    public userid;
    public uname;
    public usurname;
    public searchMode = SEARCHMODE.USERNAME;
    public $dateRangePicker;

    constructor(public flowStatsApi:FlowStatisticsApi, baseServices:PageServices, elementRef:ElementRef, public nacUserApi: NacUserApi) {
        super(baseServices, elementRef);
        this.setI18NKey('user_management.user_logs.list');
        this.isServerSide = false;
    }

    ngOnChanges(e) {
        super.ngOnChanges(e);
        this.logger.info('something changed',e);
    }

    ngOnInit() {
        super.ngOnInit();
    }

    ngAfterViewInit() {
        if (super.ngAfterViewInit()) {
            //Code here
            this.$datatableWrapper = $('#flow-stat-table-wrapper');
            this.$beginTime = $('#begin-time');
            this.$endTime = $('#end-time');
            this.$dateRangePicker = $('#filter_1');

            setTimeout(()=>{
                this.$userCombo = $('#user_combo');
            },200);

            $('#tab_15_user_search').on("click", ()=>{
                this.searchMode = SEARCHMODE.USERNAME;
            });

            $('#tab_15_ip_search').on("click", ()=>{
                this.searchMode = SEARCHMODE.IP;
            });

            this.$beginTime.datetimepicker();
            this.$endTime.datetimepicker();
            //this.$dateRangePicker.daterangepicker();
            this.handleDateRangePicker();

            let request:any = {
                token: {
                    requestId: "UI",//TODO generate UUID
                    timestamp: (new Date()).toISOString()
                },
                etag: "",
                digest: ""
            };

            $('#user_combo').typeahead({
                    minLength: 3,
                    highlight: true
                },
                {
                    name: 'my-dataset',
                    source: (query, syncResults, asyncResults)=>{
                        var searchRequest = {
                            "pageSize": 0,
                            "startPage": 0,
                            "sortOptions": {
                                "fieldName": "username",
                                "isAscend": true
                            },
                            "queryOptions": {
                                "operator": "VALUE",
                                "fieldName": "*",
                                "fieldValue": query,
                                "leftQuery": null,
                                "rightQuery": null
                            },
                            "fields": ["id", "username", "name", "surname", "email"]
                        };
                        request.options = searchRequest;
                        this.nacUserApi.userSearchPOST(request,false).subscribe(
                            (res)=>{
                                if(res && res.data && res.data.list){
                                    if(res.data.list.length > 0){
                                        this.userList = res.data.list;
                                        var data = [];
                                        for(var i = 0; i < this.userList.length; i++){
                                            if(this.userList[i].username.indexOf(query) > -1){
                                                data.push(this.userList[i].username);
                                            }
                                        }
                                        return asyncResults(data);
                                    }else{

                                    }
                                }else{

                                }
                            }
                        );
                    }
                });

            return true;
        }
        return false;
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

    getDataTableOptions() {
        return {
            columns: [
                //{title: '<input type="checkbox" class="group-checkable icheck">', type:'html', name:'id'},
                {title: this.ft('user'), width: '13%', orderable: true, type: 'string', name: 'user'},
                {title: this.ft('name'), width: '10%', orderable: true, type: 'string', name: 'name'},
                {title: this.ft('surname'), width: '10%', orderable: true, type: 'string', name: 'surname'},
                {title: this.ft('srcIP'), width: '13%', orderable: true, type: 'number', name: 'srcIP'},
                {title: this.ft('dstIP'), width: '14%', orderable: true, type: 'number', name: 'dstIP'},
                {title: this.ft('bytes'), width: '8%', orderable: true, type: 'number', name: 'bytes'},
                {title: this.ft('life'), width: '8%', orderable: true, type: 'number', name: 'life'},
                {title: this.ft('packets'), width: '8%', orderable: true, type: 'number', name: 'packets'},
                {title: this.ft('rate'), width: '8%', orderable: true, type: 'number', name: 'rate'},
                {title: this.ft('protocol'), width: '8%', orderable: true, type: 'number', name: 'protocol'},
            ],
            "order": [
                [1, "asc"]
            ], // set first column as a default sort by asc
        };
    }

    queryUserFlowStats(){
        if( (this.searchMode == SEARCHMODE.USERNAME) && !(this.userNameSearch) ){
            this.baseServices.uiHelper.notify(this.t("messages.select_user"), DIALOG_TYPES.WARNING);
            return;
        }else if ( (this.searchMode == SEARCHMODE.IP) && !(this.userIPSearch) ){
            this.baseServices.uiHelper.notify(this.t("messages.write_ip"), DIALOG_TYPES.WARNING);
            return;
        }

        if( !( this.$beginTime.find("input").datepicker("getDate") || this.$endTime.find("input").datepicker("getDate")) ){
            this.baseServices.uiHelper.notify(this.t("messages.select_date"), DIALOG_TYPES.WARNING);
            return;
        }
        this.fillDataTable();
    }

    fillDataTable(){

        let request:any = {
            token: {
                requestId: "UI",//TODO generate UUID
                timestamp: (new Date()).toISOString()
            },
            etag: "",
            digest: ""
        };
        if(this.searchMode == SEARCHMODE.USERNAME){
            if(this.userList && $('#user_combo').val() && $('#user_combo').val().length > 0){
                var flag = false;
                for(var user = 0; user < this.userList.length; user++){
                    if(this.userList[user].username == $('#user_combo').val()){
                        this.userName = this.userList[user].username;
                        this.userid = this.userList[user].id;
                        this.uname = this.userList[user].name;
                        this.usurname = this.userList[user].surname;
                        flag = true;
                    }
                }
                if(!flag){
                    this.baseServices.uiHelper.notify(this.t("messages.no_user"), DIALOG_TYPES.ERROR);
                    return;
                }
            }else{
                this.baseServices.uiHelper.notify($.t("common.messages.RETURN_STATUS.SERVER_ERROR"), DIALOG_TYPES.ERROR);
                return;
            }
        }else {
            if(this.userIPSearch && this.userIPSearch.length > 0){
                this.userid = this.encrytIP(this.userIPSearch);
                if(!this.userid){
                    this.baseServices.uiHelper.notify(this.t("messages.no_ip"), DIALOG_TYPES.ERROR);
                    return;
                }
            }
        }


        let userFlowStatRequest: any = {
            knownUser: (this.searchMode == SEARCHMODE.USERNAME ? true : false),
            downsamplingPeriod: 30,
            responseLimit: 1000,
            beginTime: moment(this.$dateRangePicker.data('daterangepicker').startDate).valueOf(),//new Date(this.$beginTime.find("input").datepicker("getDate")).getTime(),
            endTime: moment(this.$dateRangePicker.data('daterangepicker').endDate).valueOf(),//new Date(this.$endTime.find("input").datepicker("getDate")).getTime(),
            user: Number(this.userid)//1030550402
        };

        $.extend(request,userFlowStatRequest);


        //use list function
        this.flowStatsApi
            .flowStatsUserPOST(<UserFlowStatRequest>request)
            .subscribe(
                (res) => {
                    //if(this.baseServices.uiHelper.processResponse(res)){TODO
                        if(res && res.data && res.data.length > 0){
                            executeCallback(<FlowStatsListResponse>res);
                        }else if(res && res.data && res.data.length == 0){
                            this.baseServices.uiHelper.notify(this.t("messages.no_data"), DIALOG_TYPES.ERROR);
                        }else{
                            this.baseServices.uiHelper.notify("SERVER_ERROR, displaying test data", DIALOG_TYPES.WARNING);
                            this.$dataTableRef.clear();
                            this.$dataTableRef.rows.add([[this.userName || "test1","test2","test3","test4"]]).draw();
                        }
                    //}

                }
            );

        this.logger.debug("Request:",request);

        let executeCallback = (response:FlowStatsListResponse) => {
            //debugger;
            let dataTableData = [];

            if (response && response.data && response.data[0] && response.data[0].upStats && response.data[0].downStats/* && this.baseServices.uiHelper.processResponse(response)*/) {

                //*** leaving currentList like this cuz it might change in the future with search/post mechanics
                //upstats
                var allList = response.data;

                allList.forEach((fsd:FlowStatsDTO)=>{
                    this.currentList = fsd.upStats;

                    this.currentList.forEach((itm:FlowStats, idx)=> {

                        dataTableData.push(
                            [
                                //'<input type="checkbox" value="' + itm.id + '" class="group-checkable icheck">',
                                this.userName || "no user name",
                                this.uname || " ",
                                this.usurname || " ",
                                fsd.srcIP + ":" + fsd.srcPort||'',
                                fsd.dstIP + ":" + fsd.dstPort||'',
                                itm.bytes,
                                itm.life,
                                itm.packets,
                                itm.rate,
                                fsd.protocol
                            ]
                        );
                    });

                    this.currentList = fsd.downStats;
                    this.currentList.forEach((itm:FlowStats, idx)=> {

                        dataTableData.push(
                            [
                                //'<input type="checkbox" value="' + itm.id + '" class="group-checkable icheck">',
                                this.userName || "no user name",
                                this.uname || " ",
                                this.usurname || " ",
                                fsd.dstIP + ":" + fsd.dstPort ||'',
                                fsd.srcIP + ":" + fsd.srcPort ||'',
                                itm.bytes,
                                itm.life,
                                itm.packets,
                                itm.rate,
                                fsd.protocol
                            ]
                        );
                    });
                });

                this.$dataTableRef.clear();
                this.$dataTableRef.rows.add(dataTableData).draw();
            } else {
                this.logger.error('FlowStats DataTables Error:');
            }

        }
    }

    handleDateRangePicker(){
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

        $.each(ranges, (key, value)=> {
            daterangepickeroptions.ranges[this.i18n.t('common.datetimerangepicker.ranges.' + key)] = value;
        })

        //this.$dateRangePicker = $('.daterangepicker');
        let dateDisplayFunc = (start, end)=> {
            $('span', this.$dateRangePicker).html(this.formatDate(start) + ' - ' + this.formatDate(end));
        };

        this.$dateRangePicker.daterangepicker(daterangepickeroptions, dateDisplayFunc);
        dateDisplayFunc(daterangepickeroptions.startDate, daterangepickeroptions.endDate);
    }

    public formatDate(date: any) {
        return date.format(this.i18n.t('common.date_format'));
    }

    public formatDateTime(date: any) {
        return date.format(this.i18n.t('common.datetime_format'));
    }

    encrytIP(ip){
        if (/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(ip)) {
            let nums = ip.split('.');
            let bits = [24, 16, 8, 0];
            let decs = [];
            let dec = 0;

            decs = nums.map(function(num, index) {
                return Number.parseInt(num, 10) << bits[index];
            });

            // unsigned int
            decs[0] = decs[0] >>> 0;

            dec = decs.reduce(function(a, b) {
                return a + b;
            });

            return dec;
        } else {
            console.log('bad IP address');
            return null;
        }
    }

    makeDataTableRequest(requestOptions:any, data:any, callback:(data:any)=>void) {
            callback({
                draw: data.draw,
                // recordsTotal: response.data ? response.data.totalItems : [],
                // recordsFiltered: response.data ? response.data.totalItems : [],
                data: []
            });

    }

}
