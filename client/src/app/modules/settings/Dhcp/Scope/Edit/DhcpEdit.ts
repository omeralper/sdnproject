/**
 * Created by omeroz on 11.01.2017.
 */
import {
    Component, OnInit, AfterViewInit, OnDestroy, OnChanges, ElementRef, ChangeDetectorRef,
    ViewChild
} from "@angular/core";
import {PageServices} from "../../../../PageServices";
import {BasePopupEditPage} from "../../../../../commons/BasePopupEditPage/BasePopupEditPage";
import {MODAL_SIZE} from "../../../../ModalComponent";
import {DhcpScopeDTO} from "../../../../../swagger/DhcpScopeDTO";
import {DhcpApi} from "../../../../../swagger/DhcpApi";
import {DhcpIpRangeDTODef} from "../../../../../swagger/DhcpIpRangeDTO";
import {DhcpOptionDTODef} from "../../../../../swagger/DhcpOptionDTO";
import {QUERYOP} from "../../../../../swagger/QUERYOP";
import {GenericSearchRequest} from "../../../../../swagger/GenericSearchRequest";
import {SearchOptions} from "../../../../../swagger/SearchOptions";
import {Observable} from 'rxjs/Rx';
import {DhcpIpRangeListResponse} from "../../../../../swagger/DhcpIpRangeListResponse";
import {DhcpOptionListResponse} from "../../../../../swagger/DhcpOptionListResponse";
import {ListOptions} from "../../../../../swagger/ListOptions";

@Component({
    moduleId: module.id,
    selector: 'DhcpEdit',
    templateUrl: './DhcpEdit.html',
    providers: [DhcpApi]
})
export class DhcpEdit extends BasePopupEditPage<DhcpScopeDTO> implements OnInit, AfterViewInit,OnChanges, OnDestroy {

    public selectedDetailType = 'scope';
    // public selectedOption: DhcpOptionDTO = <DhcpOptionDTO>{};
    public dhcpOptionKeys = {};
    @ViewChild('dhcpOption') dhcpOption;
    @ViewChild('dhcpRange') dhcpRange;

    constructor(public changeDetector: ChangeDetectorRef,
                public dhcpApi: DhcpApi,
                baseServices: PageServices,
                elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.modalSize = MODAL_SIZE.LARGE;
        this.setI18NKey('settings.dhcp.edit');
        if (this.isNewItem) {
            this.data = this.baseServices.apiHelper.genDTO(this.data);
            this.data.dhcpIpRangeDtos = [];
            this.data.dhcpOptionDtos = [];
        }
    }

    ngOnInit() {
        super.ngOnInit();
        !this.isNewItem && this.initData();
        this.initOptionKeys();
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
        super.ngOnDestroy();
    }

    optionSelected(option) {
        this.selectedDetailType = 'option';
        this.changeDetector.detectChanges();
        this.dhcpOption.optionSelected(option);
    }

    rangeSelected(range){
        this.selectedDetailType = 'range';
        this.changeDetector.detectChanges();
        this.dhcpRange.rangeSelected(range);
    }

    initData() {
        let queue = [];
        let rangeSearchRequest: GenericSearchRequest = this.baseServices.apiHelper.genRequest({
            options: <SearchOptions>{
                fields: Object.keys(DhcpIpRangeDTODef.fields),
                queryOptions: {
                    operator: QUERYOP.VALUE,
                    fieldName: "dhcpScopeId",
                    fieldValue: this.data.id
                },
                startPage: 0
            }
        });

        let optionSearchRequest: GenericSearchRequest = this.baseServices.apiHelper.genRequest({
            options: <SearchOptions>{
                fields: Object.keys(DhcpOptionDTODef.fields),
                queryOptions: {
                    operator: QUERYOP.VALUE,
                    fieldName: "dhcpScopeId",
                    fieldValue: this.data.id
                },
                startPage: 0
            }
        });

        queue.push(this.dhcpApi.dhcpWebIpRangeSearchPOST(rangeSearchRequest));
        queue.push(this.dhcpApi.dhcpWebOptionSearchPOST(optionSearchRequest));


        Observable.forkJoin(queue).subscribe((results) => {
            let rangeResult = <DhcpIpRangeListResponse>results[0];
            let optionResult = <DhcpOptionListResponse>results[1];

            if (this.baseServices.uiHelper.processResponse(rangeResult) &&
                this.baseServices.uiHelper.processResponse(optionResult)) {

                this.data.dhcpIpRangeDtos = rangeResult.data.list;
                this.data.dhcpOptionDtos = optionResult.data.list;

                this.changeDetector.detectChanges();
            }
        });
    }

    initOptionKeys() {
        let listRequest = this.baseServices.apiHelper.genRequest({
            options: <ListOptions> {
                startPage: 0
            }
        });
        this.dhcpApi
            .dhcpWebOptionKeyListPOST(listRequest)
            .subscribe((optionNames) => {
                if (this.baseServices.uiHelper.processResponse(optionNames)) {
                    optionNames.data.list.forEach((val) => {
                        this.dhcpOptionKeys[val.optionNumber + ""] = {name: val.name, type: val.optionType};
                    });
                    this.changeDetector.detectChanges();
                }
            });
    }

}


