import { Container, Button, Breadcrumb } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CustomTag from "./Tags";

const formatContentToHTML = (text) => {
  return text
    .trim()
    .replace(/\n\n/g, "</p><p>") // Convert double newlines to paragraphs
    .replace(/"([^"']+)"/g, "<em>$1</em>") // Convert "quotes" to <em> (italic)
    .replace(/^\s*([\w\s]+)\s*\n/gm, "<h3>$1</h3>") // Convert first-line headings to <h3>
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"); // Convert **bold** to <strong>
};
const Article = ({ title, author, date, content, image, tags, category }) => {
  return (
    <Container className="article-container">
      <Breadcrumb>
        <Breadcrumb.Item href={`/${category.toLowerCase()}`}>{category}</Breadcrumb.Item>
        <Breadcrumb.Item active>{title}</Breadcrumb.Item>
      </Breadcrumb>


      <div className="article-header mt-auto">
        <h1 className="article-title">{title}</h1>
        <p className="article-meta">
          <span className="article-author">{author}</span> • <span className="article-date">{date}</span>
        </p>
        <div className="article-tags">
          {tags && tags.map((tag, index) => <CustomTag key={index} text={tag} />)}
        </div>
      </div>
      {image && <img src={image} alt={title} className="article-image" />}
      
      {/* Ensure the content is passed as valid HTML */}
      <div
        className="article-content px-2"
        dangerouslySetInnerHTML={{ __html: content }}  // No need for `formatContentToHTML` here
      />
    </Container>
  );
};

export default Article;

