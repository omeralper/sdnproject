/**
 * Created by omeroz on 4/5/2017.
 */

import {
    Component,
    OnInit,
    AfterViewInit,
    OnDestroy,
    OnChanges,
    ElementRef
} from "@angular/core";
import {PageServices} from "../../PageServices";
import {BasePopupEditPage} from "../../../commons/BasePopupEditPage/BasePopupEditPage";
import {DIALOG_TYPES} from "../../UIHelper";
import {MODAL_SIZE} from "../../ModalComponent";
import {NetServiceDescDTO} from "../../../swagger/NetServiceDescDTO";
import {NFVApi} from "../../../swagger/NFVApi";
import {NetServiceDescRequest} from "../../../swagger/NetServiceDescRequest";
@Component({
    moduleId: module.id,
    selector: 'NsdEditPopup',
    templateUrl: './NsdEditPopup.html',
    providers: [NFVApi],
})
export class NsdEditPopup extends BasePopupEditPage<NetServiceDescDTO> implements OnInit, AfterViewInit, OnChanges, OnDestroy {

    constructor(public nfvApi: NFVApi,
                baseServices: PageServices,
                elementRef: ElementRef) {
        super(baseServices, elementRef);

        this.modalSize = MODAL_SIZE.NORMAL;
        this.setI18NKey('network_function_virtualization.network_service_decriptor.edit');

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
        if (super.ngAfterViewInit()) {
            return true;
        }
        return false;
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }


    fileChange(e) {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.onload = () => {
            try {
                JSON.parse(reader.result);
                this.data.rawData = reader.result;
            } catch (e) {
                this.baseServices.uiHelper.notify(this.t('messages.file_type_error'), DIALOG_TYPES.WARNING);
                return;
            }
        };
        reader.readAsText(file);
    }

    save() {
        let form: any = $('form', this.elementRef.nativeElement)[0];
        if (!form.checkValidity()) {
            this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
            return;
        }

        let request = <NetServiceDescRequest>this.baseServices.apiHelper.genRequest({
            data: <NetServiceDescDTO> this.data
        });

        this.nfvApi
            .nsdSavePOST(request)
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

