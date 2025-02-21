import { Container, Col, Row, Image } from 'react-bootstrap';
import homeimage from "../assets/space.jpg"
import CustomCard from '../Components/Cards';
import biology from "../assets/genetics.jpg"
import physics from "../assets/physics.jpg"
import chemistry from "../assets/chemistry.jpg"
import health from "../assets/health.jpg"
import technology from "../assets/technology.jpg"
import ace from "../assets/members/ace.png"
import hadjie from "../assets/members/hadjie.png"
import mark from "../assets/members/mark.png"
import marf from "../assets/members/mariefher.png"
import neo from "../assets/members/neo.png"
import patrick from "../assets/members/patrick.png"


export default function Home() {
    const teamMembers = [
        { name: "Ace", image: ace },
        { name: "Hadjie", image: hadjie },
        { name: "Mark", image: mark },
        { name: "Mariefher", image: marf },
        { name: "Neo", image: neo },
        { name: "Patrick", image: patrick },

    ]
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
        <Container fluid className="d-flex align-items-center flex-column pt-5 pb-4 mb-5">
        <Row className="title-container">
            <h2 className="title mt-5 pt-5">Meet the Astronauts</h2>
        </Row>
        <Row className='team-description px-3 my-3'>
        The legendary “Superstars” team is composed of a dying species of UPV students formally known as Nth years. One may say they have enjoyed the rigors of academic activities so much that they have actively decided to lengthen their stay in the university. That is NOT the case for us, lol.
        </Row>
        <Row className="justify-content-center g-3 mt-3">
            {teamMembers.map((member, index) => (
            <Col key={index} xs={6} lg={4} className="text-center team-members">
                <Image
                src={member.image}
                alt={member.name}
                roundedCircle
                className="team-avatar"
                fluid
                />
                <p className="mt-2">{member.name}</p>
            </Col>
            ))}
        </Row>
        </Container>
        </>
    );
}



