'use strict';

//Model Definition File for BaseListDTO.js

//var SortOptions = require('./SortOptions');

'use strict';
/**
* Temel liste dönülen veri transfer model tanımıdır. Tüm liste fonksiyonlarından dönülecek veri transfer modelleri bu model’i temel alarak tanımlanacaktır.
*/
exports.BaseListDTO =  {
    type:'class',
    name:'BaseListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }
    }
}


//Mockup System for BaseListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDBaseListDTO';
var dto_name = 'BaseListDTO';

function BaseListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genBaseListDTOData();
    }
}

function genBaseListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getBaseListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getBaseListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findBaseListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteBaseListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveBaseListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveBaseListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllBaseListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = BaseListDTODataInit;
exports.genData = genBaseListDTOData;
exports.getData = getBaseListDTOData;
exports.findData = findBaseListDTOData;
exports.getListData = getBaseListDTOListData;
exports.deleteData = deleteBaseListDTOData;
exports.saveData = saveBaseListDTOData;
exports.saveListData = saveBaseListDTOListData;
exports.getAllData = getAllBaseListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    BaseListDTODataInit();
}

var overrideModule = '../overrides/BaseListDTO';
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



