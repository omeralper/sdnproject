/**
 * Created by ekinca on 27.07.2016.
 */
import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef} from '@angular/core';
import {BaseDataTablesPage} from "../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {GenericSearchRequest} from "../../../swagger/GenericSearchRequest";
import {SearchOptions} from "../../../swagger/SearchOptions";
import {ListOptions} from "../../../swagger/ListOptions";
import {PageServices} from "../../PageServices";
import {Action} from "../../../commons/Action";
import {DeleteOptions} from "../../../swagger/DeleteOptions";
import {GenericDeleteRequest} from "../../../swagger/GenericDeleteRequest";
import {TrafficCategoryEditPopup} from "./TrafficCategoryEditPopUp";
import {PolicyApi} from "../../../swagger/PolicyApi";
import {ServicePolicyClassListResponse} from "../../../swagger/ServicePolicyClassListResponse";
import {ServicePolicyClassDTO} from "../../../swagger/ServicePolicyClassDTO";
import {DocumentConverter} from "../../DocumentConverter";
import {QUERYOP} from "../../../swagger/QUERYOP";


@Component({ moduleId: module.id,
    selector: 'TrafficCategoriesPage',
    templateUrl: '../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html'
})
export class TrafficCategoriesPage extends BaseDataTablesPage<ServicePolicyClassDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {


    constructor(public policyApi:PolicyApi, baseServices:PageServices, elementRef:ElementRef, public dc: DocumentConverter) {
        super(baseServices, elementRef);
        this.setI18NKey('policy_management.traffic_categories.list');

        this.setActions([
            this.createAction('@create_traffic_category', ()=> {
                this.logger.debug('Create new traffic category action clicked')
                this.baseServices.sharedService.showModal(TrafficCategoryEditPopup,{
                    },
                    (result)=>{
                        if (result.isSuccess) this.reload();
                    });
            })
        ]);


        this.setRowActions([
            /*            this.createAction('@view_user', (itm:UserDTO)=> {
             this.logger.debug('View user '+itm.username+' action clicked');
             }),*/
            this.createAction('@edit_traffic_category', (itm:ServicePolicyClassDTO)=> {
                this.logger.debug('Edit user '+itm.serviceClassName+' action clicked');
                this.baseServices.sharedService.showModal(TrafficCategoryEditPopup, itm,(result)=>{
                    if (result.isSuccess) this.reload();
                });
            }),

            this.createAction('@delete_traffic_category', (itm:ServicePolicyClassDTO)=> {
                this.logger.debug('Delete user '+itm.serviceClassName+' action clicked');
                this.baseServices.uiHelper.confirm(this.t('messages.delete_confirm', {dto: itm}), (selected:Action)=> {
                    if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
                        //this.baseServices.uiHelper.alert("OK we will delete");

                        let request = this.baseServices.apiHelper.genRequest({
                            options: <DeleteOptions> {
                                id: itm.id,
                                isReturnModel: false
                            }
                        });

                        this.policyApi
                            .policyServiceClassDeletePOST(<GenericDeleteRequest>request)
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
                {title: this.ft('cat_name'), width: '30%', orderable: true, type: 'string', name: 'serviceClassName'},
                {title: this.ft('class_level'), width: '10%', orderable: true, type: 'num', name: 'classLevel'},
                {title: this.ft('bandwidth'), width: '15%', orderable: true, type: 'num', name: 'bandwidth'},
                {title: this.ft('jitter'), width: '15%', orderable: true, type: 'num', name: 'jitter'},
                {title: this.ft('delay'), width: '15%', orderable: true, type: 'num', name: 'delay'},
                {title: this.ft('collision'), width: '15%', orderable: true, type: 'num', name: 'collision'},
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
                [2, "asc"]
            ], // set first column as a default sort by asc
            argExtraFields: ["bandwidthUnit"]
        };
    }

    makeDataTableRequest(requestOptions:any, data:any, callback:(data:any)=>void) {

        if (!requestOptions.queryOptions) requestOptions.queryOptions = { operator : QUERYOP.NOOP};

        let request = this.baseServices.apiHelper.genRequest({
            options: <ListOptions>{
                startPage: 0,
                pageSize: 0,
                sortOptions: {fieldName: 'name', isAscend: true},
                //fields: null
            }
        });

        request.options = <SearchOptions> requestOptions;
        this.policyApi
            .policyServiceClassSearchPOST(<GenericSearchRequest>request)
            .subscribe(
                (res) => {
                    executeCallback(<ServicePolicyClassListResponse>res);
                }
            );

        this.logger.debug("Request:",request);

        let executeCallback = (response:ServicePolicyClassListResponse) => {
            //debugger;
            let dataTableData = [];

            if (this.baseServices.uiHelper.processResponse(response)) {

                this.currentList = response.data.list;

                response.data.list.forEach((itm:ServicePolicyClassDTO, idx)=> {
                    var bwString:any = "-";

                    if(this.dc.isNotNullOrUndefinedOrEmptyString(itm.bandwidth)){
                        bwString = itm.bandwidth;
                        if(itm.bandwidthUnit){
                            bwString = bwString + " " + itm.bandwidthUnit;
                        }
                    }

                    dataTableData.push(
                        [
                            //'<input type="checkbox" value="' + itm.id + '" class="group-checkable icheck">',
                            itm.serviceClassName ||'',
                            itm.classLevel? itm.classLevel : '',
                            bwString,
                            itm.jitter ? itm.jitter + " ms" : '',
                            itm.delay ? itm.delay + " ms" : '',
                            itm.collision ? itm.collision + " " + this.t("fields.collision_unit") : "",
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
