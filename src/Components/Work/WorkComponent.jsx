import React, { Component } from 'react'
import "./WorkComponent.css"

export default function WorkComponent(props) {
const {header,text,icon}=props
    return (
      <div className="workComponentItem">
        <div className="headerWorkComponentItem">
        <i className='iconWorkComponentItem'>{icon}</i>
        <h2 className='h2WorkComponentItem'>{header}</h2>
        </div>
        <p className='textWorkComponentItem'>{text}</p>
      </div>
    )
  }

