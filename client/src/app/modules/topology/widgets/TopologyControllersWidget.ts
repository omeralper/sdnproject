/**
 * Created by ekinca on 21.06.2016.
 */
import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef, Input, ChangeDetectorRef} from "@angular/core";
import {BasePage} from "../../../commons/BasePage";
import {PageServices} from "../../PageServices";
import {topoConfig} from "../topology.config";
import {SharedService} from "../../SharedService";
import {SWITCHSTATUS} from "../../../swagger/SWITCHSTATUS";
import {ControllerDTO} from "../../../swagger/ControllerDTO";
import {CONTROLLERSTATE} from "../../../swagger/CONTROLLERSTATE";
import {DIALOG_TYPES} from "../../UIHelper";
import {D3attributes} from "../D3attributes";
import {tooltipMode} from "./InfoTooltipWidget";
import {tplSwitch} from "../NetworkElementDefinitions/tplSwitch";

@Component({ moduleId: module.id,
    selector: 'controllers-widget',
    templateUrl: './TopologyControllerWidget.html'
})
export class TopologyControllersWidget extends BasePage implements OnInit, OnDestroy, OnChanges, AfterViewInit {
   //@ViewChild(ShowTopology) showTopologyComponent: ShowTopology;
    @Input() controllerTabData:Array<ControllerDTO>;

    elementRef:ElementRef;
    controllerList:any;

    constructor(elementRef:ElementRef, baseServices:PageServices, public sharedService: SharedService, public changeDetector: ChangeDetectorRef, public d3Attributes: D3attributes) {
        super(baseServices, elementRef);
        this.elementRef = elementRef;
        this.setI18NKey('network_vis.topology');

    }

    ngOnChanges(e) {
        super.ngOnChanges(e);
        this.logger.debug('something changed', e);
        //TODO
        if(this.controllerTabData){
            this.controllerList = this.controllerTabData;
        }
    }

    ngOnInit() {
        super.ngOnInit();
    }

    updateControllersWidget(data){
        let nodes = d3.selectAll(".node");

        nodes.filter((node)=> {

            if (node.status !== SWITCHSTATUS.DOWN &&
                node.type && node.type == "Switch") {
                node.colorCode = null;
                return node;
            }
        }).select("rect").transition().duration(500)
            .style("fill", (d: tplSwitch)=> d.getFillColor()).transition()
            .style("stroke", (d: tplSwitch)=> d.getStrokeColor());

        this.baseServices.uiHelper.notify(this.t("messages.conroller_changed"), DIALOG_TYPES.INFO);
    }

    tabClicked(controller, $event){
        if (controller.controllerState !== CONTROLLERSTATE.INACTIVE) {

            controller.isActive = !controller.isActive;

            for (let i = 0; i < this.controllerList.length; i++) {
                if (this.controllerList[i].id!=controller.id)
                    this.controllerList[i].isActive = false;
            }


//TODO IF CONTROLLER IS NOT ACTIVE GO BACK TO DEFAULT COLOR
            let nodes = d3.selectAll(".node");

            if (controller.isActive){
                nodes.filter((node)=> {
                    if (node.status !== SWITCHSTATUS.DOWN && node.type && node.type == "Switch" && node.controllerId && node.controllerId == controller.id) {
                        node.colorCode = topoConfig.switchControllerFillColor;
                        return node;
                    }
                }).select("rect").transition()
                    .style("fill", (d: tplSwitch)=> d.getFillColor()).transition()
                    .style("stroke", (d: tplSwitch)=>  d.getStrokeColor());
            }

            //remaining nodes
            nodes.filter((node)=> {
                if (node.status !== SWITCHSTATUS.DOWN && node.type && node.type == "Switch" && (!controller.isActive || node.controllerId && node.controllerId != controller.id)) {
                    node.colorCode = null;
                    return node;
                }
            }).select("rect").transition()
                .style("fill", (d)=> d.getFillColor()).transition()
                .style("stroke", (d)=> d.getStrokeColor());
        }
    }

    controllerTabHover(controller, $event){
        controller["isController"] = true;
        this.sharedService.infoTooltipEvent.next({mode:tooltipMode.CONTROLLER, data:controller});
    }

    controllerTabLeave(controller, $event){
        this.sharedService.infoTooltipEvent.next({mode:tooltipMode.MOUSEOUT, data:controller});
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
}