import React from "react";
import "../Stylesheet/Team.css";
// import a1 fArom "../Images/a1.png";
// import a2 from "../Images/a2.png";
import TeamImages from './TeamImages.js'
const Team = () => {
  return (
    <div className="Team">
      <div className="Team_haeding">
        <h1>OUR TEAM</h1>
      </div>
      <div className="Team_images">
        {TeamImages.map((Val) => {
          const { id, imgsrc, name, rank } = Val;
          return (
            <div className="Team_images_sub" key={id}>
              <img src={imgsrc} alt="" />
              <h3>{name}</h3>
              <p>{rank} </p>
             
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
