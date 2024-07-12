export default function ArticleImage({ urlToImage }: { urlToImage: string }) {
  return (
    <div className="flex flex-col gap-3">
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
        style={{ backgroundImage: `url(${urlToImage})` }}
      />
    </div>
  );
}
