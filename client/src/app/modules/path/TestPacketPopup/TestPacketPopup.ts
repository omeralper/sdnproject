/**
 * Created by barangu on 28.02.2017.
 */

import {Component, ElementRef, OnInit, AfterViewInit, OnDestroy} from "@angular/core";
import {PageServices} from "../../PageServices";
import {Action} from "../../../commons/Action";
import {MODAL_SIZE} from "../../ModalComponent";
import {PathsApi} from "../../../swagger/PathsApi";
import {PathDTO} from "../../../swagger/PathDTO";
import {SharedService} from "../../SharedService";
import {DIALOG_TYPES} from "../../UIHelper";
import {BasePopupPage} from "../../../commons/BasePopupPage/BasePopupPage";
import {PathRequest} from "../../../swagger/PathRequest";
import {IEventSubscription, EventsManager, EVENT_SYSTEM} from "../../EventsManager";


// Root Component
@Component({
    moduleId: module.id,
    selector: 'TestPacketPopup',
    templateUrl: './TestPacketPopup.html',
    providers: [PathsApi]
})
export class TestPacketPopup extends BasePopupPage<PathDTO> implements OnInit, AfterViewInit, OnDestroy {

    public testResult = "";
    public testTime = 0;
    public testCount = 0;
    public packCount = 0;
    public srcId;
    public dstId;
    public eventSubscription: IEventSubscription;
    public req;
    startTestDisabledFlag = false;

    constructor(public pathsApi: PathsApi, baseServices: PageServices, elementRef: ElementRef, public sharedService: SharedService, public eventsManager: EventsManager,) {
        super(baseServices, elementRef);
        this.modalSize = MODAL_SIZE.NORMAL;

        //populate i18n fields but exclude title, because we are going to define it here
        this.setI18NKey('paths.test');
    }

    ngOnChanges(e) {
        super.ngOnChanges(e);
    }

    ngOnInit() {
        super.ngOnInit();
        this.srcId = this.data.srcHostId? this.data.srcHostId.substring(0, 17): "";
        this.dstId = this.data.dstHostId? this.data.dstHostId.substring(0, 17): "";
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

    startTest() {
        let $all_links = $("a",this.$container.parentsUntil(".modal-content"));

        $all_links.attr("disabled","disabled");

        this.packCount = 0;
        this.eventSubscription = this.eventsManager.on<any>(EVENT_SYSTEM.GENERIC_EVENT, (event) => {
            this.baseServices.logger.debug("TEST EVENT RECEIVED", event.eventData);
            if(event.eventData.detail && event.eventData.detail.includes(this.req.data.id)){

                let pack = JSON.parse(event.eventData.detail.substring(0, event.eventData.detail.indexOf("__")));

                this.packCount++;

                if(pack.type === "test") {
                    this.testResult += this.t('labels.pack') + "#" + this.packCount + ": [" + this.t('labels.pack_delay') + ": " + pack.delay + "ms]\n";
                }
                else{
                    this.testResult += "Test#" + this.testCount + ":" + " [" + this.t('labels.test_pack') + ": " + pack.packet_count + ", " + this.t('labels.test_delay') + ": " + pack.delay + "ms]\n\n";
                    this.eventSubscription.unsubscribe();
                    this.startTestDisabledFlag = false;
                    $all_links.removeAttr("disabled");
                }
            }
        });

        this.data.validatePath = true;
        this.testTime = this.data.validatePathPacketInterval * this.data.validatePathPacketNo;

        if (this.testTime <= 120) {
            let request = this.baseServices.apiHelper.genRequest({
                data: <PathDTO> this.data
            });

            this.req = request;

            this.startTestDisabledFlag = true;
            this.pathsApi
                .pathValidatePOST(<PathRequest>request, false)
                .timeout((this.testTime) * 2000)
                .subscribe(
                    (res) => {
                        this.testCount++;
                        if (this.baseServices.uiHelper.processResponse(res)) {
                            //debugger;
                        }
                    },
                    (error: any) => {
                        this.startTestDisabledFlag = false;
                        this.eventSubscription.unsubscribe();
                        this.baseServices.uiHelper.processResponse(error._body); //JSON parsing is handled in the function now
                        $all_links.removeAttr("disabled");
                    }
                );
        }
        else {
            $all_links.removeAttr("disabled");
            this.baseServices.uiHelper.notify(this.t('messages.time_error'), DIALOG_TYPES.WARNING);
            return;
        }
    }
}
