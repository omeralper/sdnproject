'use strict';

//Model Definition File for PortDetail.js

//var AddressInfo = require('./AddressInfo');
//var AlarmInfo = require('./AlarmInfo');
//var LINK_TYPE = require('./LINK_TYPE');
//var PORT_CONFIG = require('./PORT_CONFIG');
//var PORT_STATE = require('./PORT_STATE');
//var StatsDetail = require('./StatsDetail');

'use strict';
/**
* Tek bir portun detaylarının tutulduğu veri yapısı.
*/
exports.PortDetail =  {
    type:'class',
    name:'PortDetail',
    fields: {
        id : { name: 'id', type: 'String' }, 
        number : { name: 'number', type: 'Long', isRequired: true }, 
        states : { name: 'states', type: 'Array', subType: 'PORT_STATE' }, 
        configs : { name: 'configs', type: 'Array', subType: 'PORT_CONFIG' }, 
        address : { name: 'address', type: 'AddressInfo', isRequired: true }, 
        stats : { name: 'stats', type: 'StatsDetail' }, 
        speed : { name: 'speed', type: 'Long' }, 
        averageSpeed : { name: 'averageSpeed', type: 'Long' }, 
        name : { name: 'name', type: 'String' }, 
        switches : { name: 'switches', type: 'Array', subType: 'string' }, 
        alarms : { name: 'alarms', type: 'Array', subType: 'AlarmInfo' }, 
        linkType : { name: 'linkType', type: 'LINK_TYPE' }
    }
}


//Mockup System for PortDetail.js

var mockup = require('../helpers/mockup');

var data_key = 'IDPortDetail';
var dto_name = 'PortDetail';

function PortDetailDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genPortDetailData();
    }
}

function genPortDetailData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getPortDetailData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getPortDetailListData(options) {
    return mockup.getListData(data_key, options);
}

function findPortDetailData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deletePortDetailData(id) {
    return mockup.deleteData(data_key, id);
}

function savePortDetailData(data) {
    return mockup.saveData(data_key, data);
}

function savePortDetailListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllPortDetailData() {
    return mockup.getAllData(data_key);
}

exports.init = PortDetailDataInit;
exports.genData = genPortDetailData;
exports.getData = getPortDetailData;
exports.findData = findPortDetailData;
exports.getListData = getPortDetailListData;
exports.deleteData = deletePortDetailData;
exports.saveData = savePortDetailData;
exports.saveListData = savePortDetailListData;
exports.getAllData = getAllPortDetailData;

function autoInit(){
    mockup.initDatabase(data_key);
    PortDetailDataInit();
}

var overrideModule = '../overrides/PortDetail';
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



