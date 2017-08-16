import {Injectable} from "@angular/core";
import {LogApi} from "../swagger/LogApi";
import {LogDTO} from "../swagger/LogDTO";
import {ApiHelper} from "./ApiHelper";
/**
 * Created by ekinca on 24.03.2016.
 */
@Injectable()
export class Logger {
    public real_logger;

    public static isLoaded = false;

    // public static real_logger;
    // public static instanceCount=0;
    constructor(api: LogApi, apiHelper: ApiHelper) {

        if (Logger.isLoaded) throw "Logger is singleton";
        Logger.isLoaded = true;

        this.real_logger = new _logger(api, apiHelper);

        for (var m in this.real_logger) {
            if (typeof this.real_logger[m] == 'function' && ['debug', 'error', 'info', 'log', 'trace', 'warn'].indexOf(m) > -1) {
                this[m] = this.real_logger[m].bind(this.real_logger);
            }
        }
    }

    //WARN: do not add code to following functions, they are dummy and replace by real implementation of console object in the constructor.
    debug(logMsg: any, ...optionalParams: any[]) {
    }

    error(logMsg: any, ...optionalParams: any[]) {
    }

    info(logMsg: any, ...optionalParams: any[]) {
    }

    log(logMsg: any, ...optionalParams: any[]) {
    }

    trace(logMsg: any, ...optionalParams: any[]) {
    }

    warn(logMsg: any, ...optionalParams: any[]) {
    }
}

class _logger {
    public static SEND_LOGS_TO_SERVER: boolean = false;

    constructor(public api: LogApi, public apiHelper: ApiHelper) {

        //INFO this is important:
        //This section maps all console. functions to this class,
        //This allows to show correct sourcefile and line number on the browsers console.

        for (var m in window.console) {
            if (typeof window.console[m] == 'function' && ['debug', 'error', 'info', 'log', 'trace', 'warn'].indexOf(m) > -1) {
                let funcName = m;
                let oldFunc = window.console[funcName];
                if (_logger.SEND_LOGS_TO_SERVER) {
                    this[funcName] = (...optionalParams: any[]) => {
                        this._log(funcName.toUpperCase(), optionalParams);
                        oldFunc.apply(window.console, ['[' + funcName.toUpperCase() + ']'].concat(optionalParams));
                    }
                } else {
                    this[funcName] = oldFunc.bind(window.console, '[' + funcName.toUpperCase() + ']');
                }
                window.console[funcName] = this[funcName];
            }
        }

    }

    public _logStash: Array<LogDTO> = [];

    public _log(level: any, optionalParams: any[]) {
        /*
         var logData: LogDTO = <LogDTO>{
         id: this.apiHelper.genRequestID(),
         version: 1,
         revision: 1,
         timestamp: new Date(),
         level: <LOGLEVEL>level,
         message: optionalParams[0],
         extras: optionalParams.slice(1)
         };

         this._logStash.push(logData);

         if (this._logStash.length > 49) {
         let logListArray = this._logStash;
         this._logStash = [];

         var saveLogListRequest: SaveLogListRequest = <SaveLogListRequest>this.apiHelper.genRequest(logListArray);
         try {
         this.api.logSaveListPOST(saveLogListRequest).subscribe(
         (res) => {
         if (!(res.status == RETURNSTATUS.SUCCESS ||
         res.status == RETURNSTATUS.DEPRECATED ||
         res.status == RETURNSTATUS.NOT_IMPLEMENTED)) {
         //TODO resubmit log data.
         }
         },
         (error) => {
         //TODO resubmit log data
         }
         );
         } catch(e){
         //TODO resubmit log data
         }
         }
         */
    }

    //WARN: do not add code to following functions, they are dummy and replace by real implementation of console object in the constructor.
    debug(logMsg: any, ...optionalParams: any[]) {
    }

    error(logMsg: any, ...optionalParams: any[]) {
    }

    info(logMsg: any, ...optionalParams: any[]) {
    }

    log(logMsg: any, ...optionalParams: any[]) {
    }

    trace(logMsg: any, ...optionalParams: any[]) {
    }

    warn(logMsg: any, ...optionalParams: any[]) {
    }
}
