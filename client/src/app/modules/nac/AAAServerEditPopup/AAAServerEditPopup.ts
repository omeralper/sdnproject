/**
 * Created by omeroz on 06.09.2016.
 */
import {
    Component,
    OnInit,
    AfterViewInit,
    OnDestroy,
    OnChanges,
    ElementRef,
    ChangeDetectorRef
} from "@angular/core";
import {PageServices} from "../../PageServices";
import {BasePopupEditPage} from "../../../commons/BasePopupEditPage/BasePopupEditPage";
import {DIALOG_TYPES} from "../../UIHelper";
import {MODAL_SIZE} from "../../ModalComponent";
import {AAAServerApi} from "../../../swagger/AAAServerApi";
import {AAAServerRequest} from "../../../swagger/AAAServerRequest";
import {AAAServerDTO} from "../../../swagger/AAAServerDTO";
import {EnumHelper} from "../../../commons/EnumHelper";
import {AAAPROTOCOL} from "../../../swagger/AAAPROTOCOL";

@Component({ moduleId: module.id,
    selector: 'AAAServerEditPopup',
    templateUrl: './AAAServerEditPopup.html',
    providers: [AAAServerApi],
})
export class AAAServerEditPopup extends BasePopupEditPage<AAAServerDTO> implements OnInit, AfterViewInit,OnChanges, OnDestroy {

    public protocols = EnumHelper.getNames(AAAPROTOCOL);
    public ldap = AAAPROTOCOL.LDAP.toString();
    public radius = AAAPROTOCOL.RADIUS.toString();
    public dbUse: string;

    constructor(public changeDetector: ChangeDetectorRef,
                public aaaServerApi: AAAServerApi,
                baseServices: PageServices,
                elementRef: ElementRef) {
        super(baseServices, elementRef);
        if (this.isNewItem)
            this.data.address = {};


        this.modalSize = MODAL_SIZE.NORMAL;
        this.setI18NKey('nac_management.server.edit');

        this.logger.debug('Data received:', this.data);

        this.setFormActions([
            this.createAction('dialogs.actions.save', () => {
                this.logger.debug('Save End User clicked');
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
        if(this.isNewItem || this.data.usingDB){
            this.dbUse = this.t('fields.usingDB.true');
        } else{
            this.dbUse = this.t('fields.usingDB.false');
        }
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

    setPortValue(e) {
        if (e.type == 'change' && e == AAAPROTOCOL.LDAP) {
            this.data.port = 389;
        }

        if (e.type == 'click' && !this.data.ldapUseSSL) {
            this.data.port = 636;
        }
    }

    save() {
        let form: any = $('form', this.elementRef.nativeElement)[0];
        if (!form.checkValidity()) {
            this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
            return;
        }
        this.logger.debug('Save new data');
        this.submitted = true;
        this.data.version = this.data.version || 1;
        this.data.revision = this.data.revision || 0;
        this.data.timestamp = this.data.timestamp || new Date();
        this.data.address.ipv4 = this.data.address.ipv4.replace('_', '');
        if (!this.data.id)
            this.data.created = this.data.created || new Date();

        if (this.data.protocol === AAAPROTOCOL.LDAP && this.data.ldapUseSSL === undefined)
            this.data.ldapUseSSL = false;

        if((this.data.protocol === AAAPROTOCOL.RADIUS) && (this.dbUse === this.t('fields.usingDB.true'))){
            this.data.usingDB = true;
        } else if(this.data.protocol === AAAPROTOCOL.RADIUS){
            this.data.usingDB = false;
        } else{
            delete this.data.usingDB;
        }

        let request: AAAServerRequest = <AAAServerRequest>this.baseServices.apiHelper.genRequest({
            data: <AAAServerDTO> this.data
        });

        this.aaaServerApi
            .serverSavePOST(request)
            .subscribe(
                (res) => {
                    if (this.baseServices.uiHelper.processResponse(res,
                            this.t(this.data.id ? 'messages.save_success' : 'messages.create_success', {dto: this.data}))) {

                        this.close(true, res.data);
                    }
                },
                (error: any) => {
                    this.baseServices.uiHelper.processResponse(error._body); //JSON parsing is handled in the function now
                }
            );
    }
}

