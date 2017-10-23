/**
 * Created by omeroz on 04.01.2017.
 */
import {NgModule}      from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}   from '@angular/forms';
import {SharedModule} from "../shared/SharedModule";
import {StatisticsRoutingModule} from "./StatisticsRoutingModule";
import {Statistics} from "./Statistics";
import {RAMGraph} from "./RAMGraph/RAMGraph";
import {CPUGraph} from "./CPUGraph/CPUGraph";
import {SwitchGraph} from "./SwitchGraph/SwitchGraph";
import {VirtualNetworkGraph} from "./VirtualNetworkGraph/VirtualNetworkGraph";
import {RandomStatisticsGenerator} from "./Services/RandomStatisticsGenerator";
import {TsdbServerProxy} from "./Services/TsdbServerProxy";
import {TSDBApi} from "../../swagger/TSDBApi";
import {TableStatGraph} from "./TableStatGraph/TableStatGraph";
import {UserGraph} from "./UserGraph/UserGraph";
import {DiskGraph} from "./DiskGraph/DiskGraph";
import {GroupGraph} from "./GroupGraph/GroupGraph";
import {QueueGraph} from "./QueueGraph/QueueGraph";
import {MiscGraph} from "./MiscGraph/MiscGraph";
import {RestcallGraph} from "./RestcallGraph/RestcallGraph";
import {LinkGraph} from "./LinkGraph/LinkGraph";
import {GenericGraph} from "./GenericGraph/GenericGraph";
import {SwitchGraphPopup} from "./SwitchGraph/SwitchGraphPopup";
import {StatisticsService} from "./Services/StatisticsService";
import {LinkGraphPopup} from "./LinkGraph/LinkGraphPopup";
import {UserGraphPopup} from "./UserGraph/UserGraphPopup";
import {MeterGraph} from "./MeterGraph/MeterGraph";
import {PortGraph} from "./PortGraph/PortGraph";
import {StatisticsMultiSelect} from "./Components/StatisticsMultiSelect";
import {MetricSelect} from "./Components/MetricSelect";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        StatisticsRoutingModule,
        SharedModule
    ],
    exports:[
	    SwitchGraphPopup,
	    LinkGraphPopup,
	    UserGraphPopup
    ],
    declarations: [
        Statistics,
        RAMGraph,
        CPUGraph,
        SwitchGraph,
        VirtualNetworkGraph,
	    TableStatGraph,
	    UserGraph,
	    DiskGraph,
	    GroupGraph,
	    QueueGraph,
	    MiscGraph,
	    RestcallGraph,
	    LinkGraph,
	    MeterGraph,
	    GenericGraph,
	    SwitchGraphPopup,
	    LinkGraphPopup,
	    UserGraphPopup,
	    PortGraph,
	    StatisticsMultiSelect,
	    MetricSelect
    ],
    providers: [
        TSDBApi,
        RandomStatisticsGenerator,
        TsdbServerProxy,
	    StatisticsService
    ],
	entryComponents: [
		SwitchGraphPopup,
		LinkGraphPopup,
		UserGraphPopup
	]
})
export class StatisticsModule {
}