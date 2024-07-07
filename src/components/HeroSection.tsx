export default function HeroSection() {
  return (
    <div className="flex flex-1 justify-center px-40 py-5">
      <div className="layout-content-container flex max-w-[960px] flex-1 flex-col">
        <div className="@container">
          <div className="@[480px]:p-4">
            <div
              className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url('https://cdn.usegalileo.ai/stability/a8b1ed35-7af0-41f3-8634-ed3aed09e79a.png')",
              }}
            >
              {/* ... (ヒーローセクションの内容) ... */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
