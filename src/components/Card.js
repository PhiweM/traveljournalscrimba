import React from 'react';
// import ReactDOM from 'react-dom/client';

export default function Card(props) {
 return(
    <div className='card'>
        <img src={props.item.imageUrl} className='coverImg'/>
        <div className='card-content'>
            <div className='card-title'>
                <h4 className='location'>
                    <i class="fa-solid fa-location-dot"></i> 
                    {props.item.location} 
                </h4>
                <a href={props.item.googleMapsUrl}> View on Google Maps</a>
            </div>
           
            <h1 className='title'>{props.item.title}</h1>
            <h5 className='date'>{props.item.startDate} - {props.item.endDate}</h5>
            <p className='card-desc'>{props.item.description}</p>
        </div>
    </div>
 )
}