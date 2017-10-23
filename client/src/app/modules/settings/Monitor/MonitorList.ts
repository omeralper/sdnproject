/**
 * Created by omeroz on 7/6/2017.
 */
import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef} from '@angular/core';
import {BaseDataTablesPage} from "../../../commons/BaseDataTablesPage/BaseDataTablesPage";
import {PageServices} from "../../PageServices";
import {MonitorInfoDTO} from "../../../swagger/MonitorInfoDTO";
import {MonitorApi} from "../../../swagger/MonitorApi";
import {MonitorMetaDataEditPopup} from "./MonitorMetaDataEditPopup";
import {MonitorSelectRequest} from "../../../swagger/MonitorSelectRequest";
import {MonitorSelectListResponse} from "../../../swagger/MonitorSelectListResponse";
import {MonitorMetaDataListDictionary} from "./ListDictionary";
import {SearchOptions} from "../../../swagger/SearchOptions";
import {MonitorSelectDTO} from "../../../swagger/MonitorSelectDTO";
import {MonitorSearchCriteria} from "../../../swagger/MonitorSearchCriteria";
import {DIALOG_TYPES} from "../../UIHelper";

@Component({
	moduleId: module.id,
	selector: 'MonitorList',
	templateUrl: '../../../commons/BaseDataTablesPage/BaseDataTablesPageTemplate.html',
})
export class MonitorList extends BaseDataTablesPage<MonitorInfoDTO> implements OnInit, OnDestroy, OnChanges, AfterViewInit {

	selectedMonitors: Array<MonitorInfoDTO> = [];

	constructor(public monitorApi: MonitorApi,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(baseServices, elementRef);
		this.addI18NBundle('monitorMetaDataList', MonitorMetaDataListDictionary);
		this.isServerSide = false;
		this.setActions([
			this.createAction('@editAll', () => {
				let selectedIds = $('.icheck:checked',this.$tableRef).get().map(c => (<HTMLInputElement>c).value).filter(c => c!='NaN');
				if (is.not.empty(selectedIds)) {
                    this.selectedMonitors = this.currentList.filter(m => selectedIds.includes(m.id));
                    this.baseServices.sharedService.showModal(MonitorMetaDataEditPopup, {monitors: this.selectedMonitors},
                        (result) => {
                            if (result.isSuccess) this.reload();
                        });
                } else {
					this.baseServices.uiHelper.notify(this.t('messages.select_items'),DIALOG_TYPES.WARNING);
				}
			})
		]);

		this.setRowActions([
			this.createAction('@editSingle', (itm: any) => {
				this.baseServices.sharedService.showModal(MonitorMetaDataEditPopup, {monitors: [itm]},
					(result) => {
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
	}

	ngAfterViewInit() {
		if (super.ngAfterViewInit()) {

            this.$dataTableRef.on('draw', () => {
                this.updateCheckboxes();
            });

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
				{
					title: '<input type="checkbox" value="NaN" class="group-checkable icheck" id="js_table_select_all"> '+ this.ft('select'),
					width: '5%',
					orderable: false,
					type: 'html',
					name: 'select',
					className: "dt-center"
				},
				{title: this.ft('name'), width: '15%', orderable: true, type: 'string', name: 'name'},
				{title: this.ft('owner'), width: '15%', orderable: true, type: 'string', name: 'owner'},
				{title: this.ft('limit'), width: '10%', orderable: true, type: 'num', name: 'loLimit', className: "dt-center"},
				{title: this.ft('alarm'), width: '10%', type: 'num', name: 'loAlarm', className: "dt-center"},
				{title: this.ft('tags'), width: '25%', orderable: true, type: 'string', name: 'tags'},
				{title: this.ft('type'), width: '10%', orderable: true, type: 'string', name: 'type', className: "dt-center"},
				{
					title: $.t('common.fields.actions'),
					width: '5%',
					orderable: false,
					type: 'html',
					defaultContent: '',
					className: 'action_cell'
				},
				{visible: false, type: 'num', name: 'hiLimit'},
				{visible: false, type: 'num', name: 'hiAlarm'},
			],
			"order": [
				[1, "asc"]
			],
			argExtraFields: []
		};
	}

	makeDataTableRequest(requestOptions: SearchOptions, data: any, callback: (data: any) => void) {

		let request = <MonitorSelectRequest>this.baseServices.apiHelper.genRequest({
			data: <MonitorSelectDTO>{
				responseFields: [],
				requestFields: <MonitorSearchCriteria>{}
			}
		});

		this.monitorApi
			.monitorSelectPOST(<MonitorSelectRequest>request)
			.subscribe(
				(res) => {
					executeCallback(res);
				}
			);

		let executeCallback = (response: MonitorSelectListResponse) => {
			let dataTableData = [];
			if (this.baseServices.uiHelper.processResponse(response)) {
				this.currentList = response.data.list;
				response.data.list.forEach((itm: MonitorInfoDTO, idx) => {
					let limit = "";
					let alarm = "";
					if (itm.gaugeFields) {
						limit = (itm.gaugeFields.loLimit == undefined ? '' : itm.gaugeFields.loLimit) + '/' +
							(itm.gaugeFields.hiLimit == undefined ? '' : itm.gaugeFields.hiLimit );
						alarm = (itm.gaugeFields.loAlarm == undefined ? '' : itm.gaugeFields.loAlarm ) + '/' +
							(itm.gaugeFields.hiAlarm == undefined ? '' : itm.gaugeFields.hiAlarm);
					}
					dataTableData.push(
						[
							'<input type="checkbox" value="' + itm.id + '" class="group-checkable icheck">',
							$.t('statistic_metrics.' + itm.name),
							itm.owner || '',
							limit,
							alarm,
							itm.monitorTags && itm.monitorTags.map(m => m.tag + '-' + m.val).join(', '),
							this.renderIcon('MONITORTYPE', itm.monitorType),
							this.renderRowActions(idx, true),
							"",
							""
						]
					);
				});

			} else {
				this.logger.error('Monitor DataTables Error:', data);
			}
			callback({
				draw: data.draw,
				recordsTotal: response.data ? response.data.totalItems : [],
				recordsFiltered: response.data ? response.data.totalItems : [],
				data: dataTableData
			});

			// setTimeout(()=>{
			// 	this.updateCheckboxes();
			// },10);
		}
	}

	private updateCheckboxes(){
        this.baseServices.uiHelper.initICheckPlugin(this.$tableRef);

        $('#js_table_select_all',this.$tableRef).off('ifToggled');
        $('#js_table_select_all',this.$tableRef).on('ifToggled',(event)=>{
            let $all_checks = $('.icheck',this.$tableRef);
            $all_checks.iCheck((<any>event.target).checked?'check':'uncheck');
        });
	}
}
