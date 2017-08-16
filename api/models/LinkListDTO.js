'use strict';

//Model Definition File for LinkListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var LinkDTO = require('./LinkDTO');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Bağlantı listesinin bulunduğu veri yapısı.
*/
exports.LinkListDTO =  {
    type:'class',
    name:'LinkListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'LinkDTO', isRequired: true }
    }
}


//Mockup System for LinkListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDLinkListDTO';
var dto_name = 'LinkListDTO';

function LinkListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genLinkListDTOData();
    }
}

function genLinkListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getLinkListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getLinkListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findLinkListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteLinkListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveLinkListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveLinkListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllLinkListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = LinkListDTODataInit;
exports.genData = genLinkListDTOData;
exports.getData = getLinkListDTOData;
exports.findData = findLinkListDTOData;
exports.getListData = getLinkListDTOListData;
exports.deleteData = deleteLinkListDTOData;
exports.saveData = saveLinkListDTOData;
exports.saveListData = saveLinkListDTOListData;
exports.getAllData = getAllLinkListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    LinkListDTODataInit();
}

var overrideModule = '../overrides/LinkListDTO';
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



