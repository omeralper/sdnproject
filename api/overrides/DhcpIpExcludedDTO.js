/**
 * Created by omeroz on 1/19/2017.
 */
exports.init = function(mockup_exports){

    // var mockupHelper = require('../helpers/mockup');
    // var extend = require('extend');
    //
    // var old_genData = mockup_exports.genData;
    // var genData = function genData(overrides) {
    //     return old_genData(extend({},{
    //         profileName : "Erişim K. Politika #"+mockupHelper.genRandom(1,100)
    //     },overrides));
    // }
    // mockup_exports.genData = genData;
    //
    // for (var i=0;i<27;i++) {
    //     mockup_exports.saveData(genData());
    // }

    mockup_exports.add = mockup_exports.save;
    mockup_exports.init();
};