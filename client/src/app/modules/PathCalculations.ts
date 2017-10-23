/**
 * Created by ekinca on 02.02.2016.
 */

export class PathCalculations {

    constructor() {

    }

    static initShortestPathCalculations(host1, host2, graph){
        var sw1,sw2;

        $.each(graph.nodes,(i,v:any)=>{
            //this cleans the green path from previous attempts otherwise if you disable a link and try again its other path may still remain
            if(v.colorCode == "C"){
                v.colorCode = "B";
            }

            v.explored = false;
            if(v.hwAddress == host1.switchHWAddress ){
                sw1=v;
            }else if(v.hwAddress == host2.switchHWAddress ){
                sw2=v;
            }

        });

        $.each(graph.links, (i, v)=> {
            //RESETING FOR PREVIOUS SP ATTEMPTS
            if(v.colorCode == "C"){
                v.colorCode = "B";
            }
        });

        return this.shortestPathFunc(sw1,sw2,graph);
    }

    static shortestPathFunc(node1, node2, graph) {
        node1.explored = true;

        node1.cost = 0;
        var shortestPathArray = [];
        var cost = [];
        shortestPathArray.push(node1);

        while(shortestPathArray.length != 0){
            var workingNode = shortestPathArray.shift();

            var currentLinks = this.activeLinkFinder(workingNode,graph);

            //if no paths can be found due to root hopping then clear the blocked ones
            if(currentLinks.length == 0){
                $.each(graph.links, function(i,v){
                    if(v.blocked != 0){
                        v.blocked = 0;
                    }
                });
                currentLinks = this.activeLinkFinder(workingNode, graph);
            }

            //breadth first search
            $.each(currentLinks,(i,v)=>{
                if (v.source.hwAddress != workingNode.hwAddress && v.source.explored != true) {
                    this.switchFinder(v.source.hwAddress, graph).cost = v.target.cost + 1;
                    this.switchFinder(v.source.hwAddress, graph).explored = true;
                    shortestPathArray.push(this.switchFinder(v.source.hwAddress, graph));
                    cost[v.source.hwAddress] = {
                        "parent": workingNode.hwAddress,
                        "cost": v.target.cost + 1
                    };
                } else if (v.target.hwAddress != workingNode.hwAddress && v.target.explored != true) {
                    this.switchFinder(v.target.hwAddress, graph).cost = v.source.cost + 1;
                    this.switchFinder(v.target.hwAddress, graph).explored = true;
                    shortestPathArray.push(this.switchFinder(v.target.hwAddress, graph));
                    cost[v.target.hwAddress] = {
                        "parent": workingNode.hwAddress,
                        "cost": v.source.cost + 1
                    };
                }
            });
        }

        var pathArray = this.thePathArray(node1, node2, cost);

        //you can delete this if
        if(pathArray == "Edge"){
            return "Edge";
        }
        return pathArray;


    }

    static thePathArray(begNode, endNode, costTable):any{
        var pathArray=[];
        var pointer = endNode.hwAddress;
        while(pointer != begNode.hwAddress){
            for(var key in costTable){

                //you can delete this if
                if( pointer != begNode.hwAddress && !( costTable.hasOwnProperty(pointer) ) ){
                    console.log("key doesnt exists, this is an unaccessible edge node");
                    return "Edge";

                }else if(key == pointer ){
                    pathArray.push(key);
                    pointer = costTable[key].parent;
                }
            }
        };

        return pathArray;
    }

    static activeLinkFinder(node, graph){
        var spLinkArray = [];

        $.each(graph.links, (i, v)=> {
            if(v.type == "Link"){
                if (v.source.hwAddress == node.hwAddress && v.source.blocked != 1 && v.blocked != 1) {
                    spLinkArray.push(v);
                } else if (v.target.hwAddress == node.hwAddress && v.target.blocked != 1 && v.blocked != 1) {
                    spLinkArray.push(v);
                }
            }
        });
        return spLinkArray;
    }

    static switchFinder(switchHwAddress, graph){
        for(var i = 0; i < graph.nodes.length; i++ ){
            if(switchHwAddress == graph.nodes[i].hwAddress){
                return graph.nodes[i];
            }
        }

    }

    static topologyFindSwitchDTOById(switchHwAddress, graph){
        for(var i = 0; i < graph.nodes.length; i++ ){
            if(switchHwAddress == graph.nodes[i].id){
                return graph.nodes[i];
            }
        }

    }

    static brokenLinkFinder(node, graph){
        var spLinkArray = [];
        $.each(graph.links, (i, v)=> {
            if(v.type == "Link"){
                if (v.source.hwAddress == node.hwAddress && v.source.blocked == 1) {
                    spLinkArray.push(v);
                } else if (v.target.hwAddress == node.hwAddress && v.target.blocked == 1) {
                    spLinkArray.push(v);
                }
            }
        });
        return spLinkArray;
    }

}