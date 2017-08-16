/**
 * Created by ekinca on 29.06.2017.
 */
import {BaseDTO} from "../../../swagger/BaseDTO";

export abstract class tplNode implements BaseDTO{

    id: string;
    version: number;
    revision: number;
    timestamp: Date;


    //element attributes
    stroke: string;
    strokeWidth: number;
    fill: string;
    opacity: number;
    nodetype: string;
    shape: string;
    x: string;
    y: string;
    group: string;
    cluster: string;

    //text3
    mainIcon: string;
    mainIconDx: string;
    mainIconDy: string;
    mainIconFontSize;

    constructor(options: tplNodeOptions){
        this.id = options.id;
        this.version = options.version;
        this.revision = options.revision;
        this.timestamp = options.timestamp;

        //element attributes
        this.stroke = options.stroke;
        this.strokeWidth = options.strokeWidth;
        this.fill = options.fill;
        this.opacity = options.opacity > 0 ? options.opacity : 1;
        this.nodetype = options.nodetype ? options.nodetype : this.getNodeType();
        this.shape = options.shape || "circle";

        this.x = options.x;
        this.y = options.y;

        this.group = options.group;
        this.cluster = options.cluster;

        this.mainIcon = options.mainIcon || '\uf128';// ?
        this.mainIconDx = options.mainIconDx || "0";// ?
        this.mainIconDy = options.mainIconDy || "0";// ?
        this.mainIconFontSize = options.mainIconFontSize || "30px";// ?
    }

    getFillColor(){return "white";}

    getStrokeColor(){return "white";}

    getNodeType(): string{ return "base-node"; }

    getMainIcon(): string | void { return '\uf128'; }

    getOpacity(){ return 1;}

    clearForBackend(): tplNodeDTO{
        return {id: "1", version: 1, revision: 1, timestamp: new Date()}
    }
}

export interface tplNodeOptions extends BaseDTO {
    stroke?: string;
    strokeWidth?: number;
    fill?: string;
    opacity?: number;
    nodetype?: string;
    shape?: string;

    x?: string;
    y?: string;
    group?: string;
    cluster?: string;

    mainIcon?: string;
    mainIconDx?: string;
    mainIconDy?: string;
    mainIconFontSize?: string;
}

export interface tplNodeDTO extends BaseDTO {}