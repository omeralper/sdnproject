'use strict';

//Model Definition File for MvtnListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var MvtnDTO = require('./MvtnDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Sanal ağ talepleri listesinin bulunduğu veri yapısı.
*/
exports.MvtnListDTO =  {
    type:'class',
    name:'MvtnListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'MvtnDTO', isRequired: true }
    }
}


//Mockup System for MvtnListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMvtnListDTO';
var dto_name = 'MvtnListDTO';

function MvtnListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMvtnListDTOData();
    }
}

function genMvtnListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMvtnListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMvtnListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findMvtnListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMvtnListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMvtnListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveMvtnListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMvtnListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = MvtnListDTODataInit;
exports.genData = genMvtnListDTOData;
exports.getData = getMvtnListDTOData;
exports.findData = findMvtnListDTOData;
exports.getListData = getMvtnListDTOListData;
exports.deleteData = deleteMvtnListDTOData;
exports.saveData = saveMvtnListDTOData;
exports.saveListData = saveMvtnListDTOListData;
exports.getAllData = getAllMvtnListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    MvtnListDTODataInit();
}

var overrideModule = '../overrides/MvtnListDTO';
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



