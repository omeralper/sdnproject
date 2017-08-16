/**
 * Created by omeroz on 4/28/2017.
 */

import {Component, OnInit, AfterViewInit, ElementRef} from "@angular/core";
import {PageServices} from "../../../PageServices";
import {BasePopupDataTablesPage} from "../../../../commons/BasePopupDataTablesPage/BasePopupDataTablesPage";
import {MODAL_SIZE} from "../../../ModalComponent";
import {GenericSearchRequest} from "../../../../swagger/GenericSearchRequest";
import {DhcpIPOwnerDTO} from "../../../../swagger/DhcpIPOwnerDTO";
import {DhcpScopeDTO} from "../../../../swagger/DhcpScopeDTO";
import {DhcpApi} from "../../../../swagger/DhcpApi";
import {DhcpIPOwnerListResponse} from "../../../../swagger/DhcpIPOwnerListResponse";
import {QueryOptions} from "../../../../swagger/QueryOptions";
import {QUERYOP} from "../../../../swagger/QUERYOP";
import {SearchOptions} from "../../../../swagger/SearchOptions";

@Component({
    moduleId: module.id,
    selector: 'DhcpAssignedAddressesPopup',
    templateUrl: '../../../../commons/BasePopupDataTablesPage/BasePopupDataTablesPage.html',
})

export class DhcpAssignedAddressesPopup extends BasePopupDataTablesPage<DhcpScopeDTO, DhcpIPOwnerDTO> implements OnInit, AfterViewInit {

    constructor(public dhcpApi: DhcpApi, baseServices: PageServices, elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.modalSize = MODAL_SIZE.LARGE;

        this.setI18NKey('settings.dhcp.assigned');
    }

    ngOnChanges(e) {
        super.ngOnChanges(e);
    }

    ngOnInit() {
        super.ngOnInit();
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
                {
                    title: this.ft('hostName'),
                    width: '15%',
                    orderable: true,
                    type: 'string',
                    name: 'hostName',
                    className: 'dt-center'
                },
                {
                    title: this.ft('IP'),
                    width: '15%',
                    orderable: true,
                    type: 'string',
                    name: 'IP',
                    className: 'dt-center'
                },
                {
                    title: this.ft('MAC'),
                    width: '15%',
                    orderable: true,
                    type: 'string',
                    name: 'MAC',
                    className: 'dt-center'
                },
                {
                    title: this.ft('userName'),
                    width: '15%',
                    orderable: true,
                    type: 'string',
                    name: 'userName',
                    className: 'dt-center'
                },
                {
                    title: this.ft('assignmentDate'),
                    width: '15%',
                    orderable: true,
                    type: 'string',
                    name: 'startDate',
                    className: 'dt-center'
                },
                {
                    title: this.ft('expireDate'),
                    width: '10%',
                    orderable: true,
                    type: 'string',
                    name: 'endDate',
                    className: 'dt-center'
                }
            ],
            order: [
                [4, "asc"]
            ],
            searching: false
        };
    }


    makeDataTableRequest(requestOptions: any, data: any, callback: (data: any) => void) {
	    let request = this.baseServices.apiHelper.genRequest({
		    options: <SearchOptions> $.extend(requestOptions,{
			    queryOptions: <QueryOptions>{
				    fieldName: "id",
				    operator: QUERYOP.VALUE,
				    fieldValue: this.data.id
			    }
		    })
	    });

        this.dhcpApi
            .dhcpWebIpownerSearchPOST(<GenericSearchRequest>request)
            .subscribe(
                (res) => {
                    executeCallback(<DhcpIPOwnerListResponse>res);
                }
            );


        let executeCallback = (response: DhcpIPOwnerListResponse) => {
            let dataTableData = [];

            if (this.baseServices.uiHelper.processResponse(response)) {

                this.currentList = response.data.list;

                response.data.list.forEach((itm: DhcpIPOwnerDTO, idx) => {
                    dataTableData.push(
                        [
                            itm.hostName || '',
                            itm.IP,
                            itm.MAC,
                            itm.userName ||'',
                            this.renderDateTime(itm.startDate),
                            this.renderDateTime(itm.endDate)
                        ]
                    );
                });

            } else {
                this.logger.error("Dhcp assigned addresses DataTable Error", data);
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

