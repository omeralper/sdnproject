/**
 * Created by omeroz on 5/24/2017.
 */

import {Component, ChangeDetectorRef, OnInit, AfterViewInit, OnDestroy, ElementRef, ViewChild} from "@angular/core";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {BasePage} from "../../../commons/BasePage";
import {PageServices} from "../../PageServices";
import {Subscription} from "rxjs";

@Component({
	moduleId: module.id,
	selector: 'BgpManagement',
	templateUrl: './BgpManagement.html',
})
export class BgpManagement extends BasePage implements OnInit, AfterViewInit, OnDestroy {
	BGPViews = BGPViews;
	public currentView:BGPViews = BGPViews.Router;
	public routerEvents: Subscription;

	constructor(public route:ActivatedRoute,
	            public router:Router,
	            public changeDetector: ChangeDetectorRef,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(baseServices, elementRef);
		this.setI18NKey('bgp_management');
		this.routerEvents = router.events.subscribe((val) => {
			if(val instanceof NavigationEnd) {
				this.setTab();
			}
		});

	}

	ngOnInit() {

		super.ngOnInit();
	}

	ngOnChanges(e) {
		super.ngOnChanges(e);
	}

	ngAfterViewInit() {
		this.setTab();
		return super.ngAfterViewInit();
	}

	setTab(){
		let mode = this.route.snapshot.params["mode"];
		$('.nav-tabs a[href="#' + mode + '"]').tab('show');
	}

	ngOnDestroy() {
		this.routerEvents.unsubscribe();
		super.ngOnDestroy();
	}


}

export enum BGPViews{
	Router,
	Peer,
	Route
}




