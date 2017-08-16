import {Subject} from "rxjs/Subject";
import {Injectable} from "@angular/core";
import {LinkDTO} from "../swagger/LinkDTO";
import {WanDomainDTO} from "../swagger/WanDomainDTO";
/**
 * Created by ekinca on 12.04.2016.
 */
export enum MODAL_CMD{
    SHOW,
    HIDE
}

@Injectable()
export class SharedService  {
    modalEvents:Subject<any> = new Subject();
    infoTooltipEvent:Subject<any> = new Subject();
    footerTooltipEvent: Subject<any> = new Subject();

    private topologyRefresh: Subject<boolean> = new Subject<boolean>();
	private topologyGet: Subject<string> = new Subject<string>();
    private alternativeProactivePathChangeSource: Subject<Array<LinkDTO>> = new Subject<Array<LinkDTO>>();
    private domainChange: Subject<WanDomainDTO> = new Subject<WanDomainDTO>();

    topologyRefresh$ = this.topologyRefresh.asObservable();
    alternativeProactivePathChange$ = this.alternativeProactivePathChangeSource.asObservable();
    domainChange$ = this.domainChange.asObservable();

    //public logoutEvent: Subject<boolean> = new Subject<boolean>();
    //logoutEvent$ = this.logoutEvent.asObservable();

    public popupData:ModalDTO;
    public hasModalShown=false;

    announceTopologyRefresh(flag: boolean = true) {
        this.topologyRefresh.next(flag);
    }

    announceTopologyGet(domainId:string){
	    this.topologyGet.next(domainId);
    }

    announceAlternativeProactivePathChange(eventData: Array<LinkDTO>){
        this.alternativeProactivePathChangeSource.next(eventData);
    }

    annonceDomainChange(domain: WanDomainDTO){
        this.domainChange.next(domain);
    }

    // announceLogout(flag: boolean = true) {
    //     this.logoutEvent.next(flag);
    // }

    constructor() {

    }

    getData() {
        return this.popupData.data;
    }

    showModal(component:any, data?:any, callback?:ModalCallback)  {

        var innerFunc = ()=> {
            this.popupData = <ModalDTO>{cmd: MODAL_CMD.SHOW, component: component, data: data, callback: callback};
            this.modalEvents.next(this.popupData);
            this.hasModalShown = true;
        }

        if (this.hasModalShown) {
            this.hideModal();
            setTimeout(innerFunc,600);
        } else {
            innerFunc();
        }
    }

    hideModal(isSuccess:boolean=false, data?:any) {
        if (this.hasModalShown) {
            this.modalEvents.next({cmd: MODAL_CMD.HIDE});
            if (this.popupData.callback) {
                //give some time for the closing animation before calling the parent
                setTimeout(()=> {
                    this.popupData.callback(<ModalResult>{isSuccess: isSuccess, data: data});
                }, 500);
            }
            this.hasModalShown = false;
        }
    }
}

export interface ModalResult {
    isSuccess:boolean;
    data?:any;
}

export interface ModalCallback {
    (result:ModalResult):void;
}

interface ModalDTO {
    cmd:MODAL_CMD;
    component?:any;
    data?:any;
    callback?:ModalCallback;
}
