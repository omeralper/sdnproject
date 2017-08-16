'use strict';

//Model Definition File for MetricAndTagNames.js

//var ErrorInfo = require('./ErrorInfo');
//var GenericResponse = require('./GenericResponse');
//var RETURN_STATUS = require('./RETURN_STATUS');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Zaman serisi veritabanındaki metriklerin ve taglerin listesi
*/
exports.MetricAndTagNames =  {
    type:'class',
    name:'MetricAndTagNames',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        status : { name: 'status', type: 'RETURN_STATUS', isRequired: true }, 
        errorInfo : { name: 'errorInfo', type: 'ErrorInfo' }, 
        metricNames : { name: 'metricNames', type: 'Array', subType: 'string', isRequired: true }, 
        tagNames : { name: 'tagNames', type: 'Array', subType: 'string', isRequired: true }
    }
}


//Mockup System for MetricAndTagNames.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMetricAndTagNames';
var dto_name = 'MetricAndTagNames';

function MetricAndTagNamesDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMetricAndTagNamesData();
    }
}

function genMetricAndTagNamesData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMetricAndTagNamesData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMetricAndTagNamesListData(options) {
    return mockup.getListData(data_key, options);
}

function findMetricAndTagNamesData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMetricAndTagNamesData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMetricAndTagNamesData(data) {
    return mockup.saveData(data_key, data);
}

function saveMetricAndTagNamesListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMetricAndTagNamesData() {
    return mockup.getAllData(data_key);
}

exports.init = MetricAndTagNamesDataInit;
exports.genData = genMetricAndTagNamesData;
exports.getData = getMetricAndTagNamesData;
exports.findData = findMetricAndTagNamesData;
exports.getListData = getMetricAndTagNamesListData;
exports.deleteData = deleteMetricAndTagNamesData;
exports.saveData = saveMetricAndTagNamesData;
exports.saveListData = saveMetricAndTagNamesListData;
exports.getAllData = getAllMetricAndTagNamesData;

function autoInit(){
    mockup.initDatabase(data_key);
    MetricAndTagNamesDataInit();
}

var overrideModule = '../overrides/MetricAndTagNames';
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



