/**
 * Created by yildirayme on 17.04.2017.
 */
import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: '[TopMenuTreeComponent]',
    templateUrl: './top-menu-tree.component.html'
})
export class TopMenuTreeComponent {
    @Input() menu: Array<any>;
    @Input() isSubMenu:boolean=false;
}