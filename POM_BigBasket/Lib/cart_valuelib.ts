import {BigBasket_CartPo} from "../PageObject/bigbasket_cart.po";

export class Cart_valueLib {
    public findCartText() {
        BigBasket_CartPo.findCart().getText();
    };

}