'use strict';

//Model Definition File for MvtnCreateRequest.js

//var GenericRequest = require('./GenericRequest');
//var MvtnRequestDTO = require('./MvtnRequestDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Sanal ağ oluşturma ve güncelleme talepleri için kullanılacak veri modelidir.
*/
exports.MvtnCreateRequest =  {
    type:'class',
    name:'MvtnCreateRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'MvtnRequestDTO', isRequired: true }
    }
}


//Mockup System for MvtnCreateRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMvtnCreateRequest';
var dto_name = 'MvtnCreateRequest';

function MvtnCreateRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMvtnCreateRequestData();
    }
}

function genMvtnCreateRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMvtnCreateRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMvtnCreateRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findMvtnCreateRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMvtnCreateRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMvtnCreateRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveMvtnCreateRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMvtnCreateRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = MvtnCreateRequestDataInit;
exports.genData = genMvtnCreateRequestData;
exports.getData = getMvtnCreateRequestData;
exports.findData = findMvtnCreateRequestData;
exports.getListData = getMvtnCreateRequestListData;
exports.deleteData = deleteMvtnCreateRequestData;
exports.saveData = saveMvtnCreateRequestData;
exports.saveListData = saveMvtnCreateRequestListData;
exports.getAllData = getAllMvtnCreateRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    MvtnCreateRequestDataInit();
}

var overrideModule = '../overrides/MvtnCreateRequest';
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



