import {Injectable} from "@angular/core";
import {PageServices} from "../../modules/PageServices";
import {BaseCodeMirrorManager} from "./BaseCodeMirrorManager";
import * as CodeMirrorJavascriptRenderer from 'codemirror/mode/javascript/javascript';

@Injectable()
export class JsonCodeMirrorManager extends BaseCodeMirrorManager {

    private static CodeMirrorJavascriptRenderer = CodeMirrorJavascriptRenderer;

    constructor(baseServices: PageServices) {
        super(baseServices);
        this.config = {
            lineNumbers: true,
            readOnly: false,
            autofocus: true,
            mode: {name: "javascript", json: true}
        };
    }

    formatCode(data: any, optimize: boolean): any {
        return JSON.stringify(JSON.parse(data), null, (optimize ? null : 4));
    }

}
