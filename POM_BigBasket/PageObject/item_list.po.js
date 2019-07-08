"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class Item_ListPo {
    static FindItemCardInList() {
        return protractor_1.element(protractor_1.by.binding("vm.selectedProduct.p_desc"));
    }
    ;
    static FindHeadingElem() {
        return protractor_1.element(protractor_1.by.css(('[qa = "pageName"]')));
    }
    ;
}
exports.Item_ListPo = Item_ListPo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbV9saXN0LnBvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbV9saXN0LnBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXVDO0FBRXZDLE1BQWEsV0FBVztJQUNiLE1BQU0sQ0FBQyxrQkFBa0I7UUFDNUIsT0FBTyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFBQSxDQUFDO0lBQ0ssTUFBTSxDQUFDLGVBQWU7UUFDekIsT0FBTyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQUEsQ0FBQztDQUNMO0FBUEQsa0NBT0MifQ==