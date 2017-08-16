'use strict';

//Model Definition File for MetricDefinition.js

//var METRIC_TYPE = require('./METRIC_TYPE');

'use strict';

exports.MetricDefinition =  {
    type:'class',
    name:'MetricDefinition',
    fields: {
        metricName : { name: 'metricName', type: 'String', isRequired: true }, 
        producer : { name: 'producer', type: 'String', isRequired: true }, 
        metricType : { name: 'metricType', type: 'METRIC_TYPE', isRequired: true }, 
        metricUnit : { name: 'metricUnit', type: 'String', isRequired: true }, 
        tagNames : { name: 'tagNames', type: 'Array', subType: 'string', isRequired: true }
    }
}


//Mockup System for MetricDefinition.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMetricDefinition';
var dto_name = 'MetricDefinition';

function MetricDefinitionDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMetricDefinitionData();
    }
}

function genMetricDefinitionData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMetricDefinitionData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMetricDefinitionListData(options) {
    return mockup.getListData(data_key, options);
}

function findMetricDefinitionData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMetricDefinitionData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMetricDefinitionData(data) {
    return mockup.saveData(data_key, data);
}

function saveMetricDefinitionListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMetricDefinitionData() {
    return mockup.getAllData(data_key);
}

exports.init = MetricDefinitionDataInit;
exports.genData = genMetricDefinitionData;
exports.getData = getMetricDefinitionData;
exports.findData = findMetricDefinitionData;
exports.getListData = getMetricDefinitionListData;
exports.deleteData = deleteMetricDefinitionData;
exports.saveData = saveMetricDefinitionData;
exports.saveListData = saveMetricDefinitionListData;
exports.getAllData = getAllMetricDefinitionData;

function autoInit(){
    mockup.initDatabase(data_key);
    MetricDefinitionDataInit();
}

var overrideModule = '../overrides/MetricDefinition';
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



