/**
 * Created by omeroz on 03.01.2017.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputLengthValidator} from "./validators/InputLengthValidator";
import {InputRestricter} from "./validators/InputRestricter";
import {PasswordMatcher} from "./validators/PasswordMatcher";
import {PasswordChecker} from "./validators/PasswordChecker";
import {Validation} from "./validators/Validation";
import {DataTable} from "../../commons/DataTable/DataTable";
import {ClickStopPropagation} from "./common-directives/ClickStopPropogation";
import {Select2} from "./common-directives/Select2";
import {JsonEditor} from "./common-directives/JsonEditor";
import {EnumValuesPipe} from "./pipes/EnumPipe";
import {CommaPipe} from "./pipes/Comma";
import {KeysPipe} from "./Keys";
import {Tree} from "./components/Tree/Tree";
import {IpValidator} from "./common-directives/IpValidator";
import {Gauge} from "./components/Gauge/Gauge";
import {CounterUp} from "./components/CounterUp/CounterUp";
import {Monitor} from "./components/Monitor/Monitor";
import {FormsModule} from "@angular/forms";
import {MonitorEditPopup} from "./components/Monitor/MonitorEditPopup";
import {MonitorFilterPipe} from "./components/Monitor/MonitorFilter";
import {MapValuePipe} from "./pipes/MapValuePipe";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        DataTable,
        InputLengthValidator,
        InputRestricter,
        PasswordMatcher,
        PasswordChecker,
        Validation,
        ClickStopPropagation,
        Select2,
        JsonEditor,
        KeysPipe,
        CommaPipe,
        EnumValuesPipe,
        Tree,
        IpValidator,
        Gauge,
        CounterUp,
        Monitor,
        MonitorEditPopup,
        MapValuePipe
    ],
    declarations: [
        DataTable,
        InputLengthValidator,
        InputRestricter,
        PasswordMatcher,
        PasswordChecker,
        Validation,
        ClickStopPropagation,
        Select2,
        JsonEditor,
        KeysPipe,
        CommaPipe,
        EnumValuesPipe,
        Tree,
        IpValidator,
        Gauge,
        CounterUp,
        Monitor,
        MonitorEditPopup,
        MonitorFilterPipe,
        MapValuePipe
    ],
    providers: [],
    entryComponents: [
        MonitorEditPopup
    ]
})
export class SharedModule {
}
