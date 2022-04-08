import React from "react";
import "../Stylesheet/Roadmap.css";
import { FaCircle } from 'react-icons/fa';
import { TiTick } from 'react-icons/ti';
const Roadmap = () => {
  return (
    <>
      <div className="roadmapheading">
        <h1>Roadmap</h1>
      </div>
      <div className="Roadmap">
        <div className="Roadmap_box1">
          <div className="roadmapleft">
            <h2>2021-Q4</h2>
            <  FaCircle className="circle"/>
          </div>
          <div className="roadmapright">
            <p> <TiTick className="tick"/> Concept Design</p>
            <p> <TiTick className="tick"/> Architectural Design</p>
            <p> <TiTick className="tick"/> Marketing Strategy</p>
            <p> <TiTick className="tick"/> Business Plan</p>
            <p> <TiTick className="tick"/> Website Launch</p>
            <p> <TiTick className="tick"/> Whitepaper Release</p>
            <p> <TiTick className="tick"/> Social Media channel</p>
            <p> <TiTick className="tick"/> Presale Launch</p>
            <p> <TiTick className="tick"/> Pancakeswap Listing</p>
          </div>
        </div>
        <div className="Roadmap_box2">
        <div className="roadmapleft">
            <h2>2021-Q4</h2>
            <  FaCircle className="circle"/>
          </div>
          <div className="roadmapright">
            <p> <  TiTick className="tick"/> Smart Contract Audit</p>
            <p> <  FaCircle className="circle_blue"/> Platform Launch</p>
            <p> <  FaCircle className="circle_blue"/> Coinmarketcap Listing</p>
            <p> <  FaCircle className="circle_blue"/> Ciongecko Listing</p>
            <p> <  FaCircle className="circle_blue"/> Unveiling Marketplan</p>
            <p> <  FaCircle className="circle_blue"/>Marketplace Beta test</p>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
