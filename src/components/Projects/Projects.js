import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import newsLogo from "../../Assets/Projects/newslogo.png";
import spotifyLogo from "../../Assets/Projects/spotifylogo.png";
import textutilsLogo from "../../Assets/Projects/textutilslogo.png";

function Projects() {
  return (
    <Container fluid className="project-section" id="project">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newsLogo}
              isBlog={false}
              title="News-App"
              description="A news application is a big interactive database that tells a news story. Think of it like you would any other piece of journalism. It just uses software instead of words and pictures. 
              I have created this news app using fetch api which is free of cost available. It will help you to know the current world affairs"
              ghLink="https://github.com/exc-indresh/News-App"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textutilsLogo}
              isBlog={false}
              title="TextUtils-App"
              description="TextUtils is basically an text tool which helps us to customize/manipulate the text. It have many functionality to deal with a word or a sentence. I have made this app  using ReactJS (framework)."
              ghLink="https://github.com/exc-indresh/TextUtils-App"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotifyLogo}
              isBlog={false}
              title="Spotify-Clone"
              description="Music expresses that which cannot be put into words and that which cannot remain silent.
              I have created this music-app/Spotify-Clone using pure HTML CSS and Javascript. Since i have created it very early so it has associated with some issues. And also you can only listen musics that currently in the page. "
              ghLink="https://github.com/exc-indresh/spotify-clone"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
