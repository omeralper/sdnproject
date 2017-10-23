import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef} from "@angular/core";
import * as lib from "../../../../swagger/api";
import {LogLevelEditPopup} from "../LogLevelEditPopup/LogLevelEditPopup";
import {BaseDataTablesPage} from "../../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {LogLevelDTO} from "../../../../swagger/LogLevelDTO";
import {LogApi} from "../../../../swagger/LogApi";
import {PageServices} from "../../../PageServices";
import {ListOptions} from "../../../../swagger/ListOptions";
import "rxjs/add/observable/forkJoin";
import "rxjs/add/operator/map";
import {LogNMApi} from "../../../../swagger/LogNMApi";
import {EnumHelper} from "../../../../commons/EnumHelper";

@Component({ moduleId: module.id,
    selector: 'LogLevelListPage',
    templateUrl: './LogLevelListPage.html',
    //templateUrl: './commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html',
    providers: [LogApi, LogNMApi]
})

export class LogLevelListPage extends BaseDataTablesPage<LogLevelDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {

    public serverType: any = LOG_SERVER_TYPE.PROGNET;
    public serverTypes = EnumHelper.getNamesAndValues(LOG_SERVER_TYPE);

    constructor(public logNMApi: LogNMApi, public logApi: LogApi, baseServices: PageServices, elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('components.log-levels.list');
        this.isServerSide = false;
        this.setActions([]);

        this.setRowActions([
            this.createAction('@edit_level', (itm: LogLevelDTO) => {
                this.logger.debug('Edit log-level ' + itm.displayName + '/' + itm.level + ' action clicked');
                this.baseServices.sharedService.showModal(LogLevelEditPopup, <LogLevelEditData>{
                    id: itm.id,
                    item: itm,
                    serverType: this.serverType
                }, (result) => {
                    if (result.isSuccess) this.reload();
                });
            })
        ]);
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
    }

    getDataTableOptions() {
        return {
            columns: [
                //{title: '<input type="checkbox" class="group-checkable icheck">', type:'html', name:'id'},
                //{title: this.ft('id'), width: '15%', orderable: true, type: 'string', name: 'id'},
                //{title: this.ft('version'), width: '15%', orderable: true, type: 'string', name: 'version'},
                //{title: this.ft('revision'), width: '15%', orderable: true, type: 'string', name: 'revision'},
                {title: this.ft('displayName'), width: '30%', orderable: true, type: 'string', name: 'displayName'},
                {
                    title: this.ft('level'),
                    width: '30%',
                    orderable: true,
                    className: 'dt-center',
                    type: 'string',
                    name: 'level'
                },
                // {
                //     title: this.ft('timestamp'),
                //     width: '30%',
                //     orderable: true,
                //     className: 'dt-center',
                //     type: 'date',
                //     name: 'timestamp'
                // },
                {
                    title: $.t('common.fields.actions'),
                    width: '10%',
                    orderable: false,
                    type: 'html',
                    defaultContent: '',
                    className: 'action_cell'
                }
            ],
            order: [
                [0, "asc"]
            ],
            paging: true,
            searching: true,
        };
    }

    makeDataTableRequest(requestOptions: any, data: any, callback: (data: any) => void) {
        //debugger;
        let request: any = this.baseServices.apiHelper.genRequest({
            options: <ListOptions>requestOptions
        });

        let apiBase: LogNMApi|LogApi = this.serverType == LOG_SERVER_TYPE.PROGNET ? this.logApi : this.logNMApi;

        apiBase
            .logLevelListPOST(<lib.LogLevelListRequest>request)
            .subscribe(
                (res) => {
                    executeCallback(<lib.LogLevelResponse>res);
                }
            );

        this.logger.debug("Request:", request);

        let executeCallback = (response: lib.LogLevelResponse) => {
            let dataTableData = [];

            if (this.baseServices.uiHelper.processResponse(response)) {
                this.currentList = response.data.list;

                response.data.list.forEach((itm: LogLevelDTO, idx) => {
                    dataTableData.push(
                        [
                            itm.displayName || '-',
                            itm.level || 'N/A',
                            //itm.timestamp ? (new Date(Date.parse(itm.timestamp.toString())).toLocaleString('tr'))
                            //    : '-',
                            this.renderRowActions(idx, true)
                        ]
                    );
                });
            } else {
                this.logger.error("Log Level List DateTable Error", data);
            }

            callback({
                draw: data.draw,
                recordsTotal: response.data.list.length, //response.data ? response.data.totalItems : [],
                recordsFiltered: response.data.list.length, //response.data ? response.data.totalItems : [],
                data: dataTableData
            });
        }
    }

