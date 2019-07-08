var app = angular.module('reportingApp', []);

//<editor-fold desc="global helpers">

var isValueAnArray = function (val) {
    return Array.isArray(val);
};

var getSpec = function (str) {
    var describes = str.split('|');
    return describes[describes.length - 1];
};
var checkIfShouldDisplaySpecName = function (prevItem, item) {
    if (!prevItem) {
        item.displaySpecName = true;
    } else if (getSpec(item.description) !== getSpec(prevItem.description)) {
        item.displaySpecName = true;
    }
};

var getParent = function (str) {
    var arr = str.split('|');
    str = "";
    for (var i = arr.length - 2; i > 0; i--) {
        str += arr[i] + " > ";
    }
    return str.slice(0, -3);
};

var getShortDescription = function (str) {
    return str.split('|')[0];
};

var countLogMessages = function (item) {
    if ((!item.logWarnings || !item.logErrors) && item.browserLogs && item.browserLogs.length > 0) {
        item.logWarnings = 0;
        item.logErrors = 0;
        for (var logNumber = 0; logNumber < item.browserLogs.length; logNumber++) {
            var logEntry = item.browserLogs[logNumber];
            if (logEntry.level === 'SEVERE') {
                item.logErrors++;
            }
            if (logEntry.level === 'WARNING') {
                item.logWarnings++;
            }
        }
    }
};

var defaultSortFunction = function sortFunction(a, b) {
    if (a.sessionId < b.sessionId) {
        return -1;
    }
    else if (a.sessionId > b.sessionId) {
        return 1;
    }

    if (a.timestamp < b.timestamp) {
        return -1;
    }
    else if (a.timestamp > b.timestamp) {
        return 1;
    }

    return 0;
};


//</editor-fold>

app.controller('ScreenshotReportController', function ($scope, $http) {
    var that = this;
    var clientDefaults = {};

    $scope.searchSettings = Object.assign({
        description: '',
        allselected: true,
        passed: true,
        failed: true,
        pending: true,
        withLog: true
    }, clientDefaults.searchSettings || {}); // enable customisation of search settings on first page hit

    this.warningTime = 1400;
    this.dangerTime = 1900;

    var initialColumnSettings = clientDefaults.columnSettings; // enable customisation of visible columns on first page hit
    if (initialColumnSettings) {
        if (initialColumnSettings.displayTime !== undefined) {
            // initial settings have be inverted because the html bindings are inverted (e.g. !ctrl.displayTime)
            this.displayTime = !initialColumnSettings.displayTime;
        }
        if (initialColumnSettings.displayBrowser !== undefined) {
            this.displayBrowser = !initialColumnSettings.displayBrowser; // same as above
        }
        if (initialColumnSettings.displaySessionId !== undefined) {
            this.displaySessionId = !initialColumnSettings.displaySessionId; // same as above
        }
        if (initialColumnSettings.displayOS !== undefined) {
            this.displayOS = !initialColumnSettings.displayOS; // same as above
        }
        if (initialColumnSettings.inlineScreenshots !== undefined) {
            this.inlineScreenshots = initialColumnSettings.inlineScreenshots; // this setting does not have to be inverted
        } else {
            this.inlineScreenshots = false;
        }
        if (initialColumnSettings.warningTime) {
            this.warningTime = initialColumnSettings.warningTime;
        }
        if (initialColumnSettings.dangerTime){
            this.dangerTime = initialColumnSettings.dangerTime;
        }
    }

    this.showSmartStackTraceHighlight = true;

    this.chooseAllTypes = function () {
        var value = true;
        $scope.searchSettings.allselected = !$scope.searchSettings.allselected;
        if (!$scope.searchSettings.allselected) {
            value = false;
        }

        $scope.searchSettings.passed = value;
        $scope.searchSettings.failed = value;
        $scope.searchSettings.pending = value;
        $scope.searchSettings.withLog = value;
    };

    this.isValueAnArray = function (val) {
        return isValueAnArray(val);
    };

    this.getParent = function (str) {
        return getParent(str);
    };

    this.getSpec = function (str) {
        return getSpec(str);
    };

    this.getShortDescription = function (str) {
        return getShortDescription(str);
    };

    this.convertTimestamp = function (timestamp) {
        var d = new Date(timestamp),
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2),
            dd = ('0' + d.getDate()).slice(-2),
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2),
            ampm = 'AM',
            time;

        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        } else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        } else if (hh === 0) {
            h = 12;
        }

        // ie: 2013-02-18, 8:35 AM
        time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;

        return time;
    };


    this.round = function (number, roundVal) {
        return (parseFloat(number) / 1000).toFixed(roundVal);
    };


    this.passCount = function () {
        var passCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.passed) {
                passCount++;
            }
        }
        return passCount;
    };


    this.pendingCount = function () {
        var pendingCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.pending) {
                pendingCount++;
            }
        }
        return pendingCount;
    };


    this.failCount = function () {
        var failCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (!result.passed && !result.pending) {
                failCount++;
            }
        }
        return failCount;
    };

    this.passPerc = function () {
        return (this.passCount() / this.totalCount()) * 100;
    };
    this.pendingPerc = function () {
        return (this.pendingCount() / this.totalCount()) * 100;
    };
    this.failPerc = function () {
        return (this.failCount() / this.totalCount()) * 100;
    };
    this.totalCount = function () {
        return this.passCount() + this.failCount() + this.pendingCount();
    };

    this.applySmartHighlight = function (line) {
        if (this.showSmartStackTraceHighlight) {
            if (line.indexOf('node_modules') > -1) {
                return 'greyout';
            }
            if (line.indexOf('  at ') === -1) {
                return '';
            }

            return 'highlight';
        }
        return true;
    };

    var results = [
    {
        "description": "should add an item in big basket cart|Add an item to the bigbasket cart",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "instanceId": 25352,
        "browser": {
            "name": "chrome",
            "version": "75.0.3770.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://connect.facebook.net/en_US/fbevents.js 24:15090 \"[Facebook Pixel] - Duplicate Pixel ID: 1395135667375657.\"",
                "timestamp": 1562562646103,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://connect.facebook.net/en_US/fbevents.js 24:15090 \"[Facebook Pixel] - Duplicate Pixel ID: 1395135667375657.\"",
                "timestamp": 1562562650745,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://connect.facebook.net/en_US/fbevents.js 24:15090 \"[Facebook Pixel] - Duplicate Pixel ID: 1395135667375657.\"",
                "timestamp": 1562562654579,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://connect.facebook.net/en_US/fbevents.js 24:15090 \"[Facebook Pixel] - Duplicate Pixel ID: 1395135667375657.\"",
                "timestamp": 1562562655774,
                "type": ""
            }
        ],
        "screenShotFile": "00940084-00e7-0075-00d7-00e5007b003c.png",
        "timestamp": 1562562648061,
        "duration": 11610
    },
    {
        "description": "total count of fruits & veg on the list should be same|Add an item to the bigbasket cart",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "instanceId": 25352,
        "browser": {
            "name": "chrome",
            "version": "75.0.3770.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://connect.facebook.net/en_US/fbevents.js 24:15090 \"[Facebook Pixel] - Duplicate Pixel ID: 1395135667375657.\"",
                "timestamp": 1562562663062,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://connect.facebook.net/en_US/fbevents.js 24:15090 \"[Facebook Pixel] - Duplicate Pixel ID: 1395135667375657.\"",
                "timestamp": 1562562669069,
                "type": ""
            }
        ],
        "screenShotFile": "006b0049-00e0-0092-009f-00810088001e.png",
        "timestamp": 1562562664848,
        "duration": 5177
    },
    {
        "description": "should add an item in big basket cart|Add an item to the bigbasket cart",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "instanceId": 21464,
        "browser": {
            "name": "chrome",
            "version": "75.0.3770.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://connect.facebook.net/en_US/fbevents.js 24:15090 \"[Facebook Pixel] - Duplicate Pixel ID: 1395135667375657.\"",
                "timestamp": 1562563127741,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://www.bigbasket.com/static/v2174/custPage/build/all.min.js 3:17744 Uncaught TypeError: Cannot read property 'id' of undefined",
                "timestamp": 1562563130504,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://connect.facebook.net/en_US/fbevents.js 24:15090 \"[Facebook Pixel] - Duplicate Pixel ID: 1395135667375657.\"",
                "timestamp": 1562563132268,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://connect.facebook.net/en_US/fbevents.js 24:15090 \"[Facebook Pixel] - Duplicate Pixel ID: 1395135667375657.\"",
                "timestamp": 1562563135660,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://connect.facebook.net/en_US/fbevents.js 24:15090 \"[Facebook Pixel] - Duplicate Pixel ID: 1395135667375657.\"",
                "timestamp": 1562563136982,
                "type": ""
            }
        ],
        "screenShotFile": "006c00d7-0007-00bb-0009-0066006d0007.png",
        "timestamp": 1562563129924,
        "duration": 10686
    },
    {
        "description": "total count of fruits & veg on the list should be same|Add an item to the bigbasket cart",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "instanceId": 21464,
        "browser": {
            "name": "chrome",
            "version": "75.0.3770.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://connect.facebook.net/en_US/fbevents.js 24:15090 \"[Facebook Pixel] - Duplicate Pixel ID: 1395135667375657.\"",
                "timestamp": 1562563142616,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://connect.facebook.net/en_US/fbevents.js 24:15090 \"[Facebook Pixel] - Duplicate Pixel ID: 1395135667375657.\"",
                "timestamp": 1562563148338,
                "type": ""
            }
        ],
        "screenShotFile": "007f00a3-00a4-00bc-00f7-00a0007d00c9.png",
        "timestamp": 1562563144134,
        "duration": 4936
    },
    {
        "description": "should add an item in big basket cart|Add an item to the bigbasket cart",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "instanceId": 4363,
        "browser": {
            "name": "chrome",
            "version": "75.0.3770.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://connect.facebook.net/en_US/fbevents.js 24:15090 \"[Facebook Pixel] - Duplicate Pixel ID: 1395135667375657.\"",
                "timestamp": 1562565188314,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://connect.facebook.net/en_US/fbevents.js 24:15090 \"[Facebook Pixel] - Duplicate Pixel ID: 1395135667375657.\"",
                "timestamp": 1562565193867,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://prodstaging.bigbasket.com/media/uploads/p/ml/281185_9-lakme-nail-colour-remover.jpg - Failed to load resource: the server responded with a status of 403 ()",
                "timestamp": 1562565195236,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://connect.facebook.net/en_US/fbevents.js 24:15090 \"[Facebook Pixel] - Duplicate Pixel ID: 1395135667375657.\"",
                "timestamp": 1562565196821,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://connect.facebook.net/en_US/fbevents.js 24:15090 \"[Facebook Pixel] - Duplicate Pixel ID: 1395135667375657.\"",
                "timestamp": 1562565198104,
                "type": ""
            }
        ],
        "screenShotFile": "009e0097-00a1-0083-0008-006f00f700c8.png",
        "timestamp": 1562565190677,
        "duration": 11180
    },
    {
        "description": "total count of fruits & veg on the list should be same|Add an item to the bigbasket cart",
        "passed": true,
        "pending": false,
        "os": "Linux",
        "instanceId": 4363,
        "browser": {
            "name": "chrome",
            "version": "75.0.3770.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://connect.facebook.net/en_US/fbevents.js 24:15090 \"[Facebook Pixel] - Duplicate Pixel ID: 1395135667375657.\"",
                "timestamp": 1562565204484,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://connect.facebook.net/en_US/fbevents.js 24:15090 \"[Facebook Pixel] - Duplicate Pixel ID: 1395135667375657.\"",
                "timestamp": 1562565209783,
                "type": ""
            }
        ],
        "screenShotFile": "00b100bf-0066-00bf-00b0-0052003b003e.png",
        "timestamp": 1562565206068,
        "duration": 5646
    }
];

    this.sortSpecs = function () {
        this.results = results.sort(function sortFunction(a, b) {
    if (a.sessionId < b.sessionId) return -1;else if (a.sessionId > b.sessionId) return 1;

    if (a.timestamp < b.timestamp) return -1;else if (a.timestamp > b.timestamp) return 1;

    return 0;
});
    };

    this.loadResultsViaAjax = function () {

        $http({
            url: './combined.json',
            method: 'GET'
        }).then(function (response) {
                var data = null;
                if (response && response.data) {
                    if (typeof response.data === 'object') {
                        data = response.data;
                    } else if (response.data[0] === '"') { //detect super escaped file (from circular json)
                        data = CircularJSON.parse(response.data); //the file is escaped in a weird way (with circular json)
                    }
                    else {
                        data = JSON.parse(response.data);
                    }
                }
                if (data) {
                    results = data;
                    that.sortSpecs();
                }
            },
            function (error) {
                console.error(error);
            });
    };


    if (clientDefaults.useAjax) {
        this.loadResultsViaAjax();
    } else {
        this.sortSpecs();
    }


});

app.filter('bySearchSettings', function () {
    return function (items, searchSettings) {
        var filtered = [];
        if (!items) {
            return filtered; // to avoid crashing in where results might be empty
        }
        var prevItem = null;

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.displaySpecName = false;

            var isHit = false; //is set to true if any of the search criteria matched
            countLogMessages(item); // modifies item contents

            var hasLog = searchSettings.withLog && item.browserLogs && item.browserLogs.length > 0;
            if (searchSettings.description === '' ||
                (item.description && item.description.toLowerCase().indexOf(searchSettings.description.toLowerCase()) > -1)) {

                if (searchSettings.passed && item.passed || hasLog) {
                    isHit = true;
                } else if (searchSettings.failed && !item.passed && !item.pending || hasLog) {
                    isHit = true;
                } else if (searchSettings.pending && item.pending || hasLog) {
                    isHit = true;
                }
            }
            if (isHit) {
                checkIfShouldDisplaySpecName(prevItem, item);

                filtered.push(item);
                prevItem = item;
            }
        }

        return filtered;
    };
});

