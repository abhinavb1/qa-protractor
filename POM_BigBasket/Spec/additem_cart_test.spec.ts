import {Base_UrlLib} from "../Lib/base_urllib";
import {Globalsearchlib} from "../Lib/globalsearchlib";
import {Item_DetaiLlib} from "../Lib/item_detaillib";
import {Cart_valueLib} from "../Lib/cart_valuelib";
import {Card_ItemLib} from "../Lib/card_itemlib";


describe('Add an item to the bigbasket cart', function() {
    beforeAll(function () {
        let base_link  = new Base_UrlLib();
        base_link.openLink()
    });
    let globalLib = new Globalsearchlib();
    let ItemLib = new Card_ItemLib();
    let ItemDetails = new Item_DetaiLlib();
    let CartVal = new Cart_valueLib();
    it('should add an item in big basket cart', function() {
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

