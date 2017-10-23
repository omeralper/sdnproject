/**
 * Created by omeroz on 9/11/2017.
 */

import {PipeTransform, Pipe} from "@angular/core";

@Pipe({name: 'mapvalue'})
export class MapValuePipe implements PipeTransform {
	transform(value): any {
		if(!value) return [];
		let r = [];
		value.forEach((v, k) => {
			r.push({key: k, value: v})
		});
		return r;
	}
}
