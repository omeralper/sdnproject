'use strict';

//Override Data File for AlarmDTO.js

exports.init = function(mockup_exports){

    var mockupHelper = require('../helpers/mockup');
    var ALARM_NAMES = [
        "ControllerDeactivated",
        "DBOperationFailed",
        "DeviceIsNotAvailable",
        "LinkDown",
        "MvtnDeviceFailed",
        "MvtnLinkFailed",
        "MvtnLinkRebuilt",
        "SelfLoopDetection",
        "TsdbProviderNotAvailable"
    ];

    function genAlarm() {

        var type = mockupHelper.genState('ALARM', 'EVENT');

        var dto = mockupHelper.genDTO('AlarmDTO', {
            "severity": mockupHelper.genState('MINOR', 'MAJOR', 'CRITICAL', 'FATAL'),
            "source": mockupHelper.genState('SERVER', 'DATABASE', 'NAS', 'JAVA'),
            "sourceHost": mockupHelper.genIP(),
            "sourceInstance": mockupHelper.genRandom(1, 10),
            "resource": mockupHelper.genState('RAM', 'CPU', 'DISK', 'HEAP', 'CONNECTION'),
            "resourceId": mockupHelper.genId('alrm'),
            "description": mockupHelper.genLoremIpsum(),
            "detail": "Details",
            "correctionAction": "",
            //"name": type + '_' + mockupHelper.genState('Server Alarm', 'DB Alarm', 'Controller Alarm', 'Switch Alarm', 'link Alarm', 'Host Alarm'),
            "name": mockupHelper.genState(ALARM_NAMES),
            "alarmStatus": 'ON',
            "type": type
        });

        return dto;
    }

    function genAlarmLog(alarm) {
        var dto = mockupHelper.genDTO('AlarmDTO', {
            "severity": mockupHelper.genState('MINOR', 'MAJOR', 'CRITICAL', 'FATAL'),
            "source": mockupHelper.genState('SERVER', 'DATABASE', 'NAS', 'JAVA'),
            "sourceHost": mockupHelper.genIP(),
            "sourceInstance": mockupHelper.genRandom(1, 10),
            "resource": mockupHelper.genState('RAM', 'CPU', 'DISK', 'HEAP', 'CONNECTION'),
            "resourceId":  alarm.resourceId,
            "description": mockupHelper.genLoremIpsum(),
            "detail": "Details",
            "correctionAction": "",
            "name": alarm.name,
            "alarmStatus": 'OFF',
            "type": alarm.type
        });
        return dto;
    }

    var alarmData = [];

    //generate alarms
    for (var k = 0,j= mockupHelper.genRandom(15,25); k < j; k++) {
        alarmData.push(genAlarm());
    }

    //generate alarm logs

    for (var k in alarmData) {
        var alarm = alarmData[k];
        mockup_exports.saveData(alarm);
        for (var i = 0, j = mockupHelper.genRandom(15, 100); i < j; i++) {
            mockup_exports.saveData(genAlarmLog(alarm));
        }
    }

};