

// IMPORTING IMAGES HERE
import esp32Img from "../../../assets/png/esp32Img.png"


export const PracticalApproach = () => {
  return (
    <div id="practicalApproach-section-homePage-D">






      <div id="wrapper-practicalApproach-section-homePage">



        {/* WHY CHOOSE US */}

        <div id="practicalApproach-whyChooseUs" className="text-8xl raleway font-semibold mb-20">

          <h1 className=" text-white">Why choose
            <span className="text-[#F56B00]"> Us ?</span></h1>

        </div>







        {/* PARAGRAPH 1 SMALL */}
        <div id="practicalApproach-smallPara1">

          <p className=" dmMono para1-aboutUs-D">At Tecxaro, In Tecxaro, we believe in learning by doing. Our approach is hands-on and practical, guiding you to create real-world projects using ESP32 boards. Skip traditional methods; join us to innovate and build with confidence in the exciting field of robotics.</p>

        </div>






        {/* PRACTICAL APPROACH */}
        <div id="practicalApproach-heading" className=" mb-12">

          <h1 className=" practicalApproach-subHeading raleway font-semibold">
            <span className=" text-[#F56B00]"
            >Practical</span> Approach</h1>

        </div>






        {/* THE ORANGE SVG THINGY */}
        <div id="practicalApprach-orangeSvgThingy">



        </div>







        {/* THE WHITE SVG LINE */}
        <div id="practicalApproach-whiteSvgLine">



        </div>




        {/* PARAGRAPH 2 */}
        <div className=" w-[100%] flex justify-between flex-row-reverse">
          <div id="practicalApproach-paragraph2">

            <p className=" dmMono para1-aboutUs-D">The ESP32, a versatile microcontroller, excels in wireless applications with support for Wi-Fi and Bluetooth. Its dual-core processor, rich peripherals, and Arduino compatibility make it a preferred choice. With energy efficiency for battery-powered use, it&apos;s ideal for diverse projects. As an open-source platform, the ESP32 encourages collaboration and rapid prototyping in electronics and IoT, combining affordability with ease of use.</p>

          </div>
       





        {/* ESP 32 DRAWING */}
        <div id="practicalApproach-esp32img" >

            <img  src={esp32Img} alt="esp 32 image with markings" />

        </div>
        </div>





      </div>

    </div>
  )
}
