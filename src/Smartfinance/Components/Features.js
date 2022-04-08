import React,{useState} from "react";
import "../Stylesheet/Features.css";
import FeaturesArray from "./FeaturesArray";
const Features = () => {
  const [data,setdata]=useState(FeaturesArray);
  return (
    <div className="Features">
      <div className="headings">
        <h1>Features</h1>
      </div>
      <div className="feature_sub">
         {data.map((Val)=>{
           return(
            <div className="component" key={Val.id}>
            <h1>{Val.heading}</h1>
            <p>{Val.text}</p>
        </div>
           )
         })}
      </div>
    </div>
  );
};


export default Features;
