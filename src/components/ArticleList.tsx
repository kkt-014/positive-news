import ArticleItem, { Article } from "./ArticleItem";

export default function ArticleList({ articles }: { articles: Article[] }) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </ul>
  );
}
