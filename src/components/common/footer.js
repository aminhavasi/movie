import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Footer extends Component {
    render() {
        return (
            <footer className="bg-light">
                <div className="container py-3 py-sm-5">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-3">
                            <h3>Quick Links</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <Link to="/admin/test/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/admin/test/">Whts's news</Link>
                                </li>{' '}
                                <li>
                                    <Link to="/admin/test/">Support</Link>
                                </li>{' '}
                                <li>
                                    <Link to="/admin/test/">My account</Link>
                                </li>{' '}
                                <li>
                                    <Link to="/admin/test/">
                                        Cansel Subscription
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <h3>informations</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <Link to="/admin/test">About us</Link>
                                </li>
                                <li>
                                    <Link to="/admin/test">Jobs</Link>
                                </li>{' '}
                                <li>
                                    <Link to="/admin/test">Press info</Link>
                                </li>{' '}
                                <li>
                                    <Link to="/admin/test">Contact</Link>
                                </li>{' '}
                                <li>
                                    <Link to="/admin/test">Parntship</Link>
                                </li>
                            </ul>
                        </div>{' '}
                        <div className="col-12 col-sm-6 col-lg-3">
                            <h3>Follow us</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <Link to="/admin/test">
                                        <i className="fa fa-facebook"></i>
                                        Facebook
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/admin/test">
                                        <i className="fa fa-twitter"></i>Twitter
                                    </Link>
                                </li>{' '}
                                <li>
                                    <Link to="/admin/test">
                                        <i className="fa fa-instagram"></i>
                                        Instagram
                                    </Link>
                                </li>{' '}
                                <li>
                                    <Link to="/admin/test">
                                        <i className="fa fa-youtube"></i>Youtube
                                    </Link>
                                </li>{' '}
                                <li>
                                    <Link to="/admin/test">
                                        <i className="fa fa-linkedin">
                                            Linkedin
                                        </i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <h6>Our Location:</h6>
                            <address>
                                <strong>Amin havasi</strong>
                                <br />
                                Iran,Qom,somaye Avenue
                                <br />
                                sh Alley,p125
                                <br />
                                <i className="fa fa-phone " aria-hidden="true">
                                    {' '}
                                </i>
                                <span className="sr-only">Telephone:</span>
                                <a href="tel:+989014289738">(98)9014289738</a>
                                <br />
                                <i className="fa fa-inbox " aria-hidden="true">
                                    {' '}
                                </i>
                                <span className="sr-only">Mail:</span>
                                <a href="pau.ahq@gmail.com">
                                    pau.ahq@gmail.com
                                </a>
                                <br />
                            </address>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
