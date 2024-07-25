// import { fetchArticles } from "./fetch-articles";
//
// const main = async () => {
//   try {
//     const articles = await fetchArticles();
//     console.log(`Fetched ${articles.length} articles:`);
//     articles.forEach((article, index) => {
//       console.log(`${index + 1}. ${article.title}`);
//     });
//   } catch (error) {
//     console.error("Error fetching articles:", error);
//   }
// };
//
// main().catch(error => {
//   console.error("Unhandled error in main function:", error);
// });

import { fetchArticles, Article } from "./fetch-articles";

const displayFullArticle = (article: Article) => {
  console.log("==================================");
  console.log(`タイトル: ${article.title}`);
  console.log(`著者: ${article.author || "不明"}`);
  console.log(`公開日: ${new Date(article.publishedAt).toLocaleString()}`);
  console.log(`説明: ${article.description || "なし"}`);
  console.log(`URL: ${article.url}`);
  console.log(`内容: ${article.content || "なし"}`);
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