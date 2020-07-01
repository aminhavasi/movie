import React from 'react';
const Carousel = () => {
    return (
        <div
            id="demo"
            className="carousel slide w-75 mx-auto"
            data-ride="carousel"
        >
            <ul className="carousel-indicators">
                <li
                    data-target="#demo"
                    data-slide-to="0"
                    className="active"
                ></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
            </ul>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        src={require('./../resource/img/st.jpeg')}
                        alt="first movie"
                        width="1100"
                        height="500"
                    />
                    <div className="carousel-caption">
                        <h3>First Movie</h3>
                        <p>We had such a great time on Movie!</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src={require('./../resource/img/st.jpeg')}
                        alt="Chicago"
                        width="1100"
                        height="500"
                    />
                    <div className="carousel-caption">
                        <h3>Number one</h3>
                        <p>We had such a great time on Movie!</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src={require('./../resource/img/st.jpeg')}
                        alt="New York"
                        width="1100"
                        height="500"
                    />
                    <div className="carousel-caption">
                        <h3>Best Movie</h3>
                        <p>We had such a great time on Movie!</p>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
                <span className="carousel-control-next-icon"></span>
            </a>
        </div>
    );
};
export default Carousel;
