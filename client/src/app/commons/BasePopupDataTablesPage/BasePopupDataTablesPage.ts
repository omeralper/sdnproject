/**
 * Created by yildirayme on 05.05.2016.
 */
import {OnInit, OnDestroy,OnChanges, AfterViewInit, ElementRef} from '@angular/core';
import {PageServices} from "../../modules/PageServices";
import {Action} from "../Action";
import {BaseDataTablesPage} from "../BaseDataTablesPage/BaseDataTablesPage";
import {MODAL_SIZE} from "../../modules/ModalComponent";
import {UI_PAGE_TYPE} from "../enums/UI_PAGE_TYPE";

export abstract class BasePopupDataTablesPage<T,ListT> extends BaseDataTablesPage<ListT> implements OnInit, OnDestroy,OnChanges, AfterViewInit {

    public data:T;
    public REQUEST_DELAY=500;

    popupActions:Array<Action>;
    formActions:Array<Action>;

    modalSize:MODAL_SIZE = MODAL_SIZE.NORMAL;

    public get pageType(): UI_PAGE_TYPE {
        return UI_PAGE_TYPE.POPUP;
    }

    public BASE_POPUP_ACTIONS = [
        new Action('common.buttons.refresh', ()=>{ this.reload(); }),
        new Action('common.buttons.tools',[
            new Action('common.buttons.print', ()=>{ this.exportTable('print',this.$tableRef.attr('id')) }),
            new Action('common.buttons.export_pdf', ()=>{ this.exportTable('export_pdf',this.$tableRef.attr('id')) }),
            new Action('common.buttons.export_excel', ()=>{ this.exportTable('export_excel',this.$tableRef.attr('id')) }),
        ]),
        new Action('common.buttons.close', ()=>{ this.close(); }),
    ];

    public BASE_FORM_ACTIONS = [
        new Action('dialogs.actions.close', ()=>{ this.close(); }),
    ];

    constructor(public baseServices:PageServices, public elementRef: ElementRef) {
        super(baseServices,elementRef);
        //clone the passed object, because we dont want to modify the original
        this.data = $.extend({},this.baseServices.sharedService.getData());

        this.setPopupActions([],true);
        this.setFormActions([],true);
        $(document).on('keyup.popup',(e) => {
            if (e.keyCode == 27) {
                this.close();
            }
            if (e.keyCode === 13) {
                if(this.formActions.length > 0)
                    this.formActions[0].execute();
            }
        });
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
        $(document).unbind('keyup.popup');
        super.ngOnDestroy();
    }

    close(isSuccess:boolean=false,data?:any){
        this.baseServices.sharedService.hideModal(isSuccess,data);
    }

    setPopupActions(actions:Array<Action>,useBaseActions:boolean=true){
        let combinedActions = useBaseActions?actions.concat(this.BASE_POPUP_ACTIONS):actions;
        let filteredActions = this.checkActionPermissions(combinedActions);

        this.logger.debug('setPopupActions',{ actions:actions, combined:combinedActions, filtered: filteredActions});

        this.popupActions = filteredActions;
    }

    setFormActions(actions:Array<Action>,useBaseActions:boolean=false) {
        let combinedActions = useBaseActions?actions.concat(this.BASE_FORM_ACTIONS):actions;actions;
        let filteredActions = this.checkActionPermissions(combinedActions);

        this.logger.debug('setFormActions', {actions: actions, combined: combinedActions, filtered: filteredActions});

        this.formActions = filteredActions;
    }
}
