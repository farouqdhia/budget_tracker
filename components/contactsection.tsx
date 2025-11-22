"use client"
import { Container, Row, Col, Form, Button, Card, FloatingLabel } from 'react-bootstrap';

function ContactSection() {
    return (
        <Container className='my-5 py-5'>
            <Row className='justify-content-center'>
                <Col md={8} lg={6}>
                    <Card className="shadow-lg border-0 p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
                        <Card.Body>
                            <div className="text-center mb-4">
                                <h2 className="fw-bold text-primary">Contact Us</h2>
                                <p className="text-muted">Ada pertanyaan? Tim support kami siap membantu 24/7.</p>
                            </div>
                            
                            <Form>
                                <FloatingLabel controlId="formName" label="Full Name" className="mb-3">
                                    <Form.Control type="text" placeholder="Enter your name" required />
                                </FloatingLabel>

                                <FloatingLabel controlId="formEmail" label="Email Address" className="mb-3">
                                    <Form.Control type="email" placeholder="name@example.com" required />
                                </FloatingLabel>

                                <FloatingLabel controlId="formMessage" label="Your Message" className="mb-4">
                                    <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '150px' }} required />
                                </FloatingLabel>

                                <div className="d-grid">
                                    <Button variant="primary" size="lg" type="submit" className="fw-bold rounded-pill">
                                        Send Message
                                    </Button>
                                </div>
                            </Form> 
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactSection;