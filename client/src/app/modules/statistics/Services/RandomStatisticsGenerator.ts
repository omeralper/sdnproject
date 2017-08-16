/**
 * Created by omeroz on 2/8/2017.
 */
import {Injectable} from "@angular/core";
import {TsdbQueryRequest} from "../../../swagger/TsdbQueryRequest";
import {TsdbQueryResponse} from "../../../swagger/TsdbQueryResponse";
import {TsdbDataSet} from "../../../swagger/TsdbDataSet";
import {MetricDefinition} from "../../../swagger/MetricDefinition";
import {METRICTYPE} from "../../../swagger/METRICTYPE";
@Injectable()
export class RandomStatisticsGenerator {
    constructor() {
    }

    public frequency = 50;


    public generateTimeline(startTime, endTime) {
        let unitTime = (endTime - startTime) / this.frequency;
        let result = [];
        for (var i = 0; i < this.frequency; i++) {
            result.push(startTime + unitTime * i);
        }
        return result;
    }

    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    generateRandomData(request: TsdbQueryRequest): TsdbQueryResponse {
        let response: TsdbQueryResponse = <TsdbQueryResponse>{};
        response.datasets = [];
        request.metrics.forEach((metric) => {
            let set: TsdbDataSet = <TsdbDataSet>{};
            set.metric = metric;
            set.tagValues = request.tagValues;
            set.values = [];
            let interval = set.metric.split('.').reduce((o, i) => o[i], this.intervals);
            for (var i = 0; i < this.frequency; i++) {
                set.values.push(this.getRandomArbitrary(interval[0], interval[1]));
            }
            response.datasets.push(set);
        });

        response.tstamps = this.generateTimeline(request.beginTime, request.endTime);
        return response;
    }


    getFakeMetricDefiniton() {
        return this.metricDefinition;
    }

    getFakeCPUHosts() {
        return this.hostsCPU;
    }

    getFakeRamHosts() {
        return this.hostsRam;
    }

    public intervals = {
        "portstat": {
            "bytesReceived": [10000, 10000000],
            "bytesSent": [10000, 10000000],
            "collisions": [0, 100],
            "errorRate": [0, 100],
            "packetsReceived": [100000, 1000000],
            "packetsRxDropped": [100000, 1000000],
            "packetsRxErrors": [100000, 1000000],
            "packetsSent": [100000, 1000000],
            "packetsTxDropped": [100000, 1000000],
            "packetsTxErrors": [100000, 1000000],
            "receiveRate": [0, 100],
            "sendRate": [0, 100]
        },
        "meterstat": {
            "bytes": [1000, 10000],
            "life": [1000, 10000],
            "packets": [1000, 10000]
        },
        "cpu": {
            "idle": [0, 100]
        },
        "proc": {
            "meminfo": {
                "memfree": [10000, 100000],
                "memtotal": [10000, 100000],
                "swapfree": [10000, 100000],
                "swaptotal": [10000, 100000]
            }
        }
    };

    public hosts = ["ubuntu114", "hadi"];
    public cpus = [];

    public hostsRam = [{
        metric: "proc.meminfo.memfree",
        tagValues: [{"tag": "host", "val": "ubuntu114"}],
    }, {
        metric: "proc.meminfo.memtotal",
        tagValues: [{"tag": "host", "val": "ubuntu114"}],
    }, {
        metric: "proc.meminfo.swaptotal",
        tagValues: [{"tag": "host", "val": "ubuntu114"}],
    }];

    public hostsCPU = [{
        metric: "cpu.idle",
        tagValues: [{"tag": "host", "val": "ubuntu114"}, {"tag": "cpu", "val": "1"}],
    }, {
        metric: "cpu.idle",
        tagValues: [{"tag": "host", "val": "ubuntu114"}, {"tag": "cpu", "val": "2"}],
    }, {
        metric: "cpu.idle",
        tagValues: [{"tag": "host", "val": "ubuntu114"}, {"tag": "cpu", "val": "3"}],
    }, {
        metric: "cpu.idle",
        tagValues: [{"tag": "host", "val": "ubuntu114"}, {"tag": "cpu", "val": "4"}],
    }, {
        metric: "cpu.idle",
        tagValues: [{"tag": "host", "val": "ubuntu114"}, {"tag": "cpu", "val": "5"}],
    }, {
        metric: "cpu.idle",
        tagValues: [{"tag": "host", "val": "ubuntu114"}, {"tag": "cpu", "val": "6"}],
    }, {
        metric: "cpu.idle",
        tagValues: [{"tag": "host", "val": "ubuntu114"}, {"tag": "cpu", "val": "7"}],
    }, {
        metric: "cpu.idle",
        tagValues: [{"tag": "host", "val": "ubuntu114"}, {"tag": "cpu", "val": "9"}],
    }, {
        metric: "cpu.idle",
        tagValues: [{"tag": "host", "val": "ubuntu114"}, {"tag": "cpu", "val": "10"}],
    }, {
        metric: "cpu.idle",
        tagValues: [{"tag": "host", "val": "ubuntu114"}, {"tag": "cpu", "val": "11"}],
    }, {
        metric: "cpu.idle",
        tagValues: [{"tag": "host", "val": "ubuntu114"}, {"tag": "cpu", "val": "12"}],
    }, {
        metric: "cpu.idle",
        tagValues: [{"tag": "host", "val": "ubuntu114"}, {"tag": "cpu", "val": "13"}],
    }, {
        metric: "cpu.idle",
        tagValues: [{"tag": "host", "val": "ubuntu114"}, {"tag": "cpu", "val": "14"}],
    }, {
        metric: "cpu.idle",
        tagValues: [{"tag": "host", "val": "ubuntu114"}, {"tag": "cpu", "val": "16"}],
    }, {
        metric: "cpu.idle",
        tagValues: [{"tag": "host", "val": "ubuntu114"}, {"tag": "cpu", "val": "17"}],
    },
        {
            metric: "cpu.idle",
            tagValues: [{"tag": "host", "val": "hadi"}, {"tag": "cpu", "val": "1"}],
        }];

