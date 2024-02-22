import { ProjectCard } from "./_7.1_projectCard"

// IMPORTING IMAGES BELOW
import project1Img from "../../../assets/jpg/tecxaroProjectDummyImg.jpg"
import tecxaroXSvgLogo from "../../../assets/svg/whiteX.svg"




export const OurProjectSection = () => {

  // HEADINGS FOR THE PROJECTS
  let proj1Heading = "Line Follower"


  // PARAGRAPHS FOR THE PROJECTS
  let proj1Para = "A line follower project makes a robot follow marked paths using sensors to detect lines and adjust its movement. It showcases basic autonomous navigation through sensor integration and programming."








  return (
    <div id="OPS-M-main" className=" mt-24">


      {/* THE WRAPPER FOR THIS PART */}
      <div id="OPS-M-wrapper">










        {/* HEADING FOR OUR PROJECTS */}
        <div className="OPS-M-headingSection mb-2 normal-z">
          <h1 className=" raleway font-semibold">Our <span>Projects</span></h1>
        </div>





        {/* OUR PROJECTS SUBTILE 2 SMALL LINES BELOW THE HEADING PART */}
        <div className=" OPS-M-subtitleSection mb-16 normal-z">
          <p className=" dmMono">Our Project that our students have built have been showcased below .</p>
        </div>




        {/* THE SMALL ORANGE CIRCLE */}
        <div className=" OPS-M-smallOrange-circle circle-z">
        </div>








        {/* THE PROJECT CARDS WRAPPER */}
        <div id="OPS-M-projectCardWrapper">








          {/* PROJECT 1 CARD */}
          <ProjectCard img={project1Img} projHeading="Line Follower" projPara={proj1Para} />

          {/* TECXARO WHITE X LOGO */}
          <div className="OPS-M-proj1-X-logo">
            <img className="x" src={tecxaroXSvgLogo} alt="" />
          </div>







          {/* THE SMALL ORANGE CIRCLE PROJECT 1 */}
          <div className="OPS-M-smallOrange-circle-Project1 circle-z">
          </div>

          {/* PROJECT 2 CARD */}
          <ProjectCard img={project1Img} projHeading={proj1Heading} projPara={proj1Para} />

          {/* TECXARO WHITE X LOGO */}
          <div className="OPS-M-proj1-X-logo">
            <img className="x" src={tecxaroXSvgLogo} alt="" />
          </div>







          {/* THE SMALL ORANGE CIRCLE PROJECT 2 */}
          <div className="OPS-M-smallOrange-circle-Project2 circle-z">
          </div>
          {/* PROJECT 3 CARD */}
          <ProjectCard img={project1Img} projHeading={proj1Heading} projPara={proj1Para} />

          {/* TECXARO WHITE X LOGO */}
          <div className="OPS-M-proj1-X-logo">
            <img className="x" src={tecxaroXSvgLogo} alt="" />
          </div>
        </div>

















        {/* THE SMALL ORANGE CIRCLE */}
        <div className="OPS-M-smallOrange-circle">
        </div>


















        {/* THE SMALL ORANGE CIRCLE */}













      </div>
    </div>
  )
}
