'use strict';

//Override Data File for MvtnDTO.js

exports.process_options = {
    //exclude_list: ['password']
};

exports.init = function (mockup_exports) {

    var mockupHelper = require('../helpers/mockup');

    var topologyMock = require('../models/TopologyDTO');
    var userMock = require('../models/UserDTO');

    var user;

    function getUser(){
        if (!user) user = userMock.findData({ username:'virtual'})[0];
        return user;
    }

// Mockup Data Generation - START

    function genMvtn(topologyDTO) {

        var dto = mockupHelper.genDTO('MvtnDTO', {
            id : topologyDTO.id,
            userName : getUser().username,
            name : topologyDTO.info.name,
            //mvtnStatus : { name: 'mvtnStatus', type: 'MVTN_STATUS' },
            topologyData : topologyDTO
        });

        //override topology status with mvtn's value
        topologyDTO.info.status = dto.mvtnStatus;

        return dto;
    }



    var virtual_topos = topologyMock.getAllData();

    for (var i in virtual_topos) {
        var topo = virtual_topos[i];
        if (topo.info.type=='VIRTUAL'){
            mockup_exports.saveData(genMvtn(topo));
        }
    }

// Mockup Data Generation - END

    mockup_exports.changeStatus = function(val){
        var response;
        var data = mockup_exports.getData(val.data.id);
        if (data) {
            data.mvtnStatus = val.data.mvtnStatus;
            data.topologyData.info.status = data.mvtnStatus;
            mockup_exports.saveData(data);
            response = mockupHelper.genResponse(val.data);
        } else {
            response = mockupHelper.genErrorResponse("ERROR", "404", "User not found");
        }

        return response;
    }

    var original_saveData = mockup_exports.saveData;
    mockup_exports.saveData = function(data){
        data.topologyData = topologyMock.saveData(mockupHelper.genDTO('TopologyDTO',data.topologyData));
        data.topologyData.info.id = data.topologyData.id;
        data.id = data.topologyData.id;
        data =  mockupHelper.genDTO('MvtnDTO',data);
        return original_saveData(data);
    }

// Mockup extra function implementations - START
// Mockup extra function implementations - END
};
