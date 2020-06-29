import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './../../css/admin.css';
import 'react-toastify/dist/ReactToastify.css';
import NavbarAdmin from './navbarAdmin';
import Sidebar from './sidebar';
import MainAdmin from './admin';

function Dashboard() {
    return (
        <div className="container-fluid rtl m">
            <ToastContainer />
            <NavbarAdmin />
            <div className="row custom ">
                <Sidebar />
                <main
                    role="main"
                    className="col-md-9 mr-auto col-lg-10 px-4 mainn"
                >
                    <Switch>
                        <Route exact path="/admin" component={MainAdmin} />
                        <Route path="/admin/allposts" component={null} />
                        <Route path="/admin/create-course" component={null} />
                        <Route path="/admin/allcourses" component={null} />
                        <Route path="/admin/editpost" component={null} />
                        <Route path="/admin/editcourse" component={null} />
                        <Route path="/admin/logout" component={null} />
                    </Switch>
                </main>
            </div>
        </div>
    );
}

export default Dashboard;
