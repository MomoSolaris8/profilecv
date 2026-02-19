export type BlogPost = {
  title: string;
  date: string;
  summary: string;
  slug: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: 'Write Your First Post',
    date: '2026-02-19',
    summary: 'This is a placeholder. Replace with your own content and date.',
    slug: 'write-your-first-post',
  },
  {
    title: 'Design Notes',
    date: '2026-02-01',
    summary: 'Short notes about decisions, tradeoffs, and experiments.',
    slug: 'design-notes',
  },
];
