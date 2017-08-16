/**
 * Created by ekinca on 23.11.2016.
 */
import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef} from '@angular/core';
import {BaseDataTablesPage} from "../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {SearchOptions} from "../../../swagger/SearchOptions";
import {ListOptions} from "../../../swagger/ListOptions";
import {PageServices} from "../../PageServices";
import {Action} from "../../../commons/Action";
import {NetworkDeviceEditPopup} from "./NetworkDeviceEditPopup";
import {DocumentConverter} from "../../DocumentConverter";
import {NetworkDeviceDTO, NetworkDeviceDTODef} from "../../../swagger/NetworkDeviceDTO";
import {NetworkDeviceApi} from "../../../swagger/NetworkDeviceApi";
import {NetworkDeviceDeleteRequest} from "../../../swagger/NetworkDeviceDeleteRequest";
import {NetworkDeviceListRequest} from "../../../swagger/NetworkDeviceListRequest";


@Component({
    moduleId: module.id,
    selector: 'networkDevicelist',
    templateUrl: '../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html',
    providers: [DocumentConverter, NetworkDeviceApi]
})
export class NetworkDeviceList extends BaseDataTablesPage<NetworkDeviceDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {


    constructor(baseServices:PageServices, elementRef:ElementRef, public networkDeviceApi: NetworkDeviceApi) {
        super(baseServices, elementRef);
        this.setI18NKey('settings.networkDevice.list');

        this.setActions([
            this.createAction('@create_networkDevice', ()=> {
                this.baseServices.sharedService.showModal(NetworkDeviceEditPopup,{},
                    (result)=>{
                        if (result.isSuccess) this.reload();
                    });
            })
        ]);


        this.setRowActions([
            this.createAction('@edit_networkDevice', (itm:any)=> {
                this.logger.debug('Edit networkDevice '+itm+' action clicked');
                this.baseServices.sharedService.showModal(NetworkDeviceEditPopup, itm, (result)=>{
                    if (result.isSuccess) this.reload();
                });
            }),

            this.createAction('@delete_networkDevice', (itm:any)=> {
                this.logger.debug('Delete user '+itm.serviceClassName+' action clicked');
                this.baseServices.uiHelper.confirm(this.t('messages.delete_confirm', {dto: itm}), (selected:Action)=> {
                    if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
                        //this.baseServices.uiHelper.alert("OK we will delete");

                        let request = this.baseServices.apiHelper.genRequest({
                            options: itm
                        });

                        this.networkDeviceApi
                            .networkDeviceDeletePOST(<NetworkDeviceDeleteRequest>request)
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
        this.logger.info('something changed',e);
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
                {title: this.ft('type'), width: '10%', orderable: true, type: 'string', name: 'type'},
                {title: this.ft('switch'), width: '10%', orderable: true, type: 'string', name: 'port'},
                {title: this.ft('port_no'), width: '10%', orderable: true, type: 'string', name: 'port'},
                {title: this.ft('mac'), width: '15%', orderable: true, type: 'num', name: 'mac'},
                {title: this.ft('ip'), width: '15%', orderable: true, type: 'num', name: 'ipv4'},
                {title: this.ft('vlan_id'), width: '15%', orderable: true, type: 'num', name: 'vlanid'},
                {
                    title: $.t('common.fields.actions'),
                    width: '10%',
                    orderable: false,
                    type: 'html',
                    defaultContent: '',
                    className: 'action_cell'
                }
            ],
            "order": [
                [1, "asc"]
            ], // set first column as a default sort by asc
            argExtraFields: []
        };
    }

    makeDataTableRequest(requestOptions:any, data:any, callback:(data:any)=>void) {
        let request = this.baseServices.apiHelper.genRequest({
            options: <ListOptions>{
                startPage: 0,
                pageSize: 0,
                sortOptions: {fieldName: 'name', isAscend: true},
                fields: null
            }
        });

        request.options = <SearchOptions> requestOptions;
        this.networkDeviceApi
            .networkDeviceListPOST(<NetworkDeviceListRequest>request)
            .subscribe(
                (res) => {
                    executeCallback(<any>res);
                }
            );

        this.logger.debug("Request:",request);

        let executeCallback = (response:any) => {
            //debugger;
            let dataTableData = [];

            if (this.baseServices.uiHelper.processResponse(response)) {

                this.currentList = response.data.list;

                response.data.list.forEach((itm:NetworkDeviceDTO, idx)=> {
                    let portNo = itm.port && itm.port.number ? itm.port.number : "-";
                    let portId = itm.port && itm.port.id ? itm.port.id : "-";

                    dataTableData.push(
                        [
                            //'<input type="checkbox" value="' + itm.id + '" class="group-checkable icheck">',
                            itm.type,
                            portId,
                            portNo,
                            itm.mac,
                            itm.ip,
                            itm.vlanid ||'',
                            this.renderRowActions(idx,true)
                        ]
                    );
                });

            } else {
                this.logger.error('UserList DataTables Error:',data);
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
