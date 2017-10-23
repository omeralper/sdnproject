/**
 * Created by omeroz on 11.01.2017.
 */
import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef} from "@angular/core";
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {PageServices} from "../../PageServices";
import {ListOptions} from "../../../swagger/ListOptions";
import {NacUserDeviceDTO} from "../../../swagger/NacUserDeviceDTO";
import {NacUserDeviceApi} from "../../../swagger/NacUserDeviceApi";
import {NacUserDeviceSearchRequest} from "../../../swagger/NacUserDeviceSearchRequest";
import {NacUserDeviceListResponse} from "../../../swagger/NacUserDeviceListResponse";
import {Action} from "../../../commons/Action";
import {DeleteOptions} from "../../../swagger/DeleteOptions";
import {GenericDeleteRequest} from "../../../swagger/GenericDeleteRequest";
import {SearchOptions} from "../../../swagger/SearchOptions";
import {NacUserDeviceListRequest} from "../../../swagger/NacUserDeviceListRequest";
import {BaseDataTablesPage} from "../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {NacUserDeviceEditPopup} from "../NacUserDeviceEditPopup/NacUserDeviceEditPopup";

@Component({
	moduleId: module.id,
    selector: 'DevicesOfUserList',
    templateUrl: '../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html',
	providers:[Location]
})
export class DevicesOfUserList extends BaseDataTablesPage<NacUserDeviceDTO> implements OnInit, AfterViewInit, OnDestroy {
    public userId;

    constructor(public userDevicesApi: NacUserDeviceApi,
                route: ActivatedRoute,
                baseServices: PageServices,
                public location:Location,
                elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('nac_management.devicesOfUser.list');
        this.userId = route.snapshot.params['userId'];
        this.title = route.snapshot.params['name'] + " " + this.t('title');
        this.isServerSide = false;
        this.setActions([
	        this.createAction('@back', () => {
		        this.location.back();
	        }),
            this.createAction('@create_device', () => {
                this.baseServices.sharedService.showModal(NacUserDeviceEditPopup, {nacUserId: this.userId},
                    (result) => {
                        if (result.isSuccess) this.reload();
                    });
            })
        ]);

        this.setRowActions([
            this.createAction('@edit_device', (itm: NacUserDeviceDTO) => {
                this.baseServices.sharedService.showModal(NacUserDeviceEditPopup, itm, (result) => {
                    if (result.isSuccess) this.reload();
                });
            }),
            this.createAction('@delete_device', (itm: NacUserDeviceDTO) => {
                this.baseServices.uiHelper.confirm(this.t('messages.delete_confirm', {dto: itm}), (selected: Action) => {
                    if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
                        let request = this.baseServices.apiHelper.genRequest({
                            options: <DeleteOptions> {
                                id: itm.id,
                                isReturnModel: false
                            }
                        });
                        this.userDevicesApi
                            .userDeviceDeletePOST(<GenericDeleteRequest>request)
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
                })
            })
        ]);
    }

    ngOnInit() {
        super.ngOnInit();
    }

    ngOnChanges(e) {
        super.ngOnChanges(e);
    }

    ngAfterViewInit() {
        if (super.ngAfterViewInit()) {

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
                {title: this.ft('name'), width: '20%', orderable: true, type: 'string', name: 'nacDevice.name'},
                {title: this.ft('mac'), width: '20%', orderable: true, type: 'string', name: 'nacDevice.mac'},
                {
                    title: this.ft('has8021xSupport'),
                    width: '20%',
                    orderable: true,
                    type: 'boolean',
                    name: 'has8021xSupport'
                },
                {
                    title: this.ft('byodNacGroup'),
                    width: '20%',
                    orderable: true,
                    type: 'string',
                    name: 'byodNacGroup.name'
                },
                {title: this.ft('isBYOD'), width: '10%', orderable: true, type: 'boolean', name: 'isBYOD'},
                {
                    title: $.t('common.fields.actions'),
                    width: '10%',
                    name: 'actions',
                    orderable: false,
                    type: 'html',
                    defaultContent: '',
                    className: 'action_cell',
                    bound: false
                }
            ],
            "order": [
                [0, "asc"]
            ],
        };
    }

    makeDataTableRequest(requestOptions: any, data: any, callback: (data: any)=>void) {
        let request;
        if (requestOptions.queryOptions) {

            request = <NacUserDeviceSearchRequest>this.baseServices.apiHelper.genRequest({
                options: <SearchOptions> requestOptions,
                nacUserId: this.userId
            });

            this.userDevicesApi
                .userDeviceSearchPOST(request)
                .subscribe(
                    (res) => {
                        executeCallback(<NacUserDeviceListResponse>res);
                    }
                );
        } else {
            request = <NacUserDeviceListRequest>this.baseServices.apiHelper.genRequest({
                options: <ListOptions> requestOptions,
                nacUserId: this.userId
            });

            this.userDevicesApi
                .userDeviceListPOST(request)
                .subscribe(
                    (res) => {
                        executeCallback(<NacUserDeviceListResponse>res);
                    }
                );
        }

        let executeCallback = (response: NacUserDeviceListResponse) => {
            let dataTableData = [];
            if (this.baseServices.uiHelper.processResponse(response)) {
                this.currentList = response.data.list;
                response.data.list.forEach((itm: NacUserDeviceDTO, idx) => {
                    dataTableData.push(
                        [
                            itm.nacDevice.name || '',
                            itm.nacDevice.mac || '',
                            this.renderIcon('BOOLEAN',itm.has8021xSupport),
                            itm.byodNacGroup.name || '',
                            this.renderIcon('BOOLEAN',itm.isBYOD),
                            this.renderRowActions(idx, true)
                        ]
                    );
                });
            } else {
                this.logger.error("Device DataTable Error", data);
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
