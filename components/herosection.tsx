"use client"
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

interface Slide {
    title: string;
    subtitle: string;
    imageUrl: string;
    buttonText: string;
}

const HeroSection = () => {
    const slides: Slide[] = [
        {
            title: "Smart Budgeting for Everyone",
            subtitle: "Kelola keuangan Anda dengan mudah, cepat, dan transparan. Mulai hemat hari ini.",
            imageUrl: "/images/banner_01.JPG",
            buttonText: "Mulai Sekarang"
        },
        {
            title: "Analyze Your Expenses",
            subtitle: "Dapatkan wawasan mendalam tentang kemana uang Anda pergi setiap bulannya.",
            imageUrl: "/images/banner_02.JPG",
            buttonText: "Lihat Fitur"
        },
        {
            title: "Secure & Reliable",
            subtitle: "Data keuangan Anda aman bersama kami dengan enkripsi tingkat tinggi.",
            imageUrl: "/images/banner_03.jpg",
            buttonText: "Hubungi Kami"
        },
    ]

    return (
        <section id="home">
            <Carousel fade interval={5000} controls={false} indicators={true}>
                {slides.map((slide, index) => (
                    <Carousel.Item key={index}>
                        <div 
                            className="d-flex align-items-center justify-content-center text-center text-white"
                            style={{
                                // Overlay gelap (0.6) agar teks putih terbaca jelas di gambar apa saja
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${slide.imageUrl})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                height: "85vh", // Tinggi layar hampir penuh agar terlihat megah
                                position: "relative"
                            }}>
                            
                            <Container>
                                <div className="mx-auto col-lg-8">
                                    <h1 className="display-3 fw-bold mb-3 animate__animated animate__fadeInDown">
                                        {slide.title}
                                    </h1>
                                    <p className="lead mb-4 fs-4 animate__animated animate__fadeInUp">
                                        {slide.subtitle}
                                    </p>
                                    <Button variant="primary" size="lg" className="rounded-pill px-5 py-3 fw-bold shadow animate__animated animate__fadeInUp">
                                        {slide.buttonText}
                                    </Button>
                                </div>
                            </Container>

                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </section>
    )
}

export default HeroSection;