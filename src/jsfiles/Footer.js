import React from 'react';
import '../cssfiles/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
   
    return (
        <div class='test2'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <div class='Footer'>
            <hr />
            <table className="padding-table-columns" >
                <tr>
                    <th>Tips & help</th>
                    <th>Legal bits</th>
                    <th>For Business</th>
                    <th>Explore</th>
                </tr>
                <tr>
                        <td><a href="Aboutus" class="table data">About Freedo</a></td>
                        <td><a href="Termofuse" class="table data">Terms of Use</a></td>
                        <td><a href="Advertisingbusiness" class="table data">Advertising with us</a></td>
                        <td><a href="#" class="table data">All Categories</a></td>
                </tr>
                <tr>
                        <td><a href="Help" class="table data">Help</a></td>
                        <td><a href="Privacy" class="table data">Privacy Policy</a></td>
                        <td><a href="#" class="table data">All Location</a></td>
                </tr>
                <tr>
                        <td><a href="Contactus" class="table data">Contact Us</a></td>
                        <td><a href="Cookie" class="table data">Cookie Policy</a></td>
                </tr>
              
            </table>
        </div>
        <div class='SubFooter'>
                <div class='ContentSubFooter'> 
                    <a href="https://www.facebook.com/" class="fa fa-facebook"></a>
                    <a href="https://twitter.com/" class="fa fa-twitter"></a>
                    <a href="https://www.youtube.com/" class="fa fa-youtube"></a>
                    <a href="https://www.instagram.com/" class="fa fa-instagram"></a>     
                    <p class='copyright'>Copyright © 2019-2029 Aus Assist PTY LTD All Rights Reserved.</p>
                </div>
        </div>
        </div>
    );
}

export default Footer;
