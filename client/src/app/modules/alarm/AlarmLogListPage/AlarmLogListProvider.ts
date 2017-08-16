/**
 * Created by yildirayme on 23.06.2016.
 */

import {Injectable} from "@angular/core";
import {AlarmApi} from "../../../swagger/AlarmApi";
import {AlarmDTO} from "../../../swagger/AlarmDTO";
import {QueryOptions} from "../../../swagger/QueryOptions";
import {QUERYOP} from "../../../swagger/QUERYOP";
import {SearchOptions} from "../../../swagger/SearchOptions";
import {GenericSearchRequest} from "../../../swagger/GenericSearchRequest";
import {AlarmListResponse} from "../../../swagger/AlarmListResponse";
import {ListOptions} from "../../../swagger/ListOptions";
import {GenericListRequest} from "../../../swagger/GenericListRequest";
import {PageServices} from "../../PageServices";
declare var is: Is;
import {UI_PAGE_TYPE} from "../../../commons/enums/UI_PAGE_TYPE";
import {IconOptions} from "../../UIHelper";

export interface IAlarmLogConsumer {
    pageType : UI_PAGE_TYPE;
    data?:AlarmDTO;
    currentList:Array<AlarmDTO>;
    ft(fieldi18nKey: string, options?: any);
}

@Injectable()
export class AlarmLogListProvider {

    constructor(public alarmApi:AlarmApi, public baseServices:PageServices) {
    }

    getDataTableOptions(page: IAlarmLogConsumer) {

        return {
            columns: [
                //{title: '<input type="checkbox" class="group-checkable icheck">', type:'html', name:'id'},
                //{title: page.ft('status'), width: '5%', orderable: true, type: 'string', name: 'alarmStatus'},
                {title: page.ft('time'), width: '20%', orderable: true, type: 'date', name: 'time', searchable: true, className:"dt-center" },
                {title: page.ft('type'), width: '5%', orderable: true, type: 'num', name: 'type', searchable: true, className:"dt-center", visible : page.pageType == UI_PAGE_TYPE.PAGE },
                {title: page.ft('severity_short'),tooltip: page.ft('severity'), width: '5%', orderable: true, type: 'num', name: 'severity', searchable: true, className:"dt-center" },
                {title: page.ft('status_short'),tooltip: page.ft('status'), width: '4%', orderable: true, type: 'num', name: 'alarmStatus', searchable: true, className: "dt-center" },
                {title: page.ft('id_short'),tooltip: page.ft('id'), width: '5%', orderable: true, type: 'number', name: 'id', searchable: true },
                {title: page.ft('name'), width: '15%', orderable: true, type: 'string', name: 'name', searchable: true },
                {
                    title: page.ft('sourceHost'),
                    width: '15%',
                    orderable: true,
                    type: 'string',
                    name: 'sourceHost',
                    searchable: true
                },
                {title: page.ft('vtnName'), width: '15%', orderable: true, type: 'string', name: 'vtnName', searchable: true},
                {title: page.ft('resource'), width: '25%', orderable: true, type: 'string', name: 'resource', searchable: true},
                // {
                //     title: this.baseServices.i18n.t('common.fields.actions'),
                //     width: '10%',
                //     orderable: false,
                //     type: 'html',
                //     defaultContent: '',
                //     className: 'action_cell'
                // }
            ],
            "order": [
                [0, "desc"]
            ], // set first column as a default sort by asc
            //searching: !is.existy(page.data),
            searching: false,
            language: {
                paginate: {
                    first: $.t("common.datatables.first_notext"),
                    last: $.t("common.datatables.last_notext")
                }
            },
            argExtraFields : ["source","sourceInstance","detail","description","vtnId","type", "resourceId", "alarmStatus", "resolveNote", "solveTime", "resolver", "reportingMethod"]
        };
    }

    makeDataTableRequest(page:IAlarmLogConsumer, requestOptions:any, data:any, callback:(data:any)=>void) {
        //debugger;
        let request;

        if (is.existy(page.data) || is.existy(requestOptions.queryOptions)) {

            if (is.existy(page.data)) {
                let resourceQuery:QueryOptions = <QueryOptions>{
                    operator: QUERYOP.VALUE,
                    fieldName: 'resourceId',//'name',
                    fieldValue: (page.data.resourceId || '')// .name
                };

                //Expected implementation, but disabled until full search functionality is implemented
                if (is.existy(requestOptions.queryOptions)) {
                    requestOptions.queryOptions = <QueryOptions>{
                        operator: QUERYOP.AND,
                        leftQuery: resourceQuery,
                        rightQuery: requestOptions.queryOptions
                    };
                } else {
                    requestOptions.queryOptions = resourceQuery;
                }
            }

            //use Search function
            request = this.baseServices.apiHelper.genRequest({
                options: <SearchOptions>requestOptions
            });

            this.alarmApi
                .alarmLogSearchPOST(<GenericSearchRequest>request)
                .subscribe(
                    (res) => {
                        executeCallback(<AlarmListResponse>res);
                    }
                );
        } else {
            //use list function
            request = this.baseServices.apiHelper.genRequest({
                options: <ListOptions>requestOptions
            });

            this.alarmApi
                .alarmLogListPOST(<GenericListRequest>request)
                .subscribe(
                    (res) => {
                        executeCallback(<AlarmListResponse>res);
                    }
                );
        }

        this.baseServices.logger.debug("Request:", request);

        let executeCallback = (response:AlarmListResponse) => {
            let dataTableData = [];
            let result = {
                draw: data.draw,
                recordsTotal: 0,
                recordsFiltered: 0,
                data: dataTableData
            }

            if (this.baseServices.uiHelper.processResponse(response)) {

                page.currentList = response.data.list;

                response.data.list.forEach((itm:AlarmDTO, idx)=> {
                    dataTableData.push(
                        [
                            //'<input type="checkbox" value="' + itm.id + '" class="group-checkable icheck">',
                            //page.renderIcon("ALARMSTATUS", itm.alarmStatus),
                            this.baseServices.uiHelper.renderDateTime(itm.time),
                            this.baseServices.uiHelper.renderIcon("ALARMTYPE", itm.type),
                            this.baseServices.uiHelper.renderIcon("SEVERITY", itm.severity),
                            this.baseServices.uiHelper.renderIcon("ALARMSTATUS", itm.alarmStatus),
                            itm.id || "-",
                            this.getAlarmName(itm.name),
                            itm.sourceHost || '-',
                            itm.vtnName || '-',
                            itm.source+':'+itm.resource || '-'
                            //page.renderRowActions(idx, true)
                        ]
                    );
                });

                result.recordsTotal = response.data.totalItems;
                result.recordsFiltered = response.data.totalItems;

            } else {
                this.baseServices.logger.error("Alarm DateTable Error", data);
            }

            callback(result);
        }
    }

    public getAlarmName(value:string,isReverse:boolean=false):string {
        if (isReverse){
            let searchValue = value.toLowerCase();
            let possibleValues = this.baseServices.uiHelper.getIconOptionList("ALARM_NAMES");
            let found;
            for(let key in possibleValues){
                let val = possibleValues[key];
                if ((is.existy((<IconOptions>val).title) && (<IconOptions>val).title.toLowerCase().indexOf(searchValue)>-1) || val.toString().toLowerCase().indexOf(searchValue)>-1){
                    found = key;
                    break;
                }
            }
            return is.existy(found)?found:value;
        } else {
            return this.baseServices.uiHelper.renderIcon("ALARM_NAMES", value);
        }
    }


    public getDefaultFields() {
        return ['id'];
    }
}


