'use strict';

//Override Data File for UserDTO.js

exports.process_options = {
    exclude_list : ['password']
};

exports.init = function(mockup_exports){

    var mockupHelper = require('../helpers/mockup');
    var roleMock = require('../models/RoleDTO');
// Mockup Data Generation - START
    function genUser(username, password, name, surname, roleList) {

        var dto = mockupHelper.genDTO('UserDTO', {
            username: username,
            password: password,
            name: name,
            surname: surname,
            email: username + "@milat.local",
            status: roleList ? "ACTIVE" : mockupHelper.genState("ACTIVE", "PASSIVE"),
            roleList: roleList || [],
            permList: mergePerms(roleList)
        });
        return dto;
    }

    function mergePerms(roleList) {
        var permList = [];
        if (roleList) {
            for (var i in roleList) {
                permList = permList.concat(roleList[i].permList);
            }
        }
        return permList;
    }

    var userData = [
        genUser("prognet", 'prognet', 'Milat Ağ', 'Yöneticisi', [roleMock.getData('role_milat_ag')]),
        genUser("virtual", 'prognet', 'Sanal Ağ', 'Yöneticisi', [roleMock.getData('role_sanal_ag')])
    ];

    for (var i in userData) {
        mockup_exports.saveData(userData[i]);
    }
// Mockup Data Generation - END

// Mockup extra function implementations - START

    mockup_exports.login = function(val){
        var response;
        var list = mockup_exports.findData({username: val.data.username, password: val.data.password});

        if (list && list.length > 0) {
            var data = {user: list[0]};
            response = mockupHelper.genResponse(data);
        } else {
            response = mockupHelper.genErrorResponse("ERROR", "404", "User not found");
        }

        return response;
    }

    mockup_exports.logout = function(val){
        var response;
        response = mockupHelper.genResponse({});
        return response;
    }

    mockup_exports.ping = function(val){
        var response;
        response = mockupHelper.genResponse();
        return response;
    }

    mockup_exports.lostpwd = function(val){
        var response;
        var list = mockup_exports.findData({username: val.username},true);

        if (list && list.length > 0) {
            var data = list[0];

            //TODO email user password

            response = mockupHelper.genResponse();
        } else {
            response = mockupHelper.genErrorResponse("ERROR", "404", "User not found");
        }
        return response;
    }

    mockup_exports.changepwd = function(val){
        var response;
        var list = mockup_exports.findData({username: val.username},true);

        if (list && list.length > 0) {
            var data = list[0];

            if (data.password == val.oldPassword) {
                data.modified = new Date();
                data.password = val.newPassword;
                mockup_exports.saveData(data);

                response = mockupHelper.genResponse();
            } else {
                response = mockupHelper.genErrorResponse("ERROR", "403", "User old password incorrect");
            }
        } else {
            response = mockupHelper.genErrorResponse("ERROR", "404", "User not found");
        }
        return response;
    }

    mockup_exports.checkusr = function(val){
        var response;
        var list = mockup_exports.findData({username: val.username});

        if (list && list.length > 0) {
            //var data = list[0];
            response = mockupHelper.genErrorResponse("ERROR", "200", "Username exists.");
        } else {
            response = mockupHelper.genResponse();
        }
        return response;
    }

    mockup_exports.setpwd = function(val){
        var response;
        var data = mockup_exports.getData(val.id, true);

        if (data) {
            data.modified = new Date();
            data.password = val.newPassword;
            mockup_exports.saveData(data);

            response = mockupHelper.genResponse();
        } else {
            response = mockupHelper.genErrorResponse("ERROR", "404", "User not found");
        }
        return response;
    }
// Mockup extra function implementations - END
};
