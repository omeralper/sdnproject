
exports.command = function () {
    var url             = this.globals.baseUrl + this.globals.paths.Login;
    var width           = this.globals.screenshots.width;
    var height          = this.globals.screenshots.height;
    var lang            = this.globals.lang;
    var title_login     = this.globals.titles[lang]['login'];
    var title_admin     = this.globals.titles[lang]['admin'];
    var username        = this.globals.credentials.correct.username;
    var password        = this.globals.credentials.correct.password;

    this
        .url(url)
        .resizeWindow(width, height)
        .waitForElementVisible('body', 5000)
        .assert.title(title_login)
        .pause(3000)
        .clearValue('#user')
        .clearValue('#password')
        .setValue('#user', username)
        .setValue('#password', password)
        .pause(1000)
        .click('.login-submit')
        .pause(10000)
        .assert.title(title_admin, 'Login success');
};
