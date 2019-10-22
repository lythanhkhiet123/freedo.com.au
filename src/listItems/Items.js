import React from 'react';
import '../cssfiles/ItemsContainer.css';
import { Card, Button } from 'react-bootstrap';
function Items(props) {
    const myImg =  props.src ;
    const cardTitle = props.title;
    const cardText = props.text;

    return (
       
            <div className='box'>
                <Card style={{ width: '100%' }}>
                    <Card.Img className='imgContainer' variant="top" src={require(`${myImg}`)} />
                    <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.text}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        
    );
}

export default Items;
