/**
 * Created by ekinca on 21.12.2016.
 */
import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef} from "@angular/core";
import {Router} from "@angular/router";
import {PageServices} from "../../PageServices";
import {TOPOLOGYTYPE} from "../../../swagger/TOPOLOGYTYPE";
import {Action} from "../../../commons/Action";
import {BaseDataTablesPage} from "../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {MvtnController} from "../MvtnController";
import {RETURNSTATUS} from "../../../swagger/RETURNSTATUS";
import {GenericSearchRequest} from "../../../swagger/GenericSearchRequest";
import {MvtnRequestApi} from "../../../swagger/MvtnRequestApi";
import {MvtnRequestListResponse} from "../../../swagger/MvtnRequestListResponse";
import {MvtnRequestDTO} from "../../../swagger/MvtnRequestDTO";
import {MVTNREQUESTSTATUS} from "../../../swagger/MVTNREQUESTSTATUS";
import "rxjs/add/operator/toPromise";
import {MVTNTYPE} from "../../../swagger/MVTNTYPE";
import {EventsManager, IEventSubscription} from "../../EventsManager";
import {MvtnEventProcessor} from "../MvtnEventProcessor";

@Component({
    moduleId: module.id,
    selector: 'VtnReqListPage',
    templateUrl: '../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html',
    providers: [MvtnController, MvtnRequestApi]
})
export class VtnReqListPage extends BaseDataTablesPage<MvtnRequestDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {

    data: any;
    public eventSubscription: IEventSubscription;

    constructor(public router: Router,
                public eventsManager: EventsManager,
                public mvtnController: MvtnController,
                public mvtnApi: MvtnRequestApi,
                baseServices: PageServices,
                elementRef: ElementRef) {
        super(baseServices, elementRef);
        //This definition may be read from Page parameter in the future.
        this.data = {
            topologyId: '',
            topologyType: TOPOLOGYTYPE.VIRTUAL_REQUEST
        };

        this.setI18NKey('network_vis.virtual_topo_req.list');

        let topActions = [];

        if (!this.p('phy_topo:manage')) { //if not MAY
            topActions.push(this.createAction('@create_topology_request', () => {
                this.logger.debug('Add new topology clicked');
                this.createVirtualTopologyRequest();
            }));
        }

        this.setActions(topActions);

        this.setRowActions([
            this.createAction('@view_topology', (itm: MvtnRequestDTO) => {
                this.viewTopologyReq(itm);
            }),
            this.createAction('@edit_topology', (itm: MvtnRequestDTO) => {
                this.editTopologyReq(itm);
            }),
            // this.createAction('@delete_topology', (itm: MvtnRequestDTO)=> {
            //     this.logger.debug('Deactivate topology ' + itm.mvtnName + ' action clicked');
            //     this.deleteTopology(itm);
            // }),
            this.createAction('@action_menu', [
                this.createAction('@create_approve', (itm: MvtnRequestDTO) => {
                    this.toggleTopologyReq(itm, true);
                }),
                this.createAction('@create_deny', (itm: MvtnRequestDTO) => {
                    this.toggleTopologyReq(itm, false);
                }),
                this.createAction('@delete_topology', (itm: MvtnRequestDTO) => {
                    this.deleteTopologyReq(itm);
                }),
            ])
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
                // {title: '<input type="checkbox" class="group-checkable icheck">', width: '3%', type:'html', name:'id'},
                {
                    title: this.ft('mvtnStatus'),
                    width: '5%',
                    orderable: true,
                    type: 'string',
                    name: 'status',
                    className: 'dt-center'
                },
                {title: this.ft('username'), width: '10%', orderable: true, type: 'string', name: 'username'},
                {title: this.ft('name'), width: '15%', orderable: true, type: 'string', name: 'mvtnName'},
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
                [5, "asc"]
            ], // set first column as a default sort by asc
            searching: true //disable searching since API is not supporting it.
        };
    }

    makeDataTableRequest(requestOptions: any, data: any, callback: (data: any) => void) {
        let request: any;

        request = this.baseServices.apiHelper.genRequest({
            options: requestOptions
        });

        this.mvtnApi
            .mvtnRequestSearchPOST(<GenericSearchRequest>request)
            .toPromise()
            .then(
                (res) => {
                    executeCallback(<MvtnRequestListResponse>res);
                },
                (error: any) => {
                    executeCallback(<MvtnRequestListResponse>JSON.parse(error._body));
                }
            );

        this.logger.debug("Request:", request);

        let executeCallback = (response: MvtnRequestListResponse) => {
            let dataTableData = [];

            if (this.baseServices.uiHelper.processResponse(response)) {

                this.currentList = response.data.list;

                response.data.list.forEach((itm: MvtnRequestDTO, idx) => {
                    dataTableData.push(
                        [
                            // '<input type="checkbox" value="' + itm.id + '" class="group-checkable icheck">',
                            this.renderIcon("MVTNREQUESTSTATUS", itm.status),
                            //this.renderRowStatusActions(idx, MVTNSTATUS,'mvtnStatus'),
                            itm.username || "",
                            itm.mvtnName || "",
                            itm.mvtnType == MVTNTYPE.STATIC ? '<i class="fa fa-male" title="STATIC" aria-hidden="true"></i>' : '<i class="fa fa-rocket" title="DYNAMIC" aria-hidden="true"></i>',
                            this.renderDateTime(itm.creationDate),
                            this.renderDateTime(itm.lastUpdateDate),
                            this.renderRowActions(idx, true, (action: Action, idx: number, data: MvtnRequestDTO) => {
                                //add row actions only if user is MAY (edit, approve, deny, delete)
                                if (this.p('phy_topo:manage') && ( action.title == this.t("actions.create_approve.title") || action.title == this.t("actions.edit_topology.title") || action.title == this.t("actions.create_deny.title") || action.title == this.t("actions.delete_topology.title") )) {
                                    for (let i in action.states) {
                                        if (data.status == MVTNREQUESTSTATUS[action.states[i]])
                                            return true;
                                    }
                                }

                                if (is.existy(action.states) && is.not.empty(action.states)) {
                                    for (let i in action.states) {
                                        if (data.status == MVTNREQUESTSTATUS[action.states[i]])
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
        }
    }

    createVirtualTopologyRequest() {
        this.mvtnController.createVirtualTopologyRequest();
    }

    viewTopologyReq(itm: MvtnRequestDTO) {
        this.mvtnController.viewTopologyReq(itm);
    }

    editTopologyReq(itm: MvtnRequestDTO) {
        this.mvtnController.editTopologyReq(itm);
    }

    deleteTopologyReq(itm: MvtnRequestDTO) {
        this.mvtnController.deleteTopologyReq(itm, (res) => {
            if (res.status == RETURNSTATUS.SUCCESS) this.reload();
        });
    }

    toggleTopologyReq(itm: MvtnRequestDTO, isActivate: boolean) {
        this.mvtnController.toggleTopologyReq(itm, isActivate, (res) => {
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
