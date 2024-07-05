import "./App.css";
import ArticleList from "./components/ArticleList";
import { useEffect, useState } from "react";

export default function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      const res = await fetch("/api/articles");
      const data = await res.json();
      setArticles(data);
    }

    fetchArticles();
  }, []);

  return (
    <>
      <div>
        <h1>ニュース一覧</h1>
        <ArticleList articles={articles} />
      </div>
    </>
  );
}
