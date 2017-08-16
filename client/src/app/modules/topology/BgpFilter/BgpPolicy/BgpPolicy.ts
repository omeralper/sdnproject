/**
 * Created by omeroz on 7/20/2017.
 */
import {Component, OnInit, OnDestroy, ElementRef, OnChanges, Input} from "@angular/core";
import {BasePage} from "../../../../commons/BasePage";
import {PageServices} from "../../../PageServices";
import {SdnipStatementDTO} from "../../../../swagger/SdnipStatementDTO";
import {SDNIPMATCHTYPE} from "../../../../swagger/SDNIPMATCHTYPE";
import {SDNIPROUTEACTION} from "../../../../swagger/SDNIPROUTEACTION";
import {SdnipPolicyApi} from "../../../../swagger/SdnipPolicyApi";
import {SdnipDefinedSetListResponse} from "../../../../swagger/SdnipDefinedSetListResponse";
import {SdnipDefinedSetDTO, SdnipDefinedSetDTODef} from "../../../../swagger/SdnipDefinedSetDTO";
import {SDNIPDEFINEDSETTYPE} from "../../../../swagger/SDNIPDEFINEDSETTYPE";
import {SortOptions} from "../../../../swagger/SortOptions";
import {SdnipMatchSetDTO} from "../../../../swagger/SdnipMatchSetDTO";

@Component({
	moduleId: module.id,
	selector: 'BgpPolicy',
	templateUrl: './BgpPolicy.html',
})

export class BgpPolicy extends BasePage implements OnInit, OnDestroy, OnChanges {

	SDNIPMATCHTYPE = SDNIPMATCHTYPE;
	SDNIPROUTEACTION = SDNIPROUTEACTION;
	SDNIPDEFINEDSETTYPE = SDNIPDEFINEDSETTYPE;

	@Input()
	public statement: SdnipStatementDTO = <SdnipStatementDTO>{};
	osPolicy: Array<SdnipDefinedSetDTO> = [];
	neighbor: Array<SdnipDefinedSetDTO> = [];
	prefix: Array<SdnipDefinedSetDTO> = [];

	constructor(public sdnipPolicyApi: SdnipPolicyApi,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(baseServices, elementRef);
		this.setI18NKey('bgp_filter.policy.edit');
	}

	ngOnChanges(e) {
		super.ngOnChanges(e);
	}

	ngOnInit() {
		super.ngOnInit();
		let req = this.baseServices.apiHelper.genFullListRequest(<SortOptions>{}, Object.keys(SdnipDefinedSetDTODef.fields));

		this.sdnipPolicyApi
			.sdnipPolicyDefinedSetSearchPOST(req)
			.subscribe((res: SdnipDefinedSetListResponse) => {
				this.osPolicy = res.data.list.filter(r => r.definedSetType == SDNIPDEFINEDSETTYPE.AS_PATH);
				this.neighbor = res.data.list.filter(r => r.definedSetType == SDNIPDEFINEDSETTYPE.NEIGHBOR);
				this.prefix = res.data.list.filter(r => r.definedSetType == SDNIPDEFINEDSETTYPE.PREFIX);

			});
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}
}