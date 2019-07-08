import {Item_DetailsPo} from "../PageObject/item_details.po";

export class Item_DetaiLlib {
    public clickAddtoBasket(){
        Item_DetailsPo.FindAddtoBasket().click();
    };

}