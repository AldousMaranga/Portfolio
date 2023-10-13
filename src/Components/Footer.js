import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className='text-center'>
                    <span style={{ paddingRight: '40px' }}>
                        <a href="https://www.youtube.com/watch?v=VEomyZcnRTQ&feature=youtu.be&ab_channel=MARANGA%2CAldousBenjamin" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </span>

                    <span style={{ paddingRight: '40px' }}>
                        <a href="https://drive.google.com/file/d/1pL6FGxfTQ5FtJujXyjOVztSu31Uv5gRY/view" target="_blank" rel="noopener noreferrer">
                            <i className="fa-regular fa-file-pdf"></i>
                        </a>
                    </span>

                    <span style={{ paddingRight: '40px' }}>
                        <a href="https://www.instagram.com/benjamin_maranga/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </span>

                    <span style={{ paddingRight: '40px' }}>
                        <a href="https://www.linkedin.com/in/aldous-benjamin-maranga-b29a0b240/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </span>
                </div>
            </div>
        )
    }
};

export default Footer;