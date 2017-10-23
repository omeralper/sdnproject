/**
 * Created by omeroz on 28.07.2016.
 */
import {Injectable, EventEmitter} from "@angular/core";
import {Headers} from "@angular/http";
import {Router} from "@angular/router";
import {BaseServices} from "./BaseServices";
import {Utils} from "./Utils";
import {RoleDTO} from "../swagger/RoleDTO";
import {UserDTO} from "../swagger/UserDTO";
import {AAAApi} from "../swagger/AAAApi";
import {LoginRequest} from "../swagger/LoginRequest";
import {LoginOpts} from "../swagger/LoginOpts";
import {ApiHelper} from "./ApiHelper";
import {UIHelper, DIALOG_TYPES} from "./UIHelper";
import {GenericIdRequest} from "../swagger/GenericIdRequest";
import {NacAuthApi} from "../swagger/NacAuthApi";
import {NacUserDTO} from "../swagger/NacUserDTO";
import {NacLoginRequest} from "../swagger/NacLoginRequest";
import {NacLoginOpts} from "../swagger/NacLoginOpts";
import {LocalStorageManager} from "./LocalStorageManager";
import {SessionManager} from "./SessionManager";
import {RETURNSTATUS} from "../swagger/RETURNSTATUS";
import Observable = Rx.Observable;
import {GenericResponse} from "../swagger/GenericResponse";
import {EventsManager, IEventType} from "./EventsManager";

/**
 * Authentication Manager
 */
@Injectable()
export class AuthenticationManager implements ISessionInvalidator {
    public static isLoaded = false;

    public static INTERNAL_PERM_LIST = [
        'common:view:',
        'common:refresh:',
        "common:ok:",
        "common:cancel:",
        "common:abort:",
        "common:yes:",
        "common:no:",
        "common:close:",
        "common:save:",
        "common:change:",
    ];

    public static ENDUSER_PERM_LIST = [];

    public static currentUser: UserInfo = null;
    public redirectTimeout;

    constructor(public router: Router,
                public eventsManager: EventsManager,
                public aaaApi: AAAApi,
                public apiHelper: ApiHelper,
                public uiHelper: UIHelper,
                public utils: Utils,
                public baseServices: BaseServices,
                public sessionManager: SessionManager,
                public localStorageManager: LocalStorageManager) {

        if (AuthenticationManager.isLoaded) {
            throw "Authentication Manager is singleton!";
        }

        AuthenticationManager.currentUser = this.getCurrentUser();

        AuthenticationManager.isLoaded = true;

    }


    saveCredentials(loginOpts: SavedLoginOptions) {
        let authorizationKey = this.getAuthorizationKey(AuthenticationManager.currentUser.authorizationMode);
        if (loginOpts.isRemember) {
            let savedOpts: SavedLoginOptions = <SavedLoginOptions>loginOpts;
            savedOpts.isSaved = true;
            this.localStorageManager.setItem(authorizationKey, JSON.stringify(savedOpts));

        } else {
            this.localStorageManager.removeItem(authorizationKey);
        }
    }

    removeCredentials() {
        let authorizationKey = this.getAuthorizationKey(AuthenticationManager.currentUser.authorizationMode);
        this.localStorageManager.removeItem(authorizationKey);
    }

    getAuthorizationKey(authorizationMode: AUTHORIZATION_MODE) {
        return (AUTHORIZATION_MODE[authorizationMode] + "_DTO").toUpperCase();
    }

    getSavedCredentials(authorizationMode: AUTHORIZATION_MODE): SavedLoginOptions {
        let authorizationKey = this.getAuthorizationKey(authorizationMode);

        let savedData = this.localStorageManager.getItem(authorizationKey);
        let loginOpts: SavedLoginOptions = {
            username: 'prognet',
            password: 'prognet',
            isRemember: true,
            isSaved: true
        };

        if (savedData) {
            try {
            	loginOpts = JSON.parse(savedData);
            } catch (e) {
                this.baseServices.logger.warn('Saved credentials error!', e);
            }
        }
        return loginOpts;
    }

    updateCurrentUser(userInfo: UserInfo) {
        AuthenticationManager.currentUser = userInfo;
        this.sessionManager.currentUser =  userInfo;
        this.eventsManager.emit<UserInfo>(AUTHENTICATION_EVENT_TYPE.USER_INFO_UPDATED,userInfo);
    }

    adminLogout(callback?: (status: boolean)=>any,isTerminateSession:boolean=true) {

        let request: GenericIdRequest = <GenericIdRequest>this.apiHelper.genRequest({
            id: ''
        });

        this.isSessionTerminated = true;

        this.aaaApi
            .aaaLogoutPOST(<GenericIdRequest>request)
            .finally(()=> {
                this.eventsManager.emit(AUTHENTICATION_EVENT_TYPE.LOGOUT);
                if (isTerminateSession) this.terminateSession(true);
            })
            .subscribe(
                (res: GenericResponse) => {
                    if (this.uiHelper.processResponse(res)) {
                        if (callback) callback(true);
                    } else {
                        if (callback) callback(false);
                    }
                },
                (error: any) => {
                    this.uiHelper.processResponse(error._body); //JSON parsing is handled in the function now
                    if (callback) callback(false);
                }
            );
    }


