var Dummy = (function () {
    function Dummy() {
        console.log("start test");
    }
    Dummy.prototype.runTest = function () {
        casper.test.begin('Onboarding the app', function (test) {
            casper.start();
            casper.test.assertEquals(11, 11, "good test");
            test.done();
        });
    };
    return Dummy;
}());
var myTest = new Dummy();
myTest.runTest();
//# sourceMappingURL=dummy.js.map