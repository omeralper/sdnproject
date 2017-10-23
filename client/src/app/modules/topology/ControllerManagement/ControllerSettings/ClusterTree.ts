/**
 * Created by omeroz on 2/27/2017.
 */

import {Component, ChangeDetectorRef, OnInit, AfterViewInit, OnDestroy, ElementRef, ViewChild} from "@angular/core";
import {BasePage} from "../../../../commons/BasePage";
import {PageServices} from "../../../PageServices";
import {ControllerApi} from "../../../../swagger/ControllerApi";
import {ControllerSettingsService, ClusterViews, ClusterViewParam, CustomClusterDTO} from "./ControllerSettingsService";
import {Subscription} from "rxjs";
import {Tree, TreeItem} from "../../../shared/components/Tree/Tree";
import {ControllerNodeDTO} from "../../../../swagger/ControllerNodeDTO";
import {ClusterDTO} from "../../../../swagger/ClusterDTO";
import {CONTROLLERSTATUS} from "../../../../swagger/CONTROLLERSTATUS";

@Component({
	moduleId: module.id,
	selector: 'ClusterTree',
	templateUrl: './ClusterTree.html',
})
export class ClusterTree extends BasePage implements OnInit, AfterViewInit, OnDestroy {
	public treeData: Array<TreeItem<ClusterDTO>> = [];
	@ViewChild(Tree) tree: Tree<ClusterDTO>;
	clusterListSubsription: Subscription;
	viewSelectedSubscription: Subscription;

	constructor(public changeDetector: ChangeDetectorRef,
	            public controllerSettingsService: ControllerSettingsService,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(baseServices, elementRef);
		this.setI18NKey('network_vis.controller_management.controllerSettings.clusterTree');

	}

	ngOnInit() {
		super.ngOnInit();
		this.clusterListSubsription = this.controllerSettingsService.clusterListUpdated.subscribe(() => {
				this.treeData = this.controllerSettingsService.clusterList.map((cluster: CustomClusterDTO) => {
					let treeCluster: TreeItem<ClusterDTO> = <TreeItem<ClusterDTO>>{};
					treeCluster.id = cluster.id + ClusterViews.Cluster + "";
					treeCluster.name = cluster.name;
					treeCluster.data = cluster;
					treeCluster.type = ClusterViews.Cluster;

					treeCluster.children = cluster.controllerList && cluster.controllerList.map((controller: ControllerNodeDTO) => {
							let treeController: TreeItem<ClusterDTO> = <TreeItem<ClusterDTO>>{};
							treeController.id = controller.id + ClusterViews.Controller + "";
							treeController.name = controller.name + ' ' + (controller.status == CONTROLLERSTATUS.PASSIVE ? this.t('passiveController') : '');
							treeController.data = controller;
							treeController.type = ClusterViews.Controller;
							treeController.children = [
								<TreeItem<ClusterDTO>>{
									id: controller.id + ClusterViews.Parameter + "",
									name: this.t('parameters'),
									iconClass: "fa fa-sliders ",
									className: controller.status == CONTROLLERSTATUS.PASSIVE ? 'disabled' : '',
									data: controller,
									type: ClusterViews.Parameter
								},
								controller.featureVisible ?
									<TreeItem<ClusterDTO>>{
										id: controller.id + ClusterViews.Task + "",
										name: this.t('tasks'),
										iconClass: "fa fa-tasks",
										data: controller,
										type: ClusterViews.Task
									} : null,
								controller.featureVisible ?
									<TreeItem<ClusterDTO>>{
										id: controller.id + ClusterViews.Switch + "",
										name: this.t('switches'),
										iconClass: "fa fa-exchange",
										data: controller,
										type: ClusterViews.Switch
									} : null
							].filter(c => !!c);
							return treeController;
						});
					return treeCluster;
				});
				this.changeDetector.detectChanges();
				this.controllerSettingsService.selectView(ClusterViews.Cluster, this.treeData[0].data);
			}
		);

		this.viewSelectedSubscription = this.controllerSettingsService.viewSelected.subscribe((param: ClusterViewParam) => {
			this.tree.selectItem(param.data.id + param.clusterView + "");
		});
	}

	ngOnChanges(e) {
		super.ngOnChanges(e);
	}

	ngAfterViewInit() {
		return super.ngAfterViewInit();
	}

	ngOnDestroy() {
		this.clusterListSubsription.unsubscribe();
		this.viewSelectedSubscription.unsubscribe();
		super.ngOnDestroy();
	}


	selectView(treeItem: TreeItem<ClusterDTO>) {
		if (treeItem.className != 'disabled')
			this.controllerSettingsService.selectView(treeItem.type, treeItem.data);
	}
}


