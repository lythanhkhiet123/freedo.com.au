// JavaScript source code
import React from 'react';
import '../cssfiles/Description.css';
import Search from './Search';
import Popup from "reactjs-popup";
import Popups from './Popsupmap';

function Description(props) {
    const IDclicked = props.match.params.id;
    const Titleclicked = props.match.params.title;
    const Descriptionclicked = props.match.params.description;
    const Textclicked = props.match.params.text;
    const Srcclicked = props.match.params.src;
    

    

    return (
        <div>
            <Search />
            <br/>
                <a href='https://tenor.com/view/slideshow-blinking-ilove-you-gif-11872694'>
                <img src={require('../listItems/images/1.gif')} width='80%' height='100px' alt='2'/>
                </a>
            <div className='DescriptionPage'>
                <div className='contentBoxDescription'>
                    <div>
                        <img className='itemImg' src={require('../listItems/images/1.png')} width='70%' height='70%' alt='1' />
                    </div>

                    <div className='contentDescription'>
                        <div className='items'>
                            <p className='item title'>{Titleclicked} </p>
                        <Popup
                                trigger={<div><img src={require('../images/location.png')} className='locationIcon' alt='location icon' /> <span className='location'>{Textclicked} </span></div>}
                            modal
                            closeOnDocumentClick
                        >
                          
                                <Popups lat='-37.840935' lng='144.946457' />
                            </Popup >

                        <p className='item description'>{Descriptionclicked} </p>
                        
                        </div>

                        <div className='posted'>
                            <p className='date listed'>Date Listed:</p> 01/01/2019
                            <p className='date edited'>Last Edited:</p> 02/01/2019
                            <p className='date condition'>Condition:</p> Used
                            
                        </div>
                        
                    </div>
                    
                </div>

                <div className='userDetails'>
                    <table className='userTable' cellPadding='20px'>
                        <tbody>
                        <tr>
                            <td colSpan="2"><h1>Contact</h1></td>
                        </tr>

                        <tr>
                            <td className='date'>Name:</td>
                            <td width='100%'>Nic</td>
                        </tr>
                        <tr>
                            <td className='date'>Address:</td>
                            <td>123 Lygon Street, Carlton VIC</td>

                        </tr>
                        <tr>
                            <td className='date'>Phone:</td>
                            <td>0423 582 582</td>
                        </tr>
                        </tbody>
                    </table>
 

                </div>
            </div>

            
        </div>

    );
}

export default Description;

