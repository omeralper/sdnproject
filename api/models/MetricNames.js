'use strict';

//Model Definition File for MetricNames.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* metrik adı
*/
exports.MetricNames =  {
    type:'class',
    name:'MetricNames',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        metricNames : { name: 'metricNames', type: 'Array', subType: 'string', isRequired: true }
    }
}


//Mockup System for MetricNames.js

var mockup = require('../helpers/mockup');

var data_key = 'IDMetricNames';
var dto_name = 'MetricNames';

function MetricNamesDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genMetricNamesData();
    }
}

function genMetricNamesData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getMetricNamesData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getMetricNamesListData(options) {
    return mockup.getListData(data_key, options);
}

function findMetricNamesData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteMetricNamesData(id) {
    return mockup.deleteData(data_key, id);
}

function saveMetricNamesData(data) {
    return mockup.saveData(data_key, data);
}

function saveMetricNamesListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllMetricNamesData() {
    return mockup.getAllData(data_key);
}

exports.init = MetricNamesDataInit;
exports.genData = genMetricNamesData;
exports.getData = getMetricNamesData;
exports.findData = findMetricNamesData;
exports.getListData = getMetricNamesListData;
exports.deleteData = deleteMetricNamesData;
exports.saveData = saveMetricNamesData;
exports.saveListData = saveMetricNamesListData;
exports.getAllData = getAllMetricNamesData;

function autoInit(){
    mockup.initDatabase(data_key);
    MetricNamesDataInit();
}

var overrideModule = '../overrides/MetricNames';
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



