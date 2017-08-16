'use strict';

//Model Definition File for WanMvtnInfoDTO.js

//var BaseDTO = require('./BaseDTO');
//var LanMvtnInfoDTO = require('./LanMvtnInfoDTO');
//var TopologyInfoDTO = require('./TopologyInfoDTO');

'use strict';
/**
* Geniş alan sanal ağ bilgisini tanımlayan veri modeli.
*/
exports.WanMvtnInfoDTO =  {
    type:'class',
    name:'WanMvtnInfoDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        name : { name: 'name', type: 'String' }, 
        wanMvtnId : { name: 'wanMvtnId', type: 'Integer' }, 
        topoInfo : { name: 'topoInfo', type: 'TopologyInfoDTO' }, 
        lanMvtnInfos : { name: 'lanMvtnInfos', type: 'Array', subType: 'LanMvtnInfoDTO' }
    }
}


//Mockup System for WanMvtnInfoDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDWanMvtnInfoDTO';
var dto_name = 'WanMvtnInfoDTO';

function WanMvtnInfoDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genWanMvtnInfoDTOData();
    }
}

function genWanMvtnInfoDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getWanMvtnInfoDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getWanMvtnInfoDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findWanMvtnInfoDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteWanMvtnInfoDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveWanMvtnInfoDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveWanMvtnInfoDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllWanMvtnInfoDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = WanMvtnInfoDTODataInit;
exports.genData = genWanMvtnInfoDTOData;
exports.getData = getWanMvtnInfoDTOData;
exports.findData = findWanMvtnInfoDTOData;
exports.getListData = getWanMvtnInfoDTOListData;
exports.deleteData = deleteWanMvtnInfoDTOData;
exports.saveData = saveWanMvtnInfoDTOData;
exports.saveListData = saveWanMvtnInfoDTOListData;
exports.getAllData = getAllWanMvtnInfoDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    WanMvtnInfoDTODataInit();
}

var overrideModule = '../overrides/WanMvtnInfoDTO';
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



