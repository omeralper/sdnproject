/**
 * Created by yildirayme on 02.05.2016.
 */
import {
    Component,
    Injector,
    OnInit,
    OnDestroy,
    OnChanges,
    AfterViewInit,
    ElementRef,
    ChangeDetectorRef,
    NgZone
} from "@angular/core";
import {Location} from '@angular/common';
import {Router, ActivatedRoute} from '@angular/router';
import {BasePage} from "../../../commons/BasePage";
import {AppComponent} from "../../../app.component";
import {SavedLoginOptions, AUTHORIZATION_MODE} from "../../AuthenticationManager";
import {DIALOG_TYPES} from "../../UIHelper";
import {NotPermittedAction} from "../../PermManager/PermManager";
import {RETURNSTATUS} from "../../../swagger/RETURNSTATUS";
import BootstrapSwitchOptions = BootstrapSwitch.BootstrapSwitchOptions;
import {PageServices} from "../../PageServices";
import {WANDOMAINApi} from "../../../swagger/WANDOMAINApi";
import {WanDomainResponse} from "../../../swagger/WanDomainResponse";
import {UI_TOPOLOGY_ACTION} from "../../../commons/enums/UI_TOPOLOGY_ACTION";

@Component({
    moduleId: module.id,
    selector: 'LoginPage',
    templateUrl: '../..//aaa/LoginPage/LoginPageTemplate.html',
    providers: []
})
export class LoginPageCode extends BasePage implements OnInit, OnDestroy, OnChanges, AfterViewInit {

    public loginOpts: SavedLoginOptions = {
    	username : 'prognet',
	    password : 'prognet'
    };

    //INFO used for language combo, DO NOT REMOVE
    public LANGUAGE_DS = [{name: 'Türkçe', value: 'tr'}, {name: 'English', value: 'en'}];

    public currentLanguage;
    public isDevMode;
    public serverData;

    constructor(public wanDomainApi: WANDOMAINApi,
                public zone: NgZone,
                public route: ActivatedRoute,
                public router: Router,
                public location: Location,
                public injector: Injector,
                public changeDetector: ChangeDetectorRef,
                baseServices: PageServices,
                elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('login');

        let token: any = route.snapshot.params["token"];
        this.route.params.subscribe(params => {
            console.info(params);
        });
        if ("new" == token) {
            this.baseServices.authenticationManager.invalidateSession();
        } else if (is.existy(this.baseServices.authenticationManager.getCurrentUser())) {
            this.processSuccessLogin();
        }

        this.loginOpts = this.baseServices.authenticationManager.getSavedCredentials(AUTHORIZATION_MODE.ADMIN);
        this.currentLanguage = this.baseServices.i18n.getCurrentLanguage();
        this.isDevMode = "devMode" == token; // is.truthy(routeInfo.get("devMode"));

        $(document).on('keyup.login', (e) => {
            if (e.keyCode === 13) {
                this.login(e);
            }
        });
    }

    ngOnChanges(e) {
        super.ngOnChanges(e);
        this.logger.info('something changed', e);
    }

    ngOnInit() {
        super.ngOnInit();
        $('title').html(this.t('page_title.login'));
        if (this.isDevMode) {
            this.serverData = this.baseServices.apiHelper.getServerData();
        }
    }

    ngAfterViewInit() {
        if (super.ngAfterViewInit()) {
            //Code here

            //$(".rem-checkbox").iCheck();

            if (this.isDevMode) {

                $("#server_combo").typeahead({
                        minLength: 3,
                        highlight: true
                    },
                    {
                        name: 'my-dataset',
                        source: (query, syncResults) => {
                            syncResults($.grep(this.serverData.serverList, (server: string, i) => {
                                return server.indexOf(query) != -1;
                            }));
                        }
                    });
                $("#server_combo").typeahead('val', this.serverData.server);
            }

            this.updateSwitch();

            return true;
        }
        return false;
    }

    ngOnDestroy() {
        $(document).unbind('keyup.login');
        super.ngOnDestroy();
    }

    login(event?: any) {
        let form: any = event.target || $('#loginForm', this.elementRef.nativeElement)[0];
        if (!form.checkValidity()) {
            this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
            return;
        }

        if (this.isDevMode) {
            let serverAddress = $('#server_combo').typeahead('val');
            this.baseServices.apiHelper.setServerAddress(serverAddress);
        }

        this.baseServices.authenticationManager.adminLogin(this.loginOpts, (status: RETURNSTATUS) => {
            if (status == RETURNSTATUS.SUCCESS) {
                this.processSuccessLogin();
            }
        });
    }

