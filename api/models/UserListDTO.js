'use strict';

//Model Definition File for UserListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var SortOptions = require('./SortOptions');
//var UserDTO = require('./UserDTO');

'use strict';
/**
* Kullanıcı listesinin bulunduğu veri yapısı.
*/
exports.UserListDTO =  {
    type:'class',
    name:'UserListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'UserDTO', isRequired: true }
    }
}


//Mockup System for UserListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDUserListDTO';
var dto_name = 'UserListDTO';

function UserListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genUserListDTOData();
    }
}

function genUserListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getUserListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getUserListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findUserListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteUserListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveUserListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveUserListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllUserListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = UserListDTODataInit;
exports.genData = genUserListDTOData;
exports.getData = getUserListDTOData;
exports.findData = findUserListDTOData;
exports.getListData = getUserListDTOListData;
exports.deleteData = deleteUserListDTOData;
exports.saveData = saveUserListDTOData;
exports.saveListData = saveUserListDTOListData;
exports.getAllData = getAllUserListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    UserListDTODataInit();
}

var overrideModule = '../overrides/UserListDTO';
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



