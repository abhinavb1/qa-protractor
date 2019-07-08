import {Item_ListPo} from "../PageObject/item_list.po";

export class Card_ItemLib {
    public clickItemCard() {
        Item_ListPo.FindItemCardInList().click()
    };
    public findHeadingCount(){
        Item_ListPo.FindHeadingElem().getText()
    }
}