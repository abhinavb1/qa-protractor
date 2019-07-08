import {Global_searchPo} from "../PageObject/global_search.po";

export class Globalsearchlib {
    public clearSearchBar(){
        Global_searchPo.searchBarElem().clear()
    };
    public inputInSearchBar(searchVal:string){
        Global_searchPo.searchBarElem().sendKeys(searchVal)
    }
    public  clickSearchIcon(){
        Global_searchPo.searchIcon_elem()
    }
}