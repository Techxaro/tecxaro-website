// IMPORTING IMAGES BELOW
// import innovationQuoteSvg from "../../../assets/svg/focusOnInnovation.svg"
import doubleQuotes from "../../../assets/svg/doubleQuotesMobileSvg.svg"


export const FocusOnInnovation = () => {
  return (
    <div id="FOI-M-main">


      {/* THE WRAPPER CLASS */}
      <div id="FOI-M-wrapper">


        {/* FOCUS ON INNOVATION SUBHEADING */}
        <div className=" w-[100%] raleway normal-z">
          <h1 className=" FOI-M-subheading font-semibold">Focus on <span>Innovation</span></h1>
        </div>



        {/* THE SMALL ORANGE CIRCLE */}
        <div className="FOI-M-small-orange-circle circle-z">
        </div>



        {/* IT ALWAYS SEEMS IMPOSSIBLE QUOTE */}
        <div className=" w-[100%] normal-z mt-6 mb-12">
          <div className=" FOI-M-impossibleQuote dmMono"> 
          <img className=" w-[1rem]" src={doubleQuotes} alt="" />
          <span>It Always</span>
          <span>Seems</span>
          <span className=" text-[3.2rem] color-orange">Impossible</span>
          <span>Until it&apos;s</span>
          <span className="FOI-M-orangeHighlight">Done</span>
          <img className=" w-[1.5rem]" src={doubleQuotes} alt="" />
           </div>
        </div>



        {/* THE PARAGRAPH FOR FOCUS ON INNOVATION SECTION */}
        <div className=" dmMono">
          <p className=" FOI-M-paragraph">Tecxaro fosters innovation by encouraging creative thinking and hands-on learning. We guide students to apply theoretical knowledge practically, cultivating a mindset of innovation. Our focus on real-world impact inspires the next generation of innovators, ready to bring positive change through robotics and technology. Join us in the journey of exploration and active innovation cultivation.
          </p>
        </div>




      </div>
    </div>
  )
}
