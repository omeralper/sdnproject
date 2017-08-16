/**
 * Created by omeroz on 05.12.2016.
 */
import {
    Component,
    AfterViewInit,
    Input,
    OnChanges,
    ElementRef,
    ChangeDetectorRef
} from "@angular/core";
import {BasePage} from "../../../commons/BasePage";
import {PageServices} from "../../PageServices";
import {ServiceActionDTO} from "../../../swagger/ServiceActionDTO";
import {NacUserDTO} from "../../../swagger/NacUserDTO";
import {SimpleRule} from "../SimpleRule";
import {EndUserApplicationDTO} from "../../../swagger/EndUserApplicationDTO";
import {SwitchDTO} from "../../../swagger/SwitchDTO";
import {ACCESSACTIONTYPE} from "../../../swagger/ACCESSACTIONTYPE";
import {IpLocationDTO} from "../../../swagger/IpLocationDTO";
import {startTimeRange} from "@angular/core/src/profile/wtf_impl";

@Component({
    moduleId: module.id,
    selector: 'acccessrule',
    templateUrl: './AccessRule.html'
})
export class AccessRule extends BasePage implements AfterViewInit, OnChanges {

    @Input()
    public rule = <SimpleRule>{};
    @Input()
    public serviceActions: Array<ServiceActionDTO>;
    @Input()
    public nacUsers: Array<NacUserDTO>;
    @Input()
    public ipLocs: Array<IpLocationDTO>;
    @Input()
    public userApps: Array<EndUserApplicationDTO>;
    @Input() switchList: Array<SwitchDTO> = [];

    $timeInterval;
    sourceUsers;
    destUsers;
    endUserApps;

    regEx = {
        mac: '^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$',
        port: '^([0-9]{1,5})|([0-9]{1,5}-[0-9]{1,5})$',
        ip: '^(?:[0-9]{1,3}\.){3}[0-9]{1,3}\/[0-9]{1,2}$'
    };

    ACCESSACTIONTYPE = ACCESSACTIONTYPE;

    constructor(public changeDetector: ChangeDetectorRef,
                baseServices: PageServices,
                elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('policy_management.access_control.edit');
        this.rule.inportSwitchPorts = [];
    }

    ngOnInit() {
    }

