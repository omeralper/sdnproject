/**
 * Created by omeroz on 9/12/2017.
 */

import {
	Component,
	ElementRef,
	ChangeDetectorRef
} from "@angular/core";
import {PageServices} from "../../PageServices";
import {AbstractGraph} from "../AbstractGraph";
import {RandomStatisticsGenerator} from "../Services/RandomStatisticsGenerator";
import {TsdbServerProxy} from "../Services/TsdbServerProxy";
import {AppsApi} from "../../../swagger/AppsApi";
import {AppDTO} from "../../../swagger/AppDTO";

@Component({
	moduleId: module.id,
	selector: 'restcallgraph',
	templateUrl: "./RestcallGraph.html",
	providers: [AppsApi]
})

export class RestcallGraph extends AbstractGraph {

	public restCallData: Map<string, Map<string, Array<string>>> = new Map(); //app->url->userName
	public selectedApp: RestcallApp = <RestcallApp>{};
	public urlMap: Map<string, Array<string>> = new Map();
	public selectedUrls: Array<string> = [];
	public appList: Array<AppDTO> = [];
	public selectedUrl: RestcallUrl = <RestcallUrl> {};
	public userList: Array<string> = [];
	public selectedUsers: Array<string> = [];

	public selectedUrlCount: number = 0;
	public selectedAppCount: number = 0;

	constructor(public tsdbApi: TsdbServerProxy,
	            public appsApi: AppsApi,
	            public changeDetector: ChangeDetectorRef,
	            public generator: RandomStatisticsGenerator,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(tsdbApi, changeDetector, generator, baseServices, elementRef);
		this.metricName = "restcall";
		this.setMetric();
		this.title = this.t('titles.restcall');
	}

	initParams(datasets) {
		let request = this.baseServices.apiHelper.genFullListRequest();
		this.appsApi
			.aaaAppListPOST(request)
			.subscribe((res) => {
				if (this.baseServices.uiHelper.processResponse(res)) {
					this.appList = res.data.list;

					datasets.forEach((value) => {
						let app = value.tagValues[0].val;
						let url = value.tagValues[1].val;
						let userName = value.tagValues[2].val;

						let urlMap;
						if (this.restCallData.has(app)) {
							urlMap = this.restCallData.get(app);
						} else {
							urlMap = new Map();
							this.restCallData.set(app, urlMap);
						}

						let userArray;
						if (urlMap.has(url)) {
							userArray = urlMap.get(url);
						} else {
							userArray = [];
							urlMap.set(url, userArray);
						}
						userArray.indexOf(userName) == -1 && userArray.push(userName);
					});

					this.restCallData = new Map(this.restCallData);
					let firstApp = this.restCallData.entries().next().value;
					this.appChanged({key: firstApp[0], value: firstApp[1]});
				}
			});
	}

	getAppName(id){
		let app = this.appList.find(a => a.id === id);
		return app ? app.name : 'APP';
	}

	userSelected(values) {
		this.addTag('username', values);
		this.fetchGraphData();
	}

	urlSelected(url: RestcallUrl) {
		this.selectedUrl = url;
		this.selectedUrlCount = 1;
		this.addTag('url', url.key);
		this.userList = url.value;
		this.changeDetector.detectChanges();
		this.selectedUsers = [url.value[0]];
	}

	appChanged(app: RestcallApp) {
		this.selectedApp = app;
		this.selectedAppCount = 1;
		this.addTag('app', this.selectedApp.key);
		this.urlMap = app.value;
		let firstUrl = app.value.entries().next().value;
		this.urlSelected({key: firstUrl[0], value: firstUrl[1]});
	}
}

export interface RestcallApp {
	key: string;
	value: Map<string, Array<string>>;
}

export interface RestcallUrl {
	key: string;
	value: Array<string>;
}

