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
          <h1 className=" FOI-M-subheading font-semibold">Focus on <span className=" color-orange">Innovation</span></h1>
        </div>



        {/* THE SMALL ORANGE CIRCLE */}
        <div className="FOI-M-small-orange-circle circle-z">
        </div>



        {/* IT ALWAYS SEEMS IMPOSSIBLE QUOTE */}
        <div className=" w-[100%] normal-z mt-12 mb-14 relative">

          <div className=" FOI-M-impossibleQuote dmMono pl-4">

            <img className=" w-[1rem] FOI-M-doubleQuote1" src={doubleQuotes} alt="" />

            <span>It Always</span>
            <span>Seems</span>
            <span className=" text-[3.2rem] color-orange">Impossible</span>
            <span>Until it&apos;s</span>
            <span className="FOI-M-orangeHighlight">Done</span>

            <img className=" w-[1rem] FOI-M-doubleQuote2" src={doubleQuotes} alt="" />

          </div>
        </div>



        {/* THE PARAGRAPH FOR FOCUS ON INNOVATION SECTION */}
        <div className=" dmMono">
          <p className=" FOI-M-paragraph">Tecxaro fosters <span className=" text-orange-highlight">innovation</span> by encouraging creative thinking and hands-on learning. We guide students to <span className=" text-orange-Bhighlight">apply theoretical knowledge practically</span>, cultivating a mindset of innovation. Our focus on <span className=" text-orange-highlight">real-world impact</span> inspires the next generation of innovators, ready to bring positive change through robotics and technology. Join us in the journey of exploration and active innovation cultivation.
          </p>
        </div>




      </div>
    </div>
  )
}
