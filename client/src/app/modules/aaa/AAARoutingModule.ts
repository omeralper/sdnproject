/**
 * Created by omeroz on 02.01.2017.
 */

import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router';
import {AAAServerListPage} from "../nac/AAAServerListPage/AAAServerListPage";
import {UserFlowStats} from "./UserLogListPage/UserFlowStatsPage";
import {UserListPageCode} from "./UserListPage/UserListPageCode";
import {RoleListPageCode} from "./RoleListPage/RoleListPageCode";
import {ThirdPartyList} from "./ThirdParty/ThirdPartyList";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'aaa',
        children: [
          {path: '', pathMatch: 'full', redirectTo: 'aaauserslist'},
          {path: 'aaauserslist', component: UserListPageCode},
          {path: 'aaaroleslist', component: RoleListPageCode},
          {path: 'aaauserloglist', component: UserFlowStats},
          {path: 'aaaserverlist', component: AAAServerListPage},
          {path: 'thirdpartylist', component: ThirdPartyList}
        ]
      }

    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AAARoutingModule {
}
