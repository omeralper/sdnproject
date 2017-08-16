/**
 * Created by yildirayme on 21.04.2016.
 */
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {BaseServices} from "./BaseServices";
import {Utils} from "./Utils";
import {UIHelper} from "./UIHelper";
import {ApiHelper} from "./ApiHelper";
import {SharedService} from "./SharedService";
import {SessionManager} from "./SessionManager";
import {LocalStorageManager} from "./LocalStorageManager";
import {AuthenticationManager} from "./AuthenticationManager";
import {PermManager} from "./PermManager/PermManager";

/**
 * Page services facade that contains commanly used dependencies of page components.
 */
@Injectable()
export class PageServices extends BaseServices {

    constructor(public permManager:PermManager,
                public sessionManager:SessionManager,
                public localStorageManager:LocalStorageManager,
                public authenticationManager:AuthenticationManager,
                public apiHelper:ApiHelper,
                public uiHelper:UIHelper,
                public utils:Utils,
                public sharedService:SharedService,
                public router:Router,
                baseServices:BaseServices) {

        super(baseServices.logger, baseServices.i18n, baseServices.injector)

    }
}