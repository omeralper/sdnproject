'use strict';

//Model Definition File for LanMvtnInfoDTO.js

//var BaseDTO = require('./BaseDTO');
//var MVTN_STATUS = require('./MVTN_STATUS');

'use strict';
/**
* Yerel sanal ağ bilgilerini taşıyan veri modeli.
*/
exports.LanMvtnInfoDTO =  {
    type:'class',
    name:'LanMvtnInfoDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        domainId : { name: 'domainId', type: 'Integer' }, 
        domainName : { name: 'domainName', type: 'String' }, 
        isSelected : { name: 'isSelected', type: 'Boolean' }, 
        wanMvtnId : { name: 'wanMvtnId', type: 'Integer' }, 
        mvtnStatus : { name: 'mvtnStatus', type: 'MVTN_STATUS' }
    }
}


//Mockup System for LanMvtnInfoDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDLanMvtnInfoDTO';
var dto_name = 'LanMvtnInfoDTO';

function LanMvtnInfoDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genLanMvtnInfoDTOData();
    }
}

function genLanMvtnInfoDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getLanMvtnInfoDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getLanMvtnInfoDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findLanMvtnInfoDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteLanMvtnInfoDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveLanMvtnInfoDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveLanMvtnInfoDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllLanMvtnInfoDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = LanMvtnInfoDTODataInit;
exports.genData = genLanMvtnInfoDTOData;
exports.getData = getLanMvtnInfoDTOData;
exports.findData = findLanMvtnInfoDTOData;
exports.getListData = getLanMvtnInfoDTOListData;
exports.deleteData = deleteLanMvtnInfoDTOData;
exports.saveData = saveLanMvtnInfoDTOData;
exports.saveListData = saveLanMvtnInfoDTOListData;
exports.getAllData = getAllLanMvtnInfoDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    LanMvtnInfoDTODataInit();
}

var overrideModule = '../overrides/LanMvtnInfoDTO';
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



