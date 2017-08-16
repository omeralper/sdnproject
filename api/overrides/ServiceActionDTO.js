/**
 * Created by yildirayme on 24.12.2016.
 */
//Override Data File for ServiceActionDTO.js

exports.init = function(mockup_exports){

    var mockup = require('../helpers/mockup');
    var extend = require('extend');

    var serviceClassMcok = require('../models/ServicePolicyClassDTO');

    var old_genData = mockup_exports.genData;
    var genData = function genData(overrides) {
        return old_genData(extend({},{
            policyName : "Hizmet Kalitesi #"+mockup.genRandom(1,100),
            maxBandwidth : 100 * mockup.genRandom(1,10),
            servicePolicyClass: serviceClassMcok.genData(),
            includedDevices:[],
            excludedDevices:[]
        },overrides));
    }
    mockup_exports.genData = genData;

    for (var i=0;i<27;i++) {
        mockup_exports.saveData(genData());
    }
};