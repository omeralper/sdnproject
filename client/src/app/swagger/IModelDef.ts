/**
 * Created by yildirayme on 4.05.2017.
 */

export interface IModelDef {
    meta:IMetaDef;
    fields?: { [key:string]:IFieldTypeDef;};//IFieldsMapDef;
    map?: { [key:string]:number; };//IEnumsMapDef;
    toString:()=>string;
}

export interface IMetaDef {
    className: string;
    parentClassName?: string;
    isObject: boolean;
    isEnum: boolean;
}

export interface IFieldTypeDef {
    type:string | IModelDef;
    required?:boolean;
}

//export type IFieldsMapDef = { [key:string]:IFieldTypeDef;}
//export type IEnumsMapDef = { [key:string]:number; };
