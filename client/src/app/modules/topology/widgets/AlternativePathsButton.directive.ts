/**
 * Created by ekinca on 1.06.2017.
 */
import {
    Component, ComponentFactoryResolver, ComponentRef, Directive, ElementRef, EventEmitter, HostListener, Input, Output,
    ViewContainerRef
} from '@angular/core';
import {SharedService} from "app/modules/SharedService";

@Component({
    moduleId: module.id,
    selector: 'popover-window',
    styles:[':host{position:relative; top:-27px; right:-10px}'],
    template: `
        <div class="popover popover-right" style="display:block">
            <h3 class="popover-title" style="min-width:143px;">{{title}}</h3>
            <div class="popover-content"  style="padding:0 !important;">
                <ul class="nav" style="margin-bottom:0 !important;" *ngFor="let path of paths; let i = index;">
                    <li index="'+(i+1)+'" style="min-width:116px;" >
                        
                        <a href="javascript:;" class="proactive-alternatives" style="color:inherit;" (click)="pathSelected(i)"><span [style.font-weight]="i == selectedIndex ? 'bold' : 'normal'">{{i+1}}. Patika</span> 
                            <i *ngIf="i == clickedIndex" class="fa fa-check blue-ticks-for-alternative-proactive-paths" style="margin-left:5px;color: blue;"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    `
})
export class alternativePathsPopoverWindow {
    @Input() title;
    @Input() paths;
    @Input() selectedIndex;
    clickedIndex = 0;

    constructor(private sharedService: SharedService){}

    pathSelected(index){
        this.sharedService.announceAlternativeProactivePathChange(this.paths[index].links);
        this.clickedIndex = index;
    }
}

@Directive({ selector: '[topopopover]'})
export class alternativePathsPopoverDirective {

    @Input() title: string;
    @Input() paths;
    @Input() selectedIndex;

    private _component: ComponentRef<any>;

    constructor(private _vcRef: ViewContainerRef, private resolver: ComponentFactoryResolver) {
    }

    @HostListener('click')
    toggle() {
        console.log("here");
        if (!this._component) {
            const componentFactory = this.resolver.resolveComponentFactory(alternativePathsPopoverWindow);
            this._component = this._vcRef.createComponent(componentFactory);
            this._component.instance.title = this.title || "title";
            this._component.instance.paths = this.paths || [];
            this._component.instance.selectedIndex = this.selectedIndex || 0;

        } else {
            this._vcRef.clear()
            this._component.destroy();
            this._component = null;
        }
    }
}