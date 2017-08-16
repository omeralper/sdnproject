// /**
//  * Created by omeroz on 01.11.2016.
//  */
// /// <reference path="../../../../typings/tsd.d.ts" />
//
// var path = require('path');
// var util = require('util');
//
// module.exports = {
//     'AAA Server Test' : function (client) {
//         var url = client.globals.baseUrl + client.globals.paths.AAAServerListPage;
//
//         client
//             .login()
//             .url(url)
//             // first user
//             .waitForElementPresent('.portlet-body',3000)
//             .click('i.fa.fa-plus-circle')
//             .pause(3000)
//             .assert.visible('.modal-content')
//             .assert.visible('#serverName')
//             .assert.visible('#userName')
//             .assert.visible('#password')
//             .assert.visible('#serverIpAddress')
//             .assert.visible('#serverPort')
//             .assert.visible('#protocol')
//             .pause(1000)
//             // 1. add server
//             .setValueSlow('#serverName', client.globals.aaaServer.serverName)
//             .setValueSlow('#userName', client.globals.aaaServer.userName)
//             .setValueSlow('#password', client.globals.aaaServer.password)
//             .setValueSlow('#serverIpAddress', client.globals.aaaServer.serverIpAddress)
//             .setValueSlow('#serverPort', client.globals.aaaServer.port)
//             .click("#protocol")
//             .pause(300)
//             .click("#protocol option:nth-of-type(1)")
//             .pause(500)
//             .assert.visible('#secretKey')
//             .setValueSlow('#secretKey', client.globals.aaaServer.secretKey)
//             .pause(500)
//             .assert.visible('.form-actions a i.fa.fa-floppy-o')
//             .saveScreenshot(client.globals.screenshots.path + path.sep + path.basename(__filename, '.js') + '.png', function() {
//                 console.log('Screenshot saved');
//             })
//             .pause(500)
//             .click('.form-actions a i.fa.fa-floppy-o')
//             .waitForElementPresent('#toast-container .toast.toast-success', 5000, function() {
//                 console.log('Nac User added successfully');
//             })
//             .pause(1000)
//
//             // 2. modify server
//             .assert.visible('td .fa.fa-pencil:nth-of-type(1)')
//             .click('td .fa.fa-pencil:nth-of-type(1)')
//             .pause(1000)
//             .assert.visible('.modal-content')
//             .pause(1000)
//             .clearValue('#serverName')
//             .setValueSlow('#serverName', client.globals.aaaServer.serverName_modify)
//             .pause(1000)
//             .assert.visible('.form-actions a i.fa.fa-floppy-o')
//             .click('.form-actions a i.fa.fa-floppy-o')
//             .waitForElementPresent('#toast-container .toast.toast-success', 5000, function() {
//                 console.log('User modified successfully');
//             })
//             .pause(2000)
//
//             // 3. delete server
//             .assert.visible('td .fa.fa-trash-o:nth-of-type(1)')
//             .click('td .fa.fa-trash-o:nth-of-type(1)')
//             .pause(500)
//             .assert.visible('i.fa.fa-thumbs-up')
//             .click('i.fa.fa-thumbs-up')
//             .waitForElementPresent('#toast-container .toast.toast-success', 5000, function() {
//                 console.log('Server deleted successfully');
//             })
//             .pause(500)
//             .end();
//     }
// };
