import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div
            className="App bgapp align-items-center justify-content-center 
            "
        >
            <div className="content">
                <div className="ops text-center">
                    <h3>Opps!</h3>
                    <p className="lead">
                        با عرض پوزش صفحه مورد نظر شما یافت نشد{' '}
                    </p>
                </div>
                <Link to="/" className="btn btn-sm bg-primary text-white mt-3">
                    ورود به صفحه اصلی{' '}
                </Link>
            </div>
        </div>
    );
}

export default NotFound;
