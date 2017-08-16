'use strict';

//Model Definition File for LinkRequest.js

//var GenericRequest = require('./GenericRequest');
//var LinkDTO = require('./LinkDTO');
//var SecurityToken = require('./SecurityToken');

'use strict';
/**
* Bağlantı verilerinin sunucuya iletilmesi için kullanılan veri yapısı.
*/
exports.LinkRequest =  {
    type:'class',
    name:'LinkRequest',
    fields: {
        token : { name: 'token', type: 'SecurityToken', isRequired: true }, 
        etag : { name: 'etag', type: 'String' }, 
        digest : { name: 'digest', type: 'String' }, 
        data : { name: 'data', type: 'LinkDTO', isRequired: true }
    }
}


//Mockup System for LinkRequest.js

var mockup = require('../helpers/mockup');

var data_key = 'IDLinkRequest';
var dto_name = 'LinkRequest';

function LinkRequestDataInit() {
    for (var i = 0, j = mockup.genRandom(15,55); i < j; i++) {
        genLinkRequestData();
    }
}

function genLinkRequestData(overrides) {
    return mockup.genData(data_key, dto_name,overrides);
}

function getLinkRequestData(id,isRaw) {
    return mockup.getData(data_key, id,isRaw);
}

function getLinkRequestListData(options) {
    return mockup.getListData(data_key, options);
}

function findLinkRequestData(query,isRaw) {
    return mockup.findData(data_key, query,isRaw);
}

function deleteLinkRequestData(id) {
    return mockup.deleteData(data_key, id);
}

function saveLinkRequestData(data) {
    return mockup.saveData(data_key, data);
}

function saveLinkRequestListData(data) {
    return mockup.saveListData(data_key, data);
}

function getAllLinkRequestData() {
    return mockup.getAllData(data_key);
}

exports.init = LinkRequestDataInit;
exports.genData = genLinkRequestData;
exports.getData = getLinkRequestData;
exports.findData = findLinkRequestData;
exports.getListData = getLinkRequestListData;
exports.deleteData = deleteLinkRequestData;
exports.saveData = saveLinkRequestData;
exports.saveListData = saveLinkRequestListData;
exports.getAllData = getAllLinkRequestData;

function autoInit(){
    mockup.initDatabase(data_key);
    LinkRequestDataInit();
}

var overrideModule = '../overrides/LinkRequest';
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



