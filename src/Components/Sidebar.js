import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <li>
                        <a href="https://www.youtube.com/watch?v=VEomyZcnRTQ&feature=youtu.be&ab_channel=MARANGA%2CAldousBenjamin"  target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-youtube pb-4"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://drive.google.com/file/d/1pL6FGxfTQ5FtJujXyjOVztSu31Uv5gRY/view" target="_blank" rel="noopener noreferrer">
                            <i className="fa-regular fa-file-pdf pb-4"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/benjamin_maranga/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram pb-4"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/aldous-benjamin-maranga-b29a0b240/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
};

export default Sidebar;