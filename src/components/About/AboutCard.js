import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sheik Abdulla </span>
            from <span className="purple"> Trichy,Tamilnadu,India</span>
            <br />
            I am a Software Engineer who loves to transform ideas into reality using code. 
            <br />
            motivated full stack developer with experience creating custom websites using ReactJS, Node JS, MySQL, Sequelize, MongoDB , JavaScript, HTML5, and CSS3.
            <br />
            Apart from coding, I enjoy engaging in various other activities!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Content Created
            </li>
            <li className="about-activity">
              <ImPointRight /> Youtuber
            </li>
            <li className="about-activity">
              <ImPointRight /> Motivational Speaker
            </li>
            <li className="about-activity">
              <ImPointRight /> Video & image Editor
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
