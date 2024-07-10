export default function ArticleContent({ content }: { content: string }) {
  return (
    <p className="text-[#181711] text-base font-normal leading-normal pb-3 pt-1 px-4">
      {content}
    </p>
  );
}
