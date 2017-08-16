'use strict';

//Model Definition File for MetricAndTagPrefixes.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* metrik ve tag listesi almak için önekleri verilmelidir
*/
exports.MetricAndTagPrefixes =  {
    type:'class',
    name:'MetricAndTagPrefixes',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        metricPrefix : { name: 'metricPrefix', type: 'String', isRequired: true }, 
        tagPrefix : { name: 'tagPrefix', type: 'String', isRequired: true }
    }
}


//Mockup System for MetricAndTagPrefixes.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMetricAndTagPrefixes';
var dto_name = 'MetricAndTagPrefixes';

function MetricAndTagPrefixesDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMetricAndTagPrefixesData();
    }
}

function genMetricAndTagPrefixesData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMetricAndTagPrefixesData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMetricAndTagPrefixesListData(options) {
    return mockup.getListData(data_key, options);
}

function findMetricAndTagPrefixesData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMetricAndTagPrefixesData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMetricAndTagPrefixesData(data) {
    return mockup.saveData(data_key, data);
}

function saveMetricAndTagPrefixesListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMetricAndTagPrefixesData() {
    return mockup.getAllData(data_key);
}

exports.init = MetricAndTagPrefixesDataInit;
exports.genData = genMetricAndTagPrefixesData;
exports.getData = getMetricAndTagPrefixesData;
exports.findData = findMetricAndTagPrefixesData;
exports.getListData = getMetricAndTagPrefixesListData;
exports.deleteData = deleteMetricAndTagPrefixesData;
exports.saveData = saveMetricAndTagPrefixesData;
exports.saveListData = saveMetricAndTagPrefixesListData;
exports.getAllData = getAllMetricAndTagPrefixesData;

function autoInit(){
    mockup.initDatabase(data_key);
    MetricAndTagPrefixesDataInit();
}

var overrideModule = '../overrides/MetricAndTagPrefixes';
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



