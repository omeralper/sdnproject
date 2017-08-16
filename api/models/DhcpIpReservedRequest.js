'use strict';

//Model Definition File for DhcpIpReservedRequest.js

//var DhcpIpReservedDTO = require('./DhcpIpReservedDTO');
//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Ayrılmış ip adresi (ipReserved) verilerinin sunucuya iletilmesi için kullanılan veri yapısıdır.
*/
exports.DhcpIpReservedRequest =  {
    type:'class',
    name:'DhcpIpReservedRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'DhcpIpReservedDTO', isRequired: true }
    }
}


//Mockup System for DhcpIpReservedRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDhcpIpReservedRequest';
var dto_name = 'DhcpIpReservedRequest';

function DhcpIpReservedRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDhcpIpReservedRequestData();
    }
}

function genDhcpIpReservedRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDhcpIpReservedRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDhcpIpReservedRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findDhcpIpReservedRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDhcpIpReservedRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDhcpIpReservedRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveDhcpIpReservedRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDhcpIpReservedRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = DhcpIpReservedRequestDataInit;
exports.genData = genDhcpIpReservedRequestData;
exports.getData = getDhcpIpReservedRequestData;
exports.findData = findDhcpIpReservedRequestData;
exports.getListData = getDhcpIpReservedRequestListData;
exports.deleteData = deleteDhcpIpReservedRequestData;
exports.saveData = saveDhcpIpReservedRequestData;
exports.saveListData = saveDhcpIpReservedRequestListData;
exports.getAllData = getAllDhcpIpReservedRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    DhcpIpReservedRequestDataInit();
}

var overrideModule = '../overrides/DhcpIpReservedRequest';
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



