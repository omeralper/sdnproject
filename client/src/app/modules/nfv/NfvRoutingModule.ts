/**
 * Created by omeroz on 4/5/2017.
 */
import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router';
import {NsdListPage} from "./Nsd/NsdListPage";
import {NsrListPage} from "./Nsr/NsrListPage";
import {VnfListPage} from "./Vnf/VnfListPage";
import {VnfInstanceListPage} from "./VnfInstance/VnfInstanceListPage";
import {VimStatistics} from "./Statistics/VimStatistics";

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: 'nfv',
				children: [
					{path: '', pathMatch: 'full', redirectTo: 'network_service_decriptor'},
					{path: 'network_service_decriptor', component: NsdListPage},
					{path: 'network_service_record', component: NsrListPage},
					{path: 'virtual_network_function', component: VnfListPage},
					{path: 'vnf_instance', component: VnfInstanceListPage},
					{path: 'statistics', component: VimStatistics},
				]
			}
		])
	],
	exports: [
		RouterModule
	]
})
export class NfvRoutingModule {
}

