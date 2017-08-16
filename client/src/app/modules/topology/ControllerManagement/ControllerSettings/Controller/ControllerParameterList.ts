/**
 * Created by omeroz on 2/27/2017.
 */
import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef} from "@angular/core";
import {Headers} from "@angular/http";
import {BaseDataTablesPage} from "../../../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {PageServices} from "../../../../PageServices";
import {ConfigApi} from "../../../../../swagger/ConfigApi";
import {ModuleNodeConfigListRequest} from "../../../../../swagger/ModuleNodeConfigListRequest";
import {NODETYPE} from "../../../../../swagger/NODETYPE";
import {ModuleNodeConfigListResponse} from "../../../../../swagger/ModuleNodeConfigListResponse";
import {ModuleNodeConfigDTO} from "../../../../../swagger/ModuleNodeConfigDTO";
import {ControllerNodeDTO} from "../../../../../swagger/ControllerNodeDTO";
import {SystemParametersEditPopup} from "../../../../settings/System/Parameters/SystemParametersEditPopup/SystemParametersEditPopup";
import {ControllerSettingsService, ClusterViewParam} from "../ControllerSettingsService";
import {Subscription} from "rxjs";

@Component({
    moduleId: module.id,
    selector: 'ControllerParameterList',
    templateUrl: '../../../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html',
})
export class ControllerParameterList extends BaseDataTablesPage<ModuleNodeConfigDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {
    controller: ControllerNodeDTO = <ControllerNodeDTO>{};
    subscription: Subscription;

    constructor(public configApi: ConfigApi,
                public controllerSettingsService: ControllerSettingsService,
                baseServices: PageServices,
                elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('network_vis.controller_management.controllerSettings.parameters');
        this.isServerSide = false;
        this.setRowActions([
            this.createAction('@edit', (itm: ControllerNodeDTO) => {
                this.baseServices.sharedService.showModal(SystemParametersEditPopup, itm, (result) => {
                    if (result.isSuccess) this.reload();
                });
            })
        ]);
    }

    ngOnChanges(e) {
        super.ngOnChanges(e);
    }

    ngOnInit() {
        super.ngOnInit();
        this.subscription = this.controllerSettingsService.viewSelected.subscribe((param: ClusterViewParam) => {
            this.controller = param.data;
            this.reload();
        });
    }

    ngAfterViewInit() {
        if (super.ngAfterViewInit()) {
            return true;
        }
        return false;
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        super.ngOnDestroy();
    }

    getDataTableOptions() {
        return {
            columns: [
                {
                    title: this.ft('componentName'),
                    width: '35%',
                    orderable: true,
                    type: 'string',
                    name: 'configDefinition.componentName'
                },
                {
                    title: this.ft('configKey'),
                    width: '25%',
                    orderable: true,
                    type: 'string',
                    name: 'configDefinition.configKey'
                },
                {title: this.ft('nodeVersion'), width: '10%', orderable: true, type: 'string', name: 'nodeVersion'},
                {title: this.ft('configValue'), width: '20%', orderable: true, type: 'string', name: 'configValue'},
                {
                    title: $.t('common.fields.actions'),
                    width: '10%',
                    orderable: false,
                    type: 'html',
                    defaultContent: '',
                    className: 'action_cell'
                }
            ],
            "order": [
                [1, "asc"]
            ],
            searching: true,
            // "argExtraFields": ["configId"]
        };
    }

    makeDataTableRequest(requestOptions: any, data: any, callback: (data: any) => void) {
        // if (!this.controller.id || this.controller.id == this.lastControllerID)  return;
        // this.lastControllerID = this.controller.id;
        if (this.isFirstTime) {
            return super.makeDataTableRequest(requestOptions, data, callback);
        }

        let request = this.baseServices.apiHelper.genRequest({
            data: this.baseServices.apiHelper.genDTO({
                nodeType: NODETYPE.CONTROLLER,
                nodeId: this.controller.id,
                nodeVersion: "1.1.0"
            }, true)
        });

        let header = new Headers();
        header.append('X-NODE_ID', this.controller.nmNodeId);

        this.configApi
            .configModuleNodeConfigListPOST(<ModuleNodeConfigListRequest>request, true, header)
            .subscribe(
                (res) => {
                    executeCallback(<ModuleNodeConfigListResponse>res);
                }
            );

        let executeCallback = (response: ModuleNodeConfigListResponse) => {
            let dataTableData = [];
            if (this.baseServices.uiHelper.processResponse(response)) {
                this.currentList = response.data.list;
                response.data.list.forEach((itm: ModuleNodeConfigDTO, idx) => {
                    dataTableData.push(
                        [
                            this.renderText(itm.configDefinition.componentName, '-', 80),
                            this.renderText(itm.configDefinition.configKey),
                            itm.version,
                            this.renderText(itm.configValue, '-', 35),
                            this.renderRowActions(idx, true),
                        ]
                    );
                });
            } else {
                this.logger.error('Parameter List DataTable Error:', data);
            }
            callback({
                draw: data.draw,
                recordsTotal: response.data ? response.data.totalItems : [],
                recordsFiltered: response.data ? response.data.totalItems : [],
                data: dataTableData
            });
        };
    }
}
