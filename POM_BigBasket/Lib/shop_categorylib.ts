import {shop_CategoryPo} from "../PageObject/shop_category.po";

export class Shop_Categorylib {
    public clickSearchCategory(){
        shop_CategoryPo.findShopCategory().click();
    };
    public clickFruitCategory(){
        shop_CategoryPo.findFruitCategory().click()

    }
}