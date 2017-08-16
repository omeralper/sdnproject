'use strict';

//Model Definition File for MvtnChangeStatusRequest.js

//var GenericRequest = require('./GenericRequest');
//var MvtnStatusDTO = require('./MvtnStatusDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Sanal ağların durumlarını değiştirmek için kullanılacak veri modelidir.
*/
exports.MvtnChangeStatusRequest =  {
    type:'class',
    name:'MvtnChangeStatusRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'MvtnStatusDTO', isRequired: true }
    }
}


//Mockup System for MvtnChangeStatusRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMvtnChangeStatusRequest';
var dto_name = 'MvtnChangeStatusRequest';

function MvtnChangeStatusRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMvtnChangeStatusRequestData();
    }
}

function genMvtnChangeStatusRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMvtnChangeStatusRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMvtnChangeStatusRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findMvtnChangeStatusRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMvtnChangeStatusRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMvtnChangeStatusRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveMvtnChangeStatusRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMvtnChangeStatusRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = MvtnChangeStatusRequestDataInit;
exports.genData = genMvtnChangeStatusRequestData;
exports.getData = getMvtnChangeStatusRequestData;
exports.findData = findMvtnChangeStatusRequestData;
exports.getListData = getMvtnChangeStatusRequestListData;
exports.deleteData = deleteMvtnChangeStatusRequestData;
exports.saveData = saveMvtnChangeStatusRequestData;
exports.saveListData = saveMvtnChangeStatusRequestListData;
exports.getAllData = getAllMvtnChangeStatusRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    MvtnChangeStatusRequestDataInit();
}

var overrideModule = '../overrides/MvtnChangeStatusRequest';
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



