/**
 * Created by yildirayme on 18.01.2017.
 */
//Override Data File for DhcpScopeDTO.js

// var test = {
//     -
// }
//
// //document.getElementById("result").innerHTML = "test";//
//
// var ipInt = test.ipToInt("192.168.3.115");
// var intIp = test.intToIP(ipInt);
// var subnet = test.genSubnetMask(30);
// //var boardcast =test.intToIP(!test.ipToInt(subnet));
//
// test.genIpRange(13,"13.0.0.0");
//
// $("#result").append($("<div>").text(ipInt));
// $("#result").append($("<div>").text(intIp));
// $("#result").append($("<div>").text(subnet));


exports.init = function(mockup_exports){

    var mockupHelper = require('../helpers/mockup');
    var extend = require('extend');

    var DhcpIpRangeMock = require('../models/DhcpIpRangeDTO');
    var DhcpIpExcludedMock = require('../models/DhcpIpExcludedDTO');
    var DhcpIpReservedMock = require('../models/DhcpIpReservedDTO');
    var DhcpOptionMock = require('../models/DhcpOptionDTO');
    var topologyMock = require('../models/TopologyDTO');

    function genExclude(rangeId,ipRange) {
        var start = ipRange.hostMin_raw + mockupHelper.genRandom(ipRange.hosts/4, ipRange.hosts/2);
        var end = start + mockupHelper.genRandom(0, ipRange.hosts/4);

        var dto = DhcpIpExcludedMock.genData({
            dhcpRangeId : rangeId,
            ipStart :  mockupHelper.intToIP(start),
            ipEnd : mockupHelper.intToIP(end)
        });

        return dto;
    }

    function geReserved(rangeId,ipRange) {
        var start = mockupHelper.genIP(ipRange);

        var dto = DhcpIpReservedMock.genData({
            dhcpRangeId : rangeId,
            mac : mockupHelper.genMAC(),
            ip : mockupHelper.intToIP(start)
        });

        return dto;
    }

    function genAddressRange(scopeId,ipRange) {

        var dto = DhcpIpRangeMock.genData({
            dhcpScopeId : scopeId,
            ipStart : ipRange.hostMin,
            ipEnd : ipRange.hostMax,
            networkMask : ipRange.netmask,
            ipsExcludedDtos : [],
            ipsReservedDtos : []
        });

        dto.ipsExcludedDtos.push(genExclude(dto.id,ipRange));
        dto.ipsReservedDtos.push(geReserved(dto.id,ipRange));

        return dto;
    }

    function genDhcpOption(scopeId,key,ipRange){
        //var key = mockupHelper.genState(3,6,15,51);
        var value;

        switch (key) {
            case 3://'GATEWAY':
                value = mockupHelper.genIP(ipRange);
                break;
            case 6://'DNS':
                value = [mockupHelper.genIP(ipRange),mockupHelper.genIP(ipRange)].join(',');
                break;
            case 15://'DOMAIN':
                value = "sub"+mockupHelper.genRandom(0,1000)+".milat.local";
                break;
            case 51://'LEASE_TIME':
                value = mockupHelper.genRandom(1000,1000000);
                break;
            default:
                value = "Option Value";
                break;
        }

        var dto = DhcpOptionMock.genData({
            dhcpScopeId : scopeId,
            dhcpOptionKey : key,
            dhcpOptionValue :  value
        });

        return dto;
    }

    var old_genData = mockup_exports.genData;
    var genData = function genData(overrides) {
        var id = mockupHelper.genId('scp');
        var network = mockupHelper.genStateFromArray(topologyMock.getAllData());
        var networkSize = mockupHelper.genRandom(16, 30);
        var ipRange = mockupHelper.genIpRange(networkSize);

        return old_genData(extend({},{
            id: id,
            name : "DHCP Scope#"+mockupHelper.genRandom(1,100),
            networkId : network.id,
            vlanId : 0,
            ipVersionType : "IPV4",
            dhcpIpRangeDtos : [genAddressRange(id,ipRange)],
            dhcpOptionDtos : [genDhcpOption(id,3,ipRange),genDhcpOption(id,6,ipRange),genDhcpOption(id,15,ipRange),genDhcpOption(id,51,ipRange)]
        },overrides));

    }
    mockup_exports.genData = genData;

    for (var i=0;i<17;i++) {
        mockup_exports.saveData(genData());
    }
};
