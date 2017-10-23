/**
 * Created by omeroz on 2/27/2017.
 */

import {Component, ChangeDetectorRef, OnInit, AfterViewInit, OnDestroy, ElementRef, ViewChild} from "@angular/core";
import {ActivatedRoute, Router, NavigationEnd} from "@angular/router";
import {BasePage} from "../../../commons/BasePage";
import {PageServices} from "../../PageServices";
import {
    ControllerSettingsService, ClusterViews,
    ClusterViewParam
} from "./ControllerSettings/ControllerSettingsService";
import {Subscription} from "rxjs/Subscription";

@Component({
    moduleId: module.id,
    selector: 'ControllerManagement',
    templateUrl: 'ControllerManagement.html',
    providers: []
})
export class ControllerManagement extends BasePage implements OnInit, AfterViewInit, OnDestroy {
    public routerEvents: Subscription;
	public viewSelectedSubscription: Subscription;
    public currentView: ClusterViews = ClusterViews.Cluster;
    ClusterViews = ClusterViews;
    public _mode: any;

    constructor(public route:ActivatedRoute,
                public router:Router,
                public changeDetector: ChangeDetectorRef,
                public controllerSettingsService: ControllerSettingsService,
                baseServices: PageServices,
                elementRef: ElementRef) {
        super(baseServices, elementRef);
        this._mode = this.route.snapshot.params["mode"];
        this.routerEvents = router.events.subscribe((val) => {
            //console.log(val);
            if(val instanceof NavigationEnd) {
                //console.log(this.route.snapshot.params["mode"]);
                this._mode = this.route.snapshot.params["mode"];
                this.changeDetector.detectChanges();
            }
        });
        this.setI18NKey('network_vis.controller_management');

    }

    ngOnInit() {
        super.ngOnInit();
        this.controllerSettingsService.fetchClusterList();
        this.viewSelectedSubscription = this.controllerSettingsService.switchView.subscribe((param: ClusterViewParam) => {
            this.currentView = param.clusterView;
            this.changeDetector.detectChanges();
            this.controllerSettingsService.setView(param);
        });

    }

    ngOnChanges(e) {
        super.ngOnChanges(e);
    }

    ngAfterViewInit() {
        if (super.ngAfterViewInit()) {

            return true;
        }
        return false;
    }

    ngOnDestroy() {
	    this.viewSelectedSubscription && this.viewSelectedSubscription.unsubscribe();
	    this.routerEvents && this.routerEvents.unsubscribe();
        super.ngOnDestroy();
    }

    public get isControllerMode():boolean {
        return this._mode === "ctrl";
    }

    public get isSwitchMode():boolean {
        return this._mode === "switch";
    }

}




