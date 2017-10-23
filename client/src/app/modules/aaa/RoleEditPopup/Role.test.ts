// /**
//  * Created by omeroz on 01.11.2016.
//  */
// var path = require('path');
// var util = require('util');
//
// module.exports = {
//     '@tags': ['roles'],
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
//     'Load Role List' : function (client) {
//         var url = client.globals.baseUrl + client.globals.paths.RoleListPage;
//
//         client
//             .url(url)
//             .waitForElementPresent('.portlet-body', 4000)
//             .assert.visible('div.caption.font-dark i.icon-shield.font-dark')
//             .assert.visible('i.fa.fa-plus-circle');
//     },
//
//     'Check User Cannot Delete Own Roles': function (client, _user) {
//         var userInfo = _user || client.globals.credentials;
//
//         //WARN Role List page must be opened before this testsuite
//         //this['Load Role List'](client);
//
//         if (userInfo.roles) {
//             client.useXpath();
//             for(var i=0,l=userInfo.roles.length;i<l;i++) {
//                 var role = userInfo.roles[i];
//                 client
//                     .waitForElementPresent("//table[contains(@class, 'data-table')]//td[text()='" + role + "']", 4000)
//                     .pause(1000)
//                     .assert.elementNotPresent("//table[contains(@class, 'data-table')]//td[text()='" + role + "']/following-sibling::td[last()]/a/i[@class='fa fa-trash-o']")
//             }
//             client.useCss();
//         }
//     },
//
//     //WARN: This function is used by other scripts too (Test/MLAT-1657.test.ts)
//     'Add Role' : function (client, _role) {
//         var roleInfo = _role || client.globals.role;
//
//         client
//             .click('i.fa.fa-plus-circle')
//             .pause(1000)
//             .assert.visible('.modal-content')
//             .assert.visible('.form-group:nth-of-type(1)')
//             .assert.visible('.form-group:nth-of-type(2)')
//             .assert.visible('.ms-selectable')
//             .assert.visible('.ms-selection')
//             .clearValue('.form-group:nth-of-type(1) input[type="text"]')
//             .clearValue('.form-group:nth-of-type(2) textarea')
//             .pause(1000)
//
//             // 1. add role
//             .setValueSlow('.form-group:nth-of-type(1) input[type="text"]', roleInfo.name)
//             .setValueSlow('.form-group:nth-of-type(2) textarea', roleInfo.note)
//             // first possible security level
//             .click('.form-group:nth-of-type(3) option[value="1"]')
//             .click('.form-group:nth-of-type(3)');
//             // first possible capability
//
//             if (!roleInfo.perms) {
//                 client.click('.ms-selectable li:nth-of-type(2)');
//             } else {
//                 client.useXpath();
//                 for(var i=0,l=roleInfo.perms.length;i<l;i++){
//                     var perm = roleInfo.perms[i];
//                     client
//                         .assert.visible("//div[@class='ms-selectable']//li/span[text()='"+perm+"']")
//                         .click("//div[@class='ms-selectable']//li/span[text()='"+perm+"']")
//                         .pause(300);
//                 }
//                 client.useCss();
//             }
//
//             client
//             .pause(1000)
//             .assert.visible('.form-actions a i.fa.fa-floppy-o')
//             .pause(1000)
//             .saveScreenshot(client.globals.screenshots.path + path.sep + path.basename(__filename, '.js') + '.png', function() {
//                 console.log('Screenshot saved');
//             })
//             .pause(1000)
//             .click('.form-actions a i.fa.fa-floppy-o')
//             .waitForElementPresent('#toast-container .toast.toast-success', 5000, function() {
//                 console.log('Role added successfully');
//             });
//     },
//
//     'Edit Role' : function (client, _role) {
//         var roleInfo = _role || client.globals.role;
//
//         client
//             // 2. modify role
//             .useXpath()
//             .waitForElementPresent("//table[contains(@class, 'data-table')]//td[text()='"+roleInfo.name+"']",4000)
//             //.assert.visible("//table[contains(@class, 'data-table')]//td[text()='"+roleInfo.name+"']")
//             .assert.visible("//table[contains(@class, 'data-table')]//td[text()='"+roleInfo.name+"']/following-sibling::td[last()]/a[@data-action='0']")
//             .click("//table[contains(@class, 'data-table')]//td[text()='"+roleInfo.name+"']/following-sibling::td[last()]/a[@data-action='0']")
//             .pause(1000)
//             .useCss()
//             .assert.visible('.modal-content')
//             .assert.visible('.form-group :nth-of-type(1)')
//             .clearValue('.form-group :nth-of-type(1) input[type="text"]')
//             .pause(1000)
//             .setValueSlow('.form-group:nth-of-type(1) input[type="text"]', roleInfo.name_mod)
//             .pause(1000);
//
//         if (roleInfo.perms_mod) {
//             client.useXpath();
//             if (roleInfo.perms) {
//                 for (var i = 0, l = roleInfo.perms.length; i < l; i++) {
//                     var perm = roleInfo.perms[i];
//                     client
//                         .assert.visible("//div[@class='ms-selection']//li/span[text()='" + perm + "']")
//                         .click("//div[@class='ms-selection']//li/span[text()='" + perm + "']")
//                         .pause(300);
//                 }
//
//                 client.pause(500);
//             }
//
//             for(var i=0,l=roleInfo.perms_mod.length;i<l;i++){
//                 var perm = roleInfo.perms_mod[i];
//                 client
//                     .assert.visible("//div[@class='ms-selectable']//li/span[text()='"+perm+"']")
//                     .click("//div[@class='ms-selectable']//li/span[text()='"+perm+"']")
//                     .pause(300);
//             }
//             client.useCss();
//         }
//
//         client
//             .assert.visible('.form-actions a i.fa.fa-floppy-o')
//             .click('.form-actions a i.fa.fa-floppy-o')
//             .waitForElementPresent('#toast-container .toast.toast-success', 5000, function() {
//                 console.log('Role modified successfully');
//             });
//     },
//
//     //WARN: This function is used by other scripts too (Test/MLAT-1657.test.ts)
//     'Delete Role' : function (client, _role) {
//         var roleInfo = _role || client.globals.role;
//         var username = roleInfo.name_mod || roleInfo.name;
//
//         client
//             // 3. delete role
//             .useXpath()
//             .waitForElementPresent("//table[contains(@class, 'data-table')]//td[text()='"+username+"']",4000)
//             .pause(1000)
//             .assert.visible("//table[contains(@class, 'data-table')]//td[text()='"+username+"']")
//             .waitForElementPresent("//table[contains(@class, 'data-table')]//td[text()='"+username+"']/following-sibling::td[last()]/a[@data-action='1']",4000)
//             .assert.visible("//table[contains(@class, 'data-table')]//td[text()='"+username+"']/following-sibling::td[last()]/a[@data-action='1']")
//             .click("//table[contains(@class, 'data-table')]//td[text()='"+username+"']/following-sibling::td[last()]/a[@data-action='1']")
//             .pause(1000)
//             .useCss()
//             .waitForElementPresent('i.fa.fa-thumbs-up',4000)
//             .pause(1000)
//             .click('i.fa.fa-thumbs-up')
//             .waitForElementPresent('#toast-container .toast.toast-success', 5000, function() {
//                 console.log('Role deleted successfully');
//             });
//     }
// };
