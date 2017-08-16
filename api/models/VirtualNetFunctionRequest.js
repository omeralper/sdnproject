'use strict';

//Model Definition File for VirtualNetFunctionRequest.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');
//var VirtualNetFunctionDTO = require('./VirtualNetFunctionDTO');

'use strict';
/**
* Sanal ağ fonksiyonu tanımı verilerinin sunucuya iletilmesi için kullanılan veri yapısı.
*/
exports.VirtualNetFunctionRequest =  {
    type:'class',
    name:'VirtualNetFunctionRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'VirtualNetFunctionDTO', isRequired: true }
    }
}


//Mockup System for VirtualNetFunctionRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVirtualNetFunctionRequest';
var dto_name = 'VirtualNetFunctionRequest';

function VirtualNetFunctionRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVirtualNetFunctionRequestData();
    }
}

function genVirtualNetFunctionRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVirtualNetFunctionRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVirtualNetFunctionRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findVirtualNetFunctionRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVirtualNetFunctionRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVirtualNetFunctionRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveVirtualNetFunctionRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVirtualNetFunctionRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = VirtualNetFunctionRequestDataInit;
exports.genData = genVirtualNetFunctionRequestData;
exports.getData = getVirtualNetFunctionRequestData;
exports.findData = findVirtualNetFunctionRequestData;
exports.getListData = getVirtualNetFunctionRequestListData;
exports.deleteData = deleteVirtualNetFunctionRequestData;
exports.saveData = saveVirtualNetFunctionRequestData;
exports.saveListData = saveVirtualNetFunctionRequestListData;
exports.getAllData = getAllVirtualNetFunctionRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    VirtualNetFunctionRequestDataInit();
}

var overrideModule = '../overrides/VirtualNetFunctionRequest';
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



