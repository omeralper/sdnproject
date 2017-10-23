/**
 * Created by ekinca on 1.03.2017.
 */
import {Injectable} from "@angular/core";
import {PageServices} from "../PageServices";
declare var is: Is;
import {UI_PAGE_TYPE} from "../../commons/enums/UI_PAGE_TYPE";
import {EdrListAndSearchApi} from "../../swagger/EdrListAndSearchApi";
import {EdrListResponse} from "../../swagger/EdrListResponse";
import 'rxjs/add/operator/toPromise';
import {EdrSearchCriteria} from "../../swagger/EdrSearchCriteria";
import {EdrSearchRequest} from "../../swagger/EdrSearchRequest";
import {EdrDTO} from "../../swagger/EdrDTO";

export interface IAlarmLogConsumer {
    columns : Array<any>;
    pageType : UI_PAGE_TYPE;
    data?:EdrDTO;
    currentList:Array<EdrDTO>;
    ft(fieldi18nKey: string, options?: any);
    renderRowActions(val: any, val2: any);

}

@Injectable()
export class LogProvider {

    constructor(public edrApi: EdrListAndSearchApi, public baseServices:PageServices) {}

    getAllColumns(page: IAlarmLogConsumer){
        return [
            //{title: '<input type="checkbox" class="group-checkable icheck">', type:'html', name:'id'},
            //{title: page.ft('time'), width: '8%', orderable: false, type: 'date', name: 'time', searchable: true, className:"dt-center" },
            {title: page.ft('status'), width: '5%', orderable: false, type: 'num', name: 'status', searchable: true, className:"dt-center noclip", visible : page.pageType == UI_PAGE_TYPE.PAGE },
            {title: page.ft('username'),tooltip: page.ft('username'), width: '5%', orderable: false, type: 'string', name: 'username', searchable: true, className:"dt-center" },
            {title: page.ft('module'),tooltip: page.ft('module'), width: '14%', orderable: false, type: 'string', name: 'module', searchable: true, className: "dt-center" },
            {title: page.ft('sourceIP'), width: '10%', orderable: false, type: 'string', name: 'sourceIP', searchable: true, className: "dt-center"},
            {title: page.ft('destinationIP'), width: '10%', orderable: false, type: 'string', name: 'destinationIP', searchable: true , className: "dt-center"},
            {title: page.ft('sourceMAC'), width: '10%', orderable: false, type: 'string', name: 'sourceMAC', searchable: true, className: "dt-center"},
            {title: page.ft('destinationMAC'), width: '10%', orderable: false, type: 'string', name: 'destinationMAC', searchable: true, className:"dt-center"},
            {title: page.ft('sourcePort'), width: '5%', orderable: false, type: 'string', name: 'sourcePort', searchable: true, className:"dt-center"},
            {title: page.ft('destinationPort'), width: '5%', orderable: false, type: 'string', name: 'destinationPort', searchable: true, className:"dt-center"},
            {title: page.ft('protocol'), width: '8%', orderable: false, type: 'string', name: 'protocol', searchable: true, className:"dt-center"},
            {title: page.ft('data'), width: '8%', orderable: false, type: 'string', name: 'data', searchable: true}
        ];
    }

    getDataTableOptions(page: IAlarmLogConsumer) {
        return {
            columns:[
                {title: page.ft('time'), width: '8%', orderable: false, type: 'date', name: 'time', searchable: true, className:"dt-center noclip" }
                ].concat(page.columns.concat([
                {
                    title: this.baseServices.i18n.t('common.fields.actions'),
                    width: '5%',
                    orderable: false,
                    type: 'html',
                    defaultContent: '',
                    className: 'action_cell'
                }
            ])),
            "order": [
                [0, "desc"]
            ], // set first column as a default sort by asc
            //searching: !is.existy(page.data),
            searching: false,
            paging: true,
            language: {
                paginate: {
                    first: $.t("common.datatables.first_notext"),
                    last: $.t("common.datatables.last_notext")
                }
            },
            argExtraFields : []
        };
    }

    makeDataTableRequest(page:IAlarmLogConsumer, requestData: EdrSearchCriteria, data:any, callback:(data:any)=>void) {

        let request = this.baseServices.apiHelper.genRequest({
            data: <EdrSearchCriteria> requestData
        });

        this.edrApi.edrWebSearchPOST(<EdrSearchRequest> request).toPromise()
            .then(
                (res: EdrListResponse)=>{
                    executeCallback(<EdrListResponse>res);
                }
            );

        this.baseServices.logger.debug("Request:", request);

        let executeCallback = (response:EdrListResponse) => {
            let dataTableData = [];
            let result = {
                draw: data.draw,
                recordsTotal: 0,
                recordsFiltered: 0,
                data: dataTableData
            };

            if (this.baseServices.uiHelper.processResponse(response)) {

                page.currentList = response.data.list;

                response.data.list.forEach((itm: EdrDTO, idx)=> {
                    let rowData=[this.baseServices.uiHelper.renderDateTime(itm.time)];

                    for(let idx in page.columns){
                        let column = page.columns[idx];
                        //if (column.name == "time") rowData.push(this.baseServices.uiHelper.renderDateTime(itm.time));
                        //else
                        if (column.name == "status") rowData.push(this.baseServices.uiHelper.renderIcon("EDRTYPE", itm.status));
                        else rowData.push(itm[column.name] || "");
                    }
                    rowData.push(page.renderRowActions(idx, true));
                    dataTableData.push(rowData);
                    // dataTableData.push(
                    //     [
                    //         //'<input type="checkbox" value="' + itm.id + '" class="group-checkable icheck">',
                    //         this.baseServices.uiHelper.renderDateTime(itm.time), //TODO fields
                    //         this.baseServices.uiHelper.renderIcon("EDRTYPE", itm.status),
                    //         itm.username || "",
                    //         itm.module || "",
                    //         itm.sourceIP || "",
                    //         itm.destinationIP || "",
                    //         itm.sourceMAC || "",
                    //         itm.destinationMAC || "",
                    //         itm.sourcePort,
                    //         itm.destinationPort,
                    //         itm.protocol || "",
                    //         page.renderRowActions(idx, true)
                    //     ]
                    // );
                });

                result.recordsTotal = response.data.totalItems;
                result.recordsFiltered = response.data.totalItems;

            } else {
                this.baseServices.logger.error("Edr DateTable Error", data);
            }

            callback(result);
        }
    }

}
