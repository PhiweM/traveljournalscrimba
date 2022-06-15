import React from 'react';
// import ReactDOM from 'react-dom/client';

export default function Card(props) {
 return(
    <div className='card'>
        <img src={props.item.imageUrl} className='coverImg'/>
        <div className='card-content'>
            <h4 className='location'>
                <i class="fa-solid fa-location-dot"></i> 
                {props.item.location} 
                <span>{props.item.googleMapsUrl}</span>
            </h4>
            <h1 className='title'>{props.item.title}</h1>
            <h5 className='date'>{props.item.startDate} - {props.item.endDate}</h5>
            <p className='desc'>{props.item.description}</p>
        </div>
    </div>
 )
}