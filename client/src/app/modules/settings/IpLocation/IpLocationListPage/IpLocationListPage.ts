/**
 * Created by barangu on 5/15/2017.
 */
import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef} from '@angular/core';
import {BaseDataTablesPage} from "../../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {PageServices} from "../../../PageServices";
import {DeleteOptions} from "../../../../swagger/DeleteOptions";
import {Action} from "../../../../commons/Action";
import {GenericDeleteRequest} from "../../../../swagger/GenericDeleteRequest";
import {SearchOptions} from "../../../../swagger/SearchOptions";
import {GenericSearchRequest} from "../../../../swagger/GenericSearchRequest";
import {IpLocationApi} from "../../../../swagger/IpLocationApi";
import {IpLocationDTO} from "../../../../swagger/IpLocationDTO";
import {IpLocationListResponse} from "../../../../swagger/IpLocationListResponse";
import {IpLocationEditPopup} from "../IpLocationEditPopup/IpLocationEditPopup";



@Component({
    moduleId: module.id,
    selector: 'IpLocationListPage',
    templateUrl: '../../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html',
    providers: [IpLocationApi]
})
export class IpLocationListPage extends BaseDataTablesPage<IpLocationDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {


    constructor(public ipLocationApi: IpLocationApi, baseServices: PageServices, elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('settings.ip_location.list');

        this.setActions([
            this.createAction('@create_ip_location', () => {
                this.baseServices.sharedService.showModal(IpLocationEditPopup, {},
                    (result) => {
                        if (result.isSuccess) this.reload();
                    });
            })
        ]);


        this.setRowActions([

            this.createAction('@edit_ip_location', (itm: IpLocationDTO) => {
                this.baseServices.sharedService.showModal(IpLocationEditPopup, itm, (result) => {
                    if (result.isSuccess) this.reload();
                });
            }),

            this.createAction('@delete_ip_location', (itm: IpLocationDTO) => {
                this.baseServices.uiHelper.confirm(this.t('messages.delete_confirm', {dto: itm}), (selected: Action) => {
                    if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
                        //this.baseServices.uiHelper.alert("OK we will delete");

                        let request = this.baseServices.apiHelper.genRequest({
                            options: <DeleteOptions> {
                                id: itm.id,
                                isReturnModel: false
                            }
                        });

                        this.ipLocationApi
                            .ipLocationDeletePOST(<GenericDeleteRequest>request)
                            .subscribe(
                                (res) => {
                                    if (this.baseServices.uiHelper.processResponse(res, this.t('messages.delete_success', {dto: itm}))) {
                                        this.reload();
                                    }
                                },
                                (error: any) => {
                                    this.baseServices.uiHelper.processResponse(error._body); //JSON parsing is handled in the function now
                                }
                            );

                    }
                });
            })
        ]);
    }

    ngOnChanges(e) {
        super.ngOnChanges(e);
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
                {title: this.ft('ip_location_name'), width: '30%', orderable: true, type: 'string', name: 'name'},
                {title: this.ft('ip_blocks'), width: '70%', orderable: false, type: 'string', name: 'ipList'},
                {
                    title: $.t('common.fields.actions'),
                    width: '15%',
                    orderable: false,
                    type: 'html',
                    defaultContent: '',
                    className: 'action_cell'
                }
            ],
            "order": [
                [0, "asc"]
            ],
        };
    }

    makeDataTableRequest(requestOptions: any, data: any, callback: (data: any)=>void) {

        let request = this.baseServices.apiHelper.genRequest({
            options: <SearchOptions> requestOptions
        });

        this.ipLocationApi
            .ipLocationSearchPOST(<GenericSearchRequest>request)
            .subscribe(
                (res) => {
                    executeCallback(<IpLocationListResponse>res);
                }
            );


        let executeCallback = (response: IpLocationListResponse) => {
            let dataTableData = [];

            if (this.baseServices.uiHelper.processResponse(response)) {

                this.currentList = response.data.list;

                response.data.list.forEach((itm: IpLocationDTO, idx) => {
                    dataTableData.push(
                        [
                            itm.name || '',
                            itm.ipList.join("<br>") || '',
                            this.renderRowActions(idx, true)
                        ]
                    );
                });

            } else {
                this.logger.error('IP Location Datatables Error:', data);
            }
            callback({
                draw: data.draw,
                recordsTotal: response.data ? response.data.totalItems : [],
                recordsFiltered: response.data ? response.data.totalItems : [],
                data: dataTableData
            });
        };
    }
}
