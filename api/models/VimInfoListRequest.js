'use strict';

//Model Definition File for VimInfoListRequest.js

//var GenericListRequest = require('./GenericListRequest');
//var ListOptions = require('./ListOptions');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* VIM listesini almak icin kullanılacak istek tipi
*/
exports.VimInfoListRequest =  {
    type:'class',
    name:'VimInfoListRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        options : { name: 'options', type: 'ListOptions', isRequired: true }, 
        vimOptions : { name: 'vimOptions', type: 'ListOptions', isRequired: true }
    }
}


//Mockup System for VimInfoListRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVimInfoListRequest';
var dto_name = 'VimInfoListRequest';

function VimInfoListRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVimInfoListRequestData();
    }
}

function genVimInfoListRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVimInfoListRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVimInfoListRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findVimInfoListRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVimInfoListRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVimInfoListRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveVimInfoListRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVimInfoListRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = VimInfoListRequestDataInit;
exports.genData = genVimInfoListRequestData;
exports.getData = getVimInfoListRequestData;
exports.findData = findVimInfoListRequestData;
exports.getListData = getVimInfoListRequestListData;
exports.deleteData = deleteVimInfoListRequestData;
exports.saveData = saveVimInfoListRequestData;
exports.saveListData = saveVimInfoListRequestListData;
exports.getAllData = getAllVimInfoListRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    VimInfoListRequestDataInit();
}

var overrideModule = '../overrides/VimInfoListRequest';
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



