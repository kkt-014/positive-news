import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ArticleList } from "./components/ArticleList";
import articles from "./data.ts";
import { HeroSection } from "./components/HeroSection.tsx";
import { Header } from "./components/Header.tsx";
import ArticleDetailPage from "./pages/ArticleDetail/ArticleDetailPage";

export function App() {
  return (
    <>
      <div
        className="group/design-root relative flex size-full min-h-screen flex-col overflow-x-hidden bg-white"
        style={{ fontFamily: 'Newsreader, "Noto Sans", sans-serif' }}
      >
        <div className="layout-container flex h-full grow flex-col">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <ArticleList articles={articles} />
                </>
              }
            />
            <Route
              path="/articles/:articleId"
              element={<ArticleDetailPage articles={articles} />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}
