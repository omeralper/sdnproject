/**
 * Created by omeroz on 2/16/2017.
 */

import {Injectable} from "@angular/core";
import {TsdbQueryRequest} from "../../../swagger/TsdbQueryRequest";
import {TsdbQueryResponse} from "../../../swagger/TsdbQueryResponse";
import {TSDBApi} from "../../../swagger/TSDBApi";
import {RandomStatisticsGenerator} from "./RandomStatisticsGenerator";
import {Observable} from "rxjs";
import {RETURNSTATUS} from "../../../swagger/RETURNSTATUS";
@Injectable()
export class TsdbServerProxy {

	public randomData: boolean = false;

	constructor(public tsdbApi: TSDBApi,
	            public generator: RandomStatisticsGenerator) {

	}

	tsdbQueryPOST(request: TsdbQueryRequest): Observable<TsdbQueryResponse> {
		let response = this.tsdbApi.tsdbQueryPOST(request, false).mergeMap((response: TsdbQueryResponse) => {
			if (this.randomData) {
				response = this.generator.generateRandomData(request);
			}
			// if (response.status == RETURNSTATUS.SERVER_ERROR || response.status == RETURNSTATUS.ERROR) {
			//     response = this.generator.generateRandomData(request);
			// } else {
			//     let totalValueCount = 0;
			//     response.datasets.forEach((set) => {
			//         totalValueCount += set.values.length;
			//     });
			//     if (!totalValueCount) {
			//         response = this.generator.generateRandomData(request);
			//     }
			// }

			return new Promise(resolve => resolve(response));
		});
		return response;
	}
}
