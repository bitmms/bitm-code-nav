export default class WebSite {
  public name: string
  public href: string
  public description: string
  public slug: string

  public constructor(params: {
    name: string
    href: string
    description: string
    slug: string
  }) {
    this.name = params.name
    this.href = params.href
    this.description = params.description
    this.slug = params.slug
  }
}
