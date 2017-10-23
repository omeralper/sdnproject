/**
 * Created by omeroz on 1/16/2017.
 */
import {Component, OnInit, AfterViewInit, OnDestroy, OnChanges, ElementRef, ChangeDetectorRef} from "@angular/core";
import {PageServices} from "../../../../../PageServices";
import {DIALOG_TYPES} from "../../../../../UIHelper";
import {DhcpApi} from "../../../../../../swagger/DhcpApi";
import {DhcpIpRangeDTO} from "../../../../../../swagger/DhcpIpRangeDTO";
import {DhcpIpReservedDTO, DhcpIpReservedDTODef} from "../../../../../../swagger/DhcpIpReservedDTO";
import {DhcpIpExcludedDTO, DhcpIpExcludedDTODef} from "../../../../../../swagger/DhcpIpExcludedDTO";
import {BasePage} from "../../../../../../commons/BasePage";
import {DhcpIpRangeRequest} from "../../../../../../swagger/DhcpIpRangeRequest";
import {DhcpIpExcludedRequest} from "../../../../../../swagger/DhcpIpExcludedRequest";
import {DhcpIpReservedRequest} from "../../../../../../swagger/DhcpIpReservedRequest";
import {DeleteOptions} from "../../../../../../swagger/DeleteOptions";
import {GenericDeleteRequest} from "../../../../../../swagger/GenericDeleteRequest";
import {GenericSearchRequest} from "../../../../../../swagger/GenericSearchRequest";
import {SearchOptions} from "../../../../../../swagger/SearchOptions";
import {QUERYOP} from "../../../../../../swagger/QUERYOP";
import {Observable} from 'rxjs/Rx';
import {DhcpIpExcludedListResponse} from "../../../../../../swagger/DhcpIpExcludedListResponse";
import {DhcpIpReservedListResponse} from "../../../../../../swagger/DhcpIpReservedListResponse";
import {DhcpIpPoolDTO, DhcpIpPoolDTODef} from "../../../../../../swagger/DhcpIpPoolDTO";
import {DhcpIpReservedUserDTO, DhcpIpReservedUserDTODef} from "../../../../../../swagger/DhcpIpReservedUserDTO";
import {DhcpIpReservedUserRequest} from "../../../../../../swagger/DhcpIpReservedUserRequest";
import {NacUserApi} from "../../../../../../swagger/NacUserApi";
import {NacUserDTO} from "../../../../../../swagger/NacUserDTO";
import {DhcpIpReservedUserListResponse} from "../../../../../../swagger/DhcpIpReservedUserListResponse";

@Component({
	moduleId: module.id,
	selector: 'DhcpRange',
	templateUrl: './DhcpRange.html',
	providers: [DhcpApi],
})
export class DhcpRange extends BasePage implements OnInit, AfterViewInit, OnChanges, OnDestroy {
	public range: DhcpIpRangeDTO = <DhcpIpRangeDTO>{};
	public newExcludedAddress: DhcpIpExcludedDTO = <DhcpIpExcludedDTO>{};
	public newReservedAddress: DhcpIpReservedDTO = <DhcpIpReservedDTO>{};
	public newReservedUserAddress: DhcpIpReservedUserDTO = <DhcpIpReservedUserDTO>{};
	public maskBitLength;
	public pools: Array<string> = [];
	public poolsStr: string;
	private userList: Array<NacUserDTO>;

	public get isEditMode(): boolean {
		return !!this.range.id;
	}

	constructor(public changeDetector: ChangeDetectorRef,
	            public dhcpApi: DhcpApi,
	            public nacUserApi: NacUserApi,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(baseServices, elementRef);
		this.setI18NKey('settings.dhcp.edit');

	}

	ngOnInit() {
		super.ngOnInit();
		this.fetchPools();
	}

	ngOnChanges(e) {
		super.ngOnChanges(e);
	}

	fetchPools() {
		let request = this.baseServices.apiHelper.genFullListRequest(null, Object.keys(DhcpIpPoolDTODef.fields));
		let s =
			this.dhcpApi.dhcpWebIpPoolSearchPOST(request).subscribe((res) => {
				if (this.baseServices.uiHelper.processResponse(res)) {
					this.poolsStr = res.data.list
						.map(p => {
							let bitValue = this.decimalToBinary(p.subnetMask);
							return p.ipAddress + '/' + (bitValue.lastIndexOf("1") + 1);
						})
						.join(', ');
					this.changeDetector.detectChanges();
				}
			});
		this.subscriptions.push(s);
	}

	endIpBlur(e) {

	}

	startIpBlur(e) {

	}


