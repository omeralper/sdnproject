'use strict';

//Model Definition File for DhcpIpRangeRequest.js

//var DhcpIpRangeDTO = require('./DhcpIpRangeDTO');
//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Dhcp ip menzili (DhcpIpRange) verilerinin sunucuya iletilmesi için kullanılan veri yapısıdır.
*/
exports.DhcpIpRangeRequest =  {
    type:'class',
    name:'DhcpIpRangeRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'DhcpIpRangeDTO', isRequired: true }
    }
}


//Mockup System for DhcpIpRangeRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDhcpIpRangeRequest';
var dto_name = 'DhcpIpRangeRequest';

function DhcpIpRangeRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDhcpIpRangeRequestData();
    }
}

function genDhcpIpRangeRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDhcpIpRangeRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDhcpIpRangeRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findDhcpIpRangeRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDhcpIpRangeRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDhcpIpRangeRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveDhcpIpRangeRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDhcpIpRangeRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = DhcpIpRangeRequestDataInit;
exports.genData = genDhcpIpRangeRequestData;
exports.getData = getDhcpIpRangeRequestData;
exports.findData = findDhcpIpRangeRequestData;
exports.getListData = getDhcpIpRangeRequestListData;
exports.deleteData = deleteDhcpIpRangeRequestData;
exports.saveData = saveDhcpIpRangeRequestData;
exports.saveListData = saveDhcpIpRangeRequestListData;
exports.getAllData = getAllDhcpIpRangeRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    DhcpIpRangeRequestDataInit();
}

var overrideModule = '../overrides/DhcpIpRangeRequest';
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