    public metricDefinition: Array<MetricDefinition> =
        [{
            metricName: "cpu.idle",
            producer: "tcollector",
            metricType: METRICTYPE.DOUBLE,
            metricUnit: "percent",
            tagNames: ["host", "cpu"]
        }, {
            metricName: "df.bytes.free",
            producer: "tcollector",
            metricType: METRICTYPE.LONG,
            metricUnit: "bytes",
            tagNames: ["host", "mount", "fstype"]
        }, {
            metricName: "df.bytes.percentused",
            producer: "tcollector",
            metricType: METRICTYPE.DOUBLE,
            metricUnit: "percent",
            tagNames: ["host", "mount", "fstype"]
        }, {
            metricName: "df.bytes.used",
            producer: "tcollector",
            metricType: METRICTYPE.LONG,
            metricUnit: "bytes",
            tagNames: ["host", "mount", "fstype"]
        }, {
            metricName: "meterstat.bytes",
            producer: "meter-statistics",
            metricType: METRICTYPE.LONG,
            metricUnit: "count",
            tagNames: ["vtn", "controller", "meter", "device", "user"]
        }, {
            metricName: "meterstat.life",
            producer: "meter-statistics",
            metricType: METRICTYPE.LONG,
            metricUnit: "seconds",
            tagNames: ["vtn", "controller", "meter", "device", "user"]
        }, {
            metricName: "meterstat.packets",
            producer: "meter-statistics",
            metricType: METRICTYPE.LONG,
            metricUnit: "count",
            tagNames: ["vtn", "controller", "meter", "device", "user"]
        }, {
            metricName: "portstat.bytesReceived",
            producer: "port-statistics",
            metricType: METRICTYPE.LONG,
            metricUnit: "count",
            tagNames: ["controller", "port", "device"]
        }, {
            metricName: "portstat.bytesSent",
            producer: "port-statistics",
            metricType: METRICTYPE.LONG,
            metricUnit: "count",
            tagNames: ["controller", "port", "device"]
        }, {
            metricName: "portstat.collisions",
            producer: "port-statistics",
            metricType: METRICTYPE.LONG,
            metricUnit: "count",
            tagNames: ["controller", "port", "device"]
        }, {
            metricName: "portstat.errorRate",
            producer: "port-statistics",
            metricType: METRICTYPE.LONG,
            metricUnit: "packets/sec",
            tagNames: ["controller", "port", "device"]
        }, {
            metricName: "portstat.packetsReceived",
            producer: "port-statistics",
            metricType: METRICTYPE.LONG,
            metricUnit: "count",
            tagNames: ["controller", "port", "device"]
        }, {
            metricName: "portstat.packetsRxDropped",
            producer: "port-statistics",
            metricType: METRICTYPE.LONG,
            metricUnit: "count",
            tagNames: ["controller", "port", "device"]
        }, {
            metricName: "portstat.packetsRxErrors",
            producer: "port-statistics",
            metricType: METRICTYPE.LONG,
            metricUnit: "count",
            tagNames: ["controller", "port", "device"]
        }, {
            metricName: "portstat.packetsSent",
            producer: "port-statistics",
            metricType: METRICTYPE.LONG,
            metricUnit: "count",
            tagNames: ["controller", "port", "device"]
        }, {
            metricName: "portstat.packetsTxDropped",
            producer: "port-statistics",
            metricType: METRICTYPE.LONG,
            metricUnit: "count",
            tagNames: ["controller", "port", "device"]
        }, {
            metricName: "portstat.packetsTxErrors",
            producer: "port-statistics",
            metricType: METRICTYPE.LONG,
            metricUnit: "count",
            tagNames: ["controller", "port", "device"]
        }, {
            metricName: "portstat.receiveRate",
            producer: "port-statistics",
            metricType: METRICTYPE.LONG,
            metricUnit: "bytes/sec",
            tagNames: ["controller", "port", "device"]
        }, {
            metricName: "portstat.sendRate",
            producer: "port-statistics",
            metricType: METRICTYPE.LONG,
            metricUnit: "bytes/sec",
            tagNames: ["controller", "port", "device"]
        }, {
            metricName: "proc.meminfo.memfree",
            producer: "tcollector",
            metricType: METRICTYPE.LONG,
            metricUnit: "bytes",
            tagNames: ["host"]
        }, {
            metricName: "proc.meminfo.memtotal",
            producer: "tcollector",
            metricType: METRICTYPE.LONG,
            metricUnit: "bytes",
            tagNames: ["host"]
        }, {
            metricName: "proc.meminfo.swapfree",
            producer: "tcollector",
            metricType: METRICTYPE.LONG,
            metricUnit: "bytes",
            tagNames: ["host"]
        }, {
            metricName: "proc.meminfo.swaptotal",
            producer: "tcollector",
            metricType: METRICTYPE.LONG,
            metricUnit: "bytes",
            tagNames: ["host"]
        }];

}
