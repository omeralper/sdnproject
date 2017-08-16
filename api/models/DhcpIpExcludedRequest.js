'use strict';

//Model Definition File for DhcpIpExcludedRequest.js

//var DhcpIpExcludedDTO = require('./DhcpIpExcludedDTO');
//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Yasaklanmış ip adresi (DhcpIpExcluded) verilerinin sunucuya iletilmesi için kullanılan veri yapısıdır.
*/
exports.DhcpIpExcludedRequest =  {
    type:'class',
    name:'DhcpIpExcludedRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'DhcpIpExcludedDTO', isRequired: true }
    }
}


//Mockup System for DhcpIpExcludedRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDhcpIpExcludedRequest';
var dto_name = 'DhcpIpExcludedRequest';

function DhcpIpExcludedRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDhcpIpExcludedRequestData();
    }
}

function genDhcpIpExcludedRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDhcpIpExcludedRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDhcpIpExcludedRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findDhcpIpExcludedRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDhcpIpExcludedRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDhcpIpExcludedRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveDhcpIpExcludedRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDhcpIpExcludedRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = DhcpIpExcludedRequestDataInit;
exports.genData = genDhcpIpExcludedRequestData;
exports.getData = getDhcpIpExcludedRequestData;
exports.findData = findDhcpIpExcludedRequestData;
exports.getListData = getDhcpIpExcludedRequestListData;
exports.deleteData = deleteDhcpIpExcludedRequestData;
exports.saveData = saveDhcpIpExcludedRequestData;
exports.saveListData = saveDhcpIpExcludedRequestListData;
exports.getAllData = getAllDhcpIpExcludedRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    DhcpIpExcludedRequestDataInit();
}

var overrideModule = '../overrides/DhcpIpExcludedRequest';
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



