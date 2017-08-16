'use strict';

//Model Definition File for GenericListRequest.js

//var GenericRequest = require('./GenericRequest');
//var ListOptions = require('./ListOptions');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* API sisteminde listeleme işlemleri için kullanılacak genel veri modelidir.
*/
exports.GenericListRequest =  {
    type:'class',
    name:'GenericListRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        options : { name: 'options', type: 'ListOptions', isRequired: true }
    }
}


//Mockup System for GenericListRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDGenericListRequest';
var dto_name = 'GenericListRequest';

function GenericListRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genGenericListRequestData();
    }
}

function genGenericListRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getGenericListRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getGenericListRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findGenericListRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteGenericListRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveGenericListRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveGenericListRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllGenericListRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = GenericListRequestDataInit;
exports.genData = genGenericListRequestData;
exports.getData = getGenericListRequestData;
exports.findData = findGenericListRequestData;
exports.getListData = getGenericListRequestListData;
exports.deleteData = deleteGenericListRequestData;
exports.saveData = saveGenericListRequestData;
exports.saveListData = saveGenericListRequestListData;
exports.getAllData = getAllGenericListRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    GenericListRequestDataInit();
}

var overrideModule = '../overrides/GenericListRequest';
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



