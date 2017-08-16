'use strict';

//Model Definition File for MvtnChangeTypeRequest.js

//var GenericRequest = require('./GenericRequest');
//var MvtnTypeDTO = require('./MvtnTypeDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Sanal ağların tipini değiştirmek için kullanılacak veri modelidir.
*/
exports.MvtnChangeTypeRequest =  {
    type:'class',
    name:'MvtnChangeTypeRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'MvtnTypeDTO', isRequired: true }
    }
}


//Mockup System for MvtnChangeTypeRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMvtnChangeTypeRequest';
var dto_name = 'MvtnChangeTypeRequest';

function MvtnChangeTypeRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMvtnChangeTypeRequestData();
    }
}

function genMvtnChangeTypeRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMvtnChangeTypeRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMvtnChangeTypeRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findMvtnChangeTypeRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMvtnChangeTypeRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMvtnChangeTypeRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveMvtnChangeTypeRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMvtnChangeTypeRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = MvtnChangeTypeRequestDataInit;
exports.genData = genMvtnChangeTypeRequestData;
exports.getData = getMvtnChangeTypeRequestData;
exports.findData = findMvtnChangeTypeRequestData;
exports.getListData = getMvtnChangeTypeRequestListData;
exports.deleteData = deleteMvtnChangeTypeRequestData;
exports.saveData = saveMvtnChangeTypeRequestData;
exports.saveListData = saveMvtnChangeTypeRequestListData;
exports.getAllData = getAllMvtnChangeTypeRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    MvtnChangeTypeRequestDataInit();
}

var overrideModule = '../overrides/MvtnChangeTypeRequest';
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



