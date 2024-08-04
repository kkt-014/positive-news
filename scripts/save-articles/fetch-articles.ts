import axios from "axios";
import { loadEnv } from "vite";

// 環境変数の読み込み
const env = loadEnv("", process.cwd(), "VITE_");

interface NewsApiResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface Article {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

// おためしで5件取得

async function fetchNewsApi(
  apiKey: string,
  query: string,
  pageSize: number = 5,
): Promise<Article[]> {
  try {
    const response = await axios.get<NewsApiResponse>(
      "https://newsapi.org/v2/everything",
      {
        params: {
          apiKey: apiKey,
          q: query,
          pageSize: pageSize,
          language: "jp",
        },
      },
    );

    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}

export async function fetchArticles() {
  const API_KEY = env.VITE_NEWS_API_KEY;
  const QUERY = "ポジティブ";

  if (!API_KEY) {
    throw new Error("News API key is not set in the environment variables.");
  }
  return await fetchNewsApi(API_KEY, QUERY);
}
