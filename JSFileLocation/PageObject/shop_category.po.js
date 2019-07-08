"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class shop_CategoryPo {
    static findShopCategory() {
        return protractor_1.element(protractor_1.by.css(".dropdown-toggle.meganav-shop"));
    }
    static findFruitCategory() {
        return protractor_1.element(protractor_1.by.linkText("Fruits & Vegetables"));
    }
}
exports.shop_CategoryPo = shop_CategoryPo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcF9jYXRlZ29yeS5wby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1BPTV9CaWdCYXNrZXQvUGFnZU9iamVjdC9zaG9wX2NhdGVnb3J5LnBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXVDO0FBRXZDLE1BQWEsZUFBZTtJQUNqQixNQUFNLENBQUMsZ0JBQWdCO1FBQzFCLE9BQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBQ00sTUFBTSxDQUFDLGlCQUFpQjtRQUMzQixPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztDQUNKO0FBUEQsMENBT0MifQ==