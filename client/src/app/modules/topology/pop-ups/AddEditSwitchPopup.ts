/**
 * Created by ekinca on 2.06.2016.
 */
import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ChangeDetectorRef} from '@angular/core';
import {BasePopupPage} from "../../../commons/BasePopupPage/BasePopupPage";
import {PageServices} from "../../PageServices";
import {AAASTATUS} from "../../../swagger/AAASTATUS";
declare var is: Is;
import {DIALOG_TYPES} from "../../UIHelper";
import {DocumentConverter} from "../../DocumentConverter"
import {MvtnApi} from "../../../swagger/MvtnApi";
import {DeviceProfileListResponse} from "../../../swagger/DeviceProfileListResponse";
import {DeviceProfileDTO} from "../../../swagger/DeviceProfileDTO";
import {SwitchDTO} from "../../../swagger/SwitchDTO";
import {DEVICETYPE} from "../../../swagger/DEVICETYPE";
import {SWITCHSTATUS} from "../../../swagger/SWITCHSTATUS";
import {SWITCHMODE} from "../../../swagger/SWITCHMODE";
import {popupType} from "../view/TopologyPage";
import {EnumHelper} from "../../../commons/EnumHelper";
import {DeviceProfileListRequest} from "../../../swagger/DeviceProfileListRequest";
import {ListOptions} from "../../../swagger/ListOptions";
import {UI_SECURITY_LEVELS} from "../../../commons/enums/UI_SECURITY_LEVELS";
import 'rxjs/add/operator/toPromise';
import {CONNECTIONMODE} from "../../../swagger/CONNECTIONMODE";
import {OFFLINEMODE} from "../../../swagger/OFFLINEMODE";

// Root Component
@Component({
    moduleId: module.id,
    selector: 'PathConfirmationPopup',
    templateUrl: './AddEditSwitchPopup.html',
    providers: [DocumentConverter, MvtnApi],

})
export class AddEditSwitchPopup extends BasePopupPage<any> implements OnInit, AfterViewInit, OnDestroy {

    $selectpicker: any;
    submitted = false;

    securityLevels = EnumHelper.getValues(UI_SECURITY_LEVELS);
    statuses = EnumHelper.getNames(AAASTATUS);

    isNewItem: boolean;

    switchName: string;
    optionList: any;
    profileId: any;

    portsOfProfile: any = []; //= [{number:1,status: "up"}, {number:2,status: "up"}, {number:3,status: "up"}];
    public currentProfile;
    public portDetails = [];

    constructor(baseServices: PageServices, elementRef: ElementRef, public documentConverter: DocumentConverter, public mvtnApi: MvtnApi, public cdr: ChangeDetectorRef) {
        super(baseServices, elementRef);
        this.setI18NKey('network_vis.topology.add_edit_switch_popup');

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
        this.$selectpicker = $('.selectpicker');
        if (this.data.mode === popupType.EDIT) {
            if (this.data.switchData.name && this.data.switchData.name.length > 0) {
                this.switchName = this.data.switchData.name;
            } else {
                console.log("no switch name");
            }

            $("#securityLevelForSwitchSelection").val(this.data.switchData.securityLevel);
        } else {
            console.log("new switch popup");
        }

        let deviceProfileRequest: DeviceProfileListRequest = <DeviceProfileListRequest>this.baseServices.apiHelper.genRequest({
            options: <ListOptions>{
                startPage: 0,
                pageSize: 0,
                // sortOptions : <SortOptions>{
                //     fieldName : '',
                //     isAscend : true
                // },
                // fields : null
            }
        });

        this.mvtnApi.virtualListDeviceProfilesPOST(deviceProfileRequest).toPromise().then(
            (res: DeviceProfileListResponse) => {
                if (this.baseServices.uiHelper.processResponse(res)) {
                    if (this.documentConverter.isNotNullOrUndefinedOrEmptyString(res.data) && res.data.list) {
                        //filter the list to remove items with empty portlist.
                        this.optionList = res.data.list.filter((itm) => (itm.mvtnPortInfo && itm.mvtnPortInfo.portDetails && itm.mvtnPortInfo.portDetails.length > 0));

                        this.optionList = this.handleOptionList(this.optionList);

                        if (this.optionList.length > 0) {
                            if (this.data.mode === popupType.EDIT) {
                                for (let o = 0; o < this.optionList.length; o++) {
                                    if (this.optionList[o].profileId == this.data.switchData.id) {
                                        this.currentProfile = this.optionList[o];
                                        this.profileId = this.currentProfile.profileId;
                                        var portArray = [];
                                        for (let m = 0; m < this.data.switchData.mvtnPortInfo.portDetails.length; m++) {
                                            portArray.push(this.data.switchData.mvtnPortInfo.portDetails[m].number);
                                        }
                                        break;
                                    }
                                }

                                if (!this.currentProfile) {
                                    this.baseServices.uiHelper.notify("no relevant profile in server", DIALOG_TYPES.INFO);
                                }
                            } else {
                                this.currentProfile = this.optionList[0];
                            }

                            if (this.currentProfile && this.currentProfile.mvtnPortInfo && this.currentProfile.mvtnPortInfo.portDetails) {
                                this.portsOfProfile = this.currentProfile.mvtnPortInfo.portDetails;
                            }
                        } else {
                            this.baseServices.uiHelper.alert(this.t('no_available_profile_exists'), DIALOG_TYPES.WARNING, () => {
                                this.close(false);
                            });
                            return;
                        }

                        this.cdr.detectChanges();
                        if (this.data.mode === popupType.EDIT) {
                            this.$selectpicker.selectpicker('val', portArray);
                        }
                        this.$selectpicker.selectpicker('refresh');

                        if (this.data.switchData.id && this.data.switchData.id.length > 0) {
                            $('#switchProfileSelection').val(this.data.switchData.id);
                        }
                    }
                }
            }, (err) => {
                let errMsg = err.message || 'Server error';
                if (errMsg === 'Server error')
                    return this.baseServices.uiHelper.notify($.t("common.messages.RETURN_STATUS.SERVER_ERROR"), DIALOG_TYPES.ERROR);
            }
        );
    }

