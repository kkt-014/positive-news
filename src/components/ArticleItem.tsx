import { Link } from "react-router-dom";

export default function ArticleItem({ article }) {
  return (
    <li>
      <Link to={`/articles/${article.id}`}>
        <h2>{article.title}</h2>
      </Link>
      <p>{article.publishedAt}</p>
      <p>{article.category}</p>
      <ul>
        {article.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </li>
  );
}
