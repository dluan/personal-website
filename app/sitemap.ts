export default function sitemap() {
  const routes = ['', '/projetos', '/habilidades', '/experiencias', '/contato', '/area-de-trabalho'].map((route) => ({
    url: `https://dluan.com.br${route}`,
    lastModified: new Date().toISOString().split('T')[0]
  }))

  return [...routes]
}
