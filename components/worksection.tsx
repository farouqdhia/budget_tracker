'use client'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

const workItems = [
    {
        title: "Lorem Ipsum I",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque similique sunt alias!",
        img: "/images/image-44.jpg"
    },
    {
        title: "Lorem Ipsum II",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At!",
        img: "/images/image-45.jpg"
    },
    {
        title: "Lorem Ipsum III",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam in voluptas reiciendis iure!",
        img: "/images/image-46.jpg"
    }
];

function WorkSection() {
    return (
        <Container className="py-5">
            <Row className='mb-5'>
                <Col md={12} className="text-center text-white">
                    <h2 className="fw-bold">Our Key Features</h2>
                    <p className="lead text-white-50">Solusi lengkap untuk kesehatan finansial Anda</p>
                </Col>
            </Row>
            <Row>
                {workItems.map((item, index) => (
                    <Col md={4} className="mb-4" key={index}>
                        <Card className="h-100 border-0 shadow-lg overflow-hidden hover-scale">
                            <div style={{ height: '200px', overflow: 'hidden' }}>
                                <Card.Img 
                                    variant="top" 
                                    src={item.img} 
                                    style={{ objectFit: 'cover', height: '100%', width: '100%' }} 
                                />
                            </div>
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="fw-bold">{item.title}</Card.Title>
                                <Card.Text className="text-muted">
                                    {item.desc}
                                </Card.Text>
                                <Button variant="outline-primary" className="mt-auto rounded-pill">
                                    Read More
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default WorkSection;