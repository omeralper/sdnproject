'use strict';

//Model Definition File for DhcpIpPoolRequest.js

//var DhcpIpPoolDTO = require('./DhcpIpPoolDTO');
//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Dhcp kapsamı (DhcpIpPool) verilerinin sunucuya iletilmesi için kullanılan veri yapısıdır.
*/
exports.DhcpIpPoolRequest =  {
    type:'class',
    name:'DhcpIpPoolRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'DhcpIpPoolDTO', isRequired: true }
    }
}


//Mockup System for DhcpIpPoolRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDhcpIpPoolRequest';
var dto_name = 'DhcpIpPoolRequest';

function DhcpIpPoolRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDhcpIpPoolRequestData();
    }
}

function genDhcpIpPoolRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDhcpIpPoolRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDhcpIpPoolRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findDhcpIpPoolRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDhcpIpPoolRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDhcpIpPoolRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveDhcpIpPoolRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDhcpIpPoolRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = DhcpIpPoolRequestDataInit;
exports.genData = genDhcpIpPoolRequestData;
exports.getData = getDhcpIpPoolRequestData;
exports.findData = findDhcpIpPoolRequestData;
exports.getListData = getDhcpIpPoolRequestListData;
exports.deleteData = deleteDhcpIpPoolRequestData;
exports.saveData = saveDhcpIpPoolRequestData;
exports.saveListData = saveDhcpIpPoolRequestListData;
exports.getAllData = getAllDhcpIpPoolRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    DhcpIpPoolRequestDataInit();
}

var overrideModule = '../overrides/DhcpIpPoolRequest';
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



