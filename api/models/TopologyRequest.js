'use strict';

//Model Definition File for TopologyRequest.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');
//var TopologyOptions = require('./TopologyOptions');

'use strict';
/**
* Topoloji isteğinin sunucuya iletilmesi için kullanılan veri yapısı
*/
exports.TopologyRequest =  {
    type:'class',
    name:'TopologyRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        options : { name: 'options', type: 'TopologyOptions', isRequired: true }
    }
}


//Mockup System for TopologyRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDTopologyRequest';
var dto_name = 'TopologyRequest';

function TopologyRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genTopologyRequestData();
    }
}

function genTopologyRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getTopologyRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getTopologyRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findTopologyRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteTopologyRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveTopologyRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveTopologyRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllTopologyRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = TopologyRequestDataInit;
exports.genData = genTopologyRequestData;
exports.getData = getTopologyRequestData;
exports.findData = findTopologyRequestData;
exports.getListData = getTopologyRequestListData;
exports.deleteData = deleteTopologyRequestData;
exports.saveData = saveTopologyRequestData;
exports.saveListData = saveTopologyRequestListData;
exports.getAllData = getAllTopologyRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    TopologyRequestDataInit();
}

var overrideModule = '../overrides/TopologyRequest';
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



