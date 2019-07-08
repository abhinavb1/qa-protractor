import {element, by} from "protractor";

export class shop_CategoryPo {
    public static findShopCategory(){
        return element(by.css(".dropdown-toggle.meganav-shop"));
    }
    public static findFruitCategory(){
        return element(by.linkText("Fruits & Vegetables"));
    }
}