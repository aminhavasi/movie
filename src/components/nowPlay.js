import React from 'react';
const NowPlay = () => {
    return (
        <React.Fragment>
            <div className="row amin ">
                <div className="mx-auto img-fluid col-3">
                    <img
                        alt="img"
                        className="img"
                        src={require('./../resource/img/test.jpg')}
                    />
                    <div className="row">
                        <div className="felx d-flex px-2 pt-3">
                            <i
                                className="fa fa-star"
                                style={{ color: 'yellow', fontSize: '1.5vw' }}
                            />
                            <p style={{ fontSize: '1.2vw' }}>%76</p>
                        </div>
                        <div className="felx d-flex px-2 pt-3 nowplay">
                            <i
                                className="fa fa-film"
                                style={{ color: 'green', fontSize: '1.5vw' }}
                                aria-hidden="true"
                            ></i>
                            <p style={{ fontSize: '1.2vw' }}>%32</p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto  col-3">
                    <img
                        alt="img"
                        className="img"
                        src={require('./../resource/img/test.jpg')}
                    />
                </div>{' '}
                <div className="mx-auto img-fluid col-3">
                    <img
                        alt="img"
                        className="img"
                        src={require('./../resource/img/test.jpg')}
                    />
                </div>
            </div>
        </React.Fragment>
    );
};
export default NowPlay;
