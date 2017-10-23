/**
 * Created by omeroz on 1/12/2017.
 */

import {
	Component,
	OnInit,
	ElementRef,
	EventEmitter
} from "@angular/core";
import {PageServices} from "../../../../PageServices";
import {DhcpScopeDTO} from "../../../../../swagger/DhcpScopeDTO";
import {DhcpApi} from "../../../../../swagger/DhcpApi";
import {BasePage} from "../../../../../commons/BasePage";
import {DhcpIpRangeDTO} from "../../../../../swagger/DhcpIpRangeDTO";
import {DhcpOptionDTO} from "../../../../../swagger/DhcpOptionDTO";
import {Action} from "../../../../../commons/Action";
import {DeleteOptions} from "../../../../../swagger/DeleteOptions";
import {GenericDeleteRequest} from "../../../../../swagger/GenericDeleteRequest";
import {OPTIONTYPE} from "../../../../../swagger/OPTIONTYPE";

@Component({
	moduleId: module.id,
	selector: 'DhcpPropertiesList',
	templateUrl: './DhcpPropertiesList.html',
	providers: [DhcpApi],
	inputs: ['dhcpScope', 'dhcpOptionKeys'],
	outputs: ['rangeSelected', 'optionSelected', 'scopeSelected']
})
export class DhcpPropertiesList extends BasePage implements OnInit {

	public dhcpScope: DhcpScopeDTO = <DhcpScopeDTO>{};
	public rangeSelected: EventEmitter<DhcpIpRangeDTO> = new EventEmitter();
	public optionSelected: EventEmitter<DhcpOptionDTO> = new EventEmitter();
	public scopeSelected: EventEmitter<any> = new EventEmitter();
	public dhcpOptionKeys = {};
	public times = {
		"minute": 60,
		"hour": 3600,
		"day": 86400,
		"week": 604800,
		"month": 2592000,
		"year": 31536000,
	};

	constructor(public dhcpApi: DhcpApi,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(baseServices, elementRef);
		this.setI18NKey('settings.dhcp.edit');
	}


	ngOnInit() {
		super.ngOnInit();
	}

	/**
	 * Opsiyon eğer tarih değeriyse, tarih formatında gösterir.
	 * @param optionValue
	 * @param optionKey
	 */
	formatOptionValue(optionValue, optionKey) {
		if (!this.dhcpOptionKeys[optionKey])
			return optionValue;

		switch (this.dhcpOptionKeys[optionKey].type) {
			default:
				return optionValue;
			case OPTIONTYPE.DATE_TIME:
				let val = +optionValue;
				let result = "";
				for (let time in this.times) {
					if (val % this.times[time] == 0) {
						result = val / this.times[time] + " " + this.t("option." + time);
					}
				}
				return result;
		}
	}

	addRange(e) {
		e.stopPropagation();
		let newRange: DhcpIpRangeDTO = this.baseServices.apiHelper.genDTO({});
		newRange.dhcpScopeId = this.dhcpScope.id;
		newRange.ipsReservedDtos = [];
		newRange.ipsExcludedDtos = [];
		this.dhcpScope.dhcpIpRangeDtos.push(newRange);
		setTimeout(() => {
			$('#scopes a:last', this.elementRef.nativeElement)[0].click();
		}, 10);
	}

	addOption(e) {
		e.stopPropagation();
		let newOption: DhcpOptionDTO = this.baseServices.apiHelper.genDTO({});
		newOption.dhcpScopeId = this.dhcpScope.id;
		this.dhcpScope.dhcpOptionDtos.push(newOption);
		setTimeout(() => {
			$('#options a:last', this.elementRef.nativeElement)[0].click();
		}, 10);
	}

	selectOption(option, e) {
		this.optionSelected.next(option);
		this.$container.find('.selected').removeClass('selected');
		$(e.target).closest('.list-group-item').addClass('selected');
	}

	selectRange(range, e) {
		this.rangeSelected.next(range);
		this.$container.find('.selected').removeClass('selected');
		$(e.target).closest('.list-group-item').addClass('selected');
	}

	selectScope(e) {
		this.scopeSelected.next();
		this.$container.find('.selected').removeClass('selected');
		$(e.target).closest('.list-group-item').addClass('selected');
	}

	removeOption(itm: DhcpOptionDTO) {
		let message = itm.dhcpOptionKey ? this.t('messages.delete_confirm_option', {dto: {keyName: this.dhcpOptionKeys[itm.dhcpOptionKey].name || itm.dhcpOptionKey}}) :
			this.t('messages.delete_confirm');
		this.baseServices.uiHelper.confirm(message, (selected: Action) => {
			if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
				if (itm.id) {
					let request = this.baseServices.apiHelper.genRequest({
						options: <DeleteOptions> {
							id: itm.id,
							isReturnModel: false
						}
					});
					let s =
						this.dhcpApi
							.dhcpWebOptionDeletePOST(<GenericDeleteRequest>request)
							.subscribe((res) => {
								if (this.baseServices.uiHelper.processResponse(res, this.t('messages.delete_success_option', {dto: {keyName: this.dhcpOptionKeys[itm.dhcpOptionKey].name || itm.dhcpOptionKey}}))) {
									removeOptionSucess();
								}
							});
					this.subscriptions.push(s);
				} else {
					removeOptionSucess();
				}
			}
		});

		let removeOptionSucess = () => {
			let i = this.dhcpScope.dhcpOptionDtos.indexOf(itm);
			this.dhcpScope.dhcpOptionDtos.splice(i, 1);
			this.scopeSelected.next();
		}
	}

	removeRange(itm: DhcpIpRangeDTO) {
		let message = itm.ipStart ? this.t('messages.delete_confirm_range', {dto: itm}) :
			this.t('messages.delete_confirm');
		this.baseServices.uiHelper.confirm(message, (selected: Action) => {
			if (selected === this.baseServices.uiHelper.DIALOG_BUTTONS.YES) {
				if (itm.id) {
					let request = this.baseServices.apiHelper.genRequest({
						options: <DeleteOptions> {
							id: itm.id,
							isReturnModel: false
						}
					});
					let s =
						this.dhcpApi
							.dhcpWebIpRangeDeletePOST(<GenericDeleteRequest>request)
							.subscribe((res) => {
								if (this.baseServices.uiHelper.processResponse(res, this.t('messages.delete_success_range', {dto: itm}))) {
									removeRangeSuccess();
								}
							});
					this.subscriptions.push(s);
				} else {
					removeRangeSuccess();
				}
			}
		});
		let removeRangeSuccess = () => {
			let i = this.dhcpScope.dhcpIpRangeDtos.indexOf(itm);
			this.dhcpScope.dhcpIpRangeDtos.splice(i, 1);
			this.scopeSelected.next();
		};
	}
}

