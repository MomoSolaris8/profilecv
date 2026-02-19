import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getAllPostMeta, getPostBySlug } from '@/lib/blog';

export function generateStaticParams() {
  const posts = getAllPostMeta();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

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
        </div>
      </main>

      <Footer />
    </div>
  );
}