    ngOnChanges(changes) {

        if (this.$timeInterval) {
            if (changes.rule && changes.rule.currentValue && this.rule.startTime) {
                this.$timeInterval.data('daterangepicker').setStartDate(new Date(this.rule.startTime));
            } else if (changes.rule) {
                this.$timeInterval.val('');
            }

            if (changes.rule && changes.rule.currentValue && this.rule.endTime) {
                this.$timeInterval.data('daterangepicker').setEndDate(new Date(this.rule.endTime));
            } else if (changes.rule) {
                this.$timeInterval.val('');
            }
        }

        if (changes.rule && changes.rule.currentValue && changes.rule.currentValue.sourceUsers) {
            let sourceUserIds = changes.rule.currentValue.sourceUsers;
            $('.sourceselector', this.$container).select2({
                placeholder: this.t('fields.actions.rule.source'),
                allowClear: true
            }).val(sourceUserIds).trigger("change");
        }
        else if (changes.rule) {
            $('.sourceselector', this.$container).select2({
                placeholder: this.t('fields.actions.rule.source'),
                allowClear: true
            }).val([]).trigger("change");
        }

        if (changes.rule && changes.rule.currentValue && changes.rule.currentValue.destUsers) {
            let destUserIds = changes.rule.currentValue.destUsers;
            $('.destselector', this.$container).select2({
                placeholder: this.t('fields.actions.rule.target'),
                allowClear: true
            }).val(destUserIds).trigger("change");
        }
        else if (changes.rule) {
            $('.destselector', this.$container).select2({
                placeholder: this.t('fields.actions.rule.target'),
                allowClear: true
            }).val([]).trigger("change");
        }

        if (changes.rule && changes.rule.currentValue && changes.rule.currentValue.endUserApps) {
            let userAppIds = changes.rule.currentValue.endUserApps.map(function (a) {
                return a.id;
            });
            $('.appselector', this.$container).select2({
                placeholder: this.t('fields.actions.rule.app_name'),
                allowClear: true
            }).val(userAppIds).trigger("change");
        }
        else if (changes.rule) {
            $('.appselector', this.$container).select2({
                placeholder: this.t('fields.actions.rule.app_name'),
                allowClear: true
            }).val([]).trigger("change");
        }

        if (changes.rule && changes.rule.currentValue && changes.rule.currentValue.sourceIpLocs) {
            let sourceIpLocIds = changes.rule.currentValue.sourceIpLocs.map(function (a) {
                return a.id;
            });
            $('.iplocsourceselector', this.$container).select2({
                placeholder: this.t('fields.actions.rule.source'),
                allowClear: true
            }).val(sourceIpLocIds).trigger("change");
        }
        else if (changes.rule) {
            $('.iplocsourceselector', this.$container).select2({
                placeholder: this.t('fields.actions.rule.source'),
                allowClear: true
            }).val([]).trigger("change");
        }

        if (changes.rule && changes.rule.currentValue && changes.rule.currentValue.destIpLocs) {
            let sourceIpLocIds = changes.rule.currentValue.destIpLocs.map(function (a) {
                return a.id;
            });
            $('.iplocdestselector', this.$container).select2({
                placeholder: this.t('fields.actions.rule.target'),
                allowClear: true
            }).val(sourceIpLocIds).trigger("change");
        }
        else if (changes.rule) {
            $('.iplocdestselector', this.$container).select2({
                placeholder: this.t('fields.actions.rule.target'),
                allowClear: true
            }).val([]).trigger("change");
        }

        if (this.nacUsers && changes.nacUsers) {
            this.changeDetector.detectChanges();
            let sourceUserIds = this.rule.sourceUsers;
            $('.sourceselector', this.$container).select2({
                placeholder: this.t('fields.actions.rule.source'),
                allowClear: true
            }).val(sourceUserIds).trigger("change");
            let destUserIds = this.rule.destUsers;
            $('.destselector', this.$container).select2({
                placeholder: this.t('fields.actions.rule.target'),
                allowClear: true
            }).val(destUserIds).trigger("change");
        }
        if (this.ipLocs && changes.ipLocs) {
            this.changeDetector.detectChanges();
            if(this.rule.sourceIpLocs) {
                for (let i = 0; i < this.rule.sourceIpLocs.length; i++) {
                    let sourceIpLoc = this.rule.sourceIpLocs.map(function (a) {
                        return a.id;
                    });
                    $('.iplocsourceselector', this.$container).select2({
                        placeholder: this.t('fields.actions.rule.source'),
                        allowClear: true
                    }).val(sourceIpLoc).trigger("change");
                }
            }
            if(this.rule.destIpLocs) {
                for (let i = 0; i < this.rule.destIpLocs.length; i++) {
                    let destIpLoc = this.rule.destIpLocs.map(function (a) {
                        return a.id;
                    });
                    $('.iplocdestselector', this.$container).select2({
                        placeholder: this.t('fields.actions.rule.target'),
                        allowClear: true
                    }).val(destIpLoc).trigger("change");
                }
            }
        }
        if (this.userApps && changes.userApps) {
            this.changeDetector.detectChanges();
            if (this.rule.endUserApps) {
                for (let i = 0; i < this.rule.endUserApps.length; i++) {
                    let userAppIds = this.rule.endUserApps.map(function (a) {
                        return a.id;
                    });
                    $('.appselector', this.$container).select2({
                        placeholder: this.t('fields.actions.rule.app_name'),
                        allowClear: true
                    }).val(userAppIds).trigger("change");
                }
            }
        }

        if (changes.switchList) {
            this.changeDetector.detectChanges();
            // $('.inport-switch-ports', this.$container).select2();
            $('.inport-switch-ports', this.$container).select2().val(this.rule.inportSwitchPorts).trigger("change");
        }

        if (changes && changes.rule && changes.rule.currentValue && changes.rule.currentValue.inportSwitch && changes.rule.currentValue.inportSwitch.portInfo && changes.rule.currentValue.inportSwitch.portInfo.portDetails && changes.rule.currentValue && changes.rule.currentValue.inportSwitch) {
            this.changeDetector.detectChanges();
            $('.inport-switch-ports', this.$container).select2().val(this.rule.inportSwitchPorts).trigger("change");
        }

        if (changes.rule && changes.rule.currentValue) {
            let $taginputs = $('input[data-role="tagsinput"]');
            $.each($taginputs,(idx,itm)=>{
                let $tagInput = $(itm);
                //let values = $tagInput.val();
                let field = $tagInput.data("field");
                let currentData = changes.rule.currentValue[field];
                $tagInput.tagsinput("removeAll");
                if (is.existy(currentData)){
                    let allValues = currentData.split(',');
                    allValues.forEach((data)=>{
                        $tagInput.tagsinput("add",data);
                    });
                }
                $tagInput.tagsinput("refresh");
            });
        }

        this.changeDetector.detectChanges();
    }

