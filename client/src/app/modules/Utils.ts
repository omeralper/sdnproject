/**
 * Created by yildirayme on 21.04.2016.
 */
import {Injectable} from "@angular/core";
import {UUID} from "angular2-uuid";
import * as CryptoJS from "crypto-js";
import {IFieldTypeDef, IModelDef} from "../swagger/IModelDef";
declare var is: Is;
declare var $;
//import { UUID } from '../../node_modules/angular2-uuid/index';

/**
 * General Utility functions.
 */
@Injectable()
export class Utils {

    public static isLoaded = false;


    constructor() { //public baseServices:BaseServices) {
        if (Utils.isLoaded) {
            throw "Utils is singleton!";
        }
        Utils.isLoaded = true;

    }

    /**
     * Function that generates UUID values using UUID library
     * @returns {string} UUID string without "-" characters.
     */
    genUUID() {
        let uuid = UUID.UUID().replace(/-/g, '');
        //this.baseServices.logger.trace("UUID generated:"+uuid);
        return uuid;
    }

    /**
     * Function that returns TimeStamp value. Curretly this function return new Date()
     * @returns {Date}
     */
    genTimestamp(): Date {
        let timeStamp = (new Date());//.toISOString();
        //this.baseServices.logger.trace("Timestamp:"+timeStamp);
        return timeStamp;
    }

    /**
     * Default encryption key used by AES functions
     * @type {string}
     */
    public static DEFAULT_KEY: string = 'cb3e33055bc519844ba7c60c818078c884a71e79';

    /**
     * This function calculates HMAC_SHA1 of the given data. If 'key' field is not specified then DEFAULT_KEY will be used.
     * @param data  Data to be used for HMAC calculation
     * @param key Key used for HMAC calculation, if not specified DEFAULT_KEY will ve used
     * @returns {string} HMAC_SHA1 value as a Hex string.
     */
    hmacSHA1(data: any, key: string = Utils.DEFAULT_KEY): string {
        return (is.not.empty(data) ? CryptoJS.HmacSHA1(data.toString(), key).toString() : '').toString();
    }

    /**
     * This function encrpts the data using AES algorithm. If 'key' field is not specified then DEFAULT_KEY will be used.
     * @param data Date to be encrypted.
     * @param key Key used for encryption, if not specified DEFAULT_KEY will ve used
     * @returns {string} AES encrypted value as a Hex string.
     */
    AESencrypt(data: any, key: string = Utils.DEFAULT_KEY): string {
        return CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();
    }

    /**
     * This function decrypts the data using AES algorithm. If 'key' field is not specified then DEFAULT_KEY will be used.
     * @param data HEX string to be decrypted.
     * @param key Key used for decryption, if not specified DEFAULT_KEY will ve used
     * @returns {any} Decrypted value.
     */
    AESdecrypt(data: string, key: string = Utils.DEFAULT_KEY): any {
        let result;
        try {
            result = JSON.parse(CryptoJS.AES.decrypt(data, key).toString(CryptoJS.enc.Utf8));
        } catch (e) {//eski datalardan şifrelenmemiş veriler gelirse buraya düşer.
            result = data;
        }
        return result;
    }

    /**
     * Function to detect client IP address using WebRTC system. This function detects IP in browser, without calling
     * any external services.
     *
     * Ref: http://stackoverflow.com/questions/391979/how-to-get-clients-ip-address-using-javascript-only/32841164#32841164
     *
     * @param callback callback function used to return the detected client ip
     * @param defaultValue default value returned when client ip could not be detected
     */
    getClientIp(realCallback: getClientIpCallbackType, defaultValue?: string) {
        let alreadyCalled = false;
        let callback = (ip) => {
            if (!alreadyCalled) {
                alreadyCalled = true;
                console.debug(`Invoking realCallback(${ip}) function `);
                return realCallback(ip);
            }
            console.debug(`realCallback function already invoked. Ignoring result (${ip})`);
        }
        let myPeerConnection = (<any>window).RTCPeerConnection || (<any>window).mozRTCPeerConnection || (<any>window).webkitRTCPeerConnection; //compatibility for firefox and chrome
        if (myPeerConnection) {
            let pc = new myPeerConnection({iceServers: []}),
                noop = () => {
                },
                localIPs = {},
                ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g;

            let ipIterate = (ip) => {
                if (!localIPs[ip]) callback(ip);
                localIPs[ip] = true;
            }

            pc.createDataChannel(""); //create a bogus data channel
            pc.createOffer(function (sdp) {
                sdp.sdp.split('\n').forEach(function (line) {
                    if (line.indexOf('candidate') < 0) return;
                    line.match(ipRegex).forEach(ipIterate);
                });
                pc.setLocalDescription(sdp, noop, noop);
            }, noop); // create offer and set local description
            pc.onicecandidate = function (ice) { //listen for candidate events
                if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
                ice.candidate.candidate.match(ipRegex).forEach(ipIterate);
            };

            setTimeout(() => {
                console.debug('WebRTC timeout!');
                callback(defaultValue)
            }, 3000);
        } else {
            //this.baseServices.logger.warn('WebRTC not supported so IP colud not be found!');
            console.warn('WebRTC not supported so IP colud not be found!');
            callback(defaultValue);
        }
    }

