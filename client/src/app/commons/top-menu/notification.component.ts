/**
 * Created by yildirayme on 13.04.2017.
 */
import {Component, ElementRef} from "@angular/core";
import {IconOptions} from "../../modules/UIHelper";
import {BaseComponent} from "../BaseComponent";
import {PageServices} from "../../modules/PageServices";

// @Component({
//     moduleId: module.id,
//     selector: 'commons-notification-component',
//     templateUrl: './notification.component.html',
//     styleUrls: ['./notification.component.css']
// })
export abstract class NotificationComponent<T> extends BaseComponent {
    public items: Array<INotificationDTO<T>> = [];
    public hasExcess: boolean = false;

    public get hasItems(): boolean {
        return this.items.length > 0;
    }

    public get itemCount(): string {
        return this.i18n.t(this.itemCountKey, {count: this.items.length});
    }

    public get badgeNumber(): string {
        return [(this.items.length > 0 ? this.items.length : ''), (this.hasExcess ? '+' : '')].join(' ');
    }

    public get title(): string {
        return this.i18n.t(this.titleKey);
    }

    public get viewAllTitle(): string {
        return this.i18n.t(this.viewAllKey);
    }

    public titleKey: string = '';
    public itemCountKey: string = '';
    public viewAllKey: string = '';
    public iconClass: string = '';
    public buttonClass: string = '';

    constructor(baseServices: PageServices, elementRef: ElementRef) {
        super(baseServices, elementRef);
        this.logger.info("NotificationComponent Initialized");
    }

    public abstract viewItem(item: INotificationDTO<T>);

    public abstract viewAll();
}

export interface INotificationDTO<T> {
    name: string;
    status?: (IconOptions | string);
    severity?: (IconOptions | string);
    timeago?: string;
    dto?: T;
}
