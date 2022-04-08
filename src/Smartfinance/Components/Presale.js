import React from "react";
import "../Stylesheet/Presale.css";
const Presale = () => {
  var countDownDate = new Date("Apr 15, 2022 15:37:25").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the count down is finished, write some text
	let b=0;
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("days").innerHTML = b;
    document.getElementById("hours").innerHTML = b;
    document.getElementById("minutes").innerHTML = b;
    document.getElementById("seconds").innerHTML = b;
    }
  }, 1000);
  
  return (
    <div className="Presale">
      <div className="presale_haeding">
        <h1>PRESALE DETAILS</h1>
      </div>
      <div className="presale_detail">
        {PresaleArray.map((Val) => {
          return (
            <div className="presale_sub" key={Val.id}>
              <h2>{Val.heading}</h2>
              <p>{Val.TEXT}</p>
            </div>
          );
        })}
      </div>
      <div className="presale_message">
        <div className="presale_text">
          <h2>Airdrop</h2>
          <p>
            1% from the total supply, only for presale contributors. Hold at
            least 65% from the initial contribution. 30 Days after presale end.
          </p>
        </div>
        <div className="presales_timer">
          <div className="Presale_text_timer">
            <h3>PRESALE START IN</h3>
            <div className="Presale_timer">
              <span id="days"></span>
              <span id="hours"></span>
              <span id="minutes"></span>
              <span id="seconds"></span>
             
            </div>
            <div className="Presale_timer">
              
              <br /> <h2 className="realtime">Days</h2>
              <br /> <span className="realtime">Hours</span>
              <br /> <span className="realtime">Minutes</span>
              <br /> <span className="realtime">Seconds</span>
            </div>
            <button>Buy Presale</button>
          </div>
        </div>
      </div>
    </div>
  );
};
const PresaleArray = [
  { id: 1, heading: "START RATE", TEXT: "TBD" },
  { id: 2, heading: "TOTAL TOKENS", TEXT: "24,000,000 SMF" },
  { id: 3, heading: "START LIQUIDITY", TEXT: "12,000,000 SMF" },
  { id: 4, heading: "CURRENCY", TEXT: "BNB" },
  { id: 5, heading: "END DATE", TEXT: "TRD" },
  { id: 6, heading: "PRESALE RATE", TEXT: "1BNB-24,000 SMF" },
  { id: 7, heading: "LISTING RATE", TEXT: "17,143 SMF" },
  { id: 8, heading: "MIN/MAX RATE", TEXT: "0.1-5ANA" },
];

export default Presale;

