import { Container, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomTag from "../Components/Tags";
import ArticleCard from "../Components/ArticleCard";
import articles from "../data/ArticleData";

export default function Biology() {
  const featuredArticle = articles[0];

  return (
    <>
      <div className="section-header">
        <Link to={`/biology/${featuredArticle.slug}`} className="image-container">
          <img src={featuredArticle.image} alt="Biology section" className="header-image" />
        </Link>

        <div className="headline-container">
          <em>Featured</em>
          <p className="headline">{featuredArticle.title}</p>
          <div className="tag-wrapper">
            <div className="tag-container">
              {featuredArticle.tags.map((tag, index) => (
                <CustomTag key={index} text={tag} type="primary" />
              ))}
            </div>
            {/* ✅ Move Link inside Button to avoid nested <a> */}
            <Button className="read-btn" as={Link} to={`/biology/${featuredArticle.slug}`}>
              Read More
            </Button>
          </div>
        </div>
      </div>

      <Container fluid className="article-section py-5 px-5">
        <Row className="justify-content-start g-3">
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
