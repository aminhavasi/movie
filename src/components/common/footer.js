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
                                    <Link>Home</Link>
                                </li>
                                <li>
                                    <Link>Whts's news</Link>
                                </li>{' '}
                                <li>
                                    <Link>Support</Link>
                                </li>{' '}
                                <li>
                                    <Link>My account</Link>
                                </li>{' '}
                                <li>
                                    <Link>Cansel Subscription</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <h3>informations</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <Link>About us</Link>
                                </li>
                                <li>
                                    <Link>Jobs</Link>
                                </li>{' '}
                                <li>
                                    <Link>Press info</Link>
                                </li>{' '}
                                <li>
                                    <Link>Contact</Link>
                                </li>{' '}
                                <li>
                                    <Link>Parntship</Link>
                                </li>
                            </ul>
                        </div>{' '}
                        <div className="col-12 col-sm-6 col-lg-3">
                            <h3>Follow us</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <Link>
                                        <i className="fa fa-facebook"></i>
                                        Facebook
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <i className="fa fa-twitter"></i>Twitter
                                    </Link>
                                </li>{' '}
                                <li>
                                    <Link>
                                        <i className="fa fa-instagram"></i>
                                        Instagram
                                    </Link>
                                </li>{' '}
                                <li>
                                    <Link>
                                        <i className="fa fa-youtube"></i>Youtube
                                    </Link>
                                </li>{' '}
                                <li>
                                    <Link>
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
