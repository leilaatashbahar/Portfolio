import React, { Component } from 'react'
import "./Contact.css"
import {FiPhoneCall} from "react-icons/fi"
import {MdEmail} from "react-icons/md"
import {ImLocation2} from "react-icons/im"


export default class Contact extends Component {
  constructor(props){
    super(props)

  }
  
  submitHandler(event){
   
    alert("پیام شما فرستاده شد");
    console.log("send");
    event.preventDefault();
    
  }
  render() {
    return (
      <div className='contactContainer'>
          <form  action="https://formsubmit.co/leila.atashbahar@gmail.com" method='post' className='form' onSubmit={(event)=>this.submitHandler(event)}>
          <input type="hidden" name="_captcha" value="false" />
              <input name="name" type="text" class="form-control" id="name" placeholder="Your Name"/>
							<input name="email" type="email" class="form-control" id="email" placeholder="Your Email"/>
              <input type="hidden" name="_next" value="http://atashbahar.epizy.com" />
							<textarea name="message" rows="5" class="form-control" id="message" placeholder="Your Message"></textarea>
							<input name="send" type="submit" class="form-control" id="send" value="SEND ME" />
						
            </form>
        <div className="contactIcon">
          <h2 className="h2Contact">تماس با من</h2>
          <div className="iconItemContact"><span className='spanContact'>09333608005</span><i><FiPhoneCall/></i></div>
          
          <div className="iconItemContact"><span className='spanContact'>leila.atashbahar@gmail.com</span><i><MdEmail/></i></div>
          <div className="iconItemContact"><span className='spanContact'>استان کرمانشاه، شهرستان کرمانشاه</span><i><ImLocation2/></i></div>
        </div>
      

      </div>
    )
  }
}
