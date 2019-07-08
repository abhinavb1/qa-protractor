import {element, by, browser} from "protractor";

export class Base_urlPo {
    public static openLink(){
        browser.ignoreSynchronization = true;
        return browser.get("https://www.bigbasket.com/");
    };
}
