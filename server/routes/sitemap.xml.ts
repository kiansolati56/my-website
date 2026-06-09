export default defineEventHandler(() => {
    const baseUrl = 'https://itskian.ir'

    const routes = [
        '/'
    ]

    const urls = routes.map(route => `
    <url>
      <loc>${baseUrl}${route}</loc>
    </url>
  `).join('')

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`
})