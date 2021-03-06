import React from "react";
import Card from "./Card";
import Projects from "../projects.json";
import Fade from 'react-reveal/Fade';

function CardsContainer() {
  return (
    <>
      <div className="container mt-5 rounded bg-light">
        <div className="row">
          <div className="col">
            <h1 className="pt-3 pl-3">WHAT CAN I DO SO FAR?</h1>
            <hr />
            <div className="row mb-5 row-cols-1 row-cols-md-2">
                {
                  Projects.map(project => (
                    <Fade left>
                    <Card 
                    src={project.src}
                    alt ={project.alt}
                    title= {project.title}
                    repoLink= {project.repoLink}
                    deployedLink= {project.deployedLink}
                    description= {project.description}
                    techs = {project.techs}
                    guestAccount = {project.guestAccount}
                    />
                    </Fade>
                  ))
                }
            </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default CardsContainer;