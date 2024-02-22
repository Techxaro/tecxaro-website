// IMPORTING THE IMAGE BELOW
import xLogoOfTecxaro from "../../../assets/svg/whiteX.svg"
// import innovationOrangeBoxQuote from "../../../assets/svg/solvingRealWorldProblemsQuote.svg"


export const SolvingRealWorldProblems = () => {
  return (
    <div id="SRWP-M-main">

      {/* THE WRAPPER FOR THIS SECTION */}
      <div id="SRWP-M-wrapper">


        {/* THE X LOGO OF TECXARO */}
        <div className=" w-[100%] flex justify-end">
          <img src={xLogoOfTecxaro} alt="" />
        </div>



        {/* THE HEADING SOLVING REAL WORLD PROBLEMS WITH INNOVATING SOLUTIONS */}
        <div className="SRWP-M-orangeBox-quote dmMono font-semibold">
          <span className=" SRWP-M-orangeBox-smallText">solving</span>
          <span className=" SRWP-M-orangeBox-mediumText">Real World Problems</span>
          <span className=" SRWP-M-orangeBox-smallText flex justify-end">with</span>

          <span className=" SRWP-M-orangeBox-mediumText flex justify-end ">
            <p className=" SRWP-M-orangeBox-whiteHighlighted-text">Innovating</p></span>

          <span className=" SRWP-M-orangeBox-smallText">solutions</span>
        </div>



        {/* THE JOIN US BUTTON */}
        <div className="SRWP-M-joinUs-button-wrapper mt-4 mb-14">
          <div className=" SRWP-M-joinUs-button raleway font-semibold">
            <p>Join <span className=" color-orange">Us</span></p>
          </div>
        </div>

      </div>
    </div>
  )
}
