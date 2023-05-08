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
            Software Engineer who loves to transform ideas into reality using
            code.
            <br />
            Motivated designer and developer with experience creating
            custom websites with ReactJs, JavaScript, HTML5, CSS3.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Learn to new Thinks
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing islamic Blog
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading to Book
            </li>
            <li className="about-activity">
              <ImPointRight /> playing Game
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
