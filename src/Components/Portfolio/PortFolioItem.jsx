import React,{useState} from 'react'
import "./PortFolioItem.css"

export default function PortFolioItem(props) {
    const {title,img}=props;
  return (
    <div className='portFolioItem'>
      
        <a href="#" className='portFolioLink'>
          
        <img src={img} alt={title} />
        <div className="middle">
        <h5>{title}</h5>
        </div>
        
        </a>
        
        
    </div>
  )
}
