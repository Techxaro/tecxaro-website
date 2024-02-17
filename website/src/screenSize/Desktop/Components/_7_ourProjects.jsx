// IMPORTING PROJECT IMAGES
import projectImg from "../../../assets/jpg/tecxaroProjectDummyImg.jpg"


export const ProjectsSection = () => {
  return (
    <div id="PS-main">



      <div id="PS-wrapper">
        {/* OUR PROJECTS HEADING */}
        <div className="text-8xl raleway font-semibold mb-20">
          <h1 className=" text-white">Our <span className=" color-orange">Projects</span></h1>
        </div>


        {/* WRAPPER AROUND THE THREE CARDS ABOUT OUR PROJECTS */}
        <div>



          {/* CARD 1 */}
          <div>

              {/* PROJECT IMAGE */}
              <img className="PS-projectImg-edit" src={projectImg} alt="" />



              {/* TEXT */}
              <div>
                <p>A line follower project makes a robot follow marked paths using sensors to detect lines and adjust its movement. It showcases basic autonomous navigation through sensor integration and programming.</p>
              </div>


              {/* THE LEARN MORE BUTTON */}


          </div>


          {/* CARD 2 */}
          <div>

          </div>


          {/* CARD 3 */}
          <div>

          </div>



        </div>
      </div>
    </div>
  )
}
