import React, {Component} from 'react';

class ContactUs extends Component {
    render() {
        return (
            <section id="contact-us" className="container-fluid px-0 contact-us">
                <div className="container">
                    <h1 className="text-center">
                        Оставьте заявку и мы с вами свяжемся
                    </h1>
                    <form action="" className="w-75 m-auto">
                        <div className="row g-4">
                            <div className="col-lg-6">
                                <label className="w-100">
                                    Имя
                                    <input type="text" className="form-control w-100"/>
                                </label>
                            </div>
                            <div className="col-lg-6">
                                <label className="w-100">
                                    Фамилия
                                    <input type="text" className="form-control w-100"/>
                                </label>
                            </div>
                            <div className="col-lg-6 pt-5">
                                <label className="w-100">
                                    Номер телефона
                                    <input type="tel" className="form-control w-100"/>
                                </label>
                            </div>
                            <div className="col-lg-6 pt-5">
                                <label className="w-100">
                                    Эл. почта
                                    <input type="email" className="form-control w-100"/>
                                </label>
                            </div>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-primary" type="button">Отправить</button>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

export default ContactUs;