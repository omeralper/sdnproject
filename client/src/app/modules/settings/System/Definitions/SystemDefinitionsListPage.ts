/**
 * Created by yildirayme on 02.02.2017.
 */
import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef} from "@angular/core";
import {ConfigApi} from "../../../../swagger/ConfigApi";
import {ConfigDefinitionDTO} from "../../../../swagger/ConfigDefinitionDTO";
import {BaseDataTablesPage} from "../../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {PageServices} from "../../../PageServices";
import {SystemDefinitionsEditPopup} from "./SystemDefinitionsEditPopup/SystemDefinitionsEditPopup";
import {Action} from "../../../../commons/Action";
import {DeleteOptions} from "../../../../swagger/DeleteOptions";
import {GenericDeleteRequest} from "../../../../swagger/GenericDeleteRequest";
import {ConfigDefinitionListResponse} from "../../../../swagger/ConfigDefinitionListResponse";
import {ListOptions} from "../../../../swagger/ListOptions";
import {GenericListRequest} from "../../../../swagger/GenericListRequest";


@Component({ moduleId: module.id,
    selector: 'SystemDefinitionsListPage',
    templateUrl: '../../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html',
    providers: [ConfigApi],
})
export class SystemDefinitionsListPage extends BaseDataTablesPage<ConfigDefinitionDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {

    constructor(public configApi: ConfigApi,
                baseServices: PageServices,
                elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.isServerSide = false;
        this.setI18NKey('settings.system.definitions.list');

        this.setActions([
            this.createAction('@create', () => {
                this.logger.debug('Create new action clicked')
                this.baseServices.sharedService.showModal(SystemDefinitionsEditPopup, {},
                    (result) => {
                        if (result.isSuccess) this.reload();
                    });
            })
        ]);

        this.setRowActions([
            this.createAction('@edit', (itm: ConfigDefinitionDTO) => {
                this.logger.debug('Edit ' + itm.componentName + ' action clicked');
                this.baseServices.sharedService.showModal(SystemDefinitionsEditPopup, itm, (result) => {
                    if (result.isSuccess) this.reload();
                });
            }),
            this.createAction('@delete', (itm: ConfigDefinitionDTO) => {
                this.logger.debug('Delete ' + itm.componentName + ' action clicked');
                this.baseServices.uiHelper.confirm(this.t('messages.delete_confirm', {dto: itm}), (selected: Action) => {
                    if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
                        //this.baseServices.uiHelper.alert("OK we will delete");

                        let request = this.baseServices.apiHelper.genRequest({
                            options: <DeleteOptions> {
                                id: itm.id,
                                isReturnModel: false
                            }
                        });

                        this.configApi
                            .configConfigDefinitionDeletePOST(<GenericDeleteRequest>request)
                            .subscribe(
                                (res) => {
                                    if (this.baseServices.uiHelper.processResponse(res, this.t('messages.delete_success', {dto: itm}))) {
                                        this.reload();
                                    }
                                },
                                (error: any) => {
                                    this.baseServices.uiHelper.processResponse(error._body); //JSON parsing is handled in the function now
                                }
                            );
                    }
                })
            })
        ]);
    }

    ngOnChanges(e) {
        super.ngOnChanges(e);
    }

    ngOnInit() {
        super.ngOnInit();
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

    getDataTableOptions() {
        return {
            columns: [
                {title: this.ft('nodeType'), width: '6%', orderable: true, type: 'string', name: 'nodeType'},
                {title: this.ft('componentName'), width: '25%', orderable: true, type: 'string', name: 'componentName'},
                {title: this.ft('configKey'), width: '11%', orderable: true, type: 'string', name: 'configKey'},
                {
                    title: this.ft('valueType_short'),
                    tooltip: this.ft('valueType'),
                    width: '10%',
                    orderable: true,
                    type: 'string',
                    name: 'valueType'
                },
                {
                    title: this.ft('defaultValue_short'),
                    tooltip: this.ft('defaultValue'),
                    width: '10%',
                    orderable: true,
                    type: 'number',
                    name: 'defaultValue'
                },
                {title: this.ft('description'), width: '30%', orderable: true, type: 'string', name: 'description'},
                {
                    title: $.t('common.fields.actions'),
                    width: '8%',
                    orderable: false,
                    type: 'html',
                    defaultContent: '',
                    className: 'action_cell'
                }
            ],
            "order": [
                [0, "asc"]
            ], // set first column as a default sort by asc
            searching: true,
            "argExtraFields": ["definitionId"]
        };
    }


    makeDataTableRequest(requestOptions: any, data: any, callback: (data: any) => void) {
        let request;
        // if (requestOptions.queryOptions) {
        //     //use Search function
        //     request = this.baseServices.apiHelper.genRequest({
        //         options: <SearchOptions>requestOptions
        //     });
        //
        //     this.configApi
        //         .serverSearchPOST(<GenericSearchRequest>request)
        //         .subscribe(
        //             (res) => {
        //                 executeCallback(<ConfigDefinitionListResponse>res);
        //             }
        //         );
        // } else {

        //use list function
        request = this.baseServices.apiHelper.genRequest({
            options: <ListOptions>requestOptions
        });

        if (request.queryOptions) delete request.queryOptions;

        this.configApi
            .configConfigDefinitionListPOST(<GenericListRequest>request)
            .subscribe(
                (res) => {
                    executeCallback(<ConfigDefinitionListResponse>res);
                }
            );
        // }

        this.logger.debug("Request:", request);

        let executeCallback = (response: ConfigDefinitionListResponse) => {
            let dataTableData = [];

            if (this.baseServices.uiHelper.processResponse(response)) {

                this.currentList = response.data.list;

                response.data.list.forEach((itm: ConfigDefinitionDTO, idx) => {
                    dataTableData.push(
                        [
                            this.renderIcon("NODETYPE", itm.nodeType),
                            this.renderText(itm.componentName, '-', 60),
                            this.renderText(itm.configKey),
                            this.renderIcon("CONFIGVALUETYPE", itm.valueType),
                            this.renderText(itm.defaultValue),
                            this.renderText(itm.description),
                            this.renderRowActions(idx, true)
                        ]
                    );
                });

            } else {
                this.logger.error("DataTable Error", data);
            }

            callback({
                draw: data.draw,
                recordsTotal: response.data ? response.data.totalItems : dataTableData.length,
                recordsFiltered: response.data ? response.data.totalItems : dataTableData.length,
                data: dataTableData
            });
        }
    }

}
