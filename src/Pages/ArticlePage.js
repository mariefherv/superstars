// ArticlePage.js
import React from "react";
import { useParams } from "react-router-dom";
import Article from "../Components/Article";
import BiologyArticles from "../data/BiologyArticles";
import PhysicsArticles from "../data/PhysicsArticles"; // Assuming you have this data
import ChemistryArticles from "../data/ChemistryArticles"; // Assuming you have this data
import HealthArticles from "../data/HealthArticles"; // Assuming you have this data
import TechnologyArticles from "../data/TechnologyArticles"; // Assuming you have this data

const ArticlePage = () => {
  const { categoryName, slug } = useParams();
  let articles;
  switch (categoryName) {
    case "biology":
      articles = BiologyArticles;
      break;
    case "physics":
      articles = PhysicsArticles;
      break;
    case "chemistry":
      articles = ChemistryArticles;
      break;
    case "health":
      articles = HealthArticles;
      break;
    case "technology":
      articles = TechnologyArticles;
      break;
    default:
      return <h2>Category not found</h2>;
  }

  // Check if articles exist and the list is not empty
  if (!articles || articles.length === 0) {
    return <h2>No articles available for this category.</h2>;
  }

  // Find the article based on slug
  const article = articles.find((art) => art.slug === slug);

  // If article is not found, display a fallback message
  if (!article) {
    return <h2>Article not found</h2>;
  }

  return <Article {...article} />;
};

export default ArticlePage;
