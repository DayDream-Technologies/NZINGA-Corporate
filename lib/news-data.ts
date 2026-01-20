export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
}

export const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "Crowd Funding For \"The Melody\" TV Series",
    excerpt: "Nzinga Pictures announces crowdfunding campaign for the highly anticipated \"The Melody\" TV series, an exciting new drama production.",
    date: "July 4, 2023",
    category: "Pictures & TV",
    slug: "the-melody-crowdfunding",
  },
  {
    id: "2",
    title: "Partnership with Royal BattleField",
    excerpt: "Nzinga Gaming division announces strategic partnership with Royal BattleField to expand our presence in the gaming industry.",
    date: "December 3, 2022",
    category: "Gaming",
    slug: "royal-battlefield-partnership",
  },
  {
    id: "3",
    title: "New Addition To Brand Name (Management Agency)",
    excerpt: "Nzinga Group expands with the launch of our dedicated talent management division, Nzinga Management.",
    date: "October 15, 2022",
    category: "Management",
    slug: "management-agency-launch",
  },
];

export function getLatestNews(count: number = 3): NewsItem[] {
  return newsItems.slice(0, count);
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((item) => item.slug === slug);
}
