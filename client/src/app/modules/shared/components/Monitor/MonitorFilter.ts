/**
 * Created by omeroz on 7/11/2017.
 */

import {PipeTransform, Pipe} from "@angular/core";
import {MonitorInfoDTO} from "../../../../swagger/MonitorInfoDTO";

@Pipe({name: 'monitorFilter'})
export class MonitorFilterPipe implements PipeTransform {
	transform(value: Array<MonitorInfoDTO>, param): any {
		return value.filter(m => m.monitorType == param);
	}
}
