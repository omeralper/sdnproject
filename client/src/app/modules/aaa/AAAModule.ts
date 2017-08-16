/**
 * Created by omeroz on 02.01.2017.
 */
import {NgModule}      from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}   from '@angular/forms';
import {AAARoutingModule} from "./AAARoutingModule";
import {AAAServerListPage} from "../nac/AAAServerListPage/AAAServerListPage";
import {UserFlowStats} from "./UserLogListPage/UserFlowStatsPage";
import {UserListPageCode} from "./UserListPage/UserListPageCode";
import {RoleListPageCode} from "./RoleListPage/RoleListPageCode";
import {AAAUsersApi} from "../../swagger/AAAUsersApi";
import {AAAServerApi} from "../../swagger/AAAServerApi";
import {AAAPermissionsApi} from "../../swagger/AAAPermissionsApi";
import {AAARolesApi} from "../../swagger/AAARolesApi";
import {SharedModule} from "../shared/SharedModule";
import {ThirdPartyList} from "./ThirdParty/ThirdPartyList";
import {AppsApi} from "../../swagger/AppsApi";
import {PasswordPopup} from "./PasswordPopup/PasswordPopup";
import {AAAServerEditPopup} from "../nac/AAAServerEditPopup/AAAServerEditPopup";
import {UserEditPopup} from "./UserEditPopup/UserEditPopup";
import {RemindPasswordPopup} from "../naclogin/guest/RemindPasswordPopup";
import {GuestSignupPopup} from "../naclogin/guest/GuestSignupPopup";
import {RoleEditPopup} from "./RoleEditPopup/RoleEditPopup";
import {ThirdPartyEditPopup} from "./ThirdParty/ThirdPartyEditPopup";
import {AAAApi} from "../../swagger/AAAApi";
import {CallReportsPopUp} from "./ThirdParty/CallReportsPopUp";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        AAARoutingModule
    ],
    declarations: [
        RoleListPageCode,
        UserListPageCode,
        UserFlowStats,
        AAAServerListPage,
        ThirdPartyList,
        // LoginPageCode,
        PasswordPopup,
        RoleEditPopup,
        UserEditPopup,
        AAAServerEditPopup,
        RemindPasswordPopup,
        GuestSignupPopup,
        ThirdPartyEditPopup,
        CallReportsPopUp
    ],
    providers: [
        AAAUsersApi,
        AAAServerApi,
        AAARolesApi,
        AAAPermissionsApi,
        AppsApi,
        AAAApi
    ],
    entryComponents: [
        PasswordPopup,
        RoleEditPopup,
        UserEditPopup,
        AAAServerEditPopup,
        RemindPasswordPopup,
        GuestSignupPopup,
        ThirdPartyEditPopup,
        CallReportsPopUp
    ]
})
export class AAAModule {
}
