import './../../css/admin.css';
import React from 'react';
import getAdmins from './../services/fakeAdmins';
const ManageAdmins = () => {
    const admins = getAdmins();
    return (
        // <div className=" bg-light shadow manageAdmin">
        //     <div className="bg-dark text-white text-center">Manage Admins</div>
        //     <div className="bg-danger m-2 p-2 adminUser">
        //         <i className="fa fa-user mr-1 my-auto " />
        //         <span>amin Hvasi</span>
        //         <span className="ml-2"> employer</span>
        //         <div className="pull-right ">
        //             <span className="fa fa-trash my-auto mr-1 "></span>
        //             <span className="fa fa-trash my-auto ml-4 "></span>
        //         </div>
        //     </div>
        // </div>
        <div className="container bg-light shadow manageAdmin">
            <div className="bg-dark w-100 text-white text-center ">sas</div>
            <div className="p-2 mt-1 mb-4  shadow">
                <i className="fa fa-user mt-1  pull-left" />
                <span className=""> amin havasi</span>
                <span className="ml-2"> employer</span>
                <span
                    className="pull-right text-danger   fa fa-trash"
                    style={{ fontSize: '20px' }}
                ></span>
                <span
                    className="pull-right mr-3 text-warning fa fa-cog"
                    style={{ fontSize: '20px' }}
                ></span>
            </div>
        </div>
    );
};
export default ManageAdmins;