	rangeSelected(range) {
		this.range = range;
		this.initData();
		let bitValue = this.decimalToBinary(this.range.networkMask);
		this.newExcludedAddress = <DhcpIpExcludedDTO>{};
		this.newReservedAddress = <DhcpIpReservedDTO>{};
		this.maskBitLength = bitValue.lastIndexOf("1") + 1;
		$('#rangeTabs  a:first').tab('show');
	}

	ngAfterViewInit() {
		if (super.ngAfterViewInit()) {
			let $reservedUsername = $('#newReservedUsername', this.$container);
			$reservedUsername.typeahead(
				{
					minLength: 1,
					highlight: true
				},
				{
					name: 'my-dataset',
					async: true,
					source: (query, syncResults, asyncResults) => {
						this.searchNasUsers(query, (users) => {
							if (users && users.length > 0) {
								this.userList = users;
								let data = [];
								for (let i = 0; i < this.userList.length; i++) {
									if (this.userList[i].username.indexOf(query) > -1) {
										//data.push(this.userList[i].username);
										data.push(this.userList[i]);
									}
								}
								asyncResults(data);
							}
							asyncResults([]);
						});
					},
					display: (suggestion: any) => {
						return suggestion.username;
					}
				}
			);
			$reservedUsername.on('typeahead:select', (ev, suggestion) => {
				this.newReservedUserAddress.username = suggestion.username;
				this.newReservedUserAddress.userId = suggestion.id;
			});
			return true;
		}
		return false;
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}

	initData() {
		let queue = [];
		let excludedSearchRequest: GenericSearchRequest = this.baseServices.apiHelper.genRequest({
			options: <SearchOptions>{
				fields: Object.keys(DhcpIpExcludedDTODef.fields),
				queryOptions: {
					operator: QUERYOP.VALUE,
					fieldName: "dhcpRangeId",
					fieldValue: this.range.id
				},
				startPage: 0
			}
		});
		let reservedSearchRequest: GenericSearchRequest = this.baseServices.apiHelper.genRequest({
			options: <SearchOptions>{
				fields: Object.keys(DhcpIpReservedDTODef.fields),
				queryOptions: {
					operator: QUERYOP.VALUE,
					fieldName: "dhcpRangeId",
					fieldValue: this.range.id
				},
				startPage: 0
			}
		});

		let reservedUserSearchRequest: GenericSearchRequest = this.baseServices.apiHelper.genRequest({
			options: <SearchOptions>{
				fields: Object.keys(DhcpIpReservedUserDTODef.fields),
				queryOptions: {
					operator: QUERYOP.VALUE,
					fieldName: "dhcpRangeId",
					fieldValue: this.range.id
				},
				startPage: 0
			}
		});

		queue.push(this.dhcpApi.dhcpWebIpExcludedSearchPOST(excludedSearchRequest).retry(2));
		queue.push(this.dhcpApi.dhcpWebIpReservedSearchPOST(reservedSearchRequest).retry(2));
		queue.push(this.dhcpApi.dhcpWebIpReservedUserSearchPOST(reservedUserSearchRequest).retry(2));

		Observable.forkJoin(queue).subscribe((results) => {
			let excluded = <DhcpIpExcludedListResponse>results[0];
			let reserved = <DhcpIpReservedListResponse>results[1];
			let reservedUser = <DhcpIpReservedUserListResponse>results[2];
			if (
				this.baseServices.uiHelper.processResponse(excluded)
				&& this.baseServices.uiHelper.processResponse(reserved)
				&& this.baseServices.uiHelper.processResponse(reservedUser)
			) {
				this.range.ipsExcludedDtos = excluded.data.list;
				this.range.ipsReservedDtos = reserved.data.list;
				this.range.ipsReservedUserDtos = reservedUser.data.list;
				this.newExcludedAddress.dhcpRangeId = this.range.id;
				this.newReservedAddress.dhcpRangeId = this.range.id;
				this.newReservedUserAddress.dhcpRangeId = this.range.id;
				this.changeDetector.detectChanges();
			}
		});
	}


	networkMaskChange(maskValue, el) {
		let bitValue = this.decimalToBinary(maskValue);
		this.maskBitLength = bitValue.lastIndexOf("1") + 1;
		this.changeDetector.detectChanges();
		let hasError = this.validateNetworkMask(bitValue);
		el.setCustomValidity((hasError && this.t('messages.networkmask_format_error')) || '');
	}

	decimalToBinary(maskValue = "") {
		let result = "";
		maskValue
			.split('.')
			.forEach((val) => {
				let bin = Number(val).toString(2);
				result += "00000000".substr(bin.length) + bin;
			});
		return result;
	}

