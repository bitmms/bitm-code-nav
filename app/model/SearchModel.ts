import type {WebsiteModel} from "~/model/WebsiteModel";

export interface SearchModel {
    searchResultIsBlank: boolean
    list: WebsiteModel[]
}