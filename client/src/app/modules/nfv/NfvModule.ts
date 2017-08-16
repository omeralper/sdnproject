/**
 * Created by omeroz on 4/5/2017.
 */

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/SharedModule";
import {NfvRoutingModule} from "./NfvRoutingModule";
import {NsdListPage} from "./Nsd/NsdListPage";
import {NsrListPage} from "./Nsr/NsrListPage";
import {VnfListPage} from "./Vnf/VnfListPage";
import {NFVApi} from "../../swagger/NFVApi";
import {NsdEditPopup} from "./Nsd/NsdEditPopup";
import {StartNsdPopup} from "./Nsd/StartNsdPopup";
import {VnfEditPopup} from "./Vnf/VnfEditPopup";
import {NsrViewPopup} from "./Nsr/NsrViewPopup";
import {VnfInstanceListPage} from "./VnfInstance/VnfInstanceListPage";
import {VnfInstanceFailoverPopup} from "./VnfInstance/VnfInstanceFailoverPopup";
import {VnfInstanceViewPopup} from "./VnfInstance/VnfInstanceViewPopup";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        NfvRoutingModule
    ],
    declarations: [
        NsdListPage,
        NsrListPage,
        VnfListPage,
        NsdEditPopup,
        StartNsdPopup,
        VnfEditPopup,
	    NsrViewPopup,
        VnfInstanceListPage,
        VnfInstanceFailoverPopup,
        VnfInstanceViewPopup
    ],
    providers: [
        NFVApi
    ],
    entryComponents: [
        NsdEditPopup,
        StartNsdPopup,
        VnfEditPopup,
	    NsrViewPopup,
        VnfInstanceFailoverPopup,
        VnfInstanceViewPopup
    ]
})
export class NfvModule {
}
