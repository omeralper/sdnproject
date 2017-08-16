/**
 * Created by omeroz on 1/12/2017.
 */
import {Component, OnInit, AfterViewInit, OnDestroy, OnChanges, ElementRef, ChangeDetectorRef} from "@angular/core";
import {PageServices} from "../../../../../PageServices";
import {DhcpApi} from "../../../../../../swagger/DhcpApi";
import {DhcpScopeDTO} from "../../../../../../swagger/DhcpScopeDTO";
import {DhcpOptionDTO} from "../../../../../../swagger/DhcpOptionDTO";
import {BasePage} from "../../../../../../commons/BasePage";
import {DhcpOptionRequest} from "../../../../../../swagger/DhcpOptionRequest";
import {DIALOG_TYPES} from "../../../../../UIHelper";
import {OPTIONTYPE} from "../../../../../../swagger/OPTIONTYPE";
import {DhcpOptionKeyDTO} from "../../../../../../swagger/DhcpOptionKeyDTO";

@Component({
    moduleId: module.id,
    selector: 'DhcpOption',
    templateUrl: './DhcpOption.html',
    providers: [DhcpApi],
    inputs: ['dhcpOptionKeys', 'scope']
})
export class DhcpOption extends BasePage implements OnInit, AfterViewInit,OnChanges, OnDestroy {
    public option: DhcpOptionDTO = <DhcpOptionDTO>{};
    public hasChanged: boolean = false;
    public originalOption: DhcpOptionDTO;
    public get optionKey():DhcpOptionKeyDTO {
        return this.option.dhcpOptionKey ? this.dhcpOptionKeys[this.option.dhcpOptionKey.toString()] : null;
    }
    public dhcpOptionKeys = {};
    public dhcpOptionNamesFiltered = {};
    public scope: DhcpScopeDTO = <DhcpScopeDTO>{};
    public types = OPTIONTYPE;
    public times = {
        "minute": 60,
        "hour": 3600,
        "day": 86400,
        "week": 604800,
        "month": 2592000,
        "year": 31536000,
    };
    timeValue = 0;
    timeUnit = 0;

    constructor(public changeDetector: ChangeDetectorRef,
                public dhcpApi: DhcpApi,
                baseServices: PageServices,
                elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('settings.dhcp.edit');
    }

    ngOnInit() {
        super.ngOnInit();
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
    	this.hasChanged = false;
        this.option = this.baseServices.apiHelper.cloneObject(option);
        this.originalOption = option;
        this.dhcpOptionNamesFiltered = {};
        let filteredKeys =
            Object.keys(this.dhcpOptionKeys).filter((optionKey) => {
                if (optionKey == (this.option.dhcpOptionKey + ""))
                    return true;
                return !this.scope.dhcpOptionDtos.find((option) => {
                    return option.dhcpOptionKey + "" == optionKey;
                });
            });

        filteredKeys.forEach((key) => {
            this.dhcpOptionNamesFiltered[key] = this.dhcpOptionKeys[key];
        });

        if (this.option.dhcpOptionKey &&
            this.dhcpOptionKeys[this.option.dhcpOptionKey] &&
            this.dhcpOptionKeys[this.option.dhcpOptionKey].type == OPTIONTYPE.DATE_TIME) {
            let val = +this.option.dhcpOptionValue;
            for (let time in this.times) {
                if (val % this.times[time] == 0) {
                    this.timeUnit = this.times[time];
                    this.timeValue = (val / this.times[time]);
                }
            }
        }
        this.changeDetector.detectChanges();
    }

    modelChanged() {
        this.hasChanged = true;
	    this.changeDetector.detectChanges();
    }

    save() {
        let form: any = $('form', this.elementRef.nativeElement)[0];
        if (!form.checkValidity()) {
            this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
            return;
        }

        let request: DhcpOptionRequest = <DhcpOptionRequest>this.baseServices.apiHelper.genRequest({
            data: <DhcpOptionDTO> this.option
        });

        this.dhcpApi
            .dhcpWebOptionSavePOST(request)
            .subscribe(
                (res) => {
                    if (this.baseServices.uiHelper.processResponse(res,
                            this.t(this.option.id ? 'messages.save_success_option' : 'messages.create_success_option', { optionKey: this.optionKey, dto: res.data}))) {
                        //update original object with changes
                        this.baseServices.apiHelper.copyObject(this.originalOption, res.data);
                        this.optionSelected(this.originalOption);
                    }
                },
                (error: any) => {
                    this.baseServices.uiHelper.processResponse(error._body);
                }
            );
    }

    cancel() {
        this.optionSelected(this.originalOption);
    }

}

