'use strict';

//Model Definition File for WanPortInfoDeleteRequest.js

//var DeleteOptions = require('./DeleteOptions');
//var GenericDeleteRequest = require('./GenericDeleteRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Geniş alan ağ verilerinin silme işlemlerinin sunucuya iletilmesi için kullanılan veri yapısı.
*/
exports.WanPortInfoDeleteRequest =  {
    type:'class',
    name:'WanPortInfoDeleteRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        options : { name: 'options', type: 'DeleteOptions', isRequired: true }
    }
}


//Mockup System for WanPortInfoDeleteRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDWanPortInfoDeleteRequest';
var dto_name = 'WanPortInfoDeleteRequest';

function WanPortInfoDeleteRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genWanPortInfoDeleteRequestData();
    }
}

function genWanPortInfoDeleteRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getWanPortInfoDeleteRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getWanPortInfoDeleteRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findWanPortInfoDeleteRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteWanPortInfoDeleteRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveWanPortInfoDeleteRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveWanPortInfoDeleteRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllWanPortInfoDeleteRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = WanPortInfoDeleteRequestDataInit;
exports.genData = genWanPortInfoDeleteRequestData;
exports.getData = getWanPortInfoDeleteRequestData;
exports.findData = findWanPortInfoDeleteRequestData;
exports.getListData = getWanPortInfoDeleteRequestListData;
exports.deleteData = deleteWanPortInfoDeleteRequestData;
exports.saveData = saveWanPortInfoDeleteRequestData;
exports.saveListData = saveWanPortInfoDeleteRequestListData;
exports.getAllData = getAllWanPortInfoDeleteRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    WanPortInfoDeleteRequestDataInit();
}

var overrideModule = '../overrides/WanPortInfoDeleteRequest';
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



