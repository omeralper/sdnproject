/**
 * Created by omeroz on 29.12.2016.
 */
import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router';
import {NacLoginSuccess} from "./success/NacLoginSuccess";
import {NacLoginComponent} from "./component/NacLoginComponent";
import {AuthGuard} from "./AuthGuard";

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: 'naclogin',
				children: [
					{path: '', pathMatch: 'full', redirectTo: 'login'},
					{path: 'login', component: NacLoginComponent},
					{path: 'nacloginsuccess', component: NacLoginSuccess, canActivate: [AuthGuard]}
				]
			}
		])
	],
	exports: [
		RouterModule
	]
})
export class NacLoginRoutingModule {
}
