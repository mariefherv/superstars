import React from "react";
import { useParams } from "react-router-dom";
import articles from "../data/ArticleData";
import Article from "../Components/Article";

const ArticlePage = () => {
  const { slug } = useParams();
  const article = articles.find((art) => art.slug === slug);

  if (!article) {
    return <h2>Article not found</h2>;
  }

  return <Article {...article} />;
};

export default ArticlePage;
