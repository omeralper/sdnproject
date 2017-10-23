/**
 * Created by omeroz on 9/15/2017.
 */
import {Injectable} from "@angular/core";
import {TopologyApi} from "../../../swagger/TopologyApi";
import {TSDBApi} from "../../../swagger/TSDBApi";
import {ListOptions} from "../../../swagger/ListOptions";
import {GenericListRequest} from "../../../swagger/GenericListRequest";
import {MetricNames} from "../../../swagger/MetricNames";
import {PageServices} from "../../PageServices";

@Injectable()
export class StatisticsService {
	constructor(public topologyApi: TopologyApi,
	            public tsdbApi: TSDBApi,
	            public baseServices: PageServices) {

	}

	initSummaryStatistics() {
		let request = this.baseServices.apiHelper.genRequest({
			"options": <ListOptions>{
				"startPage": 0
			}
		});

		return this.topologyApi.topologyLiteControllerListPOST(<GenericListRequest>request);
	}

	initMetrics() {
		let request = this.baseServices.apiHelper.genRequest({
			"metricNames": ["*"]
		});
		return this.tsdbApi.tsdbMetricDefinitionPOST(<MetricNames>request)
	}
}

export let Metrics = {
	"DelayService.link": [
		{
			"metricName": "DelayService.link.delay",
			"producer": "PathDelayService",
			"metricType": "LONG",
			"metricUnit": "miliseconds",
			"tagNames": ["id", "domain"]
		},
		{
			"metricName": "DelayService.link.jitter",
			"producer": "PathDelayService",
			"metricType": "LONG",
			"metricUnit": "miliseconds",
			"tagNames": ["id", "domain"]
		}, {
			"metricName": "DelayService.link.miss",
			"producer": "PathDelayService",
			"metricType": "LONG",
			"metricUnit": "percent",
			"tagNames": ["id", "domain"]
		}],
	"cpu": [
		{
			"metricName": "cpu.idle",
			"producer": "tcollector",
			"metricType": "DOUBLE",
			"metricUnit": "percent",
			"tagNames": ["host", "cpu"]
		},
		{
			"metricName": "sys.cpu.iowait",
			"producer": "tcollector",
			"metricType": "DOUBLE",
			"metricUnit": "miliseconds",
			"tagNames": ["host", "cpu"]
		},
		{
			"metricName": "sys.cpu.user",
			"producer": "tcollector",
			"metricType": "DOUBLE",
			"metricUnit": "miliseconds",
			"tagNames": ["host", "cpu"]
		}],
	"df.bytes": [
		{
			"metricName": "df.bytes.used",
			"producer": "tcollector",
			"metricType": "LONG",
			"metricUnit": "bytes",
			"tagNames": ["host", "mount", "fstype"]
		},
		{
			"metricName": "iostat.disk.msec_read",
			"producer": "tcollector",
			"metricType": "DOUBLE",
			"metricUnit": "miliseconds",
			"tagNames": ["host", "mount", "fstype"]
		},
		{
			"metricName": "iostat.disk.msec_write",
			"producer": "tcollector",
            "metricType": "DOUBLE",
            "metricUnit": "miliseconds",
			"tagNames": ["host", "mount", "fstype"]
		},
		{
			"metricName": "iostat.disk.write_requests",
			"producer": "tcollector",
            "metricType": "LONG",
            "metricUnit": "calls",
			"tagNames": ["domain", "device", "user"]
		},
		{
			"metricName": "df.bytes.free",
			"producer": "tcollector",
			"metricType": "LONG",
			"metricUnit": "bytes",
			"tagNames": ["host", "mount", "fstype"]
		},
		{
			"metricName": "df.bytes.percentused",
			"producer": "tcollector",
			"metricType": "DOUBLE",
			"metricUnit": "percent",
			"tagNames": ["host", "mount", "fstype"]
		},
		{
			"metricName": "iostat.disk.msec_weighted_total",
			"producer": "tcollector",
            "metricType": "DOUBLE",
            "metricUnit": "miliseconds",
			"tagNames": ["domain", "device", "user"]
		}
		],
	"groupstat": [
		{
			"metricName": "groupstat.bytes",
			"producer": "misc-stats",
			"metricType": "LONG",
			"metricUnit": "bytes",
			"tagNames": ["domain", "device", "group"]
		}, {
			"metricName": "groupstat.life",
			"producer": "misc-stats",
			"metricType": "LONG",
			"metricUnit": "seconds",
			"tagNames": ["domain", "device", "group"]
		}, {
			"metricName": "groupstat.packets",
			"producer": "misc-stats",
			"metricType": "LONG",
			"metricUnit": "packets",
			"tagNames": ["domain", "device", "group"]
		}],
	"hoststat": [
		{
			"metricName": "hoststat.receiveByteCount",
			"producer": "host-stats",
			"metricType": "LONG",
			"metricUnit": "bytes",
			"tagNames": ["domain", "device", "user"]
		},
		{
			"metricName": "hoststat.sendByteCount",
			"producer": "host-stats",
			"metricType": "LONG",
			"metricUnit": "bytes",
			"tagNames": ["domain", "device", "user"]
		}],
	"meterstat": [
		{
			"metricName": "meterstat.bytes",
			"producer": "meter-statistics",
			"metricType": "LONG",
			"metricUnit": "bytes",
			"tagNames": ["controller", "meter", "device", "user"]
		}, {
			"metricName": "meterstat.life",
			"producer": "meter-statistics",
			"metricType": "LONG",
			"metricUnit": "seconds",
			"tagNames": ["controller", "meter", "device", "user"]
		}, {
			"metricName": "meterstat.packets",
			"producer": "meter-statistics",
			"metricType": "LONG",
			"metricUnit": "packets",
			"tagNames": ["controller", "meter", "device", "user"]
		}],
	"misc-stats": [
		{
			"metricName": "misc-stats.flow.count",
			"producer": "monitor",
			"metricType": "DOUBLE",
			"metricUnit": "#flows",
			"tagNames": ["domain"]
		}],
	"portstat": [
		{
			"metricName": "portstat.bytesReceived",
			"producer": "port-statistics",
			"metricType": "LONG",
			"metricUnit": "bytes",
			"tagNames": ["controller", "port", "domain", "device"]
		}, {
			"metricName": "portstat.bytesSent",
			"producer": "port-statistics",
			"metricType": "LONG",
			"metricUnit": "bytes",
			"tagNames": ["controller", "port", "domain", "device"]
		}, {
			"metricName": "portstat.collisions",
			"producer": "port-statistics",
			"metricType": "LONG",
			"metricUnit": "packets",
			"tagNames": ["controller", "port", "domain", "device"]
		}, {
			"metricName": "portstat.errorRate",
			"producer": "port-statistics",
			"metricType": "LONG",
			"metricUnit": "packets/sec",
			"tagNames": ["controller", "port", "domain", "device"]
		}, {
			"metricName": "portstat.packetsReceived",
			"producer": "port-statistics",
			"metricType": "LONG",
			"metricUnit": "packets",
			"tagNames": ["controller", "port", "domain", "device"]
		}, {
			"metricName": "portstat.packetsRxDropped",
			"producer": "port-statistics",
			"metricType": "LONG",
			"metricUnit": "packets",
			"tagNames": ["controller", "port", "domain", "device"]
		}, {
			"metricName": "portstat.packetsRxErrors",
			"producer": "port-statistics",
			"metricType": "LONG",
			"metricUnit": "packets",
			"tagNames": ["controller", "port", "domain", "device"]
		}, {
			"metricName": "portstat.packetsSent",
			"producer": "port-statistics",
			"metricType": "LONG",
			"metricUnit": "packets",
			"tagNames": ["controller", "port", "domain", "device"]
		}, {
			"metricName": "portstat.packetsTxDropped",
			"producer": "port-statistics",
			"metricType": "LONG",
			"metricUnit": "packets",
			"tagNames": ["controller", "port", "domain", "device"]
		}, {
			"metricName": "portstat.packetsTxErrors",
			"producer": "port-statistics",
			"metricType": "LONG",
			"metricUnit": "packets",
			"tagNames": ["controller", "port", "domain", "device"]
		}, {
			"metricName": "portstat.receiveRate",
			"producer": "port-statistics",
			"metricType": "LONG",
			"metricUnit": "bytes/sec",
			"tagNames": ["controller", "port", "domain", "device"]
		}, {
			"metricName": "portstat.sendRate",
			"producer": "port-statistics",
			"metricType": "LONG",
			"metricUnit": "bytes/sec",
			"tagNames": ["controller", "port", "domain", "device"]
		}],
	"proc.meminfo": [
		{
			"metricName": "proc.meminfo.swapfree",
			"producer": "tcollector",
			"metricType": "LONG",
			"metricUnit": "bytes",
			"tagNames": ["host"]
		}, {
			"metricName": "proc.meminfo.swaptotal",
			"producer": "tcollector",
			"metricType": "LONG",
			"metricUnit": "bytes",
			"tagNames": ["host"]
		}, {
			"metricName": "proc.meminfo.memfree",
			"producer": "tcollector",
			"metricType": "LONG",
			"metricUnit": "bytes",
			"tagNames": ["host"]
		}, {
			"metricName": "proc.meminfo.memtotal",
			"producer": "tcollector",
			"metricType": "LONG",
			"metricUnit": "bytes",
			"tagNames": ["host"]
		}],
	"queuestat": [
		{
			"metricName": "queuestat.bytes",
			"producer": "misc-stats",
			"metricType": "LONG",
			"metricUnit": "bytes",
			"tagNames": ["domain", "device", "queue"]
		}, {
			"metricName": "queuestat.life",
			"producer": "misc-stats",
			"metricType": "LONG",
			"metricUnit": "seconds",
			"tagNames": ["domain", "device", "queue"]
		}, {
			"metricName": "queuestat.packets",
			"producer": "misc-stats",
			"metricType": "LONG",
			"metricUnit": "packets",
			"tagNames": ["domain", "device", "queue"]
		}],
	"restcall": [
		{
			"metricName": "restcall.count",
			"producer": "api-core",
			"metricType": "LONG",
			"metricUnit": "calls",
			"tagNames": ["username", "url", "status"]
		}],
	"tablestat": [
		{
			"metricName": "tablestat.active",
			"producer": "misc-stats",
			"metricType": "LONG",
			"metricUnit": "activeCount",
			"tagNames": ["domain", "device", "table"]
		}, {
			"metricName": "tablestat.lookup",
			"producer": "misc-stats",
			"metricType": "LONG",
			"metricUnit": "lookupCount",
			"tagNames": ["domain", "device", "table"]
		}, {
			"metricName": "tablestat.matched",
			"producer": "misc-stats",
			"metricType": "LONG",
			"metricUnit": "matchedCount",
			"tagNames": ["domain", "device", "table"]
		}]
};
