/**
 * Created by ekinca on 3.08.2016.
 */
import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ChangeDetectorRef,ViewChild} from "@angular/core";
import {PageServices} from "../../PageServices";
import {BasePopupEditPage} from "../../../commons/BasePopupEditPage/BasePopupEditPage";
import {PolicyApi} from "../../../swagger/PolicyApi";
import {ServicePolicyClassRequest} from "../../../swagger/ServicePolicyClassRequest";
import {ServicePolicyClassDTO} from "../../../swagger/ServicePolicyClassDTO";
import {DIALOG_TYPES} from "../../UIHelper";

@Component({
    moduleId: module.id,
    selector: 'TrafficCategoryEditPopup',
    templateUrl: './TrafficCategoryEditPopup.html',
    providers: [PolicyApi]
})
export class TrafficCategoryEditPopup extends BasePopupEditPage<ServicePolicyClassDTO> implements OnInit, AfterViewInit, OnDestroy {

    public $select:JQuery;
    @ViewChild('bandWidth') bandWidth;

    constructor(baseServices:PageServices, elementRef:ElementRef,
                public policyApi:PolicyApi,
                public changeDetector: ChangeDetectorRef) {
        super(baseServices, elementRef);
        this.setI18NKey('policy_management.traffic_categories.edit');

        this.logger.debug('Data received:', this.data);

        this.setFormActions([
            this.createAction('dialogs.actions.save', ()=> {
                this.logger.debug('Save Traffic Category clicked');
                this.save();
            }),
            this.createAction('dialogs.actions.cancel', ()=> {
                this.logger.debug('Cancel clicked');
                this.close();
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
            if(this.data.bandwidthUnit){
                setTimeout(()=>{
                    $('#bw-unit-selectbox').val(this.data.bandwidthUnit.toString());
                },20);
            }
            if(this.isNewItem){
                this.data.classLevel = 1;
            }
            return true;
        }
        return false;
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

    changeBandWith(){
        this.changeDetector.detectChanges();
        this.bandWidth.nativeElement.dispatchEvent(new Event('keyup'));
        this.bandWidth.nativeElement.dispatchEvent(new Event('change'));
    }

    save() {
        let form: any = $('form', this.elementRef.nativeElement)[0];

        this.data.bandwidthUnit = $('#bw-unit-selectbox').val();

        if (!form.checkValidity()) {
            this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
            return;
        }

        if (this.isNewItem){}

        this.data.version = this.data.version || 1;
        this.data.revision = this.data.revision || 0;
        this.data.timestamp = this.data.timestamp || new Date();

        let request = this.baseServices.apiHelper.genRequest({
            data: <ServicePolicyClassDTO> this.data
        });

        this.policyApi
            .policyServiceClassSavePOST(<ServicePolicyClassRequest>request)
            .subscribe(
                (res) => {
                    if (this.baseServices.uiHelper.processResponse(res, this.t(this.data.id ? 'messages.save_success' : 'messages.create_success', {dto: this.data}))) {
                        this.close(true);
                    }
                },
                (error:any) => {
                    this.baseServices.uiHelper.processResponse(error._body); //JSON parsing is handled in the function now
                }
            );
    }

}

