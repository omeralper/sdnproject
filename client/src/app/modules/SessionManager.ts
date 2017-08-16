/**
 * Created by yildirayme on 01.05.2016.
 */

import {Injectable} from "@angular/core";
import {UserInfo} from "./AuthenticationManager";
import {Utils} from "./Utils";
declare var is: Is;

/**
 * Session Management functions.
 */
@Injectable()
export class SessionManager {
	public static isLoaded = false;
	public static DEFAULT_SESSION_TIMEOUT = 3 * 60 * 1000;//3 minutes

	constructor(public utils: Utils) {
		if (SessionManager.isLoaded) {
			throw "SessionManager is singleton!";
		}
		SessionManager.isLoaded = true;
	}

	getItem(storageKey: string, defaultValue: any = undefined, encrypt: boolean = true) {
		let storedValue = sessionStorage.getItem(storageKey);
		if (!is.existy(storedValue)) {
			return defaultValue;
		}
		if (encrypt) {
			storedValue = this.utils.AESdecrypt(storedValue);
		}

		try {
			storedValue = JSON.parse(storedValue)
		} catch (e) {
			//nothing to catch
		}
		return storedValue;
	}

	setItem(storageKey: string, storageValue: any, encrypt: boolean = true) {
		if (typeof storageValue != "string") {
			storageValue = JSON.stringify(storageValue);
		}
		if (encrypt) {
			storageValue = this.utils.AESencrypt(storageValue);
		}
		sessionStorage.setItem(storageKey, storageValue);
	}

	removeItem(storageKey: string) {
		sessionStorage.removeItem(storageKey);
	}

	parseSettings(settings: {}) {
		this.webSocketId = settings["webSocketId"];
		this.sessionTimeout = parseInt(settings["sessionTimeout"] || SessionManager.DEFAULT_SESSION_TIMEOUT.toString(), 10);
		this.isLdapEnabled = is.existy(settings["isLdapEnabled"]) ?  (settings["isLdapEnabled"] == "true") : false;
	}

	public get sessionTimeout() {
		return parseInt(this.getItem('sessionTimeout', SessionManager.DEFAULT_SESSION_TIMEOUT), 10);
	}

	public set sessionTimeout(value: number) {
		this.setItem('sessionTimeout', (value || '0').toString());
	}

	public get currentUser(): UserInfo {
		return this.getItem('currentUser', null);
	}

	public set currentUser(value: UserInfo) {
		this.setItem('currentUser', value);
	}

	public get webSocketId() {
		return this.getItem('webSocketId');
	}

	public set webSocketId(value) {
		this.setItem('webSocketId', value);
	}

	public get isLdapEnabled() {
		return this.getItem('isLdapEnabled');
	}

	public set isLdapEnabled(value) {
		this.setItem('isLdapEnabled', value);
	}

	public get language() {
		return this.getItem('language', 'tr');
	}

	public set language(value) {
		this.setItem('language', value);
	}

	public get serverData() {
		return this.getItem('serverData', null);
	}

	public set serverData(value) {
		this.setItem('serverData', value);
	}
}
