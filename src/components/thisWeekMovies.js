import React from 'react';
import { Link } from 'react-router-dom';
const WeekMovie = () => {
    return (
        <React.Fragment>
            <div className="row mt-3">
                <div className="mx-auto d-flex flex flex-column img-fluid col-3 border rounded-sm">
                    <Link>
                        <img
                            alt="img"
                            className="img mt-1"
                            src={require('./../resource/img/test.jpg')}
                        />
                    </Link>
                    <div className="flex d-flex flex-column nowplay">
                        <div className="flex d-flex">
                            <div className="felx d-flex px-2 pt-3">
                                <i
                                    className="fa fa-star mr-1"
                                    style={{ color: 'yellow' }}
                                />
                                <p>%76</p>
                            </div>
                            <div className="felx d-flex   px-2 pt-3 ">
                                <i
                                    className="d-none d-lg-block d-md-block fa fa-film mr-1"
                                    style={{ color: 'green' }}
                                    aria-hidden="true"
                                ></i>
                                <p className="d-none d-lg-block d-md-block">
                                    %32
                                </p>
                            </div>
                        </div>
                        <div className="ml-1 ">
                            <Link className="link">
                                <p className="filmName">The Wretched</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mx-auto d-flex flex flex-column img-fluid col-3 border rounded-sm">
                    <img
                        alt="img"
                        className="img mt-1"
                        src={require('./../resource/img/test.jpg')}
                    />
                    <div className="flex d-flex flex-column nowplay">
                        <div className="flex d-flex">
                            <div className="felx d-flex px-2 pt-3">
                                <i
                                    className="fa fa-star mr-1"
                                    style={{ color: 'yellow' }}
                                />
                                <p>%76</p>
                            </div>
                            <div className="felx d-flex   px-2 pt-3 ">
                                <i
                                    className="d-none d-lg-block d-md-block fa fa-film mr-1"
                                    style={{ color: 'green' }}
                                    aria-hidden="true"
                                ></i>
                                <p className="d-none d-lg-block d-md-block">
                                    %32
                                </p>
                            </div>
                        </div>
                        <div className="ml-1 ">
                            {' '}
                            <Link className="link">
                                <p className="filmName">The Wretched</p>
                            </Link>
                        </div>
                    </div>
                </div>{' '}
                <div className="mx-auto d-flex flex flex-column img-fluid col-3 border rounded-sm">
                    <img
                        alt="img"
                        className="img mt-1"
                        src={require('./../resource/img/test.jpg')}
                    />
                    <div className="flex d-flex flex-column nowplay">
                        <div className="flex d-flex">
                            <div className="felx d-flex px-2 pt-3">
                                <i
                                    className="fa fa-star mr-1"
                                    style={{ color: 'yellow' }}
                                />
                                <p>%76</p>
                            </div>
                            <div className="felx d-flex   px-2 pt-3 ">
                                <i
                                    className="d-none d-lg-block d-md-block fa fa-film mr-1"
                                    style={{ color: 'green' }}
                                    aria-hidden="true"
                                ></i>
                                <p className="d-none d-lg-block d-md-block">
                                    %32
                                </p>
                            </div>
                        </div>
                        <div className="ml-1 fil">
                            {' '}
                            <Link className="link">
                                <p className="filmName">The Wretched</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default WeekMovie;
