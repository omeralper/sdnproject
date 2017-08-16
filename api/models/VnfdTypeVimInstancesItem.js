'use strict';

//Model Definition File for VnfdTypeVimInstancesItem.js

//var VimInstanceBase = require('./VimInstanceBase');
//var Vnfd = require('./Vnfd');

'use strict';
/**
* Sanal ağ fonksiyon tipi ve çalışacak Vim bilgisidir.
*/
exports.VnfdTypeVimInstancesItem =  {
    type:'class',
    name:'VnfdTypeVimInstancesItem',
    fields: {
        vnfd : { name: 'vnfd', type: 'Vnfd', isRequired: true }, 
        vimInstances : { name: 'vimInstances', type: 'Array', subType: 'VimInstanceBase', isRequired: true }
    }
}


//Mockup System for VnfdTypeVimInstancesItem.js

var mockup = require('../helpers/mockup');

var data_key = 'IDVnfdTypeVimInstancesItem';
var dto_name = 'VnfdTypeVimInstancesItem';

function VnfdTypeVimInstancesItemDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genVnfdTypeVimInstancesItemData();
    }
}

function genVnfdTypeVimInstancesItemData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getVnfdTypeVimInstancesItemData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getVnfdTypeVimInstancesItemListData(options) {
    return mockup.getListData(data_key, options);
}

function findVnfdTypeVimInstancesItemData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteVnfdTypeVimInstancesItemData(id) {
    return mockup.deleteData(data_key, id);
}

function saveVnfdTypeVimInstancesItemData(data) {
    return mockup.saveData(data_key, data);
}

function saveVnfdTypeVimInstancesItemListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllVnfdTypeVimInstancesItemData() {
    return mockup.getAllData(data_key);
}

exports.init = VnfdTypeVimInstancesItemDataInit;
exports.genData = genVnfdTypeVimInstancesItemData;
exports.getData = getVnfdTypeVimInstancesItemData;
exports.findData = findVnfdTypeVimInstancesItemData;
exports.getListData = getVnfdTypeVimInstancesItemListData;
exports.deleteData = deleteVnfdTypeVimInstancesItemData;
exports.saveData = saveVnfdTypeVimInstancesItemData;
exports.saveListData = saveVnfdTypeVimInstancesItemListData;
exports.getAllData = getAllVnfdTypeVimInstancesItemData;

function autoInit(){
    mockup.initDatabase(data_key);
    VnfdTypeVimInstancesItemDataInit();
}

var overrideModule = '../overrides/VnfdTypeVimInstancesItem';
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



