import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.ts";

export interface Article {
  id: string;
  title: string;
  publishedAt: string;
  author: string;
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
      id: data.id,
      title: data.title || "",
      publishedAt: data.publishedAt || "",
      author: data.author || "",
      imageUrl: data.imageUrl,
      content: data.content || "",
    });
  });

  return articles;
};
