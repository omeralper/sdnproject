///<reference path="Overlay/OverlayEditPopup.ts"/>
/**
 * Created by ekinca on 2.01.2017.
 */
import {NgModule}      from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}   from '@angular/forms';
import {PolicyRoutingModule} from "./PolicyRoutingModule";
import {PreliminaryPathPage} from "./PreliminaryPath/PreliminaryPathPage";
import {ServiceQualityPage} from "./ServiceQuality/ServiceQualityPage";
import {AccessControlPage} from "./AccessControl/AccessControlPage";
import {TrafficCategoriesPage} from "./TrafficCategories/TrafficCategoriesPage";
import {PolicyApi} from "../../swagger/PolicyApi";
import {SharedModule} from "../shared/SharedModule";
import {OverlayListPage} from "./Overlay/OverlayListPage";
import {AccessControlEditPopup} from "./AccessControl/AccessControlEditPopup";
import {ServiceQualityEditPopup} from "./ServiceQuality/ServiceQualityEditPopup";
import {PreliminaryPathPopup} from "./PreliminaryPath/PreliminaryPathPopup";
import {OverlayEditPopup} from "./Overlay/OverlayEditPopup";
import {ProactivePathListPopup} from "./PreliminaryPath/ProactivePathListPopup";
import {TrafficCategoryEditPopup} from "./TrafficCategories/TrafficCategoryEditPopUp";
import {AccessRule} from "./AccessControl/AccessRule";
import {SFCPage} from "./SFC/SFCPage";
import {SfcApi} from "../../swagger/SfcApi";
import {SFCEditPopup} from "./SFC/SFCEditPopup";
import {EmergencyListPage} from "./Emergency/EmergencyListPage";
import {EmergencyEditPopup} from "./Emergency/EmergencyEditPopup";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PolicyRoutingModule,
        SharedModule
    ],
    declarations: [
        AccessRule,
        TrafficCategoriesPage,
        AccessControlPage,
        ServiceQualityPage,
        PreliminaryPathPage,
        OverlayListPage,
        AccessControlEditPopup,
        ServiceQualityEditPopup,
        PreliminaryPathPopup,
        ProactivePathListPopup,
        TrafficCategoryEditPopup,
        OverlayEditPopup,
        SFCPage,
        SFCEditPopup,
        EmergencyListPage,
        EmergencyEditPopup

    ],
    providers: [
        PolicyApi
    ],
    entryComponents: [
        AccessControlEditPopup,
        ServiceQualityEditPopup,
        PreliminaryPathPopup,
        ProactivePathListPopup,
        TrafficCategoryEditPopup,
        OverlayEditPopup,
        SFCEditPopup,
        EmergencyEditPopup
    ]
})
export class PolicyModule {
}
