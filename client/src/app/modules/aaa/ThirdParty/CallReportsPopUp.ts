/**
 * Created by ekinca on 17.05.2017.
 */

import {Component, ChangeDetectorRef, OnInit, AfterViewInit, OnDestroy, ElementRef} from "@angular/core";
import {PageServices} from "../../PageServices";
import {AppDTO} from "../../../swagger/AppDTO";
import {DocumentConverter} from "../../DocumentConverter";
import {BasePopupDataTablesPage} from "../../../commons/BasePopupDataTablesPage/BasePopupDataTablesPage";
import {MODAL_SIZE} from "../../ModalComponent";
import {MetricDefinition} from "../../../swagger/MetricDefinition";
import {TSDBApi} from "../../../swagger/TSDBApi";
import {TsdbQueryResponse} from "../../../swagger/TsdbQueryResponse";
import {TsdbQueryRequest} from "../../../swagger/TsdbQueryRequest";
import {UserDTO} from "../../../swagger/UserDTO";
import {TsdbDataSet} from "../../../swagger/TsdbDataSet";
import {TsdbTagValue} from "../../../swagger/TsdbTagValue";

export enum CALLREPORTSTYPE{
    APP,
    USER
}

@Component({
    moduleId: module.id,
    selector: 'RoleEditPopup',
    templateUrl: '../../../commons/BasePopupDataTablesPage/BasePopupDataTablesPage.html'
})
export class CallReportsPopUp extends BasePopupDataTablesPage<any, any> implements OnInit, AfterViewInit, OnDestroy {

    constructor(public changeDetector: ChangeDetectorRef,
                baseServices: PageServices,
                public dc: DocumentConverter, private tsdbApi: TSDBApi,
                elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('user_management.third_party.call_reports');
        this.isServerSide = false;
        this.setFormActions([
            this.createAction('dialogs.actions.save', () => {
                this.save();
            }),
            this.createAction('dialogs.actions.cancel', () => {
                this.close();
            })
        ]);
        this.modalSize = MODAL_SIZE.LARGE;
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

    getDataTableOptions(): any {
        return {
            columns: [
                {
                    title: this.ft('method'),
                    width: '34%',
                    orderable: true,
                    type: 'string',
                    name: 'method'
                },
                {
                    title: this.ft('allowed'),
                    width: '33%',
                    orderable: true,
                    type: 'number',
                    name: 'allowed',
                    className: 'dt-center',
                },
                {
                    title: this.ft('denied'),
                    width: '33%',
                    orderable: true,
                    type: 'number',
                    name: 'denied',
                    className: 'dt-center',
                },
            ],
            order: [
                [1, "asc"]
            ],
            searching: true,
            language: {
                "loadingRecords": this.t('messages.empty_table')
            }
        };
    }

    makeDataTableRequest(requestOptions: any, data: any, callback: (data: any) => void) {
        let beginTime = moment().subtract(1.5, 'months').valueOf();
        let endTime = new Date().getTime();

        let requestData: TsdbQueryRequest = this.baseServices.apiHelper.genRequest({
            "metrics": ["restcall.count"],
            "beginTime": beginTime,
            "endTime": endTime,
            "aggregator": "none",
            "tagValues": [
                {
                    tag: 'username',
                    val: this.data.type == CALLREPORTSTYPE.USER ? (this.data.data as UserDTO).username : "*"
                },
                {
                    tag: 'url',
                    val: '*'
                },
                {
                    tag: 'status',
                    val: '*'
                },
                {
                    tag: 'app',
                    val: this.data.type == CALLREPORTSTYPE.APP ? (this.data.data as AppDTO).id : "*"
                }
            ],
            "maxResult": "1000"
        });
        this.tsdbApi
            .tsdbQueryPOST(requestData)
            .subscribe(
                (res: TsdbQueryResponse) => {
                    executeCallback(res);
                }
            );

        let executeCallback = (response: TsdbQueryResponse) => {
            let dataTableData = [];
            let result = {
                draw: data.draw,
                recordsTotal: 0,
                recordsFiltered: 0,
                data: dataTableData
            };

            if (this.baseServices.uiHelper.processResponse(response)) {

                this.currentList = response.datasets;

                let obj = {};

                response.datasets.forEach((itm: TsdbDataSet, idx)=> {
                    let status = "";
                    let url = "";

                    for(let a = 0; a < itm.tagValues.length; ++a){
                        if(itm.tagValues[a].tag == "url"){
                            url = itm.tagValues[a].val;
                        }

                        if(itm.tagValues[a].tag == "status"){
                            status = itm.tagValues[a].val;
                        }
                    }

                    let sum = this.getValueSums(itm.values);

                    if(!obj[url]){
                        obj[url] = {}; // initialize
                    }

                    if(status == "SUCCESS"){
                        obj[url].successCount = sum;
                    }else{
                        obj[url].unsuccessfulCount = sum;
                    }

                });

                for(let key in obj){

                    dataTableData.push(
                        [
                            //'<input type="checkbox" value="' + itm.id + '" class="group-checkable icheck">',
                            key,
                            obj[key].successCount || 0,
                            obj[key].unsuccessfulCount || 0,
                        ]
                    );
                }

            } else {
                this.baseServices.logger.error("Edr DateTable Error", data);
            }

            callback(result);
        }

    }

    getValueSums(vals: Array<any>): number{
        let sum = 0;
        for(let i = 0; i < vals.length; ++i){
            if(vals[i] > 0){
                sum += vals[i];
            }
        }
        return sum;
    }

    save() {
        this.close(true);
    }
}

