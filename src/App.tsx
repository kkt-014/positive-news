import "./App.css";
import ArticleList from "./components/ArticleList";
import articles from "./data";

export default function App() {
  return (
    <>
      <div>
        <h1>ニュース一覧</h1>
        <ArticleList articles={articles} />
      </div>
    </>
  );
}
