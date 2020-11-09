import React, { Component } from 'react';
import ContactImg from './ContactImg.jpg';
import Iframe from 'react-iframe';
import Footer from './Footer';
import { useMediaQuery } from 'react-responsive'



const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
}
const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
}


class Contact extends Component {
    render() {
        return (
            <div>
                <Mobile>
                    <div className=" container-fluid" style={{ marginTop: "-20px" }}>
                        <div className="row ">
                            <header className=" ContactI "  >
                                <img src={ContactImg} alt="" style={{ width: "100%", height: "100%" }}></img>
                            </header>
                            <div className="col-sm-6 col-md-6">
                                <div className="contact-bg">
                                    <h4>Drop us A Line</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ducimus rem voluptate? </p>
                                    <form action="">
                                        <label for="name">Name</label>
                                        <input id="name" type="text" name="" className="form-control" />
                                        <label for="email">Email</label>
                                        <input id="email" type="text" name="" className="form-control" />
                                        <label for="message">Message</label>
                                        <textarea name="" id="message" cols="30" rows="5" className="form-control"></textarea>
                                        <button className="mt-2 btn btn-primary">Send Message</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6">
                                <div className="contact-bg">
                                    <h4>Контакт</h4>
                                    <div className="quick-contact-widget">
                                        <span><i className="fa fa-phone" aria-hidden="true"></i> +389 70 38 47 28  </span>
                                        <span><i className="fa fa-envelope" aria-hidden="true"></i>contact@brainster.co</span>
                                        <span><i className="fa fa-map-marker"></i> ул. Костурски херои 28, 1000 Скопје </span>
                                    </div>
                                </div>
                                <div className="p-2 white-bg mt-3">
                                    <Iframe src="https://wego.here.com/directions/mix//Brainster,-Kosturski-Heroi-28,-1000-Skopje,-Macedonia:e-eyJuYW1lIjoiQnJhaW5zdGVyIiwiYWRkcmVzcyI6Iktvc3R1cnNraSBIZXJvaSAyOCwgMTAwMCBTa29wamUiLCJsYXRpdHVkZSI6NDIuMDAwNjkxOTA3MDE5LCJsb25naXR1ZGUiOjIxLjQxNzk5Njg4MzM5MiwicHJvdmlkZXJOYW1lIjoiZmFjZWJvb2siLCJwcm92aWRlcklkIjo2OTI5NjUwNzc1MTQ3Nzl9?map=42.00069,21.418,15,normal&fb_locale=en_US" width="100%" height="350px" frameborder="0" style={{ border: 0 }} alt="o" allowfullscreen></Iframe>
                                </div>
                            </div>

                        </div>
                    </div>
                    <br /><br />
                    <Footer />
                </Mobile>
                <Desktop>
                    <div className=" container-fluid" style={{ marginTop: "-20px" }}>
                        <div className="row ">
                            <header className=" ContactI "  >
                                <img src={ContactImg} alt="" style={{ width: "100%", height: "100%" }}></img>
                            </header>
                            <div className="col-sm-6 col-md-6">
                                <div className="contact-bg">
                                    <h4>Drop us A Line</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ducimus rem voluptate? </p>
                                    <form action="">
                                        <label for="name">Name</label>
                                        <input id="name" type="text" name="" className="form-control" />
                                        <label for="email">Email</label>
                                        <input id="email" type="text" name="" className="form-control" />
                                        <label for="message">Message</label>
                                        <textarea name="" id="message" cols="30" rows="5" className="form-control"></textarea>
                                        <button className="mt-2 btn btn-primary">Send Message</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6">
                                <div className="contact-bg">
                                    <h4>Контакт</h4>
                                    <div className="quick-contact-widget">
                                        <span><i className="fa fa-phone" aria-hidden="true"></i> +389 70 38 47 28  </span>
                                        <span><i className="fa fa-envelope" aria-hidden="true"></i>contact@brainster.co</span>
                                        <span><i className="fa fa-map-marker"></i> ул. Костурски херои 28, 1000 Скопје </span>
                                    </div>
                                </div>
                                <div className="p-2 white-bg mt-3">
                                    <Iframe src="https://wego.here.com/directions/mix//Brainster,-Kosturski-Heroi-28,-1000-Skopje,-Macedonia:e-eyJuYW1lIjoiQnJhaW5zdGVyIiwiYWRkcmVzcyI6Iktvc3R1cnNraSBIZXJvaSAyOCwgMTAwMCBTa29wamUiLCJsYXRpdHVkZSI6NDIuMDAwNjkxOTA3MDE5LCJsb25naXR1ZGUiOjIxLjQxNzk5Njg4MzM5MiwicHJvdmlkZXJOYW1lIjoiZmFjZWJvb2siLCJwcm92aWRlcklkIjo2OTI5NjUwNzc1MTQ3Nzl9?map=42.00069,21.418,15,normal&fb_locale=en_US" width="100%" height="350px" frameborder="0" style={{ border: 0 }} alt="o" allowfullscreen></Iframe>
                                </div>
                            </div>

                        </div>
                    </div>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <Footer />
                </Desktop>
            </div>
        );
    }
}
export default Contact;