/**
 * Created by omeroz on 30.12.2016.
 */

import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router';
import {NacUserSearch} from "./NacUserSearchPage/NacUserSearch";
import {NacUserListPage} from "./NacUserListPage/NacUserListPage";
import {NacProfileListPage} from "./NacProfileListPage/NacProfileListPage";
import {NacDeviceListPage} from "./NacDeviceListPage/NacDeviceListPage";
import {DevicesOfUserList} from "./DevicesOfUserList/DevicesOfUser";
import {NacUserAppListPage} from "./NacUserAppListPage/NacUserAppListPage";

@NgModule({
    imports: [
        RouterModule.forChild([
          {
            path: 'nac',
            children: [
              {path: '', pathMatch: 'full', redirectTo: 'nacprofileslist'},
              {path: 'nacprofileslist', component: NacProfileListPage},
              {path: 'nacuserslist', component: NacUserListPage},
              {path: 'nacusersearch', component: NacUserSearch},
              {path: 'nacdeviceslist', component: NacDeviceListPage},
              {path: 'devicesofuser', component: DevicesOfUserList},
              {path: 'nacuserapplist', component: NacUserAppListPage}
            ]
          }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class NacRoutingModule {
}

