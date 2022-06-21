import React from "react";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Portfolio from "./Components/Portfolio/Portfolio";
import Work from "./Components/Work/Work";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import "./App.css";


export default function App() {


    return (
        
        <div className="appContainer">



        <Home > </Home>

        <Work > </Work> 
        <About > </About>

        <Portfolio> </Portfolio> 
        <Contact > </Contact> 
        <Footer > </Footer>


        </div>
    );
}