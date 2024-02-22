// IMPORTIN THE COMPONENTS HERE


// IMPORTING THE CSS HERE
import { Navbar } from "../Components/_0_navbar-M"
import { HeroSectionMobile } from "../Components/_1_heroSection-M"
import { AboutSectionMobile } from "../Components/_2_aboutUs-M"
import { WhyChooseUs } from "../Components/_3_practicalApproach-M"
import { TailouredForYou } from "../Components/_4_tailouredForYou"
import { FocusOnInnovation } from "../Components/_5_focusOnInnovation"
import "./homePageMobile.css"



export const HomePageMobile = () => {
    return (
        <div id="homePage-mobile-main"> 
            <Navbar/>
            <HeroSectionMobile/>
            <AboutSectionMobile/>
            <WhyChooseUs/>
            <TailouredForYou/>
            <FocusOnInnovation/>
        </div>
    )   
}                                           
