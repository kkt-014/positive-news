import { Link } from "react-router-dom";

export interface Article {
  // ArticleItemProps を Article に変更
  id: number;
  title: string;
  publishedAt: string;
  author: string;
  imageUrl?: string;
}

export default function ArticleItem({ article }: { article: Article }) {
  return (
    <div className="flex flex-col gap-3 pb-3">
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
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
