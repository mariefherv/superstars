import { Container, Col, Row, Button } from 'react-bootstrap';
import biology from "../assets/genetics.jpg"
import CustomTag from '../Components/Tags';
import ArticleCard from '../Components/ArticleCard';
import pregnant from '../assets/pregnant.jpeg'
import { Link } from 'react-router-dom';


export default function Biology() {
    return (
        <>
        <Link to={"/biology/the-gay-gene"}>
            <div className='section-header'>
                <div className='image-container'>
                    <img 
                        src={biology} 
                        alt="Biology section" 
                        className="header-image" 
                    />
                </div>

                <div className="headline-container">
                    <em>Featured</em>
                    <p className="headline">
                        The Gay Gene: Scientists Identify Genetic Marker Associated With Homosexuality.
                    </p>
                    <div className="tag-wrapper">
                        <div className="tag-container">
                            <CustomTag text="Genetics" type="primary" />
                            <CustomTag text="Sexuality" type="primary" />
                            <CustomTag text="Queer Theory" type="primary" />
                        </div>
                        <Button className="read-btn" toLink="/">Read More</Button>
                    </div>
                </div>                
            </div>
        </Link>

            <Container fluid className='article-section py-5 px-5'>
                <Row className="justify-content-start g-3">
                <Col md={6} lg={4}>
                        <ArticleCard 
                            title="The Gay Gene: Scientists Identify Genetic Marker Associated With Homosexuality."
                            image={biology}
                            author="Mariefher Villanueva"
                            date="February 20, 2025"
                            tags={["Genetics", "Sexuality", "Queer Theory"]}
                            keytag="the-gay-gene"
                        />
                    </Col>
                    <Col md={6} lg={4}>
                        <ArticleCard 
                            title="Maternal Imprint Theory: Unlocking Prenatal Cravings for Healing and Regeneration"
                            image={pregnant}
                            author="Mark Winfred Turco"
                            date="January 27, 2025"
                            tags={["Maternity", "Healing", "Food"]}
                            keytag="maternal-imprint-theory"
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
}




