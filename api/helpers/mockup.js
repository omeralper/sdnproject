//PROXY mesajları
'use strict';
var merge = require('merge');
var is = require('is_js');
var moment = require('moment');
var loremIpsum = require('lorem-ipsum');
// Load Chance
var Chance = require('chance');
// Instantiate Chance so it can be used
var chance = new Chance();

var database = {};


module.exports = (function () {
    //function privateMethod() {
    //}
    // var privateVaribla =;

    var sha1 = require('sha1');
    var etag = require('etag');
    var uuid = require('uuid-lib');
    var logger = require('./logger.js').Logger;

    var self = {

        database: database,

        getData: function (data_key, id, isRaw) {
            var local_db = this.database[data_key];
            if (local_db) {
                return this.processData(local_db.index[id || ''], isRaw ? null : local_db.process_options);
            }
            return null;
        },

        getListData: function (data_key, options) {

            var self = this;

            var local_db = this.database[data_key];
            var dataStore = local_db.store;
            var process_options = local_db.process_options;//set by  options.process_options

            if (options.queryOptions) {

                dataStore = dataStore.filter(function (itm, idx, all) {

                    return self.evalQueryOptions(options.queryOptions, itm, idx, all);

                })
            }

            var TOTAL = dataStore.length;

            if (options.sortOptions && options.sortOptions.fieldName) {
                var comperator;
                if (options.sortOptions.isAscend) {
                    comperator = function (a, b) {
                        return (a[options.sortOptions.fieldName] || '').toString().localeCompare((b[options.sortOptions.fieldName] || '').toString());
                    }
                } else {
                    comperator = function (b, a) {
                        return (a[options.sortOptions.fieldName] || '').toString().localeCompare((b[options.sortOptions.fieldName] || '').toString());
                    }
                }
                dataStore = dataStore.sort(comperator);
            }

            var PAGE_SIZE = (options.pageSize && options.pageSize > 0) ? options.pageSize : TOTAL;
            var TOTAL_PAGE = Math.ceil(TOTAL / PAGE_SIZE);

            var response = {
                currentPageNumber: Math.max(Math.min(options.startPage, TOTAL_PAGE - 1), 0),
                currentPageSize: PAGE_SIZE,
                totalPages: TOTAL_PAGE,
                totalItems: TOTAL,
                sortOptions: options.sortOptions
            };

            var startItem = response.currentPageNumber * response.currentPageSize;
            var endItem = Math.min(TOTAL, startItem + response.currentPageSize);

            var list = [];
            for (var i = startItem; i < endItem; i++) {
                list.push(this.processData(dataStore[i], process_options));
            }
            response.list = list;
            return self.genResponse(response);
        },

        findData: function (data_key, query, isRaw) {
            var local_db = this.database[data_key];
            var self = this;
            if (local_db) {
                var filteredData = local_db.store.filter(function (itm) {
                    var result = true;
                    for (var i in query) {
                        result = result && itm[i] == query[i];
                    }
                    return result;
                });

                if (!isRaw) {
                    return filteredData.map(function (val) {
                        return self.processData(val, local_db.process_options);
                    });
                }
                return filteredData;
            }
            return [];
        },

        deleteData: function (data_key, id) {
            var local_db = this.database[data_key];
            if (local_db) {
                var data = local_db.index[id];
                if (data) {
                    delete local_db.index[id];
                    local_db.store = local_db.store.filter(function (itm, idx, all) {
                        return itm.id != id;
                    })
                    return this.processData(data, local_db.process_options);
                }
            }
            return null;
        },

        saveData: function (data_key, data) {
            var local_db = this.database[data_key];
            if (local_db) {

                data.version = data.version || 1;
                data.revision = data.revision ? data.revision + 1 : 1;
                data.timestamp = new Date();

                if (data.modified) data.modified = new Date();
                if (data.created) data.created = new Date();

                if (data.id && local_db.index[data.id]) {
                    //local_db.index[data.id] = data;
                    /*for (var i = 0, l = local_db.store.length; i < l; i++) {
                     if (local_db.store[i].id == data.id) {
                     var current = local_db.store[i];
                     //copy new values to currently stored object, this way we solve reference problems.
                     for (var k in data) current[k] = data[k];
                     break;
                     }
                     }*/
                    var current = local_db.index[data.id];
                    for (var k in data) current[k] = data[k];
                } else {
                    data.id = data.id || this.genId(data_key);// (data_key + '_' + this.genRequestId()).substring(0, 32);
                    local_db.store.push(data);
                    local_db.index[data.id] = data;
                }

                return this.processData(data, local_db.process_options);
            }
            return null;
        },

        saveListData: function (data_key, dataList) {
            if (dataList) {
                for (var i = 0; i < dataList.length; i++) {
                    this.saveData(data_key, dataList[i]);
                }
            }
        },

        initDatabase: function (data_key, process_options) {
            var local_db = {index: {}, store: [], process_options: process_options};
            this.database[data_key] = local_db;
        },

        processData: function (data, options) {
            var newData = data;
            if (options && data) {
                if (options.exclude_list) {
                    newData = {};
                    for (var k in data) newData[k] = data[k];

                    for (var idx in options.exclude_list) {
                        delete newData[options.exclude_list[idx]];
                    }
                }
            }
            return newData;
        },

        genListData: function (options, TOTAL, callback) {

            /*
             "options": {
             "startPage": 0,
             "pageSize": 0,
             "sortOptions": {
             "fieldName": "string",
             "isAscend": true
             },
             "fields": [
             "string"
             ],
             "topologyType": "PHYSICAL"
             }
             */

            //var TOTAL = 97;
            var dataStore;
            var process_options;

            if (options.data_key) {
                var local_db = this.database[options.data_key];
                if (!local_db) {
                    local_db = {index: {}, store: [], process_options: options.process_options};
                    for (var i = 0; i < TOTAL; i++) {
                        var data = callback(options, response, i);
                        local_db.store.push(data);
                        local_db.index[data.id] = data;
                    }
                    this.database[options.data_key] = local_db;
                }

                dataStore = local_db.store;
                process_options = local_db.process_options;

                if (options.queryOptions) {

                    dataStore = dataStore.filter(function (itm, idx, all) {

                        return self.evalQueryOptions(options.queryOptions, itm, idx, all);

                    })
                }
                TOTAL = dataStore.length;

                if (options.sortOptions && options.sortOptions.fieldName) {
                    var comperator;
                    if (options.sortOptions.isAscend) {
                        comperator = function (a, b) {
                            return (a[options.sortOptions.fieldName] || '').toString().localeCompare((b[options.sortOptions.fieldName] || '').toString());
                        }
                    } else {
                        comperator = function (b, a) {
                            return (a[options.sortOptions.fieldName] || '').toString().localeCompare((b[options.sortOptions.fieldName] || '').toString());
                        }
                    }
                    dataStore = dataStore.sort(comperator);
                }

            }

            var PAGE_SIZE = (options.pageSize && options.pageSize > 0) ? options.pageSize : TOTAL;
            var TOTAL_PAGE = Math.ceil(TOTAL / PAGE_SIZE);

            var response = {
                currentPageNumber: Math.max(Math.min(options.startPage, TOTAL_PAGE - 1), 0),
                currentPageSize: PAGE_SIZE,
                totalPages: TOTAL_PAGE,
                totalItems: TOTAL,
                sortOptions: options.sortOptions
            };

            var startItem = response.currentPageNumber * response.currentPageSize;
            var endItem = Math.min(TOTAL, startItem + response.currentPageSize);

            var list = [];

            if (options.data_key) {
                for (var i = startItem; i < endItem; i++) {
                    list.push(this.processData(dataStore[i], process_options));
                }
            } else {
                for (var i = startItem; i < endItem; i++) {
                    list.push(this.processData(callback(options, response, i), process_options));
                }
            }
            response.list = list;
            return self.genResponse(response);
        },

        getRandomData: function (data_key, isRaw) {
            var local_db = this.database[data_key];
            if (local_db) {
                var id = this.genRandom(0, local_db.store.length - 1);
                return this.processData(local_db.store[id], isRaw ? null : local_db.process_options);
            }
            return null;
        },

        getDataByField: function (data_key, field_name, field_value, isRaw) {
            var local_db = this.database[data_key];
            if (local_db) {
                var result_db = local_db.store.filter(function (element, index, array) {
                    return element[field_name] == field_value;
                });

                if (result_db.length > 0) {
                    return this.processData(result_db[0], isRaw ? null : local_db.process_options);
                }
            }
            return null;
        },

        getAllData: function (data_key) {
            var local_db = this.database[data_key];
            if (local_db) {
                return local_db.store;
            }
            return null;
        },

        // Generation Functions

        genData: function (data_key, dto_name, overrides, level, dto_map) {
            var data = this.genDTO(dto_name, overrides, level, dto_map);
            this.saveData(data_key, data);
            return data;
        },

        genDTO: function (dto_name, overrides, level, dto_map) {
            dto_map = dto_map || {};
            var dtoDef = require('../models/' + dto_name);
            var dto = dtoDef[dto_name];
            var data;
            level = (level || 0);
            if (level < 2) {
                if (dto.type == "class") {
                    if (!dto_map[dto_name]) {
                        dto_map[dto_name] = true;
                        data = {};
                        for (var i in dto.fields) {
                            if (is.existy(overrides) && overrides.hasOwnProperty(i)) {
                                data[i] = overrides[i];
                            } else {
                                var genData = this.genField(i, dto.fields[i], dto, level, dto_map);
                                if (is.existy(genData)) data[i] = genData;
                            }
                        }
                        dto_map[dto_name] = false;
                    } else {
                        logger.info("Circular referans found, ignoring " + dto_name);
                    }
                } else {
                    //console.trace("Gen State for:"+dto_name);
                    data = this.genStateFromArray(dto.values);
                }
                return data;
            }
        },

        interpretName: function (name) {
            var lower_name = name.toLowerCase();
            if (lower_name.indexOf('priority') > -1) return "priority";
            if (lower_name.indexOf('bandwidthunit') > -1)
            return lower_name;
            if (lower_name.indexOf('bandwidth') > -1) return "bandwidth";
            if (lower_name.indexOf('mac') > -1) return "mac";
            if (lower_name.indexOf('username') > -1) return "username";
            if (lower_name.indexOf('name') > -1) return "name";

            return lower_name;
        },

        genField: function (fieldName, fieldDef, dto, level, dto_map) {
            level = level || 0;
            if (!fieldDef.subType) {
                switch (this.interpretName(fieldName)) {
                    case 'id':
                    //return (dto.name+'_'+this.genRequestId()).substr(0,32);
                    case 'topologyid':
                        return this.genId(dto.name);// (dto.name+'_'+this.genRequestId()).substr(0,32);
                    case 'version':
                        return 1;
                    case 'revision' :
                        return 1;
                    case 'timestamp' :
                        return this.genTimestamp();
                    case 'name':
                        return dto.name + ' #' + this.genRandom(1, 1000);
                    case 'surname' :
                        return this.genSurName();
                    case 'securitylevel':
                        return this.genRandom(1, 7);
                    case 'priority':
                        return this.genRandom(1, 20);
                    case 'bandwidth':
                        return 10 * this.genRandom(1, 100);
                    case 'email':
                        return this.genEmail();
                    case 'ip':
                    case 'ipv4':
                        return this.genIP();
                    case 'ipv6':
                        return chance.ipv6();
                    case 'mac':
                        return this.genMAC();
                    case 'image':
                        return chance.avatar();
                    case 'notes':
                        return ''; //if (fieldDef.type == 'String') return this.genLoremIpsum(); else break;
                    case 'portnumberlist':
                        return this.genRandom(1, 48);
                    case 'flows':
                        return this.genRandom(1, 400000);
                    case 'x':
                    case 'y':
                        return (this.genRandom(0, 100000) / this.genRandom(1, 99)).toString();
                }
            }

            switch (fieldDef.type.toLowerCase()) {
                case 'string':
                    return this.genLoremString();
                case 'long':
                    return this.genRandom(0, 4000000);
                case 'integer':
                    return this.genRandom(0, 2000000);
                case 'float':
                case 'double':
                    return this.genRandom(0, 10000) / this.genRandom(1, 99);
                case 'date':
                    return new Date();
                case 'boolean':
                    return (this.genRandom(0, 1) == 0);
                case 'array': {
                    var data = [];
                    for (var i = 0, j = this.genRandom(1, 3); i < j; i++) {
                        //data.push(this.genDTO(fieldDef.subType));
                        var genData = this.genField(fieldName, {type: fieldDef.subType}, dto, level + 1, dto_map);
                        if (genData != null) data.push(genData);
                    }
                    return data;
                }
                default : {
                    return this.genDTO(fieldDef.type, null, level + 1, dto_map);
                }
            }
        },

        genIdListData: function (idList, callback) {
            var list = [];
            for (var i = 0; i < idList.length; i++) {
                list.push(callback(idList[i], i));
            }
            return self.genResponse(list);
        },

        genResponse: function (data) {
            var response = {
                token: {
                    requestId: self.genRequestId(),
                    timestamp: self.genTimestamp()
                },
                //etag: "",
                //digest: "",
                status: "SUCCESS",
                //errorInfo: {
                //    code: 0,
                //    message: "string",
                //    extras: {}
                //},
                //"data": data
            };

            if (data) response.data = data;

            response.etag = etag(JSON.stringify(response)).replace(/"/g, '');
            response.digest = sha1(JSON.stringify(response));
            return response;
        },

        genErrorResponse: function (status, error_code, error_message) {
            var response = {
                token: {
                    requestId: self.genRequestId(),
                    timestamp: self.genTimestamp()
                },
                //etag: "",
                //digest: "",
                status: status,
                errorInfo: {
                    code: error_code,
                    message: error_message,
                    //    extras: {}
                },
                //"data": data
            };

            response.etag = etag(JSON.stringify(response)).replace(/"/g, '');
            response.digest = sha1(JSON.stringify(response));
            return response;
        },

        genEmptyListResponse: function (data) {

            return this.genResponse(merge({
                currentPageNumber: 0,
                currentPageSize: 0,
                totalPages: 0,
                totalItems: 0,
                sortOptions: {
                    "fieldName": "id",
                    "isAscend": true
                }
            }, data));

        },

        genTimestamp: function () {
            return (new Date()).toISOString();
        },

        genId: function (key) {
            return [key, uuid.raw()].join('_').substr(0, 32);
        },

        genRequestId: function () {
            return uuid.raw();
        },

        genRandom: function (min, max) {
            return Math.round(min + Math.random() * (max - min));
        },

        genState: function () {
//            return arguments[self.genRandom(0, arguments.length - 1)];
            var merged = [].concat.apply([], arguments);
            return merged[self.genRandom(0, merged.length - 1)];
        },

        genStateFromArray: function (values) {
            return values[self.genRandom(0, values.length - 1)];
        },

        genIP: function (ipRange) {
            //return this.genRandom(1, 255) + "." + this.genRandom(1, 255) + "." + this.genRandom(1, 255) + "." + this.genRandom(1, 255);
            if (ipRange) {
                return this.intToIP(ipRange.hostMin_raw + this.genRandom(0, ipRange.hosts >> 1));
            } else {
                return chance.ip();
            }
        },

        genSubnetMask: function (networkSize, isRaw) {
            networkSize = Math.min(32, Math.max(0, networkSize));
            var maskValue = Math.pow(2, 32) - Math.pow(2, 32 - networkSize); // Math. (2^networkSize)-1;
            return isRaw ? maskValue : this.intToIP(maskValue);
        },

        intToIP: function (intIp) {
            var mask = [];
            for (var i = 0; i < 4; i++) {
                mask.unshift(intIp & 255);
                intIp = intIp >> 8;
            }
            return mask.join(".");
        },

        ipToInt: function (ip) {
            var parts = ip.split(".");
            if (parts.length == 4) {
                var res = 0;
                for (var i = 0; i < 4; i++) {
                    res += parseInt(parts[i], 10) << 8 * (3 - i);
                }
            }
            return res;
        },
        genIpRange: function (networkSize, startAddress) {
            networkSize = Math.min(32, Math.max(0, networkSize));
            var maxNetworkSize = 0;
            if (!startAddress) {
                if (networkSize <= 8) {
                    startAddress = "0.0.0.0";
                    maxNetworkSize = 24;
                } else if (networkSize < 12) {
                    startAddress = "10.0.0.0";
                    maxNetworkSize = 12;
                } else if (networkSize < 16) {
                    startAddress = "172.16.0.0";
                    maxNetworkSize = 16;
                } else {
                    startAddress = "192.168.0.0";
                    maxNetworkSize = 32;
                }
            }

            var networkMaskInt = this.genSubnetMask(networkSize, true);
            var wildcard = ~networkMaskInt;
            var maxHost = Math.pow(2, 32 - networkSize) - 2;
            //var diff = maxNetworkSize-networkSize;

            var startAddressInt = (this.ipToInt(startAddress) & networkMaskInt);//+this.genRandom(0,Math.pow(2,diff));
            var endAddressInt = startAddressInt | wildcard;

            var result = {
                netmask: this.intToIP(networkMaskInt),
                netmask_raw: networkMaskInt,
                widcard: this.intToIP(wildcard),
                widcard_raw: wildcard,
                network: this.intToIP(startAddressInt) + "/" + networkSize,
                broadcast: this.intToIP(endAddressInt),
                broadcast_raw: endAddressInt,
                hostMin: this.intToIP(startAddressInt + 1),
                hostMin_raw: (startAddressInt + 1),
                hostMax: this.intToIP(endAddressInt - 1),
                hostMax_raw: (endAddressInt - 1),
                hosts: maxHost,
                networkSize: networkSize
            };

            return result;

        },

        genMAC: function () {
            return this.genRandom(0, 255).toString(16) + ":" + this.genRandom(0, 255).toString(16) + ":" + this.genRandom(0, 255).toString(16) + ":" +
                this.genRandom(0, 255).toString(16) + ":" + this.genRandom(0, 255).toString(16) + ":" + this.genRandom(0, 255).toString(16) + ":" +
                this.genRandom(0, 255).toString(16) + ":" + this.genRandom(0, 255).toString(16);
        },

        genPort: function (isRestricted) {
            return isRestricted ? this.genRandom(1, 1024) : this.genRandom(1025, 65535);
        },

        genLoremString: function () {
            return loremIpsum({
                count: 1                      // Number of words, sentences, or paragraphs to generate.
                , units: 'words'            // Generate words, sentences, or paragraphs.
                , sentenceLowerBound: 5         // Minimum words per sentence.
                , sentenceUpperBound: 15        // Maximum words per sentence.
                , paragraphLowerBound: 3        // Minimum sentences per paragraph.
                , paragraphUpperBound: 7        // Maximum sentences per paragraph.
                , format: 'plain'               // Plain text or html
                //, words: ['ad', 'dolor', ... ]  // Custom word dictionary. Uses dictionary.words (in lib/dictionary.js) by default.
                //, random: Math.random           // A PRNG function. Uses Math.random by default
                //, suffix: EOL                   // The character to insert between paragraphs. Defaults to default EOL for your OS.
            });
        },

        genLoremIpsum: function () {
            return loremIpsum({
                count: 1                      // Number of words, sentences, or paragraphs to generate.
                , units: 'paragraphs'            // Generate words, sentences, or paragraphs.
                , sentenceLowerBound: 5         // Minimum words per sentence.
                , sentenceUpperBound: 15        // Maximum words per sentence.
                , paragraphLowerBound: 3        // Minimum sentences per paragraph.
                , paragraphUpperBound: 7        // Maximum sentences per paragraph.
                , format: 'plain'               // Plain text or html
                //, words: ['ad', 'dolor', ... ]  // Custom word dictionary. Uses dictionary.words (in lib/dictionary.js) by default.
                //, random: Math.random           // A PRNG function. Uses Math.random by default
                //, suffix: EOL                   // The character to insert between paragraphs. Defaults to default EOL for your OS.
            });
        },

        genEmail: function () {
            return chance.email({domain: 'milat.local'});
        },

        genName: function () {
            return chance.first({nationality: 'en'});
        },

        genSurName: function () {
            return chance.last({nationality: 'en'});
        },

        /**
         * Evaluate QueryOptions criteria on the itm data structure.
         * @param queryOptions  QueryOptions object
         * @param itm           DTO object to be evaluated.
         * @param idx           Index of the DTO object in the data store
         * @param all           Datastore which contains all DTO objects.
         * @returns {*}         true if itm satisfies the QueryOptions criteria, otherwise false
         */
        evalQueryOptions: function (queryOptions, itm, idx, all) {

            switch (queryOptions.operator) {
                //find field value
                case "EXACT_VALUE":
                case "VALUE": {
                    var list;
                    var queryString = this.parseValue(queryOptions).toString().toLowerCase();
                    var queryFunc;

                    if (queryOptions.operator == "VALUE") {
                        queryFunc = function (v) {
                            return (v.toString().toLowerCase().indexOf(queryString) != -1);
                        };
                    } else {
                        queryFunc = function (v) {
                            return (v.toString().toLowerCase() == queryString);
                        };
                    }

                    //wildcard request, means search in ll fields of the DTO
                    if (queryOptions.fieldName == "*") {
                        list = itm;
                    } else {
                        list = {
                            value: itm[queryOptions.fieldName]
                        }
                    }

                    for (var prop in list) {
                        var fv = list[prop] || "";
                        if (queryFunc(fv)) return true;
                    }

                    /*
                     if (queryOptions.fieldName == "*") {
                     for (var prop in itm) {
                     var value = itm[prop] || "";
                     //WARN: we use indexOf to match for partial values
                     //if (value.toString().toLowerCase().indexOf(queryOptions.fieldValue.toLowerCase()) != -1) return true;
                     if (queryOptions.operator == "VALUE") {
                     if (value.toString().toLowerCase().indexOf(this.parseValue(queryOptions).toString().toLowerCase()) != -1) return true;
                     } else {
                     if (value.toString().toLowerCase() == this.parseValue(queryOptions).toString().toLowerCase()) return true;
                     }

                     }
                     } else {
                     var value = itm[queryOptions.fieldName] || "";
                     //if fieldname is specified then exact match is required
                     if (queryOptions.operator == "VALUE") {
                     //if (value.toString().toLowerCase().indexOf(queryOptions.fieldValue.toLowerCase()) != -1) return true;
                     if (value.toString().toLowerCase().indexOf(this.parseValue(queryOptions).toString().toLowerCase()) != -1) return true;
                     } else {
                     //if (value.toString().toLowerCase() == queryOptions.fieldValue.toLowerCase()) return true;
                     if (value.toString().toLowerCase() == this.parseValue(queryOptions).toString().toLowerCase()) return true;
                     }
                     }*/
                    break;
                }
                case "AND": {
                    // leftQuery and rightQuery are also QueryOptions data type, so we AND them
                    return this.evalQueryOptions(queryOptions.leftQuery, itm, idx, all) && this.evalQueryOptions(queryOptions.rightQuery, itm, idx, all);
                }
                case "OR": {
                    // leftQuery and rightQuery are also QueryOptions data type, so we OR them
                    return this.evalQueryOptions(queryOptions.leftQuery, itm, idx, all) || this.evalQueryOptions(queryOptions.rightQuery, itm, idx, all);
                }
                case "NOT": {
                    // leftQuery is also QueryOptions data type, so we NOT it. rightQuery is not used.
                    return !this.evalQueryOptions(queryOptions.leftQuery, itm, idx, all);
                }
                // case "BETWEEN":{
                //     // this is not possible, this definition will be discarded on the next iteration
                //     break;
                // }
                case "GREATER": {
                    var value = itm[queryOptions.fieldName] || "";
                    //return (value > queryOptions.fieldValue);
                    return (value > this.parseValue(queryOptions));
                }
                case "SMALLER": {
                    var value = itm[queryOptions.fieldName] || "";
                    //return (value < queryOptions.fieldValue);
                    return (value < this.parseValue(queryOptions));
                }
                case "GREATER_EQUAL": {
                    var value = itm[queryOptions.fieldName] || "";
                    //return (value >= queryOptions.fieldValue);
                    return (value >= this.parseValue(queryOptions));
                }
                case "SMALLER_EQUAL": {
                    var value = itm[queryOptions.fieldName] || "";
                    //return (value <= queryOptions.fieldValue);
                    return (value <= this.parseValue(queryOptions));
                }
                case "LIST": {
                    //fieldValue contains list of items, seperated with pipe(|)
                    //if any value matches fieldName then its returned
                    var values = queryOptions.fieldValue.split('|');
                    var value = itm[queryOptions.fieldName];
                    for (var i = 0, j = values.length; i < j; i++) {
                        if (value == values[i]) return true;
                    }
                    return false;
                }
                default:
                    return true;
            }
            return false;
        },

        parseValue: function (queryOptions) {

            switch (queryOptions.fieldName) {
                case 'modified':
                case 'created':
                case 'date':
                case 'time':
                    return moment(queryOptions.fieldValue).toDate();
            }

            if (is.number(queryOptions.fieldValue)) {
                return parseFloat(queryOptions.fieldValue);
            } else if (is.boolean(queryOptions.fieldValue)) {
                return is.truthy(queryOptions.fieldValue);
            } else if (is.date(queryOptions.fieldValue)) {
                return moment(queryOptions.fieldValue).toDate();
            } else {
                return queryOptions.fieldValue;
            }
        }

    };
    return self;
}());



