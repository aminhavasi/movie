import React from 'react';
const NowPlay = () => {
    return (
        <React.Fragment>
            <div className="row ">
                <div className="mx-auto img-fluid col-3">
                    <img
                        alt="img"
                        className="img"
                        src={require('./../resource/img/test.jpg')}
                    />
                    <div className="row nowplay">
                        <div className="felx d-flex px-2 pt-3">
                            <i
                                className="fa fa-star mr-1"
                                style={{ color: 'yellow' }}
                            />
                            <p>%76</p>
                        </div>
                        <div className="felx d-flex px-2 pt-3 ">
                            <i
                                className="d-none d-lg-block d-md-block fa fa-film mr-1"
                                style={{ color: 'green' }}
                                aria-hidden="true"
                            ></i>
                            <p className="d-none d-lg-block d-md-block">%32</p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto img-fluid col-3">
                    <img
                        alt="img"
                        className="img"
                        src={require('./../resource/img/test.jpg')}
                    />
                    <div className="row nowplay">
                        <div className="felx d-flex px-2 pt-3">
                            <i
                                className="fa fa-star mr-1"
                                style={{ color: 'yellow' }}
                            />
                            <p>%76</p>
                        </div>
                        <div className="felx d-flex px-2 pt-3 ">
                            <i
                                className="d-none d-lg-block d-md-block fa fa-film mr-1"
                                style={{ color: 'green' }}
                                aria-hidden="true"
                            ></i>
                            <p className="d-none d-lg-block d-md-block">%32</p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto img-fluid col-3">
                    <img
                        alt="img"
                        className="img"
                        src={require('./../resource/img/test.jpg')}
                    />
                    <div className="row nowplay">
                        <div className="felx d-flex px-2 pt-3">
                            <i
                                className="fa fa-star mr-1"
                                style={{ color: 'yellow' }}
                            />
                            <p>%76</p>
                        </div>
                        <div className="felx d-flex px-2 pt-3 ">
                            <i
                                className="d-none d-lg-block d-md-block fa fa-film mr-1"
                                style={{ color: 'green' }}
                                aria-hidden="true"
                            ></i>
                            <p className="d-none d-lg-block d-md-block">%32</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default NowPlay;
