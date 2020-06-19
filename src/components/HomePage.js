import React from 'react';
import { Link } from 'react-router-dom';
const HomePage = () => {
    return (
        <div className="home  text-white">
            <div className="row mx-auto">
                <div className="col-lg-6 col-sm-12 mt-1 w-50  bg-danger text-center ">
                    <Link to="#" className="btn btn-primary ">
                        signIn
                    </Link>
                </div>
                <div className="col-lg-6 col-sm-12 mt-1 bg-danger w-50 text-center">
                    <Link to="#" className="btn  btn-primary ">
                        signUp!
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default HomePage;
