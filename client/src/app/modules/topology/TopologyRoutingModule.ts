/**
 * Created by ekinca on 29.12.2016.
 */
import {NgModule}             from '@angular/core';
import {RouterModule} from '@angular/router';
import {Topology} from "./view/TopologyPage";
import {VtnListPage} from "../mvtn/VtnListPage/VtnListPage";
import {NoTopologyPage} from "../errorpages/notopology/NoTopologyPage";
import {VtnReqListPage} from "../mvtn/VtnReqListPage/VtnReqListPage";
import {CanDeactivateGuard} from "../../CanDeactivateGuard";
import {ControllerManagement} from "./ControllerManagement/ControllerManagement";
import {BgpManagement} from "./Bgp/BgpManagement";
import {WanDomainList} from "./ControllerManagement/WanDomain/WanDomainList";
import {BgpFilter} from "./BgpFilter/BgpFilter";
import {WanVtnManagementList} from "app/modules/mvtn/WanVtnManagementListPage/WanVtnManagementList";


@NgModule({
	imports: [
		RouterModule.forChild(
			[{
				path: 'topology',
				children: [
					{path: '', pathMatch: 'full', redirectTo: 'view'},
					{path: 'view', component: Topology, canDeactivate: [CanDeactivateGuard]},
					//{path: '/trp', name: 'TurkeyTopology', component: TurkeyTopology},
					{path: 'topology_virtual_list', component: VtnListPage},
					{path: 'topology_virtual_req_list', component: VtnReqListPage},
					{path: 'notopology', component: NoTopologyPage},
					{path: 'controller_management', component: ControllerManagement},
					{path: 'bgp_management', component: BgpManagement},
					{path: 'bgp_filter', component: BgpFilter},
					{path: 'wan_domain', component: WanDomainList},
					{path: 'wan_vtn_management_list', component: WanVtnManagementList},
				]
			}]
		)
	],
	exports: [
		RouterModule
	]
})
export class TopologyRoutingModule {
}
