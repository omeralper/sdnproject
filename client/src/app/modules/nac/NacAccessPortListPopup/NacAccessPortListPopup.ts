/**
 * Created by yildirayme on 20.06.2016.
 */
import {Component, OnInit, AfterViewInit, ElementRef} from "@angular/core";
import {PageServices} from "../../PageServices";
import {BasePopupDataTablesPage} from "../../../commons/BasePopupDataTablesPage/BasePopupDataTablesPage";
import {MODAL_SIZE} from "../../ModalComponent";
import {NacAccessPortDTO} from "../../../swagger/NacAccessPortDTO";
import {Action} from "../../../commons/Action";
import {DeleteOptions} from "../../../swagger/DeleteOptions";
import {GenericDeleteRequest} from "../../../swagger/GenericDeleteRequest";
import {GenericSearchRequest} from "../../../swagger/GenericSearchRequest";
import {QueryOptions} from "../../../swagger/QueryOptions";
import {QUERYOP} from "../../../swagger/QUERYOP";
import {NacUserDeviceApi} from "../../../swagger/NacUserDeviceApi";
import {NacUserDeviceSearchRequest} from "../../../swagger/NacUserDeviceSearchRequest";
import {NacUserDeviceListResponse} from "../../../swagger/NacUserDeviceListResponse";
import {NacUserDeviceDTO} from "../../../swagger/NacUserDeviceDTO";

@Component({
	moduleId: module.id,
    selector: 'NacAccessPortListPopup',
    templateUrl: '../../../commons/BasePopupDataTablesPage/BasePopupDataTablesPage.html',
    providers: [NacUserDeviceApi],
})
export class NacAccessPortListPopup extends BasePopupDataTablesPage<NacAccessPortDTO,NacUserDeviceDTO> implements OnInit, AfterViewInit {

    constructor(public nacUserDeviceApi:NacUserDeviceApi, baseServices:PageServices, elementRef:ElementRef) {
        super(baseServices, elementRef);
        this.modalSize = MODAL_SIZE.LARGE;

        this.setI18NKey('nac_management.accessPorts.list');

        this.setPopupActions([
            this.createAction('@create_access_port', ()=> {
                this.logger.debug('Add new access port clicked');
                this.close(true, {command: "create_access_port"});
            })
        ]);

        this.setRowActions([
            /*this.createAction('@view_access_port', (itm:NacDeviceDTO)=> {
             this.logger.debug('View device ' + itm.name + ' action clicked');
             }),*/
            this.createAction('@edit_access_port', (itm:NacAccessPortDTO)=> {
                this.logger.debug('Edit access port ' + itm.id + ' action clicked');
                //this.baseServices.sharedService.showModal(NacDeviceEditPopup, itm,(result)=>{
                //    if (result.isSuccess) this.reload();
                //});
                //delegate management to parent page
                this.close(true, {command: "edit_access_port", dto: itm});
            }),
            this.createAction('@delete_access_port', (itm:NacAccessPortDTO)=> {
                this.logger.debug('Delete access port ' + itm.id + ' action clicked');
                this.baseServices.uiHelper.confirm(this.t('messages.delete_confirm', {dto: itm}), (selected:Action)=> {
                    if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {

                        let request = this.baseServices.apiHelper.genRequest({
                            options: <DeleteOptions> {
                                id: itm.id,
                                isReturnModel: false
                            }
                        });

                        this.nacUserDeviceApi
                            .userDeviceDeletePOST(<GenericDeleteRequest>request)
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
                //{title: '<input type="checkbox" class="group-checkable icheck">', type:'html', name:'id'},
                {
                    title: this.ft('status'),
                    width: '10%',
                    orderable: true,
                    type: 'string',
                    name: 'status',
                    className: 'dt-center'
                },
                {title: this.ft('switchId'), width: '40%', orderable: true, type: 'string', name: 'switchId'},
                {
                    title: this.ft('portNumber'),
                    width: '40%',
                    orderable: true,
                    type: 'string',
                    name: 'portNumber',
                    className: 'dt-center'
                },
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
                [1, "asc"]
            ], // set first column as a default sort by asc
            searching: false //disable searching since API is not supporting it.
        };
    }


    makeDataTableRequest(requestOptions:any, data:any, callback:(data:any)=>void) {

        let request = this.baseServices.apiHelper.genRequest({
            options:<GenericSearchRequest> $.extend(requestOptions, {
                queryOptions: <QueryOptions> {
                    operator: QUERYOP.VALUE,
                    fieldName: 'deviceId',
                    fieldValue: this.data.id
                }
            })
        });

         this.nacUserDeviceApi
             .userDeviceSearchPOST(<NacUserDeviceSearchRequest>request)
             .subscribe(
                 (res) => {
                     executeCallback(<NacUserDeviceListResponse>res);
                 }
             );

        this.logger.debug("Request:", request);

        let executeCallback = (response:NacUserDeviceListResponse) => {
            let dataTableData = [];

            if (this.baseServices.uiHelper.processResponse(response)) {

                this.currentList = response.data.list;

                response.data.list.forEach((itm:NacUserDeviceDTO, idx)=> {
                    dataTableData.push(
                        [
                            //'<input type="checkbox" value="' + itm.id + '" class="group-checkable icheck">',
                            this.renderIcon("NACSTATUS", ""),//itm.status),
                            //itm.status,
                            "",//itm.switchId,
                            "",//itm.portNumber,
                            this.renderRowActions(idx, true)
                        ]
                    );
                });

            } else {
                this.logger.error("Access Port List DateTable Error", data);
            }
            callback({
                draw: data.draw,
                recordsTotal: response.data ? response.data.totalItems : [] || dataTableData.length,
                recordsFiltered: response.data ? response.data.totalItems : [] || dataTableData.length,
                data: dataTableData
            });
        }
    }

}

