import {element, by} from "protractor";

export class BigBasket_CartPo {
    public static findCart(){
        return element(by.className("eubx4"));
    }
}