/**
 * Created by omeroz on 26.07.2016.
 */
var path = require('path');
var util = require('util');

module.exports = {
    'Add & modify & delete role' : function (client) {
        var lang            = client.globals.lang;
        var tab_user_mng    = util.format('ul.nav.navbar-nav li:nth-of-type(%d)', client.globals.tabs.tab_user_mng);

        client
            .login()

            // tab for user-management
            .assert.visible(tab_user_mng)
            .click(tab_user_mng)
            .pause(3000)
            .assert.visible('i.icon-user')
            .click('i.icon-user')
            .pause(3000)

            .click('.btn-group i.icon-wrench')
            .pause(1000)
            .assert.visible('.btn-group i.fa-print')
            .pause(500)
            .assert.visible('.btn-group i.fa-file-pdf-o')
            .pause(500)
            .assert.visible('.btn-group i.fa-file-excel-o')
            .pause(3000)
            .saveScreenshot(client.globals.screenshots.path + path.sep + path.basename(__filename, '.js') + '.png', function() {
                console.log('Screenshot saved');
            })
            .pause(5000)

            .logout()

            .end();
    }
};

