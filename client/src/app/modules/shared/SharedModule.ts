/**
 * Created by omeroz on 03.01.2017.
 */
import {NgModule}      from '@angular/core';
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

@NgModule({
	imports: [
		CommonModule,
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
		IpValidator
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
		IpValidator
	],
	providers: []
})
export class SharedModule {
}
