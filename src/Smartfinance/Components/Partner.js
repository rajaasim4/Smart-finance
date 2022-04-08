import React from "react";
import "../Stylesheet/Partner.css";

const Partner = () => {
  return (
    <div className="Partner">
      <div className="Partner_haeding">
        <h1>PARTNER</h1>
      </div>
      <div className="Partner_images">
        {arr.map((Val) => {
          const { id, imgsrc, name, rank } = Val;
          return (
            <div className="Partner_images_sub" key={id}>
              <img src={imgsrc} alt="" />
              
            </div>
          );
        })}
      </div>
    </div>
  );
};
const arr = [
    {
      id: 1,
      imgsrc: "Image/ms.png",
     
    },
    {
      id: 2,
      imgsrc: "Image/ai.png",
     
    },
    {
      id: 3,
      imgsrc: "Image/binance.png",
     
    },
    {
      id: 4,
      imgsrc: "Image/Pytorch.png",
     
    },
    {
      id: 5,
      imgsrc: "Image/tensorflow.png",
     
    },
    {
      id: 6,
      imgsrc: "Image/TW.png",
     
    },
]

export default Partner;
