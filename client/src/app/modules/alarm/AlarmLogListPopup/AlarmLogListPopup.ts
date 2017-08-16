/**
 * Created by yildirayme on 23.06.2016.
 */
import {Component, OnInit, AfterViewInit, ElementRef} from "@angular/core";
import {PageServices} from "../../PageServices";
import {MODAL_SIZE} from "../../ModalComponent";
import {BasePopupDataTablesPage} from "../../../commons/BasePopupDataTablesPage/BasePopupDataTablesPage";
import {AlarmDTO, AlarmDTODef} from "../../../swagger/AlarmDTO";
import {AlarmLogListProvider, IAlarmLogConsumer} from "../AlarmLogListPage/AlarmLogListProvider";
import {AlarmLogListPage} from "../AlarmLogListPage/AlarmLogListPage";
import {QueryOptions} from "../../../swagger/QueryOptions";
import {QUERYOP} from "../../../swagger/QUERYOP";
import {ALARMRESOURCE} from "../../../swagger/ALARMRESOURCE";


@Component({ moduleId: module.id,
    selector: 'AlarmLogListPopup',
    templateUrl: './AlarmLogListPopup.html'
})
export class AlarmLogListPopup extends BasePopupDataTablesPage<AlarmDTO,AlarmDTO> implements OnInit, AfterViewInit,IAlarmLogConsumer {

    public selectedAlarm:AlarmDTO;
    public description;
    public details;
    public noteType;

    constructor(public dataProvider:AlarmLogListProvider, baseServices:PageServices, elementRef:ElementRef) {
        super(baseServices, elementRef);
        this.modalSize = MODAL_SIZE.FULL;

        //populate i18n fields but exclude title, because we are going to define it here
        this.setI18NKey('alarm_logs.details',{
            'title': ()=>{
                return this.t('title', { name : this.dataProvider.getAlarmName(this.data.name), type:this.baseServices.uiHelper.getIconTitle('ALARMTYPE',this.data.type) });
            }
        });

        this.generateDetails(this.data);

        this.setRowActions([
            this.createAction('@view', (itm:AlarmDTO)=> {
             this.logger.debug('View Alarm Log Details of ' + itm.name + ' action clicked');
                this.selectedAlarm = itm;
             })
        ]);

        this.setFormActions([]);
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
        return this.dataProvider.getDataTableOptions(this);
    }

    getDefaultFields() {
        return this.dataProvider.getDefaultFields();
    }

    makeDataTableRequest(requestOptions:any, data:any, callback:(data:any)=>void) {
        //debugger;
        let queryOptions = requestOptions.queryOptions;

        let localQueryOptions = <QueryOptions>{
            operator: QUERYOP.VALUE,
            fieldName: 'type',
            fieldValue: (this.data.type || "ALARM").toString()
        };

        if (localQueryOptions) {
            if (!queryOptions) {
                queryOptions = localQueryOptions;
            } else {
                queryOptions = <QueryOptions>{
                    operator: QUERYOP.AND,
                    leftQuery: localQueryOptions,
                    rightQuery: queryOptions
                };
            }
        }

        if (is.existy(queryOptions)) {
            requestOptions.queryOptions = queryOptions;
        }

        this.dataProvider.makeDataTableRequest(this,requestOptions,data,callback);
    }

    public static FIELDS = [
        'id',
        'severity',
        'type',
        'alarmStatus',
        //'name',
        'time',
        'sourceHost',
        'source',
        'reportingMethod',
        //'sourceInstance',
        //'resource',
        'detail',
        'solveTime',
        'resolver',
        'resolveNote'
    ];

    public generateDetails(rowData?:AlarmDTO) {
        if (rowData) {
            let details = [];

            $.each(AlarmLogListPopup.FIELDS, (idx, field)=> {

                //if (rowData.type==ALARMTYPE.EVENT && field == "alarmStatus") return;

                let value = rowData[field];
                if (is.existy(value) && is.not.empty(value)) {
                    if (field=='time'){
                        details.push({title: this.t('fields.' + field) || field, value: this.formatDateTime(moment(value)) });
                    } else if (field=='severity' || field =='type' || field=='alarmStatus'){
                        let translated = this.i18n.t('enums.'+AlarmDTODef.fields[field].type.toString().replace('_','')+"."+value, { returnObjectTrees : true });
                        let line;
                        if (is.string(translated)){
                            line = translated;
                        } else {
                            line = `<span class="font-${translated.color}"><i class="${translated.icon}"></i> ${translated.title}</span>`;
                        }
                        details.push({title: this.t('fields.' + field) || field, value: line });

                    } else if (field == 'sourceHost') {
                        details.push({title: this.t('fields.' + field) || field, value: rowData.sourceInstance});
                    } else if (field == 'detail' && (rowData.resource == ALARMRESOURCE.MVTN_LINK || rowData.resource == ALARMRESOURCE.LINK ) ) {
                        var rowDataArray = rowData.detail.split("__");
                        details.push({title: this.t('fields.' + field) || field, value: this.t('fields.sourceHost') + ": " + rowDataArray[0] + " - " +this.t('fields.targetHost') + ": " + rowDataArray[1]});
                    } else if(field == 'source'){
                        details.push({title: this.t('fields.' + field) || field, value: rowData.source});
                    } else if(field == 'solveTime'){
                        details.push({title: this.t('fields.' + field) || field, value: rowData.solveTime});
                    } else if(field == 'resolver'){
                        details.push({title: this.t('fields.' + field) || field, value: rowData.resolver});
                    } else if(field == 'resolveNote'){
                        details.push({title: this.t('fields.' + field) || field, value: rowData.resolveNote});
                    }else {
                        details.push({title: this.t('fields.' + field) || field, value: value});
                    }
                }
            })
            //this.description = rowData.description;
            this.translateDescription(rowData.description);

            this.details = details;
            this.noteType = AlarmLogListPage.COLORS[rowData.severity];
        } else {
            this.description = this.noteType = this.details = null;
        }
    }

    public formatDateTime(date:any) {
        return date.format(this.i18n.t('common.datetime_format'));
    }

    private transReq:JQueryXHR = null;
    private translateDescription(description: string) {
        this.description = "...";
        if (this.transReq)  this.transReq.abort();
        this.transReq = this.baseServices.uiHelper.translate(description,this.baseServices.sessionManager.language, (translated)=>{
            this.description = translated;
        });
    }
}

