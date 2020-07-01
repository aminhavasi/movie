import React from 'react';
// import admins from './../services/fakeAdmins';
// import { useSelector } from 'react-redux';
import './../../css/personAdmin.css';
const Person = () => {
    // const adm = admins();
    // const id = localStorage.getItem('userId');
    // const adminId = useSelector((state) => state.setAdminSelect);
    return (
        <div className="person">
            <div className="d-flex px-2 py-2">
                <label className="w-25">Name:amin havasi</label>
                <label className=" w-25">sex:male</label>
                <label className="w-25">age:23</label>
                <label className="w-25">from:iran</label>
            </div>
            <hr className="w-100    " />
            <div className="px-2">
                <label
                    className="pull-right bg-primary "
                    style={{ borderRadius: '1px', padding: '2px' }}
                >
                    state:Employer
                </label>
                <label>price:2500$</label>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Work:3Year</label>
                    <label>access:open</label>
                </div>
                <div className="bottomAdmin shadow bg-light ">
                    <i
                        className="fa fa-close  p-3 f"
                        style={{ fontSize: '20px' }}
                        data-toggle="tooltip"
                        data-placement="top"
                        title="back!"
                    ></i>
                    <i
                        className="fa fa-cog p-3 "
                        style={{ fontSize: '20px' }}
                        data-toggle="tooltip"
                        data-placement="top"
                        title="edit"
                    />
                    <i
                        className="fa fa-trash p-3"
                        style={{ fontSize: '20px' }}
                        data-toggle="tooltip"
                        data-placement="top"
                        title="delete"
                    />
                </div>
            </div>
        </div>
    );
};
export default Person;
