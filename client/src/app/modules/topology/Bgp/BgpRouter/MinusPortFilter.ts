/**
 * Created by omeroz on 6/2/2017.
 */
import {PipeTransform, Pipe} from "@angular/core";

@Pipe({name: 'minusportfilter'})
export class MinusPortFilterPipe implements PipeTransform {
	transform(value) : any {
		return value && value.filter(p => p.number > -1);
	}
}
