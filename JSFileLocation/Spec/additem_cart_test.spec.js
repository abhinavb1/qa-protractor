"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_urllib_1 = require("../Lib/base_urllib");
const globalsearchlib_1 = require("../Lib/globalsearchlib");
const item_detaillib_1 = require("../Lib/item_detaillib");
const cart_valuelib_1 = require("../Lib/cart_valuelib");
const card_itemlib_1 = require("../Lib/card_itemlib");
describe('Add an item to the bigbasket cart', function () {
    beforeAll(function () {
        let base_link = new base_urllib_1.Base_UrlLib();
        base_link.openLink();
    });
    let globalLib = new globalsearchlib_1.Globalsearchlib();
    let ItemLib = new card_itemlib_1.Card_ItemLib();
    let ItemDetails = new item_detaillib_1.Item_DetaiLlib();
    let CartVal = new cart_valuelib_1.Cart_valueLib();
    it('should add an item in big basket cart', function () {
        globalLib.clearSearchBar();
        globalLib.inputInSearchBar("Beauty & Grooming");
        globalLib.clickSearchIcon();
        globalLib.clearSearchBar();
        globalLib.inputInSearchBar("Lakme - Nail Colour Remover");
        globalLib.clickSearchIcon();
        ItemLib.clickItemCard();
        ItemDetails.clickAddtoBasket();
        expect(CartVal.findCartText()).toContain("1 items");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkaXRlbV9jYXJ0X3Rlc3Quc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1BPTV9CaWdCYXNrZXQvU3BlYy9hZGRpdGVtX2NhcnRfdGVzdC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0RBQStDO0FBQy9DLDREQUF1RDtBQUN2RCwwREFBcUQ7QUFDckQsd0RBQW1EO0FBQ25ELHNEQUFpRDtBQUdqRCxRQUFRLENBQUMsbUNBQW1DLEVBQUU7SUFDMUMsU0FBUyxDQUFDO1FBQ04sSUFBSSxTQUFTLEdBQUksSUFBSSx5QkFBVyxFQUFFLENBQUM7UUFDbkMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsSUFBSSxTQUFTLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7SUFDdEMsSUFBSSxPQUFPLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUM7SUFDakMsSUFBSSxXQUFXLEdBQUcsSUFBSSwrQkFBYyxFQUFFLENBQUM7SUFDdkMsSUFBSSxPQUFPLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUM7SUFDbEMsRUFBRSxDQUFDLHVDQUF1QyxFQUFFO1FBQ3hDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMzQixTQUFTLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNoRCxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDNUIsU0FBUyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzNCLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBQzFELFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEIsV0FBVyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDL0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4RCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIn0=