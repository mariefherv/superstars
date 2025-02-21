// CategoryPage.js
import { Container, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomTag from "../Components/Tags";
import ArticleCard from "../Components/ArticleCard";
import biology from "../assets/genetics.jpg"
import physics from "../assets/physics.jpg"
import chemistry from "../assets/chemistry.jpg"
import health from "../assets/health.jpg"
import technology from "../assets/technology.jpg"

export default function CategoryPage({ categoryName, articles }) {
  const categoryHeaderImages = {
    biology: biology,
    physics: physics,
    chemistry: chemistry,
    health: health,
    technology: technology
  };

  const headerImage = categoryHeaderImages[categoryName];

  // If no articles are available
  if (!articles || articles.length === 0) {
    return (
      <>
      <div className="section-header">
        <img src={headerImage} alt={`${categoryName} header`} className="header-image" />
      </div>
      <div className="category-no-articles">
        <div className="no-articles-message">
          <h2 className="my-5">No articles available for this category.</h2>
        </div>
      </div>
      </>
    );
  }

  const featuredArticle = articles[0];

  return (
    <>
      <div className="section-header">
        <Link to={`/${categoryName}/${featuredArticle.slug}`} className="image-container">
          <img src={featuredArticle.image} alt={`${categoryName} section`} className="header-image" />
        </Link>

        <div className="headline-container">
          <em>Featured</em>
          <p className="headline">{featuredArticle.title}</p>
          <Row className="tag-wrapper d-flex flex-row">
            <Col md={8}>
            <div className="tag-container">
              {featuredArticle.tags.map((tag, index) => (
                <CustomTag key={index} text={tag} type="primary" />
              ))}
            </div>
            </Col>
            <Col md={3} className="d-flex read-btn-cont">
              <Button className="read-btn" as={Link} to={`/${categoryName}/${featuredArticle.slug}`}>
                Read More
              </Button>
            </Col>
          </Row>
        </div>
      </div>

      <Container fluid className="article-section py-5 px-5">
        <Row className="justify-content-start g-3 align-items-stretch">
          {articles.map((article) => (
            <Col key={article.slug} md={6} lg={4}>
              <ArticleCard
                title={article.title}
                image={article.image}
                author={article.author}
                date={article.date}
                tags={article.tags}
                slug={article.slug}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
