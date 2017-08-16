/**
 * Created by yildirayme on 28.04.2016.
 */
import {
    Component,
    OnInit,
    AfterViewInit,
    OnDestroy,
    OnChanges,
    ElementRef,
    ViewChild
} from "@angular/core";
import {PageServices} from "../../PageServices";
import {BasePopupPage} from "../../../commons/BasePopupPage/BasePopupPage";
import {NACSTATUS} from "../../../swagger/NACSTATUS";
import {NacUserDTO} from "../../../swagger/NacUserDTO";
import {EnumHelper} from "../../../commons/EnumHelper";
import {MODAL_SIZE} from "../../ModalComponent";
import {NACENTITYTYPE} from "../../../swagger/NACENTITYTYPE";
import {FlowStatisticsApi} from "../../../swagger/FlowStatisticsApi";
import {UserFlowStatRequest} from "../../../swagger/UserFlowStatRequest";
import {DataTable} from "../../../commons/DataTable/DataTable";
import {FlowStatsDTO} from "../../../swagger/FlowStatsDTO";

export enum ChartType {
    BYTES,
    LIFE,
    PACKETS,
    RATE
}
export enum DurationUnits{
    HOUR =  <any>'hour',
    DAY =  <any>'day',
    WEEK =  <any>'week'
}

@Component({ moduleId: module.id,
    selector: 'NacUserStatisticsPopup',
    templateUrl: './NacUserStatisticsPopup.html',
    styleUrls: ['./NacUserStatisticsPopup.css'],
    providers: [FlowStatisticsApi]
})
export class NacUserStatisticsPopup extends BasePopupPage<NacUserDTO> implements OnInit, AfterViewInit,OnChanges, OnDestroy {

    @ViewChild(DataTable)
    public dataTableRef: DataTable;
    public _data: Array<FlowStatsDTO> = [];
    public __dataTableOptions = {};
    public _dataTableData;
    public _subs = [];
    public _scale = {pie_export: 1, line_export: 1};
    public _delay = {small: 200, change: 1000}; // ms
    public _userID = '';
    public _userName = '';
    public _downsamplingPeriod = 60;
    public _responseLimit = 1000;

    public _upLineData;
    public _downLineData;
    public _upPieData;
    public _downPieData;
    public _chartTypes = EnumHelper.getNames(ChartType);

    constructor(public flowStatisticsApi: FlowStatisticsApi,
                baseServices: PageServices,
                elementRef: ElementRef) {
        super(baseServices, elementRef);

        this.modalSize = MODAL_SIZE.FULL;
        this.setI18NKey('nac_management.users.user_statistics');

        this._userID = this.data.id || '1';
        this._userName = this.data.username || '';

        this.data.securityLevel = this.data.securityLevel || 1;
        this.data.status = this.data.status || NACSTATUS.ACTIVE;
        this.data.userType = this.data.userType || NACENTITYTYPE.STAFF;

        this.setPopupActions([
            this.createAction('@date', [
                this.createAction('@onehour', () => {
                    this.retrieveUserFlowStatData(1,DurationUnits.HOUR)
                }),
                this.createAction('@twohours', () => {
                    this.retrieveUserFlowStatData(2,DurationUnits.HOUR)
                }),
                this.createAction('@fourhours', () => {
                    this.retrieveUserFlowStatData(4,DurationUnits.HOUR)
                }),
                this.createAction('@twelvehours', () => {
                    this.retrieveUserFlowStatData(12,DurationUnits.HOUR)
                }),
                this.createAction('@oneday', () => {
                    this.retrieveUserFlowStatData(1,DurationUnits.DAY)
                }),
                this.createAction('@threedays', () => {
                    this.retrieveUserFlowStatData(3,DurationUnits.DAY)
                }),
                this.createAction('@oneweek', () => {
                    this.retrieveUserFlowStatData(1,DurationUnits.WEEK)
                })
            ]),
            this.createAction('@graphType', [
                this.createAction('@byte', () => {
                    this.drawLineChart(ChartType.BYTES);
                    this.drawPieChart(ChartType.BYTES);
                }),
                this.createAction('@life', () => {
                    this.drawLineChart(ChartType.LIFE);
                    this.drawPieChart(ChartType.LIFE);
                }),
                this.createAction('@packets', () => {
                    this.drawLineChart(ChartType.PACKETS);
                    this.drawPieChart(ChartType.PACKETS);
                }),
                this.createAction('@rate', () => {
                    this.drawLineChart(ChartType.RATE);
                    this.drawPieChart(ChartType.RATE);
                })
            ])
        ]);
    }

