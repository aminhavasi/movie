import React from 'react';
import { Link } from 'react-router-dom';
const NavbarAdmin = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
                <img
                    className="img-fluid d-none d-lg-block mr-1"
                    style={{ width: '80px' }}
                    alt="logo"
                    src={require('./../../resource/img/p.png')}
                />
                <p className="navbar-brand " href="#">
                    Hello Amin Havasi
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
                            <Link to="/admin/" className="nav-link">
                                Main Page
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="#section-description"
                                className="nav-link"
                            >
                                HomePage
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#section-skills" className="nav-link">
                                least News
                            </Link>
                        </li>{' '}
                        <li className="nav-item">
                            <a
                                href="/admin/logout"
                                className="nav-link logout text-danger lead"
                            >
                                <i
                                    className="fa fa-sign-out"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="log Out!"
                                />
                            </a>
                        </li>{' '}
                    </ul>
                </div>
            </nav>
        </div>
    );
};
export default NavbarAdmin;
