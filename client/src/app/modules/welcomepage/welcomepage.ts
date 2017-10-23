/**
 * Created by omeroz on 29.09.2016.
 */

import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef} from "@angular/core";
import {BasePage} from "../../commons/BasePage";
import {PageServices} from "../../modules/PageServices";

@Component({ moduleId: module.id,
    selector: 'WelcomePage',
    templateUrl: '..//welcomepage/welcomepage.html',
    providers: [],
})

export class WelcomePage extends BasePage implements OnInit, OnDestroy, OnChanges, AfterViewInit {

    constructor( baseServices:PageServices, elementRef:ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('dashboard');
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