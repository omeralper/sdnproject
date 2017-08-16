'use strict';

//Model Definition File for RoleListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var RoleDTO = require('./RoleDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Rol listesinin bulunduğu veri yapısı.
*/
exports.RoleListDTO =  {
    type:'class',
    name:'RoleListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'RoleDTO', isRequired: true }
    }
}


//Mockup System for RoleListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDRoleListDTO';
var dto_name = 'RoleListDTO';

function RoleListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genRoleListDTOData();
    }
}

function genRoleListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getRoleListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getRoleListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findRoleListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteRoleListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveRoleListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveRoleListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllRoleListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = RoleListDTODataInit;
exports.genData = genRoleListDTOData;
exports.getData = getRoleListDTOData;
exports.findData = findRoleListDTOData;
exports.getListData = getRoleListDTOListData;
exports.deleteData = deleteRoleListDTOData;
exports.saveData = saveRoleListDTOData;
exports.saveListData = saveRoleListDTOListData;
exports.getAllData = getAllRoleListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    RoleListDTODataInit();
}

var overrideModule = '../overrides/RoleListDTO';
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



