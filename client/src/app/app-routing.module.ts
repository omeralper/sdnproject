/**
 * Created by ekinca on 28.12.2016.
 */
import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router';
import {WelcomePage} from "./modules/welcomepage/welcomepage";
import {LoginPageCode} from "./modules/aaa/LoginPage/LoginPageCode";
import {UIHelperTest} from "./test/modules/UIHelperTest";

@NgModule({
    imports: [
        RouterModule.forRoot([

                // {
                //     path: 'nac',
                //     loadChildren: 'app/modules/nac/NacModule#NacModule'
                // },
                // {
                //     path: 'naclogin',
                //     loadChildren: 'app/modules/naclogin/NacLoginModule#NacLoginModule'
                // },
                // {
                //     path: 'aaa',
                //     loadChildren: 'app/modules/aaa/AAAModule#AAAModule'
                // },
                // {
                //     path: 'policies',
                //     loadChildren: 'app/modules/policies/PolicyModule#PolicyModule'
                // },
                // {
                //     path: 'alarms',
                //     loadChildren: 'app/modules/alarm/AlarmModule#AlarmModule'
                // },
                // {
                //     path: 'settings',
                //     loadChildren: 'app/modules/settings/SettingsModule#SettingsModule'
                // },
                // {
                //     path:'nfv',
                //     loadChildren: 'app/modules/nfv/NfvModule#NfvModule'
                // },
                //{path: 'UIHelperTest', component: UIHelperTest},
                {path: 'login/:token', component: LoginPageCode},
                {path: 'login', component: LoginPageCode},
                // {
                //     path: 'statistics',
                //     loadChildren: 'app/modules/statistics/StatisticsModule#StatisticsModule'
                // },
                // {
                //     path: 'logslist',
                //     loadChildren: 'app/modules/Logs/LogsModule#LogsModule'
                // },
                {path: 'welcome', component: WelcomePage},
                // {
                //     path: 'topology',
                //     loadChildren: 'app/modules/topology/TopologyModule#TopologyModule'
                // },
                {path: '**', redirectTo: 'login'},
            ]
            //,{useHash: true}
            )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
