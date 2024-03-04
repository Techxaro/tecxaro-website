


// IMPORTING ASSETS
import aboutUsImg from "../../../assets/jpg/aboutUsImage.jpg"


export const AboutUs = () => {
  return (
    <div id="AboutUs-section-homePage-D">


      <div className=" mb-14 contentWrapper-aboutUs-D">


        {/* text wrapper div */}
        <div id="text-wrapper-aboutUs-D">



          {/* HEADING [ ABOUT US ] */}
          <div id="heading-aboutUs-D" className=" text-8xl raleway font-semibold">

            <h1 className=" text-[#F56B00] mb-12">About
              <span className=" text-white"> us</span></h1>
          </div>




          {/* WRITING ABOUT US */}
          <div>

            <p className=" dmMono para1-aboutUs-D">At Tecxaro, <span className=" text-white bg-[#F56B00] px-2">we make learning exciting</span> and effective with a
              <span className=" text-[#F56B00] text-2xl"> simple</span> yet <span className=" text-[#F56B00] text-2xl">impactful</span> approach: prioritizing hands-on practical learning. True mastery comes from doing, so we immerse students in a world of touching, building, and experimenting with robotics. From crafting innovative projects to solving real-world problems, our hands-on approach ensures each lesson leaves a lasting mark. Join us to discover the joy of <span className=" text-[#F56B00] text-2xl">learning through doing</span>, where theory meets practice, and your creativity flourishes. At Tecxaro, we don&apos;t just teach – we empower you to create and innovate.</p>
          </div>
        </div>




        {/* THE IMAGE IN THE ABOUT US SECTION */}
        <div className=" w-[90%] flex justify-end items-center">
          <img className="AU-D-imgEdit" src={aboutUsImg} alt="our working desk" />
        </div>






      </div>

    </div>
  )
}
