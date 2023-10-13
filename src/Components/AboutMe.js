import React, { Component } from 'react';

class AboutMe extends Component {
    componentDidMount() {
        // Your JavaScript code goes here
        var TxtType = function (el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        };

        TxtType.prototype.tick = function () {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];

            if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            this.el.querySelector('.wrap').innerHTML = this.txt;

            var that = this;
            var delta = 200 - Math.random() * 100;

            if (this.isDeleting) { delta /= 2; }

            if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period;
                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.loopNum++;
                delta = 500;
            }

            setTimeout(function () {
                that.tick();
            }, delta);
        };

        var elements = document.querySelectorAll('.typewrite');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }

        // INJECT CSS (you can use React CSS-in-JS libraries for better React integration)
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.head.appendChild(css);
    }


    render() {
        return (
            <div>
                <div >
                    <div style={{ minHeight: '100vh' }} >
                        <p className='header1'>Hi, I am Aldous Benjamin A. Maranga!</p>
                        <div className="typewrite typewriter-style header2" data-period="2000" data-type='[ "am an aspiring Software Engineer.", "love developing programs.", "enjoy working with a team.", "learn new things every day." ]'>
                            I <span className="wrap"></span>
                        </div>
                    </div>


                    <div className="row mb-5">
                        <div className="col-md-5 col-sm-12 d-flex align-items-center justify-content-center p-5">
                            <img src="/images/abam.png" alt="abam" width="100%" height="auto" className="img-cont" />
                        </div>
                        <div className="col-md-7 col-sm-12 d-flex flex-column justify-content-center">
                            <p className='titles'>About Me</p><br/>
                            <p style={{ textAlign: 'justify' }} >
                                My name is Aldous Benjamin A. Maranga, Aldous for short. I am currently studying at Lithan Academy Singapore as a Software Engineer.
                                I enjoy solving problems on real-time and through coding structures as well as understanding the meaning behind a certain functionality.
                            </p>
                        </div>
                    </div>

                    <div>
                        <p className='titles text-center mb-3'>Education</p>
                        <div className='row mb-5'>
                            <div className='col-md-6 col-sm-12 mb-4'>
                                <p style={{ color: '#DA0C81', fontSize: '3vh' }}>Lithan Academy</p>
                                <p style={{ color: '#E5F2C9', fontSize: '2.7vh' }}>Singapore</p>
                                <p style={{ color: '#E5F2C9', fontSize: '2.7vh' }}>Applied Degree in Software Engineering</p>
                                <p style={{ color: '#E5F2C9', fontSize: '2vh' }}><span style={{ backgroundColor: '#2E4374', padding: '5px', borderRadius: '5px' }}>2022-Present</span></p>
                            </div>
                            <div className='col-md-6 col-sm-12 mb-4'>
                                <p style={{ color: '#DA0C81', fontSize: '3vh' }}>University Of Cebu-Banilad</p>
                                <p style={{ color: '#E5F2C9', fontSize: '2.7vh' }}>Cebu City, Philippines</p>
                                <p style={{ color: '#E5F2C9', fontSize: '2.7vh' }}>Bachelor of Science in Information Technology</p>
                                <p style={{ color: '#E5F2C9', fontSize: '2vh' }}><span style={{ backgroundColor: '#2E4374', padding: '5px', borderRadius: '5px' }}>2022-Present</span></p>
                            </div>
                            <div className='col-md-6 col-sm-12 mb-4'>
                                <p style={{ color: '#DA0C81', fontSize: '3vh' }}>University of Cebu</p>
                                <p style={{ color: '#E5F2C9', fontSize: '2.7vh' }}>Cebu City, Philippines</p>
                                <p style={{ color: '#E5F2C9', fontSize: '2.7vh' }}>Senior Highschool Degree</p>
                                <p style={{ color: '#E5F2C9', fontSize: '2vh' }}><span style={{ backgroundColor: '#2E4374', padding: '5px', borderRadius: '5px' }}>2020-2022</span></p>
                            </div>
                            <div className='col-md-6 col-sm-12 mb-4'>
                                <p style={{ color: '#DA0C81', fontSize: '3vh' }}>Don Bosco Technical College</p>
                                <p style={{ color: '#E5F2C9', fontSize: '2.7vh' }}>Cebu City, Philippines</p>
                                <p style={{ color: '#E5F2C9', fontSize: '2.7vh' }}>Junior Highschool Degree</p>
                                <p style={{ color: '#E5F2C9', fontSize: '2vh' }}><span style={{ backgroundColor: '#2E4374', padding: '5px', borderRadius: '5px' }}>2016-2020</span></p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        );
    }
};

export default AboutMe;