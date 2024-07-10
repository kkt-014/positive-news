import { Article } from "../components/ArticleItem";

const apiKey = "bb3dc1bd950345bc889e8d9705a18803";

export async function fetchNewsArticles(): Promise<Article[]> {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`,
  );
  const data = await response.json();
  return data.articles.map((article: any) => ({
    id: article.source.id,
    title: article.title,
    publishedAt: article.publishedAt,
    author: article.author || article.source.name, // author がない場合は source.name を使う
    imageUrl: article.urlToImage,
    content: article.content,
  }));
}
