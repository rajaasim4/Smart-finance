import React from "react";
import "../Stylesheet/Vision.css";
import Facetech from "../Images/Facetech.png";
import Node from "../Images/Node.png";
import NFT from "../Images/NFT.png";
const Vision = () => {
  return (
    <div className="Vision">
      <div className="heading">
        <img src={Facetech} alt="" />

        <h1>Our Vision</h1>
      </div>
      <div className="vision_para">
        <p>
          Smart Finance is a marketplace divided into multiple part, where
          buyers and sellers meet to carry out operations involving digital
          goods and assets in a secure way, involving Al for searching, matching
          and advising. One of the multiple advantathe automatic mg of h.
          <br /> Smart Finance is a marketplace divided into multiple part,
          where buyers and sellers meet to carry out operations involving
          digital goods and assets in a secure way, involving Al for searching,
          matching and advising. One of the multiple advantathe automatic mg of
          h.
        </p>
      </div>
      <div className="vision_box">
        <div className="vision_box1">
          <h1>Defi App</h1>
          <p>
            Operates as a Decentralized Yield Optimizer platform, allowing users
            to earn compound interest on their assets.
            <br />
            <br />
            It automatically optimizes user returns from different liquidity
            pools (LPs), automated market making (AMM), and other yield farming
            possibilities in the DeFi ecosystem using a set investment methods
            protected and enforced by smart contracts and powered by AI.
          </p>
          <img src={Node} alt="" />
        </div>
        <div className="vision_box2">
          <h1>Marketplace</h1>
          <p>
            The P2P marketplace is where buyers and sellers meet to carry out
            operations involving digital goods and assets in a secure way,
            involving Al for searching, matching, and advising. <br></br>
            It automatically optimizes user returns from different liquidity
            pools (LPs), automated market making (AMM), and other yield farming
            possibilities in the Defi ecosystem using a set investment methods
            protected and enforced by smart contracts and powered by Al.
          </p>
          <img src={NFT} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Vision;
