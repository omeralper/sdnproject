/**
 * Created by ekinca on 2.01.2017.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {SettingsRoutingModule} from "./SettingsRoutingModule";
import {NetworkDeviceList} from "./NetworkDevice/NetworkDeviceList";
import {LogLevelListPage} from "./LogLevels/LogLevelListPage/LogLevelListPage";
import {VersionListPageCode} from "./Versions/VersionListPageCode";
import {SharedModule} from "../shared/SharedModule";
import {DhcpList} from "./Dhcp/Scope/List/DhcpList";
import {DhcpApi} from "../../swagger/DhcpApi";
import {ConfigApi} from "../../swagger/ConfigApi";
import {SystemParametersListPage} from "./System/Parameters/SystemParametersListPage/SystemParametersListPage";
import {SystemDefinitionsListPage} from "./System/Definitions/SystemDefinitionsListPage";
import {DhcpEdit} from "./Dhcp/Scope/Edit/DhcpEdit";
import {SystemDefinitionsEditPopup} from "./System/Definitions/SystemDefinitionsEditPopup/SystemDefinitionsEditPopup";
import {SystemParametersEditPopup} from "./System/Parameters/SystemParametersEditPopup/SystemParametersEditPopup";
import {NetworkDeviceEditPopup} from "./NetworkDevice/NetworkDeviceEditPopup";
import {LogLevelEditPopup} from "app/modules/settings/LogLevels/LogLevelEditPopup/LogLevelEditPopup";
import {DhcpPropertiesList} from "./Dhcp/Scope/Edit/DhcpPropertiesList";
import {NetworkDeviceDetails} from "./NetworkDevice/NetworkDeviceDetails";
import {DhcpScopeInfo} from "./Dhcp/Scope/Edit/MainScopeInfo/DhcpScopeInfo";
import {DhcpOption} from "./Dhcp/Scope/Edit/Option/DhcpOption";
import {DhcpRange} from "./Dhcp/Scope/Edit/AddressPool/DhcpRange";
import {LogApi} from "../../swagger/LogApi";
import {PrognetVersionListApi} from "../../swagger/PrognetVersionListApi";
import {DhcpAssignedAddressesPopup} from "./Dhcp/Scope/DhcpAssignedAddressesPopup";
import {IpLocationApi} from "../../swagger/IpLocationApi";
import {IpLocationEditPopup} from "./IpLocation/IpLocationEditPopup/IpLocationEditPopup";
import {IpLocationListPage} from "./IpLocation/IpLocationListPage/IpLocationListPage";
import {DhcpAddressPoolListPage} from "./Dhcp/DhcpConfiguration/DhcpAddressPoolListPage";
import {DhcpConfiguration} from "./Dhcp/DhcpConfiguration/DhcpConfiguration";
import {DhcpAddressPoolEditPopup} from "./Dhcp/DhcpConfiguration/DhcpAddressPoolEditPopup";
import {WlanLinksList} from "./WlanLinks/WlanLinksList";
import {WlanLinksEditPopup} from "app/modules/settings/WlanLinks/WlanLinksEditPopup";
import {WanPortInfoApi} from "../../swagger/WanPortInfoApi";
import {ClusterApi} from "../../swagger/ClusterApi";
import {MonitorList} from "./Monitor/MonitorList";
import {MonitorMetaDataEditPopup} from "./Monitor/MonitorMetaDataEditPopup";
import {MonitorApi} from "../../swagger/MonitorApi";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SettingsRoutingModule,
        SharedModule
    ],
    declarations: [
        NetworkDeviceList,
        LogLevelListPage,
        VersionListPageCode,
        DhcpList,
        DhcpPropertiesList,
        SystemParametersListPage,
        SystemDefinitionsListPage,
        WlanLinksList,
        WlanLinksEditPopup,
        DhcpEdit,
        SystemDefinitionsEditPopup,
        SystemParametersEditPopup,
        NetworkDeviceEditPopup,
        LogLevelEditPopup,
        NetworkDeviceDetails,
        DhcpScopeInfo,
        DhcpOption,
        DhcpRange,
        DhcpAssignedAddressesPopup,
        IpLocationEditPopup,
        IpLocationListPage,
	    DhcpAddressPoolListPage,
	    DhcpConfiguration,
	    DhcpAddressPoolEditPopup,
	    MonitorList,
	    MonitorMetaDataEditPopup
    ],
    providers: [
        DhcpApi,
        ConfigApi,
        LogApi,
        PrognetVersionListApi,
        IpLocationApi,
        WanPortInfoApi,
        ClusterApi,
	    MonitorApi
    ],
    entryComponents: [
        SystemDefinitionsEditPopup,
        SystemParametersEditPopup,
        NetworkDeviceEditPopup,
        LogLevelEditPopup,
        DhcpEdit,
        DhcpAssignedAddressesPopup,
        IpLocationEditPopup,
	    DhcpAddressPoolEditPopup,
        WlanLinksEditPopup,
	    MonitorMetaDataEditPopup
    ]
})
export class SettingsModule {
}
