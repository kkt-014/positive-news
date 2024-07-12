import { collection, getDocs } from "firebase/firestore";
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
  imageUrl?: string;
  content: string;
}

export const fetchArticles = async (): Promise<Article[]> => {
  const articlesCollection = collection(db, "articles");
  const querySnapshot = await getDocs(articlesCollection);

  const articles: Article[] = [];

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    articles.push({
      id: data.sourceId,
      title: data.title || "",
      description: data.description || "",
      createdAt: data.createdAt || "",
      publishedAt: data.publishedAt || "",
      updatedAt: data.updatedAt || "",
      author: data.author || "",
      url: data.url || "",
      imageUrl: data.urlToImage,
      content: data.content || "",
    });
  });

  return articles;
};
