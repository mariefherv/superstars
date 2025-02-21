import { Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CustomCard = ({ title, image, link }) => {
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
      <Card className="custom-card">
        {image && <Card.Img variant="top" src={image} alt={title} className="card-img" />}
        <Card.Body>
          <Card.Title className="card-title">{title}</Card.Title>
        </Card.Body>
      </Card>
    </motion.div>
    </Link>
  );
};

export default CustomCard;
