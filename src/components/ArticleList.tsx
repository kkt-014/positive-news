import ArticleItem from "./ArticleItem";

interface ArticleListProps {
  articles: {
    id: number;
    title: string;
    publishedAt: string;
    category: string;
    tags: string[];
  }[];
}

export default function ArticleList({ articles }: ArticleListProps) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </ul>
  );
}
