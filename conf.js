"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
    directConnect: true,
    SELENIUM_PROMISE_MANAGER: true,
    /* Uncomment seleniumAddress for using selenium grid*/
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'browserName': 'chrome'
    },
    /* uncomment multicapabilites to run tests in parallels */
    // // multiCapabilities: [{
    //     'browserName': 'firefox'
    // }, {
    //     'browserName': 'chrome'
    // }],
    framework: 'jasmine',
    // specs: ['test-specs.js'],
    specs: ['./JSFileLocation/Spec/**/*.js'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000
    },
    onPrepare: () => {
        let globals = require('protractor');
        let brwser = globals.browser;
        brwser.manage().window().maximize();
        brwser.manage().timeouts().implicitlyWait(50000);
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'Reports/screenshots'
        }).getJasmine2Reporter());
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBMkM7QUFFM0MsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLCtCQUErQixDQUFDLENBQUM7QUFDakQsUUFBQSxNQUFNLEdBQVc7SUFDeEIsYUFBYSxFQUFFLElBQUk7SUFDbkIsbURBQW1EO0lBQ25ELDRCQUE0QjtJQUM1QixLQUFLLEVBQUUsQ0FBQyw0Q0FBNEMsQ0FBQztJQUNyRCx3QkFBd0IsRUFBRSxJQUFJO0lBQzlCLFlBQVksRUFBRztRQUNYLGFBQWEsRUFBRSxRQUFRO0tBQzFCO0lBQ0Qsd0JBQXdCO0lBQ3hCLCtCQUErQjtJQUMvQixPQUFPO0lBQ1AsOEJBQThCO0lBQzlCLE1BQU07SUFDTixTQUFTLEVBQUU7UUFDUCx5RUFBeUU7UUFDekUsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDckMsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEQsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLFlBQVksQ0FBQztZQUMxQyxhQUFhLEVBQUUscUJBQXFCO1NBQ3ZDLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNKLENBQUMifQ==