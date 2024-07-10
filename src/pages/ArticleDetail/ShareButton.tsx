export default function ShareButton() {
  const handleShareClick = () => {
    // ここに共有機能の実装 (例: SNS共有ダイアログを開くなど)
  };

  return (
    <button
      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f5dc3d] text-[#181711] text-sm font-medium leading-normal"
      onClick={handleShareClick}
    >
      <span className="truncate">Share</span>
    </button>
  );
}
