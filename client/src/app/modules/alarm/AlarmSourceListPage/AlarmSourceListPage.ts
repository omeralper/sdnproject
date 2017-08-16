/**
 * Created by barangu on 12.01.2017.
 */
import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef} from '@angular/core';
import {BaseDataTablesPage} from "../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {PageServices} from "../../PageServices";
import {AlarmApi} from "../../../swagger/AlarmApi";
import {AlarmSourceEditPopup} from "../AlarmSourceEditPopup/AlarmSourceEditPopup";
import {QUERYOP} from "../../../swagger/QUERYOP";
import {AlarmDTO} from "../../../swagger/AlarmDTO";
import {AlarmListResponse} from "../../../swagger/AlarmListResponse";
import {GenericListRequest} from "../../../swagger/GenericListRequest";
import {ListOptions} from "../../../swagger/ListOptions";


@Component({ moduleId: module.id,
    selector: 'AlarmSourceListPage',
    templateUrl: '../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html'
})
export class AlarmSourceListPage extends BaseDataTablesPage<AlarmDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {


    constructor(public alarmApi: AlarmApi, baseServices: PageServices, elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('alarm_sources.list');

        this.setActions([]);

        this.setRowActions([
            this.createAction('@edit_source', (itm: AlarmDTO) => {
                this.logger.debug('Edit alarm source ' + itm.name + ' action clicked');
                this.baseServices.sharedService.showModal(AlarmSourceEditPopup, itm, (result) => {
                    if (result.isSuccess) this.reload();
                });
            }),
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
                {title: this.ft('source'), width: '30%', orderable: false, type: 'string', name: 'source'},
                {title: this.ft('severity'), width: '15%', orderable: false, type: 'string', name: 'severity'},
                {title: this.ft('correction'), width: '55%', orderable: false, type: 'string', name: 'correctionAction'},
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
            .alarmDefinitionListPOST(<GenericListRequest>request)
            .subscribe(
                (res) => {
                    executeCallback(<AlarmListResponse>res);
                }
            );

        this.logger.debug("Request:", request);

        let executeCallback = (response: AlarmListResponse) => {
            let dataTableData = [];

            if (this.baseServices.uiHelper.processResponse(response)) {

                this.currentList = response.data.list;

                response.data.list.forEach((itm: AlarmDTO, idx) => {
                    dataTableData.push(
                        [
                            itm.name || '',
                            this.i18n.t('enums.SEVERITY.'+ itm.severity +'.title') || '',
                            itm.correctionAction || '',
                            this.renderRowActions(idx, true)
                        ]
                    );
                });

            } else {
                this.logger.error('AlarmSource DataTables Error:', data);
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
