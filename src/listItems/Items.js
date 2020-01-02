import React from 'react';
import '../cssfiles/ItemsContainer.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';




function Items(props) {

    const myImg = props.src;
    const image = '../images/1.png';
    const cardTitle = props.title;
    const cardText = props.text;
    const id = props.id;
    const description = props.description;
    function truncate(str) {
        return str.length > 39 ? str.substring(0, 40) + '...' : str;
    }

    return (
        <div className='boxContainer'>
            <div className='box'>

                <Link to={`/Description/${id},${cardTitle},${description},${cardText},require('${image}')`}>

                    <Card style={{ width: '100%' }}>
                        <Card.Img className='imgContainer' variant="top" src={require(`${myImg}`)} />
                        <Card.Body>


                            <Card.Title className='cardTitle'>{truncate(cardTitle)}

                            </Card.Title>

                            <Card.Text className='cardText'>
                                <img src={require('../images/location.png')} className='locationIconHomePage' alt='location icon' /> &nbsp;  {cardText}
                            </Card.Text>
                        </Card.Body>


                    </Card>
                </Link>
            </div>
            
        </div>
    );
}

export default Items;
