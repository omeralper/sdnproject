'use strict';

var mockup = require('../helpers/mockup');
var switch_mockup = require('./mock_switch_management');

var isGenData = false;

var nacProfileData = [
    genNacProfile("profile001", 'Standart Kullanıcı',2),
    genNacProfile("profile002", 'Misafir Kullanıcı',1)
];

function genNacProfile(id, name, securityLevel) {
    return {
        "id": id,
        "version": 1,
        "revision": 1,
        "timestamp": new Date(),
        "name": name,
        "status":!isGenData?"ACTIVE" :mockup.genState("ACTIVE", "PASSIVE"),
        "notes": "",
        "securityLevel": securityLevel,
        "created": new Date(),
        "modified": new Date()
    };
}

var nacUserData = [
    genNacUser("usr001", 'Can','Dağ', [nacProfileData[0]]),
    genNacUser("usr002", 'Jale','Dağ', [nacProfileData[1]])
];

function genNacUser(id, name, surname, profileList) {

    var username = [name,surname].filter(function(itm){ return itm; }).join('.').toLowerCase();

    return {
        "id": id,
        "version": 1,
        "revision": 1,
        "timestamp": new Date(),
        "username": username,
        "password":"12345",
        "name": name,
        "surname": surname,
        "email": username + "@milat.local",
        "status": !isGenData?"ACTIVE":mockup.genState("ACTIVE", "PASSIVE"),
        "notes": "",
        "securityLevel": profileList?profileList[0].securityLevel:1,
        "bandwidthLimit": mockup.genRandom(0,10)*500,
        "image": null, //"/images/unknown_person.gif",
        "created": new Date(),
        "modified": new Date(),
        "profileList": profileList || [],
        "deviceIdList": []
    };
}

var nacDeviceData = [
    genNacDevice("dev001", '12:34:54:23:45:65:89','10.0.0.1','Device 1','COMPUTER'),
    genNacDevice("dev002", '56:34:23:89:56:45:67','10.0.0.3','Device 2','COMPUTER')
];

function genNacDevice(id, mac, ip, name, type) {
    return {
        "id": id,
        "version": 1,
        "revision": 1,
        "timestamp": new Date(),
        "name": name,
        "status":!isGenData?"ACTIVE" :mockup.genState("ACTIVE", "PASSIVE"),
        "notes": "",
        "address": {
            "mac":mac,
            "ipv4":ip,
            "ipv6":""
        },
        "type": type,
        "securityLevel": mockup.genRandom(1,5),
        "userIdList": [],
        "created": new Date(),
        "modified": new Date()
    };
}

function assignUserDevice(user,device){
    addToList(user.deviceIdList,device.id);
    addToList(device.userIdList,user.id);
}

function assignUser(user){

    nacDeviceData.forEach(function(device) {
        device.userIdList = device.userIdList.filter(function(userId){
            return user.id !=userId;
        });
    });

    user.deviceIdList.forEach(function(id) { 
        var device = nacDeviceData.filter(function(t){
            return t.id==id;
        });
        if (device && device.length>0){
            assignUserDevice(user,device[0]);
        }
    });
}

function assignDevice(device){

    nacUserData.forEach(function(user) {
        user.deviceIdList = user.deviceIdList.filter(function(deviceId){
            return device.id != deviceId;
        });
    });

    device.userIdList.forEach(function(id) {
        var user = nacUserData.filter(function(t){
            return t.id==id;
        });
        if (user && user.length>0){
            assignUserDevice(user[0],device);
        }
    });
}

function assignUserDevice(user,device){
    addToList(user.deviceIdList,device.id);
    addToList(device.userIdList,user.id);
}


function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function addToList(list, value) {
    if (list.indexOf(value) ===-1) {
        list.push(value);
    }
}


assignUserDevice(nacUserData[0],nacDeviceData[0]);
assignUserDevice(nacUserData[0],nacDeviceData[1]);
assignUserDevice(nacUserData[1],nacDeviceData[1]);

var nacAccessPortData = [
    genAccessPort(nacDeviceData[0].id, switch_mockup.switchData[0].id ,mockup.genRandom(1,16)),
    genAccessPort(nacDeviceData[1].id, switch_mockup.switchData[1].id ,mockup.genRandom(1,16))
];

function genAccessPort(deviceId, switchId, portNumber) {
    return {
        "id": mockup.genRequestId(),
        "version": 1,
        "revision": 1,
        "timestamp": new Date(),
        "deviceId": deviceId,
        "switchId": switchId,
        "portNumber": portNumber,
        "status":!isGenData?"ACTIVE" :mockup.genState("ACTIVE", "PASSIVE"),
    };
}

exports.datakey_nacusers = "nacusers";
exports.datakey_nacprofiles = "nacprofiles";
exports.datakey_nacdevices = "nacdevices";
exports.datakey_nacaccessports = "nacaccessports";
exports.datakey_aaaservers = "aaaservers";
exports.datakey_nacuserdevices = "nacuserdevices";

exports.isGenData = isGenData;
exports.genNacUser = genNacUser;
exports.genNacProfile = genNacProfile;
exports.genNacDevice = genNacDevice;
exports.genAccessPort = genAccessPort;
exports.assignUser = assignUser;
exports.assignDevice = assignDevice;

exports.nacProfileData = nacProfileData;
exports.nacUserData = nacUserData;
exports.nacDeviceData = nacDeviceData;
exports.nacAccessPortData = nacAccessPortData;
exports.nacAccessPortData = nacAccessPortData;