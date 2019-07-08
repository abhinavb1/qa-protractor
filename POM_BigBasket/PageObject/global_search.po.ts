import {element, by} from "protractor";

export class Global_searchPo{
    public static searchBarElem(){
        return element(by.model("vm.searchPhrase"));
    };
    public static searchIcon_elem(){
        return element(by.css(".btn-default.bb-search"));
    };
}