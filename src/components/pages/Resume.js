import React from "react";
import "../styles/resume.css";

export default function Projects() {
  return (
    <div className="resCont">
      <h1 className="header"> Resume and Skills</h1>
      <div className="listCont">
        <div className="list">
          <h2> Front-end</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Handlebars</li>
            <li>JSX</li>
            <li>React</li>
          </ul>
          <h2> Back-end</h2>
          <ul>
            <li>JavaScript</li>
            <li>Node.Js</li>
            <li>Express</li>
            <li>MonogoDb</li>
            <li>MySQL</li>
            <li>GraphQL</li>
          </ul>
        </div>
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vRHJH2J-QsXTHz-RObrnUiG5zvc28GJy4v65zazW3YvCUYRYPJjLpPUH-BYRwW8XfBFds_Iwlyb200e/pub?embedded=true"
          title="myResume"
        ></iframe>
      </div>
    </div>
  );
}
