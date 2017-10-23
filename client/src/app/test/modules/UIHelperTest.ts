/**
 * Created by yildirayme on 11.05.2016.
 */

import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef} from '@angular/core';
declare var is: Is;
import {PageServices} from "../../modules/PageServices";
import {BaseTestPage} from "../../commons/BaseTestPage/BaseTestPage";
import {Action} from "../../commons/Action";
import {DIALOG_TYPES, IDialogOptions} from "../../modules/UIHelper";


@Component({
    moduleId: module.id,
    selector: 'UIHelperTest',
    templateUrl: '../../commons/BaseTestPage/BaseTestPageTemplate.html'
})
export class UIHelperTest extends BaseTestPage implements OnInit, OnDestroy,OnChanges, AfterViewInit {

    constructor(public baseServices:PageServices, public elementRef: ElementRef) {
        super(baseServices,elementRef);
        this.setI18NKey('tests.UIHelperTest');

        this.setTestActions([
           this.createAction('notifications',[
                this.createAction('info_test',()=>{
                    this.baseServices.uiHelper.notify('info_test',DIALOG_TYPES.INFO);
                }),
               this.createAction('error_test',()=>{
                   this.baseServices.uiHelper.notify('error_test',DIALOG_TYPES.ERROR);
               }),
               this.createAction('warn_test',()=>{
                   this.baseServices.uiHelper.notify('warn_test',DIALOG_TYPES.WARNING);
               }),
               this.createAction('success_test',()=>{
                   this.baseServices.uiHelper.notify('success_test',DIALOG_TYPES.SUCCESS);
               }),
           ]),
            this.createAction('alerts',[
                this.createAction('info_test',()=>{
                    this.baseServices.uiHelper.alert('info_test',DIALOG_TYPES.INFO);
                }),
                this.createAction('error_test',()=>{
                    this.baseServices.uiHelper.alert('error_test',DIALOG_TYPES.ERROR);
                }),
                this.createAction('warn_test',()=>{
                    this.baseServices.uiHelper.alert('warn_test',DIALOG_TYPES.WARNING);
                }),
                this.createAction('success_test',()=>{
                    this.baseServices.uiHelper.alert('success_test',DIALOG_TYPES.SUCCESS);
                }),
            ]),
            this.createAction('confirm',[
                this.createAction('default_test',()=>{
                    this.baseServices.uiHelper.confirm('default_test1',(action:Action)=>{ /*ignore*/ });
                }),
                this.createAction('yesnocancel_test',()=>{
                    this.baseServices.uiHelper.confirmEx(<IDialogOptions>{
                        message: "yesnocancel_test",
                        //type:DIALOG_TYPES.QUESTION,
                        buttons: this.baseServices.uiHelper.BUTTONS_YES_NO_CANCEL,
                        defaultButton: this.baseServices.uiHelper.BUTTONS_YES_NO_CANCEL[2],
                        callback: (action:Action)=>{ /*ignore*/ }
                    });
                }),
                this.createAction('okcancel_test',()=>{
                    this.baseServices.uiHelper.confirmEx(<IDialogOptions>{
                        message: "okcancel_test",
                        //type:DIALOG_TYPES.QUESTION,
                        buttons: this.baseServices.uiHelper.BUTTONS_OK_CANCEL,
                        defaultButton: this.baseServices.uiHelper.BUTTONS_OK_CANCEL[1],
                        callback: (action:Action)=>{ /*ignore*/ }
                    });
                }),
                this.createAction('custombutton_test',()=>{
                    let custom_buttons = [new Action('custom1'),new Action('custom2')];
                    this.baseServices.uiHelper.confirmEx(<IDialogOptions>{
                        message: "custombutton_test",
                        //type:DIALOG_TYPES.QUESTION,
                        buttons: custom_buttons,
                        defaultButton: custom_buttons[1],
                        callback: (action:Action)=>{ /*ignore*/ }
                    });
                }),
            ]),
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

}
