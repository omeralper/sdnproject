import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef} from "@angular/core";
import {BaseDataTablesPage} from "../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {VersionInfo} from "../../../swagger/VersionInfo";
import {PrognetVersionListApi} from "../../../swagger/PrognetVersionListApi";
import {PageServices} from "../../PageServices";
import {ApiHelper} from "../../ApiHelper";
import {VersionListResponse} from "../../../swagger/VersionListResponse";
import {VersionListRequest} from "../../../swagger/VersionListRequest";

@Component({ moduleId: module.id,
    selector: 'VersionListPage',
    //templateUrl: '../../pagehtmls/versionslist.html',
    templateUrl: '../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html',
    providers: [],

})

export class VersionListPageCode extends BaseDataTablesPage<VersionInfo> implements OnInit, OnDestroy, OnChanges, AfterViewInit {

    constructor(public apiHelper: ApiHelper, public prognetVersionListApi: PrognetVersionListApi, baseServices: PageServices, elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.isServerSide = false;
        this.setI18NKey('components.versions.list');
    }

    ngOnChanges(e) {
        super.ngOnChanges(e);
        this.logger.info('something changed', e);
    }

    ngOnInit() {
        super.ngOnInit();
    }

    ngAfterViewInit() {
        if (super.ngAfterViewInit()) {
            //Code here
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
                //{title: '<input type="checkbox" class="group-checkable icheck">', type:'html', name:'id'},
                {title: this.ft('name'), width: '25%', orderable: true, type: 'string', name: 'name'},
                {
                    title: this.ft('version'),
                    width: '35%',
                    orderable: true,
                    className: 'dt-center',
                    type: 'string',
                    name: 'version'
                },
                {
                    title: this.ft('buildDate'),
                    width: '25%',
                    orderable: true,
                    className: 'dt-center',
                    type: 'date',
                    name: 'buildDate'
                },
                {
                    title: this.ft('startUpDate'),
                    width: '25%',
                    orderable: true,
                    className: 'dt-center',
                    type: 'date',
                    name: 'startUpDate'
                }
            ],
            order: [
                [0, "asc"]
            ],
            paging: false,
            searching: false,
        };
    }

    makeDataTableRequest(requestOptions: any, data: any, callback: (data: any) => void) {
        //debugger;
        let request: VersionListRequest = this.baseServices.apiHelper.genRequest(<VersionListRequest>{
            id: "versions-list"
        });

        this.prognetVersionListApi
            .versionListPOST(<VersionListRequest>request)
            .subscribe(
                (res) => {
                    executeCallback(<VersionListResponse>res);
                }
            );

        this.logger.debug("Request:", request);

        let executeCallback = (response: VersionListResponse) => {
            let dataTableData = [];

            if (this.baseServices.uiHelper.processResponse(response)) {
                this.currentList = response.data.list;

                this.currentList.push(<VersionInfo>{
                    name: 'Milat AYB',
                    version: this.apiHelper.getVersion(),
                    buildDate: this.apiHelper.getBuildDate(),
                    startUpDate: this.apiHelper.getStartUpDate()
                });

                this.currentList.forEach((itm: VersionInfo, idx) => {
                    dataTableData.push(
                        [
                            itm.name || '',
                            itm.version || '',
                            moment(itm.buildDate.toString()).toDate().toLocaleString(this.baseServices.i18n.getCurrentLanguage()),
                            is.existy(itm.startUpDate) ? moment(itm.startUpDate).toDate().toLocaleString(this.baseServices.i18n.getCurrentLanguage()) : '-'
                        ]
                    );
                });
            } else {
                this.logger.error("Version List DateTable Error", data);
            }

            callback({
                draw: data.draw,
                recordsTotal: this.currentList.length,
                recordsFiltered: this.currentList.length,
                data: dataTableData
            });
        }
    }
}
