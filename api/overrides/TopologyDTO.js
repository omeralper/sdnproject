'use strict';

//Override Data File for TopologyDTO.js

exports.process_options = {
    //exclude_list: ['password']
};

exports.init = function (mockup_exports) {

    var mockupHelper = require('../helpers/mockup');

    //var topologyInfoMock = require('../models/TopologyInfoDTO');
    var hostMock = require('../models/HostDTO');
    var switchMock = require('../models/SwitchDTO');
    var linkMock = require('../models/LinkDTO');
    var ctrlMock = require('../models/ControllerDTO');
    var PORT_STATE = require('../models/PORT_STATE');
    var PORT_CONFIG = require('../models/PORT_CONFIG');
    var nacUserMock = require('../models/NacUserDTO');

// Mockup Data Generation - START
    function genHost(port) {

        var dto = hostMock.genData({  //mockupHelper.genDTO('HostDTO', {
            id: mockupHelper.genId('hst'),
            networks: [],
            required: true,
            depth: null,
            blocked: false,
            port: port,
            //status: 'LIVE',
            colorCode: null,
            userInfo : null
        });

        if (dto.status == "GRANTED" ) {
            var nacUsers = nacUserMock.getAllData();
            if (nacUsers && nacUsers.length>0) {
                var randomUser = mockupHelper.genStateFromArray(nacUsers);
                dto.userInfo = {
                    userName: randomUser.username,
                    name: randomUser.name,
                    surname: randomUser.surname
                }
            } else {
                dto.status == "LIVE";
            }
            dto = hostMock.saveData(dto);
        }

        return dto;
    }

    function genLink(topologyId, srcPort, destPort) {

        var dto = linkMock.genData({ //mockupHelper.genDTO('LinkDTO', {
                id: mockupHelper.genId('lnk'),
                alarms: [],
                srcPort: srcPort,
                destPort: destPort,
                required: true,
                isDown: true,
                blocked: false,
                status: 'LIVE', //'DOWN', 'BLOCKED', 'LIVE', 'LEGACY', 'INDIRECT'
                bandwidth: mockupHelper.genRandom(1, 10) * 1000,
                bandwidthUtilization: mockupHelper.genRandom(1, 100) / 100,
                colorCode: null,
                linkWeight: null,
                topologyId: topologyId,
            }
        );
        return dto;
    }

    function genSwitch(topologyId, controller) {

        controller.deviceCount++;

        var switchID = mockupHelper.genId('sw');

        var portDetailList = [];
        var activePorts = 0;

        for (var i = 0, j = 8 * mockupHelper.genRandom(1, 8); i < j; i++) {
            var portDetail = mockupHelper.genDTO('PortDetail', {
                id: switchID,
                number: i,
                states : ['LINK_DOWN'],//[mockupHelper.genStateFromArray(PORT_STATE.PORT_STATE.values)],
                configs :  [mockupHelper.genStateFromArray(PORT_CONFIG.PORT_CONFIG.values)],
                switches: [],
                alarms: [],
            });

            if (portDetail.states[0] == 'LIVE') activePorts++;

            portDetailList.push(portDetail);
        }

        var dto = switchMock.genData({  //mockupHelper.genDTO('SwitchDTO', {
            id: switchID,
            alarms: [],
            networks: [],
            //deviceInfo: {
            //    vendor: "Nicira, Inc.",
            //    model: "None",
            //    type: "VIRTUAL_SWITCH",
            //    swVersion: "2.0.2"
            //},
            topologyId: topologyId,
            controllerId: controller.id,
            required: true,
            //"mode": null,
            depth: 0,
            blocked: false,
            //stats: null,
            name: 'S#' + mockupHelper.genRandom(1, 99),
            //"supports": null,
            status: 'UP',
            portInfo: mockupHelper.genDTO('PortInfo', {
                totalPorts: portDetailList.length,
                activePorts: activePorts,
                passivePorts: portDetailList.length - activePorts,
                deadPorts: 0,
                portDetails: portDetailList
            }),
            location: {
                x: mockupHelper.genRandom(1, 999).toString(),
                y: mockupHelper.genRandom(1, 999).toString(),
            },
            //bandwidth: mockupHelper.genRandom(1, 10) * 1000,
            //stats : { name: 'stats', type: 'StatsDetail' },
            //flows : { name: 'flows', type: 'Long' },
            //powerUsage: {name: 'powerUsage', type: 'Integer'},
            colorCode: null
        });
        return dto;
    }

    function genController() {

        var dto = ctrlMock.genData({ // mockupHelper.genDTO('ControllerDTO', {
            id: mockupHelper.genId('ctrl'),
            name: 'Ctrl ' + mockupHelper.genName(),
            deviceCount: 0,
            //controllerState : 'ACTIVE'
        });
        return dto;
    }

    function selectPort(switchDTO) {
        var offlinePorts = switchDTO.portInfo.portDetails.filter(function (port) {
            return port.states[0] == 'LINK_DOWN';
        });
        if (offlinePorts.length > 0) {
            var port = mockupHelper.genStateFromArray(offlinePorts);
            port.states[0] = 'LIVE';
            switchDTO.portInfo.activePorts++;
            switchDTO.portInfo.passivePorts--;
            return port;
        }
        return null;
    }
    var controllerList = [];

    function genTopology(id, topoType) {

        var switchList = [], linkList = [], hostList = [];

        for (var i in controllerList) {
            var controller = controllerList[i];
            if (controller.controllerState != "INACTIVE"){
              for (var i = 0, j = mockupHelper.genRandom(1, 5); i < j; i++) {
                  //var controller = mockupHelper.genStateFromArray(controllerList);
                  switchList.push(genSwitch(id, controller));
              }
            }
        }
        //var totalLinks = switchList.length*(switchList.length-1)/2;
        var switchCount = switchList.length;

        for (var i = 0, j = switchCount - 1; i < j; i++) {
            for (var l = i + 1; l < switchCount; l++) {

                var srcPort = selectPort(switchList[i]);
                var destPort = selectPort(switchList[l]);

                if (srcPort && destPort) {
                    linkList.push(genLink(id, srcPort, destPort));
                    linkList.push(genLink(id, destPort, srcPort));
                }
            }
        }

        for (var i = 0; i < switchCount; i++) {
            for (var j = 0, c = mockupHelper.genRandom(0, 5); j < c; j++) {
                var port = selectPort(switchList[i]);
                if (port) {
                    hostList.push(genHost(port));
                }
            }
        }

        var dto = mockupHelper.genDTO('TopologyDTO', {
                id: id,
                controllers: controllerList,
                switches: switchList,
                links: linkList,
                hosts: hostList,
                info: mockupHelper.genDTO('TopologyInfoDTO', {
                    alarms: [],
                    weight: null,
                    type: topoType,
                    maxDepth: null,
                    stats: null,
                    //name: (topoType=='VIRTUAL'?[topoType, mockupHelper.genName()].join(' ').trim() : 'Physical'),
                    name: (topoType=='VIRTUAL'?["Sanal Ağ #", mockupHelper.genRandom(1,100)].join(' ').trim() : 'Prognet'),
                    elementCountPerDepth: [],
                    id: id,
                    status: 'ACTIVE'
                })
            }
        );
        return dto;
    }

    //generate controllers
    //for (var i = 0, j = mockupHelper.genRandom(2, 3); i < j; i++) {
    //    var controller = genController();
    //    controllerList.push(controller);
    //}
    var ctrl = genController();
    ctrl.controllerState = "INACTIVE";
    controllerList.push(ctrl);
    ctrl = genController();
    ctrl.controllerState = "ACTIVE";
    controllerList.push(ctrl);
    ctrl = genController();
    ctrl.controllerState = "READY";
    controllerList.push(ctrl);
    

    mockup_exports.saveData(genTopology('DEFAULT', 'PHYSICAL'));

    for (var i = 0; i < 13; i++) {
        mockup_exports.saveData(genTopology(mockupHelper.genId('mvtn'), 'VIRTUAL'));
    }

// Mockup Data Generation - END

    mockup_exports.topologyGet = function(val){
        var response;
        var data = mockup_exports.getData((val.options.type=='VIRTUAL'?val.options.id:'DEFAULT'));
        if (data) {
            response = mockupHelper.genResponse(data);
        } else {
            response = mockupHelper.genErrorResponse("ERROR", "404", "User not found");
        }

        return response;
    }

// Mockup extra function implementations - START
// Mockup extra function implementations - END
};
