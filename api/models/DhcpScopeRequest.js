'use strict';

//Model Definition File for DhcpScopeRequest.js

//var DhcpScopeDTO = require('./DhcpScopeDTO');
//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Dhcp kapsamı (DhcpScope) verilerinin sunucuya iletilmesi için kullanılan veri yapısıdır.
*/
exports.DhcpScopeRequest =  {
    type:'class',
    name:'DhcpScopeRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'DhcpScopeDTO', isRequired: true }
    }
}


//Mockup System for DhcpScopeRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDhcpScopeRequest';
var dto_name = 'DhcpScopeRequest';

function DhcpScopeRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDhcpScopeRequestData();
    }
}

function genDhcpScopeRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDhcpScopeRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDhcpScopeRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findDhcpScopeRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDhcpScopeRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDhcpScopeRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveDhcpScopeRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDhcpScopeRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = DhcpScopeRequestDataInit;
exports.genData = genDhcpScopeRequestData;
exports.getData = getDhcpScopeRequestData;
exports.findData = findDhcpScopeRequestData;
exports.getListData = getDhcpScopeRequestListData;
exports.deleteData = deleteDhcpScopeRequestData;
exports.saveData = saveDhcpScopeRequestData;
exports.saveListData = saveDhcpScopeRequestListData;
exports.getAllData = getAllDhcpScopeRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    DhcpScopeRequestDataInit();
}

var overrideModule = '../overrides/DhcpScopeRequest';
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



