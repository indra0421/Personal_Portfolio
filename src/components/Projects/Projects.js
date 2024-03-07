import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

import chatapp from '../../Assets/Projects/new/chat.png'
import movieapp from '../../Assets/Projects/new/movie.png'
import admindashboarrd from '../../Assets/Projects/new/admin.png'
import diabetes from '../../Assets/Projects/new/diabetes.png'
import netflix from '../../Assets/Projects/new/netflix.png'
import todolist from '../../Assets/Projects/new/todolist.png'
// import weather from '../../Assets/Projects/new/weather.png'
import firealarm from '../../Assets/Projects/new/fire.png'
import portfolio2 from '../../Assets/Projects/new/portfolio.png'
import employee_registration from '../../Assets/Projects/new/employee.png'

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
              imgPath={firealarm}
              isBlog={false}
              title="Fire Alert Pro+ (Ongoing)"
              description="The project fuses IoT and ML for fire detection using sensors and cameras. Machine learning analyzes data, triggering notifications through messages or calls. Challenges include optimizing image uploads without constant internet, managing internet dependency for notifications, and addressing power and recharge issues with the GSM module."
              ghLink="https://github.com/soumyajit4419/Chatify"
            // demoLink="https://diabetesprediction-using-ml-mnsnyh5jyzd28mbpfec44z.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diabetes}
              isBlog={false}
              title="Diabetes Prediction using ML"
              description="Created a diabetes prediction model in Python using SVM in Jupyter Notebook, achieving 78% accuracy. The project focuses on leveraging SVM's versatility for robust predictions, contributing to effective diabetes risk assessment."
              ghLink="https://github.com/indra0421/Diabetes_Prediction-using-ML"
              demoLink="https://diabetesprediction-using-ml-mnsnyh5jyzd28mbpfec44z.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio2}
              isBlog={false}
              title="Portfolio wesbsite"
              description="A personal portfolio website using React Js , CSS , Javascript. Deployed in Netlify.com"
              ghLink="https://github.com/indra0421/React_portfolio_web"
              demoLink="https://my-portfolio-app-indra0421.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={employee_registration}
              isBlog={false}
              title="Employee Registration App"
              description="An employee/admin registration app using Node Js , EJS , Mongo DB. Deployed in render.com"
              ghLink="https://github.com/indra0421/employee_rgistration_App"
              demoLink="https://employee-login-registration-app.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={admindashboarrd}
              isBlog={false}
              title="Admin Dashboard"
              description="Designed and developed a dynamic and modern Dashboard website with React.JS ,Material UI , Nivo Charts .Integrated interactive data visualization and charts for insightful analytics.Deployed on Netlify via GitHub Actions."
              ghLink="https://github.com/indra0421/Admin_dashboard"
              demoLink="https://admin-dashboard-21.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movieapp}
              isBlog={false}
              title="Movie app using React Native"
              description="Created a Mobile Application using React Native for Android platforms. Implemented features to display movie information, such as Titles,Descriptions, Ratings sourced from an API."
              ghLink="https://github.com/indra0421/movieApp_React_Native"
              demoLink="https://drive.google.com/file/d/1Jpqnwc3fCQLh22zBRGpFL0fa0Yeq24sN/view"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatapp}
              isBlog={false}
              title="Real time Chat App"
              description="A realtime chat app  built with React JS, CSS and Socket.io."
              ghLink="https://github.com/indra0421/Realtime_chat_app_frontend"
              demoLink="https://ichat-app-0421.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todolist}
              isBlog={false}
              title="To Do List"
              description="A simple todo app made using React JS,Css and deployed on Github"
              ghLink="https://indra0421.github.io/simple_todo_app"
              demoLink="https://github.com/indra0421/simple_todo_app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix"
              description="Created a Mobile Application using React Native for Android platforms. Implemented features to display movie information, such as Titles,Descriptions, Ratings sourced from an API."
              ghLink="https://indra0421.github.io/netflix_clone"
              demoLink="https://github.com/indra0421/netflix_clone"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Netflix"
              description="Created a Mobile Application using React Native for Android platforms. Implemented features to display movie information, such as Titles,Descriptions, Ratings sourced from an API."
              ghLink="https://github.com/indra0421/weather_app_VAT"
              demoLink="https://weather-app-project-01.netlify.app/"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
