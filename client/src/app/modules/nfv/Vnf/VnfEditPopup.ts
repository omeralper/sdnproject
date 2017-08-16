/**
 * Created by omeroz on 4/6/2017.
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
import {BasePopupEditPage} from "../../../commons/BasePopupEditPage/BasePopupEditPage";
import {DIALOG_TYPES} from "../../UIHelper";
import {MODAL_SIZE} from "../../ModalComponent";
import {NFVApi} from "../../../swagger/NFVApi";
import {VirtualNetFunctionDTO} from "../../../swagger/VirtualNetFunctionDTO";
import {VirtualNetFunctionRequest} from "../../../swagger/VirtualNetFunctionRequest";

@Component({
    moduleId: module.id,
    selector: 'VnfEditPopup',
    templateUrl: './VnfEditPopup.html',
    providers: [NFVApi],
})
export class VnfEditPopup extends BasePopupEditPage<VirtualNetFunctionDTO> implements OnInit, AfterViewInit, OnChanges, OnDestroy {

    constructor(public nfvApi: NFVApi,
                baseServices: PageServices,
                elementRef: ElementRef) {
        super(baseServices, elementRef);

        this.modalSize = MODAL_SIZE.NORMAL;
        this.setI18NKey('network_function_virtualization.virtual_network_function.edit');


	    if (this.isNewItem) {
		    this.setFormActions([
		        this.createAction('dialogs.actions.save', () => {
		            this.save();
		        }),
		        this.createAction('dialogs.actions.cancel', () => {
		            this.close();
		        })
		    ]);
	    }else {
		    this.setFormActions([
			    this.createAction('dialogs.actions.ok', () => {
				    this.close();
			    })
		    ]);
	    }
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

    fileChange(e){
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.onload = () => {
            this.data.rawData = reader.result;
        };
        reader.readAsText(file);
    }


    save() {
        let form: any = $('form', this.elementRef.nativeElement)[0];
        if (!form.checkValidity()) {
            this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
            return;
        }

        let request = <VirtualNetFunctionRequest>this.baseServices.apiHelper.genRequest({
            data: <VirtualNetFunctionDTO> this.data
        });

        this.nfvApi
            .vnfSavePOST(request)
            .subscribe(
                (res) => {
                    if (this.baseServices.uiHelper.processResponse(res,
                            this.t(this.data.id ? 'messages.save_success' : 'messages.create_success', {dto: this.data}))) {

                        this.close(true, res.data);
                    }
                },
                (error: any) => {
                    this.baseServices.uiHelper.processResponse(error._body);
                }
            );
    }
}

