// /**
//  * Created by omeroz on 01.11.2016.
//  */
// //nightwatch test file
// var path = require('path');
// var util = require('util');
//
// module.exports = {
//     'Login username failure & password failure & success & Logout' : function (client) {
//         var lang = client.globals.lang;
//         var screenShotPath = client.globals.screenshots.path + '/' + path.basename(__filename, '.js') + '.png';
//         client
//             .url(client.globals.login)
//             .resizeWindow(client.globals.screenshots.width, client.globals.screenshots.height)
//             .waitForElementVisible('body', 5000)
//             .assert.title(client.globals.titles[lang]['login'])
//             .pause(3000)
//             .assert.visible('#user')
//             .assert.visible('#password')
//             .assert.visible('.login-submit')
//
//         // 1. username failure
//             .clearValue('#user')
//             .clearValue('#password')
//             .pause(1000)
//             .setValueSlow('#user', client.globals.credentials_wrong.username)
//             .setValueSlow('#password', client.globals.credentials.password)
//             .pause(5000)
//             .click('.login-submit')
//             .waitForElementPresent('.modal-content', 5000, function() {
//                 console.log('Wrong username - login failure detected');
//             })
//             .pause(1000)
//             .keys(client.Keys.ESCAPE)
//             .pause(1000)
//             .keys(client.Keys.ESCAPE)
//             .pause(1000)
//             .keys(client.Keys.ESCAPE)
//             .pause(1000)
//             .keys(client.Keys.ESCAPE)
//             .pause(1000)
//
//             // 2. password failure
//             .clearValue('#user')
//             .clearValue('#password')
//             .pause(1000)
//             .setValueSlow('#user', client.globals.credentials.username)
//             .setValueSlow('#password', client.globals.credentials_wrong.password)
//             .pause(5000)
//             .click('.login-submit')
//             .waitForElementPresent('.modal-content', 5000, function() {
//                 console.log('Wrong password - login failure detected');
//             })
//             .pause(1000)
//             .keys(client.Keys.ESCAPE)
//             .pause(1000)
//             .keys(client.Keys.ESCAPE)
//             .pause(1000)
//             .keys(client.Keys.ESCAPE)
//             .pause(1000)
//             .keys(client.Keys.ESCAPE)
//             .pause(1000)
//
//             // 3. login
//             .clearValue('#user')
//             .clearValue('#password')
//             .pause(1000)
//             .setValueSlow('#user', client.globals.credentials.username)
//             .setValueSlow('#password', client.globals.credentials.password)
//             .assert.visible('.rem-checkbox')
//         //.click('.rem-checkbox')
//         //.pause(1000)
//         //.assert.elementPresent('.rem-checkbox:checked')
//             .pause(1000)
//             .saveScreenshot(screenShotPath, function() {
//                 console.log('Screenshot saved to ' + screenShotPath);
//             })
//             .pause(1000)
//             .click('.login-submit')
//             .pause(10000)
//             .assert.title(client.globals.titles[lang]['admin'], 'Login success')
//
//         // number of tabs
//         client.elements('css selector', 'ul.nav.navbar-nav li.dropdown', function (result) {
//             client.assert.equal(client.globals.tabs.number, result.value.length);
//             console.log('Expected %d tabs, found %d tabs.', client.globals.tabs.number, result.value.length);
//         });
//
//         client
//         // 4. logout
//             .pause(3000)
//             .click('.btn-group-img.btn-group .btn-sm.dropdown-toggle')
//             .assert.visible('i.fa.fa-sign-out')
//             .click('i.fa.fa-sign-out')
//             .pause(5000)
//             .assert.title(client.globals.titles[lang]['login'])
//             .waitForElementVisible('body', 5000)
//             .assert.visible('#user')
//             .assert.visible('#password')
//             .assert.visible('.login-submit')
//             .end();
//     }
// };
