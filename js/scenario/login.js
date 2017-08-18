var loginPagePath = fs.absolute(fs.workingDirectory + '/js/pages/login'),
    configPath = fs.absolute(fs.workingDirectory + '/js/config/config'),
    utilsPath = fs.absolute(fs.workingDirectory + '/js/utils/utils')
;
var require = patchRequire('require');

var loginPage = require(loginPagePath),
    config = require(configPath),
    utils = require(utilsPath)
;

var login = function (start) {
    if (!start) start = new Date();
    console.log("TEST RUNNING");
    console.log(config);
    casper.test.begin('Login', 1, function(test) {
        casper.echo(config.url);
        casper.echo(config.user);
        casper.echo(config.password);
        casper.options.pageSettings.loadImages = true;
        casper.options.pageSettings.resourceTimeout = 20000;
        casper.options.pageSettings.localToRemoteUrlAccessEnabled = true;
       // utils.dump(config);
        casper
            .viewport(1920, 1080)
            .start(config.url)
        ;
        loginPage.login(config.user, config.password, start);
        casper.then(function () {
            test.assertTitle('Trueblue CRM', 'Title is correct');
        });
        utils.capture('test');
        casper.run(function () {
            test.done();
        });
    });
};

module.exports = {
    login: login
};

login(new Date());