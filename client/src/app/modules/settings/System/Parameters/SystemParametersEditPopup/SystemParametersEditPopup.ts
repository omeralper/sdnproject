/**
 * Created by yildirayme on 02.02.2017.
 */
import {Component, OnInit, AfterViewInit, OnDestroy, OnChanges, ElementRef, ChangeDetectorRef} from "@angular/core";
import {ConfigApi} from "../../../../../swagger/ConfigApi";
import {BasePopupEditPage} from "../../../../../commons/BasePopupEditPage/BasePopupEditPage";
import {PageServices} from "../../../../PageServices";
import {MODAL_SIZE} from "../../../../ModalComponent";
import {ModuleNodeConfigDTO} from "../../../../../swagger/ModuleNodeConfigDTO";
import {ModuleNodesDTO} from "../../../../../swagger/ModuleNodesDTO";
import {VersionNodesDTO} from "../../../../../swagger/VersionNodesDTO";
import {GenericListRequest} from "../../../../../swagger/GenericListRequest";
import {CONFIGVALUETYPE} from "../../../../../swagger/CONFIGVALUETYPE";
import {DIALOG_TYPES} from "../../../../UIHelper";
import {ModuleNodeConfigRequest} from "../../../../../swagger/ModuleNodeConfigRequest";

@Component({
    moduleId: module.id,
    selector: 'SystemParametersEditPopup',
    templateUrl: './SystemParametersEditPopup.html',
    providers: [ConfigApi],
})
export class SystemParametersEditPopup extends BasePopupEditPage<ModuleNodeConfigDTO> implements OnInit, AfterViewInit,OnChanges, OnDestroy {
    public static ALL_KEYWORD = "{ALL}";

    //INFO: Used by HTML template, do not remove
    public _selectedNodeType: ModuleNodesDTO;
    public get selectedNodeType(): ModuleNodesDTO {
        return this._selectedNodeType;
    }

    public set selectedNodeType(nodeType: ModuleNodesDTO) {
        this._selectedNodeType = nodeType;
        if (is.not.empty(this._selectedNodeType.moduleVersions)) {
            let found = this._selectedNodeType.moduleVersions.filter((itm) => {
                return itm.nodeVersion == this.data.nodeVersion;
            });

            if (is.not.empty(found)) {
                this.selectedVersion = found[0];
            } else {
                this.selectedVersion = this._selectedNodeType.moduleVersions[0];
            }
            this.changeDetector.detectChanges();
        }
    }

    //INFO: Used by HTML template, do not remove
    public _selectedVersion: VersionNodesDTO;
    public get selectedVersion(): VersionNodesDTO {
        return this._selectedVersion;
    }

    public set selectedVersion(version: VersionNodesDTO) {
        this._selectedVersion = version;
        this.data.nodeVersion = version.nodeVersion;
        if (is.not.empty(this._selectedVersion.nodes)) {
            let found = this._selectedVersion.nodes.filter((itm) => {
                return itm == this.data.nodeId;
            });

            if (is.not.empty(found)) {
                this.selectedNode = found[0];
            } else {
                this.selectedNode = this._selectedVersion.nodes[0];
            }
            this.changeDetector.detectChanges();
        }
    }

    public get versionList(): Array<VersionNodesDTO> {
        return this.selectedNodeType ?
            //INFO: Remove the filter section if selecting "ALL" is allowed
            this.selectedNodeType.moduleVersions//.filter(itm=>itm.nodeVersion!=SystemParametersEditPopup.ALL_KEYWORD)
            : [];
    }

    //INFO: Used by HTML template, do not remove
    public get selectedNode(): string {
        return this.data.nodeId;
    }

    public set selectedNode(node: string) {
        this.data.nodeId = node;
        this.changeDetector.detectChanges();
    }

    public get nodeList(): Array<string> {
        return this.selectedVersion ?
            //INFO: Remove the filter section if selecting "ALL" is allowed
            this.selectedVersion.nodes//.filter(itm=>itm!=SystemParametersEditPopup.ALL_KEYWORD)
            : [];
    }

    //INFO: Used by HTML template, do not remove
    public BOOLEANS = ["true", "false"];

    constructor(public changeDetector: ChangeDetectorRef,
                public configApi: ConfigApi,
                baseServices: PageServices,
                elementRef: ElementRef) {
        super(baseServices, elementRef);

        this.modalSize = MODAL_SIZE.LARGE;
        this.setI18NKey('settings.system.parameters.edit');

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
            this.populateCombos();
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
        this.logger.debug('Save new data');
        this.submitted = true;

        this.data = this.baseServices.apiHelper.genDTO(this.data);
        if (this.data.id) this.data.configId = parseInt(this.data.id, 10);

        //Remove definitions if {ALL} selected
        if (this.data.nodeVersion == SystemParametersEditPopup.ALL_KEYWORD) delete this.data.nodeVersion;
        if (this.data.nodeId == SystemParametersEditPopup.ALL_KEYWORD) delete this.data.nodeId;

        let request = <ModuleNodeConfigRequest>this.baseServices.apiHelper.genRequest({
            data: <ModuleNodeConfigDTO> this.data
        });

        this.configApi
            .configModuleNodeConfigSavePOST(request)
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

    public populateCombos() {
        let request = this.baseServices.apiHelper.genFullListRequest();

        this.configApi
            .configModuleNodesListPOST(<GenericListRequest>request)
            .subscribe(
                (response) => {
                    if (this.baseServices.uiHelper.processResponse(response)) {
                        let comboData = response.data.list;
                        if (is.not.empty(comboData)) {

                            let found = comboData.filter((itm) => {
                                return itm.nodeType == this.data.configDefinition.nodeType;
                            });

                            if (is.not.empty(found)) {
                                this.selectedNodeType = found[0];
                            }
                            this.changeDetector.detectChanges();
                        }
                    }
                },
                (error) => {
                    this.baseServices.uiHelper.processResponse(error);
                    this.close(false);
                }
            );
    }

    //INFO: Used by HTML template, do not remove
    isValueTypeText() {
        return this.data.configDefinition.valueType == CONFIGVALUETYPE.STRING;
    }

    //INFO: Used by HTML template, do not remove
    isValueTypeNumber() {
        return !(this.data.configDefinition.valueType == CONFIGVALUETYPE.STRING || this.data.configDefinition.valueType == CONFIGVALUETYPE.BOOLEAN);
    }

    //INFO: Used by HTML template, do not remove
    isValueTypeBoolean() {
        return this.data.configDefinition.valueType == CONFIGVALUETYPE.BOOLEAN;
    }

    public _allTitle;
    public get allTitle() {
        return this._allTitle || (this._allTitle = this.t("labels.ALL"));
    }

    //INFO: Used by HTML template, do not remove
    public tt(value) {
        return value.replace(SystemParametersEditPopup.ALL_KEYWORD, this.allTitle);
    }
}
