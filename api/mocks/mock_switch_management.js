'use strict';

var mockup = require('../helpers/mockup');

var isGenData = false;

var switchData = [
    genSwitch("Test Switch #1",false),
    genSwitch("Test Switch #2",false),
    genSwitch("Test Switch #3",false),
    genSwitch("Test Switch #4",false),
];

function genSwitch(name,isReal) {
    return {
        "id": mockup.genRequestId(),
        "version": 1,
        "revision": 1,
        "timestamp": new Date(),
        "name": name,
        "controllerId": "",
        "address": {
            "mac": mockup.genMAC(),
            "ipv4": mockup.genIP(),
            "ipv6": ""
        },
        "status": isReal?"UP": mockup.genState("UP", "DOWN"),
        "mode": isReal?"ACTIVE": mockup.genState("ACTIVE", "PASSIVE"),
        "supports": {
            "openFlow": "1.3",
        },
        "deviceInfo": {
            "vendor": "Argela",
            "model": "Mockup Switch",
            "type": "VITRUAL_SWITCH",
            "swVersion": "0.3.1"
        },
        "bandwidth": {
            "current": 0,
            "min": 0,
            "max": 0
        },
        "portInfo": {
            "totalPorts": mockup.genRandom(0,16),
            "activePorts": mockup.genRandom(0,8),
            "passivePorts": mockup.genRandom(0,8),
            "deadPorts": 0,
            "portDetails": [
                /*{
                    "id": "string",
                    "number": 0,
                    "status": "DEAD",
                    "address": {
                        "mac": "string",
                        "ipv4": "string",
                        "ipv6": "string"
                    },
                    "stats": {
                        "packets": {
                            "sent": 0,
                            "received": 0
                        },
                        "packetErrors": {
                            "sent": 0,
                            "received": 0
                        },
                        "packetDrops": {
                            "sent": 0,
                            "received": 0
                        },
                        "bytes": {
                            "sent": 0,
                            "received": 0
                        },
                        "rates": {
                            "sent": 0,
                            "received": 0
                        },
                        "collisions": 0
                    },
                    "speed": 0,
                    "switches": [
                        "string"
                    ],
                    "alarms": [
                        {
                            "id": "string",
                            "name": "string",
                            "message": "string",
                            "status": "MINOR"
                        }
                    ]
                }*/
            ]
        },
        "activeSince": "2016-06-20T13:52:11.652Z",
        "securityLevel": 1,
        "securityMode": mockup.genState("OFF", "TLS"),
        "isEdgeSwitch": false,
        "location": {
            "x": "-1",
            "y": "-1"
        },
        "alarms": [],
        "networks": [],
        "stats": {
            "packets": {
                "sent": mockup.genRandom(0,1000000),
                "received": mockup.genRandom(0,1000000)
            },
            "packetErrors": {
                "sent": mockup.genRandom(0,1000),
                "received": mockup.genRandom(0,1000)
            },
            "packetDrops": {
                "sent": mockup.genRandom(0,1000),
                "received": mockup.genRandom(0,1000)
            },
            "bytes": {
                "sent": mockup.genRandom(0,100000000),
                "received": mockup.genRandom(0,100000000)
            },
            "rates": {
                "sent": mockup.genRandom(0,100),
                "received": mockup.genRandom(0,100)
            },
            "collisions": mockup.genRandom(0,100)
        },
        "flows": mockup.genRandom(0,1000),
        "powerUsage": mockup.genRandom(0,1000),
        "depth": 0,
        "blocked": false,
        "required": true,
        "colorCode": "",
        "deviceProfile": {
            "profileId": "1",
            "profileName": "Normal"
        }
    };
}

exports.datakey_switch = "switch";

exports.isGenData = isGenData;
exports.genSwitch = genSwitch;

exports.switchData = switchData;