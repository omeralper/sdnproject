'use strict';

//Model Definition File for DhcpIpReservedUserRequest.js

//var DhcpIpReservedUserDTO = require('./DhcpIpReservedUserDTO');
//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Ayrılmış ip adresi (ipReservedUser) verilerinin sunucuya iletilmesi için kullanılan veri yapısıdır.
*/
exports.DhcpIpReservedUserRequest =  {
    type:'class',
    name:'DhcpIpReservedUserRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'DhcpIpReservedUserDTO', isRequired: true }
    }
}


//Mockup System for DhcpIpReservedUserRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDhcpIpReservedUserRequest';
var dto_name = 'DhcpIpReservedUserRequest';

function DhcpIpReservedUserRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDhcpIpReservedUserRequestData();
    }
}

function genDhcpIpReservedUserRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDhcpIpReservedUserRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDhcpIpReservedUserRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findDhcpIpReservedUserRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDhcpIpReservedUserRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDhcpIpReservedUserRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveDhcpIpReservedUserRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDhcpIpReservedUserRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = DhcpIpReservedUserRequestDataInit;
exports.genData = genDhcpIpReservedUserRequestData;
exports.getData = getDhcpIpReservedUserRequestData;
exports.findData = findDhcpIpReservedUserRequestData;
exports.getListData = getDhcpIpReservedUserRequestListData;
exports.deleteData = deleteDhcpIpReservedUserRequestData;
exports.saveData = saveDhcpIpReservedUserRequestData;
exports.saveListData = saveDhcpIpReservedUserRequestListData;
exports.getAllData = getAllDhcpIpReservedUserRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    DhcpIpReservedUserRequestDataInit();
}

var overrideModule = '../overrides/DhcpIpReservedUserRequest';
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



