import {useParams} from 'react-router-dom'
function Product(props){

        let id=parseInt(useParams().id)
        let [item]=props.products.filter(array =>  array.id===id)
        return (
            <section className="container-fluid px-0 product">
                <div className="container">
                    <h1>
                        {item.name}
                    </h1>
                    <hr/>
                        <div className="row">
                            <div className="col-lg-5">
                                <img src={require(`../assets/images/${item.imgSrc}`).default} alt={item.name} className="w-100"/>
                            </div>
                            <div className="col-lg-7">
                                <h3>{item.name}</h3>
                                <p>
                                    {item.desc}
                                </p>
                                <div className="w-100 overflow-auto">
                                    <table className="table table-striped">
                                        <thead>
                                        <tr>
                                            <th rowSpan="2" className="pb-4">Шрина,мм</th>
                                            <th colSpan="3" className="text-center">Стандартная плотность</th>
                                            <th>Уплотненная</th>
                                        </tr>
                                        <tr>
                                            <th scope="col">белая</th>
                                            <th scope="col">черная</th>
                                            <th scope="col">цветная</th>
                                            <th scope="col">бед/,черн/,цв</th>
                                        </tr>

                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>от 0.6 руб</td>
                                            <td>от 0.7 руб</td>
                                            <td>по запросу</td>
                                            <td>по запросу</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>от 0.8 руб</td>
                                            <td>от 0.88руб</td>
                                            <td>по запросу</td>
                                            <td>по запросу</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">8</th>
                                            <td>от 0.9 руб</td>
                                            <td>от 0.95руб</td>
                                            <td>по запросу</td>
                                            <td>по запросу</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">10</th>
                                            <td>от 1 руб</td>
                                            <td>от 1.25руб</td>
                                            <td>по запросу</td>
                                            <td>по запросу</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">15</th>
                                            <td>от 1.4 руб</td>
                                            <td>от 1.52руб</td>
                                            <td>по запросу</td>
                                            <td>по запросу</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">15</th>
                                            <td>от 1.4 руб</td>
                                            <td>от 1.52руб</td>
                                            <td>по запросу</td>
                                            <td>по запросу</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">15</th>
                                            <td>от 1.4 руб</td>
                                            <td>от 1.52руб</td>
                                            <td>по запросу</td>
                                            <td>по запросу</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">15</th>
                                            <td>от 1.4 руб</td>
                                            <td>от 1.52руб</td>
                                            <td>по запросу</td>
                                            <td>по запросу</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">15</th>
                                            <td>от 1.4 руб</td>
                                            <td>от 1.52руб</td>
                                            <td>по запросу</td>
                                            <td>по запросу</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">15</th>
                                            <td>от 1.4 руб</td>
                                            <td>от 1.52руб</td>
                                            <td>по запросу</td>
                                            <td>по запросу</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">15</th>
                                            <td>от 1.4 руб</td>
                                            <td>от 1.52руб</td>
                                            <td>по запросу</td>
                                            <td>по запросу</td>
                                        </tr>

                                        </tbody>
                                    </table>
                                </div>
                                <button className="btn btn-primary mt-3">заказать сейчас</button>
                            </div>
                        </div>
                </div>
            </section>
        );

}

export default Product;