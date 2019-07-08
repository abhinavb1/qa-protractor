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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcF9jYXRlZ29yeS5wby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNob3BfY2F0ZWdvcnkucG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBdUM7QUFFdkMsTUFBYSxlQUFlO0lBQ2pCLE1BQU0sQ0FBQyxnQkFBZ0I7UUFDMUIsT0FBTyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFDTSxNQUFNLENBQUMsaUJBQWlCO1FBQzNCLE9BQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0NBQ0o7QUFQRCwwQ0FPQyJ9