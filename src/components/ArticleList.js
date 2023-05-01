import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  const articles = posts.map((article) => {
    return (
      <Article
        title={article.title}
        date={article.date}
        preview={article.preview}
        key={article.title}
        minutes={article.minutes}
      />
    );
  });

  return <main>{articles}</main>;
}

export default ArticleList;
