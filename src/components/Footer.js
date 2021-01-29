import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <footer id="footer" className="container-fluid px-0">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <Link to="/" className="brand">
                            <img src={require('../assets/images/logo.svg').default} alt=""/>
                        </Link>
                        <ul className="nav align-items-center">
                            <li className="nav-item">
                                <Link to='/' className="nav-link">+998 91 611 11 24</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/' className="nav-link">
                                    <img src={require('../assets/images/facebook.svg').default} alt=""/>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/' className="nav-link">
                                    <img src={require('../assets/images/telegram.svg').default} alt=""/>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/' className="nav-link">
                                    <img src={require('../assets/images/instagram.svg').default} alt=""/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <hr/>
                        <p className="text-center">
                            Pol Yarn Textile © 2020. Все права защищены
                        </p>
                </div>
            </footer>
    );
    }
    }

    export default Footer;