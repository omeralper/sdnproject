import {AfterViewInit, ElementRef, OnChanges, OnDestroy, OnInit} from "@angular/core";
import {BasePage} from "../BasePage";
import {Action} from "../Action";
import {QueryOptions} from "../../swagger/QueryOptions";
import {SortOptions} from "../../swagger/SortOptions";
import {PageServices} from "../../modules/PageServices";
import {UIHelper} from "../../modules/UIHelper";
import {AbstractSearchOptions} from "../../swagger/AbstractSearchOptions";
import {BaseComponent} from "../BaseComponent";


export abstract class BaseDataTablesPage<T> extends BasePage implements OnInit, OnDestroy, OnChanges, AfterViewInit {

	public $tableRef: JQuery;
	public $dataTableRef;

	public actions: Array<Action> = [];
	public REQUEST_DELAY = 50;
	public isServerSide: boolean = true;

	public rowActions: Array<Action> = null;
	public rowStatusActions: Array<Action> = null;
	public currentList: Array<T> = [];
	public searchBarParseErrorTimeout;

	public isFirstTime: boolean = true;

	public maxBlockTimeOut;
	public tableId;

	public savedSettings: SavedSettings = <SavedSettings>{};

	constructor(baseServices: PageServices, elementRef: ElementRef) {
		super(baseServices, elementRef);
	}

	ngOnInit() {
		super.ngOnInit();
		this.$tableRef = $('.data-table', this.$container);
		this.tableId = this.baseServices.utils.genUUID();
		// let $blocked=this.$tableRef.closest('.portlet-body');
		// this.baseServices.uiHelper.setDefaultBlockContainer($blocked);
	}

	ngOnChanges(e) {
		super.ngOnChanges(e);
	}

	ngAfterViewInit() {
		if (super.ngAfterViewInit()) {
			this.initDataTable();
			return true;
		}
		return false;
	}

	ngOnDestroy() {
		super.ngOnDestroy();
		// this.baseServices.uiHelper.setDefaultBlockContainer(null);
        $(window).off('resize');
		//TODO clear DataTable
		if (this.$dataTableRef) {
			this.$dataTableRef.clear();
		}
	}

	abstract getDataTableOptions(): any;

	makeDataTableRequest(requestOptions: AbstractSearchOptions, data: any, callback: (data: any) => void) {
		//this is default empty request that is executed when datatable first loads
		callback({
			draw: data.draw,
			recordsTotal: 0,
			recordsFiltered: 0,
			data: []
		});
	}

	private isQueryInProgress:boolean=false;
	reload(reset: boolean = false) {
		this.logger.debug('Reload DataTables!');
		if (!this.isQueryInProgress) {
            this.isQueryInProgress = true;
            if (this.$dataTableRef) {
                if (this.isServerSide) {
                    this.$dataTableRef.draw(reset);
                } else {
                    this.$dataTableRef.ajax.reload(null, reset);
                }
            }
        } else {
            this.logger.debug('Reload ignored, another query in progress!');
		}
	}

	executeAction(action: Action) {
		action.execute();
	}

	exportTable(operation: string, tableID: any) {
		this.logger.debug('Export ', operation, tableID);
		switch (operation) {
			case 'print':
				$(this.elementRef.nativeElement).find('.buttons-print').click();
				break;
			case 'copy':
				$(this.elementRef.nativeElement).find('.buttons-copy').click();
				break;
			case 'export_pdf':
				$(this.elementRef.nativeElement).find('.buttons-pdf').click();
				break;
			case 'export_excel':
				$(this.elementRef.nativeElement).find('.buttons-excel').click();
				break;
		}
	}

	/**
	 * Field name translation function. Use this function to easily translate Table Field names.
	 * @param fieldi18nKey Field name to be translated.
	 * @returns {string} Translated field name.
	 */
	ft(fieldi18nKey: string, options?: any) {
		return this.t('fields.' + fieldi18nKey, options) || fieldi18nKey;
	}

