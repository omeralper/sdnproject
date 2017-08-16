/**
 * Created by ekinca on 4.07.2017.
 */

import { tplNode, tplNodeOptions } from "./tplNode";
import {SUPERTOPOLOGYTYPE} from "../../../swagger/SUPERTOPOLOGYTYPE";
import {DomainDTO} from "../../../swagger/DomainDTO";

export class tplDomain extends tplNode implements DomainDTO {

    points;
    edgeLength: number;
    name: string;
    type: SUPERTOPOLOGYTYPE;

    nodes;
    links;
    size: number;

    constructor(options: tplDomainOptions){
        super(options);
        this.fill = "#25AAE2"; // will be method
        this.stroke = "#1A7599";
        this.strokeWidth = 3;
        this.edgeLength = 30;
        this.type = SUPERTOPOLOGYTYPE.DOMAIN;

        this.points = options.points;
        this.nodetype = options.nodetype || this.getNodeType();
        this.shape = options.shape || "poly";
        this.mainIcon = options.mainIcon || '\uf0e8';
    }

    getNodeType(){
        return "domainnode";
    }

    getMainIcon(){
        return '\uf0e8';
    }

    polygonPoints(){
        //let a = this.size >= 10 ? 60 : this.edgeLength * (1 + this.size/10);
        let a = this.edgeLength;
        let sin30 = Math.sin(Math.PI / 6);
        let cos30 = Math.cos(Math.PI / 6);
        //positions are relative to the enclosing g element
        return (0 + "," + (-1*a)) + " " + ((a*cos30) + "," + (-1*a*sin30)) + " " + ( (a*cos30) + "," + (a*sin30)) + " "
            + (0 + "," + (a)) + " " + ( (-1*a*cos30) + "," + (a*sin30)) + " " + ( (-1*a*cos30) + "," + (-1*a*sin30));
    }

}

export interface tplDomainOptions extends tplNodeOptions {
    points?: any;
}