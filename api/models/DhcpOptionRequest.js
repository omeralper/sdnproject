'use strict';

//Model Definition File for DhcpOptionRequest.js

//var DhcpOptionDTO = require('./DhcpOptionDTO');
//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* DhcpOption verilerinin sunucuya iletilmesi için kullanılan veri yapısıdır.
*/
exports.DhcpOptionRequest =  {
    type:'class',
    name:'DhcpOptionRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'DhcpOptionDTO', isRequired: true }
    }
}


//Mockup System for DhcpOptionRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDhcpOptionRequest';
var dto_name = 'DhcpOptionRequest';

function DhcpOptionRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDhcpOptionRequestData();
    }
}

function genDhcpOptionRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDhcpOptionRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDhcpOptionRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findDhcpOptionRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDhcpOptionRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDhcpOptionRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveDhcpOptionRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDhcpOptionRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = DhcpOptionRequestDataInit;
exports.genData = genDhcpOptionRequestData;
exports.getData = getDhcpOptionRequestData;
exports.findData = findDhcpOptionRequestData;
exports.getListData = getDhcpOptionRequestListData;
exports.deleteData = deleteDhcpOptionRequestData;
exports.saveData = saveDhcpOptionRequestData;
exports.saveListData = saveDhcpOptionRequestListData;
exports.getAllData = getAllDhcpOptionRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    DhcpOptionRequestDataInit();
}

var overrideModule = '../overrides/DhcpOptionRequest';
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



