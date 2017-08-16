'use strict';

//Model Definition File for MetricDefinitions.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var MetricDefinition = require('./MetricDefinition');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* metriklerinin ve taglerinin tanımı
*/
exports.MetricDefinitions =  {
    type:'class',
    name:'MetricDefinitions',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        metricDefs : { name: 'metricDefs', type: 'Array', subType: 'MetricDefinition', isRequired: true }
    }
}


//Mockup System for MetricDefinitions.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMetricDefinitions';
var dto_name = 'MetricDefinitions';

function MetricDefinitionsDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMetricDefinitionsData();
    }
}

function genMetricDefinitionsData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMetricDefinitionsData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMetricDefinitionsListData(options) {
    return mockup.getListData(data_key, options);
}

function findMetricDefinitionsData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMetricDefinitionsData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMetricDefinitionsData(data) {
    return mockup.saveData(data_key, data);
}

function saveMetricDefinitionsListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMetricDefinitionsData() {
    return mockup.getAllData(data_key);
}

exports.init = MetricDefinitionsDataInit;
exports.genData = genMetricDefinitionsData;
exports.getData = getMetricDefinitionsData;
exports.findData = findMetricDefinitionsData;
exports.getListData = getMetricDefinitionsListData;
exports.deleteData = deleteMetricDefinitionsData;
exports.saveData = saveMetricDefinitionsData;
exports.saveListData = saveMetricDefinitionsListData;
exports.getAllData = getAllMetricDefinitionsData;

function autoInit(){
    mockup.initDatabase(data_key);
    MetricDefinitionsDataInit();
}

var overrideModule = '../overrides/MetricDefinitions';
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



