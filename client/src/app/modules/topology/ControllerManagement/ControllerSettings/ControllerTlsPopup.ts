/**
 * Created by barangu on 03.04.2017.
 */
import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef} from '@angular/core';
import {PageServices} from "../../../PageServices";
import {DIALOG_TYPES} from "../../../UIHelper";
import {BasePopupPage} from "../../../../commons/BasePopupPage/BasePopupPage";
import {PkiApi} from "../../../../swagger/PkiApi";
import {CertificateRequest} from "../../../../swagger/CertificateRequest";
import {CertificateRequestDTO} from "../../../../swagger/CertificateRequestDTO";
import {CERTIFICATETYPE} from "../../../../swagger/CERTIFICATETYPE";
declare var saveAs:any;

// Root Component
@Component({
  moduleId: module.id,
    selector: 'ControllerTlsPopup',
    templateUrl: './ControllerTlsPopup.html',
    providers: [PkiApi]
})
export class ControllerTlsPopup extends BasePopupPage<CertificateRequestDTO> implements OnInit, AfterViewInit, OnDestroy {

    constructor(public pkiApi: PkiApi, baseServices: PageServices, elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('network_vis.controller_management.controllerSettings.tls');

        this.setFormActions([
            this.createAction('dialogs.actions.ok', () => {
                this.logger.debug('OK clicked');
                this.save();
            }),
            this.createAction('dialogs.actions.cancel', () => {
                this.logger.debug('Cancel clicked');
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
        if (super.ngAfterViewInit()) {

            return true;
        }
        return false;
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

        this.data.nodeType = CERTIFICATETYPE.CONTROLLER;

        let request = this.baseServices.apiHelper.genRequest({
            data: <CertificateRequestDTO> this.data
        });

        this.pkiApi
            .pkiNodeCertCreatePOST(<CertificateRequest>request)
            .subscribe(
                (res) => {
                    if (this.baseServices.uiHelper.processResponse(res, $.t('common.messages.controller_certificate_download'))) {
                        let zipStr = window.atob(res.data.zipFile);
                        var byteNumbers = new Array(zipStr.length);
                        for (var i = 0; i < zipStr.length; i++) {
                            byteNumbers[i] = zipStr.charCodeAt(i);
                        }
                        let zipByt = new Uint8Array(byteNumbers);
                        var blob = new Blob([zipByt], {type: "application/zip"});
                        saveAs(blob, "controller_"+this.data.name+".zip");
                        this.close(true);
                    }
                },
                (error: any) => {
                    this.baseServices.uiHelper.processResponse(error._body);
                }
            );
    }
}
