import type { Metadata } from 'next';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { CustomMDX } from '@/components/mdx';
import { getLegalContent } from '@/db/mdx-reader';
import { unstable_noStore as noStore } from 'next/cache';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const legalContent = getLegalContent().find(
    (post) => post.slug === params.slug,
  );
  if (!legalContent) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
  } = legalContent.metadata;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://alexanderspurlock.com/legal/${legalContent.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

function formatDate(date: string) {
  noStore();
  const currentDate = new Date().getTime();
  if (!date.includes('T')) {
    date = `${date}T00:00:00`;
  }
  const targetDate = new Date(date).getTime();
  const timeDifference = Math.abs(currentDate - targetDate);
  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  const fullDate = new Date(date).toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  if (daysAgo < 1) {
    return 'Today';
  } else if (daysAgo < 7) {
    return `${fullDate} (${daysAgo}d ago)`;
  } else if (daysAgo < 30) {
    const weeksAgo = Math.floor(daysAgo / 7);
    return `${fullDate} (${weeksAgo}w ago)`;
  } else if (daysAgo < 365) {
    const monthsAgo = Math.floor(daysAgo / 30);
    return `${fullDate} (${monthsAgo}mo ago)`;
  } else {
    const yearsAgo = Math.floor(daysAgo / 365);
    return `${fullDate} (${yearsAgo}y ago)`;
  }
}

export default function LegalDocumentPage({
  params,
}: {
  params: { slug: string };
}) {
  const legalContent = getLegalContent().find(
    (post) => post.slug === params.slug,
  );

  if (!legalContent) {
    notFound();
  }

  return (
    <section className="max-w-3xl mx-auto">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: legalContent.metadata.title,
            datePublished: legalContent.metadata.publishedAt,
            dateModified: legalContent.metadata.publishedAt,
            description: legalContent.metadata.summary,
            url: `https://alexanderspurlock.com/legal/${legalContent.slug}`,
            author: {
              '@type': 'Person',
              name: 'Alexander Spurlock',
            },
          }),
        }}
      />
      <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
        {legalContent.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600">
            {formatDate(legalContent.metadata.publishedAt)}
          </p>
        </Suspense>
      </div>
      <article className="prose prose-quoteless prose-neutral">
        <CustomMDX source={legalContent.content} />
      </article>
    </section>
  );
}
