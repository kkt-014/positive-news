import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ArticleList } from "./components/ArticleList";
import { HeroSection } from "./components/HeroSection.tsx";
import { Header } from "./components/Header.tsx";
import { ArticleDetailPage } from "./pages/ArticleDetail/ArticleDetailPage";
import { Article, fetchArticles } from "./api/news.tsx";
import { useEffect, useState } from "react";

export function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  useEffect(() => {
    const loadArticles = async () => {
      try {
        const fetchedArticles = await fetchArticles();
        setArticles(fetchedArticles);
      } catch (error) {
        console.error("記事取得失敗！", error);
      }
    };

    loadArticles();
  }, []);

  return (
    <>
      <div
        className="group/design-root relative flex size-full min-h-screen flex-col overflow-x-hidden bg-white"
        style={{ fontFamily: 'Newsreader, "Noto Sans", sans-serif' }}
      >
        {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
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
