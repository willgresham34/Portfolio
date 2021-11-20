import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { init, sendForm } from "emailjs-com";
import "../styles/contact.css";

init("user_93qeCJbA83ZHxmE0iP2Zd");

export default function Contact() {
  const [contactNumber, setContactNumber] = useState("000000");

  const generateContactNumber = () => {
    const numStr = "000000" + ((Math.random() * 1000000) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    generateContactNumber();

    sendForm(
      "portfolio_contact_form",
      "template_qbjcpdp",
      "#contact-form"
    ).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  };
  return (
    <div className="cont">
      <div>
        <h1 className="formHead"> Contact me!</h1>
        <form
          className="contForm"
          id="contact-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            {...register("user_name", { required: true })}
            placeholder="Name"
          />
          <br />
          <input
            type="email"
            {...register("user_email", { required: true })}
            placeholder="Email"
          />
          <br />
          <textarea
            {...register("message", { required: true })}
            placeholder="Message"
          />
          <br />
          <input type="hidden" name="contact_number" value={contactNumber} />
          <input className="sendBtn" type="submit" value="Send" />
        </form>
      </div>
      <div className="iconCont">
        <div className="iconBox">
          <a
            href="https://www.linkedin.com/in/will-gresham-060594214/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="card-img"
              src="images/linkedin.png"
              alt="TodoList"
            />
          </a>
        </div>

        <div className="iconBox">
          <a
            href="https://github.com/willgresham34"
            target="_blank"
            rel="noreferrer"
          >
            <img className="card-img" src="images/github.png" alt="Budget" />
          </a>
        </div>

        <div className="iconBox">
          <a
            href="https://www.youtube.com/channel/UCFKPaA6nTqCyzPdJxS-u9mg"
            target="_blank"
            rel="noreferrer"
          >
            <img className="card-img" src="images/yt.png" alt="PasswordGen" />
          </a>
        </div>
      </div>
    </div>
  );
}
