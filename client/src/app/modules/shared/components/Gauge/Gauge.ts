/**
 * Created by omeroz on 7/3/2017.
 */
import {
	Component, ElementRef, OnInit, Input, OnChanges, Output, EventEmitter
} from "@angular/core";
import {MonitorInfoDTO} from "../../../../swagger/MonitorInfoDTO";
import {GaugeValues} from "../../../../swagger/GaugeValues";
import {AxisOptions} from "highcharts";

@Component({
	moduleId: module.id,
	selector: 'Gauge',
	template: '<div class="gauge" style="width:200px; height: 120px;"></div>',
})

export class Gauge implements OnInit, OnChanges {
	@Input() options: MonitorInfoDTO = <MonitorInfoDTO>{};
	@Input() gaugeValue: GaugeValues = <GaugeValues>{};
	gauge: Highcharts.ChartObject = null;

	defaultOptions = {
		chart: {
			type: 'solidgauge',
			borderColor: '#fff'
		},
		borderWidth: 0,
		title: null,
		pane: {
			center: ['50%', '85%'],
			size: '170%',
			startAngle: -90,
			endAngle: 90,
			background: {
				backgroundColor: '#EEE',
				innerRadius: '75%',
				outerRadius: '100%',
				shape: 'arc'
			}
		},

		tooltip: {
			enabled: false
		},
		exporting: {
			enabled: false,
		},
		yAxis: {
			lineWidth: 0,
			minorTickInterval: null,
			tickAmount: 1,
			title: {
				y: -70
			},
			labels: {
				y: 16
			}
		},
		plotOptions: {
			solidgauge: {
				innerRadius: '75%',
				dataLabels: {
					y: 15,
					borderWidth: 0,
					useHTML: true
				}
			}
		}
	};

	constructor(public elementRef: ElementRef) {

	}

	ngOnInit() {
		let gaugeFields = this.options.gaugeFields;
		let that = this;
		let stopsAndLimits = this.getStopsAndLimits();
		let gaugeOptions =
			{
				yAxis: {
					min: gaugeFields.loLimit,
					max: stopsAndLimits.max,
					stops: stopsAndLimits.stops,
					labels: {
						formatter: function () {
							switch (that.options.unit) {
								case 'bytes':
									return that.bytesFormatter(this.value, true);
								case 'bytes/sec':
									return that.bytesFormatter(this.value, true) + "/sec";
								case 'percent':
									return this.value + '%';
								default:
									return this.axis.defaultLabelFormatter.call(this);
							}
						}
					},
					tickPositions: [gaugeFields.loLimit, gaugeFields.loAlarm, gaugeFields.hiAlarm, stopsAndLimits.max]
				},
				series: [{
					data: [0],
					dataLabels: {
						// format: ,
						formatter: function () {
							let factor = Math.pow(10, 2);
							let tempNumber = this.y * factor;
							let roundedTempNumber = Math.round(tempNumber);
							let res = roundedTempNumber / factor;
							return '<div style="text-align:center"><span style="font-size:25px;color:black)">' + res + '</span></div>';
						}
					},
				}]
			};

		let o = $.extend(true, {}, this.defaultOptions, gaugeOptions);
		let el = this.elementRef.nativeElement.getElementsByClassName('gauge')[0];
		this.gauge = new Highcharts.Chart(el, o);
	}

	getStopsAndLimits() {
		let stops;
		let gaugeFields = this.options.gaugeFields;
		let maxLimit = 100;

		if (this.gaugeValue && this.gauge) {
			switch (this.options.unit) {
				case 'percent':
					maxLimit = 100;
					break;
				default:
					let currentMax = this.gauge.yAxis[0].getExtremes().max;
					if (this.gaugeValue.value > currentMax)
						maxLimit = this.gaugeValue.value * 1.2;
					else
						maxLimit = currentMax;
					break;
			}
		}

		if (gaugeFields.hiAlarm && !gaugeFields.lowIsBad) {
			let hiAlarmPoint = this.options.gaugeFields.hiAlarm / maxLimit;
			stops = [
				[0, '#55BF3B'], //green
				[hiAlarmPoint * 0.5, '#DDDF0D'], //yellow
				[hiAlarmPoint, '#DF5353']  //red
			];
		} else if (gaugeFields.loAlarm && gaugeFields.lowIsBad) {
			let loAlarmPoint = gaugeFields.loAlarm / maxLimit;
			stops = [
				[loAlarmPoint, '#DF5353'], // red
				[loAlarmPoint * 1.5, '#DDDF0D'], // yellow
				[1, '#55BF3B'] // green
			];
		} else {
			stops = [
				[0, '#3D69CD'], //blue
				[0.5, '#3D69CD'], //blue
				[1, '#3D69CD']  //blue
			];
		}

		return {
			stops: stops,
			max: maxLimit
		}
	}

	ngOnChanges(e) {
		if (this.gauge && this.gaugeValue.value !== undefined) {
			this.gauge.yAxis[0].update(this.getStopsAndLimits(), true);
			let point = (<any>this.gauge.series[0]).points[0];
			point.update(+this.gaugeValue.value);
		}
	}

	bytesFormatter(bytes, label) {
		if (bytes == 0) return '';
		var s = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
		var e = Math.floor(Math.log(bytes) / Math.log(1024));
		var value = ((bytes / Math.pow(1024, Math.floor(e))).toFixed(2));
		e = (e < 0) ? (-e) : e;
		if (label) value += ' ' + s[e];
		return value;
	}
}
