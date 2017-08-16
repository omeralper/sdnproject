'use strict';

//Model Definition File for ServiceActionRequest.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');
//var ServiceActionDTO = require('./ServiceActionDTO');

'use strict';
/**
* Hizmet aksiyonu verilerinin sunucuya iletilmesi için kullanılan veri yapısı.
*/
exports.ServiceActionRequest =  {
    type:'class',
    name:'ServiceActionRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'ServiceActionDTO', isRequired: true }
    }
}


//Mockup System for ServiceActionRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDServiceActionRequest';
var dto_name = 'ServiceActionRequest';

function ServiceActionRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genServiceActionRequestData();
    }
}

function genServiceActionRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getServiceActionRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getServiceActionRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findServiceActionRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteServiceActionRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveServiceActionRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveServiceActionRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllServiceActionRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = ServiceActionRequestDataInit;
exports.genData = genServiceActionRequestData;
exports.getData = getServiceActionRequestData;
exports.findData = findServiceActionRequestData;
exports.getListData = getServiceActionRequestListData;
exports.deleteData = deleteServiceActionRequestData;
exports.saveData = saveServiceActionRequestData;
exports.saveListData = saveServiceActionRequestListData;
exports.getAllData = getAllServiceActionRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    ServiceActionRequestDataInit();
}

var overrideModule = '../overrides/ServiceActionRequest';
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