    /**
     * This function scans the specified object's fields for 'null',null/undefined fields and returns a new object with only non-null fields.
     * @param data Object to be scanned
     * @returns {any} New object without any null/undefined fields
     */
    checkEmptyValues(data: any) {
        if (is.existy(data) && data != "null") {
            if (is.array(data)) {
                let newData = [];
                for (let key in data) {
                    let value = data[key];
                    let newValue = this.checkEmptyValues(value);
                    if (is.existy(newValue)) {
                        newData.push(newValue);
                    }
                }
                ;
                return newData;
            } else if (is.object(data)) {
                let newData = {};
                for (let key in data) {
                    let value = data[key];
                    let newValue = this.checkEmptyValues(value);
                    if (is.existy(newValue)) {
                        newData[key] = newValue;
                    }
                }
                ;
                return newData;
            } else {
                return data;
            }
        }

        return null;
    }

    optimizeDTO(def: IModelDef, data: any, options?: OptimizeOptions) {
        let newData = {};

        options = $.extend({
            onlyRequriedFields: false,
            level: 1
        }, options);

        $.each(def.fields, (fieldName:string, fieldDef:IFieldTypeDef) => {
            let value = this.checkEmptyValues(data[fieldName]);
            if (options.onlyRequriedFields && !fieldDef.required) return;
            if (is.existy(value)) {
                if (fieldDef.type == "number") {
                    newData[fieldName] = parseInt(value, 10);
                } else if (fieldDef.type == "string") {
                    newData[fieldName] = value.toString();
                } else {
                    newData[fieldName] = value;
                }
            } else if (fieldDef.required) {
                switch (fieldDef.type.toString()) {
                    case "number":
                        newData[fieldName] = -1;
                        break;
                    case "string":
                        newData[fieldName] = '';
                        break;
                    case "Date":
                        newData[fieldName] = (new Date()).toISOString();
                        break;
                    case "boolean":
                        newData[fieldName] = false;
                        break;
                    case "Array":
                        newData[fieldName] = [];
                        break;
                    default:
                        if (is.existy(fieldDef.type) && is.not.string(fieldDef.type) && is.existy((<IModelDef>fieldDef.type).meta)) {
                            let fieldDefType = (<IModelDef>fieldDef.type);
                            if (fieldDefType.meta.isObject) {
                                if (options.level < 2) {
                                    newData[fieldName] = this.optimizeDTO(fieldDefType, {}, {
                                        onlyRequriedFields: true,
                                        level: (options.level + 1)
                                    });
                                } else {
                                    newData[fieldName] = {};
                                }
                            } else if (fieldDefType.meta.isEnum) {
                                newData[fieldName] = Object.keys(fieldDefType.map)[0];
                            }
                        } else {
                            newData[fieldName] = null;
                        }
                        break;
                }
            }
        });
        return newData;
    }

    uniqueArray(arr: any[]): any[] {
        let a = [];
        for (let i = 0, l = arr.length; i < l; i++)
            if (a.indexOf(arr[i]) === -1 && arr[i] !== '')
                a.push(arr[i]);
        return a;
    }
}

export interface getClientIpCallbackType { (ip: string): void
}

export interface OptimizeOptions {
    /**
     * Copy only required fields of the DTO
     */
    onlyRequriedFields?: boolean;
    /**
     * Count the recursion level foravoiding infinite loops.
     */
    level?: number;
}
