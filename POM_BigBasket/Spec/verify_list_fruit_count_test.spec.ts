import {Base_UrlLib} from "../Lib/base_urllib";
import {Shop_Categorylib} from "../Lib/shop_categorylib";
import {Card_ItemLib} from "../Lib/card_itemlib";
import {browser, by, element} from "protractor";

describe('Add an item to the bigbasket cart', function() {
    beforeAll(function () {
        let base_link  = new Base_UrlLib();
        base_link.openLink()
    });
    let shop_ctr = new Shop_Categorylib();
    let fruit_count = new Card_ItemLib()
    it('should add multiple items in big basket cart', function () {
        shop_ctr.clickSearchCategory();
        shop_ctr.clickFruitCategory();
        fruit_count.findHeadingCount();
        browser.waitForAngular();
        browser.executeScript('window.scrollTo(0,document.body.scrollHeight)');
        browser.actions().mouseMove(element(by.className("show-more"))).perform();
        // fruit_count.findHeadingCount();
        let csa = new fruit_count.findHeadingCount();
        expect(fruit_count).toEqual(csa);

    })
});
