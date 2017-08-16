/**
 * Created by ekinca on 2.01.2017.
 */
import { NgModule }             from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlarmLogListPage } from "./AlarmLogListPage/AlarmLogListPage";
import { AlarmListPage } from "./AlarmListPage/AlarmListPage";
import { AlarmSourceListPage } from "./AlarmSourceListPage/AlarmSourceListPage";
import {AlarmNotifListPage} from "./AlarmNotifListPage/AlarmNotifListPage";

@NgModule({
    imports: [
        RouterModule.forChild([
          {
            path: 'alarms',
            children: [
              {path: '', pathMatch: 'full', redirectTo: 'alarmlist'},
              {path: 'alarmlist', component: AlarmListPage},
              {path: 'alarmloglist', component: AlarmLogListPage},
              {path: 'alarmsourcelist', component: AlarmSourceListPage},
              {path: 'alarmnotiflist', component: AlarmNotifListPage}
            ]
          }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AlarmRoutingModule { }
