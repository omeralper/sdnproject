/**
 * Created by omeroz on 6/1/2017.
 */

import {AfterViewInit, Component, ElementRef, OnChanges, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {PageServices} from "../../PageServices";
import {BasePopupEditPage} from "../../../commons/BasePopupEditPage/BasePopupEditPage";
import {MODAL_SIZE} from "../../ModalComponent";
import {NFVApi} from "../../../swagger/NFVApi";
import {NetServiceRecordDTO} from "../../../swagger/NetServiceRecordDTO";
import {DIALOG_TYPES} from "../../UIHelper";
import {NetServiceRecordRequest} from "../../../swagger/NetServiceRecordRequest";
import {JsonCodeMirrorManager} from "../../../commons/CodeMirror/JsonCodeMirrorManager";

@Component({
    moduleId: module.id,
    selector: 'NsrEditPopup',
    templateUrl: './NsrEditPopup.html',
    providers: [NFVApi,JsonCodeMirrorManager],
})
export class NsrEditPopup extends BasePopupEditPage<NetServiceRecordDTO> implements OnInit, AfterViewInit, OnChanges, OnDestroy {

    @ViewChild('editor') editor:any;

    constructor(public nfvApi: NFVApi,
                public codeMirror: JsonCodeMirrorManager,
                baseServices: PageServices,
                elementRef: ElementRef) {
        super(baseServices, elementRef);

        this.modalSize = MODAL_SIZE.LARGE;
        this.setI18NKey('network_function_virtualization.network_service_record.edit');

        this.setFormActions([
            this.createAction('dialogs.actions.save', () => {
                this.save();
            }),
            this.createAction('dialogs.actions.cancel', () => {
                this.close();
            })
        ]);

        if (this.isNewItem) {
            this.baseServices.uiHelper.notify(this.t('messages.create_not_allowed'), DIALOG_TYPES.WARNING);
            this.close();
            return;
        }

        codeMirror.registerDataCallbacks(() => this.data.rawData.toString(), (newValue) => this.data.rawData = newValue.toString());
        codeMirror.loadCodeData();

    }


    // ngOnInit() {
    //     super.ngOnInit();
    // }
    //
    // ngOnChanges(e) {
    //     super.ngOnChanges(e);
    // }

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
        let form: any = $('form', this.$container)[0];
        if (!form.checkValidity()) {
            this.baseServices.uiHelper.notify(this.baseServices.i18n.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
            return;
        }

        if ($("ul.nav-tabs li.active",this.$container).data('tabname') == 'rawDataTab' && !this.codeMirror.saveCodeData()) return;

        let request = <NetServiceRecordRequest>this.baseServices.apiHelper.genRequest({
            data: <NetServiceRecordDTO> this.baseServices.apiHelper.genDTO(this.data)
        });

        //INFO : New item creation is not allowed on this screen.
        // if (this.isNewItem) {
        //
        //     this.nfvApi
        //         .nsrSavePOST(request)
        //         .subscribe(
        //             (res) => {
        //                 if (this.baseServices.uiHelper.processResponse(res,
        //                         this.t('messages.create_success', {dto: this.data}))) {
        //                     this.close(true, res.data);
        //                 }
        //             },
        //             (error: any) => {
        //                 this.baseServices.uiHelper.processResponse(error._body);
        //             }
        //         );
        //
        // } else {

        this.nfvApi
            .nsrUpdatePOST(request)
            .subscribe(
                (res) => {
                    if (this.baseServices.uiHelper.processResponse(res,
                            this.t('messages.save_success', {dto: this.data}))) {
                        this.close(true, res.data);
                    }
                },
                (error: any) => {
                    this.baseServices.uiHelper.processResponse(error._body);
                }
            );

        // }
    }

}

