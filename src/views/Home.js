import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Link} from "react-router-dom";

function Home(props) {
    return (
        <>
            <header id="header" className="container-fluid px-0">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-xl-6 text-center">
                            <h1 className="text-uppercase">
                                Крупнейший экспортер
                                текстильных изделий
                            </h1>
                            <p>
                                У нас вы найдёте эластичную ленту, текстильную резинку,
                                а так же – шнурки и верёвки
                            </p>
                            <button className="btn btn-primary">Контакты</button>
                        </div>
                    </div>
                </div>
            </header>
            <section id="category" className="container-fluid p-0 category">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4">
                            <div className="card h-100">
                                <div className="card-header text-center">
                                    <h1 className="text-uppercase">
                                        текстильная
                                        резинка
                                    </h1>
                                </div>
                                <div className="card-body text-center">
                                    <hr/>
                                    <p className="text-center">
                                        Текстильная резинка представляет собой качественную эластичную тесьму, она
                                        широко применяется в швейном производстве.
                                    </p>
                                    <div className="card-footer">
                                        <button className="btn btn-link">
                                            подробнее <span className="icon-right"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card h-100">
                                <div className="card-header text-center">
                                    <h1 className="text-uppercase">
                                        Шнурки
                                    </h1>
                                </div>
                                <div className="card-body text-center">
                                    <hr/>
                                    <p className="text-center">
                                        Мы производим обувные шнурки для повседневной, военной, рабочей, спортивной,
                                        классической и детской обуви.
                                    </p>
                                    <div className="card-footer text-center">
                                        <button className="btn btn-link">
                                            подробнее <span className="icon-right"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about-us" className="container-fluid p-0 about-us">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-lg-4 px-3">
                            <div className="card">
                                <h4>01</h4>
                                <h2 className="text-uppercase">
                                    Площадь
                                    производства
                                    3 500 м2
                                </h2>
                                <p>
                                    На нашей фабрике работают
                                    более 200 сотрудников
                                </p>

                                <button className="btn btn-outline-primary text-uppercase">
                                    Подробнее
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-4 px-3">
                            <div className="card">
                                <h4>02</h4>
                                <h2 className="text-uppercase">
                                    310 едениц
                                    оборудования
                                    для производства
                                </h2>
                                <p>
                                    Более 1,5 млн пар шнурков, 3 млн. метров шнуров и не менее 3 млн. метров различных
                                    текстильных лент.
                                </p>
                                <button className="btn btn-outline-primary text-uppercase">
                                    Подробнее
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-4 px-3">
                            <div className="card">
                                <h4>03</h4>
                                <h2 className="text-uppercase">
                                    Площадь
                                    производства
                                    3 500 м2
                                </h2>
                                <p>
                                    На нашей фабрике работают
                                    более 200 сотрудников
                                </p>
                                <button className="btn btn-outline-primary text-uppercase">
                                    Подробнее
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="products" className="container-fluid px-0 products">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h1>
                                Наша продукция
                            </h1>
                            <hr/>
                        </div>
                        <h3><Link to="/all-products">Вся продукция</Link></h3>
                    </div>
                    <div className="row g-4">
                        {props.products.filter((arr,index) => index<8).map((item) => {
                            return (
                                <div key={item.id} className="col-xl-3 col-lg-4 col-md-6 py-3">
                                    <div className="card h-100">
                                        <div className="card-body p-0">
                                            <img src={require(`../assets/images/${item.imgSrc}`).default}
                                                 className="w-100" alt={item.name}/>
                                        </div>
                                        <div className="card-footer">
                                            <h2><Link to={"/product/"+item.id}>{item.name}</Link></h2>
                                        </div>
                                    </div>
                                </div>)
                        })}
                    </div>
                </div>
            </section>
            <section id="partner" className="container-fluid px-0 partner">
                <div className="container">
                    <h1>Наши партнёры</h1>
                    <hr/>
                    <OwlCarousel className={"owl-carousel owl-theme"}
                                 loop
                                 margin={32}
                                 nav
                                 responsive={{
                                     0: {
                                         items: 1
                                     },
                                     600: {
                                         items: 3
                                     },
                                     1000: {
                                         items: 4
                                     }
                                 }
                                 }
                    >
                        <div className="item">
                            <div className="card d-flex align-items-center justify-content-center">
                                <img src={require("../assets/images/Group.svg").default} alt=""/>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card d-flex align-items-center justify-content-center">
                                <img src={require("../assets/images/Group-1.svg").default} alt=""/>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card d-flex align-items-center justify-content-center">
                                <img src={require("../assets/images/Group-2.svg").default} alt=""/>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card d-flex align-items-center justify-content-center">
                                <img src={require("../assets/images/Group-3.svg").default} alt=""/>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card d-flex align-items-center justify-content-center">
                                <img src={require("../assets/images/Group-2.svg").default} alt=""/>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card d-flex align-items-center justify-content-center">
                                <img src={require("../assets/images/Group-1.svg").default} alt=""/>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </section>
            <section id="map" className="container-fluid px-0 map">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 d-flex flex-column justify-content-center">
                            <h1>География экспорта</h1>
                            <hr/>
                            <p>
                                Наша компания активно развивает внешнеторговые связи и заинтересована в
                                сотрудничестве как с ближним так и дальним зарубежьем.
                            </p>
                        </div>
                        <div className="col-lg-7">
                            <img src={require("../assets/images/map.svg").default} className="w-100" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