    ngOnInit() {
        super.ngOnInit();
        this.__dataTableOptions = this.getDataTableOptions();
    }

    ngOnChanges(e) {
        super.ngOnChanges(e);
    }

    ngAfterViewInit() {
        if (super.ngAfterViewInit()) {
            setTimeout(function () {
                this.retrieveUserFlowStatData(1,DurationUnits.DAY);
            }.bind(this), this._delay.change);

            return true;
        }
        return false;
    }

    ngOnDestroy() {
        super.ngOnDestroy();
        this.unsubscribeAll(null);
    }

    getDataTableOptions() {
        return {
            columns: [
                {title: this.t('fields.srcIP.label'), width: '15%', orderable: true, type: 'string', name: 'srcIP'},
                {title: this.t('fields.dstIP.label'), width: '15%', orderable: true, type: 'string', name: 'dstIP'},
                {title: this.t('fields.direction.label'), width: '10%', orderable: true, type: 'string', name: 'dstIP'},
                {title: this.t('fields.bytes.label'), width: '10%', orderable: true, type: 'number', name: 'bytes'},
                {
                    title: this.t('fields.lifeTime.label'),
                    width: '8%',
                    orderable: true,
                    type: 'number',
                    name: 'lifeTime'
                },
                {title: this.t('fields.packets.label'), width: '8%', orderable: true, type: 'number', name: 'packets'},
                {title: this.t('fields.rate.label'), width: '8%', orderable: true, type: 'number', name: 'rate'},
                {
                    title: this.t('fields.protocol.label'),
                    width: '8%',
                    orderable: true,
                    type: 'string',
                    name: 'protocol'
                },
            ],
            "order": [
                [1, "asc"]
            ],
            paging: true,
            searching: true,
            data: this._dataTableData
        };
    }

    drawDataTable() {
        let dataTableData = [];
        for (var i = 0; i < this._data.length; i++) {
            let current = this._data[i];
            for (var j = 0; j < current.upStats.length; j++) {
                dataTableData.push([
                    current.srcIP,
                    current.dstIP,
                    this.t('fields.up.label'),
                    current.upStats[j].bytes,
                    current.upStats[j].life,
                    current.upStats[j].packets,
                    current.upStats[j].rate,
                    current.protocol
                ]);
            }
            for (var j = 0; j < current.downStats.length; j++) {
                dataTableData.push([
                    current.srcIP,
                    current.dstIP,
                    this.t('fields.down.label'),
                    current.downStats[j].bytes,
                    current.downStats[j].life,
                    current.downStats[j].packets,
                    current.downStats[j].rate,
                    current.protocol
                ]);
            }
        }
        this.dataTableRef.reload(true, dataTableData);
        return dataTableData;
    }

    unsubscribeAll = (fn): void => {
        this._subs.forEach(function (sub) {
            if (sub && !jQuery.isEmptyObject(sub)) {
                try {
                    sub.unsubscribe();
                    sub = null;
                } catch (e) {
                    this.logger.error('unsubscribe: ' + e.message);
                }
            }
        });

        this._subs = [];

        if (fn) {
            setTimeout(function () {
                fn();
            }, this._delay.small);
        }
    }

