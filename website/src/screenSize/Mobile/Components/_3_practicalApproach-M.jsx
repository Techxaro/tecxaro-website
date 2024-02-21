// IMPORTING IMAGES
import esp32MobileVersion from  "../../../assets/png/mobile-version-esp32.png"


export const WhyChooseUs = () => {
  return (
    <div id="WCU-main">
        

        {/* THE WRAPPER */}
        <div id="WCU-wrapper">



            {/* WHY CHOOSE US HEADING */}
            <div className="">
                <h1>Why choose <span>Us ?</span></h1>
            </div>


            {/* WHY CHOOSE US FIRST PARAGRAPH */}
            <div>
                <p>In Tecxaro, we believe in learning by doing. Our approach is hands-on and practical, guiding you to create real-world projects using ESP32 boards. Skip traditional methods; join us to innovate and build with confidence in the exciting field of robotics.</p>
            </div>



            {/* SMALL ORANGE CIRCLE */}
            <div className="WCU-small-orange-circle">
            </div>



            {/* PRACTICAL APPROACH SUBHEADING */}
            <div>
                <h1>Practical <span>Approach</span></h1>
            </div>




            {/* ESP 32 IMAGE */}
            <div>
                <img src={esp32MobileVersion} alt="" />
            </div>
        </div>
    </div>
  )
}
