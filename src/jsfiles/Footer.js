import React from 'react';
import '../cssfiles/Footer.css';

function Footer() {
   
    return (
        <div className='test2'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <div className='Footer'>
            <hr />
            <table className="padding-table-columns" >
                    <tbody>
                <tr>
                    <th>Tips & help</th>
                    <th>Legal bits</th>
                    <th>For Business</th>
                    <th>Explore</th>
                </tr>
                <tr>
                        <td><a href="Aboutus" className="table data">About Freedo</a></td>
                        <td><a href="Termofuse" className="table data">Terms of Use</a></td>
                        <td><a href="Advertisingbusiness" className="table data">Advertising with us</a></td>
                        <td><a href="#" className="table data">All Categories</a></td>
                </tr>
                <tr>
                        <td><a href="Help" className="table data">Help</a></td>
                        <td><a href="Privacy" className="table data">Privacy Policy</a></td>
                        <td><a href="#" className="table data">All Location</a></td>
                </tr>
                <tr>
                        <td><a href="Contactus" className="table data">Contact Us</a></td>
                        <td><a href="Cookie" className="table data">Cookie Policy</a></td>
                </tr>
                    </tbody>
            </table>
        </div>
        <div className='SubFooter'>
                <div className='ContentSubFooter'> 
                    <a href="https://www.facebook.com/" className="fa fa-facebook"></a>
                    <a href="https://twitter.com/" className="fa fa-twitter"></a>
                    <a href="https://www.youtube.com/" className="fa fa-youtube"></a>
                    <a href="https://www.instagram.com/" className="fa fa-instagram"></a>     
                    <p className='copyright'>Copyright © 2019-2029 Aus Assist PTY LTD All Rights Reserved.</p>
                </div>
        </div>
        </div>
    );
}

export default Footer;
