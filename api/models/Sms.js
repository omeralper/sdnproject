'use strict';

//Model Definition File for Sms.js

//var SMS_SOURCE = require('./SMS_SOURCE');

'use strict';
/**
* Uygulamalar tarafından detaysız sms objesi
*/
exports.Sms =  {
    type:'class',
    name:'Sms',
    fields: {
        to : { name: 'to', type: 'String', isRequired: true }, 
        source : { name: 'source', type: 'SMS_SOURCE', isRequired: true }, 
        message : { name: 'message', type: 'String', isRequired: true }, 
        sender : { name: 'sender', type: 'String', isRequired: true }, 
        username : { name: 'username', type: 'String', isRequired: true }, 
        password : { name: 'password', type: 'String', isRequired: true }
    }
}


//Mockup System for Sms.js

var mockup = require('../helpers/mockup');

var data_key = 'IDSms';
var dto_name = 'Sms';

function SmsDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genSmsData();
    }
}

function genSmsData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getSmsData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getSmsListData(options) {
    return mockup.getListData(data_key, options);
}

function findSmsData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteSmsData(id) {
    return mockup.deleteData(data_key, id);
}

function saveSmsData(data) {
    return mockup.saveData(data_key, data);
}

function saveSmsListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllSmsData() {
    return mockup.getAllData(data_key);
}

exports.init = SmsDataInit;
exports.genData = genSmsData;
exports.getData = getSmsData;
exports.findData = findSmsData;
exports.getListData = getSmsListData;
exports.deleteData = deleteSmsData;
exports.saveData = saveSmsData;
exports.saveListData = saveSmsListData;
exports.getAllData = getAllSmsData;

function autoInit(){
    mockup.initDatabase(data_key);
    SmsDataInit();
}

var overrideModule = '../overrides/Sms';
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



