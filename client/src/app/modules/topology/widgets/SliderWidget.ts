/**
 * Created by ekinca on 3.11.2016.
 */
import {Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef} from "@angular/core";
import {topoConfig} from "../topology.config";
import {BasePage} from "../../../commons/BasePage";
import {PageServices} from "../../PageServices";

@Component({ moduleId: module.id,
    selector: 'slider-widget',
    templateUrl: './SliderWidget.html'
})
export class SliderWidget extends BasePage implements OnInit, OnDestroy, OnChanges, AfterViewInit {

    elementRef:ElementRef;
    controllerList:any;

    constructor(elementRef:ElementRef, baseServices:PageServices) {
        super(baseServices, elementRef);
        this.elementRef = elementRef;
        this.setI18NKey('network_vis.topology');

    }

    ngOnChanges(e) {
        super.ngOnChanges(e);
        this.logger.debug('something changed', e);
    }

    ngOnInit() {
        super.ngOnInit();
    }

    ngAfterViewInit() {
        if (super.ngAfterViewInit()) {
            let slider = document.getElementById('slider');

            noUiSlider.create(slider, {
                start: 30,
                connect: [true, false],
                tooltips: true,
                //step: 10,orientation: 'vertical',
                range: {
                    'min': 1,
                    'max': 100
                }
            });

            slider.noUiSlider.on('change', function(val){
                topoConfig.bandwidthUtilizationCoefficient = val * topoConfig.bandwidthUtilizationSensitivityCoefficient;
            });
            return true;
        }
        return false;
    }


    ngOnDestroy() {
        super.ngOnDestroy();
    }
}