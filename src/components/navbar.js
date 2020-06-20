import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md bg-primary navbar-dark fixed-top">
                <img
                    className="img-fluid d-none d-lg-block"
                    style={{ width: '60px' }}
                    src={require('./../resource/img/svg.png')}
                />
                <p className="navbar-brand " href="#">
                    Amin havasi
                </p>
                <button
                    type="button"
                    className="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#navabrNav"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navabrNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="#section-top" className="nav-link">
                                Top page
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="#section-description"
                                className="nav-link"
                            >
                                Description
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#section-skills" className="nav-link">
                                Skills
                            </Link>
                        </li>{' '}
                        <li className="nav-item">
                            <Link to="#section-posts" className="nav-link">
                                posts
                            </Link>
                        </li>{' '}
                    </ul>
                </div>
            </nav>
        </div>
    );
};
export default Navbar;
