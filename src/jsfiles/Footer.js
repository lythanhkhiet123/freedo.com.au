import React from 'react';
import '../cssfiles/Footer.css';

function Footer() {

    return (
        <div className='test2'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <div className='footer-grid'>

                <div className="footer-grid-sec-1" >
                    <h3 className="footerHeading">Tips & help</h3>
                    <a href="Aboutus" className="table data">About Freedo</a><br></br>
                    <a href="Termofuse" className="table data">Terms of Use</a><br></br>
                    <a href="Advertisingbusiness" className="table data">Advertising with us</a><br></br>
                    <a href="#" className="table data">All Categories</a><br></br>
                </div>
                <div className="footer-grid-sec-2" >
                    <h3 className="footerHeading">Legal bits</h3>
                    <a href="Help" className="table data">Help</a><br></br>
                    <a href="Privacy" className="table data">Privacy Policy</a><br></br>
                    <a href="#" className="table data">All Location</a><br></br>
                </div>

                <div className="footer-grid-sec-3" >
                    <h3 className="footerHeading">For Business</h3>
                    <a href="Contactus" className="table data">Contact Us</a><br></br>
                    <a href="Cookie" className="table data">Cookie Policy</a><br></br>
                </div>

                <div className="footer-grid-sec-4" >
                    <h3 className="footerHeading">Explore</h3>
                </div>

            </div>
            <div className='SubFooter'>
                <div className='ContentSubFooter'>
                    <a href="https://www.facebook.com/" className="fa fa-facebook"></a>
                    <a href="https://twitter.com/" className="fa fa-twitter"></a>
                    <a href="https://www.youtube.com/" className="fa fa-youtube"></a>
                    <a href="https://www.instagram.com/" className="fa fa-instagram"></a>
                    <p className='copyright'>Copyright � 2019-2029 Aus Assist PTY LTD All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
