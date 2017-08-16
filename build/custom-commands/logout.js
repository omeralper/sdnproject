
exports.command = function () {
    this
        .pause(5000)
        .click('.btn-group-img.btn-group .btn-sm.dropdown-toggle')
        .assert.visible('i.fa.fa-sign-out')
        .click('i.fa.fa-sign-out')
        .pause(3000);
};
