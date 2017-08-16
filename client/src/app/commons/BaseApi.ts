/**
 * Created by yildirayme on 11.10.2016.
 */
'use strict';

import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {UIHelper} from "../modules/UIHelper";
import {ApiHelper} from "../modules/ApiHelper";

/* tslint:disable:no-unused-variable member-ordering */

@Injectable()
export abstract class BaseApi {
    //public defaultHeaders : Headers = new Headers();

    constructor(protected http: Http, protected uiHelper: UIHelper, protected apiHelper: ApiHelper) {
    }

    // public keyStore = {};
    // public block(key: string) {
    //     if (this.keyStore[key]) this.unblock(key);
    //     let config = this.keyStore[key] = {
    //         isShown: false,
    //         timeout: setTimeout(()=> {
    //             config.isShown = this.uiHelper.block();
    //         }, UIHelper.API_TIMEOUT)
    //     };
    // }
    //
    // public unblock(key: string) {
    //     let config = this.keyStore[key];
    //     if (config) {
    //         clearTimeout(config.timeout);
    //         if (config.isShown) {
    //             this.uiHelper.unblock();
    //         }
    //         delete this.keyStore[key];
    //     }
    // }

    public block(key: string) {
        return this.uiHelper.block(key);
    }

    public unblock(key: string) {
        return this.uiHelper.unblock(key);
    }
}