	setActions(actions: Array<Action>) {
		//filter actions by permission.
		this.actions = actions
			.filter((action, idx, all) => {
				return this.p(action.perm);
			});
	}

	initButtons() {
		let $dataTables = this.baseServices.uiHelper.dataTable();
		new $dataTables.Buttons(this.$dataTableRef, {
			buttons: [
				{
					extend: 'print',
					id: 'printExport',
					title: this.title,
					exportOptions: {
						columns: function (idx, data, node) {
							return !$(node).hasClass('action_cell');
						},
						format: {
							body: function (html, idx) {
								if (containsHtml(html)) {
									return extractText(html);
								} else {
									return html;
								}
							}
						}
					}
				},
				{
					extend: 'copy',
					id: 'copyExport',
					exportOptions: {
						columns: function (idx, data, node) {
							return !$(node).hasClass('action_cell');
						},
						format: {
							body: function (html, idx) {
								if (containsHtml(html)) {
									return extractText(html);
								} else {
									return html;
								}
							}
						}
					}
				},
				{
					extend: 'excel',
					id: 'excelExport',
					filename: this.title,
					exportOptions: {
						columns: function (idx, data, node) {
							return !$(node).hasClass('action_cell');
						},
						format: {
							body: function (html, idx) {
								if (containsHtml(html)) {
									return extractText(html);
								} else {
									return html;
								}
							}
						}
					}
				},
				{
					extend: 'pdf',
					id: 'pdfExport',
					filename: this.title,
					exportOptions: {
						columns: function (idx, data, node) {
							return !$(node).hasClass('action_cell');
						},
						format: {
							body: function (html, idx) {
								if (containsHtml(html)) {
									return extractText(html);
								} else {
									return html;
								}
							}
						}
					}
				}
			]
		});

		function containsHtml(html) {
			return /<[a-z][\s\S]*>/i.test(html);
		}

		function extractText(html) {
			return $(html).data('status') || $(html).attr('title') || $(html).text();
		}

		this.$dataTableRef.buttons().container().hide();
		$(this.elementRef.nativeElement).append(this.$dataTableRef.buttons().container());
	}

	reInitDataTable() {
		if (this.$dataTableRef) {
			this.$dataTableRef.destroy();
			this.$dataTableRef = null;

			this.$tableRef.off("click", "a.js_ds_action");
			this.$tableRef.off("click", "a.js_txt_action");
			this.$tableRef.off("order.dt");
			this.$tableRef.off("page.dt");
			this.$tableRef.off("length.dt");
            this.$tableRef.off("mouseenter", "td");
            this.$tableRef.off("draw.dt");

			$("thead,tbody,tfoot",this.$tableRef).remove();
		}
		this.initDataTable();
	}

