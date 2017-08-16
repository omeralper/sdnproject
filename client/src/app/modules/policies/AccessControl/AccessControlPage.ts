/**
 * Created by ekinca on 27.07.2016.
 */
import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef} from '@angular/core';
import {BaseDataTablesPage} from "../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {GenericSearchRequest} from "../../../swagger/GenericSearchRequest";
import {SearchOptions} from "../../../swagger/SearchOptions";
import {UserDTO} from "../../../swagger/UserDTO";
import {PageServices} from "../../PageServices";
import {Action} from "../../../commons/Action";
import {DeleteOptions} from "../../../swagger/DeleteOptions";
import {GenericDeleteRequest} from "../../../swagger/GenericDeleteRequest";
import {PolicyApi} from "../../../swagger/PolicyApi";
import {AccessControlEditPopup} from "./AccessControlEditPopup";
import {AccessProfileListResponse} from "../../../swagger/AccessProfileListResponse";
import {AccessProfileDTO} from "../../../swagger/AccessProfileDTO";
import {QUERYOP} from "../../../swagger/QUERYOP";


@Component({
    moduleId: module.id,
    selector: 'AccessControlPage',
    templateUrl: '../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html'
})
export class AccessControlPage extends BaseDataTablesPage<AccessProfileDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {


    constructor(public policyApi: PolicyApi, baseServices: PageServices, elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('policy_management.access_control.list');

        this.setActions([
            this.createAction('@create_access_control_policy', () => {
                this.logger.debug('Create new traffic category action clicked')
                this.baseServices.sharedService.showModal(AccessControlEditPopup, {},
                    (result) => {
                        if (result.isSuccess) this.reload();
                    });
            })
        ]);


        this.setRowActions([
            /*            this.createAction('@view_user', (itm:UserDTO)=> {
             this.logger.debug('View user '+itm.username+' action clicked');
             }),*/
            this.createAction('@edit_access_control_policy', (itm: UserDTO) => {
                this.logger.debug('Edit user ' + itm.username + ' action clicked');
                this.baseServices.sharedService.showModal(AccessControlEditPopup, itm, (result) => {
                    if (result.isSuccess) this.reload();
                });
            }),
            //this.createAction('@set_pwd', (itm:UserDTO)=> {
            //    this.logger.debug('Change password of user '+itm.username+' action clicked');
            //    this.baseServices.sharedService.showModal(PasswordPopup, itm,(result)=>{
            //        if (result.isSuccess) this.reload();
            //    });
            //}),
            this.createAction('@delete_access_control_policy', (itm: UserDTO) => {
                this.logger.debug('Delete user ' + itm.username + ' action clicked');
                this.baseServices.uiHelper.confirm(this.t('messages.delete_confirm', {dto: itm}), (selected: Action) => {
                    if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
                        //this.baseServices.uiHelper.alert("OK we will delete");

                        let request = this.baseServices.apiHelper.genRequest({
                            options: <DeleteOptions> {
                                id: itm.id,
                                isReturnModel: false
                            }
                        });

                        this.policyApi
                            .policyAccessProfileDeletePOST(<GenericDeleteRequest>request)
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
                {title: this.ft('cat_name'), width: '45%', orderable: true, type: 'string', name: 'profileName'},
                {title: this.ft('priority'), width: '40%', orderable: true, type: 'num', name: 'profilePriority'},
                {title: this.ft('mvtnId'), width: '15%', orderable: true, type: 'num', name: 'mvtnId'},
                {visible:false,  type: 'string', name: 'allowedNacGroups'},
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
                [1, "asc"]
            ], // set first column as a default sort by asc
            argExtraFields: ["id"]
        };
    }

    makeDataTableRequest(requestOptions: any, data: any, callback: (data: any)=>void) {

        if (!requestOptions.queryOptions) requestOptions.queryOptions = { operator : QUERYOP.NOOP};

        let request = this.baseServices.apiHelper.genRequest({
            options: <SearchOptions> requestOptions
        });

        this.policyApi
            .policyAccessProfileSearchPOST(<GenericSearchRequest>request)
            .subscribe(
                (res) => {
                    executeCallback(<AccessProfileListResponse>res);
                }
            );

        this.logger.debug("Request:", request);

        let executeCallback = (response: AccessProfileListResponse) => {
            let dataTableData = [];

            if (this.baseServices.uiHelper.processResponse(response)) {

                this.currentList = response.data.list;

                response.data.list.forEach((itm: AccessProfileDTO, idx) => {
                    dataTableData.push(
                        [
                            //'<input type="checkbox" value="' + itm.id + '" class="group-checkable icheck">',
                            itm.profileName || '',
                            itm.profilePriority || '',
                            itm.mvtnName? itm.mvtnName || '' : '-',
                            itm.allowedNacGroups || '',
                            this.renderRowActions(idx, true)
                        ]
                    );
                });

            } else {
                this.logger.error('AccessControl DataTables Error:', data);
            }
            callback({
                draw: data.draw,
                recordsTotal: response.data ? response.data.totalItems : [],
                recordsFiltered: response.data ? response.data.totalItems : [],
                data: dataTableData
            });

            var that = this;

            $('td').on('click', function () {
                var tr = $(this).closest('tr');
                var row = that.$dataTableRef.row(tr);

                if (row.child.isShown()) {
                    row.child.hide();
                    tr.removeClass('shown');
                }
                else {
                    var rowIndex = that.$dataTableRef.row(this).index();
                    row.child(format(that.currentList[rowIndex], ["MAC", "IP", "PORT"])).show();
                    tr.addClass('shown');
                }
            });


            function format(d: AccessProfileDTO, headers) {
                var ths = thsMaker(headers);
                var table = '<table class="table table-bordered table-hover"'
                    + '<thead><tr><th rowspan="2" style="width:5% !important">' + "#" + ths + '</thead><tr>';
                for (var sd = 0; sd < headers.length; sd++) {
                    table += '<th>' + that.ft("src") + '<th>' + that.ft("dst")
                }

                for (var i = 0; i < d.accessPolicies.length; i++) {
                    let currentPolicy = d.accessPolicies[i];
                    table += '<tr><th>' + currentPolicy.policyName;
                    table += '<td>' + currentPolicy.packetHeaderCriteria.macAddresses.src + '<td>' + currentPolicy.packetHeaderCriteria.macAddresses.dest
                        + '<td>' + currentPolicy.packetHeaderCriteria.ipAddressess.src + '<td>' + currentPolicy.packetHeaderCriteria.ipAddressess.dest
                        + '<td>' + currentPolicy.packetHeaderCriteria.portRanges.src + '<td>' + currentPolicy.packetHeaderCriteria.portRanges.dest

                }
                table = table + '</table>';

                function thsMaker(headers) {
                    var result = "";
                    for (var i = 0; i < headers.length; i++) {
                        result = result + '<th style="text-align:center" colspan="2">' + headers[i];
                    }
                    return result;
                }

                return table
            }

        }
    }
}