	networkBitChange(bitLength, el) {
		let result = [];
		let dec = Math.floor(bitLength / 8);
		for (let i = 0; i < dec; i++) {
			result.push(255);
		}

		let frac = bitLength % 8;
		let last = parseInt(Number(~(255 >> frac) >>> 0).toString(2).substring(24), 2);
		result.push(last);
		for (let i = 0; i < 3 - dec; i++)
			result.push(0);
		this.range.networkMask = result.join('.');
		el.setCustomValidity('');
		el.dispatchEvent(new Event('change'));
	}

	validateNetworkMask(bitValue) {
		let hasError = false;
		bitValue
			.split('')
			.map(Number)
			.reduce((a, b) => {
				if (hasError)
					return -1;
				if (a < b) {
					hasError = true;
				}
				return b;
			});
		return hasError;
	}

	removeExcludedAddress(address: DhcpIpExcludedDTO) {
		let request = this.baseServices.apiHelper.genRequest({
			options: <DeleteOptions> {
				id: address.id,
				isReturnModel: false
			}
		});

		this.dhcpApi
			.dhcpWebIpExcludedDeletePOST(<GenericDeleteRequest>request)
			.subscribe(
				(res) => {
					if (this.baseServices.uiHelper.processResponse(res, this.t('messages.delete_success_excludedAddress', {dto: address}))) {
						let i = this.range.ipsExcludedDtos.indexOf(address);
						this.range.ipsExcludedDtos.splice(i, 1);
					}
				},
				(error: any) => {
					this.baseServices.uiHelper.processResponse(error._body);
				}
			);
	}

	addExcludedAddress() {
		let form: any = $('#excludedAdressForm', this.elementRef.nativeElement)[0];
		if (!form.checkValidity()) {
			this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
			return;
		}

		this.newExcludedAddress.dhcpRangeId = this.range.id;
		this.newExcludedAddress = this.baseServices.apiHelper.genDTO(this.newExcludedAddress);

		let request: DhcpIpExcludedRequest = <DhcpIpExcludedRequest>this.baseServices.apiHelper.genRequest({
			data: <DhcpIpExcludedDTO> this.newExcludedAddress
		});

		this.dhcpApi
			.dhcpWebIpExcludedSavePOST(request)
			.subscribe(
				(res) => {
					if (this.baseServices.uiHelper.processResponse(res,
							this.t('messages.create_success_excludedAddress', {dto: this.newExcludedAddress}))) {
						this.newExcludedAddress = res.data;
						this.range.ipsExcludedDtos.push(this.newExcludedAddress);
						this.newExcludedAddress = <DhcpIpExcludedDTO>{
							dhcpRangeId: this.range.id
						};
					}
				},
				(error: any) => {
					this.baseServices.uiHelper.processResponse(error._body);
				}
			);

	}

	removeReservedAddress(address: DhcpIpReservedDTO) {
		let request = this.baseServices.apiHelper.genRequest({
			options: <DeleteOptions> {
				id: address.id,
				isReturnModel: false
			}
		});

		this.dhcpApi
			.dhcpWebIpReservedDeletePOST(<GenericDeleteRequest>request)
			.subscribe(
				(res) => {
					if (this.baseServices.uiHelper.processResponse(res, this.t('messages.delete_success_reservedAddress', {dto: address}))) {
						let i = this.range.ipsReservedDtos.indexOf(address);
						this.range.ipsReservedDtos.splice(i, 1);
					}
				},
				(error: any) => {
					this.baseServices.uiHelper.processResponse(error._body);
				}
			);
	}

