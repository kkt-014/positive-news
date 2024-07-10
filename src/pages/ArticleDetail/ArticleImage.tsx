export default function ArticleImage({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="flex flex-col gap-3">
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
    </div>
  );
}
