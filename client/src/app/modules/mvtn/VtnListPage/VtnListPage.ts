/**
 * Created by yildirayme on 22.08.2016.
 */
import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef} from "@angular/core";
import {Router} from "@angular/router";
import {PageServices} from "../../PageServices";
import {TOPOLOGYTYPE} from "../../../swagger/TOPOLOGYTYPE";
import {Action} from "../../../commons/Action";
import {BaseDataTablesPage} from "../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {MvtnApi} from "../../../swagger/MvtnApi";
import {MvtnListResponse} from "../../../swagger/MvtnListResponse";
import {MvtnDTO} from "../../../swagger/MvtnDTO";
import {MVTNSTATUS} from "../../../swagger/MVTNSTATUS";
import {MvtnController} from "../MvtnController";
import {RETURNSTATUS} from "../../../swagger/RETURNSTATUS";
import {GenericSearchRequest} from "../../../swagger/GenericSearchRequest";
import {MvtnRequestApi} from "../../../swagger/MvtnRequestApi";
import {QUERYOP} from "../../../swagger/QUERYOP";
import {MVTNTYPE} from "../../../swagger/MVTNTYPE";
import {EventsManager, IEventSubscription} from "../../EventsManager";
import {MvtnEventProcessor} from "../MvtnEventProcessor";


@Component({
    moduleId: module.id,
    selector: 'VtnListPage',
    templateUrl: '../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html',
    providers: [MvtnController, MvtnRequestApi]
})
export class VtnListPage extends BaseDataTablesPage<MvtnDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {

    data: any;
    public eventSubscription: IEventSubscription;

