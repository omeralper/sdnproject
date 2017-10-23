/**
 * Created by yildirayme on 21.04.2016.
 */

declare var is: Is;

export interface ActionCallback { (data?:any,el?:JQuery):void };

export class Action {
    public id:string;
    public title:string;
    public title_short:string;
    public icon:string;
    public color:string;
    public perm:string;
    public states:Array<string>;
    public subActions:Array<Action>;
    public index:number;
    public isDropdown:boolean;
    public callback :ActionCallback;

    constructor(id:(string | any), options?:(ActionCallback | Array<Action>)){

        if (is.string(id)) {
            this.id = <string>id;
            this.updateI18n(<string>id);
        } else if (is.object(id)){
            this.id = (<any>id).id || (<any>id).title;
            this.copyObjectValues(id);
            this.perm = this.perm || '@view';
        }

        if (is.function(options)) {
            this.callback = <ActionCallback>options;
        }

        if (is.array(options)) {
            this.subActions = <Array<Action>>options;
        }
    }

    execute(data?:any,el?:JQuery){
        if (this.callback) this.callback(data,el);
    }

    public updateI18n(id: string) {
        let i18n = $.t(id,{ returnObjectTrees: true });

        if (is.object(i18n)){
            this.copyObjectValues(i18n);
        } else if (is.string(i18n)) {
            this.title = i18n.toString();
        } else {
            this.title = id;
        }

        this.perm = this.perm || '@view';
    }

    private copyObjectValues(obj: any) {
        ['title','title_short','icon','color','perm','states','isDropdown'].forEach((itm,idx)=>{
            this[itm] = obj[itm];
        });
    }
}
