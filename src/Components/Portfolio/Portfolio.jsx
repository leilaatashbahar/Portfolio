import React, { Component } from 'react'
import "./Portfolio.css"
import PortFolioItem from "./PortFolioItem"

export default function Portfolio () {

  const portFolios=[
    {id:1,title:"Web Design",img:"Img/portfolio-img1.jpg"},
    {id:1,title:"Web App",img:"Img/portfolio-img2.jpg"},
    {id:1,title:"Mobile Design",img:"Img/portfolio-img3.jpg"},
    {id:1,title:"Old Artwork",img:"Img/portfolio-img4.jpg"},
    {id:1,title:"New Animation",img:"Img/portfolio-img5.jpg"},
    {id:1,title:"New Animation",img:"Img/portfolio-img2.jpg"}
  ]
    return (
      <div className='portFolioContainer'>
      <h1>نمونه کارها</h1>
      <div className='portFolio'>
      
      { portFolios.map(portFolio=>
        <PortFolioItem {...portFolio}/>)}
    
       
      </div>
      </div>
    )
  }

