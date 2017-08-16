'use strict';

//Model Definition File for GenericRequest.js

//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* API sisteminde tüm istekler için kullanılacak veri modelleri bu veri modeli temel alınarak tanımlanacaktır.
*/
exports.GenericRequest =  {
    type:'class',
    name:'GenericRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }
    }
}


//Mockup System for GenericRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDGenericRequest';
var dto_name = 'GenericRequest';

function GenericRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genGenericRequestData();
    }
}

function genGenericRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getGenericRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getGenericRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findGenericRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteGenericRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveGenericRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveGenericRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllGenericRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = GenericRequestDataInit;
exports.genData = genGenericRequestData;
exports.getData = getGenericRequestData;
exports.findData = findGenericRequestData;
exports.getListData = getGenericRequestListData;
exports.deleteData = deleteGenericRequestData;
exports.saveData = saveGenericRequestData;
exports.saveListData = saveGenericRequestListData;
exports.getAllData = getAllGenericRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    GenericRequestDataInit();
}

var overrideModule = '../overrides/GenericRequest';
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



