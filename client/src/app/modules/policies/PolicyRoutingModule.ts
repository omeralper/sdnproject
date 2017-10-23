/**
 * Created by ekinca on 2.01.2017.
 */
import { NgModule }             from '@angular/core';
import { RouterModule } from '@angular/router';
import {PreliminaryPathPage} from "./PreliminaryPath/PreliminaryPathPage";
import {ServiceQualityPage} from "./ServiceQuality/ServiceQualityPage";
import {AccessControlPage} from "./AccessControl/AccessControlPage";
import {TrafficCategoriesPage} from "./TrafficCategories/TrafficCategoriesPage";
import {OverlayListPage} from "./Overlay/OverlayListPage";
import {SFCPage} from "./SFC/SFCPage";
import {EmergencyListPage} from "./Emergency/EmergencyListPage";



@NgModule({
    imports: [
        RouterModule.forChild([
          {
            path: 'policies',
            children: [
              {path: '', pathMatch: 'full', redirectTo: 'trafficcategories'},
              {path: 'trafficcategories', component: TrafficCategoriesPage},
              {path: 'accesscontrol', component: AccessControlPage},
              {path: 'servicequality', component: ServiceQualityPage},
              {path: 'preliminarypath', component: PreliminaryPathPage},
              {path: 'overlay', component: OverlayListPage},
              {path: 'sfc', component: SFCPage},
              {path: 'emergency', component: EmergencyListPage}
            ]
          }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class PolicyRoutingModule { }
