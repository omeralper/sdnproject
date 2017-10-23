//imports start MVTNREQUESTSTATUS
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* MVTN taleplerinin durum bilgisi
*/
export enum MVTNREQUESTSTATUS {
    CREATED = <any>'CREATED', 
    EDITED = <any>'EDITED', 
    ACCEPTED = <any>'ACCEPTED', 
    EDIT_REJECTED = <any>'EDIT_REJECTED', 
    CREATE_REJECTED = <any>'CREATE_REJECTED'

}

export var MVTNREQUESTSTATUSDef:IModelDef = {
    meta: {
        className: 'MVTNREQUESTSTATUS',
        isObject: false,
        isEnum: true,
    },
    map: {
    CREATED : 1, 
    EDITED : 2, 
    ACCEPTED : 3, 
    EDIT_REJECTED : 4, 
    CREATE_REJECTED : 5

    },
    toString:()=>{
        return 'MVTNREQUESTSTATUS';
    }
}

