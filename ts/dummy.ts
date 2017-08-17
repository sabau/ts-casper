declare let casper;

class Dummy {
    constructor() {
        console.log("start test");
    }

    runTest() {
        casper.test.begin('Onboarding the app', function (test) {
            casper.start();
            casper.test.assertEquals(11, 11,"good test");

            test.done();
        });
    }
}

let myTest = new Dummy();
myTest.runTest();