/**
 * Created by ekinca on 30.06.2017.
 */
import {Injectable} from "@angular/core";
import {LINKSTATUS} from "../../swagger/LINKSTATUS";
import BaseEvent = d3.BaseEvent;
import {tplLink} from "./NetworkElementDefinitions/tplLink";
import {tplCluster} from "./NetworkElementDefinitions/tplCluster";
import {DocumentConverter} from "app/modules/DocumentConverter";

@Injectable()
export class TopologyClusterService {
    constructor(private documentConverter: DocumentConverter){}

    addClusterProperty(nodes, links){
        return netClustering.cluster(nodes, links);
    }

    clusterIt(topologyData, clusterTopologyData){
        //netClustering.cluster(topologyData.data.nodes, topologyData.data.links);

        let clusters =   {};

        function createCluster(node){
            let cluster = clusters[node.cluster];
            if (!cluster){
                cluster = clusters[node.cluster] = new tplCluster({version: 1, revision: 1, timestamp: new Date(), group: node.cluster, name: "Cluster#"+node.cluster, id: "Cluster#"+node.cluster, nodes: {}, links: {}});

            }
            cluster.nodes[node.id]=node;
            ++cluster.size;
        }

        let links = {};
        let linkArray = [];
        for(let idx in topologyData.data.links){
            let lnk = topologyData.data.links[idx];
            let srcNode = lnk.source;
            let trgtNode = lnk.target;

            createCluster(srcNode);
            createCluster(trgtNode);

            if (srcNode.cluster!=trgtNode.cluster){
                if (!links[srcNode.cluster+"_"+trgtNode.cluster] && !links[trgtNode.cluster+"_"+srcNode.cluster]){
                    let newLink = new tplLink({
                        linktype: "clusterlink",
                        source: clusters[srcNode.cluster],
                        target: clusters[trgtNode.cluster],
                        size: 0,
                        topologyId: "",
                        srcPort: clusters[srcNode.cluster],
                        destPort: clusters[trgtNode.cluster],
                        securityLevel: 1,
                        status: LINKSTATUS.LIVE,
                        version: 1,
                        revision: 1,
                        timestamp: new Date(),
                        id: "",
                        links: {}
                        //"value":1
                    });
                    //newLink["srcPort"] = newLink.source;
                    //newLink["destPort"] = newLink.target;
                    newLink.links[idx] = lnk;
                    links[srcNode.cluster+"_"+trgtNode.cluster] = links[trgtNode.cluster+"_"+srcNode.cluster] = newLink;
                    linkArray.push(newLink);
                } else {
                    links[srcNode.cluster+"_"+trgtNode.cluster].links[idx] = lnk;
                    links[trgtNode.cluster+"_"+srcNode.cluster].links[idx] = lnk;
                }
            } else {
                clusters[srcNode.cluster].links[idx] = lnk;
                clusters[trgtNode.cluster].links[idx] = lnk;
            }
        }

        clusterTopologyData.nodes = (Object as any).values(clusters);
        clusterTopologyData.links = linkArray;
        return {nodes: clusterTopologyData.nodes, links: clusterTopologyData.links};
    }

    getGroup(n) { return n.group || n.cluster; }

    getClusterSize(d){
        if(d.nodes){
            let counter = 0;
            for(let key in d.nodes){
                ++counter;
            }
            return counter;
        }
    }

