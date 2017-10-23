/**
 * Created by yildirayme on 21.04.2016.
 */
import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {BaseDataTablesPage} from "../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {PageServices} from "../../PageServices";
import {AlarmApi} from "../../../swagger/AlarmApi";
import {AlarmDTO} from "../../../swagger/AlarmDTO";
import {GenericSearchRequest} from "../../../swagger/GenericSearchRequest";
import {AlarmListResponse} from "../../../swagger/AlarmListResponse";
import {ListOptions} from "../../../swagger/ListOptions";
import {AlarmLogListPopup} from "../AlarmLogListPopup/AlarmLogListPopup";
import {QueryOptions} from "../../../swagger/QueryOptions";
import {QUERYOP} from "../../../swagger/QUERYOP";
import {ALARMTYPE} from "../../../swagger/ALARMTYPE";
import {AlarmEvent, ALARM_SYSTEM} from "../Core/AlarmEventsListener";
import {AlarmLogListProvider} from "../AlarmLogListPage/AlarmLogListProvider";
import {EventsManager} from "../../EventsManager";
import {AlarmResolvePopup} from "../AlarmResolvePopup/AlarmResolvePopup";
import {GenericIdRequest} from "../../../swagger/GenericIdRequest";
import {EmergencyPolicyApi} from "../../../swagger/EmergencyPolicyApi";
import {Action} from "../../../commons/Action";
import {ALARMRESOURCE} from "../../../swagger/ALARMRESOURCE";
import {ControllerApi} from "../../../swagger/ControllerApi";
import {Headers} from "@angular/http";
import {ALARMSTATUS} from "../../../swagger/ALARMSTATUS";


@Component({ moduleId: module.id,
    selector: 'AlarmListPage',
    templateUrl: '../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html',
    providers:[EmergencyPolicyApi]
})
export class AlarmListPage extends BaseDataTablesPage<AlarmDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {
    public type;
    public alarmListener;
    public alarmEventListener;
    private query: any;

    constructor(public dataProvider: AlarmLogListProvider,
                //public alarmEventsListener:AlarmEventsListener,
                public eventsManager:EventsManager,
                public route:ActivatedRoute,
                public alarmApi:AlarmApi,
                baseServices:PageServices,
                elementRef:ElementRef,
                public emergencyPolicyApi: EmergencyPolicyApi,
                public controllerApi: ControllerApi) {
        super(baseServices, elementRef);

        let token:any = route.snapshot.params["type"];
        this.query = route.snapshot.params["query"];
        let isFirst = false;
        this.route.params.subscribe(params => {
            if(isFirst){
                token = params['type'];
                this.query = params['query'];
                this.type = (token || ALARMTYPE.ALARM.toString());
                this.setI18NKey(this.type == "ALARM" ? "alarms.list" : "alarm_events.list");
                let result = this.p();
                if (result) {
                    this.updateRowActions();
                    this.baseServices.uiHelper.populatei18nFields(this.$container);
                    this.baseServices.permManager.checkPermissions(this.$container);
                    this.baseServices.uiHelper.initSlimScroll(this.$container);
                    this.baseServices.uiHelper.populateTooltips(this.$container);
                } else {
                    this.baseServices.uiHelper.showError(this.$container, this.i18n.t('common.messages.RETURN_STATUS.ACCESS_DENIED'));
                }
                this.initDataTable();
                this.subscribeAlarmEvents();
            }
            isFirst = true;
        });

        this.type = (token || ALARMTYPE.ALARM.toString());
        this.setI18NKey(this.type == "ALARM" ? "alarms.list" : "alarm_events.list");

        this.updateRowActions();
    }

