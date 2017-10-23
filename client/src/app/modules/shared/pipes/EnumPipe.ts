/**
 * Created by omeroz on 3/6/2017.
 */
import {PipeTransform, Pipe} from "@angular/core";

@Pipe({name: 'enumValues'})
export class EnumValuesPipe implements PipeTransform {
    transform(value): any {
        return value ? Object
                .keys(value)
                .filter(v => !Number.isInteger(Number(v)))
                .map(key => value[key]) : [];
    }
}
