// /**
//  * Created by omeroz on 01.11.2016.
//  */
// /// <reference path="../../../../typings/tsd.d.ts" />
//
// var path = require('path');
// var util = require('util');
//
// module.exports = {
//     'NAC Add & modify & delete user' : function (client) {
//         var url = client.globals.baseUrl + client.globals.paths.NacUserListPage;
//
//         client
//             .login()
//             .url(url)
//             // first user
//             .waitForElementPresent('.portlet-body',3000)
//             .click('i.fa.fa-plus-circle')
//             .pause(3000)
//             .assert.visible('.modal-content')
//             .assert.visible('#nacUserType')
//             .assert.visible('#nacStatus')
//             .assert.visible('#nacUserName')
//             .assert.visible('#nacPassword')
//             .assert.visible('#nacName')
//             .assert.visible('#nacSurName')
//             .assert.visible('#nacEmail')
//             .assert.visible('#nacTcno')
//             .assert.visible('#nacSecurityLevel')
//             .assert.visible('#nacStaffGroups')
//             .assert.visible('#byodNacGroups')
//             .assert.visible('#nacStaffGroups')
//             .pause(1000)
//             // 1. add role
//             // .setValueSlow('#nacUserType', client.globals.nac.username)
//             // .setValueSlow('#nacStatus', client.globals.nac.username)
//             .setValueSlow('#nacUserName', client.globals.nac.username)
//             .setValueSlow('#nacPassword', client.globals.nac.password)
//             .setValueSlow('#nacName', client.globals.nac.name)
//             .setValueSlow('#nacSurName', client.globals.nac.surname)
//             .setValueSlow('#nacEmail', client.globals.nac.email)
//             .setValueSlow('#nacTcno', client.globals.nac.tcno)
//             // .setValue('#nacSecurityLevel', "0")
//             .click("#nacSecurityLevel")
//             .pause(300)
//             .click("#nacSecurityLevel option:nth-of-type(1)")
//
//             .click("#nacStaffGroups")
//             .pause(300)
//             .click("#nacStaffGroups option:nth-of-type(1)")
//
//             .click("#byodNacGroups")
//             .pause(300)
//             .click("#byodNacGroups option:nth-of-type(1)")
//
//             .pause(500)
//             .assert.visible('.form-actions a i.fa.fa-floppy-o')
//             .pause(1000)
//             .saveScreenshot(client.globals.screenshots.path + path.sep + path.basename(__filename, '.js') + '.png', function() {
//                 console.log('Screenshot saved');
//             })
//             .pause(1000)
//             .click('.form-actions a i.fa.fa-floppy-o')
//             .waitForElementPresent('#toast-container .toast.toast-success', 5000, function() {
//                 console.log('Nac User added successfully');
//             })
//             .pause(2000)
//
//             // 2. modify user
//             .assert.visible('td .fa.fa-pencil:nth-of-type(1)')
//             .click('td .fa.fa-pencil:nth-of-type(1)')
//             .pause(1000)
//             .assert.visible('.modal-content')
//             .pause(1000)
//             .clearValue('#nacEmail')
//             .setValueSlow('#nacEmail', client.globals.nac.email_modify)
//             .pause(1000)
//             .assert.visible('.form-actions a i.fa.fa-floppy-o')
//             .click('.form-actions a i.fa.fa-floppy-o')
//             .waitForElementPresent('#toast-container .toast.toast-success', 5000, function() {
//                 console.log('User modified successfully');
//             })
//             .pause(2000)
//
//             // 3. delete role
//             .assert.visible('td .fa.fa-trash-o:nth-of-type(1)')
//             .click('td .fa.fa-trash-o:nth-of-type(1)')
//             .pause(500)
//             .assert.visible('i.fa.fa-thumbs-up')
//             .click('i.fa.fa-thumbs-up')
//             .waitForElementPresent('#toast-container .toast.toast-success', 5000, function() {
//                 console.log('User deleted successfully');
//             })
//             .pause(500)
//             .end();
//     }
// };
