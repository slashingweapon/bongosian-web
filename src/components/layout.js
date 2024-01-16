import * as React from 'react'
import Container from 'react-bootstrap/container'
import Row from 'react-bootstrap/row'
import Col from 'react-bootstrap/col'
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
