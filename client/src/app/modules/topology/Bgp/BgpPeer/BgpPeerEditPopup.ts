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
import {NeighborRelationDTO} from "../../../../swagger/NeighborRelationDTO";
import {NeighborRelationSaveRequest} from "../../../../swagger/NeighborRelationSaveRequest";
import {SdnipApi} from "../../../../swagger/SdnipApi";
import {ROUTERTYPE} from "../../../../swagger/ROUTERTYPE";
import {SdnipRouterDTO, SdnipRouterDTODef} from "../../../../swagger/SdnipRouterDTO";
import {SortOptions} from "../../../../swagger/SortOptions";
import {SdnipRouterListResponse} from "../../../../swagger/SdnipRouterListResponse";

@Component({
	moduleId: module.id,
	selector: 'BgpPeerEditPopup',
	templateUrl: './BgpPeerEditPopup.html',
})
export class BgpPeerEditPopup extends BasePopupEditPage<NeighborRelationDTO> implements OnInit, AfterViewInit, OnChanges, OnDestroy {

	speakers: Array<SdnipRouterDTO> = [];
	peers: Array<SdnipRouterDTO> = [];
	listedPeers: Array<PeerSelection> = [];

	constructor(public changeDetector: ChangeDetectorRef,
	            public sdnipApi: SdnipApi,
	            baseServices: PageServices,
	            elementRef: ElementRef) {
		super(baseServices, elementRef);

		this.modalSize = MODAL_SIZE.NORMAL;
		this.setI18NKey('bgp_management.peer.edit');

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
	}

	ngOnChanges(e) {
		super.ngOnChanges(e);
	}

	ngAfterViewInit() {
		this.fetchRouters();
		return super.ngAfterViewInit();
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}

	fetchRouters() {
		let request = this.baseServices.apiHelper.genFullListRequest(<SortOptions>{
			fieldName: 'name',
			isAscend: true
		}, Object.keys(SdnipRouterDTODef.fields));

		let s =
			this.sdnipApi
				.sdnipRouterSearchPOST(request)
				.subscribe(
					(res: SdnipRouterListResponse) => {
						if (this.baseServices.uiHelper.processResponse(res)) {
							this.speakers = res.data.list.filter(s => s.type == ROUTERTYPE.SPEAKER);
							this.peers = res.data.list.filter(p => p.type == ROUTERTYPE.PEER);
							let speakerBinaryIp = this.toBinary(this.data.speaker.ip);
							this.listedPeers = res.data.list
								.filter((p) => {
									try {
										let ipMaskLength = Number(p.ip.split('/')[1]);
										let speakerMaskLength = Number(this.data.speaker.ip.split('/')[1]);
										let max = Math.max(speakerMaskLength, ipMaskLength);
										return p.type == ROUTERTYPE.PEER && this.checkIp(speakerBinaryIp, this.toBinary(p.ip), max)
									} catch (e) {
										return true; //in case of IP format error, just don't filter
									}
								})
								.map((peer) => {
									return <PeerSelection>$.extend(peer, {
										selected: !!this.data.peerList.find((p) => {
											return p.id == peer.id
										})
									});
								});

							this.data.speaker = this.speakers.find(s => s.id == this.data.speaker.id);
							this.changeDetector.detectChanges();
						}
					});
		this.subscriptions.push(s);
	}

	checkIp(speakerBinaryIp, peerBinaryIp, length) {
		return speakerBinaryIp.substring(0, length) == peerBinaryIp.substring(0, length);
	}

	toBinary(ip) {
		return ip
			.substring(0, ip.indexOf('/'))
			.split(".")
			.reduce((a, b) => {
				let bin = Number(b).toString(2);
				return a + "00000000".substr(bin.length) + bin
			}, "");
	}

	peerSelect(e, peer) {
		if (e.target.tagName == 'TD')
			peer.selected = !peer.selected;
	}

	speakerSelected() {

		this.listedPeers = this.peers
			.filter(p => p.type == ROUTERTYPE.PEER && this.data.speaker.ip == p.ip)
			.map((peer) => {
				return <PeerSelection>$.extend(peer, {
					selected: !!this.data.peerList.find((p) => {
						return p.id == peer.id
					})
				});
			});
		this.changeDetector.detectChanges();
	}


	save() {
		let form: any = $('form', this.elementRef.nativeElement)[0];
		if (!form.checkValidity()) {
			this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
			return;
		}

		this.data.peerList = this.listedPeers.filter(p => p.selected);

		let request: NeighborRelationSaveRequest = this.baseServices.apiHelper.genRequest({
			data: this.data
		});

		this.sdnipApi
			.sdnipRouterNeighborSavePOST(request)
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

export interface PeerSelection extends SdnipRouterDTO {
	selected: boolean;
}