    constructor(public router: Router,
                public eventsManager: EventsManager,
                public mvtnController: MvtnController,
                public mvtnApi: MvtnApi,
                baseServices: PageServices,
                elementRef: ElementRef) {
        super(baseServices, elementRef);

        //This definition may be read from Page parameter in the future.
        this.data = {
            topologyId: '',
            topologyType: TOPOLOGYTYPE.VIRTUAL
        };
        /*
         //populate i18n fields but exclude title, because we are going to define it here
         this.setI18NKey('network_vis.topology.list', {
         'title': ()=>this.t('title', {type: this.i18n.t('common.labels.' + this.data.topologyType)}),
         'basePerm': ()=> (this.data.topologyType == TOPOLOGYTYPE.PHYSICAL ? 'phy_topo' : 'vir_topo'),
         });*/

        this.setI18NKey('network_vis.virtual_topo.list');

        this.setActions([
            this.createAction('@create_topology', () => {
                this.logger.debug('Add new topology clicked');
                this.createTopology();
            }),
            this.createAction('@create_topology_request', () => {
                this.logger.debug('Add new topology clicked');
                this.createTopology();
            })
        ]);

        let rowActions = [
            this.createAction('@view_topology', (itm: MvtnDTO)=> {
                this.logger.debug('View topology ' + itm.name + ' action clicked');
                this.viewTopology(itm);
            }),
            this.createAction('@edit_topology', (itm: MvtnDTO)=> {
                this.logger.debug('Edit topology ' + itm.name + ' action clicked');
                this.editTopology(itm);
            }),
            this.createAction('@action_menu', [
                this.createAction('@create_approve', (itm: MvtnDTO) => {
                    this.logger.debug('Approve topology ' + itm.name + ' action clicked');
                    this.approveTopology(itm, true);
                }),
                this.createAction('@create_deny', (itm: MvtnDTO) => {
                    this.logger.debug('Deny topology ' + itm.name + ' action clicked');
                    this.approveTopology(itm, false);
                }),
                this.createAction('@activate_topology', (itm: MvtnDTO) => {
                    this.logger.debug('Activate topology ' + itm.name + ' action clicked');
                    this.toggleTopology(itm, true);
                }),
                this.createAction('@deactivate_topology', (itm: MvtnDTO) => {
                    this.logger.debug('Deactivate topology ' + itm.name + ' action clicked');
                    this.toggleTopology(itm, false);
                }),
                this.createAction('@delete_topology', (itm: MvtnDTO) => {
                    this.logger.debug('Delete topology ' + itm.name + ' action clicked');
                    this.deleteTopology(itm);
                })

                // this.createAction('@delete_approve', (itm:MvtnDTO)=> {
                //      this.logger.debug('Approve delete topology ' + itm.name + ' action clicked');
                //      this.deleteTopology(itm,'messages.delete_request_confirm','messages.delete_request_success');
                //  }),
                // this.createAction('@delete_deny', (itm: MvtnDTO)=> {
                //     this.logger.debug('Deny delete topology ' + itm.name + ' action clicked');
                //     this.approveTopology(itm, false);
                // }),
            ]),
        ];

        //if(this.p("phy_topo:manage")){
        //     rowActions.splice(1,0,
        //         this.createAction('@edit_topology', (itm: MvtnDTO)=> {
        //          this.logger.debug('Edit topology ' + itm.name + ' action clicked');
        //          this.editTopology(itm);
        //      }));
        //}

        this.setRowActions(rowActions);

        // this.setRowStatusActions([
        //     this.createAction('@activate_topology', (itm: MvtnDTO)=> {
        //         this.logger.debug('Activate topology ' + itm.name + ' action clicked');
        //         this.toggleTopology(itm, true);
        //     }),
        //     this.createAction('@deactivate_topology', (itm: MvtnDTO)=> {
        //         this.logger.debug('Deactivate topology ' + itm.name + ' action clicked');
        //         this.toggleTopology(itm, false);
        //     }),
        // ]);
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
            this.subscribeMvtnEvents();
            return true;
        }
        return false;
    }

    ngOnDestroy() {
        this.unsubscribeMvtnEvents();
        super.ngOnDestroy();
    }

    getDataTableOptions() {
        return {
            columns: [
                //{title: '<input type="checkbox" class="group-checkable icheck">', type:'html', name:'id'},
                {
                    title: this.ft('mvtnStatus'),
                    width: '5%',
                    orderable: true,
                    type: 'string',
                    name: 'mvtnStatus',
                    className: 'dt-center',

                },
                {title: this.ft('name'), width: '25%', orderable: true, type: 'string', name: 'name'},
                {
                    title: this.ft('mvtnType'),
                    width: '10%',
                    orderable: true,
                    type: 'string',
                    name: 'mvtnType',
                    className: 'dt-center'
                },
                {
                    title: this.ft('creationDate'),
                    width: '25%',
                    orderable: true,
                    type: 'Date',
                    name: 'creationDate',
                    className: 'dt-center'
                },
                {
                    title: this.ft('lastUpdateDate'),
                    width: '25%',
                    orderable: true,
                    type: 'Date',
                    name: 'lastUpdateDate',
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
            searching: true //disable searching since API is not supporting it.
        };
    }


    makeDataTableRequest(requestOptions: any, data: any, callback: (data: any) => void) {
        let request: any;

        if (!requestOptions.queryOptions) requestOptions.queryOptions = {operator: QUERYOP.NOOP};

        request = this.baseServices.apiHelper.genRequest({
            options: requestOptions
        });

        this.mvtnApi
            .virtualSearchPOST(<GenericSearchRequest>request)
            .subscribe(
                (res) => {
                    executeCallback(<MvtnListResponse>res);
                },
                (error: any) => {
                    executeCallback(<MvtnListResponse>JSON.parse(error._body));
                }
            );

        this.logger.debug("Request:", request);

        let executeCallback = (response: MvtnListResponse) => {
            let dataTableData = [];

            if (this.baseServices.uiHelper.processResponse(response)) {

                this.currentList = response.data.list;

                response.data.list.forEach((itm: MvtnDTO, idx) => {
                    dataTableData.push(
                        [
                            //'<input type="checkbox" value="' + itm.id + '" class="group-checkable icheck">',
                            this.renderIcon("MVTNSTATUS", itm.mvtnStatus),
                            //this.renderRowStatusActions(idx, MVTNSTATUS,'mvtnStatus'),
                            itm.name,
                            itm.mvtnType == MVTNTYPE.STATIC ? '<i class="fa fa-male change-mvtn-type" data-index="' + idx + '" aria-hidden="true"></i>' : '<i class="fa fa-rocket change-mvtn-type" data-index="' + idx + '" aria-hidden="true"></i>',
                            this.renderDateTime(itm.creationDate),
                            this.renderDateTime(itm.lastUpdateDate),
                            this.renderRowActions(idx, true, (action: Action, idx: number, data: MvtnDTO) => {

                                if (is.existy(action.states) && is.not.empty(action.states)) {
                                    for (let i in action.states) {
                                        if ( data.mvtnStatus == MVTNSTATUS[action.states[i]] || !this.p('phy_topo:manage'))
                                            return true;
                                    }
                                    return false;
                                }

                                return true;
                            })
                        ]
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

            this.$tableRef.off("click", ".change-mvtn-type").on("click", ".change-mvtn-type", (e) => {
                e.stopPropagation();
                if (this.p('phy_topo:manage')) {
                    let idx = $(e.currentTarget).data('index');
                    let dto = this.currentList[idx];
                    this.baseServices.uiHelper.confirm(this.t("messages.change_mvtn_type_confirm", {dto: dto}), (v) => {
                        if (v === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
                            let reqDTO = this.baseServices.apiHelper.genRequest({
                                data: this.baseServices.apiHelper.genDTO({
                                    id: dto.id,
                                    mvtnType: dto.mvtnType == MVTNTYPE.STATIC ? MVTNTYPE.DYNAMIC : MVTNTYPE.STATIC
                                })
                            });
                            this.mvtnApi.virtualChangeTypePOST(reqDTO).subscribe((res) => {
                                if (this.baseServices.uiHelper.processResponse(res)) {
                                    this.reload();
                                }
                            });
                        }
                    });
                }
            });
        }
    }

    createTopology() {
        this.mvtnController.createTopology();
    }

    viewTopology(itm: MvtnDTO) {
        this.mvtnController.viewTopology(itm);
    }

    editTopology(itm: MvtnDTO) {
        this.mvtnController.editTopology(itm);
    }

    deleteTopology(itm: MvtnDTO) {
        this.mvtnController.deleteTopology(itm, (res) => {
            if (res.status == RETURNSTATUS.SUCCESS) this.reload();
        });
    }

    approveTopology(itm: MvtnDTO, isApproved: boolean) {
        this.mvtnController.approveTopology(itm, isApproved, (res) => {
            if (res.status == RETURNSTATUS.SUCCESS) this.reload();
        });
    }

    toggleTopology(itm: MvtnDTO, isActivate: boolean) {
        this.mvtnController.toggleTopology(itm, isActivate, (res) => {
            if (res.status == RETURNSTATUS.SUCCESS) this.reload();
        });
    }

    public subscribeMvtnEvents() {
        this.unsubscribeMvtnEvents();

        this.baseServices.logger.debug("SUBSCRIBE TO MVTN EVENTS");
        this.eventSubscription = this.eventsManager.on(MvtnEventProcessor.EVENT, (event) => {
            this.baseServices.logger.debug("MVTN EVENT RECEIVED", event.eventData);
            this.reload();
        });

    }

    public unsubscribeMvtnEvents() {
        if (is.existy(this.eventSubscription)) {
            this.baseServices.logger.debug("UNSUBSCRIBE FROM MVTN EVENTS");
            this.eventSubscription.unsubscribe();
            this.eventSubscription = null;
        }
    }
}

