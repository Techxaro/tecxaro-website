

// CSS
import "../Pages/homePage.css"

// ASSETS
import tecxaroLogo from "../../../assets/svg/tecxaro-logo.svg"


export const Navbar = () => {
  return (
    <div id="Navbar" className=" shadow-xl">




      {/* TECXARO LOGO */}
      <img src={tecxaroLogo} alt="the logo of tecxaro" className="N-D-tecxaro-logo" />






      {/* JOIN US BUTTON */}
      <div className="joinUs-navbar border-2 border-white px-7">


        <p className="poppins  text-[#F56B00] font-extrabold">Join

          <span className=" text-white"> Us</span>

        </p>
      </div>





    </div>
  )
}
