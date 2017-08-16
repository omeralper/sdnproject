'use strict';

//Model Definition File for AAAServerRequest.js

//var AAAServerDTO = require('./AAAServerDTO');
//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* AAA sunucu verilerinin sunucuya iletilmesi için kullanılan veri yapısı.
*/
exports.AAAServerRequest =  {
    type:'class',
    name:'AAAServerRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'AAAServerDTO', isRequired: true }
    }
}


//Mockup System for AAAServerRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDAAAServerRequest';
var dto_name = 'AAAServerRequest';

function AAAServerRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genAAAServerRequestData();
    }
}

function genAAAServerRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getAAAServerRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getAAAServerRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findAAAServerRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteAAAServerRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveAAAServerRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveAAAServerRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllAAAServerRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = AAAServerRequestDataInit;
exports.genData = genAAAServerRequestData;
exports.getData = getAAAServerRequestData;
exports.findData = findAAAServerRequestData;
exports.getListData = getAAAServerRequestListData;
exports.deleteData = deleteAAAServerRequestData;
exports.saveData = saveAAAServerRequestData;
exports.saveListData = saveAAAServerRequestListData;
exports.getAllData = getAllAAAServerRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    AAAServerRequestDataInit();
}

var overrideModule = '../overrides/AAAServerRequest';
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



