/**
 * Created by omeroz on 30.12.2016.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NacUserListPage} from "./NacUserListPage/NacUserListPage";
import {NacProfileListPage} from "./NacProfileListPage/NacProfileListPage";
import {NacUserDeviceApi} from "../../swagger/NacUserDeviceApi";
import {NacDeviceApi} from "../../swagger/NacDeviceApi";
import {NacGroupApi} from "../../swagger/NacGroupApi";
import {NacUserApi} from "../../swagger/NacUserApi";
import {NacDeviceListPage} from "./NacDeviceListPage/NacDeviceListPage";
import {NacRoutingModule} from "./NacRoutingModule";
import {NacUserSearch} from "./NacUserSearchPage/NacUserSearch";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/SharedModule";
import {DevicesOfUserList} from "./DevicesOfUserList/DevicesOfUser";
import {NacManager} from "./NacManager";
import {NacUserAppListPage} from "./NacUserAppListPage/NacUserAppListPage";
import {NacAccessPortListPopup} from "./NacAccessPortListPopup/NacAccessPortListPopup";
import {NacDeviceEditPopup} from "./NacDeviceEditPopup/NacDeviceEditPopup";
import {NacProfileEditPopup} from "./NacProfileEditPopup/NacProfileEditPopup";
import {NacUserEditPopup} from "./NacUserEditPopup/NacUserEditPopup";
import {NacUserPasswordPopup} from "./NacUserPasswordPopup/NacUserPasswordPopup";
import {NacUserStatisticsPopup} from "./NacUserStatisticsPopup/NacUserStatisticsPopup";
import {NacUserDeviceEditPopup} from "./NacUserDeviceEditPopup/NacUserDeviceEditPopup";
import {NacUserAppEditPopup} from "./NacUserAppEditPopup/NacUserAppEditPopup";
import {NacGroupDevicesListPopup} from "./NacGroupDevicesListPopup/NacGroupDevicesListPopup";
import {NacAuthApi} from "../../swagger/NacAuthApi";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        NacRoutingModule
    ],
    declarations: [
        NacDeviceListPage,
        NacProfileListPage,
        NacUserListPage,
        NacUserSearch,
        DevicesOfUserList,
        NacUserAppListPage,
        NacAccessPortListPopup,
        NacDeviceEditPopup,
        NacProfileEditPopup,
        NacUserEditPopup,
        NacUserPasswordPopup,
        NacUserStatisticsPopup,
        NacUserDeviceEditPopup,
        NacUserAppEditPopup,
        NacGroupDevicesListPopup
    ],
    providers: [
        NacUserApi,
        NacGroupApi,
        NacDeviceApi,
        NacUserDeviceApi,
        NacManager,
        NacAuthApi
    ],
    entryComponents: [
        NacAccessPortListPopup,
        NacDeviceEditPopup,
        NacProfileEditPopup,
        NacUserEditPopup,
        NacUserPasswordPopup,
        NacUserStatisticsPopup,
        NacUserDeviceEditPopup,
        NacUserAppEditPopup,
        NacGroupDevicesListPopup
    ]
})
export class NacModule {
}
