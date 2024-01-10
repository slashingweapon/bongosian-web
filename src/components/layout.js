import * as React from 'react'
import { Link } from 'gatsby'
import Container from 'react-bootstrap/container'
import Row from 'react-bootstrap/row'
import Col from 'react-bootstrap/col'
import '../styles/layout.css'

const Layout = ({ pageTitle, children }) => {
    return (
        <Container fluid="sm">
            <Row>
                <Col className="banner"><p>Bongosian Press</p></Col>
            </Row>
            <Row><Col>
                <nav>
                    <ul class="sitenav">
                        <li class="sitenav-item">
                            <Link to="/" class="sitenav-link">
                                Home
                            </Link>
                        </li>
                        <li class="sitenav-item">
                            <Link to="/about" class="sitenav-link">
                                About Us
                            </Link>
                        </li>
                        <li class="sitenav-item">
                            <Link to="/news" class="sitenav-link">
                                News
                            </Link>
                        </li>                        
                    </ul>
                </nav>
            </Col></Row>
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
