// IMPORTING IMAGES
import esp32MobileVersion from  "../../../assets/png/mobile-version-esp32.png"


export const WhyChooseUs = () => {
  return (
    <div id="WCU-main">
        

        {/* THE WRAPPER */}
        <div id="WCU-wrapper">



            {/* WHY CHOOSE US HEADING */}
            <div className="raleway WCU-M-heading font-semibold mb-6">
                <h1>Why choose <span className=" color-orange">Us ?</span></h1>
            </div>


            {/* WHY CHOOSE US FIRST PARAGRAPH */}
            <div className=" WCU-M-firstParagraph mb-6 normal-z">
                <p className=" dmMono">In Tecxaro, we believe in <span className="text-orange-highlight">learning by doing</span>. Our approach is <span className=" text-orange-Bhighlight">hands-on</span> and practical, guiding you to create real-world projects using ESP32 boards. Skip traditional methods; join us to innovate and build with confidence in the exciting field of robotics.</p>
            </div>



            {/* SMALL ORANGE CIRCLE */}
            <div className="WCU-small-orange-circle circle-z">
            </div>



            {/* PRACTICAL APPROACH SUBHEADING */}
            <div className=" w-[100%] WCU-M-practicalApproach-subHeading raleway font-semibold mb-4 normal-z">
                <h1>Practical <span className=" color-orange">Approach</span></h1>
            </div>




            {/* ESP 32 IMAGE */}
            <div className=" normal-z">
                <img src={esp32MobileVersion} alt="" />
            </div>
        </div>
    </div>
  )
}
