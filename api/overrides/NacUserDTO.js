/**
 * Created by yildirayme on 19.01.2017.
 */
//Override Data File for NacUserDTO.js

exports.init = function (mockup_exports) {

    var mockupHelper = require('../helpers/mockup');
    var hostMock = require('../models/HostDTO');
    //var extend = require('extend');

    // var old_genData = mockup_exports.genData;
    // var genData = function genData(overrides) {
    //     return old_genData(extend({},{
    //         profileName : "Erişim K. Politika #"+mockup.genRandom(1,100)
    //     },overrides));
    // }
    // mockup_exports.genData = genData;

    // for (var i=0;i<27;i++) {
    //     mockup_exports.saveData(genData());
    // }

    mockup_exports.status = function (dto) {
        if (dto.status == "PASSIVE" && dto.ipv4) {
            var hostList = hostMock.getAllData();
            var usersHosts = hostList.filter(function (val) {
                if (val && val.port && val.port.address) {
                    console.log(JSON.stringify(val, null, '  '));
                    return val.port.address.ipv4 == dto.ipv4;
                }
                return false;
            });
            for (var i = 0, c = usersHosts.length; i < c; i++) {
                var host = usersHosts[i];
                host.status = "LIVE";
                hostMock.saveData(host);
            }
            return mockupHelper.genResponse({
                username: dto.username,
                status: dto.status,
                ipv4: (dto.ipv4 || mockupHelper.genIP())
            });
        } else {
            var userList = mockup_exports.findData({username: dto.username}, true);
            if (userList.length > 0) {
                var user = userList[0];
                user.status = dto.status;
                user = mockup_exports.saveData(user);
                if (user) {
                    return mockupHelper.genResponse({
                        username: user.username,
                        status: user.status,
                        ipv4: (dto.ipv4 || mockupHelper.genIP())
                    });
                } else {
                    return mockupHelper.genErrorResponse("SERVER_ERROR", "500", "User cannot be updated");
                }
            } else {
                return mockupHelper.genErrorResponse("ERROR", "404", "User not found");
            }
        }
    };

    mockup_exports.init();
};