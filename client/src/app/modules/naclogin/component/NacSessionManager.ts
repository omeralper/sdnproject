/**
 * Created by yildirayme on 01.05.2016.
 */

import {Injectable} from "@angular/core";
import {Utils} from "../../Utils";
import {NacUserDTO} from "../../../swagger/NacUserDTO";


/**
 * Session Management functions.
 */
@Injectable()
export class NacSessionManager {
    public static isLoaded = false;
    //public static DEFAULT_SESSION_TIMEOUT = 3 * 60 * 1000;//3 minutes
    public static DEFAULT_LANGUAGE = "tr";
    public static NAC_AES_KEY = "J>z{/W#py?Q9uYNGb&ErFvV@t1R,?aym[(.u{y^[";
    public static NAC_CURRENT_USER = "NAC_CURRENT_USER";
    public static LANGUAGE = "LANGUAGE";
    public static LOGIN_DATA = "LOGIN_DATA";

    constructor(public utils: Utils) {
        // if (NacSessionManager.isLoaded) {
        //     throw "NacSessionManager is singleton!";
        // }
        // NacSessionManager.isLoaded = true;
        console.info('nac session manager initialized');
    }

    public getItem(storageKey: string, defaultValue: any = undefined, isLocalStorage:boolean=false) {
        let store = isLocalStorage?localStorage:sessionStorage;
        let storedValue = store.getItem(storageKey);
        return is.existy(storedValue) ? this.utils.AESdecrypt(storedValue,NacSessionManager.NAC_AES_KEY) : defaultValue;
    }

    public setItem(storageKey: string, storageValue: string, isLocalStorage:boolean=false) {
        let store = isLocalStorage?localStorage:sessionStorage;
        store.setItem(storageKey, this.utils.AESencrypt(storageValue,NacSessionManager.NAC_AES_KEY));
    }

    public removeItem(storageKey: string, isLocalStorage:boolean=false) {
        let store = isLocalStorage?localStorage:sessionStorage;
        store.removeItem(storageKey);
    }

    // public get sessionTimeout() {
    //     return parseInt(this.getItem('sessionTimeout', NacSessionManager.DEFAULT_SESSION_TIMEOUT), 10);
    // }
    //
    // public set sessionTimeout(value: number) {
    //     this.setItem('sessionTimeout', (value || '0').toString());
    // }

    public get currentUser():NacUserDTO {
        return JSON.parse(this.getItem(NacSessionManager.NAC_CURRENT_USER, 'null'));
    }

    public set currentUser(value:NacUserDTO) {
        this.setItem(NacSessionManager.NAC_CURRENT_USER, JSON.stringify(value));
    }

    public removeUserData(){
        this.removeItem(NacSessionManager.NAC_CURRENT_USER);
    }

    public get loginData():any {
        return JSON.parse(this.getItem(NacSessionManager.LOGIN_DATA, 'null',true));
    }

    public set loginData(value:any) {
        this.setItem(NacSessionManager.LOGIN_DATA, JSON.stringify(value),true);
    }

    public removeLoginData(){
        this.removeItem(NacSessionManager.LOGIN_DATA,true);
    }


    // public get webSocketId() {
    //     return this.getItem('webSocketId');
    // }
    //
    // public set webSocketId(value) {
    //     this.setItem('webSocketId', value);
    // }

    public get language() {
        return this.getItem(NacSessionManager.LANGUAGE, NacSessionManager.DEFAULT_LANGUAGE);
    }

    public set language(value) {
        this.setItem(NacSessionManager.LANGUAGE, value);
    }

}
