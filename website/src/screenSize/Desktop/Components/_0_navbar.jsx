

// CSS
import "../Pages/homePage.css"

// ASSETS
import tecxaroLogo from "../../../assets/svg/tecxaro-logo.svg"


export const Navbar = () => {
  return (
    <div id="Navbar" className=" drop-shadow-lg">




      {/* TECXARO LOGO */}
      <img src={tecxaroLogo} alt="the logo of tecxaro" className=" w-[9rem] ml-24" />






      {/* JOIN US BUTTON */}
      <div className="joinUs-navbar border-2 border-white px-7 py-3">


        <p className="poppins  text-[#F56B00] text-3xl font-extrabold">Join

          <span className=" text-white"> Us</span>

        </p>
      </div>





    </div>
  )
}
