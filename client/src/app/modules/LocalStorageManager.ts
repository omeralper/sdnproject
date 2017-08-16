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

    getItem(storageKey:string){
        let storedValue = localStorage.getItem(storageKey);
        return (localStorage.getItem(storageKey) != null) ? this.utils.AESdecrypt(storedValue) : undefined;
    }

    setItem(storageKey:string,storageValue:string){
        localStorage.setItem(storageKey,this.utils.AESencrypt(storageValue));
    }

    removeItem(storageKey:string){
        localStorage.removeItem(storageKey);
    }

}
