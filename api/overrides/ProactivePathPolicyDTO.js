/**
 * Created by yildirayme on 24.12.2016.
 */
//Override Data File for ProactivePathPolicyDTO.js

exports.init = function(mockup_exports){

    var mockup = require('../helpers/mockup');
    var extend = require('extend');

    var old_genData = mockup_exports.genData;
    var genData = function genData(overrides) {
        return old_genData(extend({},{
            name : "Önetkin P. Politika #"+mockup.genRandom(1,100),
            fromId : mockup.genMAC(),
            toId : mockup.genMAC()
        },overrides));
    }
    mockup_exports.genData = genData;

    for (var i=0;i<27;i++) {
        mockup_exports.saveData(genData());
    }
};