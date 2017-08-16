/**
 * Created by ekinca on 12.04.2016.
 */
import {Component, OnInit, AfterViewInit, ElementRef} from "@angular/core";
import {TopologyApi} from "../../../swagger/TopologyApi";
import {TopologyListOptions} from "../../../swagger/TopologyListOptions";
import {TopologyListRequest} from "../../../swagger/TopologyListRequest";
import {TopologyListResponse} from "../../../swagger/TopologyListResponse";
import {TopologyInfoDTO} from "../../../swagger/TopologyInfoDTO";
import {PageServices} from "../../PageServices";
import {TOPOLOGYTYPE} from "../../../swagger/TOPOLOGYTYPE";
import {MODAL_SIZE} from "../../ModalComponent";
import {TOPOLOGYSTATUS} from "../../../swagger/TOPOLOGYSTATUS";
import {Action} from "../../../commons/Action";
import {GenericDeleteRequest} from "../../../swagger/GenericDeleteRequest";
import {DeleteOptions} from "../../../swagger/DeleteOptions";
import {BasePopupDataTablesPage} from "../../../commons/BasePopupDataTablesPage/BasePopupDataTablesPage";

@Component({ moduleId: module.id,
    selector: 'VtnListPopup',
    templateUrl: '../../../commons/BasePopupDataTablesPage/BasePopupDataTablesPage.html',
    providers: []
})
export class VtnListPopup extends BasePopupDataTablesPage<any,TopologyInfoDTO> implements OnInit, AfterViewInit {

    constructor(public topologyApi:TopologyApi, baseServices:PageServices, elementRef:ElementRef) {
        super(baseServices, elementRef);
        this.modalSize = MODAL_SIZE.LARGE;

        //populate i18n fields but exclude title, because we are going to define it here
        this.setI18NKey('network_vis.topology.list', {
            'title': ()=>this.t('title', {type: this.i18n.t('common.labels.' + this.data.topologyType)}),
            'basePerm': ()=> (this.data.topologyType == TOPOLOGYTYPE.PHYSICAL ? 'phy_topo' : 'vir_topo'),
        });

        this.setPopupActions([
            this.createAction('@add_topology', ()=> {
                this.logger.debug('Add new topology clicked');
                this.close(true, "new");
            })
        ]);

        this.setRowActions([
            this.createAction('@view_topology', (itm:TopologyInfoDTO)=> {
                this.logger.debug('View topology ' + itm.name + ' action clicked');

                this.close(true, itm);

            }),
            // this.createAction('@edit_topology', (itm:TopologyInfoDTO)=> {
            //     this.logger.debug('Edit topology ' + itm.name + ' action clicked');
            //
            // }),
             this.createAction('@delete_topology', (itm:TopologyInfoDTO)=> {
                 this.logger.debug('Delete topology ' + itm.name + ' action clicked');
                 this.baseServices.uiHelper.confirm(this.t('messages.delete_confirm', {dto: itm}), (selected:Action)=> {
                     if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
                         //this.baseServices.uiHelper.alert("OK we will delete");

                         let request = this.baseServices.apiHelper.genRequest({
                             options: <DeleteOptions> {
                                 id: itm.id,
                                 isReturnModel: false
                             }
                         });

                         this.topologyApi
                             .topologyDeletePOST(<GenericDeleteRequest>request)
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
                {title: this.ft('status'), width: '5%', orderable: true, type: 'string', name: 'status'},
                {title: this.ft('name'), width: '35%', orderable: true, type: 'string', name: 'name'},
                {title: this.ft('type'), width: '25', orderable: true, type: 'string', name: 'type'},
                {title: this.ft('date'), width: '25%', orderable: true, type: 'Date', name: 'date'},
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
        //debugger;
        let request:any;

        if (requestOptions.queryOptions) {
            //use Search function
            //request = this.baseServices.apiHelper.genRequest({
            //    options:<TopologySearchOptions> $.extend(requestOptions, {
            //        topologyType: this.data.topologyType,
            //    })
            //})

            // this.topologyApi
            //     .topologySearchPOST(<TopologyListRequest>request)
            //     .subscribe(
            //         (res) => {
            //             executeCallback(<TopologyListResponse>res);
            //         }
            //     );

            //we are removing query parameters since system does not support searching
            delete requestOptions.queryOptions;
        }
        //else
        //{
        //use list function
        request = this.baseServices.apiHelper.genRequest({
            options: <TopologyListOptions> $.extend(requestOptions, {
                topologyType: this.data.topologyType, //dataTOPOLOGYTYPE.VIRTUAL,
            })
        });

        this.topologyApi
            .topologyListPOST(<TopologyListRequest>request)
            .subscribe(
                (res) => {
                    executeCallback(<TopologyListResponse>res);
                },
                (error:any) => {
                    executeCallback(<TopologyListResponse>JSON.parse(error._body));
                }
            );
        //}

        this.logger.debug("Request:", request);

        let executeCallback = (response:TopologyListResponse) => {
            let dataTableData = [];

            if (this.baseServices.uiHelper.processResponse(response)) {

                this.currentList = response.data.list;

                response.data.list.forEach((itm:TopologyInfoDTO, idx)=> {
                    dataTableData.push(
                        [
                            //'<input type="checkbox" value="' + itm.id + '" class="group-checkable icheck">',
                            this.renderIcon("TOPOLOGYSTATUS", itm.status),
                            itm.name,
                            itm.type,
                            itm.activeSince,
                            //'<a class="action" href="#" data-type="VIRTUAL" data-id="Arg_VTN1"><i class="fa fa-search"></i></a>'
                            this.renderRowActions(idx, true)
                        ]/*Arg_VTN1   data-id="' + itm.id + '">*/
                    );
                });

            } else {
                this.logger.error("Topology List DateTable Error", data);
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

