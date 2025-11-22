"use client";
import React from "react";
import Image from "next/image";

// Components
import Navbar from "../components/navbar";
import HeroSection from "../components/herosection";
import WorkSection from "../components/worksection";
import ServiceSection from "../components/servicesection";
import ContactSection from "../components/contactsection";
import Footer from "../components/footer";

// Bootstrap
import { Container, Row, Col, Button, Badge } from "react-bootstrap";

 
export default function Home() {
  return (
    <div className="bg-light"> {/* Background abu-abu sangat muda utk seluruh hal */}
      <Navbar />
      
      <main>
        <HeroSection />
        
        {/* SECTION: ABOUT US (Dimodifikasi) */}
        <section className="py-5 bg-white">
          <Container className="my-5">
            <Row className="align-items-center gx-5"> {/* align-items-center agar vertikal tengah */}
              
              {/* Kolom Teks */}
              <Col md={6} className="mb-5 mb-md-0">
                <Badge bg="info" className="mb-3 px-3 py-2 text-uppercase">Who We Are</Badge>
                <h2 className="display-6 fw-bold mb-4">About Us & Our Mission</h2>
                <h5 className="text-dark mb-3">Professional Budget Tracking Solutions</h5>
                <p className="lead text-muted mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Natus assumenda, necessitatibus veniam vitae deleniti.
                </p>
                <p className="text-secondary mb-4">
                  Kami membantu Anda mengelola keuangan dengan lebih bijak melalui 
                  analisis data yang akurat dan tampilan yang mudah dimengerti.
                  Dolor ab eum dolore earum magni aut quis.
                </p>
                <Button variant="primary" size="lg" className="shadow-sm px-4 rounded-pill">
                  Learn More <i className="bi bi-arrow-right ms-2"></i>
                </Button>
              </Col>

              {/* Kolom Gambar */}
              <Col md={6}>
                <div className="position-relative">
                  {/* Dekorasi background kotak di belakang gambar (opsional) */}
                  <div className="position-absolute bg-info rounded-4 top-0 start-0 w-100 h-100 translate-middle-x" 
                       style={{ zIndex: 0, transform: 'rotate(-3deg) scale(0.95)', opacity: 0.2 }}></div>
                  
                  {/* Gambar Utama */}
                  <Image 
                    src="/images/about.jpg" 
                    alt="About Us Team" 
                    width={600}
                    height={500}
                    className="img-fluid rounded-4 shadow-lg position-relative"
                    style={{ zIndex: 1, objectFit: "cover" }}
                  />
                </div>
              </Col>

            </Row>
          </Container>
        </section>

        {/* Section lainnya */}
        <section className="bg-dark text-white py-5">
          <WorkSection />
        </section>
        
        <ServiceSection />
        
        <section id="contact" className="py-5">
          <ContactSection />
        </section>
        
        <Footer />
      </main>
    </div>
  );
}