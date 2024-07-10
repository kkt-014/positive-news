import { Article } from "../../api/news.tsx";

type Props = {
  article: Article;
};

export default function ArticleContent({ article }: Props) {
  return (
    <p className="text-[#181711] text-base font-normal leading-normal pb-3 pt-1 px-4">
      {article.content}
    </p>
  );
}
