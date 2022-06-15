import React from 'react';
// import ReactDOM from 'react-dom/client';

export default function Card(props) {
 return(
    <div className='card'>
        <img src={props.item.imageUrl} className='coverImg'/>
    </div>
 )
}