import { Link } from "react-router-dom";

interface ArticleItemProps {
  article: {
    id: number;
    title: string;
    publishedAt: string;
    category: string;
    tags: string[];
  };
}

export default function ArticleItem({ article }: ArticleItemProps) {
  return (
    <li className="flex flex-col gap-3 pb-3">
      <Link to={`/articles/${article.id}`}>
        <h2 className="text-base font-medium leading-normal text-[#181711]">
          {article.title}
        </h2>
      </Link>
      <p className="text-sm font-normal leading-normal text-[#8a8560]">
        {article.publishedAt}
      </p>
      <p className="text-sm font-normal leading-normal text-[#8a8560]">
        {article.category}
      </p>
      <ul className="flex gap-2">
        {article.tags.map((tag) => (
          <li
            key={tag}
            className="text-sm font-normal leading-normal text-[#8a8560]"
          >
            {tag}
          </li>
        ))}
      </ul>
    </li>
  );
}
