"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_urllib_1 = require("../Lib/base_urllib");
const shop_categorylib_1 = require("../Lib/shop_categorylib");
const card_itemlib_1 = require("../Lib/card_itemlib");
const protractor_1 = require("protractor");
describe('Add an item to the bigbasket cart', function () {
    beforeAll(function () {
        let base_link = new base_urllib_1.Base_UrlLib();
        base_link.openLink();
    });
    let shop_ctr = new shop_categorylib_1.Shop_Categorylib();
    let fruit_count = new card_itemlib_1.Card_ItemLib();
    it('should add multiple items in big basket cart', function () {
        shop_ctr.clickSearchCategory();
        shop_ctr.clickFruitCategory();
        fruit_count.findHeadingCount();
        protractor_1.browser.waitForAngular();
        protractor_1.browser.executeScript('window.scrollTo(0,document.body.scrollHeight)');
        protractor_1.browser.actions().mouseMove(protractor_1.element(protractor_1.by.className("show-more"))).perform();
        // fruit_count.findHeadingCount();
        let csa = new fruit_count.findHeadingCount();
        expect(fruit_count).toEqual(csa);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyaWZ5X2xpc3RfZnJ1aXRfY291bnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2ZXJpZnlfbGlzdF9mcnVpdF9jb3VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG9EQUErQztBQUMvQyw4REFBeUQ7QUFDekQsc0RBQWlEO0FBQ2pELDJDQUFnRDtBQUVoRCxRQUFRLENBQUMsbUNBQW1DLEVBQUU7SUFDMUMsU0FBUyxDQUFDO1FBQ04sSUFBSSxTQUFTLEdBQUksSUFBSSx5QkFBVyxFQUFFLENBQUM7UUFDbkMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsSUFBSSxRQUFRLEdBQUcsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDO0lBQ3RDLElBQUksV0FBVyxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFBO0lBQ3BDLEVBQUUsQ0FBQyw4Q0FBOEMsRUFBRTtRQUMvQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMvQixRQUFRLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM5QixXQUFXLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUMvQixvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3pCLG9CQUFPLENBQUMsYUFBYSxDQUFDLCtDQUErQyxDQUFDLENBQUM7UUFDdkUsb0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMxRSxrQ0FBa0M7UUFDbEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUM3QyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRXJDLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUMifQ==