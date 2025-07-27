export default class SearchEngine {
    public name: string
    public url: string
    public logo: string

    public constructor(params: {
        name: string
        url: string
        logo: string
    }) {
        this.name = params.name
        this.url = params.url
        this.logo = params.logo
    }
}
