import { Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import CustomTag from "./Tags";

const ArticleCard = ({ title, image, author, date, tags, slug }) => {
  const location = useLocation(); // Get the current page path
  const link = `${location.pathname}/${slug}`;

  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
        <Card className="article-card p-2 my-3">
          {image && <Card.Img variant="top" src={image} alt={title} className="article-img" />}
          <Card.Body className="article-card-body">
            <div className="tag-container">
              {tags.map((tag, index) => (
                <CustomTag key={index} text={tag} type="secondary" />
              ))}
            </div>
            <Card.Title className="article-card-title py-3">{title}</Card.Title>
            <Button className="read-more-btn mb-4">Read More</Button>
            <div className="article-footer">
              <span className="author">By: {author}</span>
              <span className="date">{date}</span>
            </div>
          </Card.Body>
        </Card>
      </motion.div>
    </Link>
  );
};

export default ArticleCard;