    setUserFlowStatData = (data: Array<FlowStatsDTO>): void => {
        this._data = data;
        let uploadColor = '#E35B5A';
        let downloadColor = 'rgb(144, 237, 125)';


        let upstats = this._data
            .map((value) => {
                return value.upStats;
            })
            .reduce((a, b) => a.concat(b), [])
            .filter((v) => !!v)
            .sort((a, b) => {
                return b.tstamp - a.tstamp;
            });

        let tcpUp = this._data
            .map((value) => {
                if (value.protocol == "tcp") {
                    return value.upStats;
                }
            })
            .reduce((a, b) => a.concat(b), [])
            .filter((v) => !!v)
            .sort((a, b) => {
                return b.tstamp - a.tstamp;
            });

        let udpUp = this._data
            .map((value) => {
                if (value.protocol == "udp") {
                    return value.upStats;
                }
            })
            .reduce((a, b) => a.concat(b), [])
            .filter((v) => !!v)
            .sort((a, b) => {
                return b.tstamp - a.tstamp;
            });

        this._upPieData = {
            bytes: {
                color: uploadColor,
                name: this.t('chart.bytes.upload'),
                y: upstats.map(function (value) {
                    return value.bytes;
                }).reduce((a, b) => a + b, 0)
            },
            life: {
                color: uploadColor,
                name: this.t('chart.life.upload'),
                y: upstats.map(function (value) {
                    return value.life;
                }).reduce((a, b) => a + b, 0)
            },
            packets: {
                color: uploadColor,
                name: this.t('chart.packets.upload'),
                y: upstats.map(function (value) {
                    return value.packets;
                }).reduce((a, b) => a + b, 0)
            },
            rate: {
                color: uploadColor,
                name: this.t('chart.rate.upload'),
                y: upstats.map(function (value) {
                    return value.rate;
                }).reduce((a, b) => a + b, 0)
            },
            bytesTcp: {
                color: uploadColor,
                name: this.t('chart.protocol.upTcp'),
                y: tcpUp.reduce((a, b) => a + b.bytes, 0)
            },
            lifeTcp: {
                color: uploadColor,
                name: this.t('chart.protocol.upTcp'),
                y: tcpUp.reduce((a, b) => a + b.life, 0)
            },
            packetsTcp: {
                color: uploadColor,
                name: this.t('chart.protocol.upTcp'),
                y: tcpUp.reduce((a, b) => a + b.packets, 0)
            },
            rateTcp: {
                color: uploadColor,
                name: this.t('chart.protocol.upTcp'),
                y: tcpUp.reduce((a, b) => a + b.rate, 0)
            },
            bytesUdp: {
                color: uploadColor,
                name: this.t('chart.protocol.upUdp'),
                y: udpUp.reduce((a, b) => a + b.bytes, 0)
            },
            lifeUdp: {
                color: uploadColor,
                name: this.t('chart.protocol.upUdp'),
                y: udpUp.reduce((a, b) => a + b.life, 0)
            },
            packetsUdp: {
                color: uploadColor,
                name: this.t('chart.protocol.upUdp'),
                y: udpUp.reduce((a, b) => a + b.packets, 0)
            },
            rateUdp: {
                color: uploadColor,
                name: this.t('chart.protocol.upUdp'),
                y: udpUp.reduce((a, b) => a + b.rate, 0)
            }
        };

        this._upLineData = {
            bytes: {
                color: uploadColor,
                name: this.t('chart.bytes.upload'),
                data: upstats.map(function (value) {
                    return [value.tstamp, value.bytes];
                })
            },
            life: {
                color: uploadColor,
                name: this.t('chart.life.upload'),
                data: upstats.map(function (value) {
                    return [value.tstamp, value.life];
                })
            },
            packets: {
                color: uploadColor,
                name: this.t('chart.packets.upload'),
                data: upstats.map(function (value) {
                    return [value.tstamp, value.packets];
                })
            },
            rate: {
                color: uploadColor,
                name: this.t('chart.rate.upload'),
                data: upstats.map(function (value) {
                    return [value.tstamp, value.rate];
                })
            },
            tstamp: {
                color: uploadColor,
                data: upstats.map(function (value) {
                    return new Date(value.tstamp);
                })
            }
        };

        let downstats = this._data
            .map((value) => {
                return value.downStats;
            })
            .reduce((a, b) => a.concat(b), [])
            .filter((v) => !!v)
            .sort((a, b) => {
                return a.tstamp - b.tstamp;
            });

        let tcpDown = this._data
            .map((value) => {
                if (value.protocol == "tcp") {
                    return value.downStats;
                }
            })
            .reduce((a, b) => a.concat(b), [])
            .filter((v) => !!v);

        let udpDown = this._data
            .map((value) => {
                if (value.protocol == "udp") {
                    return value.downStats;
                }
            })
            .reduce((a, b) => a.concat(b), [])
            .filter((v) => !!v);


        this._downPieData = {
            bytes: {
                color: downloadColor,
                name: this.t('chart.bytes.download'),
                y: downstats.map(function (value) {
                    return value.bytes;
                }).reduce((a, b) => a + b, 0)
            },
            life: {
                color: downloadColor,
                name: this.t('chart.life.download'),
                y: downstats.map(function (value) {
                    return value.life;
                }).reduce((a, b) => a + b, 0)
            },
            packets: {
                color: downloadColor,
                name: this.t('chart.packets.download'),
                y: downstats.map(function (value) {
                    return value.packets;
                }).reduce((a, b) => a + b, 0)
            },
            rate: {
                color: downloadColor,
                name: this.t('chart.rate.download'),
                y: downstats.map(function (value) {
                    return value.rate;
                }).reduce((a, b) => a + b, 0)
            },
            bytesTcp: {
                color: downloadColor,
                name: this.t('chart.protocol.downTcp'),
                y: tcpDown.reduce((a, b) => a + b.bytes, 0)
            },
            lifeTcp: {
                color: downloadColor,
                name: this.t('chart.protocol.downTcp'),
                y: tcpDown.reduce((a, b) => a + b.life, 0)
            },
            packetsTcp: {
                color: downloadColor,
                name: this.t('chart.protocol.downTcp'),
                y: tcpDown.reduce((a, b) => a + b.packets, 0)
            },
            rateTcp: {
                color: downloadColor,
                name: this.t('chart.protocol.downTcp'),
                y: tcpDown.reduce((a, b) => a + b.rate, 0)
            },
            bytesUdp: {
                color: downloadColor,
                name: this.t('chart.protocol.downUdp'),
                y: udpDown.reduce((a, b) => a + b.bytes, 0)
            },
            lifeUdp: {
                color: downloadColor,
                name: this.t('chart.protocol.downUdp'),
                y: udpDown.reduce((a, b) => a + b.life, 0)
            },
            packetsUdp: {
                color: downloadColor,
                name: this.t('chart.protocol.downUdp'),
                y: udpDown.reduce((a, b) => a + b.packets, 0)
            },
            rateUdp: {
                color: downloadColor,
                name: this.t('chart.protocol.downUdp'),
                y: udpDown.reduce((a, b) => a + b.rate, 0)
            }
        };

        this._downLineData = {
            bytes: {
                color: downloadColor,
                name: this.t('chart.bytes.download'),
                data: downstats.map(function (value) {
                    return [value.tstamp, value.bytes];
                })
            },
            life: {
                color: downloadColor,
                name: this.t('chart.life.download'),
                data: downstats.map(function (value) {
                    return [value.tstamp, value.life];
                })
            },
            packets: {
                color: downloadColor,
                name: this.t('chart.packets.download'),
                data: downstats.map(function (value) {
                    return [value.tstamp, value.packets];
                })
            },
            rate: {
                color: downloadColor,
                name: this.t('chart.rate.download'),
                data: downstats.map(function (value) {
                    return [value.tstamp, value.rate];
                })
            },
            tstamp: {
                color: downloadColor,
                data: downstats.map(function (value) {
                    return new Date(value.tstamp);
                })
            }
        };

    }

