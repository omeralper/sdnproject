/**
 * Created by yildirayme on 02.06.2016.
 */

export class EnumHelper {
    static getNamesAndValues(e: any) {
        return this.getNames(e).map(n => { return { name: n, value: e[n] as number }; });
    }

    static getNames(e: any,isSorted:boolean=false) {
        let names = this.getObjValues(e).filter(v => typeof v === "string") as string[];
        return isSorted? names.sort(): names;
    }

    static getValues(e: any,isSorted:boolean=false) {
        let values = this.getObjValues(e).filter(v => typeof v === "number") as number[];
        return isSorted? values.sort(): values;
    }

    public static getObjValues(e: any): (number | string)[] {
        return Object.keys(e).map(k => e[k]);
    }
}