	initDataTable() {
		if (!this.$dataTableRef) {
			// let isFirstTime = true;
			let $dataTables = this.baseServices.uiHelper.dataTable();
			let tableOptions = this.getDataTableOptions();

			let name = this.i18nkey;
			if(name != BaseComponent.DEFAULT_I18N_KEY) {
				this.savedSettings = this.baseServices.sessionManager.getItem(name, <SavedSettings>{}, false);
				if (this.savedSettings) {
					$.extend(tableOptions, this.savedSettings);
				}
			}

			let options = $.extend({
				// autoWidth: false,
				// responsive: true,
				// lengthMenu: [
				//     [5, 10, 15, 20, -1],
				//     ["5", "10", "15", "20", "All"] // change per page values here
				// ],
				// pageLength: 10,
				destroy: true,
				searchDelay: 1000,//delay search requests for 1 seconds when typing to search box
				serverSide: this.isServerSide,
				colReorder: true,
				ajax: (data: any, callback: (data: any) => void, settings: any) => {
					let api = new $dataTables.Api(settings);
					let columns = api.settings().init().columns;

					let inner_callback = () => {
						try {
							this.beforeAjaxCall();
							this.makeDataTableRequest(options, data, (result: any) => {
								//eğer sonuç olduğu halde istenilen aralıkta data gelmezse son sayfa tekrar isteniyor
								// if(result.data.length == 0 && result.recordsFiltered > 0){
								//    options.startPage = Math.floor((result.recordsFiltered -1 ) / options.pageSize);
								//    this.makeDataTableRequest(options,data,(result:any)=>{
								//        callback(result);
								//    })
								// }
								try {
                                    callback(result);
                                } catch (e) {
                                    this.logger.error(e);
                                } finally {
                                    this.afterAjaxCall();
                                    this.isQueryInProgress = false;
								}
							});
						} catch (e) {
							this.logger.error(e);
							callback({
								draw: data.draw,
								recordsTotal: 0,
								recordsFiltered: 0,
								data: []
							});
							this.afterAjaxCall();
                            this.isQueryInProgress = false;
						}
					};

					let sortOptions: SortOptions;

					if (data.order && data.order.length > 0) {
						let orderData = data.order[0];
						let column = columns[orderData.column];
						sortOptions = <SortOptions> {
							fieldName: column.name,
							isAscend: orderData.dir === "asc"
						};
					}

					let queryOptions: QueryOptions;
					clearTimeout(this.searchBarParseErrorTimeout);
					if (data.search && data.search.value) {
						let $searchBox = this.$container.find("div.dataTables_filter").find("input[type=search]");
						let searchResult = this.baseServices.uiHelper.parseSearchBarText(data.search.value);
						if (searchResult.error) {
							this.searchBarParseErrorTimeout = setTimeout(() => {
								$searchBox.popover({
									content: this.baseServices.i18n.t("common.datatables.search_parse_error", {error: searchResult.error}),
									placement: "left",
									trigger: "click focus manual"
								}).popover("show");
							}, 2000);
							return;
						} else {
							$searchBox.popover("destroy");
							if (searchResult.queryOptions) {
								let resolveColumns = (queryOptions: QueryOptions) => {
									if (queryOptions.fieldName && queryOptions.fieldName.charAt(0) == '#') {
										try {
											let index = parseInt(queryOptions.fieldName.substring(1), 10) - 1;
											let column = columns[index];
											if (column.searchable) {
												queryOptions.fieldName = column.name;
												if (is.existy(column.fieldValueConverter)) {
													queryOptions.fieldValue = column.fieldValueConverter(queryOptions.fieldValue);
												}
											} else {
												throw `Column '${column.name}' is not searchable`;
											}
										} catch (e) {
											this.logger.warn(e);
											queryOptions.fieldName = "*";
										}
									}
									if (queryOptions.leftQuery) resolveColumns(queryOptions.leftQuery);
									if (queryOptions.rightQuery) resolveColumns(queryOptions.rightQuery);
									return queryOptions;
								};

								queryOptions = resolveColumns(searchResult.queryOptions);
							}
						}
					}

					let fieldsList = this.getFields(columns);

					var options: AbstractSearchOptions = $.extend({}, {
						pageSize: Math.max(0, data.length || 0),
						startPage: data.length > 0 ? data.start / data.length : 0,
						sortOptions: sortOptions,
						queryOptions: queryOptions ? queryOptions : undefined,
						fields: fieldsList//[] //return all fields
					});
					this.logger.debug("SearchOptions:", options);
					setTimeout(() => {
						inner_callback();
						this.isFirstTime = false;
					}, this.isFirstTime ? this.REQUEST_DELAY : 0);

				},
			}, tableOptions);

			this.$dataTableRef = this.$tableRef.DataTable(options);
			this.initButtons();

			this.$tableRef.on("click", "a.js_ds_action", (e) => {
				e.preventDefault();
				e.stopPropagation();

				let el = $(e.currentTarget);
				let dataIdx = el.data('row');
				let actionIdx = el.data('action');
				let actionType = el.data('actiontype');

				let data = this.currentList[dataIdx];
				let action: any;

				switch (actionType) {
					case 'action':
						action = this.rowActions[actionIdx];
						break;
					case 'status':
						action = this.rowStatusActions[actionIdx];
						break;
					case 'subaction':
						let rootAction = this.rowActions[actionIdx];
						let subActionIdx = el.data('subaction');
						action = rootAction.subActions[subActionIdx];
						break;
				}

				this.logger.debug("Action " + action.title + " clicked for item :", data);

				action.execute(data, el);

			});

			this.$tableRef.on("click", "a.js_txt_action", (e) => {
				e.preventDefault();
				e.stopPropagation();

				let el = $(e.currentTarget);
				let dataIdx = el.data('index');
				let actionType = el.data('action');
				let data = this.currentList[dataIdx];

				this.logger.debug("Action " + actionType + " clicked for item :", data);

				this.executeTextAction(actionType, dataIdx, data);

			});

			this.$tableRef.on("order.dt", (e) => {
				let order = this.$dataTableRef.order();
				let name = this.i18nkey;
				this.savedSettings.order = order;
				this.baseServices.sessionManager.setItem(name, this.savedSettings, false);
			});

			this.$tableRef.on("page.dt", (e) => {
				let info = this.$dataTableRef.page.info();
				let name = this.i18nkey;
				this.savedSettings.displayStart = info.start;
				this.baseServices.sessionManager.setItem(name, this.savedSettings, false);
			});

			this.$tableRef.on("length.dt", (e) => {
				let info = this.$dataTableRef.page.info();
				let name = this.i18nkey;
				this.savedSettings.pageLength = info.length;
				this.baseServices.sessionManager.setItem(name, this.savedSettings, false);
			});

            let handle_cell_resize = ()=>{
                let $noclip_headers:JQuery = $('th.action_cell,th.noclip',this.$tableRef);
                $noclip_headers.each((idx,itm)=>{
                	let $header = $(itm);
					let index = $header.prop('cellIndex');
					let $all:JQuery = $('th:nth-child('+(index+1)+'),td:nth-child('+(index+1)+')',this.$tableRef);
					if (!$all.hasClass('dataTables_empty')) {
                        let max_width = Math.max.apply(Math, $all.map(function () {
                            return $(this).prop('scrollWidth');
                        }).get());
                        if ($header.innerWidth() < max_width) {
                            $header.css('width', max_width + "px");
                            //console.info('set width:', max_width);
                        }
                    }
				});
            };

            this.$tableRef.on("draw.dt", (e) => {
                handle_cell_resize();
                this.baseServices.uiHelper.populateTooltips(this.$tableRef);
            });

            $(window).on('resize', function(){
                handle_cell_resize();
            });

            this.$tableRef.on("mouseenter", "td", (e) => {
            	let $td = $(e.currentTarget);// $(this);
				if (!$td.hasClass('action_cell') && !$td.hasClass('no-auto-tooltip')) {
                    if (($td.prop('offsetHeight') < $td.prop('scrollHeight') ||
                            $td.prop('offsetWidth') < $td.prop('scrollWidth'))) {
                        if (!$td.data('tooltip')) {
                            // your element have overflow
                            $td.data('tooltip', true);
                            this.baseServices.uiHelper.setTooltip($td);
                        }
                    } else if ($td.data('tooltip')) {
                        // your element doesn't have overflow
                        $td.data('tooltip', false);
                        this.baseServices.uiHelper.removeTooltip($td);
                    }
                }
            });

			this.$container.find("div.dataTables_filter").on("focus", "input[type=search]", (e) => {
				//let el = $(e.currentTarget);
				this.logger.debug("Search got focus");
				this.$tableRef.find("span.js_search_ref").removeClass("hidden");
			});

			this.$container.find("div.dataTables_filter").on("blur", "input[type=search]", (e) => {
				//let el = $(e.currentTarget);
				this.logger.debug("Search lost focus");
				this.$tableRef.find("span.js_search_ref").addClass("hidden");
			});


		} else {
			this.$dataTableRef.clear().ajax.reload();
		}
	}

