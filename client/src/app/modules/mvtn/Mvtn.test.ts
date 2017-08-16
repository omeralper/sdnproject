// /**
//  * Created by omeroz on 01.11.2016.
//  */
// var path = require('path');
// var util = require('util');
//
// module.exports = {
//     'Show virtual network' : function (client) {
//         var url = client.globals.baseUrl + client.globals.paths.VirtualTopologyList;
//
//         client
//             .login()
//             .url(url)
//             .pause(2000)
//             .click('.fa-plus-circle')
//             .pause(2000)
//             .assert.visible('pathconfirmationpopup')
//             .setValueSlow('input[name=virtualNetworkName]','magneto x-men')
//             .click('.fa-check-circle')
//             .pause(1000)
//             .assert.visible('.fa-times-circle')
//             .keys("body",[client.Keys.ENTER])
//             .click('.modal-footer i.fa-times-circle')
//             //create first switch
//             .pause(1000)
//             .click('#addCursor')
//             .pause(1000)
//             .assert.visible('#switchName')
//             .setValueSlow('#switchName', 'captain america')
//             .click('#switchProfileSelection option:nth-of-type(1)')
//             .click('.bootstrap-select')
//             .click('.dropdown-menu.inner li:first-of-type')
//             .click('.bootstrap-select')
//             .pause(1000)
//             .click('.form-actions a i.fa.fa-check-circle')
//             .pause(1000)
//             .assert.visible('.toast-success')
//             .moveToElement('svg',100,100)
//             .mouseButtonClick(0)
//             .saveScreenshot(client.globals.screenshots.path + path.sep + path.basename(__filename, '.js') + '.png', function() {
//                 console.log('Screenshot saved');
//             })
//
//             //create second switch
//             .pause(1000)
//             .click('#addCursor')
//             .pause(1000)
//             .assert.visible('#switchName')
//             .setValueSlow('#switchName', 'superman')
//             .click('#switchProfileSelection option:nth-of-type(2)')
//             .click('.bootstrap-select')
//             .click('.dropdown-menu.inner li:first-of-type')
//             .click('.bootstrap-select')
//             .pause(1000)
//             .click('.form-actions a i.fa.fa-check-circle')
//             .pause(1000)
//             .assert.visible('.toast-success')
//             .moveToElement('svg',100,150)
//             .mouseButtonClick(0)
//
//             //add link
//             .click('#addLink')
//             .assert.visible('.toast-info')
//             .click('#nodeg0 text')
//             .assert.visible('.toast-info')
//             .pause(500)
//             .click('#nodeg1 text')
//             .pause(500)
//             .assert.visible('#sourceBW')
//             .assert.visible('#sourceBWUnit')
//             .assert.visible('#targetBW')
//             .assert.visible('#targetBWUnit')
//             .assert.visible('#securityLevelForLinkSelection')
//             .pause(1000)
//             .setValueSlow('#sourceBW','100')
//             .pause(500)
//             .click('#sourceBWUnit option:nth-of-type(2)')
//             .pause(500)
//             .setValueSlow('#targetBW','100')
//             .pause(500)
//             .click('#targetBWUnit option:nth-of-type(2)')
//             .pause(500)
//             .click('.form-actions i.fa-check-circle')
//             .pause(500)
//             .assert.visible('path')
//             .click('#createVirtualTopology')
//             .pause(500)
//             .assert.visible('.toast-success')
//         //.assert.visible('.btn i.fa.fa-times-circle')
//         // .click('.btn i.fa.fa-times-circle', function() {
//         //     console.log('Virtual network list closed');
//         // })
//             .pause(1000)
//             .end();
//     }
// };
