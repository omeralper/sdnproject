import {
    Component, OnInit, AfterViewInit, ElementRef, Injector, OnChanges
} from "@angular/core";
import {SharedService} from "./modules/SharedService";
import {BaseServices} from "./modules/BaseServices";
// import {UIHelper} from "./modules/UIHelper";
import {ApiHelper} from "./modules/ApiHelper";
import {PermManager} from "./modules/PermManager/PermManager";
import {AuthenticationManager} from "./modules/AuthenticationManager";
import {LocalStorageManager} from "./modules/LocalStorageManager";
import {SessionManager} from "./modules/SessionManager";
import {TOPOLOGYTYPE} from "./swagger/TOPOLOGYTYPE";
import {VtnListPopup} from "./modules/mvtn/VtnListPopup/VtnListPopup";
import {TopologyInfoDTO} from "./swagger/TopologyInfoDTO";
import {AlarmEventsListener} from "./modules/alarm/Core/AlarmEventsListener";
import {SessionIdleTimeout} from "./modules/SessionIdleTimeout";
declare var Offline: any;

// Root Component
@Component({
    moduleId: module.id,
    selector: 'RootComponent',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, AfterViewInit, OnChanges {

    public version = "";

    public isShowHeader = true;
    public $container: JQuery;
    public permManager: PermManager;
    public authenticationManager: AuthenticationManager;
    public sessionManager: SessionManager;
    public localStorageManager: LocalStorageManager;
    public uiHelper;
    public currentYear: number;

    constructor(public sessionIdleTimeout: SessionIdleTimeout,
                public apiHelper: ApiHelper,
                public sharedService: SharedService,
                public injector: Injector,
                public baseServices: BaseServices,
                public elementRef: ElementRef) {
        //this.socket = io.connect();
        this.baseServices.logger.info('--root--');
    }

    ngOnInit() {

        this.$container = $(this.elementRef.nativeElement);

        this.version = this.apiHelper.getVersion();
        this.currentYear = moment().year();

        this.baseServices.i18n.init();
        let pathname = window.location.pathname;
        this.baseServices.logger.debug("Requested Path:", pathname);
        this.permManager = <PermManager>this.injector.get(PermManager);
        this.authenticationManager = <AuthenticationManager>this.injector.get(AuthenticationManager);
        this.localStorageManager = <LocalStorageManager>this.injector.get(LocalStorageManager);
        this.sessionManager = <SessionManager>this.injector.get(SessionManager);
        // this.uiHelper = <UIHelper>this.injector.get(UIHelper);

        //start alarmEventsListener
        let alarmEventsListener = <AlarmEventsListener>this.injector.get(AlarmEventsListener);
        this.initOfflineJS();
    }

    ngOnChanges(e) {
        this.baseServices.logger.info('ROOOOOOOOOOOOOOOOOT CHANGED', e);
        this.permManager.checkPermissions(this.$container);
    }

    public refresh() {
        this.baseServices.logger.info('Refresh Root Component');
        this.permManager.checkPermissions(this.$container);
    }

    ngAfterViewInit(): any {

        //sessionTimer will be initialized after view is ready
        this.sessionIdleTimeout.init();

        //sayfa yenilendigi zaman ilk calismasi icin
        this.authenticationManager.init();

        //var permManager = this.injector.get(PermManager);
        this.permManager.checkPermissions(this.$container);

        setTimeout(()=> { $('.body').fadeIn(500); },100);

    }

    showVirtualTopologyList() {
        console.log("Show Virtual Topology List");
        this.showTopologyList(TOPOLOGYTYPE.VIRTUAL);

    }

    showPhysicalTopologyList() {
        console.log("Show Physical Topology List");
        this.showTopologyList(TOPOLOGYTYPE.PHYSICAL);
    }

    showTopologyList(topologyType: TOPOLOGYTYPE) {
        this.baseServices.logger.debug("showTopologyList", topologyType);
        this.sharedService.showModal(VtnListPopup, {
            topologyType: topologyType
        }, (result) => {
            //debugger;
            if (result.isSuccess) {
                this.baseServices.logger.debug("Item selected", result.data);
                let topologyInfo = <TopologyInfoDTO> result.data;
                // setTimeout(()=> {
                //     this.getTopology( topologyInfo.type, topologyInfo.id || topologyInfo.name ); //topologyInfo.if olmali
                // }, 500);
            }
        });

    }

    /**
     * Component Translation function. Use this function to translate component related string.
     * You should have set a basekey using setI18NKey function, before using this function.
     * @param i18nkey Key to be translated.
     * @returns {string} Translated value.
     */
    t(i18nkey: string, options?: any) {
        let finalKey = i18nkey;
        let translated = $.t(finalKey, options);
        return (translated != 'null' && finalKey != translated) ? translated : '';
    }

    public initOfflineJS() {
        if (Offline) {
            Offline.options = {
                // Should we check the connection status immediatly on page load.
                checkOnLoad: true,
                //not works because of CORS
                //checks: {xhr: { url: ()=> { return this.apiHelper.getServerPingAddress(); },  withCredentials: true }},
                checks: {
                    image: {
                        url: () => {
                            return this.apiHelper.getServerPingAddress();
                        }
                    }, active: 'image'
                },
                // Should we monitor AJAX requests to help decide if we have a connection.
                interceptRequests: true,

//                // Should we automatically retest periodically when the connection is down (set to false to disable).
//                reconnect: {
//                    // How many seconds should we wait before rechecking.
//                    initialDelay: 3,
//                    // How long should we wait between retries.
//                    delay: 1
//                },

                // Should we store and attempt to remake requests which fail while the connection is down.
                requests: true,

                // Should we show a snake game while the connection is down to keep the user entertained?
                // It's not included in the normal build, you should bring in js/snake.js in addition to
                // offline.min.js.
                game: false
            };
            setInterval(() => {
                if (Offline.state === 'up')
                    Offline.check();
            }, 30000);
        }
    }
}


//enableProdMode();
