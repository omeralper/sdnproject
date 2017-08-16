'use strict';

//Model Definition File for InterfaceAttachment.js

//var FixedIps = require('./FixedIps');

'use strict';
/**
* VIM uzerinde bulunan arayuz bilgileri(Ex:OpenStack)
*/
exports.InterfaceAttachment =  {
    type:'class',
    name:'InterfaceAttachment',
    fields: {
        fixedIps : { name: 'fixedIps', type: 'FixedIps' }, 
        macAddress : { name: 'macAddress', type: 'String' }, 
        netId : { name: 'netId', type: 'String' }, 
        portId : { name: 'portId', type: 'String' }, 
        portState : { name: 'portState', type: 'String' }
    }
}


//Mockup System for InterfaceAttachment.js

var mockup = require('../helpers/mockup');

var data_key = 'IDInterfaceAttachment';
var dto_name = 'InterfaceAttachment';

function InterfaceAttachmentDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genInterfaceAttachmentData();
    }
}

function genInterfaceAttachmentData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getInterfaceAttachmentData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getInterfaceAttachmentListData(options) {
    return mockup.getListData(data_key, options);
}

function findInterfaceAttachmentData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteInterfaceAttachmentData(id) {
    return mockup.deleteData(data_key, id);
}

function saveInterfaceAttachmentData(data) {
    return mockup.saveData(data_key, data);
}

function saveInterfaceAttachmentListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllInterfaceAttachmentData() {
    return mockup.getAllData(data_key);
}

exports.init = InterfaceAttachmentDataInit;
exports.genData = genInterfaceAttachmentData;
exports.getData = getInterfaceAttachmentData;
exports.findData = findInterfaceAttachmentData;
exports.getListData = getInterfaceAttachmentListData;
exports.deleteData = deleteInterfaceAttachmentData;
exports.saveData = saveInterfaceAttachmentData;
exports.saveListData = saveInterfaceAttachmentListData;
exports.getAllData = getAllInterfaceAttachmentData;

function autoInit(){
    mockup.initDatabase(data_key);
    InterfaceAttachmentDataInit();
}

var overrideModule = '../overrides/InterfaceAttachment';
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



