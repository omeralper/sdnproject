'use strict';

//Model Definition File for EndUserApplicationRequest.js

//var EndUserApplicationDTO = require('./EndUserApplicationDTO');
//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Son kullanıcı uygulamasının sunucuya iletilmesi için kullanılan veri yapısı.
*/
exports.EndUserApplicationRequest =  {
    type:'class',
    name:'EndUserApplicationRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'EndUserApplicationDTO', isRequired: true }
    }
}


//Mockup System for EndUserApplicationRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDEndUserApplicationRequest';
var dto_name = 'EndUserApplicationRequest';

function EndUserApplicationRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genEndUserApplicationRequestData();
    }
}

function genEndUserApplicationRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getEndUserApplicationRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getEndUserApplicationRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findEndUserApplicationRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteEndUserApplicationRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveEndUserApplicationRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveEndUserApplicationRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllEndUserApplicationRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = EndUserApplicationRequestDataInit;
exports.genData = genEndUserApplicationRequestData;
exports.getData = getEndUserApplicationRequestData;
exports.findData = findEndUserApplicationRequestData;
exports.getListData = getEndUserApplicationRequestListData;
exports.deleteData = deleteEndUserApplicationRequestData;
exports.saveData = saveEndUserApplicationRequestData;
exports.saveListData = saveEndUserApplicationRequestListData;
exports.getAllData = getAllEndUserApplicationRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    EndUserApplicationRequestDataInit();
}

var overrideModule = '../overrides/EndUserApplicationRequest';
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