    ngAfterViewInit() {
        let locale: any = this.i18n.t('common.datetimerangepicker.locale', {returnObjectTrees: true});
        locale.daysOfWeek = $.map(locale.daysOfWeek, val => val);
        locale.monthNames = $.map(locale.monthNames, val => val);
        this.$timeInterval = $('.timeInterval', this.$container);
        this.$timeInterval.daterangepicker({
            "drops": "up",
            "opens": "left",
            "locale": locale,
            "timePicker": true,
        }, (start, end) => {
            this.rule.startTime = new Date(start);
            this.rule.endTime = new Date(end);
        });

        if (this.rule.startTime)
            this.$timeInterval.data('daterangepicker').setStartDate(new Date(this.rule.startTime));
        else {
            // let d = new Date();
            // d.setHours(12);
            // d.setMinutes(0);
            // d.setSeconds(0);
            // this.rule.startTime = d;
            this.$timeInterval.val('');
            // this.$timeInterval.data('daterangepicker').setStartDate(new Date(this.rule.startTime));
        }
        if (this.rule.endTime)
            this.$timeInterval.data('daterangepicker').setEndDate(new Date(this.rule.endTime));
        else {
            // let d = new Date();
            // d.setHours(12);
            // d.setMinutes(0);
            // d.setSeconds(0);
            // d.setDate((new Date()).getDate()+1)
            // this.rule.endTime = d;
            this.$timeInterval.val('');
            // this.$timeInterval.data('daterangepicker').setEndDate(new Date(this.rule.endTime));
        }

        this.$timeInterval.on('hide.daterangepicker', (event) => {
            if(!this.rule.startTime || !this.rule.endTime){
                this.$timeInterval.val('');
            }
        });

        this.$timeInterval.on('cancel.daterangepicker', (event) => {
            delete this.rule.startTime;
            delete this.rule.endTime;
            this.$timeInterval.val('');
        });


        $('.sourceselector').on("select2:select", (event) => {
            if (!this.rule.sourceUsers) {
                this.rule.sourceUsers = [];
            }
            this.rule.sourceUsers.push((<any>(event)).params.data.id);
        });
        $('.destselector').on("select2:select", (event) => {
            if (!this.rule.destUsers) {
                this.rule.destUsers = [];
            }
            this.rule.destUsers.push((<any>(event)).params.data.id);
        });
        $('.sourceselector').on("select2:unselect", (event) => {
            let index = this.rule.sourceUsers.indexOf((<any>(event)).params.data.id);
            this.rule.sourceUsers.splice(index, 1);
        });
        $('.destselector').on("select2:unselect", (event) => {
            let index = this.rule.destUsers.indexOf((<any>(event)).params.data.id);
            this.rule.destUsers.splice(index, 1);
        });

        $('.iplocsourceselector').on("select2:select", (event) => {
            if (!this.rule.sourceIpLocs) {
                this.rule.sourceIpLocs = [];
            }
            for (let i = 0; i < this.ipLocs.length; i++) {
                if (this.ipLocs[i].id === (<any>(event)).params.data.id) {
                    this.rule.sourceIpLocs.push(this.ipLocs[i]);
                    i = this.ipLocs.length;
                }
            }
        });
        $('.iplocdestselector').on("select2:select", (event) => {
            if (!this.rule.destIpLocs) {
                this.rule.destIpLocs = [];
            }
            for (let i = 0; i < this.ipLocs.length; i++) {
                if (this.ipLocs[i].id === (<any>(event)).params.data.id) {
                    this.rule.destIpLocs.push(this.ipLocs[i]);
                    i = this.ipLocs.length;
                }
            }
        });
        $('.iplocsourceselector').on("select2:unselect", (event) => {
            let index = -1;
            for (let i = 0; i < this.rule.sourceIpLocs.length; i++) {
                if (this.rule.sourceIpLocs[i].id === (<any>(event)).params.data.id) {
                    index = i;
                    i = this.rule.sourceIpLocs.length;
                }
            }
            this.rule.sourceIpLocs.splice(index, 1);
        });
        $('.iplocdestselector').on("select2:unselect", (event) => {
            let index = -1;
            for (let i = 0; i < this.rule.destIpLocs.length; i++) {
                if (this.rule.destIpLocs[i].id === (<any>(event)).params.data.id) {
                    index = i;
                    i = this.rule.destIpLocs.length;
                }
            }
            this.rule.destIpLocs.splice(index, 1);
        });

        $('.appselector').on("select2:select", (event) => {
            if (!this.rule.endUserApps) {
                this.rule.endUserApps = [];
            }
            for (let i = 0; i < this.userApps.length; i++) {
                if (this.userApps[i].id === (<any>(event)).params.data.id) {
                    this.rule.endUserApps.push(this.userApps[i]);
                    i = this.userApps.length;
                }
            }
        });
        $('.appselector').on("select2:unselect", (event) => {
            let index = -1;
            for (let i = 0; i < this.rule.endUserApps.length; i++) {
                if (this.rule.endUserApps[i].id === (<any>(event)).params.data.id) {
                    index = i;
                    i = this.rule.endUserApps.length;
                }
            }
            this.rule.endUserApps.splice(index, 1);
        });

        let taginputs = $('input[data-role="tagsinput"]');
        taginputs.on('itemAdded itemRemoved', (event) => {
            // event.item: contains the item
            let taginput = $(event.currentTarget);
            taginput.tagsinput("refresh");
            let values = taginput.val();
            let field = taginput.data("field");
            this.rule[field] = values;
        }).tagsinput({
            tagClass: 'label label-default',
            trimValue: true,
            allowDuplicates: false,
            freeInput: true
        });

        //taginputs.tagsinput("refresh");
        let $inportSwitchPorts = $('.inport-switch-ports');
        $inportSwitchPorts.select2(); //.val().trigger("change"); //TODO 2913
        $inportSwitchPorts.on("change", (ev) => {
            this.rule.inportSwitchPorts = $inportSwitchPorts.val();
        });
        return true;
    }

    regexValidation(evt, type) {
        let regEx = new RegExp(this.regEx[type]);
        evt.target.setCustomValidity("");
        evt.target.value.split(',').forEach((value) => {
            if (value && !regEx.test(value)) {
                evt.target.setCustomValidity(" ");
            }
        });
        if (evt.target.validity.valid) {
            $(evt.target).removeClass('validation-error');
        } else {
            $(evt.target).addClass('validation-error');
        }
        this.checkAllValidation();
    }

    checkAllValidation() {
        this.rule.valid = true;
        $('#accessRule input', this.elementRef.nativeElement).each((i, input: HTMLInputElement) => {
            if (!input.validity.valid)
                this.rule.valid = false;
        });
    }
}
