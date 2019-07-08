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
    static FindFinalElem(){
        return protractor_1.element(protractor_1.by.id("snowplow_screen_view_totalcount"));
    }
    ;
}
exports.Item_ListPo = Item_ListPo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbV9saXN0LnBvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vUE9NX0JpZ0Jhc2tldC9QYWdlT2JqZWN0L2l0ZW1fbGlzdC5wby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF1QztBQUV2QyxNQUFhLFdBQVc7SUFDYixNQUFNLENBQUMsa0JBQWtCO1FBQzVCLE9BQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBQUEsQ0FBQztJQUNLLE1BQU0sQ0FBQyxlQUFlO1FBQ3pCLE9BQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUFBLENBQUM7Q0FDTDtBQVBELGtDQU9DIn0=