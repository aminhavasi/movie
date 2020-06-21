import React from 'react';
const NowPlay = () => {
    return (
        <React.Fragment>
            <div className="row bg-danger col-12">
                <div className="mx-auto img-fluid col-3">
                    <img
                        className="img"
                        src={require('./../resource/img/test.jpg')}
                    />
                </div>
                <div className="mx-auto img-fluid col-3">
                    <img
                        className="img"
                        src={require('./../resource/img/test.jpg')}
                    />
                </div>{' '}
                <div className="mx-auto img-fluid col-3">
                    <img
                        className="img"
                        src={require('./../resource/img/test.jpg')}
                    />
                </div>{' '}
                <div className="mx-auto img-fluid col-3">
                    <img
                        className="img"
                        src={require('./../resource/img/test.jpg')}
                    />
                </div>
            </div>
        </React.Fragment>
    );
};
export default NowPlay;
