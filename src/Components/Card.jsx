import React from "react"
import "./Card.css"
import Button from '@mui/material/Button';

function Card({title,image,body}){
    return(
        <div
            className="card-container">
            <div className="image-container">
                <img src={image} alt=""/>
            </div>

            <div className="card-content">
                <div className="card-title">
                    <h1>{title}</h1>
                </div>
                <div className="card-body">
                    <p>{body}</p>
                </div>
            </div>
            <div className="card-button">
                <Button variant="contained" color="warning"> 
                    View more 
                </Button>
            </div>
        </div>
    )
}

export default Card