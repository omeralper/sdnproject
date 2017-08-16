/**
 * Created by barangu on 5/22/2017.
 */
import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef} from "@angular/core";
import {PageServices} from "../../PageServices";
import {AlarmApi} from "../../../swagger/AlarmApi";
import {AlarmDTO} from "../../../swagger/AlarmDTO";
import {AlarmRequest} from "../../../swagger/AlarmRequest";
import {DIALOG_TYPES} from "../../UIHelper";
import {BasePopupPage} from "../../../commons/BasePopupPage/BasePopupPage";

@Component({ moduleId: module.id,
    selector: 'AlarmResolvePopup',
    templateUrl: './AlarmResolvePopup.html',
    providers: [AlarmApi]
})

export class AlarmResolvePopup extends BasePopupPage<AlarmDTO> implements OnInit, AfterViewInit, OnDestroy {

    constructor(public alarmApi: AlarmApi, baseServices: PageServices, elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('alarm_logs.resolve');

        this.setFormActions([
            this.createAction('dialogs.actions.save', () => {
                this.save();
            }),
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
        let form: any = $('form', this.elementRef.nativeElement)[0];
        if (!form.checkValidity()) {
            this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
            return;
        }

        this.data.revision++;
        this.data.timestamp = this.baseServices.utils.genTimestamp();

        let request = this.baseServices.apiHelper.genRequest({
            data: <AlarmDTO> this.data
        });

        this.alarmApi
            .alarmEditPOST(<AlarmRequest>request)
            .subscribe(
                (res) => {
                    if (this.baseServices.uiHelper.processResponse(res, this.t('messages.save_success', {dto: this.data}))) {
                        this.close(true);
                    }
                },
                (error: any) => {
                    this.baseServices.uiHelper.processResponse(error._body); //JSON parsing is handled in the function now
                }
            );
    }
}
