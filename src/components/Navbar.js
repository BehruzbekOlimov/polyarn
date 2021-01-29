import React, {Component} from 'react';
import {Link} from "react-router-dom";
import  Logo from '../assets/images/logo.svg'
import Scrollspy from "react-scrollspy";
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top px-0" id="navbar">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={Logo} alt="" className="w-100"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Scrollspy items={['header','about-us','products','contact-us']} offset={-120} currentClassName={'active'} className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-uppercase" aria-current="page" to="/#header">О нас</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-uppercase" to="/#about-us">Сервисы</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-uppercase" to="/#products">продукция</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-uppercase" to="/#contact-us">контакты</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle text-uppercase" to="/#" id="navbarDropdown"
                                   role="button" data-toggle="dropdown" aria-expanded="false">
                                    Рус
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/">ENG</Link></li>
                                    <li><Link className="dropdown-item" to="/">UZB</Link></li>
                                </ul>
                            </li>
                        </Scrollspy>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;