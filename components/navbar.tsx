'use client'

import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// Ganti nama function menjadi AppNavbar (PascalCase) agar valid React Component
function AppNavbar() {
    // State untuk mengubah warna navbar saat discroll (opsional, utk efek keren)
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Navbar 
            expand="lg" 
            fixed="top" // Membuat navbar melayang tetap di atas
            className={`transition-all duration-300 ${scrolled ? 'bg-white shadow-sm py-2' : 'bg-white/90 py-3'}`}
            // Catatan: Jika bg-white/90 tidak jalan (karena butuh Tailwind), pakai style manual di bawah:
            style={{ 
                transition: '0.3s ease-in-out',
                backgroundColor: scrolled ? '#ffffff' : 'rgba(255, 255, 255, 0.95)' 
            }}
        >
            <Container>
                <Navbar.Brand href="#" className="fw-bold text-primary fs-4">
                    <i className="bi bi-wallet2 me-2"></i>BudgetTracker
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto my-2 my-lg-0 fw-medium" navbarScroll>
                        <Nav.Link href="#home" className="mx-2">Home</Nav.Link>
                        <Nav.Link href="#about" className="mx-2">About</Nav.Link>
                        <Nav.Link href="#services" className="mx-2">Services</Nav.Link>
                        <NavDropdown title="Features" id="navbarScrollingDropDown" className="mx-2">
                            <NavDropdown.Item href="#action3">Reports</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Analytics</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Export Data</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#contact" className="mx-2">Contact</Nav.Link>
                    </Nav>    
                    <div className="d-flex ms-lg-3 gap-2">
                        <Button variant="outline-primary" className="rounded-pill px-4">Login</Button>
                        <Button variant="primary" className="rounded-pill px-4">Sign Up</Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default AppNavbar;