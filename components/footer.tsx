"use client"
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer() {
    return (
        <footer id="footer" className="bg-dark text-light pt-5 pb-3">
            <Container>
                <Row className="gy-4">
                    {/* Our Products */}
                    <Col md={3}>
                        <h5 className="fw-bold text-white mb-3">Our Products</h5>
                        <ul className="list-unstyled text-secondary">
                            <li className="mb-2"><a href="#" className="text-decoration-none text-secondary hover-light">Account</a></li>
                            <li className="mb-2"><a href="#" className="text-decoration-none text-secondary hover-light">Bundle</a></li>
                            <li className="mb-2"><a href="#" className="text-decoration-none text-secondary hover-light">Blog</a></li>
                            <li className="mb-2"><a href="#contact" className="text-decoration-none text-secondary hover-light">Contact</a></li>
                        </ul>
                    </Col>
                    
                    <Col md={3}>
                        <h5 className="fw-bold text-white mb-3">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="#home" className="text-decoration-none text-secondary hover-light">Home</a>
                            </li>
                            <li className="mb-2">
                                <a href="#about" className="text-decoration-none text-secondary hover-light">About Us</a>
                            </li>
                            <li className="mb-2">
                                <a href="#services" className="text-decoration-none text-secondary hover-light">Service</a>
                            </li>
                            <li className="mb-2">
                                <a href="#work" className="text-decoration-none text-secondary hover-light">Work</a>
                            </li>
                        </ul>
                    </Col>
                    {/* -------------------------------------- */}

                    {/* Terms */}
                    <Col md={3}>
                        <h5 className="fw-bold text-white mb-3">Legal</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#" className="text-decoration-none text-secondary hover-light">Refund Policy</a></li>
                            <li className="mb-2"><a href="#" className="text-decoration-none text-secondary hover-light">Privacy Policy</a></li>
                            <li className="mb-2"><a href="#" className="text-decoration-none text-secondary hover-light">License</a></li>
                        </ul>
                    </Col>
                    {/* Search + Social */}
                    <Col md={3}>
                        <h5 className="fw-bold text-white mb-3">Newsletter</h5>
                        <p className="small text-secondary">Subscribe untuk update terbaru.</p>
                        <Form className="mb-4">
                            <InputGroup>
                                <Form.Control type="text" placeholder="Email..." className="bg-secondary text-white border-secondary placeholder-gray" />
                                <Button variant="info" className="text-white fw-bold">Go</Button>
                            </InputGroup>
                        </Form>
                        <h6 className="fw-bold mb-3">Follow Us</h6>
                        <div className="d-flex gap-3">
                            <a href="#" className="text-white"><i className="bi bi-facebook fs-5"></i></a>
                            <a href="#" className="text-white"><i className="bi bi-twitter fs-5"></i></a>
                            <a href="#" className="text-white"><i className="bi bi-instagram fs-5"></i></a>
                            <a href="#" className="text-white"><i className="bi bi-youtube fs-5"></i></a>
                        </div>
                    </Col>
                </Row>

                {/* Copyright */}
                <Row className="mt-5 pt-3 border-top border-secondary">
                    <Col md={12} className="text-center text-secondary">
                        <small>&copy; {new Date().getFullYear()} Mika Valentino. All rights reserved.</small>
                    </Col>
                </Row>
            </Container>
        </footer>   
    )
}