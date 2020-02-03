// Author - Abhinav

This project is an assigment to test out functionalities of bigbasket.
This framework is written in jasmine with protractor.

Framework requirements:
1. nodejs - v10.16.0
2. npm - 6.9.0
3. protractor - 5.4.2
4. typescript - 3.5.2

Driver Details:
chromedriver - chromedriver_75.0.3770.8(Supports Chrome version 75)
geckodriver - geckodriver-v0.24.0(Supports Firefox version 57 or Above)

Execute Script:
* clone the repo and run protactor conf.js
* make sure you are in same path where conf.js is located
* make sure all the dependencies are install and are compatible with given versions of driver

POM Structure:
Path: /qa-protractor/POM_BigBasket
1. Lib Folder
>>>Lib Folder contains all the action files on the elements;i.e. click,clear,sendkeys,gettext
   are written in this folder.
2. PageObjects Folder
>>>PageObjects Folder contains all the find element methods and classes

3. Specs Folder
>>>This folder contains the tests.

Reports:
Path: /qa-protractor/Reports
>>> It contains reports for all the tests

conf.js
Path: /qa-protractor
>>> It contains the configuration to run tests

package.json
Path: /qa-protractor
>>> It contains dependencies and config values for tests

tsconfig.json
Path: /qa-protractor
>>> This file is used to convert js files to ts files

