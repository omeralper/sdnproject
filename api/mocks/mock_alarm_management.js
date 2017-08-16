'use strict';

var mockup = require('../helpers/mockup');
var loremIpsum = require('lorem-ipsum');

var isGenData = true;

function genLoremIpsum() {
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
}


var alarmData = [
    genAlarm("Server Alarm"),
    genAlarm("DB Alarm"),
    genAlarm("Controller Alarm"),
    genAlarm("Switch Alarm"),
    genAlarm("Link Alarm"),
    genAlarm("Host Alarm"),

];

function genAlarm(id) {

    var type = mockup.genState('ALARM', 'EVENT');

    return {
        "id": mockup.genRequestId(),
        "version": 1,
        "revision": 1,
        "timestamp": mockup.genTimestamp(),
        "time": new Date().getTime() / 1000,
        "severity": mockup.genState('MINOR', 'MAJOR', 'CRITICAL', 'FATAL'),
        "source": mockup.genState('SERVER', 'DATABASE', 'NAS', 'JAVA'),
        "sourceHost": mockup.genIP(),
        "sourceInstance": mockup.genRandom(1, 10),
        "resource": mockup.genState('RAM', 'CPU', 'DISK', 'HEAP', 'CONNECTION'),
        "description": genLoremIpsum(),
        "detail": "Details",
        "correctionAction": "",
        "name": type + '_' + id,
        "alarmStatus": mockup.genState('ON', 'OFF'),
        "type": type
    };
}

var alarmLogData = [];

genAlarmLogs(alarmLogData, alarmData);

function genAlarmLogs(datastore, alarms) {
    for (var k = 0; k < alarms.length; k++) {
        for (var i = 0, j = mockup.genRandom(15, 100); i < j; i++) {
            datastore.push(genAlarmLog(alarms[k]));
        }
    }
}

function genAlarmLog(id, type) {
    return {
        "id": mockup.genRequestId(),
        "version": 1,
        "revision": 1,
        "timestamp": mockup.genTimestamp(),
        "time": new Date().getTime() / 1000,
        "severity": mockup.genState('MINOR', 'MAJOR', 'CRITICAL', 'FATAL'),
        "source": mockup.genState('SERVER', 'DATABASE', 'NAS', 'JAVA'),
        "sourceHost": mockup.genIP(),
        "sourceInstance": mockup.genRandom(1, 10),
        "resource": mockup.genState('RAM', 'CPU', 'DISK', 'HEAP', 'CONNECTION'),
        "description": genLoremIpsum(),
        "detail": "Details",
        "correctionAction": "",
        "name": id,
        "alarmStatus": mockup.genState('ON', 'OFF'),
        "type": type || mockup.genState('ALARM', 'EVENT')
    };
}

exports.datakey_alarms = "alarms";
exports.datakey_alarm_logs = "alarm_logs";

exports.isGenData = isGenData;

exports.genAlarm = genAlarm;
exports.genAlarmLog = genAlarmLog;
exports.genAlarmLogs = genAlarmLogs;

exports.alarmLogData = alarmLogData;
exports.alarmData = alarmData;