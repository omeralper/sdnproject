import {tplLink, tplLinkDTO, tplLinkOptions} from "./tplLink";
/**
 * Created by ekinca on 30.06.2017.
 */


export class tplHostLink {

    //element attributes

    constructor(options: tplHostLinkOptions){
    }
}

export interface tplHostLinkOptions extends tplLinkOptions {
    type: string;
}

export interface tplHostLinkDTO extends tplLinkDTO {}