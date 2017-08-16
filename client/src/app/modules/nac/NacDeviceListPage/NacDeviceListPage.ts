import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef} from "@angular/core";
import {BaseDataTablesPage} from "../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {Action} from "../../../commons/Action";
import {SearchOptions} from "../../../swagger/SearchOptions";
import {PageServices} from "../../PageServices";
import {GenericDeleteRequest} from "../../../swagger/GenericDeleteRequest";
import {DeleteOptions} from "../../../swagger/DeleteOptions";
import {NacDeviceEditPopup} from "../NacDeviceEditPopup/NacDeviceEditPopup";
import {GenericSearchRequest} from "../../../swagger/GenericSearchRequest";
import {NacDeviceApi} from "../../../swagger/NacDeviceApi";
import {NACSTATUS} from "../../../swagger/NACSTATUS";
import {NacDeviceDTO} from "../../../swagger/NacDeviceDTO";
import {NacDeviceListResponse} from "../../../swagger/NacDeviceListResponse";
import {HOSTTYPE} from "../../../swagger/HOSTTYPE";


@Component({
	moduleId: module.id,
    selector: 'NacDeviceListPage',
    templateUrl: '../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html',
})
export class NacDeviceListPage extends BaseDataTablesPage<NacDeviceDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {

    constructor(public devicesApi:NacDeviceApi, baseServices:PageServices, elementRef:ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('nac_management.devices.list');

        this.setActions([
            this.createAction('@create_device', ()=> {
                this.logger.debug('Create new device action clicked')
                this.baseServices.sharedService.showModal(NacDeviceEditPopup,{
                    status: NACSTATUS.ACTIVE,
                    securityLevel:0,
                    type:HOSTTYPE.COMPUTER
                },
                (result)=>{
                    if (result.isSuccess) this.reload();
                });
            })
        ]);

        this.setRowActions([
            this.createAction('@edit_device', (itm:NacDeviceDTO)=> {
                this.logger.debug('Edit device ' + itm.name + ' action clicked');
                this.baseServices.sharedService.showModal(NacDeviceEditPopup, itm,(result)=>{
                        if (result.isSuccess) this.reload();
                    });
            }),
            // this.createAction('@list_access_ports', (itm:NacDeviceDTO)=> {
            //     this.logger.debug('List access ports of device ' + itm.name + ' action clicked');
            //     this.baseServices.sharedService.showModal(NacAccessPortListPopup, itm,(result)=>{
            //         if (result.isSuccess) this.reload();
            //     });
            // }),
            this.createAction('@delete_device', (itm:NacDeviceDTO)=> {
                this.logger.debug('Delete device ' + itm.name + ' action clicked');
                this.baseServices.uiHelper.confirm(this.t('messages.delete_confirm', {dto: itm}), (selected:Action)=> {
                    if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
                        //this.baseServices.uiHelper.alert("OK we will delete");

                        let request = this.baseServices.apiHelper.genRequest({
                            options: <DeleteOptions> {
                                id: itm.id,
                                isReturnModel: false
                            }
                        });

                        this.devicesApi
                            .deviceDeletePOST(<GenericDeleteRequest>request)
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
                {title: this.ft('status'), width: '5%', orderable: true, type: 'html', name: 'status',className: 'dt-center'},
                {title: this.ft('type'), width: '5%', orderable: true, type: 'html', name: 'type', className: 'dt-center'},
                {title: this.ft('name'), width: '15%', orderable: true, type: 'string', name: 'name'},
                {title: this.ft('mac'), width: '15%', orderable: true, type: 'string', name: 'mac'},
                {title: this.ft('ip'), width: '15%', orderable: true, type: 'string', name: 'ipv4'},
                {title: this.ft('mvtnId'), width: '15%', orderable: true, type: 'num', name: 'mvtnId'},
                {title: this.ft('securityLevel_short'), tooltip: this.ft('securityLevel'), width: '5%', orderable: true, type: 'num', name: 'securityLevel',className: 'dt-center'},
                {title: this.ft('nacGroup'), width: '15%', orderable: false, type: 'boolean', name: 'nacGroup'},
                {title: this.ft('isExempt_short'), tooltip: this.ft('isExempt'), width: '5%', orderable: true, type: 'boolean', name: 'isExempt', className: 'dt-center'},
                {title: '', width: '0', orderable: true, type: 'date', name: 'created', visible:false},
                {
                    title: $.t('common.fields.actions'),
                    width: '5%',
                    orderable: false,
                    type: 'html',
                    defaultContent: '',
                    className: 'action_cell'
                }
            ],
            "order": [
                [9, "desc"]
            ], // set first column as a default sort by asc
        };
    }


    makeDataTableRequest(requestOptions:any, data:any, callback:(data:any)=>void) {
        let request;
        // if (requestOptions.queryOptions) {
            //use Search function
            request = this.baseServices.apiHelper.genRequest({
                options: <SearchOptions>requestOptions
            });

            this.devicesApi
                .deviceSearchPOST(<GenericSearchRequest>request)
                .subscribe(
                    (res) => {
                        executeCallback(<NacDeviceListResponse>res);
                    }
                );
        // } else {
        //
        //     //use list function
        //     request = this.baseServices.apiHelper.genRequest({
        //         options: <ListOptions>requestOptions
        //     });
        //
        //     this.devicesApi
        //         .deviceListPOST(<GenericListRequest>request)
        //         .subscribe(
        //             (res) => {
        //                 executeCallback(<NacDeviceListResponse>res);
        //             }
        //         );
        // }

        this.logger.debug("Request:", request);

        let executeCallback = (response:NacDeviceListResponse) => {
            let dataTableData = [];

            if (this.baseServices.uiHelper.processResponse(response)) {

                this.currentList = response.data.list;

                response.data.list.forEach((itm:NacDeviceDTO, idx)=> {
                    let name = '';
                    if(itm.name === "«BYOD»"){
                        name = this.t("autoDeviceName");
                    }else{
                        name = itm.name;
                    }
                    dataTableData.push(
                        [
                            this.renderIcon('NACSTATUS',itm.status),
                            this.renderIcon('HOSTTYPE',itm.type),
                            name || '-',
                            itm.mac || '-',
                            itm.ipv4 || '-',
                            itm.mvtnName ? itm.mvtnName : '-',
                            itm.securityLevel || '-',
                            itm.nacGroup ? itm.nacGroup.name || '-' : '-',
                            this.renderIcon('BOOLEAN',itm.isExempt),
                            itm.created || new Date('01.01.1970'),
                            this.renderRowActions(idx, true)
                        ]
                    );
                });

            } else {
                this.logger.error("Device DateTable Error", data);
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
