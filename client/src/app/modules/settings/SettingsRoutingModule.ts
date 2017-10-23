/**
 * Created by ekinca on 2.01.2017.
 */
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {NetworkDeviceList} from "./NetworkDevice/NetworkDeviceList";
import {LogLevelListPage} from "./LogLevels/LogLevelListPage/LogLevelListPage";
import {VersionListPageCode} from "./Versions/VersionListPageCode";
import {DhcpList} from "./Dhcp/Scope/List/DhcpList";
import {SystemDefinitionsListPage} from "./System/Definitions/SystemDefinitionsListPage";
import {SystemParametersListPage} from "./System/Parameters/SystemParametersListPage/SystemParametersListPage";
import {IpLocationListPage} from "./IpLocation/IpLocationListPage/IpLocationListPage";
import {DhcpConfiguration} from "./Dhcp/DhcpConfiguration/DhcpConfiguration";
import {WlanLinksList} from "./WlanLinks/WlanLinksList";
import {MonitorList} from "./Monitor/MonitorList";

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: 'settings',
				children: [
					{path: '', pathMatch: 'full', redirectTo: 'versionslist'},
					{path: 'versionslist', component: VersionListPageCode},
					{path: 'loglevelslist', component: LogLevelListPage},
					{path: 'networkDevice', component: NetworkDeviceList},
					{path: 'dhcplist', component: DhcpList},
					{path: 'systemdefinitionlist', component: SystemDefinitionsListPage},
					{path: 'systemconfiglist', component: SystemParametersListPage},
					{path: 'iplocationlist', component: IpLocationListPage},
					{path: 'dhcpconfiguration', component: DhcpConfiguration},
					{path: 'wlanlist', component: WlanLinksList},
					{path: 'monitor', component: MonitorList},
				]
			}
		])
	],
	exports: [
		RouterModule
	]
})
export class SettingsRoutingModule {
}
