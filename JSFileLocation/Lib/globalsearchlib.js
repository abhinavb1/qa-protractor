"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const global_search_po_1 = require("../PageObject/global_search.po");
class Globalsearchlib {
    clearSearchBar() {
        global_search_po_1.Global_searchPo.searchBarElem().clear();
    }
    ;
    inputInSearchBar(searchVal) {
        return global_search_po_1.Global_searchPo.searchBarElem().sendKeys(searchVal);
    }
    clickSearchIcon() {
        global_search_po_1.Global_searchPo.searchIcon_elem().click();
    }
}
exports.Globalsearchlib = Globalsearchlib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsc2VhcmNobGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vUE9NX0JpZ0Jhc2tldC9MaWIvZ2xvYmFsc2VhcmNobGliLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUVBQStEO0FBRS9ELE1BQWEsZUFBZTtJQUNqQixjQUFjO1FBQ2pCLGtDQUFlLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDM0MsQ0FBQztJQUFBLENBQUM7SUFDSyxnQkFBZ0IsQ0FBQyxTQUFnQjtRQUNwQyxrQ0FBZSxDQUFDLGFBQWEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUN2RCxDQUFDO0lBQ08sZUFBZTtRQUNuQixrQ0FBZSxDQUFDLGVBQWUsRUFBRSxDQUFBO0lBQ3JDLENBQUM7Q0FDSjtBQVZELDBDQVVDIn0=