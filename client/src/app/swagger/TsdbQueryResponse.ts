//imports start TsdbQueryResponse

import {GenericResponse,GenericResponseDef} from "./GenericResponse";
import {TsdbDataSet,TsdbDataSetDef} from "./TsdbDataSet";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

export interface TsdbQueryResponse extends GenericResponse {
   
    /**
    * Tüm veri kümeler için ortak zaman damgaları dizisi
    */
    tstamps: Array<number>;
   
    /**
    * Anahtarlayıcılara ait istatistik verilerinin bulunduğu listedir.
    */
    datasets: Array<TsdbDataSet>;

}


export var TsdbQueryResponseDef:IModelDef = {
    meta: {
        className: 'TsdbQueryResponse',
        parentClassName: 'GenericResponse', 
        isObject: true,
        isEnum: false,
    },
    fields: $.extend({}, GenericResponseDef.fields,  {

        tstamps : { type: 'Array', required: true }, 

        datasets : { type: 'Array', required: true }

    }),
    toString:()=>{
        return 'TsdbQueryResponse';
    }
};



