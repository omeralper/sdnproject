/**
 * Created by ekinca on 2.01.2017.
 */
import {NgModule}      from '@angular/core';
import {CommonModule} from '@angular/common';
import {LogsRoutingModule} from "./LogsRoutingModule";
import {Logs} from "./Logs";
import {LogProvider} from "./LogsService";
import {LogsPopup} from "./LogsPopup";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    LogsRoutingModule
  ],
  declarations: [
    Logs,
    LogsPopup
  ],
  providers: [
    LogProvider,
  ],
  entryComponents: [
    LogsPopup
  ]
})
export class LogsModule {
}
