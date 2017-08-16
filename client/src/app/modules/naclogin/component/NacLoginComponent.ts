/**
 * Created by omeroz on 10.11.2016.
 */
import {Component, OnInit, ElementRef, AfterViewInit, ChangeDetectorRef, OnDestroy} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {NacAuthenticator} from "./NacAuthenticator";
import {DIALOG_TYPES, UIHelper} from "../../UIHelper";
import {NacUserDTO} from "../../../swagger/NacUserDTO";
import {BasePage} from "../../../commons/BasePage";
import {PageServices} from "../../PageServices";
import {GuestSignupPopup} from "../guest/GuestSignupPopup";
import {RemindPasswordPopup} from "../guest/RemindPasswordPopup";

@Component({
    moduleId: module.id,
    selector: 'NacLoginComponent',
    templateUrl: 'NacLoginComponent.html',
})
export class NacLoginComponent extends BasePage implements OnInit, AfterViewInit, OnDestroy {

    public LANGUAGE_DS = [{name: 'Türkçe', value: 'tr'}, {name: 'English', value: 'en'}];
    public loginData: ILoginData = {};
    public returnPath: string;
    isRemember: boolean;
    public currentLanguage;

    constructor(public route: ActivatedRoute,
                public nacAuthenticator: NacAuthenticator,
                public uiHelper: UIHelper,
                public changeDetector: ChangeDetectorRef,
                baseServices: PageServices,
                elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('naclogin');
        this.returnPath = this.route.snapshot.params['returnPath'];
        this.currentLanguage = this.baseServices.i18n.getCurrentLanguage();

        $(document).on('keyup.login', (e) => {
            if (e.keyCode === 13) {
                this.login(e);
            }
        });
    }

    ngOnInit() {
        super.ngOnInit();
        this.nacAuthenticator.inc();
        console.info(this.nacAuthenticator.getCount());

        this.loginData = this.nacAuthenticator.getLoginData() || {};
        if (!$.isEmptyObject(this.loginData)) {
            this.nacAuthenticator.login(this.loginData, this.returnPath);
        }
    }

    ngAfterViewInit() {
        if (super.ngAfterViewInit()) {
            this.updateSwitch();
            return true;
        }
        return false;
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

    guestSignup() {
        this.baseServices.sharedService.showModal(GuestSignupPopup, {}, (result) => {
            if(result.isSuccess)
                this.loginData.username = result.data.username;
        });
    }

    remindPassword(){
        this.baseServices.sharedService.showModal(RemindPasswordPopup, {}, () => {

        });
    }

    login(event?: any) {
        let form: any = event.target || $('#nacLoginForm', this.elementRef.nativeElement)[0];
        if (!form.checkValidity()) {
            this.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
            return;
        }
        this.nacAuthenticator.login(this.loginData, this.returnPath);
    }

    setLanguage(language) {
        this.logger.log(language);
        this.baseServices.i18n.setCurrentLanguage(language, () => {
            this.currentLanguage = language;
            this.updateSwitch();
        });
    }

    public updateSwitch() {
        //TODO bootstrapSwitch project is dead use one of the following;
        // - http://abpetkov.github.io/switchery/ (PREFERED)
        // - http://www.bootstraptoggle.com/

        let labelUpdateFunc = (state) => {
            let $nac_remember_me_label = $("label#nac_remember_me_label");
            $nac_remember_me_label.text(state ? this.t('fields.rememberme.onLabel') : this.t('fields.rememberme.offLabel'));
        };

        let $rememberme = $("input#nac_remember_me");
        $rememberme
            .off('init.bootstrapSwitch')
            .off('switchChange.bootstrapSwitch')
            .bootstrapSwitch('destroy');

        $rememberme
            .on('init.bootstrapSwitch', () => {
                labelUpdateFunc(this.loginData.isRemember);
            })
            .on('switchChange.bootstrapSwitch', (event, state) => {
                this.loginData.isRemember = state;
                labelUpdateFunc(state);
                this.changeDetector.detectChanges();
            })
            .bootstrapSwitch({
                onText: this.t("fields.rememberme.onText"),
                offText: this.t("fields.rememberme.offText"),
                labelText: this.t("fields.rememberme.label_icon"),
                size: "small",
                labelWidth: "10",
                state: this.loginData.isRemember
            });
    }
}

interface ILoginData {
    username?: string;
    password?: string;
    isRemember?: boolean;
}

