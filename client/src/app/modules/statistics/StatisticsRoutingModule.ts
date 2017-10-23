/**
 * Created by omeroz on 04.01.2017.
 */
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {Statistics} from "./Statistics";

@NgModule({
    imports: [
        RouterModule.forChild([
              {
                path: 'statistics',
                children: [
                  {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
                  {path: 'dashboard', component: Statistics}
                ]
              }
            ]
        )
    ],
    exports: [
        RouterModule
    ]
})
export class StatisticsRoutingModule {
}
