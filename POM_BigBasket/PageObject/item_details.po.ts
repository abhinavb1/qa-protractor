import {element, by} from "protractor";

export class Item_DetailsPo {
    public static FindAddtoBasket(){
        return element(by.css("[data-qa='addToBasket']"));
    }
}