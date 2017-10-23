/**
 * Created by omeroz on 9/11/2017.
 */

import {
	Component,
	ElementRef,
	ChangeDetectorRef,
} from "@angular/core";
import {PageServices} from "../../PageServices";
import {RandomStatisticsGenerator} from "../Services/RandomStatisticsGenerator";
import {AbstractGraph} from "../AbstractGraph";
import {TsdbServerProxy} from "../Services/TsdbServerProxy";
import {HostDTO} from "../../../swagger/HostDTO";

@Component({
	moduleId: module.id,
	selector: 'usergraph',
	templateUrl: "./UserGraph.html",
	inputs: ['allMetrics', 'selectedHosts'],
})

export class UserGraph extends AbstractGraph {
	public hosts: Array<string> = [];
	public users: Map<string, Array<string>> = new Map();
	public selectedUser: UserHostKeyValuePair = <UserHostKeyValuePair>{};
	public selectedUserCount = 0;
	public selectedHosts: Array<string> = [];

	constructor(public tsdbApi: TsdbServerProxy,
	            public changeDetector: ChangeDetectorRef,
	            public generator: RandomStatisticsGenerator,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(tsdbApi, changeDetector, generator, baseServices, elementRef);
		this.metricName = "hoststat";
		this.setMetric();
		this.title = this.t('titles.hoststat');
	}

	initParams(datasets) {
		datasets.forEach((value) => {
			let userName = value.tagValues[1].val;
			!this.users.has(userName) && this.users.set(userName, []);

			let hosts = this.users.get(userName);
			hosts.push(value.tagValues[0].val);
		});
		this.users = new Map(this.users);
		let u = this.users.entries().next().value;

		if (this.selectedHosts.length) {
			this.hostSelected(this.selectedHosts);
		} else {
			this.userChanged({key: u[0], value: u[1]});
		}
	}

	hostSelected(values) {
		this.addTag('host', values);
		this.fetchGraphData();
	}

	userChanged(user: UserHostKeyValuePair) {
		this.selectedUser = user;
		this.addTag('user', this.selectedUser.key);
		this.selectedUserCount = 1;
		this.hosts = user.value;
		this.changeDetector.detectChanges();
		this.selectedHosts = [this.hosts[0]];
	}
}

export interface UserHostKeyValuePair {
	key: string;
	value: Array<string>;
}



