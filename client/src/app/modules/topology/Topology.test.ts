// /**
//  * Created by omeroz on 01.11.2016.
//  */
// var path = require('path');
// var util = require('util');
//
// module.exports = {
//     'Show topology' : function (client) {
//         var url = client.globals.baseUrl + client.globals.paths.Topology;
//
//         var lang            = client.globals.lang;
//         var tab_topology    = util.format('ul.nav.navbar-nav li:nth-of-type(%d)', client.globals.tabs.tab_topology);
//         var debug           = false;
//
//         client
//             .login()
//
//             // tab#1 network-visualization
//             .assert.visible(tab_topology)
//             .url(url)
//             // .click(tab_topology)
//             //.assert.visible('i.fa.fa-share-alt')
//             // .click('i.fa.fa-share-alt')
//             .pause(3000)
//             .waitForElementVisible('g', 10000);
//         //
//         // client
//         //     .pause(10000)
//         //     .elements('css selector', 'g.node', function (result) {
//         //         var size = result.value.length;
//         //
//         //         if (size > 0) {
//         //             console.log('Number of nodes: ' + size);
//         //
//         //             var nodeTested      = false;
//         //             var switchRegExp    = /^(s)(\d+)$/;
//         //             // portlet
//         //             var p               = {x: 0, y: 0, w: 0, h: 0};
//         //             // view
//         //             var v               = {x: {min: 0, max: 0}, y: {min: 0, max: 0}};
//         //             // delta
//         //             var d               = {x: 0, y: 0};
//         //             // visible nodes
//         //             var visNodes = [];
//         //
//         //             function isNodeTested() {
//         //                 return nodeTested;
//         //             }
//         //
//         //             function setNodeTested(tested) {
//         //                 nodeTested = tested;
//         //             }
//         //
//         //             function isInside(r, x, y) {
//         //                 return (x > v.x.min) && (x < v.x.max) && (y > v.y.min) && (y < v.y.max);
//         //             }
//         //
//         //             function isSwitch(display) {
//         //                 return switchRegExp.test(display);
//         //             }
//         //
//         //             client
//         //                 .getLocationInView('#show-topo-svg', function(s) {
//         //                     if (debug) {
//         //                         console.log('Portlet | x: ' + s.value.x + ' | y: ' + s.value.y);
//         //                     }
//         //
//         //                     p.x     = s.value.x;
//         //                     p.y     = s.value.y;
//         //                 })
//         //                 .pause(500)
//         //                 .getElementSize("#show-topo-svg", function(s) {
//         //                     p.w         = s.value.width;
//         //                     p.h         = s.value.height;
//         //                     v.x.min     = p.x + d.x;
//         //                     v.x.max     = p.x + p.w - d.x;
//         //                     v.y.min     = p.y + d.y;
//         //                     v.y.max     = p.y + p.h - d.y;
//         //
//         //                     if (debug) {
//         //                         console.log('p.x: ' + p.x + ', p.y: ' + p.y + ' | p.w: ' + p.w + ', p.h:' + p.h);
//         //                         console.log('v.x.min: ' + v.x.min + ', v.x.max: ' + v.x.max + ' | v.y.min: ' + v.y.min + ', v.y.max: ' + v.y.max);
//         //                     }
//         //                 });
//         //
//         //             if (debug) {
//         //                 console.log('NODES:\n%s\n', JSON.stringify(result.value));
//         //             }
//         //
//         //             result.value
//         //                 .filter(function(node, i, nodes) {
//         //                     var gNode       = 'g#nodeg' + i;
//         //                     var visNode     = {id: '', display: ''};
//         //
//         //                     var promise     = new Promise(function(resolve, reject) {
//         //                         client
//         //                             .elementIdText(node.ELEMENT, function(result2) {
//         //                                 visNode.id          = gNode;
//         //                                 visNode.display     = result2.value;
//         //                             })
//         //                             .getLocationInView(gNode, function(o) {
//         //                                 if (debug) {
//         //                                     console.log('Node: ' + gNode + ' | x: ' + o.value.x + ' | y: ' + o.value.y);
//         //                                 }
//         //
//         //                                 if (isSwitch(visNode.display) && isInside(v, o.value.x, o.value.y)) {
//         //                                     promise.resolve();
//         //                                 }
//         //                             });
//         //                     });
//         //
//         //                     promise.then(function() {
//         //                         visNodes.push(push(visNode));
//         //                         return true;
//         //                     });
//         //                 })
//         //                 .some(function(node, i, nodes) {
//         //                     if ((i === 0) && debug) {
//         //                         console.log('FILTER:\n%s\nVISIBLE:\n%s\n', JSON.stringify(nodes), JSON.stringify(visNodes));
//         //                     }
//         //
//         //                     var id          = visNodes[i].id;
//         //                     var display     = visNodes[i].display;
//         //
//         //                     console.log('Node: ' + id + ' is inside the view - displays: ' + display);
//         //
//         //                     var promise     = new Promise(function(resolve, reject) {
//         //                         client
//         //                             .pause(500)
//         //                             .moveToElement(id, 2, 2)
//         //                             .mouseButtonClick('right')
//         //                             .pause(3000)
//         //                             .element('css selector', '#show-flows', function(result3) {
//         //                                 if (result3.value && result3.value.ELEMENT) {
//         //                                     if (isNodeTested()) {
//         //                                         console.log('-- clickable, but test completed already - ignored');
//         //                                     } else {
//         //                                         promise.resolve();
//         //                                     }
//         //                                 } else {
//         //                                     console.log('Node: ' + id + ' is NOT clickable');
//         //                                     client
//         //                                         .pause(100)
//         //                                         .moveTo(id, -10, -10);
//         //                                 }
//         //                             });
//         //                     });
//         //
//         //                     promise.then(function() {
//         //                         setNodeTested(true);
//         //                         console.log('Node: ' + id + ' will be tested');
//         //
//         //                         client
//         //                             .click('#show-flows', function() {
//         //                                 console.log('Flow list opened');
//         //                             })
//         //                             .pause(3000)
//         //                             .saveScreenshot(client.globals.screenshots.path + path.sep + path.basename(__filename, '.js') + '.png', function() {
//         //                                 console.log('Screenshot saved');
//         //                             })
//         //                             .pause(1000)
//         //                             .assert.visible('.btn i.fa.fa-times-circle')
//         //                             .click('.btn i.fa.fa-times-circle', function() {
//         //                                 console.log('Flow list closed');
//         //                             })
//         //                             .pause(1000);
//         //
//         //                         return true;
//         //                     });
//         //                 });
//         //         } else {
//         //             client
//         //                 .perform(function(client, done) {
//         //                     console.log('Warning - no nodes are present');
//         //                     done();
//         //                 })
//         //                 .pause(1000)
//         //                 .saveScreenshot('./screenshots/' + path.basename(__filename, '.js') + '.png')
//         //                 .pause(1000)
//         //                 .assert.equal(result.value.length, 0);
//         //         }
//         //
//         //         client
//         //             .pause(1000)
//         //             .end();
//         //     });
//     }
// };
