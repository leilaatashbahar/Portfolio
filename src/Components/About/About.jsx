import React from "react";
import "./About.css";
import ProgressBar from "./ProgressBar";

export default function About() {
  return (
    <div className="about">
 

        <div className="progressAbout">
      
      <ProgressBar title="HTML 5" bgcolor="#D43F52" progress='90'  height={10} />
      <ProgressBar title="CSS 3" bgcolor="#D43F52" progress='80'  height={10} />
      <ProgressBar title="SASS" bgcolor="#D43F52" progress='80'  height={10} />
      <ProgressBar title="BOOTSTRAP" bgcolor="#D43F52" progress='80'  height={10} />
      <ProgressBar title="REACT" bgcolor="#D43F52" progress='50'  height={10} />
      </div>
     
      <div className="sectionAbout">
        <h2 className="h2About">درباره من</h2>
        <h3 className="h3About">توسعه دهنده ریکت</h3>
        <p className="paraAbout">
          من فارغ التحصیل رشته مهندسی کامپیوتر دانشگاه پیام نور سنندج هستم مدت
          دو ساله که در حال گذراندن دوره های آموزشی برنامه نویسی وب سمت فرانت
          هستم و به مهارتهایی از جمله Html, Css, Bootstrap, Sass, React دست پیدا
          کردم
        </p>
      </div>
    </div>
  );
}
