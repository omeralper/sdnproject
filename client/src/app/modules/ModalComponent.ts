import {
    ElementRef,
    ComponentRef,
    ChangeDetectorRef,
    ComponentFactoryResolver,
    Component,
    ViewContainerRef,
    ViewChild
} from "@angular/core";
import {SharedService, MODAL_CMD} from "./SharedService";
import {Action} from "../commons/Action";
import {BaseServices} from "./BaseServices";
import {UIHelper} from "./UIHelper";
import {PageServices} from "./PageServices";
/**
 * Created by ekinca on 12.04.2016.
 */
@Component({ moduleId: module.id,
    selector: 'modal-comp',
    templateUrl: './ModalTemplate.html'
})
export class ModalComponent {

    cmp: ComponentRef<any>;
    $modal: any;
    instance: any;

    icon: string;
    title: string;
    subTitle: string;

    modalSize: MODAL_SIZE = MODAL_SIZE.NORMAL;

    popupActions: Array<Action>;
    formActions: Array<Action>;
    public uiHelper;

    @ViewChild('theBody', {read: ViewContainerRef}) theBody;

    constructor(public changeDetector: ChangeDetectorRef, sharedService: SharedService,
                public baseServices: PageServices, public resolver: ComponentFactoryResolver, public elementRef: ElementRef) {


        sharedService.modalEvents.subscribe((options) => {
            this.uiHelper = this.uiHelper || baseServices.injector.get(UIHelper);

            if (options.cmd == MODAL_CMD.HIDE && this.cmp) {
                this.close();
            } else if (options.cmd == MODAL_CMD.SHOW) {

                if (this.cmp) {
                    this.close();
                }

                this.uiHelper.clearNotifications();


                let factory = this.resolver.resolveComponentFactory(options.component);

                this.cmp = this.theBody.createComponent(factory);
                this.reload();
                if (!this.$modal) {
                    this.$modal = <any>$('#theModal');
                    //
                    // this.$modal.on("show.bs.modal", () => {    // wire up the OK button to dismiss the modal when shown
                    //     /*
                    //      $("a.btn",$modal).on("click", (e) => {
                    //      //console.log("button pressed");   // just as an example...
                    //      $modal.modal('hide');     // dismiss the dialog
                    //      });
                    //      */
                    //
                    // });

                    this.$modal.on("shown.bs.modal", () => {    // wire up the OK button to dismiss the modal when shown

                        this.uiHelper.populateTooltips(this.$modal);

                        this.$modal.bind('mousewheel DOMMouseScroll', (e) => {
                            if (!e) { /* IE7, IE8, Chrome, Safari */
                                e = window.event;
                            }
                            //console.log(e.target === this.$modal.get(0));
                            if (e.target === this.$modal.get(0)) {

                                if (e.preventDefault) { /* Chrome, Safari, Firefox */
                                    e.preventDefault();
                                }
                                e.returnValue = false;
                                /* IE7, IE8 */
                                //console.log(e);
                            }
                            if (e.stopPropagation) e.stopPropagation();
                            if (e.stopImmediatePropagation) e.stopImmediatePropagation();
                            if (e.cancelBubble) e.cancelBubble();
                            setTimeout(() => {
                                this.changeDetector.detectChanges();
                            }, 50);
                        });
                    });

                    this.$modal.on("hide.bs.modal", () => {    // remove the event listeners when the dialog is dismissed
                        //$("a.btn",$modal).off("click");,
                        this.$modal.unbind('mousewheel DOMMouseScroll');
                        this.uiHelper.hideTooltips(this.$modal);
                    });

                    this.$modal.on("hidden.bs.modal", () => {  // remove the actual elements from the DOM when fully hidden
                        if (this.cmp) {
                            this.cmp.destroy();
                        }
                        this.cmp = null;
                        this.reload();
                    });
                }

                $(".popup-actions li a").click(function () {
                    $(this)
                        .parents(".btn-group")
                        .find('.action-title')
                        .html($(this).text());
                });

                this.$modal.modal({         // wire up the actual modal functionality and show the dialog
                    "backdrop": "static",
                    "keyboard": false,
                    "show": true            // ensure the modal is shown immediately
                });

                this.uiHelper.isModalShown = true;

            }
        });
    }


    close() {
        this.$modal.modal('hide');
        this.uiHelper.isModalShown = false;
    }

    public reload() {
        if (this.cmp) {
            this.title = this.cmp.instance.title;
            this.icon = this.cmp.instance.icon;
            this.subTitle = this.cmp.instance.subTitle;
            this.popupActions = this.cmp.instance.popupActions;
            this.formActions = this.cmp.instance.formActions;
            this.modalSize = this.cmp.instance.modalSize || MODAL_SIZE.NORMAL;
        } else {
            this.title = '';
            this.icon = '';
            this.subTitle = '';
            this.popupActions = null;
            this.formActions = null;
            this.modalSize = MODAL_SIZE.NORMAL;
        }

        this.changeDetector.detectChanges();
    }

    executeAction(action: Action) {
        action.execute();
    }

    public resolvePopupBtnClass(action: Action) {
        return  this.baseServices.uiHelper.resolvePopupBtnClass(action);
    }

    public resolveFormBtnClass(action: Action) {
        return this.baseServices.uiHelper.resolveFormBtnClass(action);
    }

    t(i18nkey: string, options?: any) {
        return $.t(i18nkey, options);
    }

}

export enum MODAL_SIZE {
    SMALL = <any>'modal-sm',
    NORMAL = <any>'modal-m',
    LARGE = <any>'modal-lg',
    FULL = <any>'modal-full'
}
