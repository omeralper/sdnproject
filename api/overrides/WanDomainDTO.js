/**
 * Created by omeroz on 10/22/2017.
 */
'use strict';

exports.process_options = {
    //exclude_list: ['password']
};

exports.init = function (mockup_exports) {

    var mockupHelper = require('../helpers/mockup');


    mockup_exports.current = function(val){
        var response;
        val.data = mockupHelper.genDTO('WanDomainDTO', {});
        response = mockupHelper.genResponse(val.data);
        return response;
    }
};
