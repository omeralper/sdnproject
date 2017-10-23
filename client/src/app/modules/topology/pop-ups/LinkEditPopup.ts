/**
 * Created by yildirayme on 21.06.2016.
 */

import {Component, ChangeDetectorRef, OnInit, AfterViewInit, OnDestroy, ElementRef} from "@angular/core";
import {PageServices} from "../../PageServices";
declare var is: Is;
import {DIALOG_TYPES} from "../../UIHelper";
import {EnumHelper} from "../../../commons/EnumHelper";
import {BasePopupEditPage} from "../../../commons/BasePopupEditPage/BasePopupEditPage";
import {LinkDTO, LinkDTODef} from "../../../swagger/LinkDTO";
import {TopologyApi} from "../../../swagger/TopologyApi";
import {LinkRequest} from "../../../swagger/LinkRequest";
import {LINKSTATUS} from "../../../swagger/LINKSTATUS";
import {UI_SECURITY_LEVELS} from "../../../commons/enums/UI_SECURITY_LEVELS";
import {PORTSTATE} from "../../../swagger/PORTSTATE";
import {Observable} from 'rxjs/Rx';

@Component({
	moduleId: module.id,
	selector: 'LinkEditPopup',
	templateUrl: 'LinkEditPopup.html',
	providers: []
})
export class LinkEditPopup extends BasePopupEditPage<LinkDTO> implements OnInit, AfterViewInit, OnDestroy {
	public SECURITYLEVELS_DS = EnumHelper.getNamesAndValues(UI_SECURITY_LEVELS);
	reverseData: LinkDTO = <LinkDTO>{};

	constructor(public changeDetector: ChangeDetectorRef, public topologyApi: TopologyApi, baseServices: PageServices, elementRef: ElementRef) {
		super(baseServices, elementRef);

		this.setI18NKey('links.edit');
		this.checkData();
		this.setFormActions([
			this.createAction('dialogs.actions.ok', () => {
				this.save();
			}),
			this.createAction('dialogs.actions.cancel', () => {
				this.close();
			})
		]);
	}

	ngOnInit() {
		super.ngOnInit();
		this.reverseData = this.data["reverse"];
		if (this.isNewItem) {
			this.baseServices.uiHelper.alert(this.t("messages.create_not_allowed"), DIALOG_TYPES.ERROR);
			setTimeout(() => {
				this.close(false);
			}, 500);
			return false;
		}

		let request: LinkRequest = <LinkRequest>this.baseServices.apiHelper.genRequest({
			data: this.genLinkDTO($.extend(true, {}, this.data))
		});

		let s =
			this.topologyApi
				.topologyLinkGetPOST(request)
				.subscribe(
					(res) => {
						if (this.baseServices.uiHelper.processResponse(res)) {
							this.data = res.data;
							this.data.id = this.data.srcPort.id + ' => ' + this.data.destPort.id;
							this.checkData();
							this.changeDetector.detectChanges();
						}
					},
					(error: any) => {
						this.baseServices.uiHelper.processResponse(error._body);
						this.close(false);
					}
				);
		this.subscriptions.push(s);
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

	/**
	 * Her bir bağlantı için aslında 2 tane linkdto var. Bunun için çift istek yollanıyor.
	 */
	save() {
		try {
			this.submitted = true;
			if (this.data["reverse"]) {
				delete this.data["reverse"];
			}
			let sourceToDest: LinkDTO = this.genLinkDTO(this.data);
			let request = this.baseServices.apiHelper.genRequest({
				data: sourceToDest
			});

			this.topologyApi.topologyLinkSavePOST(<LinkRequest>request).subscribe(
				(res) => {
					if (this.baseServices.uiHelper.processResponse(res, this.t('messages.save_success', {dto: this.data}))) {
						this.close(true, this.data);
					}
				},
				(error: any) => {
					this.baseServices.uiHelper.processResponse(error._body); //JSON parsing is handled in the function now
				}
			);
		} catch (e) {
			if (e.type && e.type === "VALIDATION_ERROR") {
				this.baseServices.uiHelper.notify(e.message, DIALOG_TYPES.WARNING)
			} else {
				this.baseServices.uiHelper.alert(this.i18n.t('common.messages.RETURN_STATUS.SERVER_ERROR'), DIALOG_TYPES.ERROR)
			}
		}
	}

	public checkData() {
		this.data.securityLevel = (is.existy(this.data.securityLevel) && this.data.securityLevel > 0) ? this.data.securityLevel : UI_SECURITY_LEVELS.LEVEL_1;
	}

	public genLinkDTO(data: LinkDTO) {
		return <LinkDTO>this.baseServices.utils.optimizeDTO(LinkDTODef, {
			id: '',
			version: data.version,
			revision: data.revision + 1,
			timestamp: this.baseServices.utils.genTimestamp().toISOString(),
			srcPort: {
				id: data.srcPort.id,
				number: data.srcPort.number,
				states: [PORTSTATE.LIVE],
				address: {},
			},
			destPort: {
				id: data.destPort.id,
				number: data.destPort.number,
				states: [PORTSTATE.LIVE],
				address: {},
			},

			//srcPort:data.srcPort,
			//destPort: data.destPort,
			status: LINKSTATUS.LIVE,
			topologyId: data.topologyId,
			connectionType: data.connectionType,
			securityLevel: data.securityLevel,
			isWanLink: data.isWanLink
		});
	}
}
