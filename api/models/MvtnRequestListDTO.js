'use strict';

//Model Definition File for MvtnRequestListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var MvtnRequestDTO = require('./MvtnRequestDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Sanal ağ taleplerinin liste bilgisini gösteren veri modeli.
*/
exports.MvtnRequestListDTO =  {
    type:'class',
    name:'MvtnRequestListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'MvtnRequestDTO' }
    }
}


//Mockup System for MvtnRequestListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMvtnRequestListDTO';
var dto_name = 'MvtnRequestListDTO';

function MvtnRequestListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMvtnRequestListDTOData();
    }
}

function genMvtnRequestListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMvtnRequestListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMvtnRequestListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findMvtnRequestListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMvtnRequestListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMvtnRequestListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveMvtnRequestListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMvtnRequestListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = MvtnRequestListDTODataInit;
exports.genData = genMvtnRequestListDTOData;
exports.getData = getMvtnRequestListDTOData;
exports.findData = findMvtnRequestListDTOData;
exports.getListData = getMvtnRequestListDTOListData;
exports.deleteData = deleteMvtnRequestListDTOData;
exports.saveData = saveMvtnRequestListDTOData;
exports.saveListData = saveMvtnRequestListDTOListData;
exports.getAllData = getAllMvtnRequestListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    MvtnRequestListDTODataInit();
}

var overrideModule = '../overrides/MvtnRequestListDTO';
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



