import React from "react";
import "../styles/aboutme.css";

export default function AboutMe() {
  return (
    <div className="profCont">
      <div className="content abtMe">
        <h2 className="abtMeHeader">About Me</h2>
        <p>
          {" "}
          Hi my name is Will Gresham, I am 18 year who recently graduated from
          Harrison Highschool in Kennesaw, GA. I have had a love for anything
          and everything computer since I built my first computer in 7th grade.
          Since then I have gone on to learn many things about hardware and
          software.
        </p>
        <p>
          {" "}
          My next challenge I am currently facing is completing the Georgia Tech
          coding boot camp. I am using this experience to really push myself and
          see what I can learn and take away from this. My goal is to use the
          knowledge I gain from this course to get an entry level job to help
          pay for my college going forward.
        </p>
      </div>
      <div className="picCont">
        <img className="profPic" src="images/h1-v1.png" alt="profPic" />
      </div>
    </div>
  );
}
