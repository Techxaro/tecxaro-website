// IMPORTIN THE COMPONENTS HERE


// IMPORTING THE CSS HERE
import { Navbar } from "../Components/_0_navbar-M"
import { HeroSectionMobile } from "../Components/_1_heroSection-M"
import "./homePageMobile.css"



export const HomePageMobile = () => {
    return (
        <div id="homePage-mobile-main"> 
            <Navbar/>
            <HeroSectionMobile/>
        </div>
    )   
}                                           
