/**
 * Created by yildirayme on 21.06.2016.
 */

import {Component, ChangeDetectorRef, OnInit, AfterViewInit, OnDestroy, ElementRef} from "@angular/core";
declare var is: Is;
import {BasePopupEditPage} from "../../../../commons/BasePopupEditPage/BasePopupEditPage";
import {SwitchDTO, SwitchDTODef} from "../../../../swagger/SwitchDTO";
import {EnumHelper} from "../../../../commons/EnumHelper";
import {SECURITYMODE} from "../../../../swagger/SECURITYMODE";
import {TopologyApi} from "../../../../swagger/TopologyApi";
import {PageServices} from "../../../PageServices";
import {DIALOG_TYPES} from "../../../UIHelper";
import {GenericIdRequest} from "../../../../swagger/GenericIdRequest";
import {SWITCHMODE} from "../../../../swagger/SWITCHMODE";
import {SwitchRequest} from "../../../../swagger/SwitchRequest";
import {UI_SECURITY_LEVELS} from "../../../../commons/enums/UI_SECURITY_LEVELS";
import {CONNECTIONMODE} from "../../../../swagger/CONNECTIONMODE";
import {OFFLINEMODE} from "../../../../swagger/OFFLINEMODE";
import {DEVICETYPE} from "../../../../swagger/DEVICETYPE";

// Root Component
@Component({
	moduleId: module.id,
	selector: 'SwitchEditPopup',
	templateUrl: './SwitchEditPopup.html',
	providers: []
})
export class SwitchEditPopup extends BasePopupEditPage<SwitchDTO> implements OnInit, AfterViewInit, OnDestroy {

	//INFO: bu alanlar HTML template tarafından kullanılmaktadır. Silmeyiniz.
	public securityLevels = EnumHelper.getNamesAndValues(UI_SECURITY_LEVELS);
	public securityModes = EnumHelper.getNames(SECURITYMODE);
	DEVICETYPE = DEVICETYPE;
	UI_SECURITY_LEVELS = UI_SECURITY_LEVELS;
	OFFLINEMODE = OFFLINEMODE;
	CONNECTIONMODE = CONNECTIONMODE;
	SWITCHMODE = SWITCHMODE;

	constructor(public changeDetector: ChangeDetectorRef, public topologyApi: TopologyApi, baseServices: PageServices, elementRef: ElementRef) {
		super(baseServices, elementRef);

		this.setI18NKey('switches.edit');

		this.logger.debug('Data received:', this.data);

		this.checkData();

		this.setFormActions([
			this.createAction('dialogs.actions.ok', () => {
				this.logger.debug('OK clicked');
				this.save();
			}),
			this.createAction('dialogs.actions.cancel', () => {
				this.logger.debug('Cancel clicked');
				this.close();
			})
		]);
	}

	ngOnInit() {
		super.ngOnInit();
		if (this.isNewItem) {
			this.baseServices.uiHelper.alert(this.t("messages.create_not_allowed"), DIALOG_TYPES.ERROR);
			setTimeout(() => {
				this.close(false);
			}, 500);
			return false;
		}

		let request: GenericIdRequest = <GenericIdRequest>this.baseServices.apiHelper.genRequest({
			id: this.data.id
		});

		let s =
			this.topologyApi
				.topologySwitchGetPOST(request)
				.subscribe(
					(res) => {

						if (this.baseServices.uiHelper.processResponse(res)) {

							this.data = res.data;

							this.checkData();

							this.changeDetector.detectChanges();
						} else {
							this.close(false);
						}
					},
					(error: any) => {
						this.baseServices.uiHelper.processResponse(error.body); //JSON parsing is handled in the function now
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

            try {
                $(".switch-meter-mode", this.$container)
                    .bootstrapSwitch('state', !!this.data.isMeterEnabled)
                    .on('switchChange.bootstrapSwitch', (event, state) => {
                            this.data.isMeterEnabled = !!state;
                            this.changeDetector.detectChanges();
                        }
                    );
            } catch (e) {
                this.logger.warn(e);
            }

            try {
                $(".is-controller-device", this.$container)
                    .bootstrapSwitch('state', !!this.data.isControllerDevice)
                    .on('switchChange.bootstrapSwitch', (event, state) => {
                            this.data.isControllerDevice = !!state;
                            this.changeDetector.detectChanges();
                        }
                    );
            } catch (e) {
                this.logger.warn(e);
            }

            try {
                $(".using-control-channel", this.$container)
                    .bootstrapSwitch('state', !!this.data.usingControlChannel)
                    .on('switchChange.bootstrapSwitch', (event, state) => {
                            this.data.usingControlChannel = !!state;
                            this.changeDetector.detectChanges();
                        }
                    );
            } catch (e) {
                this.logger.warn(e);
            }

            try {
                $(".power-saver-mode", this.$container)
                    .bootstrapSwitch('state', !!this.data.powerSaverModeEnabled)
                    .on('switchChange.bootstrapSwitch', (event, state) => {
                        this.data.powerSaverModeEnabled = !!state;
                        this.changeDetector.detectChanges();
                    });
            } catch (e) {
                this.logger.warn(e);
            }

			return true;
		}
		return false;
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}

	save() {
		try {

			if (is.not.existy(this.data.securityLevel) || is.empty(this.data.securityLevel) || this.data.securityLevel == 0) {
				throw {type: "VALIDATION_ERROR", message: this.t("messages.securityLevel_required")}
			}

			// if (is.not.existy(this.data.securityMode) || is.empty(this.data.securityMode)) {
			//     throw {type: "VALIDATION_ERROR", message: this.t("messages.securityMode_required")}
			// }

			// check permissions if editing current user.
			this.logger.debug('Save new data');
			this.submitted = true;

            let request = this.baseServices.apiHelper.genRequest({
                data: this.baseServices.apiHelper.genDTO(<SwitchDTO>this.baseServices.utils.optimizeDTO(SwitchDTODef, this.data))
            });
            request.data.timestamp = new Date();

			this.topologyApi
				.topologySwitchSavePOST(<SwitchRequest>request)
				.subscribe(
					(res) => {
						if (this.baseServices.uiHelper.processResponse(res, this.t(this.data.id ? 'messages.save_success' : 'messages.create_success', {dto: this.data}))) {
							//debugger;
							this.close(true, this.data);
						}
					},
					(error: any) => {
						this.baseServices.uiHelper.processResponse(error.body); //JSON parsing is handled in the function now
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
		// if (is.not.existy(this.data.location)) {
		//     this.data.location = <LocationInfo>{
		//         x: '',
		//         y: ''
		//     }
		// }

		this.data.securityLevel = this.data.securityLevel || 0;
		//this.data.securityMode = this.data.securityMode || '';
	}
}
