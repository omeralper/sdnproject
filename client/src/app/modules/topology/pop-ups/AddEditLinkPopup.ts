/**
 * Created by ekinca on 2.06.2016.
 */
import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ViewChild, ChangeDetectorRef} from '@angular/core';
import {BasePopupPage} from "../../../commons/BasePopupPage/BasePopupPage";
import {PageServices} from "../../PageServices";
import {AAASTATUS} from "../../../swagger/AAASTATUS";
declare var is: Is;
import {DIALOG_TYPES} from "../../UIHelper";
import {LinkDTO} from "../../../swagger/LinkDTO";
import {LINKSTATUS} from "../../../swagger/LINKSTATUS";
import {popupType} from "../view/TopologyPage";
import {EnumHelper} from "../../../commons/EnumHelper";
import {BWUNIT} from "../../../swagger/BWUNIT";
import {UI_SECURITY_LEVELS} from "../../../commons/enums/UI_SECURITY_LEVELS";
import {PORTSTATE} from "../../../swagger/PORTSTATE";

@Component({ moduleId: module.id,
    selector: 'PathConfirmationPopup',
    templateUrl: './AddEditLinkPopup.html',
})
export class AddEditLinkPopup extends BasePopupPage<any> implements OnInit, AfterViewInit, OnDestroy {

    submitted = false;
    bwunits = EnumHelper.getNames(BWUNIT);
    securityLevels = EnumHelper.getValues(UI_SECURITY_LEVELS);
    statuses = EnumHelper.getNames(AAASTATUS);

    isNewItem: boolean;

    targetBandwidth: number;
    targetBandwidthByBit: number;
    targetBandwidthUnit: BWUNIT = BWUNIT.KBPS;
    sourceBandwidth: number;
    sourceBandwidthByBit: number;
    sourceBandwidthUnit: BWUNIT = BWUNIT.KBPS;
    optionList: any = [];


    @ViewChild('sourceBW') sourceBW;
    @ViewChild('targetBW') targetBW;

    constructor(baseServices: PageServices, elementRef: ElementRef, public changeDetector: ChangeDetectorRef) {
        super(baseServices, elementRef);
        this.setI18NKey('network_vis.topology.add_edit_link_popup');

        this.logger.debug('Data received:', this.data);

        this.isNewItem = is.not.existy(this.data.id);

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

        if (this.data.mode === popupType.EDIT) {
            if (this.data.linkData["reverse"]) {
                this.targetBandwidthByBit = this.data.linkData["reverse"].constraints["availableBandwidth"];
            }
            this.sourceBandwidthByBit = this.data.linkData.constraints["availableBandwidth"];
            $("#securityLevelForLinkSelection").val(this.data.linkData.securityLevel);


            let unit = this.calculateUnit(this.targetBandwidthByBit);
            this.targetBandwidthUnit = Math.pow(1000, unit);
            this.targetBandwidth = this.targetBandwidthByBit / this.targetBandwidthUnit;

            unit = this.calculateUnit(this.sourceBandwidthByBit);
            this.sourceBandwidthUnit = Math.pow(1000, unit);
            this.sourceBandwidth = this.sourceBandwidthByBit / this.sourceBandwidthUnit;

        } else {
            console.log("new link popup");
        }
    }

    calculateUnit(bandWithByBit) {
        let t = Number(bandWithByBit).toString();
        let counter = 0;
        for (let i = t.length - 1; i > 1; i--) {
            if (t[i] === "0")
                counter++;
            else break;
        }
        return Math.ceil(counter / 3);
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

    changeBandWith(input) {
        this.changeDetector.detectChanges();
        if (input == 'source') {
            this.sourceBW.nativeElement.dispatchEvent(new Event('keyup'));
            this.sourceBW.nativeElement.dispatchEvent(new Event('change'));
        }
        else {
            this.targetBW.nativeElement.dispatchEvent(new Event('keyup'));
            this.targetBW.nativeElement.dispatchEvent(new Event('change'));
        }
    }

    save() {
        this.targetBandwidthByBit = this.targetBandwidth * this.targetBandwidthUnit;
        this.sourceBandwidthByBit = this.sourceBandwidth * this.sourceBandwidthUnit;

        let form: any = $('form', this.elementRef.nativeElement)[0];
        if (!form.checkValidity()) {
            this.baseServices.uiHelper.notify($.t('common.messages.validation_error'), DIALOG_TYPES.WARNING);
            return;
        }

        this.data.linkData.source.portInfo.activePorts = this.data.linkData.source.portInfo.activePorts + 1;
        this.data.linkData.target.portInfo.activePorts = this.data.linkData.target.portInfo.activePorts + 1;

        let linkData: LinkDTO = {
            topologyId: '',
            bandwidth: 0,
            alarms: [],
            bandwidthUtilization: 0,
            srcPort: {
                id: this.data.linkData.source.id,
                address: {},
                number: this.data.linkData.source.portInfo.activePorts,
                speed: 0,
                states: [PORTSTATE.LIVE]
            },
            version: 1,
            linkWeight: "0",
            status: LINKSTATUS.LIVE,
            required: true,
            revision: 1,
            securityLevel: parseInt($("#securityLevelForLinkSelection").val(), 10),
            loss: 0,
            destPort: {
                id: this.data.linkData.target.id,
                address: {},
                number: this.data.linkData.target.portInfo.activePorts,
                speed: 0,
                states: [PORTSTATE.LIVE]
            },
            delay: 0,
            jitter: 0,
            blocked: false,
            signalQuality: 0,
            colorCode: "",
            id: "",
            timestamp: new Date(),
            constraints: {
                availableBandwidth: Number(this.sourceBandwidthByBit),
                securityLevel: parseInt($("#securityLevelForLinkSelection").val(), 10)
            }
        };
        linkData["source"] = this.data.linkData.source;
        linkData["target"] = this.data.linkData.target;
        linkData["type"] = "Link";

        let reverseLinkData: LinkDTO = {
            topologyId: '',
            bandwidth: 0,
            alarms: [],
            bandwidthUtilization: 0,
            srcPort: {
                id: this.data.linkData.target.id,
                address: {},
                number: 1,
                speed: 0,
                states: [PORTSTATE.LIVE]
            },
            version: 1,
            linkWeight: "0",
            status: LINKSTATUS.LIVE,
            required: true,
            revision: 1,
            securityLevel: parseInt($("#securityLevelForLinkSelection").val(), 10),
            loss: 0,
            destPort: {
                id: this.data.linkData.source.id,
                address: {},
                number: 2,
                speed: 0,
                states: [PORTSTATE.LIVE]
            },
            delay: 0,
            jitter: 0,
            blocked: false,
            signalQuality: 0,
            colorCode: "",
            id: "",
            timestamp: new Date(),
            constraints: {
                availableBandwidth: Number(this.targetBandwidthByBit),
                securityLevel: parseInt($("#securityLevelForLinkSelection").val(), 10)
            }
        };
        reverseLinkData["source"] = this.data.linkData.target;
        reverseLinkData["target"] = this.data.linkData.source;
        reverseLinkData["type"] = "Link";
        linkData["reverse"] = reverseLinkData;
        this.close(true, linkData);
    }
}
