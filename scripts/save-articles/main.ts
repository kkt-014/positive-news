import { fetchArticles, Article } from "./fetch-articles";

const displayFullArticle = (article: Article) => {
  console.log("==================================");
  console.log(`title: ${article.title}`);
  console.log(`author: ${article.author || "不明"}`);
  console.log(`publishAt: ${new Date(article.publishedAt).toLocaleString()}`);
  console.log(`description: ${article.description || "なし"}`);
  console.log(`URL: ${article.url}`);
  console.log(`content: ${article.content || "なし"}`);
  console.log("==================================\n");
};

const main = async () => {
  try {
    const articles = await fetchArticles();
    console.log(`${articles.length} 件の記事を取得しました:`);

    articles.forEach((article, index) => {
      console.log(`\n記事 ${index + 1}:`);
      displayFullArticle(article);
    });
  } catch (error) {
    console.error("記事の取得中にエラーが発生しました:", error);
  }
};

main().catch((error) => {
  console.error("メイン関数で未処理のエラーが発生しました:", error);
});