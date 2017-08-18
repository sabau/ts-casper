// import '../../node_modules/casperjs'
//
// class Capture {
//
//     private name: string;
//
//     constructor(name: string) {
//         this.name = name;
//     }
//
//     public capture() {
//         casper.then(() => {
//             let testFile = this.test.currentSuite.file;
//             if (testFile.indexOf('/') != -1) {
//                 let lastSlashIndex = testFile.lastIndexOf('/') + 1;
//                 testFile = testFile.substring(lastSlashIndex);
//             }
//             testFile = testFile.replace('.js', '');
//
//             var testName = this.test.currentSuite.name;
//
//             var screenshotFile = 'screenshots/' + testFile + '/' + testName + '/' + screenshotName + '.png';
//             this.capture(screenshotFile);
//         });
//     }
// }
//
// export = Capture;

