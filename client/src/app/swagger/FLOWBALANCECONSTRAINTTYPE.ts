//imports start FLOWBALANCECONSTRAINTTYPE
import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Akışları dengelemek için kullanılacak constraintler\n\n| Adı                             | Açıklama             |\n|:--------------------------------|:---------------------|\n| FLOW_COUNT_CONSTRAINT           | Minimum akış sayısı  |\n| AVAILABLE_BANDWIDTH_CONSTRAINT  | Bandwidth genişliği  |
*/
export enum FLOWBALANCECONSTRAINTTYPE {
    FLOW_COUNT_CONSTRAINT = <any>'FLOW_COUNT_CONSTRAINT', 
    AVAILABLE_BANDWITDH_CONSTRAINT = <any>'AVAILABLE_BANDWITDH_CONSTRAINT'

}

export var FLOWBALANCECONSTRAINTTYPEDef:IModelDef = {
    meta: {
        className: 'FLOWBALANCECONSTRAINTTYPE',
        isObject: false,
        isEnum: true,
    },
    map: {
    FLOW_COUNT_CONSTRAINT : 1, 
    AVAILABLE_BANDWITDH_CONSTRAINT : 2

    },
    toString:()=>{
        return 'FLOWBALANCECONSTRAINTTYPE';
    }
}

