// IMPORTING ASSETS BELOW
import tecxaroLogo from "../../../assets/svg/tecxaro-logo.svg"

export const Navbar = () => {



// OPENS THE WEBSITE FOR FILLING UP PERSONAL INFO
const urlHandler = () => {
    window.open("https://tally.so/r/3lLPG5","_blank")
  }



    return (
        <div id="Nav-main" className=" shadow-xl">

            {/* WRAPPER DIV */}
            <div id="Nav-wrapper">





                {/* TECXARO LOGO */}
                <div className="Nav-tecxaroLogo-edit">
                    <img src={tecxaroLogo} alt="" />
                </div>





                {/* JOIN US BUTTON */}
                <a className="Nav-joinUs-button" onClick={urlHandler}>
                    <p className=" text-white font-semibold">Join <span className="color-orange">Us</span></p>
                </a>





            </div>
        </div>
    )
}
