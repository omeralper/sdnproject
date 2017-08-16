'use strict';

//Model Definition File for DhcpIpExcludedDTO.js

//var BaseDTO = require('./BaseDTO');

'use strict';
/**
* Belirtilen bir dhcp ip menzili (dhcpIpRange) içindeki kullanılması yasaklanmış bir ip adres aralığını gösteren nesnedir.
*/
exports.DhcpIpExcludedDTO =  {
    type:'class',
    name:'DhcpIpExcludedDTO',
    fields: {
        id : { name: 'id', type: 'String' }, 
        version : { name: 'version', type: 'Integer', isRequired: true }, 
        revision : { name: 'revision', type: 'Integer', isRequired: true }, 
        timestamp : { name: 'timestamp', type: 'Date', isRequired: true }, 
        dhcpRangeId : { name: 'dhcpRangeId', type: 'String', isRequired: true }, 
        ipStart : { name: 'ipStart', type: 'String', isRequired: true }, 
        ipEnd : { name: 'ipEnd', type: 'String', isRequired: true }, 
        description : { name: 'description', type: 'String' }
    }
}


//Mockup System for DhcpIpExcludedDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDDhcpIpExcludedDTO';
var dto_name = 'DhcpIpExcludedDTO';

function DhcpIpExcludedDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genDhcpIpExcludedDTOData();
    }
}

function genDhcpIpExcludedDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getDhcpIpExcludedDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getDhcpIpExcludedDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findDhcpIpExcludedDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteDhcpIpExcludedDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveDhcpIpExcludedDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveDhcpIpExcludedDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllDhcpIpExcludedDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = DhcpIpExcludedDTODataInit;
exports.genData = genDhcpIpExcludedDTOData;
exports.getData = getDhcpIpExcludedDTOData;
exports.findData = findDhcpIpExcludedDTOData;
exports.getListData = getDhcpIpExcludedDTOListData;
exports.deleteData = deleteDhcpIpExcludedDTOData;
exports.saveData = saveDhcpIpExcludedDTOData;
exports.saveListData = saveDhcpIpExcludedDTOListData;
exports.getAllData = getAllDhcpIpExcludedDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    DhcpIpExcludedDTODataInit();
}

var overrideModule = '../overrides/DhcpIpExcludedDTO';
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



