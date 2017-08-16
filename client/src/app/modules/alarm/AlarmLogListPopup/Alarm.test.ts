// /**
//  * Created by omeroz on 02.11.2016.
//  */
// /// <reference path="../../../../typings/tsd.d.ts" />
//
// var path = require('path');
// var util = require('util');
//
// module.exports = {
//     'Alarm Test' : function (client) {
//         var url = client.globals.baseUrl + client.globals.paths.AlarmListPage;
//
//         client
//             .login()
//             .url(url)
//             .waitForElementPresent('.portlet-body',3000)
//             .pause(1000)
//             .assert.visible('td .fa.fa-list-alt:nth-of-type(1)')
//             .click('td .fa.fa-list-alt:nth-of-type(1)')
//             .pause(1000)
//             .assert.visible('.modal-content')
//             .end();
//     }
// };
