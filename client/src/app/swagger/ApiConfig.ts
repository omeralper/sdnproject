/**
 * Created by yildirayme on 29.04.2016.
 */
'use strict';

//import * as data from "../../assets/config/settings.json";//conver settings.js to json file
//const config:any = data;

// INFO config variable is loaded in index.html (file : assets/config/settings.js)
const config:any = (<any>window).prognet_config;

export class ApiConfig {
    public static BUILD_DATE: string = (new Date()).toISOString();
    public static getDefaultServerAddress():string {
        return  config.server.url;
    }

    public static getDefaultSecureServerAddress():string {
        return  config.secure_server.url;
    }

    public static getVersion():string {
        return config.version.sprint + "-" + config.version.build;
    }

    public static getBuildDate():string {
        return config.version.date || ApiConfig.BUILD_DATE ;
    }

    public static getKibanaUrl():string {
        return (config.kibana.url || config.server.url) + ":" + config.kibana.port + config.kibana.path;
    }

    public static getAuthorizationKey() {
        if (config.authorization){
            return [config.authorization.mode,config.authorization.key].join(' ');
        }
        return  'Basic cHJvZ25ldDpwcm9nbmV0';
    }
}
