import {Injectable} from "@angular/core";
import {PageServices} from "../../modules/PageServices";
import {DIALOG_TYPES} from "../../modules/UIHelper";
import * as CodeMirror from 'codemirror';


@Injectable()
export abstract class BaseCodeMirrorManager {

    protected static CodeMirror = CodeMirror;

    public config:any = {
        lineNumbers: true,
        readOnly: false,
        autofocus: true
    };
    public data: string;
    protected getter: IDataGetterCallback;
    protected setter: IDataSetterCallback;

    constructor(protected baseServices: PageServices) {

    }

    public registerDataCallbacks(getter: IDataGetterCallback, setter: IDataSetterCallback) {
        this.getter = getter;
        this.setter = setter;
    }

    public loadCodeData() {
        if (is.existy(this.getter)) {
            try {
                this.data = this.formatCode(this.getter(), false);
            } catch (e) {
                this.data = this.getter();
            }
        } else {
            this.baseServices.logger.warn('No getter defined');
        }
    }

    public saveCodeData(noOptimization: boolean = false) {
        if (is.existy(this.setter)) {
            try {
                this.setter(this.formatCode(this.data, !noOptimization));
            } catch (e) {
                this.baseServices.uiHelper.notify(this.baseServices.i18n.t('common.messages.json_parse_error'), DIALOG_TYPES.WARNING);
                this.setter(this.data);
                return false;
            }
            return true;
        } else {
            this.baseServices.logger.warn('No setter defined');
        }
        return false;
    }

    public onCodeMirrorFocus() {
        this.baseServices.logger.debug('onCodeMirrorFocus');
        this.loadCodeData();
    }

    public onCodeMirrorBlur() {
        this.baseServices.logger.debug('onCodeMirrorBlur');
        this.saveCodeData(true);
    }

    abstract formatCode(data: any, optimize: boolean): any;

}

export type IDataGetterCallback = () => any;

export type IDataSetterCallback = (data: any) => void;