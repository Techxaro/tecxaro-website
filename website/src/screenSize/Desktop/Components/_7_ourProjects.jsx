// IMPORTING PROJECT IMAGES
import projectImg from "../../../assets/jpg/tecxaroProjectDummyImg.jpg"


export const ProjectsSection = () => {
  return (
    <div id="PS-main">



      <div id="PS-wrapper">


        {/* OUR PROJECTS HEADING */}
        <div className="text-8xl raleway font-semibold mb-20">
          <h1 className=" text-white PS-heading">Our <span className=" color-orange">Projects</span></h1>
        </div>


        {/* WRAPPER AROUND THE THREE CARDS ABOUT OUR PROJECTS */}
        <div className="PS-wrapper-project-cards">








          {/* CARD 1 */}
          <div className="PS-project-card-main">

            {/* PROJECT IMAGE */}
            <img className="PS-projectImg-edit" src={projectImg} alt="" />


            {/* TEXT HEADING */}
            <div className=" flex w-[100%] raleway text-3xl font-semibold my-4">
              <h1 className="">Line Follower</h1>
            </div>



            {/* TEXT */}
            <div className=" dmMono PS-project-card-para">
              <p>A line follower project makes a robot follow marked paths using sensors to detect lines and adjust its movement. It showcases basic autonomous navigation through sensor integration and programming.</p>
            </div>


            {/* THE LEARN MORE BUTTON */}
            <div className=" flex w-[100%] justify-end">
              <div className="PS-project-card-learnMore-button text-2xl px-2 py-2">
                Learn More
              </div>
            </div>


          </div>









          {/* CARD 2 */}
          <div className="PS-project-card-main">

            {/* PROJECT IMAGE */}
            <img className="PS-projectImg-edit" src={projectImg} alt="" />


            {/* TEXT HEADING */}
            <div className=" flex w-[100%] raleway text-3xl font-semibold my-4">
              <h1 className="">Line Follower</h1>
            </div>



            {/* TEXT */}
            <div className=" dmMono PS-project-card-para">
              <p>A line follower project makes a robot follow marked paths using sensors to detect lines and adjust its movement. It showcases basic autonomous navigation through sensor integration and programming.</p>
            </div>


            {/* THE LEARN MORE BUTTON */}
            <div className=" flex w-[100%] justify-end">
              <div className="PS-project-card-learnMore-button text-2xl px-2 py-2">
                Learn More
              </div>
            </div>


          </div>









          {/* CARD 3 */}
          <div className="PS-project-card-main">

            {/* PROJECT IMAGE */}
            <img className="PS-projectImg-edit" src={projectImg} alt="" />


            {/* TEXT HEADING */}
            <div className=" flex w-[100%] raleway text-3xl font-semibold my-4">
              <h1 className="">Line Follower</h1>
            </div>



            {/* TEXT */}
            <div className=" dmMono PS-project-card-para">
              <p>A line follower project makes a robot follow marked paths using sensors to detect lines and adjust its movement. It showcases basic autonomous navigation through sensor integration and programming.</p>
            </div>


            {/* THE LEARN MORE BUTTON */}
            <div className=" flex w-[100%] justify-end">
              <div className="PS-project-card-learnMore-button text-2xl px-2 py-2">
                Learn More
              </div>
            </div>


          </div>



        </div>
      </div>
    </div>
  )
}
