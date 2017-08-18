phantom.injectJs('./tests/pages/LoginPage.js');
//phantom.page.injectJs('pages/HomePage.js');
//phantom.page.injectJs('InitiativeListPage.js');

// var require = patchRequire('require');
// var LP = require('pages/LoginPage');

var loginPage = new LoginPage();
//var homePage = new HomePage();


casper.test.begin('LoginAndClick', 1, function (test) {
    casper.options.waitTimeout = 40000;
    casper.options.pageSettings.loadImages = true;
    casper.options.pageSettings.resourceTimeout = 20000;
    casper.options.pageSettings.localToRemoteUrlAccessEnabled = true;
    loginPage.start(casper, 'http://localhost:8080/', 'cfp\\lundbeck.tbadmin', 'be careful');
    console.log("DONE");
    
    
    casper.run(function () {
        test.assertEquals(loginPage.getHeaderTitle(), 'Annunci', 'Menu Loaded');
        test.done();
    });
});