    getUserFlowStatData = (): Object => {
        return this._data;
    }

    retrieveUserFlowStatData = (duration:number, durationUnit:DurationUnits): void => {
        let now = moment();
        let beginTime = now.clone().add(-duration, durationUnit.toString()).valueOf();
        let endTime = now.valueOf();

        let request = this.baseServices.apiHelper.genRequest({
            "user": this._userID,
            "knownUser": true,
            "beginTime": beginTime, //0,
            "endTime": endTime, //Math.floor(new Date().getTime() / 1000),
            "downsamplingPeriod": this._downsamplingPeriod,
            "responseLimit": this._responseLimit
        });

        this.unsubscribeAll(null);

        this._subs.push(
            this.flowStatisticsApi
                .flowStatsUserPOST(<UserFlowStatRequest>request)
                .subscribe(
                    (res) => {
                        // this.normalizeAll();
                        if (this.baseServices.uiHelper.processResponse(res)) {
                            this.setUserFlowStatData(res.data);
                            this.drawDataTable();
                            this.drawLineChart(ChartType.BYTES);
                            this.drawPieChart(ChartType.BYTES);
                        }
                    }
                )
        );
    }

    drawLineChart(chartType: ChartType): void {
        let container = $('#line-1', this.$container);
        let options = {};
        switch (+chartType) {
            case ChartType.BYTES:
                options = {
                    title: {
                        text: this.t("chart.bytes.title")
                    },
                    series: [
                        this._upLineData.bytes,
                        this._downLineData.bytes
                    ]
                }
                break;
            case ChartType.LIFE:
                options = {
                    title: {
                        text: this.t("chart.life.title")
                    },
                    series: [
                        this._upLineData.life,
                        this._downLineData.life
                    ]
                }
                break;
            case ChartType.PACKETS:
                options = {
                    title: {
                        text: this.t("chart.packets.title")
                    },
                    series: [
                        this._upLineData.packets,
                        this._downLineData.packets
                    ]
                }
                break;
            case ChartType.RATE:
                options = {
                    title: {
                        text: this.t("chart.rate.title")
                    },
                    series: [
                        this._upLineData.rate,
                        this._downLineData.rate
                    ]
                }
                break;
        }

        let defaultOptions = {
            chart: {
                zoomType: 'x',
                type: 'line',
                backgroundColor: null,
                plotBackgroundColor: null,
                plotBorderWidth: null,
            },
            // plotOptions: {
            //     spline: {
            //         marker: {
            //             enabled: true
            //         }
            //     }
            // },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x:%e. %b}: {point.y}'
            },
            exporting: {
                enabled: true,
                fallbackToExportServer: false,
                filename: this.t('exporting.filename'),
                sourceWidth: container.width(),
                sourceHeight: container.height(),
                scale: this._scale.line_export
            },
            legend: {
                enabled: true
            },
            xAxis: {
                type: 'datetime',
                title: {
                    text: this.t('chart.date')
                },
            },
            yAxis: {
                title: {
                    text: this.t('chart.y_axis')
                }
            },
        }

