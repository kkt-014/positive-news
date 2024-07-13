import { collection, getDocs, Timestamp } from "firebase/firestore";
import { db } from "../firebase.ts";

export interface Article {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  url: string;
  urlToImage?: string;
  content: string;
}

function formatTimestamp(timestamp: Timestamp | null | undefined): string {
  if (!timestamp) return "";
  return timestamp.toDate().toLocaleString();
}

export async function fetchArticles(): Promise<Article[]> {
  const articlesCollection = collection(db, "articles");
  const querySnapshot = await getDocs(articlesCollection);

  const articles: Article[] = [];

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    articles.push({
      id: data.sourceId,
      title: data.title || "",
      description: data.description || "",
      createdAt: formatTimestamp(data.createdAt) || "",
      publishedAt: formatTimestamp(data.publishedAt) || "",
      updatedAt: formatTimestamp(data.updatedAt) || "",
      author: data.author || "",
      url: data.url || "",
      urlToImage: data.urlToImage,
      content: data.content || "",
    });
  });

  return articles;
}
