import React from 'react';
import '../cssfiles/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
   
    return (
        <div>
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
                        <td><a href="#" class="table data">About Freedo</a></td>
                        <td><a href="#" class="table data">Terms of Use</a></td>
                        <td><a href="#" class="table data">Display Advertising</a></td>
                        <td><a href="#" class="table data">All Categories</a></td>
                </tr>
                <tr>
                        <td><a href="#" class="table data">Help</a></td>
                        <td><a href="#" class="table data">Privacy Policy</a></td>
                        <td><a href="#" class="table data">All Location</a></td>
                </tr>
                <tr>
                        <td><a href="#" class="table data">Press Contact</a></td>
                        <td><a href="#" class="table data">Cookie Policy</a></td>
                </tr>
                <tr>
                        <td><a href="#" class="table data">Contact Us</a></td>
                </tr>
            </table>
        </div>
        <div class='SubFooter'>
                <div class='ContentSubFooter'> 
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-youtube"></a>
                    <a href="#" class="fa fa-instagram"></a>     
                    <p class='copyright'>Copyright © 2019-2029 Aus Assist PTY LTD All Rights Reserved.</p>
                </div>
        </div>
        </div>
    );
}

export default Footer;
