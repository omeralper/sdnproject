/**
 * Created by ekinca on 28.12.2016.
 */
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserXhr, HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {Logger} from "./modules/Logger";
import {FlowsApi} from "./swagger/FlowsApi";
import {i18nModule} from "./modules/i18nModule";
import {SharedService} from "./modules/SharedService";
import {ModalComponent} from "./modules/ModalComponent";
import {BaseServices} from "./modules/BaseServices";
import {Utils} from "./modules/Utils";
import {PageServices} from "./modules/PageServices";
import {ApiHelper} from "./modules/ApiHelper";
import {PermManager} from "./modules/PermManager/PermManager";
import {LocalStorageManager} from "./modules/LocalStorageManager";
import {SessionManager} from "./modules/SessionManager";
import {AlarmEventsListener} from "./modules/alarm/Core/AlarmEventsListener";
import {CORSBrowserXHr} from "./modules/CORSBrowserXHr";
import {MvtnApi} from "./swagger/MvtnApi";
import {SessionIdleTimeout} from "./modules/SessionIdleTimeout";
import {AlarmLogListProvider} from "./modules/alarm/AlarmLogListPage/AlarmLogListProvider";
import {TopologyEventsListenerFactory} from "./modules/TopologyEventsListener";
import {AuthenticationManager} from "./modules/AuthenticationManager";
import {UIHelper} from "./modules/UIHelper";
import {WelcomePage} from "./modules/welcomepage/welcomepage";
import {UIHelperTest} from "./test/modules/UIHelperTest";
import {ProactivePathPolicyApi} from "./swagger/ProactivePathPolicyApi";
import {DocumentConverter} from "./modules/DocumentConverter";
import {SharedModule} from "./modules/shared/SharedModule";
import {CanDeactivateGuard} from "./CanDeactivateGuard";
import {EventsManager} from "./modules/EventsManager";
import {GenericEventProcessor} from "./GenericEventProcessor";
import {MvtnEventProcessor} from "./modules/mvtn/MvtnEventProcessor";
import {AlarmEventProcessor} from "./modules/alarm/Core/AlarmEventProcessor";
import {EdrListAndSearchApi} from "./swagger/EdrListAndSearchApi";
import {TopMenuComponent} from "./commons/top-menu/top-menu.component";
import {AlarmNotificationComponent} from "./commons/top-menu/alarmNotification.component";
import {TopMenuTreeComponent} from "./commons/top-menu/top-menu-tree.component";
import {NacModule} from "./modules/nac/NacModule";
import {AlarmModule} from "./modules/alarm/AlarmModule";
import {StatisticsModule} from "./modules/statistics/StatisticsModule";
import {NacLoginModule} from "./modules/naclogin/NacLoginModule";
import {NfvModule} from "./modules/nfv/NfvModule";
import {TopologyModule} from "./modules/topology/TopologyModule";
import {LogsModule} from "./modules/Logs/LogsModule";
import {SettingsModule} from "./modules/settings/SettingsModule";
import {PolicyModule} from "./modules/policies/PolicyModule";
import {AAAModule} from "./modules/aaa/AAAModule";
import {LoginPageCode} from "./modules/aaa/LoginPage/LoginPageCode";
import {LogApi} from "./swagger/LogApi";
import {EmergencyPolicyApi} from "./swagger/EmergencyPolicyApi";
import {WanMvtnInfoApi} from "./swagger/WanMvtnInfoApi";
import {AlarmEventNotificationComponent} from "./commons/top-menu/alarmEventNotification.component";

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        SharedModule,
        FormsModule,
        HttpModule,
        NacModule,
        NacLoginModule,
        AAAModule,
        PolicyModule,
        AlarmModule,
        SettingsModule,
        NfvModule,
        StatisticsModule,
        LogsModule,
        TopologyModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ModalComponent,
        TopMenuTreeComponent,
        TopMenuComponent,
        AlarmNotificationComponent,
        AlarmEventNotificationComponent,
        WelcomePage,
        UIHelperTest,
        LoginPageCode
    ],
    providers: [
        AlarmLogListProvider,
        SessionIdleTimeout,
        {provide: BrowserXhr, useClass: CORSBrowserXHr}, //useCredentials for cross browser requests
        {provide: 'ISessionInvalidator', useExisting: AuthenticationManager},
        i18nModule,
        Utils,
        UIHelper,
        ApiHelper,
        AuthenticationManager,
        PermManager,
        LocalStorageManager,
        EventsManager,
        SessionManager,
        BaseServices,
        SharedService,
        PageServices, // provide(SharedService, {useValue: sharedService}),
        AlarmEventsListener,
        TopologyEventsListenerFactory,
        Logger,
        DocumentConverter,

        //common APIs
        FlowsApi,
        LogApi,
        MvtnApi,
        WanMvtnInfoApi,
        ProactivePathPolicyApi,
        CanDeactivateGuard,
        //Event processors must be added like this. (ref: https://blog.thoughtram.io/angular2/2015/11/23/multi-providers-in-angular-2.html)
        {provide: EventsManager.EVENT_PROCESSOR, useClass: GenericEventProcessor, multi: true},//WARN: This must be first item
        {provide: EventsManager.EVENT_PROCESSOR, useClass: AlarmEventProcessor, multi: true},
        {provide: EventsManager.EVENT_PROCESSOR, useClass: MvtnEventProcessor, multi: true},
        EmergencyPolicyApi,
        EdrListAndSearchApi
    ],
    bootstrap: [AppComponent, ModalComponent]
})
export class AppModule {

}

