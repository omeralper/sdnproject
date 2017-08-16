/**
 * Created by barangu on 8/2/2017.
 */

import {
    Component,
    OnInit,
    AfterViewInit,
    OnDestroy,
    OnChanges,
    ElementRef,
} from "@angular/core";
import {PageServices} from "../../PageServices";
import {MODAL_SIZE} from "../../ModalComponent";
import {NFVApi} from "../../../swagger/NFVApi";
import {VirtualNetFunctionInstanceDTO} from "../../../swagger/VirtualNetFunctionInstanceDTO";
import {BasePopupPage} from "../../../commons/BasePopupPage/BasePopupPage";

@Component({
    moduleId: module.id,
    selector: 'VnfInstanceViewPopup',
    templateUrl: './VnfInstanceViewPopup.html',
    providers: [NFVApi],
})
export class VnfInstanceViewPopup extends BasePopupPage<VirtualNetFunctionInstanceDTO> implements OnInit, AfterViewInit, OnChanges, OnDestroy {

    constructor(public nfvApi: NFVApi,
                baseServices: PageServices,
                elementRef: ElementRef) {
        super(baseServices, elementRef);

        this.modalSize = MODAL_SIZE.NORMAL;
        this.setI18NKey('network_function_virtualization.vnf_instance.view');

        this.setFormActions([
            this.createAction('dialogs.actions.ok', () => {
                this.close();
            })
        ]);
    }

    ngOnInit() {
        super.ngOnInit();
    }

    ngOnChanges(e) {
        super.ngOnChanges(e);
    }

    ngAfterViewInit() {
        return super.ngAfterViewInit();
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }
}

