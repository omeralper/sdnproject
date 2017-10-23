// /**
//  * Created by omeroz on 02.11.2016.
//  */
//
// var path = require('path');
// var util = require('util');
//
// module.exports = {
//     'Access Control Policiy Test' : function (client) {
//         var url = client.globals.baseUrl + client.globals.paths.AccessControlPage;
//
//         client
//             .login()
//             .url(url)
//             .waitForElementPresent('.portlet-body',3000)
//             .click('i.fa.fa-plus-circle')
//             .pause(3000)
//             .assert.visible('.modal-content')
//             .assert.visible('#profileName')
//             .assert.visible('#select2-button-included-nacs')
//             .pause(1000)
//
//             // 1. add policy
//             .setValueSlow('#profileName', client.globals.accessControlPolicy.policyName)
//             .click(".select2-container")
//             .pause(300)
//             .click(".select2-results__options li:nth-of-type(1)")
//             .pause(300)
//             .click('#addRule')
//             .pause(500)
//             .click('#selectBox option:nth-of-type(1)')
//             .pause(500)
//             .assert.visible('#policyForm')
//             .assert.visible('#packetHeaderCriteriaMacSource')
//             .assert.visible('#packetHeaderCriteriaMacDest')
//             .assert.visible('#packetHeaderCriteriaIPSource')
//             .assert.visible('#packetHeaderCriteriaIPDest')
//             .assert.visible('#portRangeSource')
//             .assert.visible('#portRangeDest')
//
//             .pause(1000)
//             .setValueSlow('#packetHeaderCriteriaMacSource', client.globals.accessControlPolicy.packetHeaderCriteriaMacSource)
//             .setValueSlow('#packetHeaderCriteriaMacDest', client.globals.accessControlPolicy.packetHeaderCriteriaMacDest)
//             .setValueSlow('#packetHeaderCriteriaIPSource', client.globals.accessControlPolicy.packetHeaderCriteriaIPSource)
//             .setValueSlow('#packetHeaderCriteriaIPDest', client.globals.accessControlPolicy.packetHeaderCriteriaIPDest)
//             .setValueSlow('#portRangeSource', client.globals.accessControlPolicy.portRangeSource)
//             .setValueSlow('#portRangeDest', client.globals.accessControlPolicy.portRangeDest)
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
//             // 2. modify policy
//             .assert.visible('td .fa.fa-pencil:nth-of-type(1)')
//             .click('td .fa.fa-pencil:nth-of-type(1)')
//             .pause(1000)
//             .assert.visible('.modal-content')
//             .pause(1000)
//             .click('#select2-all')
//             .pause(1000)
//             .assert.visible('.form-actions a i.fa.fa-floppy-o')
//             .click('.form-actions a i.fa.fa-floppy-o')
//             .waitForElementPresent('#toast-container .toast.toast-success', 5000, function() {
//                 console.log('User modified successfully');
//             })
//             .pause(2000)
//
//             // 3. delete policy
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
