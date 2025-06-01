import { Col, Container, Row } from "react-bootstrap";
import Negation from "../../Assets/Projects/Negation.png";
import Polysemy from "../../Assets/Projects/Polysemy.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
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
              imgPath={Polysemy}
              isBlog={false}
              title="Polysemy"
              description="I developed a polysemy model that maps multiple meanings of a word by analyzing semantic similarity in context. Using deep-learning techniques, I dynamically distinguish nuanced interpretations, enhancing lexical understanding while maintaining flexibility for broader language patterns.
"
              ghLink="https://github.com/imrishabhyadav/NLP-Polysemy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Negation}
              isBlog={false}
              title="Negation Detection and Sentiment Analysis"
              description="This project focuses on detecting negation in text and analyzing sentiment. It uses natural language processing techniques to identify negation phrases and their impact on sentiment, providing insights into how negation alters the meaning of statements."
              ghLink="https://github.com/imrishabhyadav/Negation-Detection/blob/main/Negation_Detection_and_Sentiment_Analysis.ipynb"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
