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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkaXRlbV9jYXJ0X3Rlc3Quc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkZGl0ZW1fY2FydF90ZXN0LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvREFBK0M7QUFDL0MsNERBQXVEO0FBQ3ZELDBEQUFxRDtBQUNyRCx3REFBbUQ7QUFDbkQsc0RBQWlEO0FBR2pELFFBQVEsQ0FBQyxtQ0FBbUMsRUFBRTtJQUMxQyxTQUFTLENBQUM7UUFDTixJQUFJLFNBQVMsR0FBSSxJQUFJLHlCQUFXLEVBQUUsQ0FBQztRQUNuQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDSCxJQUFJLFNBQVMsR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztJQUN0QyxJQUFJLE9BQU8sR0FBRyxJQUFJLDJCQUFZLEVBQUUsQ0FBQztJQUNqQyxJQUFJLFdBQVcsR0FBRyxJQUFJLCtCQUFjLEVBQUUsQ0FBQztJQUN2QyxJQUFJLE9BQU8sR0FBRyxJQUFJLDZCQUFhLEVBQUUsQ0FBQztJQUNsQyxFQUFFLENBQUMsdUNBQXVDLEVBQUU7UUFDeEMsU0FBUyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzNCLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2hELFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM1QixTQUFTLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDM0IsU0FBUyxDQUFDLGdCQUFnQixDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDMUQsU0FBUyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QixXQUFXLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUMvQixNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hELENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMifQ==