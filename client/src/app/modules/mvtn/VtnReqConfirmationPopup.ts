/**
 * Created by ekinca on 15.02.2017.
 */
import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ChangeDetectorRef} from "@angular/core";
import {PageServices} from "../PageServices";
import {BasePopupEditPage} from "../../commons/BasePopupEditPage/BasePopupEditPage";
import {TopologyApi} from "../../swagger/TopologyApi";
import {DocumentConverter} from "../DocumentConverter";
import {MVTNTYPE} from "../../swagger/MVTNTYPE";

@Component({
    moduleId: module.id,
    selector: 'VtnReqConfirmationPopup',
    templateUrl: './VtnReqConfirmationPopup.html',
    providers: [DocumentConverter],

})
export class VtnReqConfirmationPopup extends BasePopupEditPage<any> implements OnInit, AfterViewInit, OnDestroy {
    public mvtnTypes = [];

    constructor(public dc: DocumentConverter, public changeDetector: ChangeDetectorRef, public topologyApi: TopologyApi, baseServices:PageServices, elementRef:ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('network_vis.virtual_topo_req.edit');

        this.logger.debug('Data received:', this.data);

        this.setFormActions([
            this.createAction('dialogs.actions.save', ()=> {
                this.logger.debug('Save clicked');
                this.save();
            }),
            this.createAction('dialogs.actions.cancel', ()=> {
                this.logger.debug('Cancel clicked');
                this.close();
            })
        ]);

        for (let enumMember in MVTNTYPE) { //MVTNTYPES
            if ( isNaN( parseInt( enumMember )) ){
                this.mvtnTypes.push(enumMember);
            }
        }

        if( this.dc.isNotNullOrUndefined(this.data.item.name) ){
            this.data.item.mvtnName = this.data.item.name;
        }else{
            this.data.item.name = this.data.item.mvtnName;
        }

        this.data.item.mvtnType = this.dc.isNotNullOrUndefinedOrEmptyString(this.data.item.mvtnType) ? this.data.item.mvtnType : this.mvtnTypes[0];
    }

    ngOnInit() {
        super.ngOnInit();
    }

    ngOnChanges(e) {
        super.ngOnChanges(e);
    }

    ngAfterViewInit() {
        if (super.ngAfterViewInit()) {

            if(this.isNewItem){
            }


            return true;
        }
        return false;
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

    save() {

        this.close(true, this.data.item);

    }

}

