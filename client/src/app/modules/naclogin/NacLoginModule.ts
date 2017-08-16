/**
 * Created by omeroz on 29.12.2016.
 */
import { NgModule}      from "@angular/core";
import {CommonModule} from '@angular/common';
import { FormsModule } from "@angular/forms";
// import { RouterModule } from '@angular/router';

import {NacLoginSuccess} from "./success/NacLoginSuccess";
import {NacAuthenticator} from "./component/NacAuthenticator";
import {NacSessionManager} from "./component/NacSessionManager";
import {NacLoginRoutingModule} from "./NacLoginRoutingModule";
import {NacLoginComponent} from "./component/NacLoginComponent";
import {SharedModule} from "../shared/SharedModule";
import {NacAuthApi} from "../../swagger/NacAuthApi";
import {AuthGuard} from "./AuthGuard";
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        NacLoginRoutingModule
    ],
    exports: [
        NacLoginComponent,
        NacLoginSuccess
    ],
    declarations: [
        NacLoginComponent,
        NacLoginSuccess,
    ],
    providers:[
        NacAuthenticator,
        NacSessionManager,
        NacAuthApi,
	    AuthGuard
    ]
})
export class NacLoginModule { }
