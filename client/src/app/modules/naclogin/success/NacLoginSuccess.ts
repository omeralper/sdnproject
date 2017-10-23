/**
 * Created by omeroz on 03.11.2016.
 */
import {
    Component,
    OnInit, AfterViewInit,
    ChangeDetectorRef, ElementRef, OnDestroy
} from "@angular/core";
import {NacAuthenticator} from "../component/NacAuthenticator";
import {NacUserDTO} from "../../../swagger/NacUserDTO";
import {UIHelper, DIALOG_TYPES} from "../../UIHelper";
import {BasePage} from "../../../commons/BasePage";
import {PageServices} from "../../PageServices";

@Component({
    moduleId: module.id,
    selector: 'NacLoginSuccess',
    templateUrl: './NacLoginSuccess.html',
})
export class NacLoginSuccess extends BasePage implements OnInit, AfterViewInit,OnDestroy {

    currentUser: NacUserDTO = <NacUserDTO>{};
    lastAccess;
    timepassed;
    accessTimeEnd;
    d = new Date();
    days = 0;
    count;

    constructor(public nacAuthenticator: NacAuthenticator,
                public uiHelper: UIHelper,
                public changeDetector: ChangeDetectorRef,
                baseServices: PageServices,
                elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.setI18NKey('naclogin');
    }

    ngOnInit() {
        super.ngOnInit();
        this.nacAuthenticator.inc();
        console.info(this.nacAuthenticator.getCount());

        this.currentUser = this.nacAuthenticator.getUser();
        this.accessTimeEnd = this.uiHelper.renderDateTime(this.currentUser.accessTimeEnd) || '-';

        if (this.currentUser.lastAccess) {
            this.lastAccess = this.uiHelper.renderDateTime(this.currentUser.lastAccess);
            this.timepassed = this.uiHelper.formatTimeAgo(+this.currentUser.lastAccess);
        }
        else {
            this.lastAccess = this.d.toLocaleTimeString();
        }
        this.changeDetector.detectChanges();
    }

    ngAfterViewInit() {
        if (super.ngAfterViewInit()) {
            this.baseServices.uiHelper.notify(this.t('success'), DIALOG_TYPES.SUCCESS);
            if (!this.currentUser.lastAccess) {
                setInterval(() => {
                    this.count = new Date();
                }, 1000);
                setInterval(() => {
                    this.timepassed = new Date(this.count.getTime() - this.d.getTime()).toUTCString().substring(17, 25);

                }, 1000);
                setInterval(() => {
                    if (this.timepassed == '00:00:00') this.days++;
                }, 1000);
            }
            return true;
        }
        return false;
    }


    ngOnDestroy() {
        super.ngOnDestroy();
    }

    logout() {
        this.nacAuthenticator.logout();
    }

}
