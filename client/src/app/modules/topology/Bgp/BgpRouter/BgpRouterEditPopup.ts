/**
 * Created by omeroz on 5/24/2017.
 */
import {
	Component,
	OnInit,
	AfterViewInit,
	OnDestroy,
	OnChanges,
	ElementRef,
	ChangeDetectorRef
} from "@angular/core";
import {PageServices} from "../../../PageServices";
import {BasePopupEditPage} from "../../../../commons/BasePopupEditPage/BasePopupEditPage";
import {DIALOG_TYPES} from "../../../UIHelper";
import {MODAL_SIZE} from "../../../ModalComponent";
import {SdnipRouterDTO} from "../../../../swagger/SdnipRouterDTO";
import {SdnipApi} from "../../../../swagger/SdnipApi";
import {SdnipRouterSaveRequest} from "../../../../swagger/SdnipRouterSaveRequest";
import {ROUTERTYPE} from "../../../../swagger/ROUTERTYPE";
import {SwitchDTO} from "../../../../swagger/SwitchDTO";
import {PrognetDeviceListResponse} from "../../../../swagger/PrognetDeviceListResponse";
import {PortInfo} from "../../../../swagger/PortInfo";
import {TopologyApi} from "../../../../swagger/TopologyApi";
import {SdnipASNumberResponse} from "../../../../swagger/SdnipASNumberResponse";

@Component({
	moduleId: module.id,
	selector: 'BgpRouterEditPopup',
	templateUrl: './BgpRouterEditPopup.html',
})
export class BgpRouterEditPopup extends BasePopupEditPage<SdnipRouterDTO> implements OnInit, AfterViewInit, OnChanges, OnDestroy {

	ROUTERTYPE = ROUTERTYPE;
	switches: Array<SwitchDTO> = [];
	selectedSwitch: SwitchDTO = <SwitchDTO>{};
	ports: Array<PortInfo> = [];
	asNumber: number;

	constructor(public changeDetector: ChangeDetectorRef,
	            public sdnipApi: SdnipApi,
	            public topologyApi: TopologyApi,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(baseServices, elementRef);

		this.modalSize = MODAL_SIZE.NORMAL;
		this.setI18NKey('bgp_management.router.edit');

		this.setFormActions([
			this.createAction('dialogs.actions.save', () => {
				this.save();
			}),
			this.createAction('dialogs.actions.cancel', () => {
				this.close();
			})
		]);
	}

	ngOnInit() {
		this.fetchSwitches();
		this.fetchASNumber();


		super.ngOnInit();
	}

	ngOnChanges(e) {
		super.ngOnChanges(e);
	}

	ngAfterViewInit() {
		return super.ngAfterViewInit();
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}

	fetchSwitches() {
		let request = this.baseServices.apiHelper.genFullListRequest();
		let s =
			this.topologyApi
				.topologySwitchListPOST(request)
				.subscribe((res: PrognetDeviceListResponse) => {
					if (this.baseServices.uiHelper.processResponse(res)) {
						this.switches = res.data.list;
						if (this.data.deviceId) {
							this.selectedSwitch = this.switches.filter(s => s.id == this.data.deviceId)[0];
						}
						this.changeDetector.detectChanges();
					}
				});
		this.subscriptions.push(s);
	}

	switchChanged(sw) {
		this.data.deviceId = sw.id;
		this.changeDetector.detectChanges();
	}

	fetchASNumber() {
		let request = this.baseServices.apiHelper.genRequest({});
		this.sdnipApi
			.sdnipRouterAsNumberGetPOST(request)
			.subscribe((res: SdnipASNumberResponse) => {
				if (this.baseServices.uiHelper.processResponse(res)) {
					this.asNumber = res.data;
					this.changeDetector.detectChanges();
				}
			})

	}

	typeChanged() {
		this.changeDetector.detectChanges();
	}

	save() {
		let form: any = $('form', this.elementRef.nativeElement)[0];
		if (!form.checkValidity()) {
			this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
			return;
		}

		this.data = this.baseServices.apiHelper.genDTO(this.data);
		this.data.port = +this.data.port;
		this.data.asNumber = +this.data.asNumber || +this.asNumber;
		// this.data.sdnipRouterId = this.data.sdnipRouterId || 0;
		let request: SdnipRouterSaveRequest = this.baseServices.apiHelper.genRequest({
			data: this.data
		});

		this.sdnipApi
			.sdnipRouterSavePOST(request)
			.subscribe(
				(res) => {
					if (this.baseServices.uiHelper.processResponse(res,
							this.t(this.data.id ? 'messages.save_success' : 'messages.create_success', {dto: this.data}))) {

						this.close(true);
					}
				},
				(error: any) => {
					this.baseServices.uiHelper.processResponse(error._body);
				}
			);
	}
}

