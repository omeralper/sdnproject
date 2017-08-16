/**
 * Created by ekinca on 29.06.2017.
 */

import { tplNode, tplNodeOptions } from "./tplNode";
import {SUPERTOPOLOGYTYPE} from "../../../swagger/SUPERTOPOLOGYTYPE";

export class tplCluster extends tplNode {

    points;
    edgeLength: number;
    name: string;
    type: string;

    nodes;
    links;
    size: number = 0;

    clusterNodeCountDy: string;

    constructor(options: tplClusterOptions){
        super(options);

        this.fill = "#25AAE2";
        this.stroke = "#1A7599";
        this.strokeWidth = 3;
        this.edgeLength = 35;
        this.type = "cluster";

        this.name = options.name;
        this.points = options.points;
        this.nodes = options.nodes;
        this.links = options.links;
        this.size = options.size || 0;
        this.nodetype = options.nodetype || "clusternode";

        this.mainIcon = options.mainIcon || '\uf0ec';    // fa-exchange
        this.shape = options.shape || "poly";

        this.mainIconDy = options.mainIconDy || "0.3em";
        this.clusterNodeCountDy = options.clusterNodeCountDy || "-1em";
    }

    getNodeType(): string{ return "clusternode"; }

    getMainIcon(): string{ return '\uf0ec'; }

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

export interface tplClusterOptions extends tplNodeOptions {
    points?: any;
    name?: string;
    nodes?;
    links?;
    type?: string;
    size?: number;
    clusterNodeCountDy?: string;
}