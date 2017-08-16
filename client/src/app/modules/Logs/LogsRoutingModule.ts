/**
 * Created by ekinca on 2.01.2017.
 */
import { NgModule }             from '@angular/core';
import { RouterModule } from '@angular/router';
import {Logs} from "./Logs";

@NgModule({
    imports: [
        RouterModule.forChild(
            [
              {
                path: 'logslist',
                children: [
                  {path: '', component: Logs},
                ]
              }
            ]
        )
    ],
    exports: [
        RouterModule
    ]
})
export class LogsRoutingModule { }
