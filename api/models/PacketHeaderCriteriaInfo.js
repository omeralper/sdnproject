'use strict';

//Model Definition File for PacketHeaderCriteriaInfo.js

//var CommonHeaderCriteriaInfo = require('./CommonHeaderCriteriaInfo');
//var ETH_TYPE = require('./ETH_TYPE');
//var EndUserApplicationDTO = require('./EndUserApplicationDTO');
//var InportsInfo = require('./InportsInfo');
//var IpLocationDTO = require('./IpLocationDTO');

'use strict';
/**
* Paket eşleşme bilgilerini içeren veri modeli
*/
exports.PacketHeaderCriteriaInfo =  {
    type:'class',
    name:'PacketHeaderCriteriaInfo',
    fields: {
        macAddresses : { name: 'macAddresses', type: 'CommonHeaderCriteriaInfo' }, 
        ipAddressess : { name: 'ipAddressess', type: 'CommonHeaderCriteriaInfo' }, 
        portRanges : { name: 'portRanges', type: 'CommonHeaderCriteriaInfo' }, 
        endUserApplications : { name: 'endUserApplications', type: 'Array', subType: 'EndUserApplicationDTO' }, 
        vtnIds : { name: 'vtnIds', type: 'Array', subType: 'string' }, 
        ethTypes : { name: 'ethTypes', type: 'ETH_TYPE' }, 
        protocols : { name: 'protocols', type: 'Array', subType: 'string' }, 
        vlanTags : { name: 'vlanTags', type: 'Array', subType: 'string' }, 
        mplsTags : { name: 'mplsTags', type: 'Array', subType: 'string' }, 
        inPorts : { name: 'inPorts', type: 'Array', subType: 'InportsInfo' }, 
        srcIpLocations : { name: 'srcIpLocations', type: 'Array', subType: 'IpLocationDTO' }, 
        destIpLocations : { name: 'destIpLocations', type: 'Array', subType: 'IpLocationDTO' }
    }
}


//Mockup System for PacketHeaderCriteriaInfo.js

var mockup = require('../helpers/mockup');

var data_key = 'IDPacketHeaderCriteriaInfo';
var dto_name = 'PacketHeaderCriteriaInfo';

function PacketHeaderCriteriaInfoDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genPacketHeaderCriteriaInfoData();
    }
}

function genPacketHeaderCriteriaInfoData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getPacketHeaderCriteriaInfoData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getPacketHeaderCriteriaInfoListData(options) {
    return mockup.getListData(data_key, options);
}

function findPacketHeaderCriteriaInfoData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deletePacketHeaderCriteriaInfoData(id) {
    return mockup.deleteData(data_key, id);
}

function savePacketHeaderCriteriaInfoData(data) {
    return mockup.saveData(data_key, data);
}

function savePacketHeaderCriteriaInfoListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllPacketHeaderCriteriaInfoData() {
    return mockup.getAllData(data_key);
}

exports.init = PacketHeaderCriteriaInfoDataInit;
exports.genData = genPacketHeaderCriteriaInfoData;
exports.getData = getPacketHeaderCriteriaInfoData;
exports.findData = findPacketHeaderCriteriaInfoData;
exports.getListData = getPacketHeaderCriteriaInfoListData;
exports.deleteData = deletePacketHeaderCriteriaInfoData;
exports.saveData = savePacketHeaderCriteriaInfoData;
exports.saveListData = savePacketHeaderCriteriaInfoListData;
exports.getAllData = getAllPacketHeaderCriteriaInfoData;

function autoInit(){
    mockup.initDatabase(data_key);
    PacketHeaderCriteriaInfoDataInit();
}

var overrideModule = '../overrides/PacketHeaderCriteriaInfo';
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



