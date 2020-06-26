import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md bg-primary navbar-dark fixed-top">
                <img
                    className="img-fluid d-none d-lg-block mr-1"
                    style={{ width: '80px' }}
                    alt="logo"
                    src={require('./../resource/img/p.png')}
                />
                <p className="navbar-brand " href="#">
                    AminMovie.com
                </p>
                <button
                    type="button"
                    className="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#navabrNav"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse " id="navabrNav">
                    <ul className="navbar-nav mr-4 ml-auto  ">
                        <div className="search-container d-none d-lg-block ml-auto">
                            <form className="form-inline ">
                                <input
                                    className="form-control mr-sm-2 "
                                    type="text"
                                    placeholder="Search"
                                />
                                <button
                                    className="btn text-white"
                                    style={{ backgroundColor: '#281478' }}
                                    type="submit"
                                >
                                    Search
                                </button>
                            </form>
                        </div>
                        <li className="nav-item">
                            <Link to="#section-top" className="nav-link">
                                Movie
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="#section-description"
                                className="nav-link"
                            >
                                Theaters
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#section-skills" className="nav-link">
                                News
                            </Link>
                        </li>{' '}
                        <li className="nav-item">
                            <a href="/login" className="nav-link">
                                <i
                                    className="fa fa-user"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Login or Register!"
                                />
                            </a>
                        </li>{' '}
                    </ul>
                </div>
            </nav>
        </div>
    );
};
export default Navbar;
