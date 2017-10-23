/**
 * Created by omeroz on 5/24/2017.
 */

import {
	Component,
	OnInit,
	ElementRef, ViewChild, ChangeDetectorRef
} from "@angular/core";
import {PageServices} from "../../../PageServices";
import {DhcpApi} from "../../../../swagger/DhcpApi";
import {BasePage} from "../../../../commons/BasePage";
import {Tree, TreeItem} from "../../../shared/components/Tree/Tree";
import {WanDomainDTO} from "../../../../swagger/WanDomainDTO";
import {WANDOMAINApi} from "../../../../swagger/WANDOMAINApi";

@Component({
	moduleId: module.id,
	selector: 'DhcpConfiguration',
	templateUrl: './DhcpConfiguration.html',
	providers: [DhcpApi],
})
export class DhcpConfiguration extends BasePage implements OnInit {

	@ViewChild(Tree) tree: Tree<WanDomainDTO>;
	domains: Array<TreeItem<WanDomainDTO>> = [];
	selectedDomain: WanDomainDTO = <WanDomainDTO>{};

	constructor(public wanDOMAINApi: WANDOMAINApi,
	            public changeDetector: ChangeDetectorRef,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(baseServices, elementRef);
	}

	ngOnInit() {
		super.ngOnInit();
		this.fetchClusters();
	}

	fetchClusters() {

		let request = this.baseServices.apiHelper.genFullListRequest();
		let s =
			this.wanDOMAINApi
				.wanConfigurationWanDomainListPOST(request)
				.subscribe(
					(res) => {
						if (this.baseServices.uiHelper.processResponse(res)) {
							this.domains = res.data.list.map((d: WanDomainDTO) => {
								return {
									id: d.id,
									name: d.name,
									data: d
								}
							});
							this.changeDetector.detectChanges();
							if (this.domains.length > 0) {
								this.tree.selectItem(1);
								this.selectedDomain = this.domains[0].data;
							}
						}
					},
					(error: any) => {
						this.baseServices.uiHelper.processResponse(error._body);
					}
				);
		this.subscriptions.push(s);
	}

	domainClicked(domain: TreeItem<WanDomainDTO>) {
		this.selectedDomain = domain.data;
	}
}


