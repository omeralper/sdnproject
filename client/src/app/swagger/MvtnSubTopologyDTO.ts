//imports start MvtnSubTopologyDTO

import {SubTopologyDTO,SubTopologyDTODef} from "./SubTopologyDTO";


import {IModelDef} from "./IModelDef";
//imports end

'use strict';

/**
* Sanal agin fizikseldeki karsilik geldigi topoloji bilgisini tanimlayan veri modeli.
*/
export interface MvtnSubTopologyDTO {
   
    /**
    * Sanal ag fiziksel topolojideki karsilik gelen topoloji id bilgisi
    */
    mvtnNetworkId: number;
   
    /**
    * Sanal agin fiziksel topolojideki karsiliklari bilgisi
    */
    subTopologyList: Array<SubTopologyDTO>;
   
    /**
    * Sanal agin fizikseldeki topoloji karsiliklarindan secili olan topolojinin id bilgisi
    */
    selectedSubTopologyId: string;

}


export var MvtnSubTopologyDTODef:IModelDef = {
    meta: {
        className: 'MvtnSubTopologyDTO',
        
        isObject: true,
        isEnum: false,
    },
    fields:  {

        mvtnNetworkId : { type: 'number', required: true }, 

        subTopologyList : { type: 'Array', required: true }, 

        selectedSubTopologyId : { type: 'string', required: true }

    },
    toString:()=>{
        return 'MvtnSubTopologyDTO';
    }
};



