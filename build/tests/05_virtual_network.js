var path = require('path');
var util = require('util');

module.exports = {
    'Show virtual network' : function (client) {
        var lang            = client.globals.lang;
        var tab_topology    = util.format('ul.nav.navbar-nav li:nth-of-type(%d)', client.globals.tabs.tab_topology);

        client
            .login()

            // tab for network-visualization
            .assert.visible(tab_topology)
            .click(tab_topology)
            .assert.visible('i.fa.fa-share-alt-square')
            .click('i.fa.fa-share-alt-square', function() {
                console.log('Virtual network list opened');
            })
            .pause(1000)
            .assert.elementPresent('i.fa.fa-share-alt-square.font-dark', 'Icon for virtual network list is visible')
            .pause(3000)
            .saveScreenshot(client.globals.screenshots.path + path.sep + path.basename(__filename, '.js') + '.png', function() {
                console.log('Screenshot saved');
            })
            .pause(5000)

            .logout()

            .end();
    }
};
