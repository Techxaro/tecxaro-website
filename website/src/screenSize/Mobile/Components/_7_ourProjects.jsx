import { ProjectCard } from "./_7.1_projectCard"

// IMPORTING IMAGES BELOW

import project1Img from "../../../assets/jpg/tecxaroProjectDummyImg.jpg"




export const OurProjectSection = () => {

  // HEADINGS FOR THE PROJECTS
  let proj1Heading = "Line Follower"


  // PARAGRAPHS FOR THE PROJECTS
  let proj1Para = "A line follower project makes a robot follow marked paths using sensors to detect lines and adjust its movement. It showcases basic autonomous navigation through sensor integration and programming."








  return (
    <div id="OPS-M-main">


      {/* THE WRAPPER FOR THIS PART */}
      <div id="OPS-M-wrapper">


        {/* HEADING FOR OUR PROJECTS */}
        <div>
          <h1></h1>
        </div>

        {/* OUR PROJECTS SUBTILE 2 SMALL LINES BELOW THE HEADING PART */}



        {/* THE SMALL ORANGE CIRCLE */}



        <div id="OPS-M-projectCardWrapper">
          {/* PROJECT 1 CARD */}
          <ProjectCard img={project1Img} projHeading="Line Follower" projPara={proj1Para}/>


          {/* PROJECT 2 CARD */}
          <ProjectCard img={project1Img} projHeading={proj1Heading} projPara={proj1Para}/>


          {/* PROJECT 3 CARD */}
          <ProjectCard img={project1Img} projHeading={proj1Heading} projPara={proj1Para}/>
        </div>


        {/* TECXARO WHITE X LOGO */}




        {/* THE SMALL ORANGE CIRCLE */}








        {/* THE TECXARO X LOGO */}




        {/* THE SMALL ORANGE CIRCLE */}







        {/* THE TECXARO X LOGO */}
      </div>
    </div>
  )
}
