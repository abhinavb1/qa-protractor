import {element, by} from "protractor";

export class Item_ListPo{
    public static FindItemCardInList(){
        return element(by.binding("vm.selectedProduct.p_desc"));
    };
    public static FindHeadingElem(){
        return element(by.css(('[qa = "pageName"]')));
    };
}