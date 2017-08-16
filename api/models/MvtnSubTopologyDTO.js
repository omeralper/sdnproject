'use strict';

//Model Definition File for MvtnSubTopologyDTO.js

//var SubTopologyDTO = require('./SubTopologyDTO');

'use strict';
/**
* Sanal agin fizikseldeki karsilik geldigi topoloji bilgisini tanimlayan veri modeli.
*/
exports.MvtnSubTopologyDTO =  {
    type:'class',
    name:'MvtnSubTopologyDTO',
    fields: {
        mvtnNetworkId : { name: 'mvtnNetworkId', type: 'Integer', isRequired: true }, 
        subTopologyList : { name: 'subTopologyList', type: 'Array', subType: 'SubTopologyDTO', isRequired: true }, 
        selectedSubTopologyId : { name: 'selectedSubTopologyId', type: 'String', isRequired: true }
    }
}


//Mockup System for MvtnSubTopologyDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMvtnSubTopologyDTO';
var dto_name = 'MvtnSubTopologyDTO';

function MvtnSubTopologyDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMvtnSubTopologyDTOData();
    }
}

function genMvtnSubTopologyDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMvtnSubTopologyDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMvtnSubTopologyDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findMvtnSubTopologyDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMvtnSubTopologyDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMvtnSubTopologyDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveMvtnSubTopologyDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMvtnSubTopologyDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = MvtnSubTopologyDTODataInit;
exports.genData = genMvtnSubTopologyDTOData;
exports.getData = getMvtnSubTopologyDTOData;
exports.findData = findMvtnSubTopologyDTOData;
exports.getListData = getMvtnSubTopologyDTOListData;
exports.deleteData = deleteMvtnSubTopologyDTOData;
exports.saveData = saveMvtnSubTopologyDTOData;
exports.saveListData = saveMvtnSubTopologyDTOListData;
exports.getAllData = getAllMvtnSubTopologyDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    MvtnSubTopologyDTODataInit();
}

var overrideModule = '../overrides/MvtnSubTopologyDTO';
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