    private updateRowActions() {
        this.setRowActions([
            /*
             this.createAction('@view', (itm:AlarmDTO)=> {
             this.logger.debug('View alarm ' + itm.name + ' action clicked');
             this.baseServices.sharedService.showModal(AlarmLogListPopup, itm, (result)=> {
             });
             }),*/
            this.createAction('@view_logs', (itm:AlarmDTO)=> {
                this.logger.debug('View alarm ' + itm.name + ' action clicked');
                this.baseServices.sharedService.showModal(AlarmLogListPopup, itm, (result)=> {
                });
            }),
            this.createAction('@resolve', (itm:AlarmDTO)=> {
                this.logger.debug('Resolve alarm ' + itm.name + ' action clicked');
                this.baseServices.sharedService.showModal(AlarmResolvePopup, itm, (result)=> {
                });
            }),
            this.createAction('@emergency', (itm:AlarmDTO)=> {
                this.logger.debug('Emergency ' + itm.name + ' action clicked');
                this.baseServices.uiHelper.confirm(this.i18n.t('alarms.list.messages.emergency', {dto: itm}), (selected:Action)=> {
                    if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
                        //this.baseServices.uiHelper.alert("OK we will delete");

                        let request = this.baseServices.apiHelper.genRequest({
                                id: itm.emergencyPolicyIdArray[0]
                            }
                        );

                        this.emergencyPolicyApi
                            .emergencyPolicyStartStopVnfPOST(<GenericIdRequest>request)
                            .subscribe(
                                (res) => {
                                    if (this.baseServices.uiHelper.processResponse(res, this.i18n.t('alarms.list.messages.emergency_confirm'))) {
                                    }
                                },
                                (error:any) => {
                                    this.baseServices.uiHelper.processResponse(error._body); //JSON parsing is handled in the function now
                                }
                            );

                    }
                })
            }),
            this.createAction('@controller', (itm:AlarmDTO)=> {
                this.baseServices.uiHelper.confirm(this.i18n.t('alarms.list.messages.controller', {dto: event}), (selected:Action)=> {
                    if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
                        //this.baseServices.uiHelper.alert("OK we will delete");

                        let request = this.baseServices.apiHelper.genRequest({
                            id: itm.sourceInstance
                            }
                        );

                        let header = new Headers();
                        header.append('X-NODE_ID', itm.sourceInstance );

                        this.controllerApi
                            .controllerHaltPOST(<GenericIdRequest>request, false, header)
                            .subscribe(
                                (res) => {
                                    if (this.baseServices.uiHelper.processResponse(res, this.i18n.t('alarms.list.messages.controller_confirm'))) {
                                    }
                                },
                                (error:any) => {
                                    this.baseServices.uiHelper.processResponse(error._body); //JSON parsing is handled in the function now
                                }
                            );

                    }
                });
            }),
            // this.createAction('@edit', (itm:AlarmDTO)=> {
            //     this.logger.debug('Edit alarm ' + itm.name + ' action clicked');
            //     this.baseServices.sharedService.showModal(AlarmEditPopup, itm,(result)=>{
            //             if (result.isSuccess) this.reload();
            //         });
            // })
        ]);
    }

    ngOnChanges(e) {
        super.ngOnChanges(e);
        this.logger.info('something changed', e);
    }

    ngOnInit() {
        super.ngOnInit();
    }

    subscribeAlarmEvents(){
        this.unsubscribeAlarmEvents();

        if (this.type=="ALARM") {
            this.baseServices.logger.debug("LISTENING ALARMS");
            this.alarmListener = this.eventsManager.on<AlarmEvent>(ALARM_SYSTEM.ALARM, (event) => {
                this.baseServices.logger.debug("ALARM RECEIVED", event.eventData.data);
                this.baseServices.utils.delayedExec('AlarmListPage.ALARM', 500, ()=> {
                    this.reload();
                });
            });
        }

        if (this.type=="EVENT") {
            this.baseServices.logger.debug("LISTENING ALARM_EVENTS");
            this.alarmEventListener = this.eventsManager.on<AlarmEvent>(ALARM_SYSTEM.EVENT, (event) => {
                this.baseServices.logger.debug("ALARM_EVENT RECEIVED", event.eventData.data);
                this.baseServices.utils.delayedExec('AlarmListPage.ALARMEVENT', 500, ()=> {
                    this.reload();
                });
            });
        }
    }

    ngAfterViewInit() {
        if (super.ngAfterViewInit()) {
            //Code here
            this.subscribeAlarmEvents();
            return true;
        }
        return false;

    }

    ngOnDestroy() {
        this.unsubscribeAlarmEvents();
        super.ngOnDestroy();
    }

    getDataTableOptions() {
        return {
            columns: [
                //{title: '<input type="checkbox" class="group-checkable icheck">', type:'html', name:'id'},
                {title: this.ft('time'), width: '10%', orderable: true, type: 'date', name: 'time', className: "dt-center",searchable: true},
                {title: this.ft('severity_short'), width: '9%', orderable: true, type: 'string', name: 'severity', className: "dt-center"},
                //INFO: alarmStatus is not available for Alarms and Events
                //{title: this.ft('status_short'),tooltip: this.ft('status'), width: '4%', orderable: true, type: 'string', name: 'alarmStatus', className: "dt-center", visible: (this.type != "ALARM")},
                {title: this.ft('id_short'),tooltip: this.ft('id'), width: '5%', orderable: true, type: 'number', name: 'id', searchable: true },
                {title: this.ft('name'), width: '15%', orderable: true, type: 'num', name: 'name',searchable: true, fieldValueConverter: (val)=>{ return this.dataProvider.getAlarmName(val,true); }},
                {
                    title: this.ft('sourceHost'),
                    width: '15%',
                    orderable: true,
                    type: 'num',
                    name: 'sourceHost',
                    searchable: true
                },
                {title: this.ft('vtnname'), width: '20%', orderable: true, type: 'string', name: 'vtnName',searchable: true},
                {title: this.ft('resource'), width: '20%', orderable: true, type: 'date', name: 'resource',searchable: true},
                {
                    title: $.t('common.fields.actions'),
                    width: '7%',
                    orderable: false,
                    type: 'html',
                    defaultContent: '',
                    className: 'action_cell'
                }
            ],
            "order": [
                [0, "desc"]
            ], // set first column as a default sort by asc
            argExtraFields : ["source","sourceInstance","detail","description","vtnId", "resourceId","alarmStatus"],
            searching: true,
            search: {
                search: this.query || ''
            }
        };
    }

    public getDefaultFields() {
        return this.dataProvider.getDefaultFields();
    }

    makeDataTableRequest(requestOptions:any, data:any, callback:(data:any)=>void) {
        //debugger;
        let request;

        // if (requestOptions.queryOptions) {

            //Expected implementation, but disabled untils full search functionality is implemented
            if (is.existy(requestOptions.queryOptions)) {

                if (this.type == "ALARM") {

                    requestOptions.queryOptions = <QueryOptions>{
                        operator: QUERYOP.AND,
                        leftQuery: {
                            operator: QUERYOP.VALUE,
                            fieldName: 'alarmStatus',
                            fieldValue: 'ON'
                        },
                        rightQuery: <QueryOptions>{
                            operator: QUERYOP.AND,
                            leftQuery: {
                                operator: QUERYOP.VALUE,
                                fieldName: 'type',
                                fieldValue: this.type
                            },
                            rightQuery: requestOptions.queryOptions
                        }
                    };
                } else {
                    requestOptions.queryOptions = <QueryOptions>{
                        operator: QUERYOP.AND,
                        leftQuery: {
                            operator: QUERYOP.VALUE,
                            fieldName: 'type',
                            fieldValue: this.type
                        },
                        rightQuery: requestOptions.queryOptions
                    };
                }
            } else {
                if (this.type == "ALARM") {
                    requestOptions.queryOptions = <QueryOptions>{
                        operator: QUERYOP.AND,
                        leftQuery: {
                            operator: QUERYOP.VALUE,
                            fieldName: 'alarmStatus',
                            fieldValue: 'ON'
                        },
                        rightQuery: <QueryOptions>{
                            operator: QUERYOP.VALUE,
                            fieldName: 'type',
                            fieldValue: this.type
                        }
                    }
                } else {
                    requestOptions.queryOptions = <QueryOptions>{
                        operator: QUERYOP.VALUE,
                        fieldName: 'type',
                        fieldValue: this.type
                    }
                }
            }

            //use Search function
            //request = this.baseServices.apiHelper.genRequest({
            //    options: <SearchOptions>requestOptions
            //});
            //
            //this.alarmApi
            //    .alarmSearchPOST(<GenericSearchRequest>request)
            //    .subscribe(
            //        (res) => {
            //            executeCallback(<AlarmListResponse>res);
            //        }
            //    );
        // } else {
             //use list function
             request = this.baseServices.apiHelper.genRequest({
                 options: <ListOptions>requestOptions
             });
             //
             //this.alarmApi
             //    .alarmListPOST(<GenericListRequest>request)
             //    .subscribe(
             //        (res) => {
             //            executeCallback(<AlarmListResponse>res);
             //        }
             //    );

            this.alarmApi
                .alarmSearchPOST(<GenericSearchRequest>request)
                .subscribe(
                    (res) => {
                        executeCallback(<AlarmListResponse>res);
                    }
                );


        // }

        this.logger.debug("Request:", request);

        let executeCallback = (response:AlarmListResponse) => {
            let dataTableData = [];

            if (this.baseServices.uiHelper.processResponse(response)) {

                this.currentList = response.data.list;

                response.data.list.forEach((itm:AlarmDTO, idx)=> {
                    dataTableData.push(
                        [
                            //'<input type="checkbox" value="' + itm.id + '" class="group-checkable icheck">',
                            this.baseServices.uiHelper.renderDateTime(itm.time),
                            this.baseServices.uiHelper.renderIcon("SEVERITY", itm.severity),
                            //this.baseServices.uiHelper.renderIcon("ALARMSTATUS", itm.alarmStatus),
                            itm.id || "-",
                            this.renderTextAction(idx, this.dataProvider.getAlarmName(itm.name)),
                            itm.sourceHost || '-',
                            itm.vtnName || '-',
                            itm.source+":"+itm.resource || '-',
                            this.renderRowActions(idx, true, (action: Action, idx: number, data: AlarmDTO) => {
                                if (action.id.lastIndexOf("emergency") != -1) {
                                    return (data.resource == ALARMRESOURCE.EMERGENCY_POLICY  && this.isTopologyModeCentral);
                                }else if (action.id.lastIndexOf("controller") != -1) {
                                    return data.resource == ALARMRESOURCE.CONTROLLER_MODE && data.alarmStatus == ALARMSTATUS.ON;
                                }
                                return true;
                            })
                        ]
                    );
                });

            } else {
                this.logger.error("Alarm DateTable Error", data);
            }

            callback({
                draw: data.draw,
                recordsTotal: response.data ? response.data.totalItems : [],
                recordsFiltered: response.data ? response.data.totalItems : [],
                data: dataTableData
            });
        }
    }

    public executeTextAction(actionType: string, dataIdx: number, data: any) {
        switch (actionType){
            case "default":
            default: {
                this.baseServices.sharedService.showModal(AlarmLogListPopup, <AlarmDTO>data, (result)=> {
                });
            }
        }
    }

    public unsubscribeAlarmEvents() {
        if (is.existy(this.alarmListener)) {
            this.alarmListener.unsubscribe();
            this.alarmListener = null;
        }

        if (is.existy(this.alarmEventListener)) {
            this.alarmEventListener.unsubscribe();
            this.alarmEventListener = null;
        }
    }
}
