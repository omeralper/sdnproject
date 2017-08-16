/**
 * Created by yildirayme on 28.04.2016.
 */
import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef} from "@angular/core";
import {LogApi} from "../../../../swagger/LogApi";
import {BasePopupEditPage} from "../../../../commons/BasePopupEditPage/BasePopupEditPage";
import {PageServices} from "../../../PageServices";
import {LOGLEVEL} from "../../../../swagger/LOGLEVEL";
import {LogLevelRequest} from "../../../../swagger/LogLevelRequest";
import {LogNMApi} from "../../../../swagger/LogNMApi";
import {LogLevelEditData, LOG_SERVER_TYPE} from "../LogLevelListPage/LogLevelListPage";

@Component({ moduleId: module.id,
    selector: 'LogLevelEditPopup',
    templateUrl: './LogLevelEditPopup.html',
    providers: [LogApi, LogNMApi]
})

export class LogLevelEditPopup extends BasePopupEditPage<LogLevelEditData> implements OnInit, AfterViewInit, OnDestroy {

    public logLevels: string[];

    //INFO: used by HTML template
    public get serverTypeLabel(): string {
        return LOG_SERVER_TYPE[this.data.serverType];
    }

    constructor(public logNMApi: LogNMApi, public logApi: LogApi, baseServices: PageServices, elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('components.log-levels.edit');

        this.logLevels = [];
        $.each(LOGLEVEL, (key) => {
            if (!(key == "ALL" || key == "OFF")) {
                this.logLevels.push(key);
            }
        });

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
        return super.ngAfterViewInit();
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

    save() {
        this.data.item.revision++;
        this.data.item.timestamp = this.baseServices.utils.genTimestamp();

        let request = this.baseServices.apiHelper.genRequest({
            data: [this.data.item]
        });

        let apiBase: LogNMApi|LogApi = this.data.serverType == LOG_SERVER_TYPE.PROGNET ? this.logApi : this.logNMApi;

        apiBase
            .logLevelUpdatePOST(<LogLevelRequest>request)
            .subscribe(
                (res) => {
                    if (this.baseServices.uiHelper.processResponse(res, this.t('messages.save_success', {dto: this.data.item}))) {
                        this.close(true);
                    }
                },
                (error: any) => {
                    this.baseServices.uiHelper.processResponse(error._body); //JSON parsing is handled in the function now
                }
            );
    }
}