	private getFields(columns) {
		let fieldsList = this.getDefaultFields();
		let tableOptions = this.getDataTableOptions()
		if (tableOptions.argExtraFields && tableOptions.argExtraFields.length > 0) {
			fieldsList = fieldsList.concat(tableOptions.argExtraFields);
		}

		$.each(columns, (idx, col) => {
			if (col.name) {
				let parts = col.name.split(',');
				parts.forEach((part) => {
					fieldsList.push(part)
				});
			}
		});

		//remove child items from column definitions
		fieldsList = fieldsList.map((itm) => {
			return itm.split('.')[0];
		});

		fieldsList = this.baseServices.utils.uniqueArray(fieldsList);
		return fieldsList;
	}

	private beforeAjaxCall() {
		this.blockTable();
	}

	private afterAjaxCall() {
		this.unblockTable();
	}

	private blockTable() {
		let $blocked = this.getBlockingContainer();
		//setup timer to unblock screen after UIHelper.UNBLOCK_TIMEOUT whatever happens
		this.maxBlockTimeOut = setTimeout(() => {
			this.unblockTable();
		}, UIHelper.UNBLOCK_TIMEOUT);

		this.baseServices.uiHelper.block(this.tableId, $blocked, false);
	}

	private unblockTable() {
		clearTimeout(this.maxBlockTimeOut);
		this.baseServices.uiHelper.unblock(this.tableId);
		//update tooltips on the new datatable rows
		//setTimeout(() => this.baseServices.uiHelper.populateTooltips(this.$tableRef), 500);
	}

