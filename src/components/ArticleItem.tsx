import { Link } from "react-router-dom";
import { Article } from "../api/news.tsx";

export default function ArticleItem({ article }: { article: Article }) {
  return (
    <div className="flex flex-col gap-3 pb-3">
      <div
        className="aspect-video w-full rounded-xl bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: article.imageUrl
            ? `url(${article.imageUrl})`
            : `url('https://picsum.photos/seed/${article.id}/800')`,
        }} // imageUrl があればそれを、なければダミー画像を使用
      ></div>
      <div>
        <Link to={`/articles/${article.id}`}>
          <p className="text-[#181711] text-base font-medium leading-normal">
            {article.title}
          </p>
        </Link>
        <p className="text-[#8a8560] text-sm font-normal leading-normal">
          {article.publishedAt}
        </p>
        <p className="text-[#8a8560] text-sm font-normal leading-normal">
          {article.author}
        </p>
      </div>
    </div>
  );
}
