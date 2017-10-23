'use strict';

//Model Definition File for FlowListOptions.js

//var AbstractListOptions = require('./AbstractListOptions');
//var SortOptions = require('./SortOptions');

'use strict';
/**
* Akışların listelenmesinde kullanılacak parametrelerin tanımlanmasını sağlayan veri modelidir.
*/
exports.FlowListOptions =  {
    type:'class',
    name:'FlowListOptions',
    fields: {
        startPage : { name: 'startPage', type: 'Long', isRequired: true }, 
        pageSize : { name: 'pageSize', type: 'Long' }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions' }, 
        fields : { name: 'fields', type: 'Array', subType: 'string' }, 
        id : { name: 'id', type: 'String', isRequired: true }, 
        mvtnNetworkId : { name: 'mvtnNetworkId', type: 'String' }
    }
}


//Mockup System for FlowListOptions.js

var mockup = require('../helpers/mockup');

var data_key = 'IDFlowListOptions';
var dto_name = 'FlowListOptions';

function FlowListOptionsDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genFlowListOptionsData();
    }
}

function genFlowListOptionsData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getFlowListOptionsData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getFlowListOptionsListData(options) {
    return mockup.getListData(data_key, options);
}

function findFlowListOptionsData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteFlowListOptionsData(id) {
    return mockup.deleteData(data_key, id);
}

function saveFlowListOptionsData(data) {
    return mockup.saveData(data_key, data);
}

function saveFlowListOptionsListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllFlowListOptionsData() {
    return mockup.getAllData(data_key);
}

exports.init = FlowListOptionsDataInit;
exports.genData = genFlowListOptionsData;
exports.getData = getFlowListOptionsData;
exports.findData = findFlowListOptionsData;
exports.getListData = getFlowListOptionsListData;
exports.deleteData = deleteFlowListOptionsData;
exports.saveData = saveFlowListOptionsData;
exports.saveListData = saveFlowListOptionsListData;
exports.getAllData = getAllFlowListOptionsData;

function autoInit(){
    mockup.initDatabase(data_key);
    FlowListOptionsDataInit();
}

var overrideModule = '../overrides/FlowListOptions';
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



