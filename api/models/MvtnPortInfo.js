'use strict';

//Model Definition File for MvtnPortInfo.js

//var PortDetail = require('./PortDetail');

'use strict';
/**
* Sanal ag talebinde hostlarin baglanacagi port bilgilerini tanimlayan veri modeli.
*/
exports.MvtnPortInfo =  {
    type:'class',
    name:'MvtnPortInfo',
    fields: {
        portCount : { name: 'portCount', type: 'Integer' }, 
        portDetails : { name: 'portDetails', type: 'Array', subType: 'PortDetail' }
    }
}


//Mockup System for MvtnPortInfo.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMvtnPortInfo';
var dto_name = 'MvtnPortInfo';

function MvtnPortInfoDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMvtnPortInfoData();
    }
}

function genMvtnPortInfoData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMvtnPortInfoData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMvtnPortInfoListData(options) {
    return mockup.getListData(data_key, options);
}

function findMvtnPortInfoData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMvtnPortInfoData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMvtnPortInfoData(data) {
    return mockup.saveData(data_key, data);
}

function saveMvtnPortInfoListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMvtnPortInfoData() {
    return mockup.getAllData(data_key);
}

exports.init = MvtnPortInfoDataInit;
exports.genData = genMvtnPortInfoData;
exports.getData = getMvtnPortInfoData;
exports.findData = findMvtnPortInfoData;
exports.getListData = getMvtnPortInfoListData;
exports.deleteData = deleteMvtnPortInfoData;
exports.saveData = saveMvtnPortInfoData;
exports.saveListData = saveMvtnPortInfoListData;
exports.getAllData = getAllMvtnPortInfoData;

function autoInit(){
    mockup.initDatabase(data_key);
    MvtnPortInfoDataInit();
}

var overrideModule = '../overrides/MvtnPortInfo';
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



