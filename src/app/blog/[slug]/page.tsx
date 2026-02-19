import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';
import { getAllPostMeta, getPostBySlug } from '@/lib/blog';

export function generateStaticParams() {
  const posts = getAllPostMeta();
  return posts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;
export const dynamic = 'force-static';

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!slug) {
    notFound();
  }

  const post = await getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  return (
    <div className="relative overflow-x-hidden bg-[#0a0e0e] min-h-screen">
      <Navigation />

      <main className="relative z-10 pt-28 pb-24 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-8">
            <div className="text-sm text-gray-400 mb-2">{post.date}</div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#c3c297]">
              {post.title}
            </h1>
            {post.summary ? (
              <p className="text-gray-300 mt-3">{post.summary}</p>
            ) : null}
          </div>

          <article
            className="prose prose-invert max-w-none prose-headings:text-[#c3c297] prose-a:text-[#c3c297] prose-strong:text-gray-100"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          <div className="mt-10">
            <a
              href="/blog/"
              className="text-sm text-[#c3c297] hover:text-white transition-colors"
            >
              ← Back to Blog
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
