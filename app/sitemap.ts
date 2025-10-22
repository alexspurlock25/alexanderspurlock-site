import { getLegalContent } from '@/db/mdx-reader';

export default async function sitemap() {
  const docs = getLegalContent().map((post) => ({
    url: `https://alexanderspurlock.com/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const routes = ['', '/work', '/legal'].map((route) => ({
    url: `https://alexanderspurlock.com${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...docs];
}
