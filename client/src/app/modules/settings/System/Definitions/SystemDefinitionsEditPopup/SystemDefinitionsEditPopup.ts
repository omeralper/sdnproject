/**
 * Created by yildirayme on 02.02.2017.
 */
import {Component, OnInit, AfterViewInit, OnDestroy, OnChanges, ElementRef, ChangeDetectorRef} from "@angular/core";
import {ConfigApi} from "../../../../../swagger/ConfigApi";
import {ConfigDefinitionDTO} from "../../../../../swagger/ConfigDefinitionDTO";
import {BasePopupEditPage} from "../../../../../commons/BasePopupEditPage/BasePopupEditPage";
import {PageServices} from "../../../../PageServices";
import {MODAL_SIZE} from "../../../../ModalComponent";
import {NODETYPE} from "../../../../../swagger/NODETYPE";
import {EnumHelper} from "../../../../../commons/EnumHelper";
import {CONFIGVALUETYPE} from "../../../../../swagger/CONFIGVALUETYPE";
import {DIALOG_TYPES} from "../../../../UIHelper";
import {ConfigDefinitionRequest} from "../../../../../swagger/ConfigDefinitionRequest";

@Component({ moduleId: module.id,
    selector: 'SystemDefinitionsEditPopup',
    templateUrl: './SystemDefinitionsEditPopup.html',
    providers: [ConfigApi],
})
export class SystemDefinitionsEditPopup extends BasePopupEditPage<ConfigDefinitionDTO> implements OnInit, AfterViewInit,OnChanges, OnDestroy {

    //INFO: These are used by HTML template
    public NODE_TYPES = EnumHelper.getNames(NODETYPE);
    public VALUE_TYPES = EnumHelper.getNames(CONFIGVALUETYPE);
    public BOOLEANS = ["true", "false"];
    public historyBag: any = {};

    constructor(public changeDetector: ChangeDetectorRef,
                public configApi: ConfigApi,
                baseServices: PageServices,
                elementRef: ElementRef) {
        super(baseServices, elementRef);
        // if (this.isNewItem)
        //     this.data.address = {};

        this.modalSize = MODAL_SIZE.NORMAL;
        this.setI18NKey('settings.system.definitions.edit');

        this.logger.debug('Data received:', this.data);

        this.setFormActions([
            this.createAction('dialogs.actions.save', () => {
                this.logger.debug('Save clicked');
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

    // //INFO: called from HTML template
    // setNodeTypeValue(e) {
    //     if (event.type == 'change') {
    //         this.data.nodeType = <NODETYPE>e;
    //     }
    //
    //     // if (event.type == 'click' && !this.data.ldapUseSSL) {
    //     //     this.data.port = 636;
    //     // }
    // }

    //INFO: called from HTML template
    valueTypeChange(e) {
        if (event.type == 'change') {

            //save previous value
            this.historyBag[this.data.valueType] = this.data.defaultValue;

            switch (e) { //this.data.valueType
                case CONFIGVALUETYPE.BOOLEAN :
                    this.data.defaultValue = this.historyBag[e] || "true";
                    break;
                case CONFIGVALUETYPE.BYTE :
                case CONFIGVALUETYPE.INTEGER :
                case CONFIGVALUETYPE.LONG :
                    this.data.defaultValue = this.historyBag[e] || "0";
                    break;
                case CONFIGVALUETYPE.FLOAT :
                case CONFIGVALUETYPE.DOUBLE :
                    this.data.defaultValue = this.historyBag[e] || "0.0";
                    break;
                case CONFIGVALUETYPE.STRING :
                default:
                    this.data.defaultValue = this.historyBag[e] || "";
            }
        }

        // if (event.type == 'click' && !this.data.ldapUseSSL) {
        //     this.data.port = 636;
        // }
    }

    // getDefaultValueType() {
    //     if (this.data.valueType == CONFIGVALUETYPE.BOOLEAN) {
    //         return "checkbox";
    //     } else if (this.data.valueType == CONFIGVALUETYPE.STRING) {
    //         return "text";
    //     }
    //     return "number";
    // }

    //INFO: Used by HTML template, do not remove
    isValueTypeText() {
        return this.data.valueType == CONFIGVALUETYPE.STRING;
    }

    //INFO: Used by HTML template, do not remove
    isValueTypeNumber() {
        return !(this.data.valueType == CONFIGVALUETYPE.STRING || this.data.valueType == CONFIGVALUETYPE.BOOLEAN);
    }

    //INFO: Used by HTML template, do not remove
    isValueTypeBoolean() {
        return this.data.valueType == CONFIGVALUETYPE.BOOLEAN;
    }

    save() {
        //debugger;
        let form: any = $('form', this.elementRef.nativeElement)[0];
        if (!form.checkValidity()) {
            this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
            return;
        }
        this.logger.debug('Save new data');
        this.submitted = true;

        this.data = this.baseServices.apiHelper.genDTO(this.data);
        if (this.data.id) this.data.definitionId = parseInt(this.data.id, 10);

        let request: ConfigDefinitionRequest = <ConfigDefinitionRequest>this.baseServices.apiHelper.genRequest({
            data: <ConfigDefinitionDTO> this.data
        });

        this.configApi
            .configConfigDefinitionSavePOST(request)
            .subscribe(
                (res) => {
                    if (this.baseServices.uiHelper.processResponse(res,
                            this.t((this.data.id || this.data.definitionId) ? 'messages.save_success' : 'messages.create_success', {dto: this.data}))) {
                        this.close(true, res.data);
                    }
                },
                (error: any) => {
                    this.baseServices.uiHelper.processResponse(error._body); //JSON parsing is handled in the function now
                }
            );
    }
}
