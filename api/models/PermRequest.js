'use strict';

//Model Definition File for PermRequest.js

//var GenericRequest = require('./GenericRequest');
//var PermDTO = require('./PermDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Yetki verilerinin sunucuya iletilmesi için kullanılan veri yapısı.
*/
exports.PermRequest =  {
    type:'class',
    name:'PermRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'PermDTO', isRequired: true }
    }
}


//Mockup System for PermRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDPermRequest';
var dto_name = 'PermRequest';

function PermRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genPermRequestData();
    }
}

function genPermRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getPermRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getPermRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findPermRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deletePermRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function savePermRequestData(data) {
    return mockup.saveData(data_key, data);
}

function savePermRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllPermRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = PermRequestDataInit;
exports.genData = genPermRequestData;
exports.getData = getPermRequestData;
exports.findData = findPermRequestData;
exports.getListData = getPermRequestListData;
exports.deleteData = deletePermRequestData;
exports.saveData = savePermRequestData;
exports.saveListData = savePermRequestListData;
exports.getAllData = getAllPermRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    PermRequestDataInit();
}

var overrideModule = '../overrides/PermRequest';
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