    network(data, prev, index, expand) {
        expand = expand || {};
        var gm = {},    // group map
            nm = {},    // node map
            lm = {},    // link map
            gn = {},    // previous group nodes
            gc = {},    // previous group centroids
            nodes = [], // output nodes
            links = []; // output links

        // process previous nodes for reuse or centroid calculation
        if (prev) {
            prev.nodes.forEach((n)=> {
                var i = index(n), o;
                n.size = this.getClusterSize(n);
                if (n.size > 0) {
                    gn[i] = n;
                    n.size = 0;
                } else {
                    o = gc[i] || (gc[i] = {x:0,y:0,count:0});
                    o.x += n.x;
                    o.y += n.y;
                    o.count += 1;
                }
            });
        }

        // determine nodes
        for (var k=0; k<data.nodes.length; ++k) {
            var n = data.nodes[k],
                i = index(n),
                l = gm[i] || (gm[i]=gn[i])
                    || (gm[i] = new tplCluster({
                        version: 1,
                        revision: 1,
                        timestamp: new Date(),
                        group: i,
                        name: "Cluster#"+i,
                        id: "Cluster#"+i,
                        size:0,
                        nodes:[]
                    }));
                   // (gm[i]={group:i, size:0, nodes:[]} );

            if (expand[i]) {
                // the node should be directly visible
                nm[n.id] = nodes.length;
                nodes.push(n);
                if (gn[i]) {
                    // place new nodes at cluster location (plus jitter)
                    n.x = gn[i].x + Math.random();
                    n.y = gn[i].y + Math.random();
                }
            } else {
                // the node is part of a collapsed cluster
                if (l.size == 0) {
                    // if new cluster, add to set and position at centroid of leaf nodes
                    nm[i] = nodes.length;
                    nodes.push(l);
                    if (gc[i]) {
                        l.x = gc[i].x / gc[i].count;
                        l.y = gc[i].y / gc[i].count;
                    }
                }
                l.nodes[n.id] = n;
            }
            // always count group size as we also use it to tweak the force graph strengths/distances
            l.size += 1;
            n.group_data = l;
        }

        for (i in gm) { gm[i].link_count = 0; }

        // determine links
        for (k=0; k<data.links.length; ++k) {
            var e = data.links[k],
                u = index(e.source),
                v = index(e.target);
            if (u != v) {
                gm[u].link_count++;
                gm[v].link_count++;
            }
            u = expand[u] ? nm[e.source.id] : nm[u];
            v = expand[v] ? nm[e.target.id] : nm[v];
            var i: any = (u<v ? u+"|"+v : v+"|"+u),
                l = lm[i] || (lm[i] = {source:u, target:v, size:0});
            l.size += 1;
        }
        for (i in lm) { links.push(lm[i]); }

        links = this.organizeNetworkLinks(nodes, links, data.links);

        return {nodes: nodes, links: links};
    }

    organizeNetworkLinks(nodes, links, allLinks){
        let newLinks = [];
        links.forEach((v, i)=>{
            let alink;
            let arr = this.documentConverter.findLinkIndexByNodeIds(allLinks, [nodes[v.source].id, nodes[v.target].id]);
            if(arr.length > 0){
                alink = allLinks[arr[0]];
            }else{
                alink = new tplLink({
                    linktype: "cluster",
                    topologyId: "",
                    securityLevel: 1,
                    srcPort: nodes[v.source],
                    destPort: nodes[v.target],
                    source: nodes[v.source],
                    target: nodes[v.target],
                    status: LINKSTATUS.LIVE,
                    version:1,
                    revision: 1,
                    id: i,
                    timestamp: new Date()
                });
            }
            newLinks.push(alink);
        });

        return newLinks;
    }

    convexHulls(nodes, index, offset = 30) {
        let hulls = {};

        // create point sets
        for (let k=0; k<nodes.length; ++k) {
            let n = nodes[k];
            if (n.nodes) continue;
            let i = index(n),
                l = hulls[i] || (hulls[i] = []);
            if(this.documentConverter.isHost(n.type)){ offset = 60;}
            else{offset = 30;}
            l.push([n.x-offset, n.y-offset]);
            l.push([n.x-offset, n.y+offset]);
            l.push([n.x+offset, n.y-offset]);
            l.push([n.x+offset, n.y+offset]);
        }

        // create convex hulls
        let hullset = [];
        for (let i in hulls) {
            hullset.push({group: i, path: d3.geom.hull(hulls[i])});
        }

        return hullset;
    }

    drawCluster(d) {
        let curve = d3.svg.line()
            .interpolate("cardinal-closed")
            .tension(.85);

        return curve(d.path); // 0.8
    }
}

