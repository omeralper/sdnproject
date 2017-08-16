'use strict';

//Model Definition File for ProactivePathPolicyListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var ProactivePathPolicyDTO = require('./ProactivePathPolicyDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Proaktif patika politikaları listesinin bulunduğu veri yapısı.
*/
exports.ProactivePathPolicyListDTO =  {
    type:'class',
    name:'ProactivePathPolicyListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'ProactivePathPolicyDTO', isRequired: true }
    }
}


//Mockup System for ProactivePathPolicyListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDProactivePathPolicyListDTO';
var dto_name = 'ProactivePathPolicyListDTO';

function ProactivePathPolicyListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genProactivePathPolicyListDTOData();
    }
}

function genProactivePathPolicyListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getProactivePathPolicyListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getProactivePathPolicyListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findProactivePathPolicyListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteProactivePathPolicyListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveProactivePathPolicyListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveProactivePathPolicyListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllProactivePathPolicyListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = ProactivePathPolicyListDTODataInit;
exports.genData = genProactivePathPolicyListDTOData;
exports.getData = getProactivePathPolicyListDTOData;
exports.findData = findProactivePathPolicyListDTOData;
exports.getListData = getProactivePathPolicyListDTOListData;
exports.deleteData = deleteProactivePathPolicyListDTOData;
exports.saveData = saveProactivePathPolicyListDTOData;
exports.saveListData = saveProactivePathPolicyListDTOListData;
exports.getAllData = getAllProactivePathPolicyListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    ProactivePathPolicyListDTODataInit();
}

var overrideModule = '../overrides/ProactivePathPolicyListDTO';
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