	public setRowActions(rowActions: Array<Action>) {
		this.rowActions = this.filterActions(rowActions);
	}

	public setRowStatusActions(rowStatusActions: Array<Action>) {
		//filter actions by permission.
		var count = 0;
		this.rowStatusActions = this.filterActions(rowStatusActions);
	}

	public filterActions(actions: Array<Action>) {
		//filter actions by permission.
		var count = 0;
		return actions.filter((action, idx, all) => {
			if (this.p(action.perm)) {
				action.index = count++;
				if (action.subActions) action.subActions = this.filterActions(action.subActions);
				return true;
			}
			return false;
		});
	}

	renderRowActions(dataIdx: number, isIconOnly?: (
		                 boolean
		                 | Array<boolean>), rowCallback?: (action: Action, idx: number, data: any) => boolean): string {
		var actionStr = [];
		var data = this.currentList[dataIdx];
		if (this.rowActions) {
			this.rowActions.forEach((action: Action, idx, all) => {
				if (!rowCallback || rowCallback(action, idx, data)) {
					let localIconOnly = isIconOnly && (isIconOnly[idx] || isIconOnly === true);
					if (is.existy(action.subActions)) {
						var subMenu = this.renderActionMenu(dataIdx, action, localIconOnly, rowCallback);
						if (is.not.empty(subMenu)) actionStr.push(subMenu);
					} else {
						actionStr.push('<a href="javascript:;" data-action="' + action.index + '" data-actiontype="action" data-row="' + dataIdx + '" class="btn btn-circle btn-sm js_ds_action ' + action.color + '" rel="tooltip" title="' + action.title + '" ><i class="' + action.icon + '"></i> ' + (localIconOnly ? '' : action.title_short) + '</a>');
					}
				}
			});
		}
		return actionStr.join(' ');
	}