    public onServerTypeChanged(value) {
        this.reload(true);
    }

    /*
     //INFO: use RXJS to execute HTTP request in parallel and merge at the end.
     // REF: https://coryrylan.com/blog/angular-multiple-http-requests-with-rxjs
     makeDataTableRequest(requestOptions: any, data: any, callback: (data: any)=>void) {
     let controllerLogLevels:Observable<any> = this.getControllerLogLevels(requestOptions,data);//  this.http.get('https://swapi.co/api/people/1').map(res => res.json());
     let prognetnmLogLevels:Observable<any> = this.getPrognetnmLogLevels(requestOptions,data);//this.http.get('http://swapi.co/api/planets/1').map(res => res.json());
     //let uiLogLevels:Observable<any> = this.getUILogLevels();

     //Observable.forkJoin([uiLogLevels, prognetnmLogLevels, controllerLogLevels]).subscribe(results => {
     Observable.forkJoin([prognetnmLogLevels, controllerLogLevels]).subscribe(results => {
     // results[0] is our character
     // results[1] is our character homeworld
     // results[0].homeworld = results[1];
     // this.loadedCharacter = results[0];
     debugger;
     let dataTableData = [];
     executeCallback(dataTableData,results[0]);
     executeCallback(dataTableData,results[1]);
     this.currentList = dataTableData;
     callback({
     draw: data.draw,
     recordsTotal: dataTableData.length, //response.data ? response.data.totalItems : [],
     recordsFiltered: dataTableData.length, //response.data ? response.data.totalItems : [],
     data: dataTableData
     });
     });

     let executeCallback = (dataTableData, response: lib.LogLevelResponse) => {
     if (this.baseServices.uiHelper.processResponse(response)) {
     response.data.list.forEach((itm: LogLevelDTO, idx)=> {
     dataTableData.push(
     [
     itm.displayName || '-',
     itm.level || 'N/A',
     itm.timestamp ? (new Date(Date.parse(itm.timestamp.toString())).toLocaleString('tr'))
     : '-',
     this.renderRowActions(idx, true)
     ]
     );
     });
     } else {
     this.logger.error("Log Level List DateTable Error", data);
     }
     }
     }

     public getControllerLogLevels(requestOptions: any, data: any):Observable<any> {
     debugger;
     let request = this.baseServices.apiHelper.genRequest({
     options : <ListOptions>requestOptions
     });
     this.logger.debug("getControllerLogLevels Request:", request);
     return this.logApi.logLevelListPOST(<lib.LogLevelListRequest>request);
     }

     public getPrognetnmLogLevels(requestOptions: any, data: any):Observable<any> {
     debugger;
     let request = this.baseServices.apiHelper.genRequest({
     options : <ListOptions>requestOptions
     });
     this.logger.debug("getPrognetnmLogLevels Request:", request);
     return this.logNMApi.logLevelListPOST(<lib.LogLevelListRequest>request).retry(3);
     }
     */
}

export enum LOG_SERVER_TYPE {
    PROGNET,
    PROGNETNM
}

export interface LogLevelEditData {
    id: string,
    item: LogLevelDTO,
    serverType: LOG_SERVER_TYPE
}