    logout(callback?: (status: boolean)=>any) {
        if (AuthenticationManager.currentUser) {
            //this.uiHelper.forceBlock();
            this.removeCredentials();
            this.adminLogout(callback);
        }
        if (callback) callback(false);
    }

    getPermissions(): string[] {

        let permList;
        if (AuthenticationManager.currentUser) {
            if (!(permList = AuthenticationManager.currentUser.permList)) {
                permList = [];
                permList.push('common:loggedin:');

                if (AuthenticationManager.currentUser.authorizationMode === AUTHORIZATION_MODE.ADMIN) {
                    let currentUserDTO: UserDTO = <UserDTO>AuthenticationManager.currentUser.userDTO;
                    currentUserDTO.roleList.forEach((role, idx, all)=> {
                        role.permList.forEach((perm, jdk, jall)=> {
                            permList.push(perm.id + ":");
                        });
                    });
                } else if (AuthenticationManager.currentUser.authorizationMode === AUTHORIZATION_MODE.END_USER) {
                    permList = permList.concat(AuthenticationManager.ENDUSER_PERM_LIST);
                }
                AuthenticationManager.currentUser.permList = permList;
            }
        } else {
            //no session so we need to login
            permList = [];
            let pageName = window.location.hash;// this.router.url;//TODO might mess up things. this.router.routerState.snapshot.url | this.router.lastNavigationAttempt;
            clearTimeout(this.redirectTimeout);
            if (pageName && (pageName.indexOf("/naclogin") == -1 && pageName.indexOf("/login") == -1)) {
                this.redirectTimeout = setTimeout(()=> {
                    this.router.navigate(['login']);
                }, 100);
            }
        }

        let perms = AuthenticationManager.INTERNAL_PERM_LIST.concat(permList);
        //this.baseServices.logger.debug("getPermissions:", perms);
        return perms;
    }

    hasRole(role: RoleDTO) {
        // this.baseServices.logger.debug("hasRole:", role);
        if (AuthenticationManager.currentUser.authorizationMode === AUTHORIZATION_MODE.ADMIN) {
            let userDTO: UserDTO = <UserDTO> AuthenticationManager.currentUser.userDTO;
            return userDTO.roleList.some(r => r.id == role.id);
        }
        return false;
    }

    hasPermission(perm: string) {
        let realPerm = perm.charAt(perm.length - 1) == ':' ? perm : perm + ':';
        // this.baseServices.logger.debug('hasPermission', {perm: perm, realPerm: realPerm});
        // this.baseServices.logger.debug("hasPermission:", realPerm);
        return this.getPermissions().some(p => p == realPerm);
    }

    getCurrentUser() {
        return this.sessionManager.currentUser;
    }

    adminLogin(loginOpts: SavedLoginOptions, callback: (status: RETURNSTATUS)=>any) {

        this.utils.getClientIp((ip: string)=> {

            let loginRequest: LoginOpts = <LoginOpts>{
                username: loginOpts.username,
                //password: loginOpts.isSaved?loginOpts.password: this.utils.hmacSHA1(loginOpts.password,loginOpts.username),
                //TODO password must be encrypted
                password: loginOpts.password,
                isRemember: loginOpts.isRemember,
                params: {
                    "user_agent": navigator.userAgent,
                    "user_ip": ip
                }
            };

            let request: LoginRequest = <LoginRequest>this.apiHelper.genRequest({
                data: loginRequest
            });

            this.aaaApi
                .aaaLoginPOST(<LoginRequest>request)
                .subscribe(
                    (res) => {
                        if (this.uiHelper.processResponse(res)) {

                            if (res && res.data && res.data.settings) {
                                this.sessionManager.parseSettings(res.data.settings);
                            }

                            let userInfo: UserInfo = {
                                authorizationMode: AUTHORIZATION_MODE.ADMIN,
                                userDTO: $.extend({}, res.data.user, { password: loginOpts.password })
                            };

                            this.isSessionTerminated = false;

                            this.eventsManager.emit<UserInfo>(AUTHENTICATION_EVENT_TYPE.LOGIN,userInfo);

                            this.updateCurrentUser(userInfo);
                            this.saveCredentials(loginOpts);

                            callback(res.status);
                        } else {
                            callback(res.status);
                        }
                    },
                    (error: any) => {
                        console.error(error);
                        this.uiHelper.processResponse(error._body); //JSON parsing is handled in the function now
                        callback(RETURNSTATUS.SERVER_ERROR);
                    }
                );

        }, '{inject:ip}');

    }

