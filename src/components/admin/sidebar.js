import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getAdminNavLink from './../services/navLinks';

class Sidebar extends Component {
    render() {
        const adminNavLinks = getAdminNavLink();
        return (
            <nav className="col-md-2 d-none d-md-block bg-dark  sidebar">
                <div className="sidebar-sticky ">
                    <ul className="nav flex-column">
                        {adminNavLinks.map((nav) => (
                            <li className="nav-item " key={nav.id}>
                                <Link
                                    className="nav-link  text-white"
                                    to={nav.link}
                                >
                                    <div className="j">
                                        <span className={nav.icon} />
                                        <span className="m-2 rtl">
                                            {nav.text}
                                        </span>
                                    </div>
                                </Link>
                                <hr className="shadow" />
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Sidebar;
