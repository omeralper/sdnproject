'use strict';

//Model Definition File for MvtnRequestDeleteRequest.js

//var GenericRequest = require('./GenericRequest');
//var MvtnRequestDeleteDTO = require('./MvtnRequestDeleteDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Sanal ağ taleplerini silme istekleri için kullanılacak veri modelidir
*/
exports.MvtnRequestDeleteRequest =  {
    type:'class',
    name:'MvtnRequestDeleteRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'MvtnRequestDeleteDTO', isRequired: true }
    }
}


//Mockup System for MvtnRequestDeleteRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMvtnRequestDeleteRequest';
var dto_name = 'MvtnRequestDeleteRequest';

function MvtnRequestDeleteRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMvtnRequestDeleteRequestData();
    }
}

function genMvtnRequestDeleteRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMvtnRequestDeleteRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMvtnRequestDeleteRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findMvtnRequestDeleteRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMvtnRequestDeleteRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMvtnRequestDeleteRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveMvtnRequestDeleteRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMvtnRequestDeleteRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = MvtnRequestDeleteRequestDataInit;
exports.genData = genMvtnRequestDeleteRequestData;
exports.getData = getMvtnRequestDeleteRequestData;
exports.findData = findMvtnRequestDeleteRequestData;
exports.getListData = getMvtnRequestDeleteRequestListData;
exports.deleteData = deleteMvtnRequestDeleteRequestData;
exports.saveData = saveMvtnRequestDeleteRequestData;
exports.saveListData = saveMvtnRequestDeleteRequestListData;
exports.getAllData = getAllMvtnRequestDeleteRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    MvtnRequestDeleteRequestDataInit();
}

var overrideModule = '../overrides/MvtnRequestDeleteRequest';
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



