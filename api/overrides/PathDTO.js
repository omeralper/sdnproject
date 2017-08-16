/**
 * Created by yildirayme on 09.12.2016.
 */

//Override Data File for PathDTO.js

exports.init = function(mockup_exports){

    var mockup = require('../helpers/mockup');

    function genPath() {
        var dto = mockup.genDTO('PathDTO', {
            appId: mockup.genState("argela.prognet.fwd","argela.prognet.rhop","deletable"),
            srcDeviceId : mockup.genMAC(),
            srcHostId: mockup.genIP(),
            srcPort: mockup.genPort(),
            dstDeviceId : mockup.genMAC(),
            dstHostId: mockup.genIP(),
            dstPort: mockup.genPort()
        });
        return dto;
    }

    for (var i=0;i<27;i++) {
        mockup_exports.saveData(genPath());
    }
};
