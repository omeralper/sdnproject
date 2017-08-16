'use strict';

//Model Definition File for VirtualCPERequest.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');
//var VirtualCPEDTO = require('./VirtualCPEDTO');

'use strict';
/**
* Sanal CPE verilerinin sunucuya iletilmesi için kullanılan veri yapısı.
*/
exports.VirtualCPERequest =  {
    type:'class',
    name:'VirtualCPERequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'VirtualCPEDTO', isRequired: true }
    }
}


//Mockup System for VirtualCPERequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVirtualCPERequest';
var dto_name = 'VirtualCPERequest';

function VirtualCPERequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVirtualCPERequestData();
    }
}

function genVirtualCPERequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVirtualCPERequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVirtualCPERequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findVirtualCPERequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVirtualCPERequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVirtualCPERequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveVirtualCPERequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVirtualCPERequestData() {
    return mockup.getAllData(data_key);
}

exports.init = VirtualCPERequestDataInit;
exports.genData = genVirtualCPERequestData;
exports.getData = getVirtualCPERequestData;
exports.findData = findVirtualCPERequestData;
exports.getListData = getVirtualCPERequestListData;
exports.deleteData = deleteVirtualCPERequestData;
exports.saveData = saveVirtualCPERequestData;
exports.saveListData = saveVirtualCPERequestListData;
exports.getAllData = getAllVirtualCPERequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    VirtualCPERequestDataInit();
}

var overrideModule = '../overrides/VirtualCPERequest';
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