	addReservedAddress() {
		let form: any = $('#reservedAddressForm', this.elementRef.nativeElement)[0];
		if (!form.checkValidity()) {
			this.baseServices.uiHelper.notify(this.baseServices.i18n.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
			return;
		}
		this.newReservedAddress.dhcpRangeId = this.range.id;
		this.newReservedAddress = this.baseServices.apiHelper.genDTO(this.newReservedAddress);

		let request: DhcpIpReservedRequest = <DhcpIpReservedRequest>this.baseServices.apiHelper.genRequest({
			data: <DhcpIpReservedDTO> this.newReservedAddress
		});

		this.dhcpApi
			.dhcpWebIpReservedSavePOST(request)
			.subscribe(
				(res) => {
					if (this.baseServices.uiHelper.processResponse(res,
							this.t('messages.create_success_reservedAddress', {dto: this.newReservedAddress}))) {
						this.newReservedAddress = res.data;
						this.range.ipsReservedDtos.push(this.newReservedAddress);
						this.newReservedAddress = <DhcpIpReservedDTO>{
							dhcpRangeId: this.range.id
						};
					}
				},
				(error: any) => {
					this.baseServices.uiHelper.processResponse(error._body);
				}
			);
	}

	removeReservedUserAddress(address: DhcpIpReservedUserDTO) {
		let request = this.baseServices.apiHelper.genRequest({
			options: <DeleteOptions> {
				id: address.id,
				isReturnModel: false
			}
		});

		this.dhcpApi
			.dhcpWebIpReservedUserDeletePOST(<GenericDeleteRequest>request)
			.subscribe(
				(res) => {
					if (this.baseServices.uiHelper.processResponse(res, this.t('messages.delete_success_reservedUserAddress', {dto: address}))) {
						let i = this.range.ipsReservedUserDtos.indexOf(address);
						this.range.ipsReservedUserDtos.splice(i, 1);
					}
				},
				(error: any) => {
					this.baseServices.uiHelper.processResponse(error._body);
				}
			);
	}

	addReservedUserAddress() {
		let form: any = $('#reservedUserAddressForm', this.elementRef.nativeElement)[0];
		if (!form.checkValidity()) {
			this.baseServices.uiHelper.notify(this.baseServices.i18n.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
			return;
		}

		this.searchNasUsers(this.newReservedUserAddress.username, (users) => {
			if (users && users.length > 0) {
				let user: NacUserDTO;
				for (let i = 0; i < users.length; i++) {
					if (users[i].username == this.newReservedUserAddress.username) {
						user = users[i];
						break;
					}
				}

				if (user) {

					this.newReservedUserAddress.dhcpRangeId = this.range.id;
					this.newReservedUserAddress.userId = user.id;
					this.newReservedUserAddress.username = user.username;
					this.newReservedUserAddress = this.baseServices.apiHelper.genDTO(this.newReservedUserAddress);

					let request: DhcpIpReservedUserRequest = <DhcpIpReservedUserRequest>this.baseServices.apiHelper.genRequest({
						data: <DhcpIpReservedUserDTO> this.newReservedUserAddress
					});

					this.dhcpApi
						.dhcpWebIpReservedUserSavePOST(request)
						.subscribe(
							(res) => {
								if (this.baseServices.uiHelper.processResponse(res,
										this.t('messages.create_success_reservedUserAddress', {dto: this.newReservedUserAddress}))) {
									this.newReservedUserAddress = res.data;
									this.range.ipsReservedUserDtos.push(this.newReservedUserAddress);
									this.newReservedUserAddress = <DhcpIpReservedUserDTO>{
										dhcpRangeId: this.range.id
									};
								}
							},
							(error: any) => {
								this.baseServices.uiHelper.processResponse(error._body);
							}
						);

					return;
				}

			}
			this.baseServices.uiHelper.notify(this.t("messages.user_not_found"), DIALOG_TYPES.ERROR);
		});

	}

	saveRange() {
		let form: any = $('#rangeForm', this.elementRef.nativeElement)[0];
		if (!form.checkValidity()) {
			this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
			return;
		}

		let request: DhcpIpRangeRequest = <DhcpIpRangeRequest>this.baseServices.apiHelper.genRequest({
			data: <DhcpIpRangeDTO> this.range
		});

		this.dhcpApi
			.dhcpWebIpRangeSavePOST(request)
			.subscribe(
				(res) => {
					if (this.baseServices.uiHelper.processResponse(res,
							this.t(this.range.id ? 'messages.save_success_range' : 'messages.create_success_range', {dto: this.range}))) {
						this.range.id = res.data.id;
						this.changeDetector.detectChanges();
					}
				},
				(error: any) => {
					this.baseServices.uiHelper.processResponse(error._body);
				}
			);
	}

	private searchNasUsers(query: any, callback: (users: Array<NacUserDTO>) => void) {
		let searchRequest = {
			pageSize: 0,
			startPage: 0,
			sortOptions: {
				fieldName: "username",
				isAscend: true
			},
			queryOptions: {
				operator: "VALUE",
				fieldName: "*",
				fieldValue: query
			},
			fields: ["id", "username"]
		};

		let request = this.baseServices.apiHelper.genRequest({
			options: searchRequest
		});

		this.nacUserApi.userSearchPOST(request, false).subscribe(
			(res) => {
				if (this.baseServices.uiHelper.processResponse(res)) {
					if (res.data && res.data.list && res.data.list.length > 0) {
						return callback(res.data.list);
					}
				}
				callback(null);
			}
		);
	}
}

