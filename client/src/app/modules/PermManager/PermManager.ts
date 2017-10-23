/**
 * Created by yildirayme on 01.05.2016.
 */
/// <reference path="../../../libs/perm_parser/permParser.d.ts" />
import {Injectable} from "@angular/core";
import {Utils} from "../Utils";
import {BaseServices} from "../BaseServices";
declare var is: Is;
declare var PermParser: any;
import {UIHelper} from "../UIHelper";
import {AuthenticationManager} from "../AuthenticationManager";
import {BasePage} from "../../commons/BasePage";

/**
 * Permission control and management module.
 */
@Injectable()
export class PermManager {
    public static isLoaded = false;

    constructor(public authenticationManager:AuthenticationManager, public uiHelper:UIHelper, public utils:Utils, public baseServices:BaseServices) {
        if (PermManager.isLoaded) {
            throw "PermManager is singleton!";
        }
        PermManager.isLoaded = true;
    }

    public resolvePermKey(requestedPerm?:string) {
        let resolvedPerm = (requestedPerm ||  BasePage.DEFAULT_PERM).replace(/#/,(BasePage.DEFAULT_BASE_PERM)+':');
        //let resolvedPerm = requestedPerm.indexOf(':')>=0?requestedPerm: this.basePerm + ':' + requestedPerm;
        //this.logger.debug("PermKey:", {requestedPerm: requestedPerm, resolvedPerm: resolvedPerm});
        return resolvedPerm;
    }

    p(requestedPerm?:string, noPermAction?:string, elmId?:string,$container?:JQuery):boolean {

        let resolvedPerm = this.resolvePermKey(requestedPerm);
        let action;

        if (is.existy(resolvedPerm) && resolvedPerm.charAt(0)==='@'){
            //check permission for this page
            let realPerm = resolvedPerm.replace(/@/,BasePage.DEFAULT_BASE_PERM+':');

            if (this.authenticationManager.hasPermission(realPerm)){
                action = this.checkPermission(realPerm, noPermAction);
            } else {
                action = this.checkPermission(resolvedPerm.replace(/@/,BasePage.DEFAULT_BASE_PERM+':') , noPermAction);
            }

        } else {
            action = this.checkPermission(resolvedPerm, noPermAction);
        }


        switch (action) {
            case NotPermittedAction.HIDE:
            case NotPermittedAction.REMOVE:
                return false;
            case NotPermittedAction.DISABLE:
            case NotPermittedAction.ALERT:
                if (is.existy(elmId)) {
                    let $el = $('#' + elmId, $container);
                    this.applyPermission($el, action, noPermAction);
                } else {
                    throw "Permission error! elmID not defined!!";
                }
                return false;
            default:
                return true;
        }
    }

    /**
     * Checks the permission tag and process them under the specified container.
     * @param $container
     */
    checkPermissions($container:JQuery){
        //debugger;
        let result = "all";
        if (is.existy($container) && is.not.empty($container)) {

            var $elems = $("[data-permitted]",$container);//.find(":data(permitted)");
            //var $found = $container.find("[data-permitted]");
            //var $filtered = $container.filter("[data-permitted]");
            //var $elems = $filtered.add($found);

            //remove all handlers from our namespace first.
            $elems.off(".permUtil");

            $elems.each((index:number, elem:Element) => {
                var $el = $(elem);
                var permStr = $el.data('permitted'); //$el.attr("permitted");
                var actStr = $el.data('noperm'); //$el.attr("noperm");
                var actionName = this.parseActionName(<any>actStr);

                var permitted:boolean = this.userHasPermissions(<any>permStr,$el);

                this.baseServices.logger.debug('prm:'+permStr+', action:'+(permitted?'allow':actionName));

                if (!permitted) {
                    if (result=="all") result=(index==0?"none":"any");
                    this.applyPermission($el,actionName,<any>actStr);
                } else {
                    if (result=="none") result="any";
                    this.removePermission($el,actionName,<any>actStr);
                }
            });
        }
        return result;
    }

    public removePermission($el:JQuery,action:string,actionParams?:string){
        //debugger;
        switch (action) {
            case NotPermittedAction.HIDE:
                $el.show();
                break;
            case NotPermittedAction.REMOVE:
                //$el.remove();
                //TODO resurrect item :D
                break;
            case NotPermittedAction.DISABLE:
                $el.prop("disabled", false);

                var classes = this.parseActionParams(action, actionParams);
                var str = classes.join(" ");
                $el.removeClass(str);

                break;
            case NotPermittedAction.ALERT:
                //do nothing
                break;
        }
    }

    public applyPermission($el:JQuery,action:string,actionParams?:string){
        //debugger;
        switch (action) {
            case NotPermittedAction.HIDE:
                $el.hide();
                break;
            case NotPermittedAction.REMOVE:
                $el.remove();
                break;
            case NotPermittedAction.DISABLE:
                $el.prop("disabled", true);

                var classes = this.parseActionParams(action, actionParams);
                var str = classes.join(" ");
                $el.removeClass(str).addClass(str);

                break;
            case NotPermittedAction.ALERT:
                this.baseServices.logger.warn("Binding events!!");

                var eventTypes = this.parseActionParams(action, actionParams);

                this.bindAsFirstHandler($el, eventTypes, (ev ?:Event) => {
                    ev.stopImmediatePropagation();
                    ev.stopPropagation();
                    ev.preventDefault();

                    this.uiHelper.alert(this.baseServices.i18n.t("common.messages.RETURN_STATUS.ACCESS_DENIED"));
                    this.baseServices.logger.warn("--- Stopped!!!");

                    return true;
                });
                break;
        }
    }

    public checkPermission(permStr:string, actionName?:string):string {
        this.baseServices.logger.debug('checkPermission',{ permStr:permStr , action:actionName});
        var permitted:boolean = this.userHasPermissions(permStr);
        if (!permitted) {
            return this.parseActionName(actionName);
        }
        return NotPermittedAction.ALLOW;
    }

    //public _boundEvents = [];
    //public _actions = [NotPermittedAction.HIDE, NotPermittedAction.REMOVE, NotPermittedAction.DISABLE, NotPermittedAction.ALERT];

    guardedOn($sel: JQuery, evType: string, handler: (ev?: JQueryEventObject) => any): void {

        //var logger = new Application.Logger(this);
        $sel.on(evType, (ev: JQueryEventObject) => {

            this.baseServices.logger.warn("On wrapping handler!!");
            handler(ev);
        });

        //$sel.un

    }


    public parseActionName(action: string): string {
        if (is.existy(action)) {
            action = action.trim();
            //HIDE & REMOVE do not have any parameters
            if (action == NotPermittedAction.HIDE || action == NotPermittedAction.REMOVE) {
                return action;
            }

            if (action.indexOf(NotPermittedAction.ALERT) == 0) {
                return NotPermittedAction.ALERT;
            }

            if (action.indexOf(NotPermittedAction.DISABLE) == 0) {
                return NotPermittedAction.DISABLE;
            }

        }
        //default
        return NotPermittedAction.REMOVE;

    }

    public parseStringInsideParanthesis(str: string): string {
        if (str == null || str.length == 0) {
            return "";
        }
        var parStartIndex = str.indexOf("(");
        if (parStartIndex == -1) {
            return "";
        }
        var parEndIndex = str.lastIndexOf(")");
        if (parEndIndex == -1) {
            parEndIndex = str.length;
        }
        return str.substring(parStartIndex + 1, parEndIndex);
    }

    public parseParamsInParanthesis(str: string, sep: string): string[] {
        var paramStr = this.parseStringInsideParanthesis(str);
        if (paramStr == null || paramStr.length == 0) {
            return [];
        }

        var splitParams = paramStr.split(<any>sep);
        return splitParams;
    }

    public parseActionParams(actionName: string, actionString: string): string[] {
        if (actionName == NotPermittedAction.ALERT) {

            var params = this.parseParamsInParanthesis(actionString, ",");
            if (params == null || params.length == 0) {
                return ["click"];
            }
            return params;

        } else if (actionName == NotPermittedAction.DISABLE) {

            var params = this.parseParamsInParanthesis(actionString, ",");
            if (params == null || params.length == 0) {
                return [""];
            }
            return params;

        }

    }

    /**
     * Sort of hackish method for inserting an event listener to the start of the listeners list.
     * @param $sel
     * @param eventTypes
     * @param handler
     */
    public bindAsFirstHandler($sel: JQuery, eventTypes: string[], handler: (ev?: JQueryEventObject) => any) {

        //add namespace
        eventTypes = eventTypes.map((val: string) => {
            return val + ".permUtil";
        });
        $sel.on(eventTypes.join(" "), handler);

        //var split = ;
        //var actualEvName = (split != null && split.length > 0) ? split[0] : evName;

        $sel.each((index: number, elem: Element) => {
            var data: any = $.data(elem); //WARN _data removed
            var events = (data.events ? data.events : data.__events__);
            if (events == null) {
                return;
            }
            for (var i = 0; i < eventTypes.length; i++) {
                var evName = eventTypes[i];
                var handlers: any[] = events[(evName.split(".")[0])];
                if (handlers == null || handlers.length <= 1) {
                    continue;
                }
                var lastHandler = handlers.pop();
                handlers.splice(0, 0, lastHandler);

            }
        });
    }

/*    public isAnySatisfied(targetPerms: string[], allPerms: string[]): boolean {
        var all: boolean = true;//true when no perm is specified
        if (is.existy(targetPerms) && is.not.empty(targetPerms)) {
            all = (targetPerms).some((permKey: string) => {
                return (allPerms.indexOf(permKey) >= 0);
            });
        }
        return all;
    }*/

    public areAllSatisfied(targetPerms: string[], allPerms: string[]): boolean {
        var all: boolean = true;//true when no perm is specified
        if (is.existy(targetPerms) && is.not.empty(targetPerms)) {
            all = (targetPerms).every((permKey: string) => {
                return (allPerms.indexOf(permKey) >= 0);
            });
        }
        return all;
    }

    public isSatisfied(targetPerms: (string | string[]| PermParseTree), allPerms: string[]): boolean {
        if (is.string(targetPerms)) {
            return (allPerms.indexOf(<string>targetPerms) >= 0);
        } else if (is.array(targetPerms)) {
            return this.areAllSatisfied(<string[]>targetPerms, allPerms);
        } else {
            var permGroup = <PermParseTree>targetPerms;
            return this.executePermParseTree(permGroup, allPerms);
        }
    }

    public executePermParseTree(permTree: PermParseTree, allPerms: string[]): boolean {
        switch (permTree.type) {
            case PermTypes.OP_AND:
                return this.executePermParseTree(<PermParseTree>permTree.left, allPerms) &&
                    this.executePermParseTree(<PermParseTree>permTree.right, allPerms);
            case PermTypes.OP_OR:
                return this.executePermParseTree(<PermParseTree>permTree.left, allPerms) ||
                    this.executePermParseTree(<PermParseTree>permTree.right, allPerms);
            case PermTypes.OP_NOT:
                return !this.executePermParseTree(<PermParseTree>permTree.body, allPerms);
            case PermTypes.OP_TRUE:
                return true;
            case PermTypes.OP_FALSE:
                return false;
            case PermTypes.PERM:
                return this.isSatisfied(<string>permTree.body, allPerms);
            default:
                return false; //unknown OPCODE
        }
    }

/*    public userHasAllPermissions(permKeys: string[]): boolean {
        var userPerms = this.authenticationManager.getPermissions();
        return this.areAllSatisfied(permKeys, userPerms);
    }*/

    public parseCache = {};
    public static childrenRegex = /children\((all|any)\)/i;
// No need to compile literal notation:
// WARN dont forget to uncomment the call of this function at the end of the class definition below.
//    static initialize() {
//        PermManager.childrenRegex.compile();
//    }
    public userHasPermissions(permDefs: string | string[],$container?:JQuery): boolean {
        let isArray = is.array(permDefs);
        if (!isArray && is.existy($container) && PermManager.childrenRegex.test(permDefs.toString())) {
            let option = (PermManager.childrenRegex.exec(permDefs.toString())[1]).toLowerCase();
            let result = this.checkPermissions($container);
            return result == option || result=='all'; //any beklenirken all gelirsede kabul edilmeli.
        } else {
            var userPerms = this.authenticationManager.getPermissions();
            try {

                if (isArray) {

                    var result = is.not.empty(permDefs);
                    $.each(<string[]>permDefs, (idx, val) => {
                        var permGroup = this.parsePerm(val);
                        return result = result && this.isSatisfied(permGroup, userPerms);
                    });

                    return result;

                } else {
                    var permGroup = this.parsePerm(<string>permDefs);
                    return this.isSatisfied(permGroup, userPerms);
                }

            } catch (w) {
                //this.uiHelper.notify("FATAL ERROR: Permission string parse error, see console",DIALOG_TYPES.ERROR);
                this.baseServices.logger.error(w,{ permDefinitions:permDefs, container: $container });
                return false;
            }
        }
    }

    public parsePerm(permStr: string): any {
        var permGroup = this.parseCache[permStr];
        if (is.not.existy(permGroup)) {
            permGroup = PermParser.parse((is.existy(permStr) && is.not.empty(permStr)) ? permStr : "true");//if no perm string then return true;
            this.parseCache[permStr] = permGroup;
        }
        return permGroup;
    }

/*    public ensureActionCorrect(action: string): string {
        if (action != null && this._actions.indexOf(action) != -1) {
            return action;
        }
        return NotPermittedAction.HIDE;
    }*/

/*
    getRoleWithName(roleName: string): RoleDTO {
        var result: RoleDTO;
        //TODO implement role loading.

        // App.INSTANCE.allRoles.forEach((role: RoleDTO) => {
        //     if (role.roleName == roleName) {
        //         result = role;
        //     }
        // });

        return result;
    }

    getPermissionsForRole(roleName: string): string[] {
        return this.getRoleWithName(roleName).permList.map(perm => perm.id);
    }


    rolesToRoleNames(roles: RoleDTO[]): string[] {
        var names: string[] = [];

        roles.forEach((role: RoleDTO) => {
            names.push(role.name); //TODO id olması lazım
        });

        return names;
    }

    permissionsToPermissionKeys(perms:  PermDTO[]): string[] {
        var keys: string[] = [];

        perms.forEach((perm: PermDTO) => {
            keys.push(perm.id);
        });

        return keys;
    }

    getExcludedPermissionsForRoles(roleNames: string[]): string[] {
        var includedPerms = this.getCombinedPermissionsForRoles(roleNames);
        var permKeys = this.authenticationManager.getPermissions(); //this.permissionsToPermissionKeys(App.INSTANCE.allPermissions);

        var excludedPerms = permKeys.filter((perm: string) => {
            return includedPerms.indexOf(perm) == -1;
        });

        return excludedPerms;
    }

    getCombinedPermissions(roleNames: string[], extraPerms?: string[]): string[] {
        return this.internalGetCombinedPerms(roleNames, extraPerms);

    }

    public internalGetCombinedPerms(roleNames: string[], extraPerms?: string[]): string[] {
        var result: string[] = [];
        var map: { [key: string]: boolean } = {}
        for (var i = 0; i < roleNames.length; i++) {
            var perms = this.getPermissionsForRole(roleNames[i]);
            perms.forEach((val: string) => {
                map[val] = true;
            });
        }

        if (extraPerms != null) {
            for (var i = 0; i < extraPerms.length; i++) {
                map[extraPerms[i]] = true;
            }
        }

        for (var key in map) {
            result.push(key);
        }

        return result;

    }

    getCombinedPermissionsForRoles(roleNames: string[]): string[]{
        return this.internalGetCombinedPerms(roleNames);
    }
*/

}
//initialize static objects
//PermManager.initialize();

export class NotPermittedAction {
    static HIDE = "hide";
    static REMOVE = "remove";
    static DISABLE = "disable";
    static ALERT = "alert";
    static ALLOW = "allow";
}

export class PermTypes {
    static OP_AND: string = ("OP_AND");
    static OP_OR: string = ("OP_OR");
    static OP_NOT: string = ("OP_NOT");
    static OP_TRUE: string = ("OP_TRUE");
    static OP_FALSE: string = ("OP_FALSE");
    static PERM: string = ("PERM");
}
