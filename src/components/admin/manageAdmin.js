import './../../css/admin.css';
import React from 'react';
import getAdmins from './../services/fakeAdmins';
import { useDispatch, useSelector } from 'react-redux';
import { setId } from './../../redux/actions/adminAction';
const ManageAdmins = (props) => {
    const admins = getAdmins();
    const dispatch = useDispatch();
    const adminId = useSelector((state) => state.setAdminSelect);
    const handleClick = async (id) => {
        await dispatch(setId(id));
        props.history.push('/admin/person');
    };
    return (
        <div className=" bg-light shadow manageAdmin">
            <div className="bg-dark w-100 text-white text-center ">
                admin control page
            </div>
            {admins.map((admin) => (
                <div
                    className="w-100 bg-light shadow mt-1 p-2 nav-link ok"
                    key={admin.id}
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleClick(admin.id)}
                >
                    <div className="w-50 d-flex">
                        <i className="fa fa-user my-auto" />
                        <p className="my-auto ml-1">{admin.name}</p>
                    </div>
                    <div className="w-50 d-flex">
                        <p className="my-auto">{admin.access}</p>
                        <i className="fa fa-eye ml-auto my-auto" />
                    </div>
                </div>
            ))}
        </div>
    );
};
export default ManageAdmins;
