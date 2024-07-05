import ArticleItem from "./ArticleItem";

export default function ArticleList({ articles }) {
  return (
    <ul>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </ul>
  );
}
