/**
 * Created by ekinca on 15.02.2016.
 */
export class ClusteringCalculations {
    public curve:any;
    public expand;
    constructor() {
        this.curve = d3.svg.line()
            .interpolate("cardinal-closed")
            .tension(.85);
    }

    static getGroup(n) { return n.group; }

    static linkSourceTargetObjectifier(data){
        for (var i=0; i<data.links.length; ++i) {
            var o = data.links[i];
            o.source = data.nodes[o.source];
            o.target = data.nodes[o.target];
        }
    }

    static network(data, prev, expand) {

        //clusters same group id's
        var that = this;
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
            prev.nodes.forEach(function (n:any) {
                var i = that.getGroup(n), o;
                if (n.size > 0) {
                    gn[i] = n;
                    n.size = 0;
                } else {
                    o = gc[i] || (gc[i] = {x: 0, y: 0, count: 0});
                    o.x += n.x;
                    o.y += n.y;
                    o.count += 1;
                }
            });
        }

        // determine nodes
        for (var k = 0; k < data.nodes.length; ++k) {
            var n = data.nodes[k],
                i = that.getGroup(n),
                l = gm[i] || (gm[i] = gn[i]) || (gm[i] = {group: i, size: 0, nodes: []});

            if (expand[i]) {
                // the node should be directly visible
                nm[n.name] = nodes.length;
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
                l.nodes.push(n);
            }
            // always count group size as we also use it to tweak the force graph strengths/distances
            l.size += 1;
            n.group_data = l;
        }

        for (i in gm) {
            gm[i].link_count = 0;
            gm[i].type = 'Cluster';
        }

        // determine links

        for (k = 0; k < data.links.length; ++k) {
            var e = data.links[k],
                u = that.getGroup(e.source),
                v = that.getGroup(e.target);
            if (u != v) {
                gm[u].link_count++;
                gm[v].link_count++;
            }
            u = expand[u] ? nm[e.source.name] : nm[u];
            v = expand[v] ? nm[e.target.name] : nm[v];
            var i:any = (u < v ? u + "|" + v : v + "|" + u),
                l = lm[i] || (lm[i] = {
                        source: u,
                        target: v,
                        size: 0,
                        blocked: e.blocked,
                        colorCode: e.colorCode,
                        customData: e.customData,
                        destHWAddress: e.destHWAddress,
                        destPortId: e.destPortId,
                        linkId: e.linkId,
                        linkWeight: e.linkWeight,
                        order: e.order,
                        selfLink: e.selfLink,
                        srcHWAddress: e.srcHWAddress,
                        srcPortId: e.srcPortId,
                        status: e.status,
                        type: "Link"
                    });
            l.size += 1;
        }
        for (i in lm) {
            links.push(lm[i]);
        }
        console.log('network return');

        return {nodes: nodes, links: links};
    }

    static convexHulls(nodes, index, offset) {
        var hulls = {};

        // create point sets
        for (var k=0; k<nodes.length; ++k) {
            var n = nodes[k];
            if (n.size) continue;
            var i = index(n),
                l = hulls[i] || (hulls[i] = []);
            l.push([n.x-offset, n.y-offset]);
            l.push([n.x-offset, n.y+offset]);
            l.push([n.x+offset, n.y-offset]);
            l.push([n.x+offset, n.y+offset]);
        }

        // create convex hulls
        var hullset = [];
        for (i in hulls) {
            hullset.push({group: i, path: d3.geom.hull(hulls[i])});
        }

        return hullset;
    }

}
