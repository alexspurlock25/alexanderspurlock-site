import Link from 'next/link';
import { getLegalContent } from '@/db/mdx-reader';

export default function LegalHomePage() {
  const legalContent = getLegalContent();

  return (
    <section className="max-w-3xl mx-auto">
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        documents for my apps
      </h1>
      {legalContent
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/legal/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900 tracking-tight">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </section>
  );
}
