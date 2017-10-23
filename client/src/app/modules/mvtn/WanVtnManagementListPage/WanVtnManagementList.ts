/**
 * Created by ekinca on 6.06.2017.
 */
import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef} from "@angular/core";
import {Router} from "@angular/router";
import {PageServices} from "../../PageServices";
import {BaseDataTablesPage} from "../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {MvtnDTO} from "../../../swagger/MvtnDTO";
import {QUERYOP} from "../../../swagger/QUERYOP";
import {CreateVirtualTopology, VTNPOPUPMODE} from "../../topology/pop-ups/CreateVirtualTopology";
import {WanMvtnInfoApi} from "../../../swagger/WanMvtnInfoApi";
import {WanMvtnInfoListResponse} from "../../../swagger/WanMvtnInfoListResponse";
import {GenericListRequest} from "../../../swagger/GenericListRequest";
import {LanMvtnInfoDTO} from "../../../swagger/LanMvtnInfoDTO";
import {WanMvtnInfoDTO} from "../../../swagger/WanMvtnInfoDTO";
import {Action} from "../../../commons/Action";
import {DeleteOptions} from "../../../swagger/DeleteOptions";
import {GenericDeleteRequest} from "../../../swagger/GenericDeleteRequest";

@Component({
    moduleId: module.id,
    selector: 'WanVtnList',
    templateUrl: '../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html'
})
export class WanVtnManagementList extends BaseDataTablesPage<WanMvtnInfoDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {

    data: any;
    private lanMvtnInfos: Array<LanMvtnInfoDTO>;

    constructor(public router: Router,
                baseServices: PageServices,
                elementRef: ElementRef,
                private wanMvtnApi: WanMvtnInfoApi) {
        super(baseServices, elementRef);

        this.setI18NKey('wan_vtn_management');

        this.setActions([
            this.createAction('@create_wan', () => {
                this.baseServices.sharedService.showModal(CreateVirtualTopology, {mode: VTNPOPUPMODE.WAN, lanMvtnInfos: this.lanMvtnInfos},(result)=>{
                    if (result.isSuccess) this.reload();
                });
            })
        ]);

        this.setRowActions([
            /*            this.createAction('@view_user', (itm:UserDTO)=> {
             this.logger.debug('View user '+itm.username+' action clicked');
             }),*/
            this.createAction('@edit_wan', (itm: WanMvtnInfoDTO)=> {
                this.baseServices.sharedService.showModal(CreateVirtualTopology, {data: itm, mode: VTNPOPUPMODE.WAN, lanMvtnInfos: this.lanMvtnInfos},(result)=>{
                    if (result.isSuccess) this.reload();
                });
            }),
            this.createAction('@delete_wan', (itm: WanMvtnInfoDTO)=> {

                this.baseServices.uiHelper.confirm(this.t('messages.delete_confirm', {dto: itm}), (selected:Action)=> {
                    if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
                        //this.baseServices.uiHelper.alert("OK we will delete");

                        let request = this.baseServices.apiHelper.genRequest({
                            options: <DeleteOptions> {
                                id: itm.id,
                                isReturnModel: false
                            }
                        });

                        this.wanMvtnApi
                            .wanMvtnDeletePOST(<GenericDeleteRequest>request)
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
                {
                    title: this.ft('name'),
                    width: '15%',
                    orderable: true,
                    type: 'string',
                    name: 'name',
                    className: 'dt-center',

                },
                {
                    title: this.ft('vlan_tag'),
                    width: '15%',
                    orderable: true,
                    type: 'string',
                    name: 'vlan_tag',
                    className: 'dt-center'
                },
                {
                    title: this.ft('people_count'),
                    width: '25%',
                    orderable: true,
                    type: 'string',
                    name: 'people_count',
                    className: 'dt-center'
                },
                {
                    title: this.ft('active_cluster'),
                    width: '25%',
                    orderable: true,
                    type: 'Date',
                    name: 'active_cluster',
                    className: 'dt-center'
                },
                {
                    title: $.t('common.fields.actions'),
                    width: '20%',
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

        this.wanMvtnApi
            .wanMvtnListPOST(<GenericListRequest>request)
            .subscribe(
                (res) => {
                    executeCallback(<WanMvtnInfoListResponse>res);
                },
                (error: any) => {
                    executeCallback(<WanMvtnInfoListResponse>JSON.parse(error._body));
                }
            );

        this.logger.debug("Request:", request);

        let executeCallback = (response: WanMvtnInfoListResponse) => {
            let dataTableData = [];

            if (this.baseServices.uiHelper.processResponse(response)) {

                this.currentList = response.data.list;
                this.lanMvtnInfos = (response.data as any).lanMvtnInfos;


                this.currentList.forEach((itm: WanMvtnInfoDTO, idx) => {
                    let lanMvtnInfos = [];
                    if(itm.lanMvtnInfos && itm.lanMvtnInfos.length > 0){
                        itm.lanMvtnInfos.forEach((v, i)=>{
                            lanMvtnInfos.push(v.domainName);
                        });
                    }

                    dataTableData.push(
                        [
                            //'<input type="checkbox" value="' + itm.id + '" class="group-checkable icheck">',
                            itm.name,
                            itm.topoInfo.vlanTag || "",
                            itm.topoInfo.maximumNumberOfUser || "",
                            lanMvtnInfos.join(","),
                            this.renderRowActions(idx,true)
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
        //executeCallback("yo");
    }

    createWan() {
        //this.mvtnController.createTopology();
    }

    viewTopology(itm: MvtnDTO) {
        //this.mvtnController.viewTopology(itm);
    }

    editTopology(itm: MvtnDTO) {
        //this.mvtnController.editTopology(itm);
    }

    deleteTopology(itm: MvtnDTO) {
        // this.mvtnController.deleteTopology(itm, (res) => {
        //     if (res.status == RETURNSTATUS.SUCCESS) this.reload();
        // });
    }

    approveTopology(itm: MvtnDTO, isApproved: boolean) {
        // this.mvtnController.approveTopology(itm, isApproved, (res) => {
        //     if (res.status == RETURNSTATUS.SUCCESS) this.reload();
        // });
    }

    toggleTopology(itm: MvtnDTO, isActivate: boolean) {
        // this.mvtnController.toggleTopology(itm, isActivate, (res) => {
        //     if (res.status == RETURNSTATUS.SUCCESS) this.reload();
        // });
    }
}

