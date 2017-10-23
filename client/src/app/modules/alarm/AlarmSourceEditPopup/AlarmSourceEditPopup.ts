/**
 * Created by barangu on 12.01.2017.
 */
import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef} from "@angular/core";
import {BasePopupEditPage} from "../../../commons/BasePopupEditPage/BasePopupEditPage";
import {PageServices} from "../../PageServices";
import {AlarmApi} from "../../../swagger/AlarmApi";
import {AlarmDTO} from "../../../swagger/AlarmDTO";
import {SEVERITY} from "../../../swagger/SEVERITY";
import {AlarmRequest} from "../../../swagger/AlarmRequest";
import {DIALOG_TYPES} from "../../UIHelper";

@Component({ moduleId: module.id,
    selector: 'AlarmSourceEditPopup',
    templateUrl: './AlarmSourceEditPopup.html',
    providers: [AlarmApi]
})

export class AlarmSourceEditPopup extends BasePopupEditPage<AlarmDTO> implements OnInit, AfterViewInit, OnDestroy {

    public alarmSeverity: string[];

    constructor(public alarmApi: AlarmApi, baseServices: PageServices, elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('alarm_sources.edit');

        this.alarmSeverity = [];
        $.each(SEVERITY, (key) => {
                this.alarmSeverity.push(key);
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
        let form: any = $('form', this.elementRef.nativeElement)[0];
        if (!form.checkValidity()) {
            this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
            return;
        }
        this.submitted = true;
        this.data.revision++;
        this.data.timestamp = this.baseServices.utils.genTimestamp();

        let request = this.baseServices.apiHelper.genRequest({
            data: <AlarmDTO> this.data
        });

        this.alarmApi
            .alarmDefinitionUpdatePOST(<AlarmRequest>request)
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
