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
          Harrison Highschool in Kennesaw, GA. I have had a love for all
          technology since I was a young kid and have always known I wanted to
          pursue a career in the field. I have recently completed a 12-week
          intense coding course through the Georgia Tech that pushed me harder
          then anything ever has. The course taught me a lot about coding, but
          also showed me what I can accomplish when I am determined.
        </p>
        <p>
          {" "}
          I am now in the hunt for a job using my new found Skills in Web
          Development. I am young and have a lot to learn, but this also means I
          can be shaped in to any type of developer a company needs. I am always
          willing to learn and that something I can say proudly as I look to
          continue my education at KSU in computer science.
        </p>
      </div>
      <div className="picCont">
        <img className="profPic" src="images/h1-v1.png" alt="profPic" />
      </div>
    </div>
  );
}
