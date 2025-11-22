"use client";
import { Container, Row, Col, Image } from 'react-bootstrap';

function ServiceSection() {
    return (
        <Container className='my-5 py-5'>
            <Row className="text-center mb-5">
                <Col>
                    <h2 className="fw-bold">Why Choose Us?</h2>
                    <p className="text-muted">Keunggulan layanan kami dibanding yang lain</p>
                </Col>
            </Row>
            <Row>
                <Col md={4} className="mb-4 text-center px-4">
                    <div className="mb-3">
                        <Image src="/images/about-icon1.png" alt="Service 1" fluid width={80} />
                    </div>
                    <h4 className="fw-bold">Real-time Sync</h4>
                    <p className="text-secondary">
                        Data Anda tersinkronisasi secara otomatis di semua perangkat (HP, Tablet, Laptop).
                    </p>
                </Col>
                <Col md={4} className="mb-4 text-center px-4">
                    <div className="mb-3">
                        <Image src="/images/about-icon2.png" alt="Service 2" fluid width={80} />
                    </div>
                    <h4 className="fw-bold">Secure Data</h4>
                    <p className="text-secondary">
                        Keamanan tingkat bank (AES-256 encryption) untuk melindungi privasi keuangan Anda.
                    </p>
                </Col>
                <Col md={4} className="mb-4 text-center px-4">
                    <div className="mb-3">
                        <Image src="/images/about-icon3.png" alt="Service 3" fluid width={80} />
                    </div>
                    <h4 className="fw-bold">Smart Export</h4>
                    <p className="text-secondary">
                        Download laporan keuangan Anda ke dalam format PDF atau Excel dengan satu klik.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default ServiceSection;