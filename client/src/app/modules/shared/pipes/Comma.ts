/**
 * Created by omeroz on 1/26/2017.
 */

import {PipeTransform, Pipe} from "@angular/core";

@Pipe({name: 'comma'})
export class CommaPipe implements PipeTransform {
    transform(value) : any {
        return value ? value.split(',') : [];
    }
}
