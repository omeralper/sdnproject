/**
 * Created by ekinca on 1.03.2017.
 */
import {Component, OnInit, AfterViewInit, ElementRef} from "@angular/core";
import {PageServices} from "../PageServices";
import {MODAL_SIZE} from "../ModalComponent";
import {BasePopupDataTablesPage} from "../../commons/BasePopupDataTablesPage/BasePopupDataTablesPage";
import {IAlarmLogConsumer, LogProvider} from "./LogsService";
import {Logs} from "./Logs";
import {EdrSearchCriteria} from "../../swagger/EdrSearchCriteria";
import {EdrDTO, EdrDTODef} from "../../swagger/EdrDTO";
import {EDRSTATUS} from "../../swagger/EDRSTATUS";


@Component({
    moduleId: module.id,
    selector: 'LogsPopup',
    templateUrl: './LogsPopup.html',
    providers: [LogProvider]
})
export class LogsPopup extends BasePopupDataTablesPage<EdrDTO, EdrDTO> implements OnInit, AfterViewInit,IAlarmLogConsumer {

    public description;
    public details;
    public noteType;
    public columns : Array<any>;

    searchableFields = [];
    searchableFieldsValue: any = [];
    $selectpicker;
    rawData;

    edrRequestData: EdrSearchCriteria = {
        timeStart: (moment().subtract('days', 1).startOf('day')).toISOString(),
        timeEnd: new Date().toISOString(),
        status: EDRSTATUS.SUCCESS
    };

    public selectedAlarm: EdrDTO;

    constructor(public dataProvider: LogProvider, baseServices: PageServices, elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.modalSize = MODAL_SIZE.FULL;
        this.isServerSide = false;
        //populate i18n fields but exclude title, because we are going to define it here
        this.setI18NKey('logs.details', {
            'title': () => {
                return this.t('title', {name: "EDR"})
            }
        });

        this.generateDetails(this.data);

        this.setRowActions([
            this.createAction('@view', (itm: EdrDTO) => {
                this.logger.debug('View Alarm Log Details of ' + itm.xid + ' action clicked');
                this.selectedAlarm = itm;
                this.close(true, itm);
            })
        ]);

        this.setFormActions([]);
        this.rawData = this.data.data ? this.parseRawData(this.data.data) : [{key:"Ekin", value: "Ekin"}];
    }

    ngOnChanges(e) {
        super.ngOnChanges(e);
        this.logger.info('something changed', e);
    }

    ngOnInit() {
        super.ngOnInit();
        this.columns = this.dataProvider.getAllColumns(this);
        //populate query filter fields
        // for(let i = 0; i < LogsPopup.FIELDS.length; i++){
        //     if(LogsPopup.FIELDS[i] != "time"){
        //         this.searchableFields.push({displayName: this.ft(LogsPopup.FIELDS[i]), name: LogsPopup.FIELDS[i] } );
        //     }
        // }
        for(let i = 0; i < this.columns.length; i++){
            let column = this.columns[i];
            if(column.name != "time"){
                this.searchableFields.push({displayName: this.ft(column.name), name: column.name } );
            }
        }

        this.searchableFields.push({displayName: this.ft("xid"), name: "xid"});
    }

    ngAfterViewInit() {
        if (super.ngAfterViewInit()) {
            //Code here
            $('#tab2Datatable').DataTable(
                {
                    searching: false
                }
            );

            this.$selectpicker = $('#searchable-fields');
            this.$selectpicker.selectpicker();
            this.$selectpicker.selectpicker('refresh');
            return true;
        }
        return false;
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

    parseRawData(rawData: string){
        let semiColonSplittedRawData = rawData.split(";");
        let equalSplitted = [];
        let objArr = [];
        for(let i = 0; i < semiColonSplittedRawData.length; i++){
            if (is.not.empty(semiColonSplittedRawData[i])) {
                equalSplitted = semiColonSplittedRawData[i].split("=");
                objArr.push({key: equalSplitted[0], value: equalSplitted[1]});
            }
        }
        return objArr;
    }

    getDataTableOptions() {
        return this.dataProvider.getDataTableOptions(this);
    }

    makeDataTableRequest(requestOptions: any, data: any, callback: (data: any)=>void) {
       this.dataProvider.makeDataTableRequest(this, this.edrRequestData, data, callback);
    }

    public static FIELDS = [
        //'id',
        'time',
        'status',
        'username',
        'module',
        'sourceIP',
        'destinationIP',
        'sourceMAC',
        'destinationMAC',
        'sourcePort',
        'destinationPort',
        'protocol'
    ];

    public generateDetails(rowData?: EdrDTO) {
        if (rowData) {
            let details = [];

            $.each(LogsPopup.FIELDS, (idx, field) => {
            // $.each(this.columns, (idx, column) => {
            //     let field = column.name;
                //if (rowData.type==ALARMTYPE.EVENT && field == "alarmStatus") return;

                let value = rowData[field];
                if (is.existy(value) && is.not.empty(value)) {
                    if (field == 'time') {
                        details.push({
                            title: this.t('fields.' + field) || field,
                            value: this.formatDateTime(moment(value))
                        });
                    } else if (field == 'status') { //TODO delete (!type)
                        let translated = this.t('enums.' + EdrDTODef.fields[field].type.toString().replace('_', '') + "." + value, {returnObjectTrees: true});
                        let line;
                        if (is.string(translated)) {
                            line = translated;
                        } else {
                            line = `<span class="font-${translated.color}"><i class="${translated.icon}"></i> ${translated.title}</span>`;
                        }
                        details.push({title: this.t('fields.' + field) || field, value: line});

                    } else {
                        details.push({title: this.t('fields.' + field) || field, value: value});
                    }
                }
            });
            //this.description = rowData.description;
            this.details = details;
            console.log(this.details);
            //this.noteType = Logs.COLORS[rowData.severity];
        } else {
            this.description = this.noteType = this.details = null;
        }
    }

    public formatDateTime(date: any) {
        return date.format(this.i18n.t('common.datetime_format'));
    }

    getNameFromDisplayName(displayName: string): string{
        for(let i = 0; i < this.searchableFields.length; i++){
            if(displayName === this.searchableFields[i].displayName){
                return this.searchableFields[i].name;
            }
        }
    }

    queryClick(){
        this.edrRequestData = {
            timeStart: (moment().subtract('days', 1).startOf('day')).toISOString(),
            timeEnd: new Date().toISOString()
        };

        let queryFields = [];
        for(let i = 0; i < this.searchableFieldsValue.length; i++){
            queryFields.push(this.getNameFromDisplayName(this.searchableFieldsValue[i]));
        }

        for(let j = 0; j < queryFields.length; j++){
             this.edrRequestData[queryFields[j]] = this.data[queryFields[j]];
        }
        this.reload(true);
    }

}
