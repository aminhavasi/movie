import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getAdminNavLink from './../services/navLinks';

class Sidebar extends Component {
    render() {
        const adminNavLinks = getAdminNavLink();
        return (
            <div>
                <div className="col-md-2 d-none d-md-block bg-dark d-none d-lg-block custom">
                    <ul className="">
                        {adminNavLinks.map((nav) => (
                            <li className="nav-item   " key={nav.id}>
                                <Link
                                    className="nav-link text-white ss"
                                    style={{ textAlign: 'right' }}
                                    to={nav.link}
                                >
                                    <div
                                        className="d-flex flex"
                                        style={{ direction: 'rtl' }}
                                    >
                                        <i className={nav.icon}></i>
                                        <span style={{ fontSize: '16px' }}>
                                            {nav.text}{' '}
                                        </span>
                                    </div>
                                </Link>
                                <hr className="shadow"></hr>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}
export default Sidebar;
