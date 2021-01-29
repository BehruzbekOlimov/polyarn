import React, {Component} from 'react';
import {Link} from "react-router-dom";

class AllProducts extends Component {
    render() {
        return (
            <section className="container-fluid px-0 products products-2">
                <div className="container">
                    <div className="d-flex align-items-center flex-column">
                        <h1>
                            Наша продукция
                        </h1>
                        <hr className="mt-2"/>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                                <a href="#" className="nav-link active">
                                    ВСЯ ПРОДУКЦИЯ
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    текстильная РЕЗИНКА
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    ШНУРКИ
                                </a>
                            </li>

                        </ul>
                    </div>
                    <div className="row g-4">
                        {this.props.products.map((item) => {
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
        );
    }
}

export default AllProducts;