import { ProjectCard } from "./_7.1_projectCard"

// IMPORTING IMAGES BELOW
import project1Img from "../../../assets/jpg/tecxaroProjectDummyImg.jpg"
import tecxaroXSvgLogo from "../../../assets/svg/whiteX.svg"
import projectImg_HomeAutomation from "../../../assets/Project_images/homeAutomation.jpg"
import projectImg_Drone from "../../../assets/Project_images/drone2.jpg"
import projectImg_IntelliHolder from "../../../assets/Project_images/intelliHolder.jpg"





export const OurProjectSection = () => {

  // HEADINGS FOR THE PROJECTS
  let proj1Heading = "Line Follower"


  // PARAGRAPHS FOR THE PROJECTS
  let proj_HomeAutomation = "Simplify your life with our Home Automation System. Effortless control, intuitive design, and seamless integration bring comfort, security, and convenience to your home—all at the touch of a button."


  let proj_Drone = "Experience flight reimagined with our FPV Drone. Seamless control, real-time video, and a sleek, durable design make every moment in the sky both exhilarating and effortlessly beautiful.";
  

  let proj_IntelliHolder = "Meet Intelliholder: the intelligent identity card. With built-in GPS tracking, it redefines safety, giving guardians real-time location updates and peace of mind—all in a sleek, modern design."







  return (
    <div id="OPS-M-main" className=" mt-24">


      {/* THE WRAPPER FOR THIS PART */}
      <div id="OPS-M-wrapper">










        {/* HEADING FOR OUR PROJECTS */}
        <div className="OPS-M-headingSection mb-2 normal-z">
          <h1 className=" raleway font-semibold">Our <span className=" color-orange">Projects</span></h1>
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
          <ProjectCard img={projectImg_Drone} projHeading="FPV Drone" projPara={proj_Drone} />

          {/* TECXARO WHITE X LOGO */}
          <div className="OPS-M-proj1-X-logo">
            <img className="x" src={tecxaroXSvgLogo} alt="" />
          </div>







          {/* THE SMALL ORANGE CIRCLE PROJECT 1 */}
          <div className="OPS-M-smallOrange-circle-Project1 circle-z">
          </div>






          {/* PROJECT 2 CARD */}
          <ProjectCard img={projectImg_HomeAutomation} projHeading="Home Automation" projPara={proj_HomeAutomation} />

          {/* TECXARO WHITE X LOGO */}
          <div className="OPS-M-proj1-X-logo">
            <img className="x" src={tecxaroXSvgLogo} alt="" />
          </div>







          {/* THE SMALL ORANGE CIRCLE PROJECT 2 */}
          <div className="OPS-M-smallOrange-circle-Project2 circle-z">
          </div>





          {/* PROJECT 3 CARD */}
          <ProjectCard img={projectImg_IntelliHolder} projHeading="Intelli Holder" projPara={proj_IntelliHolder} />

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
