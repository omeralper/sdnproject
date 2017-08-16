/**
 * Created by yildirayme on 11.05.2016.
 */
import {OnInit, OnDestroy,OnChanges, AfterViewInit, ElementRef} from '@angular/core';
import {BasePage} from "../BasePage";
import {PageServices} from "../../modules/PageServices";
import {Action} from "../Action";

export abstract class BaseTestPage extends BasePage implements OnInit, OnDestroy,OnChanges, AfterViewInit {

    pageActions:Array<Action>;
    testActions:Array<Action>;

    constructor(public baseServices:PageServices, public elementRef: ElementRef) {
        super(baseServices,elementRef);

        this.setPageActions([
            new Action('common.buttons.refresh',()=>{
              this.refresh();
            })
        ]);
    }

    ngOnInit() {
        super.ngOnInit();
    }

    ngOnChanges(e) {
        super.ngOnChanges(e);
    }

    ngAfterViewInit() {
        if (super.ngAfterViewInit()) {

            return true;
        }
        return false;

    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

    setTestActions(actions:Array<Action>){
        let combinedActions = actions;
        let filteredActions = this.checkActionPermissions(combinedActions);

        this.logger.debug('setTestActions',{ actions:actions, combined:combinedActions, filtered: filteredActions});

        this.testActions = filteredActions;
    }

    setPageActions(actions:Array<Action>){
        let combinedActions = actions;
        let filteredActions = this.checkActionPermissions(combinedActions);

        this.logger.debug('setPageActions',{ actions:actions, combined:combinedActions, filtered: filteredActions});

        this.pageActions = filteredActions;
    }

    executeAction(action:Action) {
        action.execute();
    }

    resolvePageBtnClass(action:Action) {
        return 'btn btn-circle'+((action.title_short || action.subActions) ?' btn-sm ':' btn-icon-only ')+(action.color?action.color:'btn-default');
    }

    resolveBtnClass(action:Action) {
        return 'btn '+(action.color?action.color:'btn-default');
    }

    refresh() {
        this.logger.debug('Refresh called');
        //TODO override this
    }

}
