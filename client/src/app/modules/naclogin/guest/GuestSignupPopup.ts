/**
 * Created by omeroz on 3/23/2017.
 */
import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ChangeDetectorRef} from "@angular/core";
import {BasePopupPage} from "../../../commons/BasePopupPage/BasePopupPage";
import {PageServices} from "../../PageServices";
import {DIALOG_TYPES} from "../../UIHelper";
import {NacUserDTO} from "../../../swagger/NacUserDTO";
import {NacUserApi} from "../../../swagger/NacUserApi";
import {NacUserRequest} from "../../../swagger/NacUserRequest";
import {NACSTATUS} from "../../../swagger/NACSTATUS";
import {NACENTITYTYPE} from "../../../swagger/NACENTITYTYPE";


@Component({
    moduleId: module.id,
    selector: 'GuestSignupPopup',
    templateUrl: 'GuestSignupPopup.html',
    providers: [NacUserApi]
})
export class GuestSignupPopup extends BasePopupPage<NacUserDTO> implements OnInit, AfterViewInit, OnDestroy {

    constructor(public nacUserApi: NacUserApi,
                baseServices: PageServices,
                elementRef: ElementRef) {

        super(baseServices, elementRef);
        this.setI18NKey('naclogin.guest');
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
    }

    ngOnChanges(e) {
        super.ngOnChanges(e);
    }

    ngAfterViewInit() {
        if (super.ngAfterViewInit()) {

            // $('#phoneNumber').inputmask({
            //     mask:"599-999 99 99",
            //     onincomplete:()=>{
            //
            //     }
            // });
            return true;
        }
        return false;
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

    save() {
        let form: any = $('form', this.elementRef.nativeElement)[0];
        if (!form.checkValidity()) {
            this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
            return;
        }
        this.data.phoneNumber=  this.data.phoneNumber.replace(/ /g,"").replace("-","");
        this.data.username = this.data.phoneNumber;
        this.data.securityLevel = 1;
        this.data.status = NACSTATUS.ACTIVE;
        this.data.userType = NACENTITYTYPE.GUEST;

        let request: NacUserRequest = <NacUserRequest>this.baseServices.apiHelper.genRequest({
            data: <NacUserDTO> this.data
        });

        this.nacUserApi
            .userSavePOST(request)
            .subscribe(
                (res) => {
                    if (this.baseServices.uiHelper.processResponse(res,
                            this.t('messages.sms_sent', {dto: this.data}))) {
                        this.close(true, res.data);
                    }
                },
                (error: any) => {
                    this.baseServices.uiHelper.processResponse(error._body);
                }
            );
    }
}

