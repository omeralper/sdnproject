'use strict';

//Model Definition File for AddressInfo.js


'use strict';
/**
* Cihaz ağ adreslerinin bulunduğu veri yapısı.
*/
exports.AddressInfo =  {
    type:'class',
    name:'AddressInfo',
    fields: {
        mac : { name: 'mac', type: 'String' }, 
        ipv4 : { name: 'ipv4', type: 'String' }, 
        ipv6 : { name: 'ipv6', type: 'String' }
    }
}


//Mockup System for AddressInfo.js

var mockup = require('../helpers/mockup');

var data_key = 'IDAddressInfo';
var dto_name = 'AddressInfo';

function AddressInfoDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genAddressInfoData();
    }
}

function genAddressInfoData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getAddressInfoData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getAddressInfoListData(options) {
    return mockup.getListData(data_key, options);
}

function findAddressInfoData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteAddressInfoData(id) {
    return mockup.deleteData(data_key, id);
}

function saveAddressInfoData(data) {
    return mockup.saveData(data_key, data);
}

function saveAddressInfoListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllAddressInfoData() {
    return mockup.getAllData(data_key);
}

exports.init = AddressInfoDataInit;
exports.genData = genAddressInfoData;
exports.getData = getAddressInfoData;
exports.findData = findAddressInfoData;
exports.getListData = getAddressInfoListData;
exports.deleteData = deleteAddressInfoData;
exports.saveData = saveAddressInfoData;
exports.saveListData = saveAddressInfoListData;
exports.getAllData = getAllAddressInfoData;

function autoInit(){
    mockup.initDatabase(data_key);
    AddressInfoDataInit();
}

var overrideModule = '../overrides/AddressInfo';
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



