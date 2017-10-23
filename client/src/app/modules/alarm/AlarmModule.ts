/**
 * Created by ekinca on 2.01.2017.
 */
import {NgModule}      from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}   from '@angular/forms';
import {AlarmRoutingModule} from "./AlarmRoutingModule";
import {AlarmLogListPage} from "./AlarmLogListPage/AlarmLogListPage";
import {AlarmListPage} from "./AlarmListPage/AlarmListPage";
import { AlarmSourceListPage } from "./AlarmSourceListPage/AlarmSourceListPage";
import {SharedModule} from "../shared/SharedModule";
import {AlarmLogListPopup} from "./AlarmLogListPopup/AlarmLogListPopup";
import {AlarmNotifListPage} from "./AlarmNotifListPage/AlarmNotifListPage";
import {AlarmSourceEditPopup} from "./AlarmSourceEditPopup/AlarmSourceEditPopup";
import {AlarmNotifEditPopup} from "./AlarmNotifEditPopup/AlarmNotifEditPopup";
import {AlarmApi} from "../../swagger/AlarmApi";
import {AlarmEventsListener} from "./Core/AlarmEventsListener";
import {AlarmLogListProvider} from "./AlarmLogListPage/AlarmLogListProvider";
import {AlarmResolvePopup} from "./AlarmResolvePopup/AlarmResolvePopup";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        AlarmRoutingModule
    ],
    declarations: [
        AlarmLogListPage,
        AlarmListPage,
        AlarmSourceListPage,
        AlarmNotifListPage,
        AlarmLogListPopup,
        AlarmSourceEditPopup,
        AlarmNotifEditPopup,
        AlarmResolvePopup
    ],
    providers: [
        AlarmLogListProvider,
        AlarmEventsListener,
        AlarmApi
    ],
    entryComponents: [
        AlarmLogListPopup,
        AlarmSourceEditPopup,
        AlarmNotifEditPopup,
        AlarmResolvePopup
    ]
})
export class AlarmModule {
}
