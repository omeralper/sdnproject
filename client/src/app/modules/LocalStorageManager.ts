/**
 * Created by omeroz on 27.07.2016.
 */

import {Injectable} from "@angular/core";
import {Utils} from "./Utils";


/**
 * Local Storage Management functions.
 */
@Injectable()
export class LocalStorageManager {

	public static isLoaded = false;

	constructor(public utils: Utils) {

		if (LocalStorageManager.isLoaded) {
			throw "Local storage manager is singleton!";
		}
		LocalStorageManager.isLoaded = true;
	}

	getItem(storageKey: string, encrypt: boolean = true) {
		let storedValue = localStorage.getItem(storageKey);
		if (encrypt) {
			storedValue = this.utils.AESdecrypt(storedValue);
		}
		return (localStorage.getItem(storageKey) != null) ? storedValue : undefined;
	}

	setItem(storageKey: string, storageValue: string, encrypt: boolean = true) {
		if (encrypt) {
			storageValue = this.utils.AESencrypt(storageValue);
		}
		localStorage.setItem(storageKey, storageValue);
	}

	removeItem(storageKey: string) {
		localStorage.removeItem(storageKey);
	}

}
