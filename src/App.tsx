import "./App.css";
import ArticleList from "./components/ArticleList";
import articles from "./data.js";
import HeroSection from "./components/HeroSection.tsx";
import Header from "./components/Header.tsx";

export default function App() {
  return (
    <>
      <div
        className="group/design-root relative flex size-full min-h-screen flex-col overflow-x-hidden bg-white"
        style={{ fontFamily: 'Newsreader, "Noto Sans", sans-serif' }}
      >
        <div className="layout-container flex h-full grow flex-col">
          <Header />
          <HeroSection />
          <ArticleList articles={articles} />
        </div>
      </div>
    </>
  );
}
