/**
 * Created by yildirayme on 24.08.2016.
 */
import {Injectable} from "@angular/core";
import {MvtnDTO} from "../../swagger/MvtnDTO";
import {MVTNSTATUS} from "../../swagger/MVTNSTATUS";
import {TopologyInfoDTO} from "../../swagger/TopologyInfoDTO";
import {Router} from "@angular/router";
import {MvtnApi} from "../../swagger/MvtnApi";
import {UI_TOPOLOGY_ACTION} from "../../commons/enums/UI_TOPOLOGY_ACTION";
import {DeleteOptions} from "../../swagger/DeleteOptions";
import {GenericDeleteRequest} from "../../swagger/GenericDeleteRequest";
import {PageServices} from "../PageServices";
import {Action} from "../../commons/Action";
import {MvtnChangeStatusRequest} from "../../swagger/MvtnChangeStatusRequest";
import {MvtnStatusDTO} from "../../swagger/MvtnStatusDTO";
import {TOPOLOGYTYPE} from "../../swagger/TOPOLOGYTYPE";
import {MvtnChangeStatusResponse} from "../../swagger/MvtnChangeStatusResponse";
import {TopologyResponse} from "../../swagger/TopologyResponse";
import {MvtnRequestDTO} from "../../swagger/MvtnRequestDTO";
import {MvtnRequestApi} from "../../swagger/MvtnRequestApi";
import {MvtnRequestDeleteRequest} from "../../swagger/MvtnRequestDeleteRequest";
import {MVTNREQUESTSTATUS} from "../../swagger/MVTNREQUESTSTATUS";
import {MvtnEditChangeRequest} from "../../swagger/MvtnEditChangeRequest";
import 'rxjs/add/operator/toPromise';
import {VtnReqConfirmationPopup} from "./VtnReqConfirmationPopup";
import {SharedService} from "../SharedService";

/**
 * General Utility functions.
 */
@Injectable()
export class MvtnController {


    constructor(public router: Router, public mvtnApi: MvtnApi, public mvtnReqApi: MvtnRequestApi, public baseServices: PageServices, public sharedService: SharedService) {

    }

    createTopology() {
        this.router.navigate(['/topology/view'],  {queryParams: {action: UI_TOPOLOGY_ACTION.NEW_VIRTUAL_TOPOLOGY} });
    }

    createVirtualTopologyRequest(){
        this.router.navigate(['/topology/view'], {queryParams: {action: UI_TOPOLOGY_ACTION.NEW_VIRTUAL_TOPOLOGY_REQUEST}});
    }

    viewTopology(itm: MvtnDTO) {
        this.router.navigate(['/topology/view'], {//route parameters are essential in determining the route, whereas query parameters are optional.
            queryParams: {
                action: UI_TOPOLOGY_ACTION.VIEW_TOPOLOGY,
                data: JSON.stringify(this.convert2TopologyInfoDTO(itm))
            }
        });
    }

    viewTopologyReq(itm: MvtnRequestDTO){
        this.router.navigate(['/topology/view'], {
            queryParams: {
                action: UI_TOPOLOGY_ACTION.VIEW_TOPOLOGY,
                data: JSON.stringify(this.convertVirtualReq2TopologyInfoDTO(itm))
            }
        });
    }

    editTopology(itm: MvtnDTO) {
        this.router.navigate(['/topology/view'], {
            queryParams: {
                action: UI_TOPOLOGY_ACTION.EDIT_TOPOLOGY,
                data: JSON.stringify(this.convert2TopologyInfoDTO(itm))
            }
        });
    }

    editTopologyReq(itm: MvtnRequestDTO) {
        this.router.navigate(['/topology/view'], {
            queryParams: {
                action: UI_TOPOLOGY_ACTION.EDIT_TOPOLOGY,
                data: JSON.stringify(this.convertVirtualReq2TopologyInfoDTO(itm))
            }
        });
    }

