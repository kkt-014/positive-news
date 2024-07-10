const apiKey = "bb3dc1bd950345bc889e8d9705a18803";

export interface Article {
  id: number;
  title: string;
  publishedAt: string;
  author: string;
  imageUrl?: string;
  content: string;
}
export async function fetchNewsArticles(): Promise<Article[]> {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=ja&apiKey=${apiKey}`,
  );
  const data = await response.json();
  return data.articles.map((article: any) => ({
    id: article.source.id,
    title: article.title,
    publishedAt: article.publishedAt,
    author: article.author,
    imageUrl: article.urlToImage,
    content: article.content,
  }));
}
