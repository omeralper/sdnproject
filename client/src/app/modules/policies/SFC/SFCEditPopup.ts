/**
 * Created by barangu on 6/7/2017.
 */
import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ChangeDetectorRef} from "@angular/core";
import {BasePopupEditPage} from "../../../commons/BasePopupEditPage/BasePopupEditPage";
import {PageServices} from "../../PageServices";
import {DIALOG_TYPES} from "../../UIHelper";
import {SfcApi} from "../../../swagger/SfcApi";
import {SfcDTO} from "../../../swagger/SfcDTO";
import {SfcRequest} from "../../../swagger/SfcRequest";
import {SfcTypeApi} from "../../../swagger/SfcTypeApi";
import {ListOptions} from "../../../swagger/ListOptions";
import {GenericListRequest} from "../../../swagger/GenericListRequest";
import {SfcTypeDTO} from "../../../swagger/SfcTypeDTO";
import {VnfdDTO} from "../../../swagger/VnfdDTO";
import {VNFDTYPE} from "../../../swagger/VNFDTYPE";
import {VnfrApi} from "../../../swagger/VnfrApi";
import {VnfrDTO} from "../../../swagger/VnfrDTO";
import {SFCSTATUS} from "../../../swagger/SFCSTATUS";

@Component({ moduleId: module.id,
    selector: 'SFCEditPopup',
    templateUrl: './SFCEditPopup.html',
    providers: [SfcApi, SfcTypeApi, VnfrApi]
})

export class SFCEditPopup extends BasePopupEditPage<SfcDTO> implements OnInit, AfterViewInit, OnDestroy {

    public sfcTypes: SfcTypeDTO[];
    public vnfChains: VnfdDTO[];
    public vnfrs: VnfrDTO[];
    public mainArr= [];
    public validCheck = false;

    constructor(public sfcApi: SfcApi, public vnfrApi: VnfrApi, public sfcTypeApi: SfcTypeApi, public changeDetector: ChangeDetectorRef, baseServices: PageServices, elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('policy_management.sfc.edit');


        this.setFormActions([
            this.createAction('dialogs.actions.save', () => {
                this.save();
            }),
            this.createAction('dialogs.actions.cancel', () => {
                this.close();
            })
        ]);
    }

    ngOnInit() {
        super.ngOnInit();
        this.vnfrInit();
    }

    ngOnChanges(e) {
        super.ngOnChanges(e);
    }

    ngAfterViewInit() {
        return super.ngAfterViewInit();
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

    sfcTypeInit(){
        let request = this.baseServices.apiHelper.genRequest({
            options: <ListOptions>{
                startPage: 0,
                pageSize: 0,
                sortOptions: {fieldName: 'sfcTypeName', isAscend: true}
            }
        });

        this.sfcTypeApi
            .sfcSfcTypeListPOST(<GenericListRequest>request)
            .subscribe(
                (res) => {
                    if (this.baseServices.uiHelper.processResponse(res)) {
                        this.sfcTypes = res.data.list;
                        this.onStart();
                        this.changeDetector.detectChanges();
                    }
                }
            );
    }
    updateVnfChains(){
        this.validCheck = false;
        this.mainArr = [];
        this.data.vnfrList = [];
        for(let i=0; i<this.sfcTypes.length; i++){
            if(this.data.sfcTypeName===this.sfcTypes[i].sfcTypeName){
                this.vnfChains = this.sfcTypes[i].vnfdList;
                i=this.sfcTypes.length;
            }
        }
        this.vnfChains.forEach((d) => {
            this.mainArr.push(this.vnfrs.filter((r)=> { return r.vnfdId ==  d.vnfdId ;}));
        });
        this.mainArr.forEach((d) => {
            if(d.length == 0){
                this.mainArr.splice(this.mainArr.indexOf(d),1);
                this.validCheck = true;
            }
        });
        for (let i = 0; i < this.mainArr.length; i++) {
            this.data.vnfrList.push(this.mainArr[i][0]);
        }
        this.changeDetector.detectChanges();
    }

    vnfrInit(){
        let request = this.baseServices.apiHelper.genRequest({
            options: <ListOptions>{
                startPage: 0,
                pageSize: 0,
                sortOptions: {fieldName: 'vnfrName', isAscend: true}
            }
        });

        this.vnfrApi
            .sfcVnfrListPOST(<GenericListRequest>request)
            .subscribe(
                (res) => {
                    if (this.baseServices.uiHelper.processResponse(res)) {
                        this.vnfrs = res.data.list;
                        this.changeDetector.detectChanges();
                        this.sfcTypeInit();
                    }
                }
            );
    }

    onStart(){
        if(this.isNewItem && this.sfcTypes && this.sfcTypes.length > 0){
            this.data.sfcTypeName = this.sfcTypes[0].sfcTypeName;
            this.vnfChains = this.sfcTypes[0].vnfdList;
        }else if(this.sfcTypes){
            for(let i=0; i<this.sfcTypes.length; i++){
                if(this.data.sfcTypeName===this.sfcTypes[i].sfcTypeName){
                    this.vnfChains = this.sfcTypes[i].vnfdList;
                    i=this.sfcTypes.length;
                }
            }
        }
        this.vnfChains.forEach((d) => {
            this.mainArr.push(this.vnfrs.filter((r)=> { return r.vnfdId ==  d.vnfdId ;}));
        });
        this.mainArr.forEach((d) => {
            if(d.length == 0){
                this.mainArr.splice(this.mainArr.indexOf(d),1);
                this.validCheck = true;
            }
        });
        if(this.isNewItem) {
            this.data.vnfrList = [];
            for (let i = 0; i < this.mainArr.length; i++) {
                this.data.vnfrList.push(this.mainArr[i][0]);
            }
        }
        this.changeDetector.detectChanges();
    }

    updateVnfr(event){
        for(let i=0; i< this.vnfrs.length; i++){
            let r: VnfrDTO;
            if(this.vnfrs[i].vnfrName === event.target.value){
                r=this.vnfrs[i];
                for(let j=0; j<this.data.vnfrList.length; j++){
                    if(this.data.vnfrList[j].vnfdId === r.vnfdId){
                        this.data.vnfrList.splice(j,1,r);
                        j=this.data.vnfrList.length;
                        i=this.vnfrs.length;
                    }
                }
            }
        }
    }

    save() {
        let form: any = $('form', this.elementRef.nativeElement)[0];
        if (!form.checkValidity() || this.validCheck) {
            this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
            return;
        }
        if(this.sfcTypes){
            for (let i = 0; i < this.sfcTypes.length; i++) {
                if (this.data.sfcTypeName === this.sfcTypes[i].sfcTypeName) {
                    this.data.sfcTypeId = this.sfcTypes[i].sfcTypeId;
                    i = this.sfcTypes.length;
                }
            }
        }
        if(this.isNewItem) {
            this.data.sfcStatus = SFCSTATUS.ACTIVE;
        }
        this.submitted = true;
        this.data.revision++;
        this.data.timestamp = this.baseServices.utils.genTimestamp();

        let request = this.baseServices.apiHelper.genRequest({
            data: <SfcDTO> this.data
        });

        this.sfcApi
            .sfcChainSavePOST(<SfcRequest>request)
            .subscribe(
                (res) => {
                    if (this.baseServices.uiHelper.processResponse(res, this.t('messages.save_success', {dto: this.data}))) {
                        this.close(true);
                    }
                },
                (error: any) => {
                    this.baseServices.uiHelper.processResponse(error._body); //JSON parsing is handled in the function now
                }
            );
    }
}
