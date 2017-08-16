/**
 * Created by omeroz on 5/25/2017.
 */
import {
	Component,
	OnInit,
	AfterViewInit,
	OnDestroy,
	OnChanges,
	ElementRef,
	ChangeDetectorRef
} from "@angular/core";
import {PageServices} from "../../../PageServices";
import {MODAL_SIZE} from "../../../ModalComponent";
import {NeighborRelationDTO} from "../../../../swagger/NeighborRelationDTO";
import {BasePopupDataTablesPage} from "../../../../commons/BasePopupDataTablesPage/BasePopupDataTablesPage";
import {NeighborRelationStatusDTO} from "../../../../swagger/NeighborRelationStatusDTO";
import {SearchOptions} from "../../../../swagger/SearchOptions";
import {GenericSearchRequest} from "../../../../swagger/GenericSearchRequest";
import {NeighborRelationStatusListResponse} from "../../../../swagger/NeighborRelationStatusListResponse";
import {SdnipApi} from "../../../../swagger/SdnipApi";
import {GenericIdRequest} from "../../../../swagger/GenericIdRequest";

@Component({
	moduleId: module.id,
	selector: 'PeerRelationStatusListPage',
	templateUrl: '../../../../commons/BasePopupDataTablesPage/BasePopupDataTablesPage.html',
})
export class PeerRelationStatusListPage extends BasePopupDataTablesPage<NeighborRelationDTO,NeighborRelationStatusDTO> implements OnInit, AfterViewInit,OnChanges, OnDestroy {

	constructor(public changeDetector: ChangeDetectorRef,
	            public sdnipApi:SdnipApi,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(baseServices, elementRef);

		this.modalSize = MODAL_SIZE.LARGE;
		this.setI18NKey('bgp_management.peer.relation');

		this.setFormActions([
			this.createAction('dialogs.actions.cancel', () => {
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
		return super.ngAfterViewInit();
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}


	getDataTableOptions() {
		return {
			columns: [
				{title: this.ft('name'), width: '25%', orderable: true, type: 'peer', name: 'name'},
				{title: this.ft('asNumber'), width: '25%', orderable: true, type: 'string', name: 'asNumber'},
				{title: this.ft('peerStatus'), width: '25%', orderable: true, type: 'string', name: 'peerStatus',className:"dt-center" },
				{title: this.ft('description'), width: '25%', orderable: true, type: 'string', name: 'description',className:"dt-center" },
			],
			"order": [
				[1, "desc"]
			]
		};
	}

	makeDataTableRequest(requestOptions: any, data: any, callback: (data: any) => void) {
		let request = this.baseServices.apiHelper.genRequest({
			id: this.data.id
		});

		this.sdnipApi
			.sdnipRouterNeighborStatusListPOST(<GenericIdRequest>request)
			.subscribe(
				(res) => {
					executeCallback(res);
				}
			);

		let executeCallback = (response: NeighborRelationStatusListResponse) => {
			let dataTableData = [];
			if (this.baseServices.uiHelper.processResponse(response)) {
				this.currentList = response.data.list;
				response.data.list.forEach((itm: NeighborRelationStatusDTO, idx) => {
					dataTableData.push(
						[
							itm.peer.name,
							itm.peer.asNumber,
							itm.peerStatus,
							itm.description
						]
					);
				});

			} else {
				this.logger.error("Bgp Peer Relation Status DataTable Error", data);
			}

			callback({
				draw: data.draw,
				recordsTotal: response.data ? response.data.totalItems : [],
				recordsFiltered: response.data ? response.data.totalItems : [],
				data: dataTableData
			});
		}
	}
}