        container.highcharts($.extend(defaultOptions, options));
    }

    drawPieChart(chartType: ChartType): void {
        let pie1 = $('#pie-1', this.$container);
        let pie2 = $('#pie-2', this.$container);
        let pie1Options = {};
        let pie2Options = {};
        let tcpColor = 'rgb(92,92,97)';
        let udpColor = 'rgb(247, 163, 92)';

        switch (+chartType) {
            case ChartType.BYTES:
                pie1Options = {
                    title: {
                        text: this.t("chart.data.title")
                    },
                    series: [{
                        colorByPoint: true,
                        data: [
                            this._upPieData.bytes,
                            this._downPieData.bytes
                        ]
                    }]
                };
                pie2Options = {
                    title: {
                        text: this.t("chart.protocol.title")
                    },
                    series: [{
                        size: '100%',
                        data: [
                            {
                                name: this.t("chart.protocol.tcp"),
                                color: tcpColor,
                                y: this._upPieData.bytesTcp.y + this._downPieData.bytesTcp.y
                            },
                            {
                                name: this.t("chart.protocol.udp"),
                                color: udpColor,
                                y: this._upPieData.bytesUdp.y + this._downPieData.bytesUdp.y
                            }
                        ]
                    }, {
                        size: '100%',
                        innerSize: '80%',
                        data: [
                            this._upPieData.bytesTcp,
                            this._downPieData.bytesTcp,
                            this._downPieData.bytesUdp,
                            this._upPieData.bytesUdp
                        ]
                    }]
                };
                break;
            case ChartType.LIFE:
                pie1Options = {
                    title: {
                        text: this.t("chart.data.title")
                    },
                    series: [{
                        colorByPoint: true,
                        data: [
                            this._upPieData.life,
                            this._downPieData.life
                        ]
                    }]
                };
                pie2Options = {
                    title: {
                        text: this.t("chart.protocol.title")
                    },
                    series: [{
                        size: '90%',
                        data: [
                            {
                                name: this.t("chart.protocol.tcp"),
                                color: tcpColor,
                                y: this._upPieData.lifeTcp.y + this._downPieData.lifeTcp.y
                            },
                            {
                                name: this.t("chart.protocol.udp"),
                                color: udpColor,
                                y: this._upPieData.lifeUdp.y + this._downPieData.lifeUdp.y
                            }
                        ]
                    }, {
                        size: '90%',
                        innerSize: '80%',
                        data: [
                            this._upPieData.lifeTcp,
                            this._downPieData.lifeTcp,
                            this._downPieData.lifeUdp,
                            this._upPieData.lifeUdp
                        ]
                    }]
                };
                break;
            case ChartType.PACKETS:
                pie1Options = {
                    title: {
                        text: this.t("chart.data.title")
                    },
                    series: [{
                        colorByPoint: true,
                        data: [
                            this._upPieData.packets,
                            this._downPieData.packets
                        ]
                    }]
                }
                pie2Options = {
                    title: {
                        text: this.t("chart.protocol.title")
                    },
                    series: [{
                        size: '90%',
                        data: [
                            {
                                name: this.t("chart.protocol.tcp"),
                                color: tcpColor,
                                y: this._upPieData.packetsTcp.y + this._downPieData.packetsTcp.y
                            },
                            {
                                name: this.t("chart.protocol.udp"),
                                color: udpColor,
                                y: this._upPieData.packetsUdp.y + this._downPieData.packetsUdp.y
                            }
                        ]
                    }, {
                        size: '90%',
                        innerSize: '80%',
                        data: [
                            this._upPieData.packetsTcp,
                            this._downPieData.packetsTcp,
                            this._downPieData.packetsUdp,
                            this._upPieData.packetsUdp
                        ]
                    }]
                };
                break;
            case ChartType.RATE:
                pie1Options = {
                    title: {
                        text: this.t("chart.data.title")
                    },
                    series: [{
                        colorByPoint: true,
                        data: [
                            this._upPieData.rate,
                            this._downPieData.rate
                        ]
                    }]
                }
                pie2Options = {
                    title: {
                        text: this.t("chart.protocol.title")
                    },
                    series: [{
                        size: '90%',
                        data: [
                            {
                                name: this.t("chart.protocol.tcp"),
                                color: tcpColor,
                                y: this._upPieData.rateTcp.y + this._downPieData.rateTcp.y
                            },
                            {
                                name: this.t("chart.protocol.udp"),
                                color: udpColor,
                                y: this._upPieData.rateUdp.y + this._downPieData.rateUdp.y
                            }
                        ]
                    }, {
                        size: '90%',
                        innerSize: '80%',
                        data: [
                            this._upPieData.rateTcp,
                            this._downPieData.rateTcp,
                            this._downPieData.rateUdp,
                            this._upPieData.rateUdp
                        ]
                    }]
                };
                break;
        }

        let pie1DefaultOptions = {
            chart: {

                type: 'pie'
            },
            tooltip: {
                pointFormat: '{point.y} : <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            }
        };

        pie1.highcharts($.extend(pie1DefaultOptions, pie1Options));

        let pie2DefaultOptions = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            tooltip: {
                pointFormat: '{point.y} : <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            }
        };

        pie2.highcharts($.extend(pie2DefaultOptions, pie2Options));
    }

}

