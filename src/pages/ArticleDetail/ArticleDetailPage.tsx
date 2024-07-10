import { useParams } from "react-router-dom";
import { Article } from "../../components/ArticleItem";
import ArticleHeader from "./ArticleHeader";
import ArticleImage from "./ArticleImage";
import ArticleContent from "./ArticleContent";
import ShareButton from "./ShareButton";

export default function ArticleDetailPage({
  articles,
}: {
  articles: Article[];
}) {
  const { articleId } = useParams();
  const article = articles.find((a) => a.id === Number(articleId));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="layout-content-container flex flex-col max-w-[920px] flex-1">
      <ArticleHeader
        title={article.title}
        author={article.author}
        date={article.publishedAt}
      />
      {article.imageUrl && <ArticleImage imageUrl={article.imageUrl} />}
      <ArticleContent content={article.content} />
      <h2 className="text-[#181711] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Share this article
      </h2>
      <div className="p-4 @container">
        <ShareButton />
      </div>
    </div>
  );
}
