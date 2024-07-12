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
  try {
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

    console.log("取得した記事", articles);
    return articles;
  } catch (error) {
    console.error("記事の取得中にエラーが発生しました:", error);
    throw error; // エラーを再スローして、呼び出し元でキャッチできるようにする
  }
};
