'use strict';

//Model Definition File for TopologyInfoListDTO.js

//var BaseListDTO = require('./BaseListDTO');
//var SortOptions = require('./SortOptions');
//var TopologyInfoDTO = require('./TopologyInfoDTO');

'use strict';
/**
* Topoloji detaylarının listesinin bulunduğu veri yapısı.
*/
exports.TopologyInfoListDTO =  {
    type:'class',
    name:'TopologyInfoListDTO',
    fields: {
        currentPageNumber : { name: 'currentPageNumber', type: 'Long', isRequired: true }, 
        currentPageSize : { name: 'currentPageSize', type: 'Long', isRequired: true }, 
        totalPages : { name: 'totalPages', type: 'Long', isRequired: true }, 
        totalItems : { name: 'totalItems', type: 'Long', isRequired: true }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions', isRequired: true }, 
        list : { name: 'list', type: 'Array', subType: 'TopologyInfoDTO', isRequired: true }
    }
}


//Mockup System for TopologyInfoListDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDTopologyInfoListDTO';
var dto_name = 'TopologyInfoListDTO';

function TopologyInfoListDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genTopologyInfoListDTOData();
    }
}

function genTopologyInfoListDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getTopologyInfoListDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getTopologyInfoListDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findTopologyInfoListDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteTopologyInfoListDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveTopologyInfoListDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveTopologyInfoListDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllTopologyInfoListDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = TopologyInfoListDTODataInit;
exports.genData = genTopologyInfoListDTOData;
exports.getData = getTopologyInfoListDTOData;
exports.findData = findTopologyInfoListDTOData;
exports.getListData = getTopologyInfoListDTOListData;
exports.deleteData = deleteTopologyInfoListDTOData;
exports.saveData = saveTopologyInfoListDTOData;
exports.saveListData = saveTopologyInfoListDTOListData;
exports.getAllData = getAllTopologyInfoListDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    TopologyInfoListDTODataInit();
}

var overrideModule = '../overrides/TopologyInfoListDTO';
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



