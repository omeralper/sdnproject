/**
 * Created by omeroz on 04.01.2017.
 */
import {NgModule}      from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}   from '@angular/forms';
import {SharedModule} from "../shared/SharedModule";
import {StatisticsRoutingModule} from "./StatisticsRoutingModule";
import {Statistics} from "./Main/Statistics";
import {RAMGraph} from "./RAMGraph/RAMGraph";
import {CPUGraph} from "./CPUGraph/CPUGraph";
import {SwitchGraph} from "./SwitchGraph/SwitchGraph";
import {VirtualNetworkGraph} from "./VirtualNetworkGraph/VirtualNetworkGraph";
import {RandomStatisticsGenerator} from "./Services/RandomStatisticsGenerator";
import {TsdbServerProxy} from "./Services/TsdbServerProxy";
import {TSDBApi} from "../../swagger/TSDBApi";
import {GraphContainer} from "./Main/GraphContainer";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        StatisticsRoutingModule,
        SharedModule
    ],
    declarations: [
        Statistics,
        GraphContainer,
        RAMGraph,
        CPUGraph,
        SwitchGraph,
        VirtualNetworkGraph,
    ],
    entryComponents: [CPUGraph],
    providers: [
        TSDBApi,
        RandomStatisticsGenerator,
        TsdbServerProxy
    ],
})
export class StatisticsModule {
}