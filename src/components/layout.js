import * as React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import '../styles/layout.css'

const Layout = ({ pageTitle, children }) => {
    return (
        <Container fluid="sm">
            <Row>
                <Col className="banner"><p>Bongosian Press</p></Col>
            </Row>
            <Row>
                <Navbar>
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About Us</Nav.Link>
                        <Nav.Link href="/glossary">Glossary</Nav.Link>
                        <Nav.Link href="/news">News</Nav.Link>
                    </Nav>
                </Navbar>
            </Row>
            <main>
                { pageTitle !== undefined &&
                    <Row>
                        <Col>
                            <h1>{pageTitle}</h1>
                        </Col>
                    </Row>
                }
                {children}
            </main>
        </Container>
    )
}

export default Layout
