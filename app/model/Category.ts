import type {WebsiteModel} from "~/model/WebsiteModel";

export interface Category {
    category: string
    iconSvg: string
    children: WebsiteModel[]
}