import React, { Component } from 'react';

class Projects extends Component {
    render() {
        return (
            <div>
                <div className="pt-5">
                    <div>
                        <p className="pb-3 titles">Projects Implemented</p>
                        <h2 className="text-center pb-3">Some of the projects I've developed through my career.</h2>

                        <div className="row">
                            {/* <!-- Jumpstart --> */}
                            <div className="col-lg-6 col-md-12 col-sm-12 custom-column">
                                <a href="https://github.com/AldousMaranga/M12-Jumpstart" target="_blank" rel="noreferrer" className="image-container">
                                    <div className='wrap'>
                                        <div className='img-wrap'>
                                            <img src="/images/projects/jumpstart.png" alt="jumpstart" className="project-image" />
                                        </div>
                                        <div className='text-wrap'>
                                            <h2>Jumpstart Website</h2>
                                            <p>A website for Jumpstart Retails Store where users can buy browse and buy products they like.</p>
                                            <h4>Skills: <u>HTML</u>, <u>CSS</u>, <u>JavaScript</u>, <u>Sring</u>, <u>MySQL</u></h4>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            {/* <!-- ABC Jobs Portal --> */}
                            <div className='col-lg-6 col-md-12 col-sm-12 custom-column'>
                                <a href='https://github.com/AldousMaranga/M11-ABC-Jobs-Portal-New' target="_blank" rel="noreferrer">
                                    <div className='wrap'>
                                        <div className='img-wrap'>
                                            <img src='/images/projects/jumpstart.png' alt="abc-jobs" className='project-image' />
                                        </div>
                                        <div className='text-wrap'>
                                            <h2>ABC Jobs Portal</h2>
                                            <p>A job portal for software engineers. Two types of users, Admin and Software Engineers, can access the portal.</p>
                                            <h4>Skills: <u>HTML</u>, <u>CSS</u>, <u>JavaScript</u>, <u>Sring</u>, <u>MySQL</u></h4>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            {/* <!-- Meals on Wheels --> */}
                            <div className='col-lg-6 col-md-12 col-sm-12 custom-column'>
                                <a href='https://github.com/pointlessduffin-21/group1-mealsonwheels.git' target="_blank" rel="noreferrer">
                                    <div className='wrap'>
                                        <div className='img-wrap'>
                                            <img src='/images/projects/mow.png' alt="meals-on-wheels" className='project-image' />
                                        </div>
                                        <div className='text-wrap'>
                                            <h2>Meals On Wheels Website</h2>
                                            <p>A job portal for software engineers. Two types of users, Admin and Software Engineers, can access the portal.</p>
                                            <h4>Skills: <u>HTML</u>, <u>CSS</u>, <u>JavaScript</u>, <u>Sring</u>, <u>MySQL</u></h4>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            {/* <!-- Know Your Neighborhood --> */}
                            <div className='col-lg-6 col-md-12 col-sm-12 custom-column'>
                                <a href='https://github.com/AldousMaranga/M8-Know-Your-Neighborhood' target="_blank" rel="noreferrer">
                                    <div className='wrap'>
                                        <div className='img-wrap'>
                                            <img src='/images/projects/kyn.png' alt="know-your-neighborhood" className='project-image' />
                                        </div>
                                        <div className='text-wrap'>
                                            <h2>Know Your Neighborhood Website</h2>
                                            <p>A job portal for software engineers. Two types of users, Admin and Software Engineers, can access the portal.</p>
                                            <h4>Skills: <u>ReactJS</u>, <u>Sring</u>, <u>MySQL</u></h4>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className='mb-5'></div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
};

export default Projects;