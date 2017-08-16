/**
 * Created by omeroz on 2/27/2017.
 */
import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef, EventEmitter, ChangeDetectorRef} from "@angular/core";
import {BasePage} from "../../../../../commons/BasePage";
import {PageServices} from "../../../../PageServices";
import {ControllerNodeDTO} from "../../../../../swagger/ControllerNodeDTO";
import {ControllerEditPopup} from "../ControllerEditPopup";
import {ControllerSettingsService, ClusterViewParam, ClusterViews} from "../ControllerSettingsService";

@Component({
    moduleId: module.id,
    selector: 'ControllerView',
    templateUrl: 'ControllerView.html',
})

export class ControllerView extends BasePage implements OnInit, AfterViewInit, OnDestroy {
    controller: ControllerNodeDTO = <ControllerNodeDTO>{};
    ClusterViews = ClusterViews;
    subscription;

    constructor(public controllerSettingsService: ControllerSettingsService,
                public changeDetector: ChangeDetectorRef,
                baseServices: PageServices,
                elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('network_vis.controller_management.controllerSettings.controller');
    }

    ngOnInit() {
        super.ngOnInit();
        this.subscription = this.controllerSettingsService.viewSelected.subscribe((param: ClusterViewParam) => {
            this.controller = param.data;
            this.changeDetector.detectChanges();
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
        this.subscription.unsubscribe();
        super.ngOnDestroy();
    }

    edit() {
        this.baseServices.sharedService.showModal(ControllerEditPopup, this.controller, (result) => {
            if (result.isSuccess) {
                this.controller = result.data;
                let clstr = this.controllerSettingsService.clusterList.filter(cluster => cluster.id ==  this.controller.clusterId)[0];
                let ctrl = clstr.controllerList.filter(ctrl => ctrl.id == this.controller.id)[0];
                let i = clstr.controllerList.indexOf(ctrl);
                clstr.controllerList[i] = this.controller;

                this.controllerSettingsService.clusterListUpdated.next();
            }
        });
    }

    selectView(view) {
        this.controllerSettingsService.selectView(view, this.controller);
    }
}
