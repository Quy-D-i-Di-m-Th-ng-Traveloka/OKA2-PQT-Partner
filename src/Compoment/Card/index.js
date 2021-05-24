import React from 'react'
import Card from 'react-bootstrap/Card'
import './Card.css'
import {BrowserRouter,useHistory} from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import { generatePath } from 'react-router';


const Cards = (props) => {

    var id= props.id;
    const history = useHistory();

    const handleProceed = (e)=>{
        id && history.push(`/details/${id}`);
    }

    return (
        <div style={{maxHeight:'400px'}}>
            <Card id={props.id}>
                <Card.Img src={props.imgSource} id={props.index}/>
                <Card.Body>
                    <Card.Text>
                    {props.cardDesc}
                    </Card.Text>
                    <Card.Text>
                        <div id='hanSuDung'>
                            <p>Thời gian đặt vé: Đến hết {props.expDate}</p>
                        </div>
                    </Card.Text>
                    <Button onClick={handleProceed} style={{width:'100%'}}>Xem Ngay</Button>
                </Card.Body>
            </Card>       
        </div>
    )
}

export default Cards
