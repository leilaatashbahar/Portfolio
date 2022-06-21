import React, { Component } from 'react'
import "./Work.css"
import WorkComponent from './WorkComponent'
import {FaMobileAlt} from "react-icons/fa"
import {FaReact} from "react-icons/fa"
import {MdComputer} from "react-icons/md"
export default function Work() {
    const works=[
        {id:1,header:"طراحی واکنشگرا",text:"من بوسیله مدیا کویری وبسایتهای واکنش گرایی طراحی میکنم",icon:<FaMobileAlt/>},
        {id:2,header:"ریکت", text:" من از کتابخانه ری اکت برای انجام پروژه هام استفاده میکنم",icon:<FaReact/>},
        {id:3,header:"نمونه طرحهای وبسایت",text:"من همیشه از طرحهای جذابی برای وبسایتهایم استفاده میکنم",icon:<MdComputer/>}
      ]
   
    return (
      <div className="work" id="section2">
        <div className="containerWork">
          <h1 className="h1Work">من چیکار میکنم</h1>
          <div className='workComponent'>
          {works.map((work)=>(
            <WorkComponent key={work.id} {...work}></WorkComponent>
          ))}
          </div>
          
        </div>
      </div>
    )
  }
