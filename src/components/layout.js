import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    heading,
} from './layout.module.css'
import '../styles/layout.css'

const Layout = ({ pageTitle, children }) => {
    return (
        <div class="container">
            <div class="col-4 banner"><p>Bongosian Press</p></div>
            <div class="col-4">
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
                            <Link to="/newsletter" class="sitenav-link">
                                News
                            </Link>
                        </li>                        
                    </ul>
                </nav>

            </div>
            <main>
                <div class="col-4">
                    <h1>{pageTitle}</h1>
                </div>
                {children}
            </main>
        </div>
    )
}

export default Layout
