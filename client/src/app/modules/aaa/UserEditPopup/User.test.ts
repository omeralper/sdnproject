// /**
//  * Created by omeroz on 01.11.2016.
//  */
// var path = require('path');
// var util = require('util');
//
// module.exports = {
//     '@tags': ['users'],
//     isLoggedIn: false,
//
//     before : function(client) {
//         console.log('Setting up...');
//         client
//             .login();
//         this.isLoggedIn = true;
//     },
//
//     after : function(client) {
//         console.log('Closing down...');
//         client
//             .logout()
//             .end();
//     },
//
//     //WARN: This function is used by other scripts too (Test/MLAT-1657.test.ts)
//     'Load User List': function (client) {
//         var url = client.globals.baseUrl + client.globals.paths.UserListPage;
//
//         client
//             .url(url)
//             // first user
//             .waitForElementPresent('.portlet-body', 4000)
//             .waitForElementPresent('div.caption.font-dark i.icon-user.font-dark',4000)
//             .assert.visible('div.caption.font-dark i.icon-user.font-dark')
//             .waitForElementPresent('i.fa.fa-plus-circle',4000)
//             .assert.visible('i.fa.fa-plus-circle');
//
//     },
//
//     'Check User Cannot Delete Itself': function (client, _user) {
//         var userInfo = _user || client.globals.credentials;
//
//         //WARN User List page must be opened before this testsuite
//         //this['Load User List'](client);
//
//         client
//             .useXpath()
//             .waitForElementPresent("//table[contains(@class, 'data-table')]//td[text()='"+userInfo.username+"']",4000)
//             .pause(1000)
//             .assert.elementNotPresent("//table[contains(@class, 'data-table')]//td[text()='"+userInfo.username+"']/following-sibling::td[last()]/a/i[@class='fa fa-trash-o']")
//             .useCss()
//
//     },
//
//     //WARN: This function is used by other scripts too (Test/MLAT-1657.test.ts)
//     'Add User' : function (client, _user) {
//         var url = client.globals.baseUrl + client.globals.paths.UserListPage;
//         var userInfo = _user || client.globals.user;
//         client
//             .click('i.fa.fa-plus-circle')
//             .pause(1000)
//             .assert.visible('.modal-content')
//             .assert.visible('input[name=username]')
//             .assert.visible('input[name=pass1]')
//             .assert.visible('input[name=pass2]')
//             .assert.visible('input[name=name]')
//             .assert.visible('input[name=surname]')
//             .assert.visible('input[name=email]')
//             .assert.visible('textarea[name=notes]')
//             .assert.visible('.ms-selectable')
//             .assert.visible('select[name=status]')
//             .assert.visible('.ms-selectable')
//             .assert.visible('.ms-selection')
//             .pause(1000)
//
//             .setValueSlow('input[name=username]', userInfo.username)
//             .setValueSlow('input[name=pass1]', userInfo.password)
//             .setValueSlow('input[name=pass2]', userInfo.password)
//             .setValueSlow('input[name=name]', userInfo.name)
//             .setValueSlow('input[name=surname]', userInfo.surname)
//             .setValueSlow('input[name=email]', userInfo.email)
//             .setValueSlow('textarea[name=notes]', userInfo.notes)
//             .waitForElementPresent('.ms-selectable li:nth-of-type(2)',3000);
//
//             if (!userInfo.roles) {
//                 client.click('.ms-selectable li:nth-of-type(2)');
//             } else {
//                 client.useXpath();
//                 for(var i=0,l=userInfo.roles.length;i<l;i++){
//                     var role = userInfo.roles[i];
//                     client
//                         .assert.visible("//div[@class='ms-selectable']//li/span[text()='"+role+"']")
//                         .click("//div[@class='ms-selectable']//li/span[text()='"+role+"']")
//                         .pause(300);
//                 }
//                 client.useCss();
//             }
//
//         client
//             .pause(1000)
//             .assert.visible('.form-actions a i.fa.fa-floppy-o')
//             .saveScreenshot(client.globals.screenshots.path + path.sep + path.basename(__filename, '.js') + '.png', function() {
//                 console.log('Screenshot saved');
//             })
//             .pause(500)
//             .click('.form-actions a i.fa.fa-floppy-o')
//             .waitForElementPresent('#toast-container .toast.toast-success', 5000, function() {
//                 console.log('User added successfully');
//             });
//     },
//
//     'Edit User' : function (client,_user) {
//         var userInfo = _user || client.globals.user;
//
//         client
//             // 2. modify user
//             .useXpath()
//             .waitForElementPresent("//table[contains(@class, 'data-table')]//td[text()='"+userInfo.username+"']",4000)
//             //.assert.visible("//table[contains(@class, 'data-table')]//td[text()='"+userInfo.username+"']")
//             .assert.visible("//table[contains(@class, 'data-table')]//td[text()='"+userInfo.username+"']/following-sibling::td[last()]/a[@data-action='0']")
//             .click("//table[contains(@class, 'data-table')]//td[text()='"+userInfo.username+"']/following-sibling::td[last()]/a[@data-action='0']")
//             .pause(1000)
//             .useCss()
//             .assert.visible('.modal-content')
//             .assert.visible('.form-group:nth-of-type(1)')
//             .clearValue("input[name='name']")
//             .pause(500)
//             .setValueSlow("input[name='name']", userInfo.name_mod)
//             .pause(1000)
//
//         if (userInfo.roles_mod) {
//             client.useXpath();
//             if (userInfo.roles) {
//                 for (var i = 0, l = userInfo.roles.length; i < l; i++) {
//                     var role = userInfo.roles[i];
//                     client
//                         .assert.visible("//div[@class='ms-selection']//li/span[text()='" + role + "']")
//                         .click("//div[@class='ms-selection']//li/span[text()='" + role + "']")
//                         .pause(300);
//                 }
//
//                 client.pause(500);
//             }
//
//             for(var i=0,l=userInfo.roles_mod.length;i<l;i++){
//                 var role = userInfo.roles_mod[i];
//                 client
//                     .assert.visible("//div[@class='ms-selectable']//li/span[text()='"+role+"']")
//                     .click("//div[@class='ms-selectable']//li/span[text()='"+role+"']")
//                     .pause(300);
//             }
//             client.useCss();
//         }
//
//         client
//
//             .assert.visible('.form-actions a i.fa.fa-floppy-o')
//             .click('.form-actions a i.fa.fa-floppy-o')
//             .waitForElementPresent('#toast-container .toast.toast-success', 5000, function() {
//                 console.log('User modified successfully');
//             });
//
//     },
//
//     //WARN: This function is used by other scripts too (Test/MLAT-1657.test.ts)
//     'Delete User' : function (client,_user) {
//         var userInfo = _user || client.globals.user;
//
//         client
//             // 3. delete user
//             .useXpath()
//             .waitForElementPresent("//table[contains(@class, 'data-table')]//td[text()='"+userInfo.username+"']",4000)
//             .pause(1000)
//             .assert.visible("//table[contains(@class, 'data-table')]//td[text()='"+userInfo.username+"']")
//             .waitForElementPresent("//table[contains(@class, 'data-table')]//td[text()='"+userInfo.username+"']/following-sibling::td[last()]/a[@data-action='2']",4000)
//             .assert.visible("//table[contains(@class, 'data-table')]//td[text()='"+userInfo.username+"']/following-sibling::td[last()]/a[@data-action='2']")
//             .click("//table[contains(@class, 'data-table')]//td[text()='"+userInfo.username+"']/following-sibling::td[last()]/a[@data-action='2']")
//             .pause(1000)
//             .useCss()
//             .waitForElementPresent('i.fa.fa-thumbs-up',4000)
//             .pause(1000)
//             .click('i.fa.fa-thumbs-up')
//             .waitForElementPresent('#toast-container .toast.toast-success', 5000, function() {
//                 console.log('User deleted successfully');
//             });
//
//     },
//
// };
