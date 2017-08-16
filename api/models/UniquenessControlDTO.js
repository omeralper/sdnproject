'use strict';

//Model Definition File for UniquenessControlDTO.js


'use strict';
/**
* Temel liste dönülen veri transfer model tanımıdır. Tüm liste fonksiyonlarından dönülecek veri transfer modelleri bu model’i temel alarak tanımlanacaktır.
*/
exports.UniquenessControlDTO =  {
    type:'class',
    name:'UniquenessControlDTO',
    fields: {
        fieldName : { name: 'fieldName', type: 'String', isRequired: true }, 
        value : { name: 'value', type: 'String', isRequired: true }
    }
}


//Mockup System for UniquenessControlDTO.js

var mockup = require('../helpers/mockup');

var data_key = 'IDUniquenessControlDTO';
var dto_name = 'UniquenessControlDTO';

function UniquenessControlDTODataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genUniquenessControlDTOData();
    }
}

function genUniquenessControlDTOData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getUniquenessControlDTOData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getUniquenessControlDTOListData(options) {
    return mockup.getListData(data_key, options);
}

function findUniquenessControlDTOData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteUniquenessControlDTOData(id) {
    return mockup.deleteData(data_key, id);
}

function saveUniquenessControlDTOData(data) {
    return mockup.saveData(data_key, data);
}

function saveUniquenessControlDTOListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllUniquenessControlDTOData() {
    return mockup.getAllData(data_key);
}

exports.init = UniquenessControlDTODataInit;
exports.genData = genUniquenessControlDTOData;
exports.getData = getUniquenessControlDTOData;
exports.findData = findUniquenessControlDTOData;
exports.getListData = getUniquenessControlDTOListData;
exports.deleteData = deleteUniquenessControlDTOData;
exports.saveData = saveUniquenessControlDTOData;
exports.saveListData = saveUniquenessControlDTOListData;
exports.getAllData = getAllUniquenessControlDTOData;

function autoInit(){
    mockup.initDatabase(data_key);
    UniquenessControlDTODataInit();
}

var overrideModule = '../overrides/UniquenessControlDTO';
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



