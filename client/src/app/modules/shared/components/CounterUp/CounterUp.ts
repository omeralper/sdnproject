/**
 * Created by omeroz on 7/4/2017.
 */
import {
	Component, ElementRef, OnInit, Input, OnChanges, Output, EventEmitter
} from "@angular/core";
import {CounterValues} from "../../../../swagger/CounterValues";
import {MonitorInfoDTO} from "../../../../swagger/MonitorInfoDTO";

@Component({
	moduleId: module.id,
	selector: 'CounterUp',
	templateUrl: './CounterUp.html',
})

export class CounterUp implements OnInit {
	@Input() options: MonitorInfoDTO = <MonitorInfoDTO>{};
	@Input() counterValue:CounterValues = <CounterValues>{};
	constructor(public elementRef: ElementRef) {

	}

	ngOnInit() {
		$('.counter-up',this.elementRef.nativeElement).counterUp();
	}
}
