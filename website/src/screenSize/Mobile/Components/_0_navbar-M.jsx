// IMPORTING ASSETS BELOW
import tecxaroLogo from "../../../assets/svg/tecxaro-logo.svg"

export const Navbar = () => {
    return (
        <div id="Nav-main" className=" shadow-xl">

            {/* WRAPPER DIV */}
            <div id="Nav-wrapper">





                {/* TECXARO LOGO */}
                <div className="Nav-tecxaroLogo-edit">
                    <img src={tecxaroLogo} alt="" />
                </div>





                {/* JOIN US BUTTON */}
                <a className="Nav-joinUs-button">
                    <p className=" text-white font-semibold">Join <span className="color-orange">Us</span></p>
                </a>





            </div>
        </div>
    )
}
