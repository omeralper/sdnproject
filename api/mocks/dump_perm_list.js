'use strict';

var data = require('../mocks/mock_user_management');

for(var i = 0; i<data.permData.length;i++){
    var perm = data.permData[i];
    console.log(perm.tag +':'+perm.name+':');
}

process.exit(1);