import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="home">
          <div className="containerHome">
            <h1 className="h1Home"> وبسایت شخصی</h1>
            <span className="spanHome">لیلا آتش بهار</span>
            <p className="animationText">React Developer...</p>

            <p className="aboutText">
              اینجا وبسایت شخصی منه. من یک طراح و توسعه دهنده سمت فرانت
              هستم. در اینجا میتونید نمونه کارها و مهارتهای من رو ببینید
            </p>
              <a href="#section2" className="btn">بیاین شروع کنیم</a>
          </div>
        </div>
      </>
    );
  }
}
