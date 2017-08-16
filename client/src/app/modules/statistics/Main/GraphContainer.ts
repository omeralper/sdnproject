/**
 * Created by omeroz on 2/25/2017.
 */

import {
    Component, ViewContainerRef, ViewChild, ComponentFactoryResolver, ComponentFactory,
    ComponentRef, Type, OnDestroy, ElementRef, EventEmitter
} from "@angular/core";
import {AbstractGraph} from "./AbstractGraph";
import {BasePage} from "../../../commons/BasePage";
import {PageServices} from "../../PageServices";

@Component({
    moduleId: module.id,
    selector: 'graphContainer',
    templateUrl: "./GraphContainer.html",
    outputs: ['fullScreen', 'refresh', 'live'],
    inputs: ['title']
})
export class GraphContainer extends BasePage {
    // @ViewChild("graph", {read: ViewContainerRef}) container;

    public fullScreen: EventEmitter<null> = new EventEmitter();
    public refresh: EventEmitter<null> = new EventEmitter();
    public live: EventEmitter<boolean> = new EventEmitter();

    componentRef: ComponentRef<AbstractGraph>;
    liveModeOn: boolean = false;

    constructor(public resolver: ComponentFactoryResolver,
                baseServices: PageServices,
                elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('statistics.dashboard');

    }

    onFullScreen() {
        this.fullScreen.emit();
    }

    onRefresh() {
        this.refresh.emit();
    }

    onLive() {
        this.liveModeOn = !this.liveModeOn;
        this.live.emit(this.liveModeOn);
    }

    // ngOnInit() {
    //   //http://blog.rangle.io/dynamically-creating-components-with-angular-2/
    //   //https://netbasal.com/dynamically-creating-components-with-angular-a7346f4a982d#.2ty06gvj6
    //
    //   this.container.clear();
    //   // let inputProviders = Object.keys(data.inputs).map((inputName) => {
    //   //     return {provide: inputName, useValue: data.inputs[inputName]};
    //   // });
    //
    //   // let resolvedInputs = ReflectiveInjector.resolve([{provide: 'allMetrics', useValue: this.allMetrics}]);
    //   // let injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.container.parentInjector);
    //
    //   let factory = this.resolver.resolveComponentFactory(this.graphType);
    //   // let component = factory.create(injector);
    //   this.componentRef = this.container.createComponent(factory);
    //   // if (this.componentRef) {
    //   //     this.componentRef.destroy();
    //   // }
    //   // this.componentRef = component;
    //   }

    // ngOnDestroy() {
    //     this.componentRef.destroy();
    // }

}
