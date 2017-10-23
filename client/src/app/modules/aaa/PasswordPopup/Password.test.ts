// /**
//  * Created by omeroz on 01.11.2016.
//  */
// var path = require('path');
// var util = require('util');
//
// module.exports = {
//     'Change password successfully' : function (client) {
//         var url = client.globals.baseUrl + client.globals.paths.UserListPage;
//
//         var lang            = client.globals.lang;
//         var tab_topology    = util.format('ul.nav.navbar-nav li:nth-of-type(%d)', client.globals.tabs.tab_topology);
//         var tab_user_mng    = util.format('ul.nav.navbar-nav li:nth-of-type(%d)', client.globals.tabs.tab_user_mng);
//         var firstCellAction = 'tr:first-child td:last-child a i.fa.fa-key';
//
//         client
//             .login()
//             .assert.visible(tab_topology)
//             .assert.visible(tab_user_mng)
//             .click(tab_user_mng)
//             .pause(2000)
//             .assert.visible('li[test=user-tab]')
//             .url(url)
//             .pause(2000)
//             // first user
//             .waitForElementPresent('.action_cell',5000)
//             .waitForElementPresent(firstCellAction,5000)
//             .click(firstCellAction)
//             //.click('tr:first-child td:last-child a i.fa.fa-key')
//             .waitForElementPresent('.modal-content',1000)
//             .pause(1000)
//             .clearValue('.form-group input[type=password]')
//             .pause(2000)
//             .setValueSlow('.form-group:nth-of-type(1) input[type="password"]', client.globals.credentials.password)
//             .setValueSlow('.form-group:nth-of-type(2) input[type="password"]', client.globals.credentials.password)
//             .setValueSlow('.form-group:nth-of-type(3) input[type="password"]', client.globals.credentials.password)
//             .pause(2000)
//             .assert.visible('.form-actions a i.fa.fa-floppy-o')
//             .pause(1000)
//             .saveScreenshot(client.globals.screenshots.path + path.sep + path.basename(__filename, '.js') + '.png', function() {
//                 console.log('Screenshot saved');
//             })
//             .pause(1000)
//             .click('.form-actions a i.fa.fa-floppy-o')
//             .waitForElementPresent('#toast-container .toast.toast-success', 5000, function() {
//                 console.log('Password modified successfully');
//             })
//
//
//
//             .pause(5000)
//             .end();
//     }
// };
