import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import NavbarAdmin from './navbarAdmin';
import Sidebar from './sidebar';
import MainAdmin from './admin';

function Dashboard() {
    return (
        <div className="admin">
            <NavbarAdmin />
            <Sidebar />
        </div>
    );
}

export default Dashboard;
