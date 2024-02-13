// COMPONENTS   
import { Navbar } from "../Components/_0_navbar"
import { HeroSection } from "../Components/_1_heroSection"
import { AboutUs } from "../Components/_2_aboutUs"
import { PracticalApproach } from "../Components/_3_whyChooseUs-1"
import { TailoredForYou } from "../Components/_4_whyChooseUs-2"
import { FocusOnInnovation } from "../Components/_5_whyChooseUs-3"

// CSS
import "./homePage.css"

export const HomePageDesktop = () => {
  return (
    <div id="home-page-desktop-id" className=" bg-[#2A2A2A]">
        <Navbar/>
        <HeroSection/>
        <AboutUs/>
        <PracticalApproach/>
        <TailoredForYou/>
        <FocusOnInnovation/>
    </div>
  )
}
