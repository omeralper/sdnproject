'use strict';

//Model Definition File for InterfaceAttachments.js

//var InterfaceAttachment = require('./InterfaceAttachment');

'use strict';
/**
* InterfaceAttachment listesini tutan obje
*/
exports.InterfaceAttachments =  {
    type:'class',
    name:'InterfaceAttachments',
    fields: {
        interfaceAttachment : { name: 'interfaceAttachment', type: 'Array', subType: 'InterfaceAttachment' }
    }
}


//Mockup System for InterfaceAttachments.js

var mockup = require('../helpers/mockup');

var data_key = 'IDInterfaceAttachments';
var dto_name = 'InterfaceAttachments';

function InterfaceAttachmentsDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genInterfaceAttachmentsData();
    }
}

function genInterfaceAttachmentsData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getInterfaceAttachmentsData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getInterfaceAttachmentsListData(options) {
    return mockup.getListData(data_key, options);
}

function findInterfaceAttachmentsData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteInterfaceAttachmentsData(id) {
    return mockup.deleteData(data_key, id);
}

function saveInterfaceAttachmentsData(data) {
    return mockup.saveData(data_key, data);
}

function saveInterfaceAttachmentsListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllInterfaceAttachmentsData() {
    return mockup.getAllData(data_key);
}

exports.init = InterfaceAttachmentsDataInit;
exports.genData = genInterfaceAttachmentsData;
exports.getData = getInterfaceAttachmentsData;
exports.findData = findInterfaceAttachmentsData;
exports.getListData = getInterfaceAttachmentsListData;
exports.deleteData = deleteInterfaceAttachmentsData;
exports.saveData = saveInterfaceAttachmentsData;
exports.saveListData = saveInterfaceAttachmentsListData;
exports.getAllData = getAllInterfaceAttachmentsData;

function autoInit(){
    mockup.initDatabase(data_key);
    InterfaceAttachmentsDataInit();
}

var overrideModule = '../overrides/InterfaceAttachments';
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



