import React from "react";
import "../styles/projects.css";

export default function Projects() {
  return (
    <div className="projCont">
      <div className="projBox">
        <a
          href="https://joeygitsit.github.io/teammatezTracker/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="card-img" src="images/fortnite.jpg" alt="Teammatez" />
        </a>
      </div>

      <div className="projBox">
        <a
          href="https://never-alone-platform.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="card-img"
            src="images/neveralone.png"
            alt="NeverAlone"
          />
        </a>
      </div>

      <div className="projBox">
        <a
          href="https://willg-note-taker.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="card-img"
            src="images/note-taker.png"
            alt="NoteTaker"
          />
        </a>
      </div>

      <div className="projBox">
        <a
          href="https://dynamic-budget.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="card-img" src="images/todolist.jpg" alt="TodoList" />
        </a>
      </div>

      <div className="projBox">
        <a
          href="https://dynamic-budget.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="card-img" src="images/budget.png" alt="Budget" />
        </a>
      </div>

      <div className="projBox">
        <a
          href="https://willgresham34.github.io/password-generator/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="card-img"
            src="images/password-gen.png"
            alt="PasswordGen"
          />
        </a>
      </div>
    </div>
  );
}
