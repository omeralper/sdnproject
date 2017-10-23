/**
 * Created by barangu on 7/22/2017.
 */
import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ChangeDetectorRef} from "@angular/core";
import {BasePopupEditPage} from "../../../commons/BasePopupEditPage/BasePopupEditPage";
import {PageServices} from "../../PageServices";
import {DIALOG_TYPES} from "../../UIHelper";
import {NFVApi} from "../../../swagger/NFVApi";
import {VnfActionRequest} from "../../../swagger/VnfActionRequest";
import {VirtualNetFunctionInstanceDTO} from "../../../swagger/VirtualNetFunctionInstanceDTO";
import {VimInfoDTO} from "../../../swagger/VimInfoDTO";
import {ComputeHostListResponse} from "../../../swagger/ComputeHostListResponse";
import {ComputeHostListRequest} from "../../../swagger/ComputeHostListRequest";
import {ComputeHostInfoDTO} from "../../../swagger/ComputeHostInfoDTO";

@Component({
	moduleId: module.id,
	selector: 'VnfInstanceFailoverPopup',
	templateUrl: './VnfInstanceFailoverPopup.html'
})

export class VnfInstanceFailoverPopup extends BasePopupEditPage<VirtualNetFunctionInstanceDTO> implements OnInit, AfterViewInit, OnDestroy {
	public vims: Array<VimInfoDTO> = [];
	public selectedVim: VimInfoDTO = <VimInfoDTO>{};
	public hosts: Array<ComputeHostInfoDTO> = [];

	constructor(public nfvApi: NFVApi, public changeDetector: ChangeDetectorRef, baseServices: PageServices, elementRef: ElementRef) {
		super(baseServices, elementRef);
		this.setI18NKey('network_function_virtualization.vnf_instance.edit');

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
		super.ngOnInit();
		this.fetchVims();
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

	fetchVims() {
		let request = this.baseServices.apiHelper.genFullListRequest();
		let s =
			this.nfvApi
				.vimListPOST(request)
				.subscribe((res) => {
					if (this.baseServices.uiHelper.processResponse(res)) {
						this.vims = res.data.list;
						this.changeDetector.detectChanges();
					}
				});
		this.subscriptions.push(s);
	}

	vimSelected(vim: VimInfoDTO) {
		let request = <ComputeHostListRequest>this.baseServices.apiHelper.genFullListRequest();
		request.vimInstanceId = vim.id;
		let s =
			this.nfvApi
				.vimComputeHostListPOST(request)
				.subscribe((res: ComputeHostListResponse) => {
					if (this.baseServices.uiHelper.processResponse(res)) {
						this.hosts = res.data.computeHostList
						this.changeDetector.detectChanges();
					}
				});
		this.subscriptions.push(s);
	}

	save() {
		let form: any = $('form', this.elementRef.nativeElement)[0];
		if (!form.checkValidity()) {
			this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
			return;
		}

		let request = this.baseServices.apiHelper.genRequest({
			vnfrId: this.data.vnfServerId,
			computeHostIp: this.data.failOverDescription
		});

		this.nfvApi
			.vnfRegisterVnfFailOverPOST(<VnfActionRequest>request)
			.subscribe(
				(res) => {
					if (this.baseServices.uiHelper.processResponse(res, this.t('messages.create_success', {dto: this.data}))) {
						this.close(true);
					}
				},
				(error: any) => {
					this.baseServices.uiHelper.processResponse(error._body); //JSON parsing is handled in the function now
				}
			);
	}
}
