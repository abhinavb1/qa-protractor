"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class Global_searchPo {
    static searchBarElem() {
        return protractor_1.element(protractor_1.by.model("vm.searchPhrase"));
    }
    ;
    static searchIcon_elem() {
        return protractor_1.element(protractor_1.by.css(".btn-default.bb-search"));
    }
    ;
}
exports.Global_searchPo = Global_searchPo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsX3NlYXJjaC5wby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdsb2JhbF9zZWFyY2gucG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBdUM7QUFFdkMsTUFBYSxlQUFlO0lBQ2pCLE1BQU0sQ0FBQyxhQUFhO1FBQ3ZCLE9BQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQUEsQ0FBQztJQUNLLE1BQU0sQ0FBQyxlQUFlO1FBQ3pCLE9BQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQUEsQ0FBQztDQUNMO0FBUEQsMENBT0MifQ==