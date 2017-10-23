'use strict';

//Model Definition File for VimVmStatusInfoRequest.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Ağ servis kayıtı verilerinin sunucuya iletilmesi için kullanılan veri yapısı.
*/
exports.VimVmStatusInfoRequest =  {
    type:'class',
    name:'VimVmStatusInfoRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        vmIp : { name: 'vmIp', type: 'String', isRequired: true }
    }
}


//Mockup System for VimVmStatusInfoRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVimVmStatusInfoRequest';
var dto_name = 'VimVmStatusInfoRequest';

function VimVmStatusInfoRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVimVmStatusInfoRequestData();
    }
}

function genVimVmStatusInfoRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVimVmStatusInfoRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVimVmStatusInfoRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findVimVmStatusInfoRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVimVmStatusInfoRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVimVmStatusInfoRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveVimVmStatusInfoRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVimVmStatusInfoRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = VimVmStatusInfoRequestDataInit;
exports.genData = genVimVmStatusInfoRequestData;
exports.getData = getVimVmStatusInfoRequestData;
exports.findData = findVimVmStatusInfoRequestData;
exports.getListData = getVimVmStatusInfoRequestListData;
exports.deleteData = deleteVimVmStatusInfoRequestData;
exports.saveData = saveVimVmStatusInfoRequestData;
exports.saveListData = saveVimVmStatusInfoRequestListData;
exports.getAllData = getAllVimVmStatusInfoRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    VimVmStatusInfoRequestDataInit();
}

var overrideModule = '../overrides/VimVmStatusInfoRequest';
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



