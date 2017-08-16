/**
 * Created by barangu on 7/22/2017.
 */
import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef} from "@angular/core";
import {BasePopupEditPage} from "../../../commons/BasePopupEditPage/BasePopupEditPage";
import {PageServices} from "../../PageServices";
import {DIALOG_TYPES} from "../../UIHelper";
import {NFVApi} from "../../../swagger/NFVApi";
import {VnfActionRequest} from "../../../swagger/VnfActionRequest";
import {VirtualNetFunctionInstanceDTO} from "../../../swagger/VirtualNetFunctionInstanceDTO";

@Component({ moduleId: module.id,
    selector: 'VnfInstanceFailoverPopup',
    templateUrl: './VnfInstanceFailoverPopup.html'
})

export class VnfInstanceFailoverPopup extends BasePopupEditPage<VirtualNetFunctionInstanceDTO> implements OnInit, AfterViewInit, OnDestroy {

    constructor(public nfvApi: NFVApi, baseServices: PageServices, elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('network_function_virtualization.vnf_instance.edit');

        this.setFormActions([
            this.createAction('dialogs.actions.save', () => {
                this.save();
            }),
            this.createAction('dialogs.actions.cancel', () => {
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

    save() {
        let form: any = $('form', this.elementRef.nativeElement)[0];
        if (!form.checkValidity()) {
            this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
            return;
        }
        this.submitted = true;
        this.data.revision++;
        this.data.timestamp = this.baseServices.utils.genTimestamp();

        let request = this.baseServices.apiHelper.genRequest({
            vnfrId: this.data.vnfServerId,
            computeHostIp: this.data.failOverDescription
        });

        this.nfvApi
            .vnfRegisterVnfFailOverPOST(<VnfActionRequest>request)
            .subscribe(
                (res) => {
                    if (this.baseServices.uiHelper.processResponse(res, this.t('messages.create_success', {dto: this.data}))) {
                        this.close(true);
                    }
                },
                (error: any) => {
                    this.baseServices.uiHelper.processResponse(error._body); //JSON parsing is handled in the function now
                }
            );
    }
}
