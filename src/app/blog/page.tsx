import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blogPosts';

export default function BlogIndexPage() {
  return (
    <div className="relative overflow-x-hidden bg-[#0a0e0e] min-h-screen">
      <Navigation />

      <main className="relative z-10 pt-28 pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-[#c3c297] mb-8">
            Blog
          </h1>
          <div className="grid gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="p-6 border border-[#1d2424] bg-[#0a0e0e] hover:border-[#c3c297] transition-colors"
              >
                <div className="text-sm text-gray-400 mb-2">{post.date}</div>
                <h2 className="text-xl font-semibold text-gray-100 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-300 mb-4">{post.summary}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-[#c3c297] hover:text-white transition-colors"
                >
                  Read →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
