var path = require('path');
var util = require('util');

module.exports = {
    'Add & modify & delete role' : function (client) {
        var lang            = client.globals.lang;
        var tab_topology    = util.format('ul.nav.navbar-nav li:nth-of-type(%d)', client.globals.tabs.tab_topology);
        var tab_user_mng    = util.format('ul.nav.navbar-nav li:nth-of-type(%d)', client.globals.tabs.tab_user_mng);

        client
            .login()

            // tab#1 network-visualization
            .assert.visible(tab_topology)
            // tab#3 user-management
            .assert.visible(tab_user_mng)
            .click(tab_user_mng)
            .pause(3000)
            .assert.visible('i.icon-shield')
            .click('i.icon-shield')
            .pause(3000)

            // first user
            .assert.visible('.portlet-title')
            .assert.visible('.portlet-body')
            .click('.portlet-title')
            .pause(1000)
            .click('i.fa.fa-plus-circle')
            .pause(3000)
            .assert.visible('.modal-content')
            .assert.visible('.form-group:nth-of-type(1)')
            .assert.visible('.form-group:nth-of-type(2)')
            .assert.visible('.ms-selectable')
            .assert.visible('.ms-selection')
            .clearValue('.form-group:nth-of-type(1) input[type="text"]')
            .clearValue('.form-group:nth-of-type(2) textarea')
            .pause(1000)

            // 1. add role
            .setValue('.form-group:nth-of-type(1) input[type="text"]', client.globals.role.name)
            .setValue('.form-group:nth-of-type(2) textarea', client.globals.role.note)
            // first possible security level
            .click('.form-group:nth-of-type(3) option[value="1"]')
            .click('.form-group:nth-of-type(3)')
            // first possible capability
            .click('.ms-selectable li:nth-of-type(2)')
            .pause(1000)
            .assert.visible('.form-actions a i.fa.fa-floppy-o')
            .pause(1000)
            .saveScreenshot(client.globals.screenshots.path + path.sep + path.basename(__filename, '.js') + '_01.png', function() {
                console.log('Screenshot saved');
            })
            .pause(1000)
            .click('.form-actions a i.fa.fa-floppy-o')
            .waitForElementPresent('#toast-container .toast.toast-success', 5000, function() {
                console.log('Role added successfully');
            })
            .pause(5000)

            // http://nightwatchjs.org/api#execute
            .execute( // runs in the browser
                client.globals.searchTableInBrowser,

                // parameters to first function
                [client.globals.role.name],

                // callback runs by the Nightwatch.js with the first function's return value
                function(result) {
                    //console.log('RESULT: ' + JSON.stringify(result));
                    var current_row_index = result.value[0];

                    this
                        // 2. modify role
                        .perform(function() {
                            console.log('Modify role #' + current_row_index);
                        })
                        .assert.visible('tr:nth-child(3) td:last-child a i.fa.fa-pencil')
                        .click('tr:nth-child(3) td:last-child a i.fa.fa-pencil')
                        .pause(2000)
                        .assert.visible('.modal-content')
                        .assert.visible('.form-group :nth-of-type(1) input[type="text"]')
                        .clearValue('.form-group :nth-of-type(1) input[type="text"]')
                        .pause(1000)
                        .setValue('.form-group:nth-of-type(1) input[type="text"]', client.globals.role.name_mod)
                        .pause(1000)
                        .assert.visible('.form-actions a i.fa.fa-floppy-o')
                        .pause(1000)
                        .saveScreenshot(client.globals.screenshots.path + path.sep + path.basename(__filename, '.js') + '_02.png', function() {
                            console.log('Screenshot saved');
                        })
                        .pause(1000)
                        .click('.form-actions a i.fa.fa-floppy-o')
                        .waitForElementPresent('#toast-container .toast.toast-success', 5000, function() {
                            console.log('Role modified successfully');
                        })
                        .pause(5000)
                }
            )
            .pause(5000)

            .execute( // runs in the browser
                client.globals.searchTableInBrowser,

                // parameters to first function
                [client.globals.role.name_mod],

                // callback runs by the Nightwatch.js with the first function's return value
                function(result) {
                    //console.log('RESULT: ' + JSON.stringify(result));
                    var current_row_index = result.value[0];

                    this
                        // 3. delete role
                        .perform(function() {
                            console.log('Delete role #' + current_row_index);
                        })
                        .assert.visible('tr:nth-of-type(' + current_row_index + ') td:last-child a i.fa.fa-trash-o')
                        .click('tr:nth-of-type(' + current_row_index + ') td:last-child a i.fa.fa-trash-o')
                        .pause(1000)
                        .assert.visible('i.fa.fa-thumbs-up')
                        .click('i.fa.fa-thumbs-up')
                        .waitForElementVisible('#toast-container .toast.toast-success', 5000, function() {
                            console.log('Role deleted successfully');
                        })
                        .pause(5000)
                }
            )
            .pause(5000)

            .logout()

            .end();
    }
};
