/**
 * Created by omeroz on 3/8/2017.
 */
import {Injectable} from "@angular/core";
import {PageServices} from "../../../PageServices";
import {ControllerApi} from "../../../../swagger/ControllerApi";
import {ClusterApi} from "../../../../swagger/ClusterApi";
import {SearchOptions} from "../../../../swagger/SearchOptions";
import {GenericSearchRequest} from "../../../../swagger/GenericSearchRequest";
import {QUERYOP} from "../../../../swagger/QUERYOP";
import {QueryOptions} from "../../../../swagger/QueryOptions";
import {ControllerNodeListResponse} from "../../../../swagger/ControllerNodeListResponse";
import {Subject} from "rxjs/Subject";
import {ClusterDTO} from "../../../../swagger/ClusterDTO";
import {ControllerNodeDTO} from "../../../../swagger/ControllerNodeDTO";

@Injectable()
export class ControllerSettingsService {
	public clusterList: Array<CustomClusterDTO> = [];

	clusterListUpdated: Subject<any> = new Subject<any>();
	viewSelected: Subject<ClusterViewParam> = new Subject<ClusterViewParam>();
	switchView: Subject<any> = new Subject<any>();
	currentViewParam: ClusterViewParam;

	constructor(public clusterApi: ClusterApi,
	            public controllerApi: ControllerApi,
	            public baseServices: PageServices) {

	}

	selectView(view: ClusterViews, data: ClusterDTO) {
		let param: ClusterViewParam = <ClusterViewParam>{
			clusterView: view,
			data: data
		};
		this.currentViewParam = param;
		this.switchView.next(param);
	}

	/**
	 * TODO-this is a work around.
	 * @param param
	 */
	setView(param: ClusterViewParam) {
		this.viewSelected.next(param);
		if (param.clusterView == ClusterViews.Cluster) {
			this.clusterList.find(c => c.id == param.data.id).controllerList || this.fetchControllerList(param.data.id);
		}
	}

	fetchClusterList() {
		let request = this.baseServices.apiHelper.genFullListRequest();

		// let request = this.baseServices.apiHelper.genRequest({
		//     options: <SearchOptions>{
		//         pageSize: 3,
		//         startPage: 0
		//     }
		// });

		this.clusterApi
			.clusterSearchPOST(<GenericSearchRequest>request)
			.subscribe(
				(response) => {
					if (this.baseServices.uiHelper.processResponse(response)) {
						this.clusterList = <Array<CustomClusterDTO>>response.data.list;
						this.clusterList[0] && this.fetchControllerList(this.clusterList[0].id);
					}
				}
			);
	}

	fetchControllerList(clusterId: string) {
		let request = this.baseServices.apiHelper.genRequest({
			options: <SearchOptions>{
				queryOptions: <QueryOptions> {
					operator: QUERYOP.VALUE,
					fieldValue: clusterId,
					fieldName: "clusterId"
				},
				// pageSize: 2,
				startPage: 0
			}
		});

		this.controllerApi
			.controllerSearchPOST(<GenericSearchRequest>request)
			.subscribe(
				(response: ControllerNodeListResponse) => {
					if (this.baseServices.uiHelper.processResponse(response)) {
						let thatCluster = this.clusterList.find(c => c.id == clusterId);
						thatCluster.controllerList = response.data.list;
						this.clusterListUpdated.next();
					}
				}
			);
	}
}

/**
 ClusterDTO'nun aslında controllerList property'si de var. Bu alan için ayrıca API yapıldığı için bu dto'nun içine konulmadı.
 Ama kodlamada içindeymiş gibi yazılıyor.
 */
export interface CustomClusterDTO extends ClusterDTO {
	controllerList: Array<ControllerNodeDTO>
}

export interface ClusterViewParam {
	clusterView: ClusterViews,
	data: ClusterDTO
}

export enum ClusterViews{
	Cluster,
	Controller,
	Parameter,
	Task,
	Switch
}
