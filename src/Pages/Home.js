import { Container, Col, Row } from 'react-bootstrap';
import homeimage from "../assets/space.jpg"
import CustomCard from '../Components/Cards';
import biology from "../assets/genetics.jpg"
import physics from "../assets/physics.jpg"
import chemistry from "../assets/chemistry.jpg"
import health from "../assets/health.jpg"
import technology from "../assets/technology.jpg"


export default function Home() {
    return (
    <>
        <img 
            src={homeimage} 
            alt="Homepage" 
            className="home-image" 
        />
        <Container fluid className="header-container">
            <Row className="title-container">
                <h1 className="title">Welcome, Superstar.</h1>
                <h3 className="subtitle">Your journey begins here.</h3>
            </Row>
        </Container>
        <Container fluid className='d-flex align-items-center flex-column mt-2 pb-4 mb-5'>
            <Row className="title-container">
                <h2 className="title">What do you want to explore?</h2>
            </Row>
            <Row className="justify-content-center g-3">
            <Col xs={6} sm={4} md={3} lg={2}>
                <CustomCard title="PHYSICS" image={physics} link="/physics"/>
            </Col>
            <Col xs={6} sm={4} md={3} lg={2}>
                <CustomCard title="BIOLOGY" image={biology} link="/biology"/>
            </Col>
            <Col xs={6} sm={4} md={3} lg={2}>
                <CustomCard title="CHEMISTRY" image={chemistry} link="/chemistry"/>
            </Col>
            <Col xs={6} sm={4} md={3} lg={2}>
                <CustomCard title="HEALTH" image={health} link="/health"/>
            </Col>
            <Col xs={6} sm={4} md={3} lg={2}>
                <CustomCard title="TECHNOLOGY" image={technology} link="/technology"/>
            </Col>
            </Row>
        </Container>
        </>
    );
}



