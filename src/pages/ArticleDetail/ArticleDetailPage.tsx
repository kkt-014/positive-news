import { useParams } from "react-router-dom";
import ArticleHeader from "./ArticleHeader";
import ArticleImage from "./ArticleImage";
import ArticleContent from "./ArticleContent";
import ShareButton from "./ShareButton";
import { Article } from "../../api/news.tsx";

type Props = {
  articles: Article[];
};

export default function ArticleDetailPage({ articles }: Props) {
  const { articleId } = useParams();
  const article = articles.find((a) => a.id === Number(articleId));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="layout-content-container flex flex-col max-w-[920px] flex-1">
      <ArticleHeader article={article} />
      {article.imageUrl && <ArticleImage imageUrl={article.imageUrl} />}
      <ArticleContent article={article} />
      <h2 className="text-[#181711] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Share this article
      </h2>
      <div className="p-4 @container">
        <ShareButton />
      </div>
    </div>
  );
}
