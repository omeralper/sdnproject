var path = require('path');
var util = require('util');

module.exports = {
    'Add & modify & delete user' : function (client) {
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
            .assert.visible('i.icon-user')
            .click('i.icon-user')
            .pause(3000)

            // first user
            .assert.visible('.portlet-title')
            .assert.visible('.portlet-body')
            .click('.portlet-title')
            .pause(1000)
            .perform(function(client, done) {
                console.log('Add user');
                done();
            })
            .click('i.fa.fa-plus-circle')
            .pause(3000)
            .assert.visible('.modal-content')
            .assert.visible('.form-group:nth-of-type(2)')
            .assert.visible('.ms-selectable')
            .assert.visible('.ms-selection')

            .clearValue('.form-group:nth-of-type(1) input[type="text"]')
            .clearValue('.form-group:nth-of-type(2) input[type="password"]')
            .clearValue('.form-group:nth-of-type(3) input[type="password"]')
            .clearValue('.form-group:nth-of-type(3) input[type="text"]')
            .clearValue('.form-group:nth-of-type(4) input[type="text"]')
            .clearValue('.form-group:nth-of-type(5) input[type="email"]')
            .clearValue('.form-group:nth-of-type(6) textarea')
            .pause(1000)

            // 1. add user
            .setValue('.form-group:nth-of-type(1) input[type="text"]', client.globals.user.username)
            .setValue('.form-group:nth-of-type(2) input[type="password"]', client.globals.user.password)
            .setValue('.form-group:nth-of-type(3) input[type="password"]', client.globals.user.password)
            .setValue('.form-group:nth-of-type(3) input[type="text"]', client.globals.user.name)
            .setValue('.form-group:nth-of-type(4) input[type="text"]', client.globals.user.surname)
            .setValue('.form-group:nth-of-type(5) input[type="email"]', client.globals.user.email)
            .setValue('.form-group:nth-of-type(6) textarea', client.globals.user.note)

            // select role
            .moveToElement('.form-group:nth-of-type(7) .ms-selectable ul li[data-index="0"]', 1, 1, function() {
                console.log('Scrolled down to the role');
            })
            .pause(1000)
            .element('css selector', '.form-group:nth-of-type(7) .ms-selectable ul li[data-index="0"]', function(result) {
                if ((result.state === 'success') && (result.status === 0)) {
                    console.log('Role identified successfully');
                }
            })
            .assert.visible('.form-group:nth-of-type(7) .ms-selectable ul li[data-index="0"]')
            .pause(1000)
            .click('.form-group:nth-of-type(7) .ms-selectable ul li[data-index="0"]')

            .pause(1000)
            .assert.visible('.form-actions a i.fa.fa-floppy-o')
            .pause(1000)
            .saveScreenshot(client.globals.screenshots.path + path.sep + path.basename(__filename, '.js') + '_01.png', function() {
                console.log('Screenshot saved');
            })
            .pause(1000)
            .click('.form-actions a i.fa.fa-floppy-o')
            .waitForElementVisible('#toast-container .toast.toast-success', 5000, function() {
                console.log('User added successfully');
            })
            .pause(5000)

            // http://nightwatchjs.org/api#execute
            .execute( // runs in the browser
                client.globals.searchTableInBrowser,

                // parameters to first function
                [client.globals.user.username],

                // callback runs by the Nightwatch.js with the first function's return value
                function(result) {
                    //console.log('RESULT: ' + JSON.stringify(result));
                    var current_row_index = result.value[0];

                    this
                        // 2. modify user
                        .perform(function() {
                            console.log('Modify user #' + current_row_index);
                        })
                        .click('.portlet-title')
                        .pause(1000)
                        .assert.visible('tr:nth-of-type(' + current_row_index + ') td:last-child a i.fa.fa-pencil')
                        .click('tr:nth-of-type(' + current_row_index + ') td:last-child a i.fa.fa-pencil')
                        .pause(2000)
                        .assert.visible('.modal-content')
                        .assert.visible('.form-group:nth-of-type(3) input[type="text"]')
                        .clearValue('.form-group:nth-of-type(3) input[type="text"]')
                        .pause(1000)
                        .setValue('.form-group:nth-of-type(3) input[type="text"]', client.globals.user.name_mod)
                        .pause(2000)
                        .assert.visible('.form-actions a i.fa.fa-floppy-o')
                        .pause(1000)
                        .saveScreenshot(client.globals.screenshots.path + path.sep + path.basename(__filename, '.js') + '_02.png', function() {
                            console.log('Screenshot saved');
                        })
                        .pause(1000)
                        .click('.form-actions a i.fa.fa-floppy-o')
                        .waitForElementVisible('#toast-container .toast.toast-success', 5000, function() {
                            console.log('User modified successfully');
                        })
                        .pause(5000)
                }
            )
            .pause(5000)

            .execute( // runs in the browser
                client.globals.searchTableInBrowser,

                // parameters to first function
                [client.globals.user.username],

                // callback runs by the Nightwatch.js with the first function's return value
                function(result) {
                    //console.log('RESULT: ' + JSON.stringify(result));
                    var current_row_index = result.value[0];

                    this
                        // 3. change password
                        .perform(function() {
                            console.log('Change password of user #' + current_row_index);
                        })
                        .click('.portlet-title')
                        .pause(1000)
                        .assert.visible('tr:nth-of-type(' + current_row_index + ') td:last-child a i.fa.fa-key')
                        .click('tr:nth-of-type(' + current_row_index + ') td:last-child a i.fa.fa-key')
                        .pause(2000)
                        .assert.visible('.modal-content')
                        .assert.visible('.form-group:nth-of-type(2)')
                        .assert.visible('.form-group:nth-of-type(3)')
                        .clearValue('.form-group input[type=password]')
                        .pause(2000)
                        .setValue('.form-group:nth-of-type(2) input[type="password"]', client.globals.user.password_mod)
                        .setValue('.form-group:nth-of-type(3) input[type="password"]', client.globals.user.password_mod)
                        .pause(2000)
                        .assert.visible('.form-actions a i.fa.fa-floppy-o')
                        .pause(1000)
                        .saveScreenshot(client.globals.screenshots.path + path.sep + path.basename(__filename, '.js') + '_03.png', function() {
                            console.log('Screenshot saved');
                        })
                        .pause(1000)
                        .click('.form-actions a i.fa.fa-floppy-o')
                        .waitForElementPresent('#toast-container .toast.toast-success', 5000, function() {
                            console.log('Password modified successfully');
                        })
                        .pause(5000)
                }
            )
            .pause(5000)

            .execute( // runs in the browser
                client.globals.searchTableInBrowser,

                // parameters to first function
                [client.globals.user.username],

                // callback runs by the Nightwatch.js with the first function's return value
                function(result) {
                    //console.log('RESULT: ' + JSON.stringify(result));
                    var current_row_index = result.value[0];

                    this
                        // 4. delete user
                        .perform(function() {
                            console.log('Delete user #' + current_row_index);
                        })
                        .click('.portlet-title')
                        .pause(1000)
                        .assert.visible('tr:nth-of-type(' + current_row_index + ') td:last-child a i.fa.fa-trash-o')
                        .click('tr:nth-of-type(' + current_row_index + ') td:last-child a i.fa.fa-trash-o')
                        .pause(1000)
                        .assert.visible('i.fa.fa-thumbs-up')
                        .click('i.fa.fa-thumbs-up')
                        .waitForElementVisible('#toast-container .toast.toast-success', 5000, function() {
                            console.log('User deleted successfully');
                        })
                        .pause(5000)
                }
            )
            .pause(5000)

            .logout()

            .end();
    }
};
