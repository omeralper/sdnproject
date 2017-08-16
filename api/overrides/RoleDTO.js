'use strict';

//Override Data File for RoleDTO.js

exports.init = function(mockup_exports){

    var mockup = require('../helpers/mockup');
    var permMock = require('../models/PermDTO');

    function genRole(id, name,permList) {
        var dto = mockup.genDTO('RoleDTO', {
            "id": id,
            "name": name,
            "status":permList?"ACTIVE" :mockup.genState("ACTIVE", "PASSIVE"),
            "permList": permList || []
        });
        return dto;
    }

    var roleData = [
        genRole("role_milat_ag", 'Milat Ağ Yöneticisi', permMock.getAllData()),
        genRole("role_sanal_ag", 'Sanal Ağ Yöneticisi',[
            permMock.getData('common:print'),
            permMock.getData('common:export_pdf'),
            permMock.getData('common:export_excel'),
            permMock.getData('users:change_pwd'),
            permMock.getData('users:lost_pwd'),
            permMock.getData('phy_topo:view'),
            permMock.getData('vir_topo:list'),
            permMock.getData('vir_topo:view'),
            permMock.getData('vir_topo:edit')
        ])
    ];

    for (var i in roleData) {
        mockup_exports.saveData(roleData[i]);
    }
};