	public renderActionMenu(dataIdx: number, rootAction: Action, isIconOnly?: boolean, rowCallback?: (action: Action, idx: number, data: any) => boolean): string {
		var data = this.currentList[dataIdx];
		// var subActions = rootAction.subActions.filter((action,idx)=>{
		//     action.index=idx;
		//     return (!rowCallback || rowCallback(action, idx, data));
		// });
		var subActions = rootAction.subActions

		if (is.not.empty(subActions)) {
			//if (subActions.length>1) {
			var subMenuItems = [];

			// subActions.forEach((action: Action, idx, all)=> {
			//     actionStr.push('<li><a href="javascript:;" data-action="' + rootAction.index + '" data-actiontype="subaction" data-subaction="'+action.index+'" data-row="' + dataIdx + '" class="js_ds_action" title="' + action.title + '" ><i class="' + action.icon + (is.existy(action.color)?' font-'+action.color:'') + '"></i> ' + action.title + '</a></li>');
			// });
			subActions.forEach((action: Action, idx, all) => {
				if (!rowCallback || rowCallback(action, idx, data)) {
					subMenuItems.push('<li><a href="javascript:;" data-action="' + rootAction.index + '" data-actiontype="subaction" data-subaction="' + action.index + '" data-row="' + dataIdx + '" class="js_ds_action" title="' + action.title + '" ><i class="' + action.icon + (is.existy(action.color) ? ' font-' + action.color : '') + '"></i> ' + action.title + '</a></li>');
				}
			});

			if (subMenuItems.length > 0) {
				let subMenuBuilder = ['<div class="btn-group">',
					'<a class="btn btn-circle btn-sm ', rootAction.color, '" rel="tooltip" title="', rootAction.title, '" href="javascript:;" data-toggle="dropdown" aria-expanded="false">',
					'<i class="', rootAction.icon, '"></i>', (isIconOnly ? ' ' : rootAction.title), '<i class="fa fa-angle-down"></i>',
					'</a><ul class="dropdown-menu pull-right">']
					.concat(subMenuItems);
				subMenuBuilder.push('</ul></div>');
				return subMenuBuilder.join('');
			}
			// } else {
			//     let action = subActions[0];
			//     return '<a href="javascript:;" data-action="' + rootAction.index + '" data-actiontype="subaction" data-subaction="'+action.index+'" data-row="' + dataIdx + '" class="btn btn-circle btn-sm js_ds_action ' + action.color + '" title="' + action.title + '" ><i class="' + action.icon + '"></i> ' + (isIconOnly ? '' : action.title_short) + '</a>';
			// }
		}
		return '';
	}

	// THIS wont work anymore
	// renderRowActionsMenu(dataIdx: number, isIconOnly?: boolean, rowCallback?: (action: Action, idx: number, data: any)=>boolean): string {
	//     var action = <Action>{
	//         title: this.baseServices.i18n.t('common.actions'),
	//         title_short: this.baseServices.i18n.t('@common.actions'),
	//         icon: 'fa fa-coq',
	//         color: 'btn-default',
	//         perm: 'children(any)',
	//         //states:null,
	//         subActions: this.rowActions,
	//         //callback : null
	//     }
	//     return this.renderActionMenu(dataIdx, action, isIconOnly, rowCallback);
	// }

	renderRowStatusActions(dataIdx: number, type: any, field: any): string {
		var data = this.currentList[dataIdx];
		if (this.rowStatusActions) {
			this.rowStatusActions.forEach((action: Action, idx, all) => {
				if (is.existy(action.states) && is.not.empty(action.states)) {
					for (var i in action.states) {
						if (type[data[field]] == type[action.states[i]]) {
							return '<a href="javascript:;" data-action="' + idx + '" data-actiontype="status" data-row="' + dataIdx + '" class="btn btn-circle btn-sm js_ds_action ' + action.color + '" rel="tooltip" title="' + action.title + '" ><i class="' + action.icon + '"></i> </a>';
						}
					}
				}
			});
		}
		return this.renderIcon(type, data[field]);
	}

	public getBlockingContainer() {
		return this.$tableRef.closest('.portlet-body');
	}

	public renderTextAction(index: number, text: string, actionKey: string = "default") {
		let action = ['<a href="javascript:;" data-index="', index, '" data-action="', actionKey, '" class="js_txt_action" >', text, '</a>'];
		//rel="tooltip" title="' + action.title + '"
		return action.join('');
	}

	public executeTextAction(actionType: string, dataIdx: number, data: any) {
		//INFO this must be overriden by child classes, this is default implementation which ignores everything
	}

	public getDefaultFields() {
		return ['id', 'version', 'revision', 'timestamp'];//INFO insert the fields that are retreived all the time in here
	}
}

export interface SavedSettings {
	order: any;
	displayStart: number;
	pageLength: number;
}
