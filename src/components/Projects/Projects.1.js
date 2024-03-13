import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import admindashboarrd from '../../Assets/Projects/new/admin.png';
import diabetes from '../../Assets/Projects/new/diabetes.png';
import firealarm from '../../Assets/Projects/new/fire.png';
import portfolio2 from '../../Assets/Projects/new/portfolio.png';
import employee_registration from '../../Assets/Projects/new/employee.png';
import movie_recom from '../../Assets/Projects/new/movie_recom.png';

export function Projects() {
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
                            ghLink="https://github.com/soumyajit4419/Chatify" />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={movie_recom}
                            isBlog={false}
                            title="Movie Recommendation System"
                            description="Engineered a sophisticated movie recommender using essential Python libraries. Leveraged scikit-learn for robust machine learning capabilities, pandas for efficient data manipulation, numpy for array operations, and pickle for serialization. "
                            ghLink="https://github.com/indra0421/Diabetes_Prediction-using-ML"
                            demoLink="https://movierecomendationsystem-cd87bius6dn7w5vgqzhkpq.streamlit.app/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={diabetes}
                            isBlog={false}
                            title="Diabetes Prediction using ML"
                            description="Created a diabetes prediction model in Python using SVM in Jupyter Notebook, achieving 78% accuracy. The project focuses on leveraging SVM's versatility for robust predictions, contributing to effective diabetes risk assessment."
                            ghLink="https://github.com/indra0421/Diabetes_Prediction-using-ML"
                            demoLink="https://diabetesprediction-using-ml-mnsnyh5jyzd28mbpfec44z.streamlit.app/" />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={portfolio2}
                            isBlog={false}
                            title="Portfolio wesbsite"
                            description="A personal portfolio website using React Js , CSS , Javascript. Deployed in Netlify.com"
                            ghLink="https://github.com/indra0421/React_portfolio_web"
                            demoLink="https://my-portfolio-app-indra0421.netlify.app/" />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={employee_registration}
                            isBlog={false}
                            title="Employee Registration App"
                            description="An employee/admin registration app using Node Js , EJS , Mongo DB. Deployed in render.com"
                            ghLink="https://employee-login-registration-app.onrender.com/"
                            demoLink="https://github.com/indra0421/employee_rgistration_App" />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={admindashboarrd}
                            isBlog={false}
                            title="Admin Dashboard"
                            description="Designed and developed a dynamic and modern Dashboard website with React.JS ,Material UI , Nivo Charts .Integrated interactive data visualization and charts for insightful analytics.Deployed on Netlify via GitHub Actions."
                            ghLink="https://github.com/soumyajit4419/AI_For_Social_Good" />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={emotion}
                            isBlog={false}
                            title="Face Recognition and Emotion Detection"
                            description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
                            ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection" />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
