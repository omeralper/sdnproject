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
import {AbstractGraph} from "../Main/AbstractGraph";
import {TsdbDataSet} from "../../../swagger/TsdbDataSet";
import {RandomStatisticsGenerator} from "../Services/RandomStatisticsGenerator";
import {TsdbServerProxy} from "../Services/TsdbServerProxy";
import {TopologyService} from "../../topology/TopologyService";

@Component({
	moduleId: module.id,
	selector: 'switchgraph',
	templateUrl: "./SwitchGraph.html",
	inputs: ['switchList', 'allMetrics'],
})

export class SwitchGraph extends AbstractGraph implements AfterViewInit, OnChanges {
	public switchList: Array<SwitchIndicatorDTO> = [];
	public selectedSwitches: Array<SwitchAndPort> = [];

	constructor(public tsdbApi: TsdbServerProxy,
	            public changeDetector: ChangeDetectorRef,
	            public generator: RandomStatisticsGenerator,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(tsdbApi, changeDetector, generator, baseServices, elementRef);
	}

	ngOnChanges(e) {
		if (e.allMetrics && e.allMetrics.currentValue.length > 0) {
			this.filteredMetrics = this.allMetrics.filter((metric) => {
				return metric.metricName.indexOf('portstat') > -1;
			});
			this.changeDetector.detectChanges();
			if (this.filteredMetrics.length > 0) {
				$('.metricSelect', this.$container)
					.select2()
					.val(this.filteredMetrics[0].metricName)
					.trigger("change");
			}
		}
		if (e.switchList && e.switchList.currentValue.length > 0 &&
			this.switchList[0].portList &&
			this.switchList[0].portList.list &&
			this.switchList[0].portList.list.length > 0) {
			this.changeDetector.detectChanges();
			$('.switchSelect', this.$container)
				.select2()
				.val(this.switchList[0].id + 'port:' + this.switchList[0].portList.list[0])
				.trigger("change");
		}

		super.ngOnChanges(e);
	}

	ngAfterViewInit() {
		if (super.ngAfterViewInit()) {
			$(".switchSelect", this.$container).select2({
				placeholder: this.t('placeholder.devices'),
				maximumSelectionLength: 2
			}).on('change', (evt) => {
				let values = $(evt.target).val();
				this.selectedSwitches = [];
				values && values.forEach((value) => {
					let sw = value.split('port:')[0];
					let port = value.split('port:')[1];
					this.selectedSwitches.push(<SwitchAndPort>{
						switchId: sw,
						port: port
					});
				});
				this.fetchGraphData();
			});


			$(".metricSelect", this.$container).select2({
				placeholder: this.t('placeholder.metrics'),
				maximumSelectionLength: 4
			}).on('change', (evt) => {
				this.selectedMetrics = $(evt.target).val() || [];
				this.fetchGraphData();
			});

			this.drawGraph();
			return true;
		}
		return false;
	}

	getSelectedParams() {
		return this.selectedSwitches;
	}

	getTagValues(param: SwitchAndPort) {
		return [
			{
				tag: 'device',
				val: param.switchId
			},
			{
				tag: 'port',
				val: param.port
			}];
	}

	getTagName(dataSet: TsdbDataSet) {
		let device = "";
		let port = "";
		dataSet.tagValues.forEach((t) => {
			if (t.tag == "device")
				device = t.val;
			if (t.tag == "port")
				port = t.val;
		});
		let metricName = this.t('metrics.' + dataSet.metric);
		return device + " port: " + port + " (" + metricName + ")";
	}

}
export interface SwitchAndPort {
	switchId: string;
	port: string;
}
