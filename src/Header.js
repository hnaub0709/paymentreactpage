import React from "react";
import img from "./assets/illustration-hero.svg";
import Topbody from "./Topbody";
import Plan from "./Plan";
import Payment from "./Payment";
import Cancel from "./Cancel";

function header() {
  return (
    
    <div className="header">
   
    <img className="lg" src={img} alt=""/>
    <Topbody/>
    <Plan/>
    <Payment/>
    <Cancel/>

    </div>
  );
}

export default header;
