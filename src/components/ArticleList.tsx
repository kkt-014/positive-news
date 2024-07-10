import { ArticleItem } from "./ArticleItem";
import { Article } from "../api/news.tsx";

export function ArticleList({ articles }: { articles: Article[] }) {
  return (
    <div className="flex flex-1 justify-center px-40 py-5">
      <div className="layout-content-container flex max-w-[960px] flex-1 flex-col">
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
          {articles.map((article) => (
            <ArticleItem key={article.id} article={article} />
          ))}
        </ul>
      </div>
    </div>
  );
}
