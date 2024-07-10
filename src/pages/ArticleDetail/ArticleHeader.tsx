export default function ArticleHeader({
  title,
  author,
  date,
}: {
  title: string;
  author: string;
  date: string;
}) {
  return (
    <div className="flex flex-wrap justify-between gap-3 p-4">
      <p className="text-[#181711] tracking-light text-[32px] font-bold leading-tight min-w-72">
        {title}
      </p>
      <p className="text-[#8a8560] text-sm font-normal leading-normal pb-3 pt-1 px-4">
        {author} · {date}
      </p>
    </div>
  );
}