    /**
     * Switch current session to another server by automatically logging in to it.
     * @param serverAddress
     * @param callback
     */
    public switchController(serverAddress:string, callback: (status: RETURNSTATUS)=>any) {
        let userInfo = this.getCurrentUser();
        if (is.existy(userInfo)){
        	let oldServerAddress = this.apiHelper.getServerAddress();
            let loginOptions = <LoginOpts>{
                username : userInfo.userDTO.username,
                password : userInfo.userDTO.password,
                isRemember : false
            };

            this.adminLogout((logoutStatus)=>{
                if (logoutStatus) {
                    this.apiHelper.setServerAddress(serverAddress);
                    setTimeout(()=>{ //TODO 
                        this.adminLogin(loginOptions, (loginStatus: RETURNSTATUS) => {
                            if (loginStatus != RETURNSTATUS.SUCCESS) {//rollback
                                this.apiHelper.setServerAddress(oldServerAddress);
                                //we already logged out from current server so we need to login back.
                                this.terminateSession(true);
                            } else {
                                callback(loginStatus);
                            }
                        });
                    },1000);
                } else {
                    callback(RETURNSTATUS.SERVER_ERROR);
                }
            },false);

        } else {
            callback(RETURNSTATUS.ACCESS_DENIED);
        }
    }

    checkAndUpdateUserDTO(data: UserDTO | NacUserDTO) {
        let currentUser = this.getCurrentUser()
        if (currentUser.authorizationMode === AUTHORIZATION_MODE.ADMIN) {
            let newDTO: UserDTO = <UserDTO>data;
            if (newDTO.id == currentUser.userDTO.id) {
                this.updateCurrentUser({
                    permList: null,
                    userDTO: newDTO,
                    authorizationMode: AUTHORIZATION_MODE.ADMIN
                });
            }
        } else if (currentUser.authorizationMode === AUTHORIZATION_MODE.END_USER) {
            let newDTO: NacUserDTO = <NacUserDTO>data;
            if (newDTO.id == currentUser.userDTO.id) {
                this.updateCurrentUser({
                    permList: null,
                    userDTO: newDTO,
                    authorizationMode: AUTHORIZATION_MODE.END_USER
                });
            }
        }
    }

    public invalidateSession() {
        this.updateCurrentUser(null);
    }

    public isSessionTerminated: boolean = false;

    public terminateSession(isSilent: boolean = false, invalidSessionRedirectURL: string = ApiHelper.DEFAULT_ADMIN_REDIRECT_URL) {

        if (!this.isSessionTerminated || isSilent) { //this is present cuz we are logging out 3 times because of websocket close events, see my note in them
            this.isSessionTerminated = true;
            this.invalidateSession();
            if (isSilent) {
                $(".body").fadeOut(500, ()=>{
                    //window.location.reload(true);
                    window.location.assign('/login');
                });
                //this.router.navigate([invalidSessionRedirectURL]).then((res)=>{
                //    window.location.reload(true);
                //});
            } else {
                this.uiHelper.alert($.t('common.messages.RETURN_STATUS.INVALID_SESSION'), DIALOG_TYPES.ERROR, ()=> {
                    $(".body").fadeOut(500, ()=>{
                        //window.location.reload(true);
                        window.location.assign('/login');
                    });
                    //this.router.navigate([invalidSessionRedirectURL]).then((res)=>{
                    //    window.location.reload(true);
                    //});;
                });
            }
        }
    }

    init() {
        if (is.existy(AuthenticationManager.currentUser)) {

            this.isSessionTerminated = false;

            this.eventsManager.emit<UserInfo>(AUTHENTICATION_EVENT_TYPE.LOGIN,AuthenticationManager.currentUser);
            this.eventsManager.emit<UserInfo>(AUTHENTICATION_EVENT_TYPE.USER_INFO_UPDATED,AuthenticationManager.currentUser);

        }
    }
}

export interface UserInfo {
    permList ?: Array<string>;
    userDTO: UserDTO | NacUserDTO
    authorizationMode: AUTHORIZATION_MODE;
}

export interface SavedLoginOptions extends LoginOpts {
    isSaved?: boolean;
}

export enum AUTHORIZATION_MODE {
    NONE,
    ADMIN,
    END_USER
}

export class AUTHENTICATION_EVENT_TYPE {
    public static LOGIN:IEventType = { id: "AUTHENTICATION_EVENT_TYPE.LOGIN" };
    public static LOGOUT:IEventType = { id: "AUTHENTICATION_EVENT_TYPE.LOGOUT" };
    public static USER_INFO_UPDATED:IEventType = { id: "AUTHENTICATION_EVENT_TYPE.USER_INFO_UPDATED" };
}

export interface ISessionInvalidator {
    terminateSession(isSilent?: boolean, invalidSessionRedirectURL?: string);
}