    ngOnChanges(e) {
        super.ngOnChanges(e);
    }

    ngAfterViewInit() {
        if (super.ngAfterViewInit()) {

            this.$selectpicker.selectpicker('refresh');
            return true;
        }
        return false;
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

    updateSelectedValue(e) {//html binding
        for (let i = 0; i < this.optionList.length; i++) {
            if (this.optionList[i].profileName || this.optionList[i].profileId) {
                if (this.optionList[i].profileName == e || this.optionList[i].profileId == e) {
                    this.currentProfile = this.optionList[i];
                    if (this.currentProfile && this.currentProfile.mvtnPortInfo && this.currentProfile.mvtnPortInfo.portDetails) {
                        this.portsOfProfile = this.currentProfile.mvtnPortInfo.portDetails;

                        this.cdr.detectChanges();
                        this.$selectpicker.selectpicker('refresh');
                    }
                }
            }
        }
        if (!this.currentProfile) {
            this.baseServices.uiHelper.notify("no profile", DIALOG_TYPES.WARNING);
        }
    }

    save() {
        let $selectPickerVal = $('.selectpicker').val();

        if ($selectPickerVal) {
            $selectPickerVal.forEach((item) => {
                //let num = Number(item.substring(5, item.length));
                this.portDetails.push({
                    switches: [],
                    alarms: [],
                    number: item
                });
            });
        }

        this.profileId = this.currentProfile.profileId; //this.hostCount  && this.profileID && this.profileID.length > 0
        if(this.switchName && this.switchName.length > 0){
            if($selectPickerVal && $selectPickerVal.length >= 1){
                if(this.profileId && this.profileId.length > 0) {
                    let switchData:SwitchDTO = {
                        datapathId: "",
                        connectionMode: CONNECTIONMODE.OUTBAND,
                        deviceType: "",
                        slaveControllerIds: [""],
                        offlineMode: OFFLINEMODE.SECURE,
                        topologyId:'',
                        "address": {
                            "mac": this.profileId,
                            "ipv4": this.profileId,
                            "ipv6": this.profileId
                        },
                        "bandwidth": {current: 0, min: 0, max: 0},
                        "powerUsage": 0,
                        "alarms": [],
                        "portInfo": {
                            "totalPorts": Number(this.portDetails.length),
                            "activePorts": 0,
                            "passivePorts": 0,
                            "deadPorts": 0,
                            "portDetails": []
                        },
                        "networks": [],
                        "deviceProfile": {
                            "profileId": this.profileId,
                            "profileName": this.profileId
                        },
                        "version": 1,
                        "deviceInfo": {
                            "vendor": "Nicira, Inc.",
                            "model": "None",
                            "type": DEVICETYPE.VIRTUAL_SWITCH,
                            "swVersion": "2.0.2"
                        },
                        "mvtnPortInfo": {
                            "portCount": Number(this.portDetails.length),
                            "portDetails": this.portDetails
                        },
                        "required": true,
                        "revision": 1,
                        "mode": SWITCHMODE.ACTIVE,
                        "securityLevel": parseInt($("#securityLevelForSwitchSelection").val(), 10),
                        "activeSince": new Date(),
                        "depth": 0,
                        "blocked": false,
                        "flows": 4,
                        "name": this.switchName,
                        "supports": {
                            "openFlow": "OF_13",
                            "netFlow": "DefaultVersion",
                            "netStream": "DefaultVersion",
                            "cFlow": "DefaultVersion",
                            "jFlow": "DefaultVersion",
                            "rFlow": "DefaultVersion",
                            "sFlow": "DefaultVersion"
                        },
                        "colorCode": "",
                        "id": this.profileId,
                        "timestamp": new Date(),
                        "status": SWITCHSTATUS.UP,
                    };
                    switchData["fixed"] = true;
                    switchData["type"] = "Switch";

                    this.close(true, switchData);
                } else {
                    this.baseServices.uiHelper.alert($.t("network_vis.topology.add_edit_switch_popup.profile_field_error"), DIALOG_TYPES.WARNING);
                }
            } else {
                this.baseServices.uiHelper.alert($.t("network_vis.topology.add_edit_switch_popup.port_field_error"), DIALOG_TYPES.WARNING);
            }
        } else {
            this.baseServices.uiHelper.alert($.t("network_vis.topology.add_edit_switch_popup.name_field_error"), DIALOG_TYPES.WARNING);
        }
    }

    public handleOptionList(list: Array<DeviceProfileDTO>) {//isUsed
        let nodes: Array<SwitchDTO> = d3.selectAll('.node').data();
        if (nodes.length > 0) {
            for (let i = 0; i < list.length; i++) {
                for (let j = 0; j < nodes.length; j++) {
                    if (list[i].profileId == nodes[j].deviceProfile.profileId && list[i]['isUsed'] != true) {
                        list[i]['isUsed'] = true;
                    } else {
                        if (list[i]['isUsed'] == true) {
                            //todo for when switch deletion comes
                        } else {
                            list[i]['isUsed'] = false;
                        }
                    }
                }
            }
        }
        return list;
    }
}
