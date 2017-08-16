'use strict';

//Model Definition File for MvtnEditChangeRequest.js

//var GenericRequest = require('./GenericRequest');
//var MvtnEditStatusDTO = require('./MvtnEditStatusDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Sanal ağ taleplerinin statülerini değiştirecek isteklerin veri modelidir.
*/
exports.MvtnEditChangeRequest =  {
    type:'class',
    name:'MvtnEditChangeRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'MvtnEditStatusDTO', isRequired: true }
    }
}


//Mockup System for MvtnEditChangeRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMvtnEditChangeRequest';
var dto_name = 'MvtnEditChangeRequest';

function MvtnEditChangeRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMvtnEditChangeRequestData();
    }
}

function genMvtnEditChangeRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMvtnEditChangeRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMvtnEditChangeRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findMvtnEditChangeRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMvtnEditChangeRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMvtnEditChangeRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveMvtnEditChangeRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMvtnEditChangeRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = MvtnEditChangeRequestDataInit;
exports.genData = genMvtnEditChangeRequestData;
exports.getData = getMvtnEditChangeRequestData;
exports.findData = findMvtnEditChangeRequestData;
exports.getListData = getMvtnEditChangeRequestListData;
exports.deleteData = deleteMvtnEditChangeRequestData;
exports.saveData = saveMvtnEditChangeRequestData;
exports.saveListData = saveMvtnEditChangeRequestListData;
exports.getAllData = getAllMvtnEditChangeRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    MvtnEditChangeRequestDataInit();
}

var overrideModule = '../overrides/MvtnEditChangeRequest';
try {
    var override = require(overrideModule);

    if (override && override.init) {
        console.info('DTO Override found :'+overrideModule);
        mockup.initDatabase(data_key,override.process_options);
        override.init(exports);
    } else {
        autoInit();
    }

} catch (e) {
    if (e.code == 'MODULE_NOT_FOUND') {
        console.warn('DTO Override NOT found :'+overrideModule);
        autoInit();
    } else {
        throw e;
    }
}