    setLanguage(language) {
        this.logger.log(language);
        this.baseServices.i18n.setCurrentLanguage(language, () => {
            this.currentLanguage = language;
            this.updateSwitch();
            this.changeDetector.detectChanges();
        });
    }

    public processSuccessLogin() {
        if (is.existy(this.$container)) this.$container.hide();
        let root = this.injector.get(AppComponent);
        root.refresh();
        $('title').html(this.t('page_title.admin'));
        this.zone.run(() => { //http://stackoverflow.com/questions/37988296/angular2-routers-navigatebyurl-not-calling-ngoninit
            this.baseServices.sessionManager.removeItem('tabList'); //MLAT-3566
            if (this.baseServices.permManager.checkPermission('phy_topo:view | vir_topo:view', NotPermittedAction.REMOVE) !== NotPermittedAction.REMOVE) {
                this.location.replaceState('/');
                let req = this.baseServices.apiHelper.genRequest({});
                this.wanDomainApi
                    .wanConfigurationWanDomainCurrentPOST(req)
                    .subscribe((res: WanDomainResponse) => {
                        if (this.baseServices.uiHelper.processResponse(res)) {
                            if (res.data && res.data.name) {//subdomain'de olduğumuzu gösterir
                                this.baseServices.sessionManager.setItem("isTopologyModeCentral", false);
                                if (res.data.name.toLocaleLowerCase() == "standalone") {
                                    this.baseServices.sessionManager.setItem("isTopologyModeStandAlone", "true");
                                }
                                else {
                                    this.baseServices.sessionManager.removeItem("isTopologyModeStandAlone");
                                }
                                this.router.navigate(['/topology/view']);
                            } else { //merkezi topolojide olduğumuzu gösterir
                                this.baseServices.sessionManager.setItem("isTopologyModeCentral", true);
                                this.router.navigate(['/topology/view'], {
                                    queryParams: {
                                        action: UI_TOPOLOGY_ACTION.NEW_SUPER_TOPOLOGY,
                                        domainId: ""
                                    }
                                });
                            }
                        } else {
                            this.baseServices.uiHelper.notify(this.t('messages.fetch_domain_fail'), DIALOG_TYPES.ERROR);
                        }
                    });
            } else {
                this.router.navigate(['welcome']);
            }
        });
    }

    // public updateSwitch() {
    //     //TODO bootstrapSwitch project is dead use one of the following;
    //     // - http://abpetkov.github.io/switchery/ (PREFERED)
    //     // - http://www.bootstraptoggle.com/
    //
    //     let labelUpdateFunc = (state) => {
    //         let $nac_remember_me_label = $("label#remember_me_label");
    //         $nac_remember_me_label.text(state ? this.t('rememberme.onLabel') : this.t('rememberme.offLabel'));
    //     }
    //
    //     let $rememberme = $("input#remember_me");
    //     $rememberme
    //         .off('init.bootstrapSwitch')
    //         .off('switchChange.bootstrapSwitch')
    //         .bootstrapSwitch('destroy');
    //
    //     setTimeout(() => {
    //         $rememberme
    //             .on('init.bootstrapSwitch', () => {
    //                 labelUpdateFunc(this.loginOpts.isRemember);
    //             })
    //             .on('switchChange.bootstrapSwitch', (event, state) => {
    //                 this.loginOpts.isRemember = state;
    //                 labelUpdateFunc(state);
    //                 this.changeDetector.detectChanges();
    //             })
    //             .bootstrapSwitch({
    //                 onText: this.t("rememberme.onText"),
    //                 offText: this.t("rememberme.offText"),
    //                 labelText: this.t("rememberme.label_icon"),
    //                 size: "small",
    //                 labelWidth: "10",
    //                 state: this.loginOpts.isRemember
    //             })
    //     }, 10);
    // }

    public updateSwitch() {
        this.baseServices.uiHelper.initICheckPlugin(this.$container);

        let $rememberme = $("input#remember_me");
        // $rememberme.iCheck('destroy');
        // $rememberme.iCheck({
        //     checkboxClass: 'icheckbox_square-blue',
        //     radioClass: 'iradio_square-blue',
        //     increaseArea: '30%' // optional
        // });

        $rememberme.off('ifToggled');
        $rememberme.on('ifToggled',(event)=>{
            this.loginOpts.isRemember = (<any>event.target).checked;
        });
    }
}
