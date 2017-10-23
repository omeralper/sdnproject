// /**
//  * Created by yildirayme on 01.11.2016.
//  */
// var path = require('path');
// var util = require('util');
// var roleTests = require('../RoleEditPopup/Role.test.ts');
// var userTests = require('../UserEditPopup/User.test.ts');
//
// var testRole = {
//     name: 'MLAT-1657-Test',
//         note: 'MLAT-1657-Test Role',
//         perms: [
//         'Kullanıcı Listele',
//         'Kullanıcı Görüntüle',
//         'Kullanıcı Düzenle',
//         'Kullanıcı Sil',
//         'Kullanıcı Ekle',
//         'Şifre Değiştir',
//         'Şifre Tanımla',
//         'Şifre Hatırlat'
//     ]
// };
//
// var testUser = {
//     username: 'MLAT1657@Test',
//         password: 'MLAT1657@Test',
//         name: 'MLAT',
//         surname: '1657',
//         email: 'MLAT1657@test.com',
//         notes: 'MLAT-1657-Test User',
//         roles: [
//         'MLAT-1657-Test'
//     ]
// };
//
// module.exports = {
//     '@tags': ['MLAT-1657'],
//     isLoggedIn: false,
//
//     before : function(client) {
//         console.log('Setting up...');
//         client.login();
//         this.isLoggedIn = true;
//     },
//
//     after : (client)=> {
//         console.log('Closing down...');
//         client
//             .logout()
//             .end();
//     },
//
//     'Create Test Role': function(client) {
//         roleTests['Load Role List'](client);
//
//         roleTests['Add Role'](client, testRole);
//
//         client.pause(1000);
//     },
//
//     'Create Test User': function(client)  {
//         userTests['Load User List'](client);
//
//         userTests['Add User'](client, testUser);
//
//         client.pause(1000);
//
//     },
//
//     'Login as Test User': function(client){
//
//         client.logout();
//         client.login(testUser);
//         client.pause(1000);
//     },
//
//     'Check Test User Role List Not Present': function(client){
//         userTests['Load User List'](client);
//
//         //check if role list is shown
//         client
//             .useXpath()
//             .waitForElementPresent("//table[contains(@class, 'data-table')]//td[text()='"+testUser.username+"']",4000)
//             .assert.visible("//table[contains(@class, 'data-table')]//td[text()='"+testUser.username+"']/following-sibling::td[last()]/a[@data-action='0']")
//             .click("//table[contains(@class, 'data-table')]//td[text()='"+testUser.username+"']/following-sibling::td[last()]/a[@data-action='0']")
//             .pause(1000)
//             .useCss()
//             .assert.visible('.modal-content')
//             .assert.visible('.form-group:nth-of-type(1)')
//             .assert.elementNotPresent('.select#js_role_list')
//             .pause(500)
//             .assert.visible('.form-actions a i.fa.fa-ban')
//             .click('.form-actions a i.fa.fa-ban')
//             .pause(1000);
//
//     },
//
//     'Cleanup Test User & Role': function(client){
//
//         client
//             .logout()
//             .login()
//             .pause(1000);
//         userTests['Load User List'](client);
//         client.pause(1000);
//         userTests['Delete User'](client,testUser);
//         roleTests['Load Role List'](client);
//         client.pause(1000);
//         roleTests['Delete Role'](client, testRole);
//         client.pause(1000);
//     }
// };
