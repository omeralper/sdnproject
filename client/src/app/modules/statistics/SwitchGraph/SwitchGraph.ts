/**
 * Created by omeroz on 15.12.2016.
 */
import {
	Component,
	AfterViewInit,
	OnChanges,
	ElementRef,
	ChangeDetectorRef,
} from "@angular/core";
import {PageServices} from "../../PageServices";
import {SwitchIndicatorDTO} from "../../../swagger/SwitchIndicatorDTO";
import {AbstractGraph} from "../AbstractGraph";
import {RandomStatisticsGenerator} from "../Services/RandomStatisticsGenerator";
import {TsdbServerProxy} from "../Services/TsdbServerProxy";
import {SwitchDTO} from "../../../swagger/SwitchDTO";

@Component({
	moduleId: module.id,
	selector: 'switchgraph',
	templateUrl: "./SwitchGraph.html",
	inputs: ['switchList', 'selectedSwitch'],
})

export class SwitchGraph extends AbstractGraph implements AfterViewInit, OnChanges {
	public switchList: Array<SwitchIndicatorDTO> = [];
	public selectedSwitchCount: number = 0;
	public selectedSwitch: any = {};
	public ports: Array<number> = [];
	public selectedPorts:Array<number> = [];

	constructor(public tsdbApi: TsdbServerProxy,
	            public changeDetector: ChangeDetectorRef,
	            public generator: RandomStatisticsGenerator,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(tsdbApi, changeDetector, generator, baseServices, elementRef);
		this.metricName = "portstat";
		this.setMetric();
		this.title = this.t('titles.switch');
	}

	ngOnChanges(e) {
		if (e.switchList && e.switchList.currentValue.length > 0 &&
			this.switchList[0].portList &&
			this.switchList[0].portList.list &&
			this.switchList[0].portList.list.length > 0) {
			this.changeDetector.detectChanges();
			if (!this.selectedSwitch.id) {
				this.selectedSwitch = this.switchList[0];
			}
		}
		super.ngOnChanges(e);
	}

	ngAfterViewInit() {
		Object.keys(this.selectedSwitch).length != 0 && this.switchChanged(this.selectedSwitch);

		return super.ngAfterViewInit()
	}

	portSelected(values){
		this.addTag('port', values);
		this.fetchGraphData();
	}

	switchChanged(sw: any) {
		this.selectedSwitch = sw;
		this.selectedSwitchCount = 1;
		this.addTag('device', this.selectedSwitch.id);
		if (sw.portList) {
			this.ports = (sw as SwitchIndicatorDTO).portList && (sw as SwitchIndicatorDTO).portList.list;
		} else {
			this.ports = (sw as SwitchDTO).portInfo.portDetails
				.filter(d => d.number > -1)
				.map((d) => {
					return d.number
				});
		}
		this.changeDetector.detectChanges();
		this.selectedPorts = [this.ports[0]];
	}
}
