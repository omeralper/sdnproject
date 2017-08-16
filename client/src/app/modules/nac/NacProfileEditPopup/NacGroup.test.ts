// /**
//  * Created by omeroz on 01.11.2016.
//  */
//
// var path = require('path');
// var util = require('util');
//
// module.exports = {
//     'Nac Group Test' : function (client) {
//         var url = client.globals.baseUrl + client.globals.paths.NacProfileListPage;
//
//         client
//             .login()
//             .url(url)
//             .waitForElementPresent('.portlet-body',3000)
//             .click('i.fa.fa-plus-circle')
//             .pause(3000)
//             .assert.visible('.modal-content')
//             .assert.visible('#groupType')
//             .assert.visible('#groupStatus')
//             .assert.visible('#groupName')
//             .assert.visible('#accessPolicy')
//             .assert.visible('#isVerified')
//
//             .pause(1000)
//             // 1. add group
//             .setValueSlow('#groupName', client.globals.nacGroup.groupName)
//             .click("#accessPolicy")
//             .pause(300)
//             .click("#accessPolicy option:nth-of-type(1)")
//             .click('#isVerified')
//             .pause(3000)
//             .assert.visible('#aaaServer')
//             .click("#aaaServer")
//             .pause(300)
//             .click("#aaaServer option:nth-of-type(2)")
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
//             // 2. modify group
//             .assert.visible('td .fa.fa-pencil:nth-of-type(1)')
//             .click('td .fa.fa-pencil:nth-of-type(1)')
//             .pause(1000)
//             .assert.visible('.modal-content')
//             .pause(1000)
//             .clearValue('#groupName')
//             .setValueSlow('#groupName', client.globals.nacGroup.groupName_modify)
//             .pause(1000)
//             .assert.visible('.form-actions a i.fa.fa-floppy-o')
//             .click('.form-actions a i.fa.fa-floppy-o')
//             .waitForElementPresent('#toast-container .toast.toast-success', 5000, function() {
//                 console.log('User modified successfully');
//             })
//             .pause(2000)
//
//             // 3. delete group
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
