/**
 * Created by omeroz on 01.11.2016.
 */

var path = require('path');
var util = require('util');

module.exports = {
    'Add & modify & delete role' : function (client) {
        var url = client.globals.baseUrl + client.globals.paths.NacUserListPage;

        client
            .login()
            .url(url)
            .waitForElementVisible('#toolsButton',10000)
            //pdf
            .click('#toolsButton i')
            .pause(100)
            .waitForElementVisible('.fa-file-pdf-o',3000)
            .click('.fa-file-pdf-o')
            .pause(1000)

            //excel
            .click('#toolsButton i')
            .pause(100)
            .waitForElementVisible('.fa-file-excel-o',3000)
            .click('.fa-file-excel-o')

            //print
            .click('#toolsButton i')
            .waitForElementVisible('.fa-print',3000)
            .click('.fa-print')
            .pause(3000)
            .window_handles(function(result) {
                var handle = result.value[1];
                client.switchWindow(handle);
            })
            .waitForElementVisible(".print",5000)
            .click(".cancel")

            // .window_handles(function(result) {
            //     var handle = result.value[0];
            //     client.switchWindow(handle);
            // })
            .end();
    }
};

