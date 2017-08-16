'use strict';

var mockup = require('../helpers/mockup');

var isGenData = false;

var permData = [
    genPerm("common", 'print',true),
    genPerm("common", 'export_pdf',true),
    genPerm("common", 'export_excel',true),
    genPerm("users", 'list',true),
    genPerm("users", 'view',true),
    genPerm("users", 'edit',true),
    genPerm("users", 'delete',true),
    genPerm("users", 'create',true),
    genPerm("users", 'change_pwd',true),
    genPerm("users", 'set_pwd',true),
    genPerm("users", 'lost_pwd',true),

    genPerm("roles", 'list',true),
    genPerm("roles", 'view',true),
    genPerm("roles", 'edit',true),
    genPerm("roles", 'delete',true),
    genPerm("roles", 'create',true),

    genPerm("phy_topo", 'view',true),
    genPerm("phy_topo", 'edit',true),

    genPerm("vir_topo", 'list',true),
    genPerm("vir_topo", 'view',true),
    genPerm("vir_topo", 'edit',true),
    genPerm("vir_topo", 'create',true),
    genPerm("vir_topo", 'delete_request',true),
    genPerm("vir_topo", 'delete_approve',true),
    genPerm("vir_topo", 'create_request',true),
    genPerm("vir_topo", 'create_approve',true),

    //NOT_IMPLEMENTED genPerm("flows", 'create',true),
    //NOT_IMPLEMENTED genPerm("flows", 'view',true),
    //NOT_IMPLEMENTED genPerm("flows", 'edit',true),
    genPerm("flows", 'delete',true),
    genPerm("flows", 'list',true),

    genPerm("paths", 'list',true),
    genPerm("paths", 'view',true),
    //genPerm("paths", 'edit',true),
    genPerm("paths", 'delete',true),
    genPerm("paths", 'create',true),

    genPerm("log", 'list',true),
    genPerm("log", 'edit',true),

    genPerm("version", 'list',true),

    genPerm("nacusers", 'list',true),
    genPerm("nacusers", 'view',true),
    genPerm("nacusers", 'edit',true),
    genPerm("nacusers", 'delete',true),
    genPerm("nacusers", 'create',true),
    genPerm("nacusers", 'change_pwd',true),
    genPerm("nacusers", 'set_pwd',true),
    genPerm("nacusers", 'lost_pwd',true),

    genPerm("nac_profiles", 'list',true),
    genPerm("nac_profiles", 'view',true),
    genPerm("nac_profiles", 'edit',true),
    genPerm("nac_profiles", 'delete',true),
    genPerm("nac_profiles", 'create',true),

    genPerm("nac_devices", 'list',true),
    genPerm("nac_devices", 'view',true),
    genPerm("nac_devices", 'edit',true),
    genPerm("nac_devices", 'delete',true),
    genPerm("nac_devices", 'create',true),

    genPerm("nac_access_ports", 'list',true),
    genPerm("nac_access_ports", 'view',true),
    genPerm("nac_access_ports", 'edit',true),
    genPerm("nac_access_ports", 'delete',true),
    genPerm("nac_access_ports", 'create',true),

    genPerm("switches", 'list',true),
    genPerm("switches", 'view',true),
    genPerm("switches", 'edit',true),
    genPerm("switches", 'delete',true),
    genPerm("switches", 'create',true),

    genPerm("links", 'list',true),
    genPerm("links", 'view',true),
    genPerm("links", 'edit',true),
    genPerm("links", 'delete',true),
    genPerm("links", 'create',true),

    genPerm("alarms", 'list',true),
    genPerm("alarms", 'view',true),
    //genPerm("alarms", 'edit',true),
    //genPerm("alarms", 'delete',true),
    //genPerm("alarms", 'create',true),

    genPerm("alarm_logs", 'list',true),
    genPerm("alarm_logs", 'view',true),
    //genPerm("alarm_logs", 'edit',true),
    //genPerm("alarm_logs", 'delete',true),
    //genPerm("alarm_logs", 'create',true),
];

function genPerm(tag, name,isReal) {
    return {
        "id": tag + ":" + name,
        "version": 1,
        "revision": 1,
        "timestamp": new Date(),
        "name": name,
        "tag": tag,
        "status": isReal?"ACTIVE": mockup.genState("ACTIVE", "PASSIVE"),
        "notes": "",
        "securityLevel": 1
    };
}


var roleData = [
    genRole("role001", 'Milat Ağ Yöneticisi',permData),
    genRole("role002", 'Sanal Ağ Yöneticisi',[
        permData[0],
        permData[1],
        permData[2],
        permData[8],
        permData[10],
        permData[16],
        permData[18],
        permData[19],
        permData[20]
    ])
];

function genRole(id, name,permList) {
    return {
        "id": id,
        "version": 1,
        "revision": 1,
        "timestamp": new Date(),
        "name": name,
        "status":permList?"ACTIVE" :mockup.genState("ACTIVE", "PASSIVE"),
        "notes": "",
        "securityLevel": 1,
        "created": new Date(),
        "modified": new Date(),
        "permList": permList || []
    };
}

var userData = [
    genUser("adm001", 'prognet',null, [roleData[0]]),
    genUser("vadm001", 'virtual',null, [roleData[1]])
];

function genUser(id, name, surname, roleList) {

    var username = [name,surname].filter(function(itm){ return itm; }).join('.').toLowerCase();

    return {
        "id": id,
        "version": 1,
        "revision": 1,
        "timestamp": new Date(),
        "username": username,
        "password":"prognet",
        "name": name,
        "surname": surname,
        "email": username + "@milat.local",
        "status": roleList?"ACTIVE":mockup.genState("ACTIVE", "PASSIVE"),
        "notes": "",
        "securityLevel": 1,
        "image": null, //"/images/unknown_person.gif",
        "created": new Date(),
        "modified": new Date(),
        "roleList": roleList || []
    };
}

exports.datakey_users = "users";
exports.datakey_perms = "perms";
exports.datakey_roles = "roles";

exports.isGenData = isGenData;
exports.genUser = genUser;
exports.genRole = genRole;
exports.genPerm = genPerm;

exports.permData = permData;
exports.roleData = roleData;
exports.userData = userData;