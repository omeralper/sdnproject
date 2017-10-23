/**
 * Created by yildirayme on 21.04.2016.
 */
import {Injectable, Injector} from "@angular/core";
import {Logger} from "./Logger";
import {i18nModule} from "./i18nModule";
import {Utils} from "./Utils";

/**
 * Base service facade class that contains commonly used dependencies.
 */
@Injectable()
export class BaseServices {

    constructor(public logger:Logger,  public i18n:i18nModule, public injector: Injector) {

    }
}