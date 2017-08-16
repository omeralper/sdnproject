'use strict';

//Model Definition File for TopologyListRequest.js

//var GenericRequest = require('./GenericRequest');
//var SecurityToken = require('./SecurityToken');
//var TopologyListOptions = require('./TopologyListOptions');

'use strict';
/**
* Topolojilerin listelenmesi için kullanılacak istek veri modelidir.
*/
exports.TopologyListRequest =  {
    type:'class',
    name:'TopologyListRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        options : { name: 'options', type: 'TopologyListOptions', isRequired: true }
    }
}


//Mockup System for TopologyListRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDTopologyListRequest';
var dto_name = 'TopologyListRequest';

function TopologyListRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genTopologyListRequestData();
    }
}

function genTopologyListRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getTopologyListRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getTopologyListRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findTopologyListRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteTopologyListRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveTopologyListRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveTopologyListRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllTopologyListRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = TopologyListRequestDataInit;
exports.genData = genTopologyListRequestData;
exports.getData = getTopologyListRequestData;
exports.findData = findTopologyListRequestData;
exports.getListData = getTopologyListRequestListData;
exports.deleteData = deleteTopologyListRequestData;
exports.saveData = saveTopologyListRequestData;
exports.saveListData = saveTopologyListRequestListData;
exports.getAllData = getAllTopologyListRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    TopologyListRequestDataInit();
}

var overrideModule = '../overrides/TopologyListRequest';
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



