'use strict';

//Model Definition File for TopologyListOptions.js

//var AbstractListOptions = require('./AbstractListOptions');
//var SortOptions = require('./SortOptions');
//var TOPOLOGY_TYPE = require('./TOPOLOGY_TYPE');

'use strict';
/**
* Topoloji listelenmesinde kullanılacak parametrelerin tanımlanmasını sağlayan veri modelidir.
*/
exports.TopologyListOptions =  {
    type:'class',
    name:'TopologyListOptions',
    fields: {
        startPage : { name: 'startPage', type: 'Long', isRequired: true }, 
        pageSize : { name: 'pageSize', type: 'Long' }, 
        sortOptions : { name: 'sortOptions', type: 'SortOptions' }, 
        fields : { name: 'fields', type: 'Array', subType: 'string' }, 
        topologyType : { name: 'topologyType', type: 'TOPOLOGY_TYPE', isRequired: true }
    }
}


//Mockup System for TopologyListOptions.js

var mockup = require('../helpers/mockup');

var data_key = 'IDTopologyListOptions';
var dto_name = 'TopologyListOptions';

function TopologyListOptionsDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genTopologyListOptionsData();
    }
}

function genTopologyListOptionsData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getTopologyListOptionsData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getTopologyListOptionsListData(options) {
    return mockup.getListData(data_key, options);
}

function findTopologyListOptionsData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteTopologyListOptionsData(id) {
    return mockup.deleteData(data_key, id);
}

function saveTopologyListOptionsData(data) {
    return mockup.saveData(data_key, data);
}

function saveTopologyListOptionsListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllTopologyListOptionsData() {
    return mockup.getAllData(data_key);
}

exports.init = TopologyListOptionsDataInit;
exports.genData = genTopologyListOptionsData;
exports.getData = getTopologyListOptionsData;
exports.findData = findTopologyListOptionsData;
exports.getListData = getTopologyListOptionsListData;
exports.deleteData = deleteTopologyListOptionsData;
exports.saveData = saveTopologyListOptionsData;
exports.saveListData = saveTopologyListOptionsListData;
exports.getAllData = getAllTopologyListOptionsData;

function autoInit(){
    mockup.initDatabase(data_key);
    TopologyListOptionsDataInit();
}

var overrideModule = '../overrides/TopologyListOptions';
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



