var path = require('path');
var util = require('util');

module.exports = {
    'Show topology' : function (client) {
        var lang            = client.globals.lang;
        var tab_topology    = util.format('ul.nav.navbar-nav li:nth-of-type(%d)', client.globals.tabs.tab_topology);
        var debug           = false;

        client
            .login()

            // tab#1 network-visualization
            .assert.visible(tab_topology)
            .click(tab_topology)
            .assert.visible('i.fa.fa-share-alt')
            .click('i.fa.fa-share-alt')
            .pause(3000)
            .waitForElementVisible('g', 10000);

        client
            .pause(10000)
            .elements('css selector', 'g.node', function (result) {
                var size = result.value.length;

                console.log('\nNumber of nodes: ' + size + '\n');

                if (size > 0) {
                    var nodeTested      = false;
                    var switchRegExp    = /^(\w)+$/;
                    // portlet
                    var p               = {x: 0, y: 0, w: 0, h: 0};
                    // view
                    var v               = {x: {min: 0, max: 0}, y: {min: 0, max: 0}};
                    // delta
                    var d               = {x: 0, y: 0};

                    function isNodeTested() {
                        return nodeTested;
                    }

                    function setNodeTested(tested) {
                        nodeTested = tested;
                    }

                    function isInside(r, x, y) {
                        return ((x > v.x.min)
                                && (x < v.x.max)
                                && (y > v.y.min)
                                && (y < v.y.max));
                    }

                    function isSwitch(display) {
                        return switchRegExp.test(display);
                    }

                    // http://stackoverflow.com/questions/31424561/wait-until-all-es6-promises-complete-even-rejected-promises
                    function reflect(promise){
                        return promise.then(function(v) {return {data: v, status: true}},       // resolved
                                            function(e) {return {data: e, status: false}});     // rejected
                    }

                    client
                        .getLocationInView('#show-topo-svg', function(s) {
                            if (debug) {
                                console.log('Portlet | x: ' + s.value.x + ' | y: ' + s.value.y);
                            }

                            p.x     = s.value.x;
                            p.y     = s.value.y;
                        })
                        .pause(500)
                        .getElementSize("#show-topo-svg", function(s) {
                            p.w         = s.value.width;
                            p.h         = s.value.height;
                            v.x.min     = p.x + d.x;
                            v.x.max     = p.x + p.w - d.x;
                            v.y.min     = p.y + d.y;
                            v.y.max     = p.y + p.h - d.y;

                            if (debug) {
                                console.log('p.x: ' + p.x + ', p.y: ' + p.y + ' | p.w: ' + p.w + ', p.h:' + p.h);
                                console.log('v.x.min: ' + v.x.min + ', v.x.max: ' + v.x.max + ' | v.y.min: ' + v.y.min + ', v.y.max: ' + v.y.max);
                            }
                        });

                    if (debug) {
                        console.log('\nALL NODES:\n%s\n', JSON.stringify(result.value));
                    }

                    var promises = result.value.map(function(node, i, nodes) {
                        return new Promise(function(resolve, reject) {
                            var gNode       = 'g#nodeg' + i;
                            var visNode     = {id: '', display: ''};

                            client
                                .elementIdText(node.ELEMENT, function(result2) {
                                    visNode.id          = gNode;
                                    visNode.display     = result2.value;
                                })
                                .getLocationInView(gNode, function(o) {
                                    if (debug) {
                                        console.log('#' + i +' node: ' + gNode + ' | x: ' + o.value.x + ' | y: ' + o.value.y + ' | display: ' + visNode.display);
                                    }

                                    if (isSwitch(visNode.display) && isInside(v, o.value.x, o.value.y)) {
                                        if (debug) {
                                            console.log('switch is visible');
                                        }
                                        resolve(visNode);
                                    } else {
                                        if (debug) {
                                            console.log('not a switch or is not visible');
                                        }
                                        reject(visNode);
                                    }
                                });
                        });
                    });

                    Promise.all(promises.map(reflect)).then(function(vnodes) {
                        if (debug) {
                            console.log('\nVISIBLE NODES:\n%s\n', JSON.stringify(vnodes));
                        }

                        var counter = 0;

                        vnodes.forEach(function(vnode, i, nodes) {
                            var promise     = new Promise(function(resolve, reject) {
                                if (vnode.status) {
                                    var node        = vnode.data;
                                    var id          = node.id;
                                    var display     = node.display;

                                    client
                                        .pause(500)
                                        .moveToElement(id, 2, 2)
                                        .mouseButtonClick('right')
                                        .pause(3000)
                                        .element('css selector', '#show-flows', function(result3) {
                                            if (debug) {
                                                console.log('\nright click: ' + JSON.stringify(result3) + '\n');
                                            }
                                            if ((result3.state === 'success') && (result3.status === 0)) {
                                                // Selenium success - for example:
                                                // {"state":"success","sessionId":"a4e06bbf-a3d5-415a-a12a-e33f04a84ee1","hCode":897561903,"value":{"ELEMENT":"66"},"class":"org.openqa.selenium.remote.Response","status":0}
                                                if (isNodeTested()) {
                                                    reject({data: vnode.data, visible: true, clickable: true, test: false});
                                                } else {
                                                    resolve(vnode.data);
                                                }
                                            } else {
                                                // Selenium error - for example:
                                                // {"status":-1,"value":{"additionalInformation":"\nDriver info: driver.version: unknown","localizedMessage":"Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#show-flows\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: '2.53.0', revision: '35ae25b', time: '2016-03-15 17:00:58'\nSystem info: host: 'orhan-lm-17', ip: '127.0.0.1', os.name: 'Linux', os.arch: 'amd64', os.version: '3.16.0-38-generic', java.version: '1.8.0_111'\nDriver info: driver.version: unknown","supportUrl":"http://seleniumhq.org/exceptions/no_such_element.html","systemInformation":"System info: host: 'orhan-lm-17', ip: '127.0.0.1', os.name: 'Linux', os.arch: 'amd64', os.version: '3.16.0-38-generic', java.version: '1.8.0_111'","cause":null,"suppressed":[],"message":"Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#show-flows\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: '2.53.0', revision: '35ae25b', time: '2016-03-15 17:00:58'\nSystem info: host: 'orhan-lm-17', ip: '127.0.0.1', os.name: 'Linux', os.arch: 'amd64', os.version: '3.16.0-38-generic', java.version: '1.8.0_111'\nDriver info: driver.version: unknown","hCode":1663549182,"class":"org.openqa.selenium.NoSuchElementException","buildInformation":{"buildRevision":"35ae25b","buildTime":"2016-03-15 17:00:58","releaseLabel":"2.53.0","hCode":842368239,"class":"org.openqa.selenium.internal.BuildInfo"}},"errorStatus":7,"error":"An element could not be located on the page using the given search parameters."}
                                                client
                                                    .pause(100)
                                                    .moveTo(id, -10, -10);

                                                reject({data: vnode.data, visible: true, clickable: false, test: false});
                                            }
                                        });
                                } else {
                                    reject({data: vnode.data, visible: false, clickable: false, test: false});
                                }
                            });

                            promise.then(
                                function(node) {
                                    counter++;

                                    setNodeTested(true);

                                    console.log('\n' + counter + '# ' + node.id + ' | ' + node.display + ' -- testing');

                                    client
                                        .click('#show-flows', function() {
                                            console.log('Flow list opened');
                                        })
                                        .pause(3000)
                                        .saveScreenshot(client.globals.screenshots.path + path.sep + path.basename(__filename, '.js') + '.png', function() {
                                            console.log('Screenshot saved');
                                        })
                                        .pause(1000)
                                        .assert.visible('.btn i.fa.fa-times-circle')
                                        .click('.btn i.fa.fa-times-circle', function() {
                                            console.log('Flow list closed\n');
                                        })
                                        .pause(1000);
                                },
                                function(node) {
                                    counter++;

                                    if (!node.visible) {
                                        console.log(counter + '# ' + vnode.data.id + ' | ' + vnode.data.display + ' -- node is NOT VISIBLE');
                                    } else if (!node.clickable) {
                                        console.log(counter + '# ' + node.data.id + ' | ' + node.data.display + ' -- visible node is NOT CLICKABLE');
                                    } else if (!node.test) {
                                        console.log(counter + '# ' + node.data.id + ' | ' + node.data.display + ' -- visible and clickable node, but IGNORED');
                                    }


                                    if (counter == nodes.length) {
                                        console.log('\nLOOP COMPLETED - has tested any node?');

                                        client
                                            .pause(500)
                                            .assert.equal(isNodeTested() ? 1 : 0, 1);
                                    }
                                }
                            );
                        });
                    });
                } else {
                    client
                        .perform(function(client, done) {
                            console.log('WARNING - no nodes are present');
                            done();
                        })
                        .pause(1000)
                        .saveScreenshot(client.globals.screenshots.path + path.sep + path.basename(__filename, '.js') + '.png')
                        .pause(1000)
                        .assert.equal(size, 0);
                }

                client
                    .pause(5000)

                    .logout()

                    .end();
        });
    }
};
