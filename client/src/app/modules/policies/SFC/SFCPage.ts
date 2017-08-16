/**
 * Created by barangu on 6/7/2017.
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
import {DocumentConverter} from "../../DocumentConverter";
import {QUERYOP} from "../../../swagger/QUERYOP";
import {SfcDTO} from "../../../swagger/SfcDTO";
import {SfcApi} from "../../../swagger/SfcApi";
import {SfcListResponse} from "../../../swagger/SfcListResponse";
import {SFCEditPopup} from "./SFCEditPopup";


@Component({ moduleId: module.id,
    selector: 'SFCPage',
    templateUrl: '../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html',
    providers: [SfcApi]
})
export class SFCPage extends BaseDataTablesPage<SfcDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {


    constructor(public sfcApi:SfcApi, baseServices:PageServices, elementRef:ElementRef, public dc: DocumentConverter) {
        super(baseServices, elementRef);
        this.setI18NKey('policy_management.sfc.list');

        this.setActions([
            this.createAction('@create', ()=> {
                this.logger.debug('Create new service chain action clicked')
                this.baseServices.sharedService.showModal(SFCEditPopup,{
                    },
                    (result)=>{
                        if (result.isSuccess) this.reload();
                    });
            })
        ]);


        this.setRowActions([

            this.createAction('@delete', (itm:SfcDTO)=> {
                this.logger.debug('Delete sfc '+itm.sfcName+' action clicked');
                this.baseServices.uiHelper.confirm(this.t('messages.delete_confirm', {dto: itm}), (selected:Action)=> {
                    if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
                        //this.baseServices.uiHelper.alert("OK we will delete");

                        let request = this.baseServices.apiHelper.genRequest({
                            options: <DeleteOptions> {
                                id: itm.id,
                                isReturnModel: false
                            }
                        });

                        this.sfcApi
                            .sfcChainDeletePOST(<GenericDeleteRequest>request)
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
                });
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
                {title: this.ft('status'), width: '10%', orderable: false, type: 'string', name: 'sfcStatus', className: 'dt-center',},
                {title: this.ft('sfcName'), width: '20%', orderable: true, type: 'string', name: 'sfcName'},
                {title: this.ft('type'), width: '20%', orderable: true, type: 'string', name: 'sfcTypeName'},
                {title: this.ft('chainList'), width: '40%', orderable: true, type: 'string', name: 'vnfrList'},
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
        this.sfcApi
            .sfcChainSearchPOST(<GenericSearchRequest>request)
            .subscribe(
                (res) => {
                    executeCallback(<SfcListResponse>res);
                }
            );

        this.logger.debug("Request:",request);

        let executeCallback = (response:SfcListResponse) => {
            //debugger;
            let dataTableData = [];

            if (this.baseServices.uiHelper.processResponse(response)) {

                this.currentList = response.data.list;

                response.data.list.forEach((itm:SfcDTO, idx)=> {

                    let vnfrNames = [];
                    itm.vnfrList.forEach((r)=>{vnfrNames.push(r.vnfrName);});

                    dataTableData.push(
                        [
                            //'<input type="checkbox" value="' + itm.id + '" class="group-checkable icheck">',
                            this.renderIcon("SFCSTATUS", itm.sfcStatus),
                            itm.sfcName? itm.sfcName : '',
                            itm.sfcTypeName ? itm.sfcTypeName  : '',
                            vnfrNames ? vnfrNames.join(">") : '',
                            this.renderRowActions(idx,true)
                        ]
                    );
                });

            } else {
                this.logger.error('SFC DataTables Error:',data);
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
