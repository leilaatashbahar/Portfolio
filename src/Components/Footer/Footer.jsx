import React, { Component } from 'react'
import "./Footer.css"
import {FaTelegramPlane} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FiPhoneCall} from "react-icons/fi"

export default class Footer extends Component {
  render() {
    return (
      <footer>
			<div class="containerFooter">
				
					<p className='footerPara'>
            وبسایت شخصی لیلا آتش بهار. طراحی شده بوسیله لیلا آتش بهار
          </p>
          <hr />
          <div className="footerIcon">
            <a href="#"><FaTelegramPlane/></a>
            <a href="#"><FaInstagram/></a>
            <a href="#"><FiPhoneCall/></a>
          </div>
			</div>
		</footer>
    )
  }
}