    deleteTopology(itm: MvtnDTO,callback:(res:TopologyResponse)=>void) {
        this.baseServices.uiHelper.confirm(this.t('messages.delete_confirm', {dto: itm}), (selected: Action)=> {
            if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
                let request = this.baseServices.apiHelper.genRequest({
                    options: <DeleteOptions> {
                        id: itm.id,
                        isReturnModel: false
                    }
                });

                this.mvtnApi
                    .virtualDeletePOST(<GenericDeleteRequest>request).toPromise()
                    .then(
                        (res) => {
                            if (this.baseServices.uiHelper.processResponse(res, this.t('messages.delete_success', {dto: itm}))) {
                                callback(res);
                            }
                        },
                        (error: any) => {
                            this.baseServices.uiHelper.processResponse(error._body); //JSON parsing is handled in the function now
                        }
                    );
            }
        })
    }

    deleteTopologyReq(itm: MvtnRequestDTO,callback:(res:TopologyResponse)=>void) { //MvtnRequestDTO might change thats why this is a separate method
        this.baseServices.uiHelper.confirm($.t('network_vis.virtual_topo_req.list.messages.delete_confirm', {dto: itm}), (selected: Action)=> {
            if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
                let request = this.baseServices.apiHelper.genRequest({
                    data: {
                        deleteIdList: [itm.id]
                    }
                });

                this.mvtnReqApi
                    .mvtnRequestDeletePOST(<MvtnRequestDeleteRequest>request).toPromise()
                    .then(
                        (res) => {
                            if (this.baseServices.uiHelper.processResponse(res, $.t('network_vis.virtual_topo_req.list.messages.delete_success', {dto: itm}))) {
                                callback(res);
                            }
                        },
                        (error: any) => {
                            this.baseServices.uiHelper.processResponse(error._body); //JSON parsing is handled in the function now
                        }
                    );
            }
        })
    }

    approveTopology(itm: MvtnDTO, isApproved: boolean,callback:(res:MvtnChangeStatusResponse)=>void) {
        this.baseServices.uiHelper.confirm(this.t(isApproved ? 'messages.approve_confirm' : 'messages.deny_confirm', {dto: itm}), (selected: Action)=> {
            if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
                this.changeTopologyStatus(
                    itm,
                    isApproved ? MVTNSTATUS.ACTIVE : MVTNSTATUS.REJECTED,
                    isApproved ? 'messages.approve_success' : 'messages.deny_success',
                    callback
                );
            }
        })
    }

    toggleTopology(itm: MvtnDTO, isActivate: boolean,callback:(res:MvtnChangeStatusResponse)=>void) {
        this.baseServices.uiHelper.confirm(this.t(isActivate ? 'messages.activate_confirm' : 'messages.deactivate_confirm', {dto: itm}), (selected: Action)=> {
            if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
                this.changeTopologyStatus(
                    itm,
                    isActivate ? MVTNSTATUS.ACTIVE : MVTNSTATUS.SUSPENDED,
                    isActivate ? 'messages.activate_success' : 'messages.deactivate_success',
                    callback
                );
            }
        })
    }

    toggleTopologyReq(itm: MvtnRequestDTO, isApproved: boolean,callback:(res:MvtnChangeStatusResponse)=>void) {
        if(isApproved){
            this.sharedService.showModal(VtnReqConfirmationPopup, {isApproved: isApproved, item: itm},
                (result) => {
                    if (result.isSuccess) {
                        this.changeTopologyReqStatus(
                            result.data, //result.item maybe
                            isApproved ? MVTNREQUESTSTATUS.ACCEPTED : ( (result.data.status == MVTNREQUESTSTATUS.EDITED) ? MVTNREQUESTSTATUS.EDIT_REJECTED : MVTNREQUESTSTATUS.CREATE_REJECTED),
                            isApproved ? 'messages.approve_success' : 'messages.deny_success',
                            callback
                        );
                    }
                });
        }else{
            this.baseServices.uiHelper.confirm(this.reqt('messages.deny_confirm', {dto: itm}), (selected: Action)=> {
                if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
                    this.changeTopologyReqStatus(
                        itm, //result.item maybe
                        ( (itm.status == MVTNREQUESTSTATUS.EDITED) ? MVTNREQUESTSTATUS.EDIT_REJECTED : MVTNREQUESTSTATUS.CREATE_REJECTED),
                        'messages.deny_success',
                        callback
                    );
                }
            })
        }

    }

    changeTopologyStatus(itm: MvtnDTO, status: MVTNSTATUS, messageKey: string,callback:(res:MvtnChangeStatusResponse)=>void) {
        let request = <MvtnChangeStatusRequest>this.baseServices.apiHelper.genRequest({
            data: <MvtnStatusDTO>this.baseServices.apiHelper.genDTO({
                id: itm.id,
                mvtnStatus: status
            })
        });

        this.mvtnApi
            .virtualChangeStatusPOST(<MvtnChangeStatusRequest>request).toPromise()
            .then(
                (res) => {
                    if (this.baseServices.uiHelper.processResponse(res, this.t(messageKey, {dto: itm}))) {
                        callback(res);
                    }
                },
                (error: any) => {
                    this.baseServices.uiHelper.processResponse(error._body); //JSON parsing is handled in the function now
                }
            );
    }

    changeTopologyReqStatus(itm: MvtnRequestDTO, status: MVTNREQUESTSTATUS, messageKey: string,callback:(res:MvtnChangeStatusResponse)=>void) {
        let request = <MvtnEditChangeRequest>this.baseServices.apiHelper.genRequest({
            data: <MvtnStatusDTO>this.baseServices.apiHelper.genDTO({
                id: itm.id,
                status: status,
                mvtnType: itm.mvtnType
            })
        });

        this.mvtnReqApi
            .mvtnRequestChangeEditStatusPOST(<MvtnEditChangeRequest>request).toPromise()
            .then(
                (res) => {
                    if (this.baseServices.uiHelper.processResponse(res)) {  // MLAT-3821 if we display the message here, it will be duplicated with the websocket one.
                        callback(res);
                    }
                },
                (error: any) => {
                    this.baseServices.uiHelper.processResponse(error._body); //JSON parsing is handled in the function now
                }
            );
    }

    convert2TopologyInfoDTO(itm: MvtnDTO): TopologyInfoDTO {
        return <TopologyInfoDTO>this.baseServices.apiHelper.genDTO({
            id: itm.id,
            //maxDepth: 0,
            //activeSince: moment().toDate(),
            //stats: null,
            //alarms: null,
            name: itm.name,
            //elementCountPerDepth: null,
            //weight: 0,
            type: TOPOLOGYTYPE.VIRTUAL,
            status: <any>itm.mvtnStatus//this.mapStatus(itm.mvtnStatus)
        });
    }

    convertVirtualReq2TopologyInfoDTO(itm: MvtnRequestDTO): TopologyInfoDTO {
        return <TopologyInfoDTO>this.baseServices.apiHelper.genDTO({
            id: itm.id,
            name: itm.mvtnName,
            type: TOPOLOGYTYPE.VIRTUAL_REQUEST,
            status: <any>itm.status
        });
    }

    // public mapStatus(mvtnStatus: MVTNSTATUS): TOPOLOGYSTATUS {
    //     switch (mvtnStatus) {
    //         case MVTNSTATUS.ACTIVE:
    //             return TOPOLOGYSTATUS.ACTIVE;
    //         case MVTNSTATUS.SUSPENDED:
    //             return TOPOLOGYSTATUS.SUSPENDED;
    //         case MVTNSTATUS.SUBMITTED:
    //             return TOPOLOGYSTATUS.SUBMITTED;
    //         case MVTNSTATUS.REJECTED:
    //             return TOPOLOGYSTATUS.REJECTED;
    //     }
    //     return TOPOLOGYSTATUS.DOWN;
    // }
    public t(key:string, options?:any):string {
        return this.baseServices.i18n.t('network_vis.virtual_topo.list.'+key, options);
    }

    public reqt(key:string, options?:any):string {
        return this.baseServices.i18n.t('network_vis.virtual_topo_req.list.'+key, options);
    }
}
