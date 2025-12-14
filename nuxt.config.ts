export default defineNuxtConfig({
    ssr: true,
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    modules: ['@nuxt/eslint'],
    css: ['@/assets/css/global.css'],
    app: {
        baseURL: '/bitm-code-nav/',
        head: {
            link: [
                {rel: 'icon', type: 'image/x-icon', href: 'favicon.ico'},
            ]
        }
    },
})
