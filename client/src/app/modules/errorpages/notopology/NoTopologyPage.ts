/**
 * Created by ekinca on 13.10.2016.
 */

import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef} from "@angular/core";
import {BasePage} from "../../../commons/BasePage";
import {PageServices} from "../../PageServices";

@Component({ moduleId: module.id,
    selector: 'NoTopologyPage',
    templateUrl: './NoTopologyPage.html',
    providers: [],
})

export class NoTopologyPage extends BasePage implements OnInit, OnDestroy, OnChanges, AfterViewInit {

    constructor( baseServices:PageServices, elementRef:ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('common');
    }

    ngOnChanges(e) {
        super.ngOnChanges(e);
        this.logger.info('something changed',e);
    }

    ngOnInit() {
        super.ngOnInit();
    }

    ngAfterViewInit() {
        if (super.ngAfterViewInit()) {
            //Code here
            return true;
        }
        return false;
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

}