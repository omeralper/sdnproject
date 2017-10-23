/**
 * Created by ekinca on 9.06.2017.
 */
import {
    Component, Input
} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'alarm-status-popover-window',
    //styles:[':host{position:relative; top:-27px; right:-10px}'],
    template: `
        <div id="alarm-status-menu-node" [ngStyle]="{'display': _aspcDisplay, 'left.px': _aspcLeft, 'top.px': _aspcTop, 'position': position}">
                     
                    <ul class="dropdown-menu" style="margin-bottom:0 !important; display: block !important">
                        <h3 class="popover-title" style="min-width:143px;" data-i18n="network_vis.topology.alarm_status_popover.title"></h3>
                        <li style="min-width:116px;" class="contextmenu-item">
                            <a href="javascript:;"> <span data-i18n="network_vis.topology.alarm_status_popover.fatal"></span>
                                <span class="badge badge-danger" style="float:right;"> {{_alarmStatus[0]}} </span>
                            </a>                       
                        </li>
                        <li style="min-width:116px;" class="contextmenu-item">
                            <a href="javascript:;"> <span data-i18n="network_vis.topology.alarm_status_popover.critical"></span>
                                <span class="badge badge-warning" style="float:right;"> {{_alarmStatus[1]}} </span>
                            </a>
                        </li>
                        <li style="min-width:116px;" class="contextmenu-item">
                            <a href="javascript:;"> <span data-i18n="network_vis.topology.alarm_status_popover.important"></span>
                                <span class="badge badge-success" style="float:right;"> {{_alarmStatus[2]}} </span>
                            </a>
                        </li>
                        <li style="min-width:116px;" class="contextmenu-item">
                            <a href="javascript:;"> <span data-i18n="network_vis.topology.alarm_status_popover.unimportant"></span>
                                <span class="badge badge-info" style="float:right;"> {{_alarmStatus[3]}} </span>
                            </a>
                        </li>
                    </ul>
               
        </div>
    `
})
export class AlarmStatusComponent {
    position = "absolute";
    _alarmStatus = [1,2,3,4];
    _aspcDisplay = "none";
    _aspcLeft: string = "0";
    _aspcTop: string = "0";

    @Input()
    set alarmStatus(val){
        this._alarmStatus = val;
    }

    @Input()
    set aspcDisplay(val){
        this._aspcDisplay = val ? "block" : "none";
    }

    @Input()
    set aspcLeft(val){
        //val = val ? val.toString() + "px !important" : "0px !important";
        this._aspcLeft = val;
    }

    @Input()
    set aspcTop(val){
        //val = val ? val.toString() + "px !important" : "0px !important";
        this._aspcTop = val;
    }

    constructor(){}
}