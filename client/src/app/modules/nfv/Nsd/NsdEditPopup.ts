/**
 * Created by omeroz on 4/5/2017.
 */

import {
    Component,
    OnInit,
    AfterViewInit,
    OnDestroy,
    OnChanges,
    ElementRef,
    ViewChild
} from "@angular/core";
import {PageServices} from "../../PageServices";
import {BasePopupEditPage} from "../../../commons/BasePopupEditPage/BasePopupEditPage";
import {DIALOG_TYPES} from "../../UIHelper";
import {MODAL_SIZE} from "../../ModalComponent";
import {NetServiceDescDTO} from "../../../swagger/NetServiceDescDTO";
import {NFVApi} from "../../../swagger/NFVApi";
import {NetServiceDescRequest} from "../../../swagger/NetServiceDescRequest";
import {JsonCodeMirrorManager} from "../../../commons/CodeMirror/JsonCodeMirrorManager";

@Component({
    moduleId: module.id,
    selector: 'NsdEditPopup',
    templateUrl: './NsdEditPopup.html',
    providers: [NFVApi, JsonCodeMirrorManager],
})
export class NsdEditPopup extends BasePopupEditPage<NetServiceDescDTO> implements OnInit, AfterViewInit, OnChanges, OnDestroy {

    @ViewChild('editor') editor:any;

    constructor(public nfvApi: NFVApi,
                public codeMirror: JsonCodeMirrorManager,
                baseServices: PageServices,
                elementRef: ElementRef) {
        super(baseServices, elementRef);

        this.modalSize = MODAL_SIZE.LARGE;
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
            this.data = this.baseServices.apiHelper.genDTO({
                name : "",
                enabled: true,
                rawData : "{}"
            });
        } else {
            this.setFormActions([
                this.createAction('dialogs.actions.ok', () => {
                    this.close();
                })
            ]);
            codeMirror.config.readOnly = true;//disable code edit in view mode.
        }

        codeMirror.registerDataCallbacks(() => this.data.rawData, (newValue) => this.data.rawData = newValue);
        codeMirror.loadCodeData();
    }

    // ngOnInit() {
    //     super.ngOnInit();
    // }
    //
    // ngOnChanges(e) {
    //     super.ngOnChanges(e);
    // }
    //

    ngAfterViewInit() {
        if (super.ngAfterViewInit()) {

            //INFO: This section required to properly initialize CodeMirror component
            $('a[data-toggle="tab"]',this.$container).on('shown.bs.tab', (e) => {
                let target = $(e.target).attr("href"); // activated tab
                if (target == "#rawData") {
                    this.editor.instance.refresh();
                }
            });
            return true;
        }
        return false;
    }

    ngOnDestroy() {
        $('a[data-toggle="tab"]',this.$container).off('shown.bs.tab');

        super.ngOnDestroy();
    }


    fileChange(e) {
        let file = e.target.files[0];
        if (is.existy(file)) {
            let reader = new FileReader();
            reader.onload = () => {
                try {
                    JSON.parse(reader.result);
                    this.data.rawData = reader.result;
                    this.codeMirror.loadCodeData();
                } catch (e) {
                    this.baseServices.uiHelper.notify(this.baseServices.i18n.t('common.messages.file_type_error'), DIALOG_TYPES.WARNING);
                }
            };
            reader.readAsText(file);
        }
    }

    save() {
        let form: any = $('form', this.elementRef.nativeElement)[0];
        if (!form.checkValidity()) {
            this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
            return;
        }

        if ($("ul.nav-tabs li.active",this.$container).data('tabname') == 'rawDataTab' && !this.codeMirror.saveCodeData()) return;

        let request = <NetServiceDescRequest>this.baseServices.apiHelper.genRequest({
            data: <NetServiceDescDTO> this.baseServices.apiHelper.genDTO(this.data)
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

