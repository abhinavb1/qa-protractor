"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const item_list_po_1 = require("../PageObject/item_list.po");
class Card_ItemLib {
    clickItemCard() {
        item_list_po_1.Item_ListPo.FindItemCardInList().click();
    }
    ;
    findHeadingCount() {
        item_list_po_1.Item_ListPo.FindHeadingElem().getText();
    }
}
exports.Card_ItemLib = Card_ItemLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZF9pdGVtbGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FyZF9pdGVtbGliLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkRBQXVEO0FBRXZELE1BQWEsWUFBWTtJQUNkLGFBQWE7UUFDaEIsMEJBQVcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQzVDLENBQUM7SUFBQSxDQUFDO0lBQ0ssZ0JBQWdCO1FBQ25CLDBCQUFXLENBQUMsZUFBZSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDM0MsQ0FBQztDQUNKO0FBUEQsb0NBT0MifQ==