// IMPORTING IMAGES BELOW
import aboutUsSectionImg from "../../../assets/jpg/mobile-version-AboutUs.jpg"



export const AboutSectionMobile = () => {
  return (
    <div id="ASM-main" className="mobile-main">



        {/* THE WRAPPER */}
        <div className="ASM-wrapper">
            
            
            
            {/* THE ORANGE CIRCLE */}
            <div className="ASM-big-orange-circle circle-z"></div>






            {/* ABOUT US SECTION IMAGE */}
            <div className=" normal-z mb-8">
                <img src={aboutUsSectionImg} alt="" />
            </div>







            {/* THE SMALL ORANGE CIRCLE */}
            <div className="ASM-small-orange-circle circle-z">
            </div>







            {/* ABOUT US HEADING */}
            <div className=" normal-z w-[100%] raleway mb-8">
                <h1 className=" ASM-aboutUs-headingSection font-semibold">About <span className="color-orange">Us</span></h1>
            </div>








            {/* ABOUT US PARAGRAPH */}
            <div className=" normal-z">
                <p className=" dmMono ASM-paragraphSection ">
                At Tecxaro, <span className=" text-orange-Bhighlight">we make learning exciting</span> and effective with a <span className="text-orange-highlight">simple</span> yet <span className="text-orange-highlight">impactful</span> approach prioritizing hands-on practical learning. True mastery comes from doing, so we immerse students in a world of touching, building, and experimenting with robotics. From crafting innovative projects to solving real-world problems, our hands-on approach ensures each lesson leaves a lasting mark. Join us to discover the joy of <span className="text-orange-highlight">learning through doing</span>, where theory meets practice, and your creativity flourishes. At Tecxaro, we 
                don&apos;t just teach – we empower you to create and innovate.
                </p>
            </div>

        </div>


    </div>
  )
}
