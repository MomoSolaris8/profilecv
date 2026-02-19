import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
};

export type BlogPost = BlogPostMeta & {
  contentHtml: string;
};

const postsDirectory = path.join(process.cwd(), 'src', 'content', 'blog');

function getMarkdownFiles(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs.readdirSync(postsDirectory).filter((name) => name.endsWith('.md'));
}

export function getAllPostMeta(): BlogPostMeta[] {
  const files = getMarkdownFiles();
  return files
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, file);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: String(data.title ?? slug),
        date: String(data.date ?? ''),
        summary: String(data.summary ?? ''),
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function hasPost(slug: string): boolean {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  return fs.existsSync(fullPath);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const processed = await remark().use(html).process(content);

  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ''),
    summary: String(data.summary ?? ''),
    contentHtml: processed.toString(),
  };
}
