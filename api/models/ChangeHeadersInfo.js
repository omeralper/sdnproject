'use strict';

//Model Definition File for ChangeHeadersInfo.js

//var AddressInfo = require('./AddressInfo');
//var PopPushHeaderInfo = require('./PopPushHeaderInfo');

'use strict';
/**
* Aksiyon olarak değiştirilmesi istenen paket başlıkları
*/
exports.ChangeHeadersInfo =  {
    type:'class',
    name:'ChangeHeadersInfo',
    fields: {
        srcMac : { name: 'srcMac', type: 'String' }, 
        dstMac : { name: 'dstMac', type: 'String' }, 
        srcIp : { name: 'srcIp', type: 'AddressInfo' }, 
        dstIp : { name: 'dstIp', type: 'AddressInfo' }, 
        vlanId : { name: 'vlanId', type: 'PopPushHeaderInfo' }, 
        portNumber : { name: 'portNumber', type: 'Integer' }, 
        dhcpMark : { name: 'dhcpMark', type: 'Integer' }
    }
}


//Mockup System for ChangeHeadersInfo.js

var mockup = require('../helpers/mockup');

var data_key = 'IDChangeHeadersInfo';
var dto_name = 'ChangeHeadersInfo';

function ChangeHeadersInfoDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genChangeHeadersInfoData();
    }
}

function genChangeHeadersInfoData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getChangeHeadersInfoData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getChangeHeadersInfoListData(options) {
    return mockup.getListData(data_key, options);
}

function findChangeHeadersInfoData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteChangeHeadersInfoData(id) {
    return mockup.deleteData(data_key, id);
}

function saveChangeHeadersInfoData(data) {
    return mockup.saveData(data_key, data);
}

function saveChangeHeadersInfoListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllChangeHeadersInfoData() {
    return mockup.getAllData(data_key);
}

exports.init = ChangeHeadersInfoDataInit;
exports.genData = genChangeHeadersInfoData;
exports.getData = getChangeHeadersInfoData;
exports.findData = findChangeHeadersInfoData;
exports.getListData = getChangeHeadersInfoListData;
exports.deleteData = deleteChangeHeadersInfoData;
exports.saveData = saveChangeHeadersInfoData;
exports.saveListData = saveChangeHeadersInfoListData;
exports.getAllData = getAllChangeHeadersInfoData;

function autoInit(){
    mockup.initDatabase(data_key);
    ChangeHeadersInfoDataInit();
}

var overrideModule = '../overrides/ChangeHeadersInfo';
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



