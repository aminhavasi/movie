import React from 'react';
import './../../css/createMovie.css';

const CreateMovie = () => {
    const handleSave = () => {
        console.log('handle');
    };
    return (
        <div className="">
            <div className="card shadow  ">
                <div className="card card-header bg-primary">Create Movie</div>
                <div className="card-body ">
                    <h5>Please Fill Fileds </h5>
                    <label className="mt-2">plase Select Image : </label>
                    <input className="ml-2 mt-2" type="file" id="file-input" />
                    <br />
                    <div className="form-inline mt-5">
                        {' '}
                        <label>Please Enter a Name for Movie : </label>
                        <input
                            className="form-control   ml-2 w-25"
                            placeholder="enter a Movie Name ..."
                        />
                        <div className=" ml-3">
                            <div class="form-check-inline">
                                <label class="form-check-label" for="radio1">
                                    <input
                                        type="radio"
                                        class="form-check-input"
                                        id="radio1"
                                        name="optradio"
                                        value="option1"
                                    />
                                    Now Play
                                </label>
                            </div>
                            <div class="form-check-inline">
                                <label class="form-check-label" for="radio2">
                                    <input
                                        type="radio"
                                        class="form-check-input"
                                        id="radio2"
                                        name="optradio"
                                        value="option2"
                                    />
                                    Week Open
                                </label>
                            </div>
                            <div class="form-check-inline">
                                <label class="form-check-label">
                                    <input
                                        type="radio"
                                        class="form-check-input"
                                        id="radio3"
                                        name="optradio"
                                        value="option3"
                                    />
                                    Coming soon
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="ops">
                        <p className="">Do You Want To Save This Movie?</p>
                    </div>
                    <div>
                        <button className="btn btn-danger mr-2">cansel</button>
                        <button
                            onClick={() => handleSave()}
                            className="btn btn-success "
                        >
                            save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CreateMovie;
