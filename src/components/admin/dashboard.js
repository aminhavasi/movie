import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './../../css/admin.css';
import 'react-toastify/dist/ReactToastify.css';
import NavbarAdmin from './navbarAdmin';
import Sidebar from './sidebar';
import MainAdmin from './admin';
import ManageAdmins from './manageAdmin';

function Dashboard() {
    return (
        <div className="container-fluid rtl m">
            <ToastContainer />
            <NavbarAdmin />
            <div className="row custom ">
                <Sidebar />
                <main
                    role="main"
                    className="col-md-10 mr-auto col-lg-10 px-4  mainn"
                >
                    <Switch>
                        <Route exact path="/admin" component={MainAdmin} />
                        <Route
                            path="/admin/manage-admins"
                            component={ManageAdmins}
                        />
                        <Route path="/admin/create-movie" component={null} />
                        <Route path="/admin/emails" component={null} />
                        <Route path="/admin/modifie" component={null} />
                        <Route path="/admin/allmovie" component={null} />

                        <Route path="/admin/logout" component={null} />
                        <Redirect to="notFound" />
                    </Switch>
                </main>
            </div>
        </div>
    );
}

export default Dashboard;
