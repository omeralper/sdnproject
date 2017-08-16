'use strict';

//Model Definition File for SmsDTO.js

//var BaseDTO = require('./BaseDTO');
//var SMS_SOURCE = require('./SMS_SOURCE');

'use strict';
/**
* Sms bilgisinin bulunduğu veri yapısı.\&quot;
*/
exports.SmsDTO =  {
    type:'class',
    name:'SmsDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        to : { name: 'to', type: 'String' }, 
        source : { name: 'source', type: 'SMS_SOURCE' }, 
        message : { name: 'message', type: 'String' }, 
        sender : { name: 'sender', type: 'String' }, 
        username : { name: 'username', type: 'String' }, 
        password : { name: 'password', type: 'String' }
    }
}


//Mockup System for SmsDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSmsDTO';
var dto_name = 'SmsDTO';

function SmsDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSmsDTOData();
    }
}

function genSmsDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSmsDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSmsDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findSmsDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSmsDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSmsDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveSmsDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSmsDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = SmsDTODataInit;
exports.genData = genSmsDTOData;
exports.getData = getSmsDTOData;
exports.findData = findSmsDTOData;
exports.getListData = getSmsDTOListData;
exports.deleteData = deleteSmsDTOData;
exports.saveData = saveSmsDTOData;
exports.saveListData = saveSmsDTOListData;
exports.getAllData = getAllSmsDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    SmsDTODataInit();
}

var overrideModule = '../overrides/SmsDTO';
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



