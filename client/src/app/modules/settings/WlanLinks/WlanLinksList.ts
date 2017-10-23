/**
 * Created by ekinca on 18.05.2017.
 */
import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef} from '@angular/core';
import {BaseDataTablesPage} from "../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {GenericSearchRequest} from "../../../swagger/GenericSearchRequest";
import {SearchOptions} from "../../../swagger/SearchOptions";
import {ListOptions} from "../../../swagger/ListOptions";
import {PageServices} from "../../PageServices";
import {Action} from "../../../commons/Action";
import {DeleteOptions} from "../../../swagger/DeleteOptions";
import {DocumentConverter} from "../../DocumentConverter";
import {QUERYOP} from "../../../swagger/QUERYOP";
import {WanPortInfoDTO} from "../../../swagger/WanPortInfoDTO";
import {WlanLinksEditPopup} from "./WlanLinksEditPopup";
import {WanPortInfoListResponse} from "../../../swagger/WanPortInfoListResponse";
import {WanPortInfoApi} from "../../../swagger/WanPortInfoApi";
import {GenericDeleteRequest} from "../../../swagger/GenericDeleteRequest";


@Component({
    moduleId: module.id,
    selector: 'wlanlinks',
    templateUrl: '../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html'
})
export class WlanLinksList extends BaseDataTablesPage<WanPortInfoDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {


    constructor(public wanApi: WanPortInfoApi, baseServices:PageServices, elementRef:ElementRef, public dc: DocumentConverter) {
        super(baseServices, elementRef);
        this.setI18NKey('wlan.list');

        this.setActions([
            this.createAction('@create_wlan', ()=> {
                this.baseServices.sharedService.showModal(WlanLinksEditPopup,{
                    },
                    (result)=>{
                        if (result.isSuccess) this.reload();
                    });
            })
        ]);


        this.setRowActions([
            this.createAction('@edit_wlan', (itm:WanPortInfoDTO)=> {
                this.baseServices.sharedService.showModal(WlanLinksEditPopup, itm,(result)=>{
                    if (result.isSuccess) this.reload();
                });
            }),

            this.createAction('@delete_wlan', (itm:WanPortInfoDTO)=> {
                this.baseServices.uiHelper.confirm(this.t('messages.delete_confirm', {dto: itm}), (selected:Action)=> {
                    if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
                        let request = this.baseServices.apiHelper.genRequest({
                            options: <DeleteOptions> {
                                id: itm.id,
                                isReturnModel: false
                            }
                        });

                        this.wanApi
                            .wanConfigurationWanPortInfoDeletePOST(<GenericDeleteRequest>request)
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
                {title: this.ft('status'), width: '5%', orderable: true, type: 'string', name: 'status', className: 'dt-center'},
                {title: this.ft('wlan_link_name'), width: '15%', orderable: true, type: 'num', name: 'name'},
                {title: this.ft('src_cluster'), width: '15%', orderable: true, type: 'num', name: 'sourceSwitchId'},
                {title: this.ft('dst_cluster'), width: '15%', orderable: true, type: 'num', name: 'targetClusterName'},
                {title: this.ft('delay'), width: '5%', orderable: true, type: 'num', name: 'delay'},
                {title: this.ft('jitter'), width: '5%', orderable: true, type: 'num', name: 'jitter'},
                {title: this.ft('loss'), width: '5%', orderable: true, type: 'num', name: 'loss'},
                {title: this.ft('desc'), width: '25%', orderable: true, type: 'num', name: 'explanation'},
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
        this.wanApi
            .wanConfigurationWanPortInfoSearchPOST(<GenericSearchRequest>request)
            .subscribe(
                (res) => {
                    executeCallback(<WanPortInfoListResponse>res);
                }
            );

        this.logger.debug("Request:",request);

        let executeCallback = (response:WanPortInfoListResponse) => {
            //debugger;
            let dataTableData = [];

            if (this.baseServices.uiHelper.processResponse(response)) {

                this.currentList = response.data.list;

                response.data.list.forEach((itm:WanPortInfoDTO, idx)=> {
                    let sources = itm.sourceSwitchId && itm.sourcePortNumber ? itm.sourceSwitchId + ":" + itm.sourcePortNumber : "-"

                    dataTableData.push(
                        [
                            //'<input type="checkbox" value="' + itm.id + '" class="group-checkable icheck">',
                            this.renderIcon("WANPORTINFOSTATUS", itm.status),
                            itm.name || "-",
                            sources,
                            itm.targetClusterName || "-",
                            itm.delay ? itm.delay + " ms" : '',
                            itm.jitter ? itm.jitter + " ms" : '',
                            itm.miss ? "%" + itm.miss : '',
                            itm.explanation || "-",
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
