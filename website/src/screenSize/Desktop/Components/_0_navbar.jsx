

// CSS
import "../Pages/homePage.css"

// ASSETS
import tecxaroLogo from "../../../assets/svg/tecxaro-logo.svg"


export const Navbar = () => {


  // OPENS THE WEBSITE FOR FILLING UP PERSONAL INFO
  const urlHandler = () => {
    window.open("https://sprw.io/stt-lmC3P","_blank")
  }




  return (
    <div id="Navbar" className=" shadow-xl">




      {/* TECXARO LOGO */}
      <img src={tecxaroLogo} alt="the logo of tecxaro" className="N-D-tecxaro-logo" />






      {/* JOIN US BUTTON */}
      <div onClick={urlHandler} className="joinUs-navbar border-2 border-white px-7 cursor-pointer">


        <p className="poppins  text-[#F56B00] font-extrabold">Join

          <span className=" text-white"> Us</span>

        </p>
      </div>





    </div>
  )
}
