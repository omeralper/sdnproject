'use strict';

//Model Definition File for GenericDeleteRequest.js

//var DeleteOptions = require('./DeleteOptions');
//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* API sisteminde silme istekleri için kullanılacak genel veri modelidir.
*/
exports.GenericDeleteRequest =  {
    type:'class',
    name:'GenericDeleteRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        options : { name: 'options', type: 'DeleteOptions', isRequired: true }
    }
}


//Mockup System for GenericDeleteRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDGenericDeleteRequest';
var dto_name = 'GenericDeleteRequest';

function GenericDeleteRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genGenericDeleteRequestData();
    }
}

function genGenericDeleteRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getGenericDeleteRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getGenericDeleteRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findGenericDeleteRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteGenericDeleteRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveGenericDeleteRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveGenericDeleteRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllGenericDeleteRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = GenericDeleteRequestDataInit;
exports.genData = genGenericDeleteRequestData;
exports.getData = getGenericDeleteRequestData;
exports.findData = findGenericDeleteRequestData;
exports.getListData = getGenericDeleteRequestListData;
exports.deleteData = deleteGenericDeleteRequestData;
exports.saveData = saveGenericDeleteRequestData;
exports.saveListData = saveGenericDeleteRequestListData;
exports.getAllData = getAllGenericDeleteRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    GenericDeleteRequestDataInit();
}

var overrideModule = '../overrides/GenericDeleteRequest';
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



