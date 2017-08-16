'use strict';

//Model Definition File for UniquenessControlRequest.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');
//var UniquenessControlDTO = require('./UniquenessControlDTO');

'use strict';
/**
* Benzersiz olması gereken alanları veritabanından sorgulamak için kullanılan veri modelidir.
*/
exports.UniquenessControlRequest =  {
    type:'class',
    name:'UniquenessControlRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'UniquenessControlDTO', isRequired: true }
    }
}


//Mockup System for UniquenessControlRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDUniquenessControlRequest';
var dto_name = 'UniquenessControlRequest';

function UniquenessControlRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genUniquenessControlRequestData();
    }
}

function genUniquenessControlRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getUniquenessControlRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getUniquenessControlRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findUniquenessControlRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteUniquenessControlRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveUniquenessControlRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveUniquenessControlRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllUniquenessControlRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = UniquenessControlRequestDataInit;
exports.genData = genUniquenessControlRequestData;
exports.getData = getUniquenessControlRequestData;
exports.findData = findUniquenessControlRequestData;
exports.getListData = getUniquenessControlRequestListData;
exports.deleteData = deleteUniquenessControlRequestData;
exports.saveData = saveUniquenessControlRequestData;
exports.saveListData = saveUniquenessControlRequestListData;
exports.getAllData = getAllUniquenessControlRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    UniquenessControlRequestDataInit();
}

var overrideModule = '../overrides/UniquenessControlRequest';
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



