"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class Global_searchPo {
    static searchBarElem() {
        return protractor_1.element(protractor_1.by.model("vm.searchPhrase"));
    }
    ;
    static searchIcon_elem() {
        return protractor_1.element(protractor_1.by.css('.btn-default.bb-search'));
    }
    ;
}
exports.Global_searchPo = Global_searchPo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsX3NlYXJjaC5wby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1BPTV9CaWdCYXNrZXQvUGFnZU9iamVjdC9nbG9iYWxfc2VhcmNoLnBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXVDO0FBRXZDLE1BQWEsZUFBZTtJQUNqQixNQUFNLENBQUMsYUFBYTtRQUN2QixPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUFBLENBQUM7SUFDSyxNQUFNLENBQUMsZUFBZTtRQUN6QixPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUFBLENBQUM7Q0FDTDtBQVBELDBDQU9DIn0=