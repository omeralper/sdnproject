/**
 * Created by omeroz on 4/11/2017.
 */

exports.init = function(mockup_exports){

    var mockup = require('../helpers/mockup');
    var extend = require('extend');
    var virtualNetFunctionDTOMockup = require('../models/VirtualNetFunctionDTO');

    var old_genData = mockup_exports.genData;
    var genData = function genData(overrides) {
        return old_genData(extend({},{
            vnfdSumamryList: virtualNetFunctionDTOMockup.getAllData()
        },overrides));
    }
    mockup_exports.genData = genData;

    for (var i=0;i<10;i++) {
        mockup_exports.saveData(genData());
    }
};