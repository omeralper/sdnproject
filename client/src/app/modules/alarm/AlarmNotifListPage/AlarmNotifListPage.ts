/**
 * Created by barangu on 16.01.2017.
 */
import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef} from '@angular/core';
import {BaseDataTablesPage} from "../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {PageServices} from "../../PageServices";
import {Action} from "../../../commons/Action";
import {AlarmApi} from "../../../swagger/AlarmApi";
import {AlarmNotifEditPopup} from "../AlarmNotifEditPopup/AlarmNotifEditPopup";
import {QUERYOP} from "../../../swagger/QUERYOP";
import {GenericListRequest} from "../../../swagger/GenericListRequest";
import {ListOptions} from "../../../swagger/ListOptions";
import {AlarmNotificationDTO} from "../../../swagger/AlarmNotificationDTO";
import {AlarmNotificationListResponse} from "../../../swagger/AlarmNotificationListResponse";
import {GenericDeleteRequest} from "../../../swagger/GenericDeleteRequest";
import {DeleteOptions} from "../../../swagger/DeleteOptions";


@Component({ moduleId: module.id,
    selector: 'AlarmNotifListPage',
    templateUrl: '../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html'
})
export class AlarmNotifListPage extends BaseDataTablesPage<AlarmNotificationDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {
    public severityNames: Array<String> = [];

    constructor(public alarmApi: AlarmApi, baseServices: PageServices, elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('alarm_notif.list');

        this.setActions([this.createAction('@create_notif', ()=> {
            this.logger.debug('Create new notification action clicked');
            this.baseServices.sharedService.showModal(AlarmNotifEditPopup, {},
                (result)=>{
                    if (result.isSuccess) this.reload();
                });
        })]);

        this.setRowActions([
            this.createAction('@edit_notif', (itm: AlarmNotificationDTO) => {
                this.logger.debug('Edit alarm notification ' + itm.id + ' action clicked');
                this.baseServices.sharedService.showModal(AlarmNotifEditPopup, itm, (result) => {
                    if (result.isSuccess) this.reload();
                });
            }),
            this.createAction('@delete_notif', (itm:AlarmNotificationDTO)=> {
                this.logger.debug('Delete alarm notification '+itm.id+' action clicked');
                this.baseServices.uiHelper.confirm(this.t('messages.delete_confirm', {dto: itm}), (selected:Action)=> {
                    if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
                        //this.baseServices.uiHelper.alert("OK we will delete");

                        let request = this.baseServices.apiHelper.genRequest({
                            options: <DeleteOptions> {
                                id: itm.id,
                                isReturnModel: false
                            }
                        });

                        this.alarmApi
                            .alarmNotificationDeletePOST(<GenericDeleteRequest>request)
                            .subscribe(
                                (res) => {
                                    if (this.baseServices.uiHelper.processResponse(res, this.t('messages.delete_success', {dto: itm}))) {
                                        this.reload();
                                    }
                                },
                                (error:any) => {
                                    this.baseServices.uiHelper.processResponse(error._body); //JSON parsing is handled in the function now
                                }
                            );

                    }
                })
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
                {title: this.ft('source'), width: '20%', orderable: false, type: 'string', name: 'source'},
                {title: this.ft('severity'), width: '20%', orderable: false, type: 'string', name: 'severity'},
                {title: this.ft('mvtn'), width: '30%', orderable: false, type: 'string', name: 'mvtnId'},
                {title: this.ft('email'), width: '30%', orderable: false, type: 'string', name: 'email'},
                {
                    title: $.t('common.fields.actions'),
                    width: '15%',
                    orderable: false,
                    type: 'html',
                    defaultContent: '',
                    className: 'action_cell'
                }
            ],
            searching: false,
            paging: false
            // "order": [
            //     [0, "asc"]
            // ], // set first column as a default sort by asc
            // argExtraFields: ["id"]
        };
    }

    makeDataTableRequest(requestOptions: any, data: any, callback: (data: any)=>void) {

        if (!requestOptions.queryOptions) requestOptions.queryOptions = {operator: QUERYOP.NOOP};

        let request = this.baseServices.apiHelper.genRequest({
            options: <ListOptions> requestOptions
        });

        this.alarmApi
            .alarmNotificationListPOST(<GenericListRequest>request)
            .subscribe(
                (res) => {
                    executeCallback(<AlarmNotificationListResponse>res);
                }
            );

        this.logger.debug("Request:", request);

        let executeCallback = (response: AlarmNotificationListResponse) => {
            let dataTableData = [];

            if (this.baseServices.uiHelper.processResponse(response)) {

                this.currentList = response.data.list;

                response.data.list.forEach((itm: AlarmNotificationDTO, idx) => {
                    this.severityNames=[];
                    for(let i=0; i<itm.severity.length; i++){
                        if(this.severityNames.indexOf(this.i18n.t('enums.SEVERITY.' + itm.severity[i] + '.title')) < 0) {
                            this.severityNames.push(this.i18n.t('enums.SEVERITY.' + itm.severity[i] + '.title'));
                        }
                    }
                    dataTableData.push(
                        [
                            itm.source.join("<br>") || '',
                            this.severityNames.join("<br>") || '',
                            itm.mvtnName.join("<br>") || '-',
                            itm.email.join("<br>") || '',
                            this.renderRowActions(idx, true)
                        ]
                    );
                });

            } else {
                this.logger.error('AlarmNotifConf DataTables Error:', data);
            }
            callback({
                draw: data.draw,
                recordsTotal: response.data ? response.data.totalItems : [],
                recordsFiltered: response.data ? response.data.totalItems : [],
                data: dataTableData
            });


        }
    }
}
