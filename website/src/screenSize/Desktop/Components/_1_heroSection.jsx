// ASSETS
import mouse from "../../../assets/svg/mouse.svg"
import downArrow from "../../../assets/svg/downArrow.svg"


// CSS
import "../Pages/homePage.css"


export const HeroSection = () => {
  return (
    <div id="HeroSection" className=" drop-shadow-lg">


      {/* THE MAIN BIG BOLD WRITING */}
      <div className=" raleway text-white mb-[12rem] font-medium flex flex-col justify-center items-center">


        {/* FIRST LINE */}
        <h1 className="heroSection-main-highlight">

          Discover <span className=" text-[#F56B00] font-bold">robotics</span> through</h1>


        {/* SECOND LINE */}
        <h1 className="heroSection-main-highlight mb-4">

          easy <span className=" text-[#F56B00] font-bold">practical</span> lessons </h1>




        {/* THE SMALL BOLD WRITING  */}



        {/* THE SMALL LINES SUBS */}
        <p className=" poppins font-semibold text-xl w-[61rem]">

          Join us on a pathway to excellence, where
          <span className=" text-[#F56B00] font-bold"> practical </span>,
          <span className=" text-[#F56B00] font-bold"> technical </span>and
          <span className=" text-[#F56B00] font-bold"> experiential learning </span>
          converge to shape your skills and empower your mind for real-world success.</p>


      </div>




      





      {/* THE SMALL SVG ANIMATION TO SCROLL */}
      <div id="scrolling-down-animation-hero-section" className=" absolute bottom-8">

          <img src={mouse} alt="" className="" />
          <img src={downArrow} alt="" className=" animate-bounce relative top-4" />

      </div>


    </div>
  )
}
